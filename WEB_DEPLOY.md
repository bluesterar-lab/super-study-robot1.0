# 🌐 部署到网页 - 最简单的方法

## 🚀 方式一：Vercel 部署（推荐，最简单！）

Vercel 是 Next.js 官方推荐的部署平台，**完全免费，一键部署**！

### 步骤 1：注册 Vercel 账号

1. 访问 [https://vercel.com](https://vercel.com)
2. 点击 "Sign Up" 注册账号
3. 可以使用 GitHub、GitLab 或 Bitbucket 账号登录

### 步骤 2：准备代码

如果你有 Git 仓库：

```bash
# 提交代码到 Git
cd /workspace/projects
git init
git add .
git commit -m "部署到网页"
git push origin main  # 推送到你的远程仓库
```

### 步骤 3：在 Vercel 导入项目

1. 登录 Vercel 后，点击 "Add New..." → "Project"
2. 选择你的 Git 仓库
3. 点击 "Import"
4. 点击 "Deploy" 按钮
5. **等待 2-3 分钟，部署完成！**

### 步骤 4：访问你的网站

部署成功后，Vercel 会给你一个链接：
- 格式：`https://your-project-name.vercel.app`

**就这么简单！** 🎉

---

## 🔗 方式二：Netlify 部署（也很简单）

Netlify 也是一个很好的免费托管平台。

### 步骤 1：注册 Netlify

1. 访问 [https://netlify.com](https://netlify.com)
2. 注册账号（支持 GitHub、GitLab、Bitbucket）

### 步骤 2：构建项目

在项目目录执行：

```bash
cd /workspace/projects

# 构建项目
pnpm build

# 生成的文件在 .next 目录
```

### 步骤 3：部署到 Netlify

**方法 A：拖拽部署（最简单）**

1. 访问 [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. 将整个项目文件夹拖拽到网页上
3. 等待上传和部署完成

**方法 B：Git 集成**

1. 在 Netlify 点击 "Add new site" → "Import from Git"
2. 连接你的 Git 仓库
3. 配置构建设置：
   - Build command: `pnpm build`
   - Publish directory: `.next`
4. 点击 "Deploy site"

---

## 📦 方式三：GitHub Pages（完全免费）

### 步骤 1：准备构建脚本

创建 `package.json` 中的脚本：

```json
{
  "scripts": {
    "export": "next build"
  }
}
```

### 步骤 2：构建项目

```bash
cd /workspace/projects
pnpm build
```

### 步骤 3：使用 GitHub Pages

如果你有 GitHub 仓库：

1. 进入仓库设置页面
2. 点击 "Pages"
3. 在 "Build and deployment" 中选择：
   - Source: Deploy from a branch
   - Branch: main
4. 保存

---

## ⚡ 最快速的方法（不需要 Git）

### 使用 Vercel CLI（5分钟搞定）

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 在项目目录运行
cd /workspace/projects

# 3. 登录 Vercel
vercel login

# 4. 部署
vercel

# 5. 选择默认设置（一直按 Enter）
# 6. 等待部署完成
```

**部署成功后会给你一个链接，点击就可以访问！**

---

## 🎯 推荐使用 Vercel

**为什么推荐 Vercel？**

✅ **完全免费** - 个人使用不花钱
✅ **一键部署** - 不需要配置
✅ **自动 HTTPS** - 自动配置 SSL 证书
✅ **全球 CDN** - 访问速度快
✅ **自动更新** - 代码推送后自动重新部署
✅ **域名绑定** - 可以绑定自己的域名

---

## 📝 部署后的管理

### 查看部署状态

- Vercel: 登录后进入你的项目，可以查看部署日志
- Netlify: 同样可以在控制台查看

### 重新部署

**Vercel**: 推送代码到 Git，自动重新部署

```bash
git add .
git commit -m "更新"
git push
```

**Netlify**: 同样推送代码即可

### 自定义域名

1. 在 Vercel/Netlify 项目设置中
2. 找到 "Domains" 或 "Custom domains"
3. 添加你的域名
4. 按提示配置 DNS

---

## ❓ 常见问题

### Q1: 部署失败怎么办？

**A**: 检查以下几点：
- 确保 `package.json` 中的依赖都已安装
- 检查构建命令是否正确：`pnpm build`
- 查看 Vercel/Netlify 的部署日志

### Q2: 如何更新网站？

**A**: 简单两步：
```bash
# 1. 修改代码
git add .
git commit -m "更新"
git push

# 2. 等待自动部署完成（2-3分钟）
```

### Q3: 部署后图片不显示？

**A**: 确保 `next.config.ts` 中配置了图片域名：
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'lf-coze-web-cdn.coze.cn',
      pathname: '/**',
    },
  ],
}
```

---

## 🎉 开始部署吧！

选择一个方法，5分钟就能让你的网站上线！

**推荐步骤**：
1. 注册 [Vercel](https://vercel.com)
2. 连接你的 Git 仓库
3. 点击 Deploy
4. 完成！

有任何问题，查看部署日志即可找到原因。祝你部署成功！🚀
