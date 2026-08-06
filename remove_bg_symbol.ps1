Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\conta\.gemini\antigravity-ide\brain\952889d8-008e-4139-9c6b-b24f83789a59\media__1785983213375.jpg"
$outPath = "E:\01_Apps_Web\aonda\public\brand\aonda-simbolo-sem-fundo.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$bmp = New-Object System.Drawing.Bitmap($src.Width, $src.Height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($src, 0, 0)
$g.Dispose()
$src.Dispose()

for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $px = $bmp.GetPixel($x, $y)
        if ($px.R -gt 230 -and $px.G -gt 230 -and $px.B -gt 230) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $px.R, $px.G, $px.B))
        }
    }
}
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "OK_TRANSPARENT"
