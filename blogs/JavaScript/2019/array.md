---
title: JavaScript中数组的常用方法
date: 2019-12-15
tags:
 - JavaScript
 - web
categories: 
 - JavaScript
 - Array
---

::: tip 写在前面
随着前端深入的不断学习，发现**数组**这个数据结构在前端中有着相当大的存在感，由于我初学前端的时候并没有系统性的学习数组，所以我将通过这篇文章同你一起学习**数组**，希望我们能一起进步，学会熟练操作数组。
:::


## 数组基本操作

### 创建数组
```javaScript
var arr1 = [];  //通过字面量的方式创建一个没有元素的空数组
var arr2 = new Array(); //通过构造函数的方式创建一个空数组
var arr3 = new Array(5); //创建一个有五个元素的数组，此时每个数组元素为undefined
var arr4 = [1,2,3,4,5]; //创建有五个值的数组
var arr5 = [{id:1,name:'不是酸柠檬'},{id:2,name:'no lemon'}]; //创建一个值为对象的数组
```
数组创建有两种方式，分别是`[]字面量方式`、`new Array()构造函数方式`，本质上创建方式是一致的，使用字面量的方式要比构造函数的方式简单的多，推荐小伙伴们使用。

### 数组增加删除
#### push()、pop()、unshift()和shift()
```javaScript
var arr = [];  //通过字面量的方式创建一个没有元素的空数组
arr[1] = '不是酸柠檬'; //写入第一个元素  ['不是酸柠檬']
arr.push('22岁'); //在数组末尾添加一个元素 ['不是酸柠檬','22岁']
arr.pop(); //删除数组末尾的元素  ['不是酸柠檬']
arr.unshift('22岁'); //在数组头部添加元素 ['22岁','不是酸柠檬']
arr.shift(); //删除数组头部的元素  ['不是酸柠檬']
```
这里主要介绍到了最基本的两组增加删除元素的方式，分别是`push()在数组末尾添加`、`pop()删除末尾元素`、`unshift()在数组头部添加`、`shift()删除头部元素`，这是数组中最常用的四个添加删除方法，小伙伴一定要牢记。
#### splice()
```javaScript
var arr = [0,1,2,3,4,5,6,7];
arr.splice(4); // 从下标为4的元素一直删除到末尾，此时arr为 [0, 1, 2, 3]
arr.splice(1,2); // 从下标为1的元素开始向后删除两个元素，此时arr为 [0, 3]
arr.splice(1,0,1,2); // 从下标为1的元素开始向后删除0个元素，并且插入元素'1,2'，此时arr为 [0, 1, 2, 3]
```
`splice()`是数组操作中很重要的方法，使用`splice()`可以更为自由的对数组进行相应的增加删除，通过`splice()`方法也可以很轻松的实现`push()、pop()、unshift()和shift()`四个方法，小伙伴们可以自己尝试一下，加强对`splice()`方法的理解。
#### delete和arr.length()
```javaScript
var skill = ['Vue','React','ES6'];
delete skill[0]; //将第一个元素设为空，不改变数组长度 [empty,'React','angular']
skill.length = 5; //将数组长度设置为5 [empty,'React','angular',empty,empty]
skill.length = 0; //将数组长度设置为0，此时数组置为空 []
```
这里应该注意`delete`和`length`的区别，使用delete操作后的数组元素会被设置为`empty`，**不会改变原数组长度**。使用length操作后，若设置长度大于原数组长度，则新添的元素设置为`empty`，若设置长度小于原数组长度，则删除多余元素，**并改变数组长度**，若设置length为0，则清空数组，使数组长度改变为零。

### 数组方法
#### join()
```javaScript
var skill = ['Vue','React','angular'];
skill.join(); //"Vue,React,angular"
skill.join('----'); //"Vue----React----angular"
```
通过`arr.join()`可以将数组元素拼接成字符串，并在每个元素中添加指定字符，如不设置，则默认添加逗号。
#### reverse()
```javaScript
var arr = [1,2,3,4,5];
arr.reverse(); //[5,4,3,2,1]
```
通过`arr.reverse()`可以将数组中每一个元素调到顺序进行排列。
#### sort()
```javaScript
var arr = [5,4,3,2,1];
arr.sort(); //[1,2,3,4,5]
var arr1 = ['a','c','e','d','b']
arr1.sort(); ['a','b','c','d','e']
```
通过`arr.sort()`可以将数组元素按照顺序进行排列，比如数字先后顺序或者字母排序。但是他并不是按照数字大小顺序来排序的，为了使数组元素能按照数字大小排序，应该按照以下方式来实现。
```javaScript
var arr = [55555,44,3333,222,11111];
arr.sort(); //[11111, 222, 3333, 44, 55555]  按照数字先后顺序，并没有对比大小
arr.sort((a,b)=>{
	return a-b;  //数字由小到大进行排列   [44, 222, 3333, 11111, 55555]
})
arr.sort((a,b)=>{
	return b-a;  //数字由大到小进行排列    [55555, 11111, 3333, 222, 44]
})
```
#### concat()
```javaScript
var arr = [1,2,3];
arr.concat(4,5); // [1, 2, 3, 4, 5]
arr.concat([4,5]); // [1, 2, 3, 4, 5]
arr.concat([4,5],[6,7]); // [1, 2, 3, 4, 5, 6, 7]
arr.concat(4,[5,[6,7]]); // [1, 2, 3, 4, 5, [6, 7]]
```
通过`arr.concat()`可以将字符添加到数组元素中，也可以将其他数组添加到当前数组中，但如果是嵌套数组，`concat()`默认不会对它进行扁平化处理。
#### slice()
```javaScript
var arr = [1,2,3,4,5];
arr.slice(0,3); // [1, 2, 3]  从下标为0的元素开始的三个元素
arr.slice(3); // [4, 5]  从下标为3的元素开始到结束的元素
```
通过`arr.slice()`可以对数组进行查询，如果传入两个参数(x,y)，则意义为从下标x开始，向后数y个元素；如果传入一个参数(x)，则意义为从下标x开始一直到末尾的所有元素。
#### filter()、every()和some()
```javaScript
var arr = [1,2,3,4,5];
var resarr1 = arr.filter((x)=>{
	return x>3;
}); // [4, 5]  筛选数组元素大于3的结果
var resarr2 = arr.filter((x)=>{
	return x%2==0;
}); // [2, 4]  筛选数组元素中的偶数
```
通过`arr.filter()`可以对数组进行带条件的筛选，在`filter()`里面写入相应条件，这里要注意执行`arr.filter()`会返回一个数组，我们需要定义一个新数组来接收它。

```javaScript
var arr = [1,2,3,4,5];
arr.every((x)=>{
	return x>3;
}); // false  arr数组中不是每一项都大于3，返回false
arr.every((x)=>{
	return x>0;
}); // false  arr数组中每一项都大于0，返回true
arr.some((x)=>{
	return x>3;
}); // false  arr数组中存在一项大于3，返回true
```
这一组方法是用来判断数组中有没有相应值的，`arr.every()`判断的值必须所有都满足条件才会返回true，而`arr.some()`判断的值只需要有一项满足就会返回true。

#### reduce()
```javaScript
var arr = [1,2,3,4,5];
var sum = arr.reduce((x,y)=>{
	return x+y   //0+1+2+3+4+5 =》 15
},0)
var product = arr.reduce((x,y)=>{
	return x*y  //1*2*3*4*5 => 120
})
var max = arr.reduce((x,y)=>{
	return (x>y)?x:y  //5
})
```
`arr.reduce()`方法会对传入的数组元素进行组合，如例子中的x和y，在每个方法中的返回值会注入到x中，然后继续与下一个y值进行操作，所有操作完成后返回最终结果，这个方法有第二个参数用来设置默认值到x，但默认值不是必填项。

为了方便小伙伴理解，我把代码中sum当做例子来进行拆解

* (x=0,y=1) => 0+1=1
* (x=1,y=2) => 1+2=3
* (x=3,y=3) => 3+3=6
* (x=6,y=4) => 6+4=10
* (x=10,y=5) => 10+5=15
* 此时便利完所有数组元素，返回值15

## 结论

今天我们一起学习了数组操作的常用方法，知识点比较多，也没有太多连贯性，但是这些方法在我们的日常工作中会经常用到，希望你能够多加练习，深入理解这些方法，你的前端水平一定会更上一层楼的。

关于数组的操作方法还有很多没有写到，这篇文章将会持续更新，有需要的小伙伴可以点赞收藏，在我更新之后就可以及时来阅读学习啦！


## 结语

以上就是本文章的全部内容了，如果有不正确的地方欢迎指正。

**感谢您的阅读，如果感觉有用不妨点赞/转发。**

前端深入系列是一个踩坑系列，是由我本人对工作和学习中所遇到的问题和踩过的坑的一个探索与总结，在此记录分享出去，同时也是对自我技能的一个反思和追问。

前端路漫，踩坑不断。

前端深入系列持续更新中……