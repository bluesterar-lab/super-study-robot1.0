# ⚡ 5分钟部署网站 - 超简单版

## 方法一：使用 Vercel CLI（最简单！）

### 第1步：安装 Vercel
```bash
npm install -g vercel
```

### 第2步：登录
```bash
vercel login
```
会打开浏览器，用 GitHub、GitLab 等账号登录即可

### 第3步：部署
```bash
cd /workspace/projects
vercel
```

### 第4步：按 Enter 键
一路按 Enter 使用默认配置

### 第5步：完成！
等待几分钟，会给你一个网址：
```
https://your-project-name.vercel.app
```

**打开这个网址就能看到你的网站了！** 🎉

---

## 方法二：拖拽部署（不需要 Git）

### Netlify 拖拽部署

1. 访问：https://app.netlify.com/drop
2. 把 `/workspace/projects` 整个文件夹拖进去
3. 等待上传和部署完成
4. 完成！会给你一个网址

---

## 方法三：使用 Git（推荐用于长期维护）

### 1. 创建 GitHub 仓库
- 去 https://github.com 创建新仓库
- 复制仓库地址

### 2. 推送代码
```bash
cd /workspace/projects
git init
git add .
git commit -m "首次部署"
git remote add origin 你的仓库地址
git push -u origin main
```

### 3. 在 Vercel 导入
1. 访问 https://vercel.com
2. 登录后点击 "Add New" → "Project"
3. 选择你的 GitHub 仓库
4. 点击 "Deploy"
5. 完成！

---

## 🎯 我推荐用方法一（Vercel CLI）

**优点**：
- 最快（5分钟搞定）
- 最简单（只需几个命令）
- 不需要 Git 仓库
- 完全免费

**缺点**：
- 每次更新需要手动运行 `vercel` 命令

---

## 🔄 如何更新网站？

### 如果用 Vercel CLI：
```bash
cd /workspace/projects
vercel --prod
```

### 如果用 Git：
```bash
git add .
git commit -m "更新"
git push
# 会自动部署
```

---

## 💡 提示

- **首次部署**：需要 3-5 分钟
- **更新部署**：需要 1-2 分钟
- **完全免费**：Vercel 和 Netlify 都免费
- **自动 HTTPS**：不需要自己配置证书

---

## 🎉 现在就开始吧！

选择一个方法，马上就能让你的网站上线！

**推荐命令**：
```bash
cd /workspace/projects
vercel
```

就这么简单！🚀
