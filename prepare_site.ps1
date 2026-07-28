New-Item -ItemType Directory -Path "site_root" -Force
Copy-Item -Path "rainbowit.net\html\trydo\*" -Destination "site_root" -Recurse -Force
Write-Host "Site root prepared."
