# 🖼️ Vercel + GitHub 部署 - 图文教程

## 📱 手机/平板用户看这个，超清晰！

---

## 第 1 步：创建 GitHub 仓库

### 在浏览器操作：

1️⃣ **打开网站**
```
https://github.com/new
```

2️⃣ **填写表单**

- Repository name（仓库名）：`happy-learning-platform`
  - 可以改成你喜欢的名字
  - 只能用英文和数字

- Description（描述）：
  ```
  儿童英语数学语文学习平台
  ```

- Public/Private（公开/私有）：
  - 选 Public（公开）- 免费，任何人都能看到
  - 选 Private（私有）- 免费，只有你能看到

- ⚠️ **不要勾选** "Add a README file"

3️⃣ **点击按钮**
```
Create repository
```

---

## 第 2 步：推送代码

### 在电脑终端/命令行操作：

**复制这两条命令**（记得改用户名）：

```bash
git remote add origin https://github.com/你的用户名/happy-learning-platform.git
git push -u origin main
```

**示例**（如果用户名是 zhangsan）：

```bash
git remote add origin https://github.com/zhangsan/happy-learning-platform.git
git push -u origin main
```

**回车运行！**

---

## 第 3 步：登录 Vercel

### 在浏览器操作：

1️⃣ **打开网站**
```
https://vercel.com
```

2️⃣ **登录**
- 点击右上角 "Login"
- 选择 "Continue with GitHub"
- 授权登录（点击绿色按钮）

---

## 第 4 步：导入项目

### 在 Vercel 网站操作：

1️⃣ **添加项目**
- 点击左上角 "Add New..."
- 点击 "Project"

2️⃣ **选择仓库**
- 在列表中找到你刚才创建的仓库
- 点击 "Import" 按钮

3️⃣ **检查配置**（一般不用改）
- Project Name: 自动显示仓库名
- Framework: Next.js（自动检测）
- Build Command: `pnpm build`（自动填写）
- Output Directory: `.next`（自动填写）

4️⃣ **开始部署**
- 点击 "Deploy" 按钮（蓝色）

---

## 第 5 步：完成！

### 等待部署完成

会看到进度条，显示：
```
Building...
```

1-2 分钟后，变成：
```
✅ Production
https://your-project-name.vercel.app
```

### 访问网站

**点击那个蓝色链接！**

你的网站就上线了！🎉

---

## 🔄 更新网站（超简单）

### 每次修改代码后：

1️⃣ **保存代码**
- 修改任何文件
- Ctrl+S 保存

2️⃣ **推送代码**
```bash
git add .
git commit -m "写了什么修改"
git push
```

**Vercel 会自动重新部署！**

---

## 📸 应该看到的界面

### GitHub 仓库页面
- 顶部有仓库名
- 绿色按钮 "Code"
- 显示 "main" 分支

### Vercel 项目页面
- 顶部有项目名
- 左侧菜单：Overview、Deployments 等
- 显示部署状态：✅ Ready

---

## ❓ 遇到问题？

### 问题 1：git push 失败

**解决方法**：
```bash
# 检查远程仓库
git remote -v

# 重新设置（换成你的地址）
git remote set-url origin https://github.com/你的用户名/happy-learning-platform.git

# 重新推送
git push -u origin main
```

### 问题 2：找不到仓库

**解决方法**：
- 确认 GitHub 仓库名拼写正确
- 确认用户名正确
- 检查是否在项目文件夹内

### 问题 3：部署失败

**解决方法**：
- 在 Vercel 查看部署日志
- 点击失败的部署 → 查看红色错误信息
- 把错误告诉我

---

## 🎉 成功标志

当你看到这个就成功了！

```
✅ Production
https://happy-learning-platform.vercel.app
```

点击链接，打开你的快乐学习平台！🎉

---

## 📞 还是不懂？

没关系！告诉我：

1. 你卡在哪一步？
2. 看到了什么错误？
3. 截图给我（如果可以）

我会帮你解决！💪

---

## 🎊 开始吧！

按照上面的步骤，10 分钟就能搞定！

祝你部署成功！🚀
