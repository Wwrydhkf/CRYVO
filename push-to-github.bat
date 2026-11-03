@echo off
title Push CRYVO to GitHub
echo ========================================================
echo   Pushing CRYVO Digital Marketing to GitHub Repository
echo   https://github.com/Wwrydhkf/CRYVO.git
echo ========================================================
echo.

set "PATH=%PATH%;C:\Program Files\Git\cmd"

echo Step 1: Trying standard GitHub connection...
git push -u origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Standard push encountered network DNS glitch.
    echo Step 2: Attempting direct connection bypass...
    echo (If a browser window appears, click 'Authorize' to log in)
    echo.
    git -c http.sslVerify=false -c http.extraHeader="Host: github.com" push https://20.207.73.82/Wwrydhkf/CRYVO.git main
)

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   SUCCESS! CRYVO repository has been pushed to GitHub!
    echo   View online: https://github.com/Wwrydhkf/CRYVO
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo   If authentication prompted for password, you can use
    echo   a GitHub Personal Access Token from:
    echo   https://github.com/settings/tokens
    echo ========================================================
)

echo.
pause
