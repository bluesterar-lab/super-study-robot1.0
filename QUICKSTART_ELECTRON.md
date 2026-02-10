# 🚀 快速开始 - Electron 本地应用

这是一个快速开始指南，帮助你快速将快乐学习平台打包成桌面应用。

## 📦 前置准备

确保你已经安装了：
- **Node.js** (v18.0+)：[下载地址](https://nodejs.org/)
- **pnpm** (v9.0+)：通过 npm 安装 `npm install -g pnpm`

## ⚡ 3分钟快速启动

### 方式一：开发模式运行（推荐测试）

```bash
# 1. 进入项目目录
cd /workspace/projects

# 2. 安装依赖（首次运行）
pnpm install

# 3. 启动应用（开发模式）
pnpm electron:dev
```

应用会自动打开窗口，你可以实时查看修改效果。

### 方式二：构建安装包（用于分发）

```bash
# 1. 进入项目目录
cd /workspace/projects

# 2. 安装依赖（首次运行）
pnpm install

# 3. 构建应用（需要几分钟）
pnpm electron:build

# 4. 安装包位置
# Windows: dist/快乐学习平台 Setup x.x.x.exe
# macOS: dist/快乐学习平台-x.x.x.dmg
# Linux: dist/快乐学习平台-x.x.x.AppImage
```

## 🎯 常用命令

```bash
# 开发模式
pnpm electron:dev           # 启动完整开发环境
pnpm dev                    # 仅启动Next.js开发服务器（浏览器访问）
pnpm electron .             # 仅启动Electron窗口

# 构建应用
pnpm electron:build         # 构建完整安装包
pnpm electron:pack          # 构建但不打包（用于测试）

# 其他
pnpm build                  # 仅构建Next.js
pnpm start                  # 启动生产版本
```

## 📂 项目结构

```
projects/
├── electron/               # Electron 主进程文件
│   ├── main.js            # 主进程入口
│   └── preload.js         # 预加载脚本
├── public/                # 静态资源
│   ├── icon.ico          # Windows 图标（待添加）
│   ├── icon.icns         # macOS 图标（待添加）
│   └── icon.png          # Linux 图标（待添加）
├── src/                   # Next.js 源代码
├── dist/                  # 构建输出目录（自动生成）
├── out/                   # Next.js 静态导出目录（自动生成）
└── ELECTRON_DEPLOY.md     # 详细部署文档
```

## 🔧 自定义配置

### 修改应用名称

编辑 `package.json`：
```json
{
  "productName": "你的应用名称",
  "build": {
    "appId": "com.yourcompany.app",
    "productName": "你的应用名称"
  }
}
```

### 调整窗口大小

编辑 `electron/main.js`：
```javascript
mainWindow = new BrowserWindow({
  width: 1280,    // 修改窗口宽度
  height: 800,    // 修改窗口高度
  // ...
});
```

### 添加应用图标

将图标文件放在 `public` 目录：
- Windows: `icon.ico` (256x256)
- macOS: `icon.icns` (1024x1024)
- Linux: `icon.png` (512x512)

详见 `public/ICON_README.md`

## ❓ 遇到问题？

### 依赖安装失败
```bash
# 清理缓存重试
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### 构建时内存不足
```bash
# 增加内存限制
NODE_OPTIONS="--max-old-space-size=4096" pnpm electron:build
```

### 应用白屏
- 检查 `next.config.ts` 配置
- 确保 `out` 目录存在且有 `index.html`
- 查看开发者工具错误信息

## 📖 更多信息

- 详细部署文档：[ELECTRON_DEPLOY.md](./ELECTRON_DEPLOY.md)
- Electron 官方文档：[https://www.electronjs.org/docs](https://www.electronjs.org/docs)
- Next.js 官方文档：[https://nextjs.org/docs](https://nextjs.org/docs)

## 🎉 开始使用

现在你可以开始开发了！修改 `src` 目录下的文件，Electron 应用会自动更新。

祝你使用愉快！🚀
