#!/bin/bash

# 构建Electron应用
echo "🏗️  构建 Electron 应用..."

# 检查是否安装了依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖中..."
    pnpm install
fi

# 构建Next.js应用
echo "📝 构建 Next.js 应用..."
pnpm build

# 构建Electron应用
echo "⚡ 打包 Electron 应用..."
pnpm electron:build

echo "✅ 构建完成！安装包在 dist 目录中"
