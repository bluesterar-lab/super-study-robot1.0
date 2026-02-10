# 🔑 如何获取 GitHub Personal Access Token - 超详细图文指南

## ⚠️ 为什么需要 Token？

GitHub 从 2021 年开始不再支持使用密码推送代码，必须使用 Personal Access Token（个人访问令牌）。

这个 Token 就像是一个特殊的密码，专门用于 Git 推送代码。

---

## 🎯 完整步骤（跟着操作，5 分钟搞定）

### 第 1 步：登录 GitHub

1. 打开浏览器，访问：https://github.com
2. 点击右上角 "Sign in" 登录你的账号
3. 确保你用的是 `bluesterar-lab` 这个账号

---

### 第 2 步：进入设置页面

1. **点击右上角头像**（右上角的圆形头像）
2. 在下拉菜单中，点击 **"Settings"**（设置）
   - 可能显示齿轮图标 ⚙️
   - 或直接显示 "Settings"

---

### 第 3 步：进入开发者设置

在设置页面的左侧菜单中：

1. **往下滚动**，找到 **"Developer settings"**（开发者设置）
2. 点击进入
   - 通常在菜单的最底部
   - 如果找不到，按 `Ctrl+F` 搜索 "Developer settings"

---

### 第 4 步：进入 Personal Access Tokens 页面

在 Developer settings 页面：

1. 左侧菜单，点击 **"Personal access tokens"**
2. 在子菜单中，点击 **"Tokens (classic)"**
3. 确保是 **"Tokens (classic)"**，不是 "Tokens (beta)"

---

### 第 5 步：生成新 Token

1. 点击右侧的 **"Generate new token (classic)"** 按钮
   - 通常是一个绿色按钮
   - 在页面顶部右侧

---

### 第 6 步：配置 Token

会弹出一个表单，需要填写：

#### Note（备注）
- 输入一个名称，方便识别
- 例如：`Git Push Token` 或 `My Project Token`

#### Expiration（过期时间）
- 选择 Token 的有效期
- 推荐选择：**90 days** 或 **No expiration**（永不过期）
- 如果选择 90 days，90 天后需要重新创建

#### Scopes（权限）- **最重要！**

向下滚动，找到权限列表，**必须勾选以下权限**：

✅ **repo**（整个 repo 部分）
- 这个选项会自动勾选所有子选项：
  - ✅ repo:status
  - ✅ repo_deployment
  - ✅ public_repo
  - ✅ repo:invite
  - ✅ security_events

**注意：一定要勾选 `repo`，否则无法推送代码！**

---

### 第 7 步：生成并复制 Token

1. 滚动到页面底部
2. 点击 **"Generate token"** 按钮（绿色）
3. **非常重要！立即复制 Token！**
   - Token 会显示在页面上
   - 是一长串随机字符，格式类似：
     ```
     ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     ```
   - **只会显示一次！关闭页面后就看不到了！**

#### 如何复制 Token：
1. 点击 Token 右侧的复制图标 📋
2. 或选中整个 Token，按 `Ctrl+C`
3. **立即粘贴保存到记事本或安全的地方**

---

### 第 8 步：保存 Token

**非常非常重要！**

1. 打开记事本（Windows）或文本编辑器（Mac）
2. 粘贴 Token
3. 保存文件，命名为 `github_token.txt`
4. 放在一个安全的地方

**切记：**
- ⚠️ Token 只显示一次！
- ⚠️ 必须立即保存！
- ⚠️ 不要分享给别人！

---

## 🎉 成功！现在可以使用 Token 了

### 推送代码时使用 Token

在你的终端/命令行中运行：

```bash
git push -u origin main
```

会要求输入：

**Username**（用户名）：
```
bluesterar-lab
```

**Password**（密码）：
```
粘贴你的 Token
```

**注意**：
- 输入 Token 时，**不会显示任何字符**
- 这是正常的！直接粘贴后按 Enter
- 不要担心，已经粘贴成功了

---

## 📸 应该看到的界面

### 1. Settings 页面
- 左侧有菜单
- 右侧是个人设置

### 2. Developer settings 页面
- 左侧菜单有多个选项
- 找到 "Personal access tokens"

### 3. Tokens (classic) 页面
- 显示已有的 Token 列表
- 右侧有 "Generate new token (classic)" 按钮

### 4. Token 生成页面
- Note 输入框
- Expiration 下拉菜单
- Scopes 权限列表（勾选 repo）

### 5. Token 生成成功
- 显示生成的 Token
- 一长串随机字符

---

## ❓ 找不到菜单？

### Q1: 找不到 "Developer settings"？
**A**:
1. 检查是否登录了正确的账号
2. 确认在 Settings 页面（不是仓库页面）
3. 查看左侧菜单的最底部
4. 按 `Ctrl+F` 搜索 "Developer"

### Q2: 找不到 "Tokens (classic)"？
**A**:
1. 确保点击了 "Personal access tokens"
2. 在子菜单中选择 "Tokens (classic)"
3. 不是 "Tokens (beta)"

### Q3: 没有勾选 repo 权限？
**A**:
1. 向下滚动到 "Scopes" 部分
2. 找到 "repo" 部分
3. 勾选 "repo" 复选框
4. 会自动勾选所有子选项

---

## 🔐 Token 的安全使用

### ✅ 应该做的事：
- 保存到安全的地方（密码管理器、记事本）
- 定期更换 Token
- 不要在公共场所使用
- 使用后立即保存

### ❌ 不应该做的事：
- 不要在聊天中分享 Token
- 不要上传到 GitHub 或其他公开网站
- 不要把 Token 写在代码里
- 不要告诉别人你的 Token

---

## 🔄 重新创建 Token（如果忘记了）

如果 Token 丢失或过期：

1. 回到 Tokens (classic) 页面
2. 找到之前创建的 Token
3. 点击右侧的 **"Delete"** 删除
4. 重新创建一个新的 Token
5. 复制并保存新的 Token

---

## 🎯 快速检查清单

在推送代码前，确认：

- [ ] 已登录 GitHub 账号
- [ ] 已找到 Settings 页面
- [ ] 已找到 Developer settings
- [ ] 已找到 Tokens (classic)
- [ ] 已生成新 Token
- [ ] 已勾选 repo 权限
- [ ] 已复制 Token
- [ ] 已保存 Token 到安全的地方

---

## 📞 还是找不到？

### 最后的救命稻草：

1. **直接访问 Token 创建页面**
   ```
   https://github.com/settings/tokens
   ```

2. **点击 "Generate new token (classic)"**
   - 应该直接跳转到创建页面

3. **查看这个官方教程**
   ```
   https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
   ```

4. **告诉我你卡在哪一步**
   - 我会给你更具体的指导

---

## ✨ 成功的标志

当你看到这个就成功了！

```
ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

这就是你的 Token！

**立即保存它！**

---

## 🎉 现在去创建 Token 吧！

按照上面的步骤，5 分钟就能搞定！

创建成功后，回来告诉我，我们继续下一步！🚀

---

## 💡 提示

- **Token 只显示一次** - 关闭页面后就看不到了
- **可以创建多个 Token** - 为不同的项目创建不同的 Token
- **Token 有过期时间** - 过期后需要重新创建
- **删除 Token** - 在 Tokens (classic) 页面可以删除不需要的 Token

---

**现在就去创建 Token 吧！** 💪
