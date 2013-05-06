Date.strftime
=============

A simple Javascript Date object extensions( strftime ) for Node.js( module.exports ).

**Use Guides( 使用指南 ):**

将 Date.strftime.js 放到您的项目中，存放目录无特殊要求；然后再在需要使用的文件中 require Date.strftime.js 即可。

例：

```javascript
......
require("./Date.strftime");
......

var DATE = new Date();
console.log( DATE.strftime( Date.Formats.F );
// 2013-05-06 06:37:23
```

**Supported Formats( 支持格式-速记 ):**

```javascript
Date.Formats.O    // [ '%Y-%M-%D' ]         2013-05-06
Date.Formats.T    // [ %M/%D/%y ]           05/06/13 ( 年份为2位简写 )
Date.Formats.C    // [ %Y年%M月%D日 ]        2013年05月06日
Date.Formats.F    // [ %Y-%M-%D %H:%m:%s ]  2013-05-06 06:40:17
Date.Formats.O    // [ %Y-%M-%D %w ]        2013-05-06 星期一
```

目前未加入 Weeks 的 E 文格式[ Sunday, Monday, Tuesday, ...  ] 需要使用的话可自行添加进去。

以上 5 种格式如果不够用或不是您想要的格式的话，可自行扩展或重新拼装适合自己的格式。

格式符号说明：

```javascript
%Y  ----  年份( 完整4位 )  [ 2013 ]
%y  ----  年份( 简写2位 )  [ 13 ]
%M  ----  月份( 2位 )  [ 05 ]
%D  ----  日期( 2位 )  [ 06 ]
%H  ----  时( 2位 )  [ 06 ]
%m  ----  分( 2位 )  [ 48 ]
%s  ----  秒( 2位 )  [ 09 ]
%w  ----  星期( 中文 )  [ 星期一 ]
```
