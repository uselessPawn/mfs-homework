1. 什么是 URL？
URL 也被称为网址。URL 的英文全称是 Uniform Resource Locator，中文也译为“统一资源定位符”。
像网络资源的“身份证”

2. URL 有哪些常见的 Schemes？他们各是什么含义？
有http、https、ftp、file。
http（超文本传输协议）：普通网页，不加密。
https（安全超文本传输协议）：安全网页，加密所有信息交换。
ftp（文本传输含义）：用于将文件下载或上传到网站
file(文件协议)，当前计算机上的文件

3. URL 有哪些约束？
遵循以下规则：
1. 语法schemes://host:port/path/filename
2. URL只能使用ASCII字符集来通过因特网进行发送，非URL地址要翻译
3. URL不能包含空格，常用+号代替

4. 请将以下 URL 转换成合法的 URL
baidu.com/s?wd=码蜂社 前端

http://baidu.com/s?wd=%E7%A0%81%E8%9C%82%E7%A4%BE%20%E5%89%8D%E7%AB%AF


5. 请提取以下 URL 的 scheme，host，port，path，filename
https://www.mafengshe.com/course/fe-senior/ad
scheme: https
host: www.mafengshe.com
path: /course/fe-senior
filename: ad


http://127.0.0.1:3000/course/fe-senior/ad
scheme: http
host: //127.0.0.1
post: 3000
path: /course/fe-senior
filename: ad