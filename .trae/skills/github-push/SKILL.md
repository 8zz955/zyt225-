---
name: github-push
description: Commit the current project and push it to the configured GitHub remote over SSH. Use when the user asks to 提交到 GitHub, commit and push the project, or publish this project to https://github.com/8zz955/zyt225-.git.
---

# 提交到 GitHub

把当前项目提交为一个 commit 并推送到 GitHub，走已配置的 SSH 公钥，不使用 HTTPS 账号密码。

## 固定信息

- 远程仓库：`git@github.com:8zz955/zyt225-.git`
- 远端名：`origin`，默认分支：`main`
- SSH 已可用：`~/.ssh/id_ed25519`，`~/.ssh/config` 中 github.com 走 `ssh.github.com:443`，`ssh -T git@github.com` 应返回 `Hi 8zz955!`
- 不提交的垃圾文件：`Thumbs.db`、`.screenshots/`、`.trae-html-share-packages/`

## 步骤

1. 确认在项目根目录执行，且 `ssh -T git@github.com` 认证成功；失败则先修复公钥或网络，不要改用 HTTPS。
2. 若还没有仓库，执行 `git init -b main`。
3. 绑定远端：
   `git remote remove origin`（已存在时）
   `git remote add origin git@github.com:8zz955/zyt225-.git`
4. 只添加项目文件（HTML/CSS/JS/图片/`.trae/`），排除上面列出的垃圾文件；
   修改文件较多时用 `git status --porcelain` 核对后再提交。
5. `git commit -m "<一句话说明本次改动>"`，提交信息写“为什么”，不要用 `--amend`，不要跳过钩子。
6. `git push -u origin main`。若远端已有提交导致被拒，先 `git pull --rebase origin main` 再推送。
7. 用 `git status` 与 `git log --oneline -1` 确认推送完成，并把仓库地址回报给用户。

## 注意

- 不修改 git 全局配置。
- 不强制推送（禁止 `--force`），除非用户明确要求。
- 不提交 `.env`、密钥等敏感文件。
