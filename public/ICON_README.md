# Electron 应用图标说明

本目录需要放置应用的图标文件，用于在打包后的桌面应用中显示。

## 图标要求

### Windows (icon.ico)
- 格式：ICO
- 尺寸：256x256 像素（包含多种尺寸：16x16, 32x32, 48x48, 256x256）
- 放置位置：`public/icon.ico`
- 转换工具：可以使用在线工具或 ImageMagick

### macOS (icon.icns)
- 格式：ICNS
- 尺寸：1024x1024 像素（包含多种尺寸）
- 放置位置：`public/icon.icns`
- 创建方法：使用 iconutil 或在线工具

### Linux (icon.png)
- 格式：PNG
- 尺寸：512x512 像素
- 放置位置：`public/icon.png`

## 创建图标

### 使用在线工具

1. 访问 [CloudConvert](https://cloudconvert.com/) 或类似网站
2. 上传 PNG 图像
3. 转换为 ICO/ICNS 格式
4. 下载并放到 `public` 目录

### 使用命令行工具

**macOS/Linux**：
```bash
# 使用 ImageMagick 转换 PNG 到 ICO
convert icon.png -resize 256x256 icon.ico

# macOS 上创建 ICNS
mkdir icon.iconset
sips -z 16 16 icon.png --out icon.iconset/icon_16x16.png
sips -z 32 32 icon.png --out icon.iconset/icon_16x16@2x.png
sips -z 32 32 icon.png --out icon.iconset/icon_32x32.png
sips -z 64 64 icon.png --out icon.iconset/icon_32x32@2x.png
sips -z 128 128 icon.png --out icon.iconset/icon_128x128.png
sips -z 256 256 icon.png --out icon.iconset/icon_128x128@2x.png
sips -z 256 256 icon.png --out icon.iconset/icon_256x256.png
sips -z 512 512 icon.png --out icon.iconset/icon_256x256@2x.png
sips -z 512 512 icon.png --out icon.iconset/icon_512x512.png
sips -z 1024 1024 icon.png --out icon.iconset/icon_512x512@2x.png
iconutil -c icns icon.iconset
```

## 临时解决方案

如果没有自定义图标，可以暂时使用 Next.js 默认的 favicon.ico：

1. 将 `public/favicon.ico` 复制为 `public/icon.ico`
2. 对于其他平台，可以使用相同的文件作为占位符

## 注意事项

- 确保图标具有透明背景（PNG 格式）
- 图标应清晰可辨，尺寸适中
- 建议使用品牌相关的颜色和设计
- 确保图标在不同深色/浅色背景下都清晰可见
