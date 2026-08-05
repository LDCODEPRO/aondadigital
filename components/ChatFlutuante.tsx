export default function ChatFlutuante() {
  return (
    <>
      <div className="wa-chat" id="waChat" aria-hidden="true">
        <div className="wa-chat-head">
          <span className="wa-avatar">
            <img src="/brand/chat-avatar.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }} />
          </span>
          <div className="wa-id">
            <b>A Onda</b>
            <span><i className="wa-on" /> online agora</span>
          </div>
          <button className="wa-x" id="waClose" aria-label="Fechar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="wa-body" id="waBody">
          <div className="wa-day">Hoje</div>
          <div className="wa-msg in">
            <p>Olá! 👋 Aqui é da <b>A Onda</b>.</p>
            <span className="wa-time">agora</span>
          </div>
          <div className="wa-msg in">
            <p>Antes da gente começar, qual é o seu nome?</p>
            <span className="wa-time">agora</span>
          </div>
        </div>
        <div className="wa-quick" id="waQuick" style={{ display: "none" }} />
        <form className="wa-input" id="waForm">
          <input type="text" id="waText" placeholder="Escreva sua mensagem..." autoComplete="off" />
          <button type="submit" aria-label="Enviar">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5 21 12 3 3.5 3 10l13 2-13 2z" />
            </svg>
          </button>
        </form>
      </div>
      <button className="wa-float" id="waFloat" aria-label="Abrir chat de atendimento">
        <span className="ping" />
        <svg className="wa-ic-chat" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.2 1.3-2 1.4-.5.1-1.2.2-3.6-.8-3-1.3-5-4.4-5.1-4.6-.2-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l2 1c.3.1.4.2.5.3.1.3.1.7-.1 1.2z" />
        </svg>
        <svg className="wa-ic-close" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.4}>
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </>
  );
}
