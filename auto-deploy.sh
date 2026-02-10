#!/bin/bash

echo "🚀 开始自动化部署到 Vercel..."
echo ""

# 检查是否安装了 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误：未安装 Node.js"
    echo "请先安装 Node.js: https://nodejs.org/"
    exit 1
fi

# 检查是否安装了 pnpm
if ! command -v pnpm &> /dev/null; then
    echo "📦 安装 pnpm..."
    npm install -g pnpm
fi

# 安装依赖
echo "📦 安装项目依赖..."
pnpm install

# 检查是否安装了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 安装 Vercel CLI..."
    npm install -g vercel
fi

# 检查是否已登录 Vercel
if [ ! -f ~/.vercel/auth.json ]; then
    echo "🔐 需要登录 Vercel..."
    echo "请按照浏览器提示完成登录"
    vercel login
fi

# 部署项目
echo "🚀 开始部署..."
echo ""
echo "部署过程中会询问一些问题，全部按 Enter 使用默认值即可"
echo ""
read -p "按 Enter 继续..."

vercel --yes

echo ""
echo "✅ 部署完成！"
echo ""
echo "请查看上面的输出，找到你的网站链接"
echo "格式通常是：https://your-project-name.vercel.app"
echo ""
echo "🎉 祝贺！你的网站已经上线了！"
