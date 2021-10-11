### 使用 Markdown 编写文档：以vscode常用操作为例 
#### 一、vscode常用快捷键

1. 搜索
Ctrl + F：查找
Ctrl + H：替换

2. 行操作
剪切一行：Ctrl+X
复制一行：Ctrl+C
删除一行：Ctrl+Shilft+K
Alt+ ↑ / ↓：向上/向下移动行 Move line up/down
Shift+Alt + ↓ / ↑：向上/向下复制行 Copy line up/down

3. 导航
F12
Alt + ←/→  :返回/前进 Go back / forward
#### 二、插件安装卸载
插件安装
1. 点击vscode左边的扩展工具。如图
![](https://work.mafengshe.com/static/upload/article/pic1633875120693.jpg)

2. 在应用商店中搜索想要的插件，然后点击右边的安装。如图
![](https://work.mafengshe.com/static/upload/article/pic1633875177585.jpg)

3. 插件卸载成功后，右边的安装卸载按钮会变为禁用和卸载。如图
![](https://work.mafengshe.com/static/upload/article/pic1633875206422.jpg)

插件卸载
1. 点击vscode左边的扩展工具。如图

![](https://work.mafengshe.com/static/upload/article/pic1633874790271.jpg)

2. 在已启动的扩展插件中点击要卸载的插件，然后点击右边的卸载按钮。如图

![](https://work.mafengshe.com/static/upload/article/pic1633874851841.jpg)

3. 插件卸载成功后，右边的卸载按钮会变为绿色的安装按钮。如图

![](https://work.mafengshe.com/static/upload/article/pic1633874856692.jpg)

#### VSCode 中使用 Git
vscode进行put操作
1. 使用vscode打开项目，打开下面视图，添加一行文字## 测试提交
![](https://work.mafengshe.com/static/upload/article/pic1633875658588.jpg)

2. 点击 + ；相当于git add .
![](https://work.mafengshe.com/static/upload/article/pic1633875758592.jpg)

3. 点击对号；等于git commit -m "备注信息"；右边的箭头输入需要备注的信息。然后按 Enter 确定。
![](https://work.mafengshe.com/static/upload/article/pic1633875803891.jpg)

4. 回车之后，然后我们可以看到。所有的修改的文件，均已经提交到缓存区。1变成了 0；
![](https://work.mafengshe.com/static/upload/article/pic1633875842509.jpg)

5. 提交到远程仓库，等于git push origin master
![](https://work.mafengshe.com/static/upload/article/pic1633876247989.jpg)

6. 到git里查看，发现已经成功推送
![](https://work.mafengshe.com/static/upload/article/pic1633876331687.jpg)
---
vocode进行pull操作以及对冲突的解决方式

1. 在git仓库修改文件模拟他人修改文件的效果
![](https://work.mafengshe.com/static/upload/article/pic1633877127298.jpg)

2. 从git拉取代码，等效于 git pull origin master
![](https://work.mafengshe.com/static/upload/article/pic1633877169270.jpg)

3. 成功拉取
![](https://work.mafengshe.com/static/upload/article/pic1633877552352.jpg)
