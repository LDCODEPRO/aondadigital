Add-Type -AssemblyName System.Drawing
$srcPath = "E:\01_Apps_Web\aonda\public\brand\logo-reduzido.png"
$outPath = "E:\01_Apps_Web\aonda\public\brand\logo-reduzido-transparente.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
$bg = $bmp.GetPixel(0, 0)
$bmp.MakeTransparent($bg)
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "DONE"
