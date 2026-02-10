# 🚀 在你的电脑上部署 - 完整步骤

## ✅ 已完成的工作

我已经帮你在项目中准备好了所有配置！

## 📋 现在你需要在自己电脑上完成这些步骤：

### 第1步：获取项目代码

**方式 A：如果你有 Git 仓库**
```bash
git clone <你的仓库地址>
cd projects
```

**方式 B：如果代码在这个沙箱中**
需要将 `/workspace/projects` 目录的内容复制到你的电脑

### 第2步：安装依赖

```bash
cd projects
pnpm install
```

### 第3步：安装 Vercel CLI

```bash
npm install -g vercel
```

### 第4步：登录 Vercel

```bash
vercel login
```

这一步会：
1. 打开浏览器
2. 让你选择登录方式（GitHub、GitLab、Bitbucket 或邮箱）
3. 登录后会返回命令行

### 第5步：部署项目

```bash
vercel
```

这一步会问一些问题，全部按 Enter 使用默认值即可：

```
? Set up and deploy "~/projects"? [Y/n] Y
? Which scope do you want to deploy to? [你的用户名]
? Link to existing project? [y/N] N
? What's your project's name? [projects]
? In which directory is your code located? ./
? Want to modify these settings? [y/N] N
```

### 第6步：等待部署

等待 2-3 分钟，会看到：

```
✅ Production: https://your-project-name.vercel.app
```

### 第7步：访问你的网站

打开上面那个网址，就能看到你的快乐学习平台了！🎉

---

## 🔄 如何更新网站？

修改代码后，运行：

```bash
vercel --prod
```

这会部署到生产环境（不是预览环境）。

---

## 📝 完整命令列表

```bash
# 1. 进入项目目录
cd projects

# 2. 安装依赖
pnpm install

# 3. 安装 Vercel CLI
npm install -g vercel

# 4. 登录 Vercel
vercel login

# 5. 部署项目
vercel

# 6. 更新网站（修改代码后）
vercel --prod
```

---

## 💡 提示

- **首次登录**：需要注册 Vercel 账号（免费）
- **部署时间**：首次 3-5 分钟，后续 1-2 分钟
- **完全免费**：个人使用不花钱
- **自动 HTTPS**：不需要配置 SSL 证书

---

## ❓ 遇到问题？

### 问题1：pnpm 命令找不到
```bash
npm install -g pnpm
```

### 问题2：部署时端口被占用
```bash
vercel --yes
```

### 问题3：想要绑定自己的域名
1. 在 Vercel 项目设置中添加域名
2. 按提示配置 DNS

---

## 🎉 现在就去你的电脑上试试吧！

在你的电脑终端执行上面的步骤，5-10 分钟就能让网站上线！

祝你部署成功！🚀
