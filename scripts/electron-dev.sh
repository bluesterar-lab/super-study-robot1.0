#!/bin/bash

# 快速启动Electron应用的开发模式
echo "🚀 启动 Electron 开发模式..."

# 检查是否安装了依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖中..."
    pnpm install
fi

# 启动开发模式
pnpm electron:dev
