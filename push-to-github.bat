@echo off
echo 🚀 推送代码到 GitHub - bluesterar-lab/super-study-robot1.0
echo.

echo 📋 仓库信息：
echo   用户名：bluesterar-lab
echo   仓库名：super-study-robot1.0
echo   地址：https://github.com/bluesterar-lab/super-study-robot1.0
echo.

echo ⚠️  重要提示：
echo   推送时会要求输入 GitHub 用户名和密码
echo   - 用户名：bluesterar-lab
echo   - 密码：使用 GitHub Personal Access Token（不是普通密码）
echo.

echo 📖 如何获取 Token：
echo   1. 访问 https://github.com → Settings
echo   2. Developer settings → Personal access tokens
echo   3. Generate new token → 勾选 repo 权限
echo   4. 复制生成的 Token（只显示一次）
echo.

pause

echo.
echo 🔄 开始推送代码...
echo.

git remote add origin https://github.com/bluesterar-lab/super-study-robot1.0.git
git add .
git commit -m "初始提交 - 快乐学习平台"
git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ✅ 推送成功！
    echo.
    echo 访问你的仓库：https://github.com/bluesterar-lab/super-study-robot1.0
) else (
    echo ❌ 推送失败！
    echo.
    echo 请检查：
    echo   - 用户名是否正确：bluesterar-lab
    echo   - Token 是否正确且未过期
    echo   - 网络连接是否正常
)

echo.
pause
