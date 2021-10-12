问答题
1. 什么是外部资源？有哪些外部资源？如何引用？
外部资源就是外部文件。
外部资源有图片，音频，视频等多媒体文件，也有html,css,js等代码文件。
不同的资源有不同的引用方式。
图片有专门的img标签用于引用
JS语言文件有script标签引用
CSS文件有link标签引用


2. URL 中存在哪些路径？分别是如何表示的？
有绝对路径，根路径和相对路径。

绝对路径是指文件真实存在位置的完整路径。一般以协议开始，再根据协议加上域名或者文件地址等唯一标识文件所在位置的标识。
比如：http://baidu.com

根路径一般以/开头，再根据所在环境的协议为根，查找目录。
比如：/js/main.js

相对路径是指要引用的文件相对于当前文件路径的位置。
比如：要引用main.js文件
是同级文件：main.js或./main.js
是上级文件：../main.js ../main.js
是下级文件：[下级文件名]/main.js


3. ../main.html，./main.html，main.html，/main.html，//www.mafengshe.com/main.html各是什么含义？有什么区别？
../main.html 是上级的文件
./main.html，main.html 都是在同级目录里的文件
/main.html是根目录下的文件
//www.mafengshe.com/main.html是根目录的文件


代码题
请自行创建 style.css,main.js,index.html三个文件，在index.html中引入另外两个文件。






