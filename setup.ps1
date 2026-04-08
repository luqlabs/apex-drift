# Apex Drift - Setup Script
# Run this script to copy frames and install dependencies

Write-Host "=== APEX DRIFT SETUP ===" -ForegroundColor Cyan
Write-Host ""

# Step 1: Copy animation frames
Write-Host "[1/2] Copying animation frames to public/frames..." -ForegroundColor Yellow

$source = "c:\Lucky punya dataset\web bengkel\3D animation\"
$dest = "c:\Lucky punya dataset\web bengkel\apex-drift\public\frames\"

if (!(Test-Path $dest)) {
    New-Item -ItemType Directory -Path $dest -Force | Out-Null
}

$files = Get-ChildItem -Path $source -Filter "*.jpg"
$count = 0
foreach ($file in $files) {
    Copy-Item -Path $file.FullName -Destination $dest -Force
    $count++
    if ($count % 30 -eq 0) {
        Write-Host "  Copied $count / $($files.Count) frames..." -ForegroundColor Gray
    }
}

Write-Host "[1/2] Done! Copied $count frames." -ForegroundColor Green
Write-Host ""

# Step 2: Install npm dependencies
Write-Host "[2/2] Installing npm dependencies..." -ForegroundColor Yellow
Set-Location "c:\Lucky punya dataset\web bengkel\apex-drift"
npm install

Write-Host ""
Write-Host "=== SETUP COMPLETE ===" -ForegroundColor Green
Write-Host ""
Write-Host "To start the development server, run:" -ForegroundColor Cyan
Write-Host "  cd 'c:\Lucky punya dataset\web bengkel\apex-drift'" -ForegroundColor White
Write-Host "  npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Then open: http://localhost:3000" -ForegroundColor Cyan
