1.	什么是 iframe?
Iframe是html的一个标签，功能是能在一个页面中添加嵌入另一个页面。

2.	如何在当前页面中嵌入其他页面？
用ifram标签。

3.	iframe 有哪些常见应用？
插入广告，实现简单的局部刷新。

4.	如何使用 <a> 标签控制 iframe 中显示的内容？
为<a>标签的target属性赋值成与想关联的iframe标签的相同的值。
比如:
&lt;a href=”http://www.sina.com.cn” target=”iframe1”>新浪 </a>
&lt;iframe name=”iframe1”><iframe>

5.	为什么越来越少的人使用 iframe？
Iframe经常被用来插入广告，一些浏览器默认将Iframe功能冻结；
Iframe发生嵌套现象时会使得用户的浏览体验极差。

6.	frame 和 iframe 有什么区别？
Frame不能放在body标签内，不能脱离frameSet使用

1.	请实现一个类似 gitbook 的左边点击右边局部刷新的效果

