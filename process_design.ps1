Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\conta\Downloads\Design sem nome.png"
$outPath = "E:\01_Apps_Web\aonda\public\brand\aonda-rodape-design.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$bmp = New-Object System.Drawing.Bitmap($src.Width, $src.Height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($src, 0, 0)
$g.Dispose()
$src.Dispose()

$bg = $bmp.GetPixel(0, 0)
for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $px = $bmp.GetPixel($x, $y)
        $diff = [Math]::Abs([int]$px.R - [int]$bg.R) + [Math]::Abs([int]$px.G - [int]$bg.G) + [Math]::Abs([int]$px.B - [int]$bg.B)
        if ($diff -lt 50) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $px.R, $px.G, $px.B))
        }
    }
}
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "DESIGN_TRANSPARENT_OK"
