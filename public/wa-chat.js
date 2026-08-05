(function () {
  "use strict";

  var fab = document.getElementById("waFloat");
  var chat = document.getElementById("waChat");
  var body = document.getElementById("waBody");
  var form = document.getElementById("waForm");
  var input = document.getElementById("waText");
  var quick = document.getElementById("waQuick");
  var closeBtn = document.getElementById("waClose");
  if (!fab || !chat) return;

  /* ===== arrastar o botão ===== */
  var FAB = 60, M = 12, dragging = false, moved = false, sx, sy, ox, oy;
  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
  function placeFab(left, top) {
    left = clamp(left, M, window.innerWidth - FAB - M);
    top = clamp(top, M, window.innerHeight - FAB - M);
    fab.style.left = left + "px";
    fab.style.top = top + "px";
    fab.style.right = "auto";
    fab.style.bottom = "auto";
    positionChat();
  }
  try {
    var savedPos = JSON.parse(localStorage.getItem("aonda_wa_pos") || "null");
    if (savedPos && typeof savedPos.left === "number") placeFab(savedPos.left, savedPos.top);
  } catch (e) {}

  fab.addEventListener("pointerdown", function (e) {
    dragging = true; moved = false;
    var r = fab.getBoundingClientRect();
    sx = e.clientX; sy = e.clientY; ox = r.left; oy = r.top;
    fab.setPointerCapture(e.pointerId);
  });
  fab.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    var dx = e.clientX - sx, dy = e.clientY - sy;
    if (!moved && Math.abs(dx) + Math.abs(dy) > 5) { moved = true; fab.classList.add("dragging"); }
    if (moved) placeFab(ox + dx, oy + dy);
  });
  function endDrag() {
    if (!dragging) return;
    dragging = false;
    fab.classList.remove("dragging");
    if (moved) {
      var r = fab.getBoundingClientRect();
      try { localStorage.setItem("aonda_wa_pos", JSON.stringify({ left: r.left, top: r.top })); } catch (e2) {}
    }
  }
  fab.addEventListener("pointerup", function (e) {
    var wasMoved = moved;
    endDrag();
    if (!wasMoved) toggle();
  });
  fab.addEventListener("pointercancel", endDrag);
  window.addEventListener("resize", function () {
    var r = fab.getBoundingClientRect();
    if (fab.style.left) placeFab(r.left, r.top);
    positionChat();
  });

  function positionChat() {
    if (window.innerWidth <= 480) { chat.style.left = chat.style.top = chat.style.right = chat.style.bottom = ""; return; }
    var r = fab.getBoundingClientRect();
    var cw = chat.offsetWidth || 360, chh = chat.offsetHeight || 520;
    var center = r.left + r.width / 2;
    var left = (center > window.innerWidth / 2) ? (r.right - cw) : r.left;
    left = clamp(left, M, window.innerWidth - cw - M);
    var top = r.top - chh - 12;
    if (top < M) top = Math.min(r.bottom + 12, window.innerHeight - chh - M);
    top = clamp(top, M, window.innerHeight - chh - M);
    chat.style.left = left + "px";
    chat.style.top = top + "px";
    chat.style.right = "auto";
    chat.style.bottom = "auto";
  }

  function open() {
    chat.classList.add("open"); fab.classList.add("open");
    chat.setAttribute("aria-hidden", "false");
    positionChat();
    setTimeout(function () { input.focus(); }, 300);
    body.scrollTop = body.scrollHeight;
  }
  function close() {
    chat.classList.remove("open"); fab.classList.remove("open");
    chat.setAttribute("aria-hidden", "true");
  }
  function toggle() { chat.classList.contains("open") ? close() : open(); }
  closeBtn.addEventListener("click", close);

  function nowTime() {
    var d = new Date();
    return ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
  }
  function addMsg(html, dir) {
    var m = document.createElement("div");
    m.className = "wa-msg " + dir;
    m.innerHTML = "<p>" + html + "</p><span class=\"wa-time\">" + nowTime() + "</span>";
    body.appendChild(m);
    body.scrollTop = body.scrollHeight;
    return m;
  }
  function escapeHtml(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function setQuick(options) {
    quick.innerHTML = "";
    (options || []).forEach(function (o) {
      var b = document.createElement("button");
      b.textContent = o;
      quick.appendChild(b);
    });
    quick.style.display = (options && options.length) ? "" : "none";
  }

  var typingEl = null;
  function showTyping() {
    if (typingEl) return;
    typingEl = document.createElement("div");
    typingEl.className = "wa-typing";
    typingEl.innerHTML = "<i></i><i></i><i></i>";
    body.appendChild(typingEl);
    body.scrollTop = body.scrollHeight;
  }
  function hideTyping() { if (typingEl) { typingEl.remove(); typingEl = null; } }

  /* ===== espelho pro painel do LDCODE (so mensagens REAIS do visitante) =====
     Mesmo backend socket.io usado pelo painel-chat.html do Diretor. Manda so o
     que a pessoa de fato escreveu -- nunca as respostas da IA -- pra nao criar
     confusao no painel. Se o Diretor responder por la, a mensagem chega aqui
     como 'visitor:message' e entra na conversa como se fosse a IA (in). */
  var sessionId;
  try { sessionId = localStorage.getItem("aonda_chat_sid"); } catch (e) {}
  if (!sessionId) {
    sessionId = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    try { localStorage.setItem("aonda_chat_sid", sessionId); } catch (e) {}
  }
  var painelSocket = null;
  var painelJoined = false;
  function painel() {
    if (painelSocket || typeof io === "undefined") return painelSocket;
    painelSocket = io("https://ldcode.onrender.com", { transports: ["websocket", "polling"] });
    painelSocket.on("connect", function () {
      painelSocket.emit("visitor:join", { sessionId: sessionId });
      painelJoined = true;
    });
    painelSocket.on("visitor:message", function (m) {
      if (m && m.from === "admin" && m.text) addMsg(escapeHtml(m.text).replace(/\n/g, "<br>"), "in");
    });
    return painelSocket;
  }
  function ecoaParaPainel(texto) {
    try {
      var s = painel();
      if (!s) return;
      if (s.connected && painelJoined) s.emit("visitor:message", { text: texto });
      else s.once && s.once("connect", function () { s.emit("visitor:join", { sessionId: sessionId }); s.emit("visitor:message", { text: texto }); });
    } catch (e) {}
  }

  /* histórico curto em memória, pra IA manter contexto na conversa */
  var historico = [];

  function handle(text) {
    text = (text || "").trim();
    if (!text) return;
    addMsg(escapeHtml(text), "out");
    input.value = "";
    setQuick([]);
    historico.push({ role: "user", text: text });
    ecoaParaPainel(text);
    showTyping();

    fetch("/api/chat/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text, persona: "aonda", history: historico.slice(-8) }),
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        hideTyping();
        var resposta = (data && data.reply) || "Não consegui responder agora. Tenta de novo em instantes.";
        historico.push({ role: "assistant", text: resposta });
        /* divide a resposta em varias "mensagens" curtas (paragrafo = bolha),
           cada uma aparecendo com uma pequena pausa, tipo alguem digitando de verdade */
        var partes = resposta.split(/\n\s*\n/).map(function (p) { return p.trim(); }).filter(Boolean);
        if (!partes.length) partes = [resposta];
        var i = 0;
        function proxima() {
          if (i > 0) showTyping();
          var atraso = i === 0 ? 0 : Math.min(1800, 400 + partes[i].length * 12);
          setTimeout(function () {
            hideTyping();
            addMsg(escapeHtml(partes[i]).replace(/\n/g, "<br>"), "in");
            i++;
            if (i < partes.length) proxima();
          }, atraso);
        }
        proxima();
      })
      .catch(function () {
        hideTyping();
        addMsg("Não consegui responder agora. Tenta de novo em instantes.", "in");
      });
  }

  form.addEventListener("submit", function (e) { e.preventDefault(); handle(input.value); });
  quick.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    handle(b.textContent);
  });
})();
