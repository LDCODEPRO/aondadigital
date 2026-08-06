Add-Type -AssemblyName System.Drawing
$srcPath = "E:\01_Apps_Web\aonda\public\brand\logo-reduzido.png"
$outPath = "E:\01_Apps_Web\aonda\public\brand\logo-reduzido-transparente.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
$bg = $bmp.GetPixel(0, 0)
for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $px = $bmp.GetPixel($x, $y)
        $diff = [Math]::Abs([int]$px.R - [int]$bg.R) + [Math]::Abs([int]$px.G - [int]$bg.G) + [Math]::Abs([int]$px.B - [int]$bg.B)
        if ($diff -lt 85) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $px.R, $px.G, $px.B))
        }
    }
}
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "TRANSPARENT_CLEAN_OK"
