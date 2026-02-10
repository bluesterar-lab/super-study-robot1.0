# 快乐学习平台 - 本地部署指南

本项目是一个基于 Next.js + Electron 的儿童学习平台，可以打包成桌面应用在本地运行。

## 📋 目录

- [系统要求](#系统要求)
- [快速开始](#快速开始)
- [开发模式](#开发模式)
- [构建应用](#构建应用)
- [安装使用](#安装使用)
- [常见问题](#常见问题)

## 💻 系统要求

### 开发环境
- Node.js 18.0 或更高版本
- pnpm 9.0.0 或更高版本
- Git（可选，用于克隆代码）

### 运行环境
- Windows 10/11 (64位)
- macOS 10.15+ (Intel 或 Apple Silicon)
- Linux (主流发行版)

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone <your-repository-url>
cd projects
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 运行开发模式

```bash
# 使用脚本快速启动
pnpm electron:dev

# 或手动启动（分两步）
pnpm next dev        # 启动Next.js开发服务器
pnpm electron .      # 启动Electron窗口
```

应用会自动打开一个窗口，运行在 `http://localhost:5000`

## 🛠️ 开发模式

在开发模式下，您可以：

- 实时查看代码修改效果（热重载）
- 使用 Chrome 开发者工具调试
- 测试所有功能

### 开发命令

```bash
# 启动开发模式
pnpm electron:dev

# 仅启动Next.js开发服务器（浏览器访问）
pnpm dev

# 仅启动Electron（需要先运行 pnpm dev）
pnpm electron .
```

## 📦 构建应用

构建过程会生成可分发的安装包，供用户直接安装使用。

### 构建步骤

1. **安装依赖**（首次构建）
   ```bash
   pnpm install
   ```

2. **构建应用**
   ```bash
   # 使用构建脚本
   bash scripts/electron-build.sh

   # 或直接使用npm命令
   pnpm electron:build
   ```

3. **查看输出**
   构建完成后，安装包会生成在 `dist` 目录中：
   - Windows: `dist/快乐学习平台 Setup x.x.x.exe`
   - macOS: `dist/快乐学习平台-x.x.x.dmg`
   - Linux: `dist/快乐学习平台-x.x.x.AppImage`

### 构建配置

应用配置支持多平台构建，默认配置如下：

#### Windows
- 格式：NSIS 安装包
- 架构：x64
- 输出：`.exe` 安装程序

#### macOS
- 格式：DMG 镜像
- 架构：x64 + arm64 (通用)
- 输出：`.dmg` 磁盘映像

#### Linux
- 格式：AppImage
- 架构：x64
- 输出：`.AppImage` 可执行文件

## 💿 安装使用

### Windows 安装

1. 下载 `快乐学习平台 Setup x.x.x.exe`
2. 双击运行安装程序
3. 按照安装向导完成安装
4. 从开始菜单启动应用

### macOS 安装

1. 下载 `快乐学习平台-x.x.x.dmg`
2. 双击打开 DMG 镜像
3. 将应用拖拽到 Applications 文件夹
4. 在启动台中打开应用
5. 如遇到安全提示，右键点击选择"打开"

### Linux 安装

1. 下载 `快乐学习平台-x.x.x.AppImage`
2. 添加执行权限：
   ```bash
   chmod +x 快乐学习平台-x.x.x.AppImage
   ```
3. 双击运行或通过命令行启动：
   ```bash
   ./快乐学习平台-x.x.x.AppImage
   ```

## 🔧 高级配置

### 自定义应用名称

编辑 `package.json` 中的以下字段：

```json
{
  "name": "your-app-name",
  "productName": "Your App Display Name",
  "build": {
    "appId": "com.yourcompany.app",
    "productName": "Your App Display Name"
  }
}
```

### 自定义应用图标

将图标文件放在 `public` 目录下，并更新 `electron/main.js` 和 `package.json` 中的图标路径：

- Windows: `public/icon.ico` (256x256)
- macOS: `public/icon.icns` (1024x1024)
- Linux: `public/icon.png` (512x512)

### 调整窗口大小

编辑 `electron/main.js` 中的 `BrowserWindow` 配置：

```javascript
mainWindow = new BrowserWindow({
  width: 1280,
  height: 800,
  minWidth: 1024,
  minHeight: 768,
  // ...
});
```

### 禁用开发者工具（生产环境）

编辑 `electron/main.js`，注释掉以下代码：

```javascript
// mainWindow.webContents.openDevTools();
```

## ❓ 常见问题

### 1. 安装依赖失败

**问题**：运行 `pnpm install` 时报错

**解决方案**：
```bash
# 清理缓存并重新安装
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### 2. 构建时出现内存不足

**问题**：构建过程中出现内存溢出错误

**解决方案**：
```bash
# 增加 Node.js 内存限制
NODE_OPTIONS="--max-old-space-size=4096" pnpm electron:build
```

### 3. 应用启动白屏

**问题**：双击启动应用后显示空白页面

**解决方案**：
- 检查 `next.config.ts` 中的 `distDir` 配置是否正确
- 确保 `out` 目录中有 `index.html` 文件
- 尝试使用开发者工具查看错误信息

### 4. macOS 安装后无法打开

**问题**：macOS 提示"应用已损坏"

**解决方案**：
```bash
# 移除隔离属性
xattr -cr /Applications/快乐学习平台.app
```

### 5. 开发模式下热更新不生效

**问题**：修改代码后页面没有自动刷新

**解决方案**：
- 确保 Next.js 开发服务器正在运行
- 重启 Electron 应用
- 检查控制台是否有错误信息

## 📝 技术栈

- **前端框架**: Next.js 16 (App Router)
- **UI组件**: React 19 + shadcn/ui
- **桌面框架**: Electron
- **样式**: Tailwind CSS 4
- **语言**: TypeScript 5
- **包管理**: pnpm

## 📄 许可证

本项目仅供学习和个人使用。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📮 联系方式

如有问题，请通过 GitHub Issues 联系我们。
