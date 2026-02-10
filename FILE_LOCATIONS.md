# 📁 文件位置说明

## 🎯 你要找的所有文件都在这里！

### 📂 项目根目录：`/workspace/projects/`

```
/workspace/projects/
│
├── 📄 文档文件（你可以查看的说明）
│   ├── ELECTRON_DEPLOY.md              # 详细部署文档
│   ├── ELECTRON_INTEGRATION_SUMMARY.md # 集成总结
│   ├── QUICKSTART_ELECTRON.md          # 快速开始指南
│   └── public/ICON_README.md           # 图标制作说明
│
├── 📁 Electron 核心文件（桌面应用的核心）
│   └── electron/
│       ├── main.js                     # 主进程（启动应用的文件）
│       └── preload.js                  # 预加载脚本
│
├── 📁 脚本文件（启动和构建）
│   └── scripts/
│       ├── electron-dev.sh             # 开发模式启动脚本
│       └── electron-build.sh           # 构建安装包脚本
│
├── 📁 源代码（你的应用代码）
│   └── src/                            # Next.js 源代码
│
├── 📁 构建输出（自动生成）
│   ├── out/                            # Next.js 静态导出
│   └── dist/                           # 最终安装包（构建后出现）
│
└── 📄 配置文件
    ├── package.json                    # 项目配置（包含Electron命令）
    ├── next.config.ts                  # Next.js 配置
    └── tsconfig.json                   # TypeScript 配置
```

## 🚀 如何启动应用

### 方式一：开发模式（推荐）

```bash
# 在项目根目录执行
cd /workspace/projects

# 启动应用（会自动打开窗口）
pnpm electron:dev
```

**效果**：
- 自动启动 Next.js 开发服务器
- 自动打开 Electron 窗口
- 代码修改会自动刷新

### 方式二：使用脚本

```bash
cd /workspace/projects
bash scripts/electron-dev.sh
```

## 📦 如何构建安装包

```bash
cd /workspace/projects
pnpm electron:build
```

**构建后的位置**：
- Windows: `/workspace/projects/dist/快乐学习平台 Setup x.x.x.exe`
- macOS: `/workspace/projects/dist/快乐学习平台-x.x.x.dmg`
- Linux: `/workspace/projects/dist/快乐学习平台-x.x.x.AppImage`

## 📖 查看文档

```bash
cd /workspace/projects

# 查看详细部署文档
cat ELECTRON_DEPLOY.md

# 查看快速开始指南
cat QUICKSTART_ELECTRON.md

# 查看集成总结
cat ELECTRON_INTEGRATION_SUMMARY.md
```

## 🔍 快速定位文件

### 想修改应用配置？
→ 编辑 `package.json`

### 想修改窗口大小？
→ 编辑 `electron/main.js`

### 想修改应用代码？
→ 编辑 `src/` 目录下的文件

### 想查看构建输出？
→ 查看 `dist/` 目录

### 想查看静态导出？
→ 查看 `out/` 目录

## 💡 提示

1. **首次使用**：先运行 `pnpm install` 安装依赖
2. **开发调试**：使用 `pnpm electron:dev`
3. **打包发布**：使用 `pnpm electron:build`
4. **查看帮助**：阅读 `QUICKSTART_ELECTRON.md`

## 🎯 快速测试

现在就试试启动应用：

```bash
cd /workspace/projects
pnpm electron:dev
```

等待几秒钟，应用窗口就会自动打开！
