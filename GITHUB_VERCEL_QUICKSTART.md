# ⚡ Vercel + GitHub 快速部署（5步搞定）

## 🎯 5 个简单步骤

### 1️⃣ 创建 GitHub 仓库
1. 访问 https://github.com/new
2. 填写仓库名（如：happy-learning）
3. 点击 "Create repository"

---

### 2️⃣ 推送代码到 GitHub
在你的项目文件夹运行：

```bash
git remote add origin https://github.com/你的用户名/happy-learning.git
git branch -M main
git push -u origin main
```

**记得把 `你的用户名` 改成你自己的！**

---

### 3️⃣ 登录 Vercel
1. 访问 https://vercel.com
2. 用 GitHub 账号登录

---

### 4️⃣ 导入项目
1. 点击 "Add New" → "Project"
2. 选择你的 GitHub 仓库
3. 点击 "Import" → "Deploy"

---

### 5️⃣ 完成！
等待 1-2 分钟，看到链接就成功了！
```
https://你的项目名.vercel.app
```

---

## 🎉 更新网站超简单！

```bash
git add .
git commit -m "更新内容"
git push
```

**就这么简单！Vercel 会自动重新部署！**

---

## 💡 提示

- **完全免费** - 不需要花钱
- **自动部署** - 代码推送后自动更新
- **版本控制** - 可以随时回滚
- **最专业** - 大公司都用这种方式

---

## 📝 需要详细说明？

查看 `GITHUB_VERCEL_DEPLOY.md` 获取完整指南！

---

## 🚀 现在就开始吧！

10 分钟就能让网站上线！🎉
