Date.strftime
=============

A simple Javascript Date object extensions( strftime ) for Node.js( module.exports ).

## 使用方法( Usage ):

  将 Date.strftime.js 放到您的项目中，存放目录无特殊要求；然后再在需要使用的文件中 require Date.strftime.js 即可。

  Example:

  ```javascript
  ......
  require("./Date.strftime");
  
  var DATE = new Date();
  console.log( DATE.strftime( Date.Formats.F );
  ......
  ```

## 格式标记( Format symbol )

  - `%Y` 年( Year ) ---- [ 2013 ]
  - `%y` 年简写( Year short written ) ---- [ 13 ]
  - `%M` 月( Month ) ---- [ 07 ]
  - `%D` 日( Date ) ---- [ 19 ]
  - `%H` 时( Hour ) ---- [ 22 ]
  - `%m` 分( Minute ) ---- [ 21 ]
  - `%s` 秒( Second ) ---- [ 21 ]
  - `%w` 星期 - 中文( Weeks - zh-CN ) ---- [ 星期四 ]
  - `%e` 星期 - 英文( Weeks - en ) ---- [ Thursday ]

## 速记格式( Shorthand format ):

  - `Date.Formats.O` ---- [ %Y-%M-%D ] ( 2013-07-19 )
  - `Date.Formats.T` ---- [ %M/%D/%y ] ( 07/19/13 )
  - `Date.Formats.C` ---- [ %Y年%M月%D日 ] ( 2013年07月19日 )
  - `Date.Formats.F` ---- [ %Y-%M-%D %H:%m:%s ] ( 2013-07-19 22:34:09 )
  - `Date.Formats.W` ---- [ %Y-%M-%D %w ] ( 2013-07-19 星期四 )
  - `Date.Formats.E` ---- [ %Y-%M-%D %e ] ( 2013-07-19 Thursday )

( 注：以上格式如果不能满足您的需求，可根据 格式标记 符号自由拼装适合自己的格式，您也可以尝试扩展您自己想要的格式标记符号或速记格式。)
