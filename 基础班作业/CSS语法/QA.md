1. 什么是 CSS？它有什么优势？
CSS是层叠样式表。
优势：
>1. 将内容和显示分离。
>2. 提高工作效率
>3. 能将多个样式表重叠成一个


2. 内部样式表和外部样式表各是如何声明和使用？
内部样式表：在<head>标签内声明样式

外部样式：通过<link>标签引用外部的CSS样式表


3. 多层样式层叠是什么意思？
意为一个HTML元素可以有多个样式定义，这些样式根据优先级依次触发。同级时按前后顺序依次生效。 

4. 什么是优先级？样式表的优先级排序是什么？
优先级是当有多个样式表定义HTML元素时，生效的顺序。

优先级排序：
1. 内联样式(在HTML元素内部)
2. 内部样式表（在<head>标签内部）
3. 外联样式表
4. 浏览器缺省设计


5. 请解释 CSS 如下概念
+ 选择器
+ 属性
+ 值
+ 声明
+ 声明块

选择器：通过一定的规则匹配样式应该生效的HTML元素
属性：CSS1、2、3规定的HTML元素能改变的外观，类似HTML元素的属性
值：属性的确切值
声明：属性和值之间的分隔符。
声明块：多个特性间用；隔开，前后用{}括起来，形成一个生命快。


6. CSS 中回车符(\n)会影响 CSS 的解析吗？请测试在不同位置下的回车符对解析的影响，然后谈谈你的理解
不会影响。回车符的作用只是为了便于CSS的代码的排版。

7. CSS 代码中如何使用注释？
用/**/
如：
/* 被注释的内容 */

8. 浏览器前缀是什么？我们为什么需要浏览器前缀？
前缀可以理解成浏览器的私有属性，即它诞生的那一刻，那个CSS属性可能不是CSS标准里有的。
CSS的标准往往落后于浏览器的发展，以及用户可能用的是老版本的浏览。
为了保证CSS代码能在所有浏览器生效，就需要加上前缀以兼容低版本的浏览器。

9. 对浏览器前缀的处理有哪些方案？其中较好处理方案是哪个？
1. 只写标准方法，但是可能不兼容低版本浏览器。
2. 根据项目兼容性要求，配合caniuse网站查询兼容，只要过95%即可只用标准方法
3. 较好方案是使用CSS预处理器自动添加前缀。
 



10. CSS 缩写是什么？哪些属性支持缩写？
缩写允许把多条样式设定写成一条，或是缩短值的内容。

颜色：如果三个颜色分量的两个数字都是一样的，那就可以只写3个
盒模型：从top开始，顺时针转。
边框：宽度，样式，颜色
背景：颜色，图片url(background.gif)，重复与否，固定与否，位置w 位置h
文字：是否加粗，字号/行高，字体样式  （字号和字体样式不能少） 


11. 什么是 CSS 中的继承？哪些属性可以继承？如果不希望子元素继承父元素的某个属性该怎么办？
某些样式不仅仅作用到指定的元素，还能作用到它的子元素，如此我们就称子元素继承父元素的样式。

一下的元素都能被继承：
azimuth, border-collapse, border-spacing,
caption-side, color, cursor, direction, elevation,
empty-cells, font-family, font-size, font-style,
font-variant, font-weight, font, letter-spacing,
line-height, list-style-image, list-style-position,
list-style-type, list-style, orphans, pitch-range,
pitch, quotes, richness, speak-header, speaknumeral,
speak-punctuation, speak, speechrate,
stress, text-align, text-indent, texttransform,
visibility, voice-family, volume, whitespace,
widows, word-spacing

从设计的角度讲，一般只有那些如果不继承，就会一遍又一遍地重复写同一个值的元素需要继承。

最典型的有：
字体：
font-family, font-size, font-style,
font-variant, font-weight, font, letter-spacing,
line-height, text-align, text-indent, 
texttransform, word-spacing

列表相关：
list-style-image, list-style-position,
list-style-type, list-style

以及颜色

如果不希望子元素继承父元素，就特别选取子元素，重新赋值样式。


12. 以下代码<h2>最终显示成什么颜色？为什么？
<!DOCTYPE html>
<html>

<head>
<style type="text/css">
  body{
    color: yellow;
  }
</style>
</head>

<body>
<h2>标题</h2>
</body>

</html>

黄色，因为color属性是可以继承的，h2标题就继承了body标签的颜色属性


代码题：
以下代码中<h2>最终显示成什么颜色？如果我想让color: red，在不修改内部和外部样式表的前提下，该如何实现？

index.html

<!DOCTYPE html>
<html>

<head>
 <link rel="stylesheet" type="text/css" href="style.css">
 <style type="text/css">
   body{
     color: yellow;
   }
   h2 {
     color: blue;
   }
 </style>
</head>

<body>
 <h2>标题</h2>
</body>

</html>
style.css

h2 {
 color: green
}

蓝色。可以在h2写内联样式。即<h2 style="color:red;">

