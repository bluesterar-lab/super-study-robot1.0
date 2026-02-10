@echo off
echo 🚀 开始自动化部署到 Vercel...
echo.

REM 检查是否安装了 Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ 错误：未安装 Node.js
    echo 请先安装 Node.js: https://nodejs.org/
    pause
    exit /b 1
)

REM 检查是否安装了 pnpm
where pnpm >nul 2>nul
if %errorlevel% neq 0 (
    echo 📦 安装 pnpm...
    call npm install -g pnpm
)

REM 安装依赖
echo 📦 安装项目依赖...
call pnpm install

REM 检查是否安装了 Vercel CLI
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo 📦 安装 Vercel CLI...
    call npm install -g vercel
)

REM 检查是否已登录 Vercel
if not exist "%USERPROFILE%\.vercel\auth.json" (
    echo 🔐 需要登录 Vercel...
    echo 请按照浏览器提示完成登录
    call vercel login
)

REM 部署项目
echo 🚀 开始部署...
echo.
echo 部署过程中会询问一些问题，全部按 Enter 使用默认值即可
echo.
pause

call vercel --yes

echo.
echo ✅ 部署完成！
echo.
echo 请查看上面的输出，找到你的网站链接
echo 格式通常是：https://your-project-name.vercel.app
echo.
echo 🎉 祝贺！你的网站已经上线了！
pause
