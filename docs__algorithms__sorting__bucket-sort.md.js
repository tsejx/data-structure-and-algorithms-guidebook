(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"0Owb":function(e,n,t){"use strict";function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,"a",(function(){return a}))},JuoU:function(e,n,t){e.exports=t.p+"static/bucket-sort.d7963482.gif"},"K+nK":function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},egfA:function(e,n,t){"use strict";t.r(n);var a=t("0Owb"),l=t("q1tI"),r=t.n(l),c=(t("B2uJ"),t("+su7"),t("qOys")),i=t.n(c),u=t("5Yjd"),m=t.n(u),s=r.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),a=e(t("JuoU")),l=function(){return n["default"].createElement("img",{alt:"\u6876\u6392\u5e8f",src:a["default"],width:"45%",height:"45%"})};return n["default"].createElement(l)}));n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u6876\u6392\u5e8f"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u6876\u6392\u5e8f"},r.a.createElement("span",{className:"icon icon-link"})),"\u6876\u6392\u5e8f"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u6876\u6392\u5e8f"),"\uff08Bucket Sort\uff09\u662f\u8ba1\u6570\u6392\u5e8f\u7684\u5347\u7ea7\u7248\u3002\u5b83\u5229\u7528\u4e86\u51fd\u6570\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u9ad8\u6548\u4e0e\u5426\u7684\u5173\u952e\u5c31\u5728\u4e8e\u8fd9\u4e2a\u6620\u5c04\u51fd\u6570\u7684\u786e\u5b9a\u3002"),r.a.createElement("p",null,"\u4e3a\u4e86\u4f7f\u6876\u6392\u5e8f\u66f4\u52a0\u9ad8\u6548\uff0c\u6211\u4eec\u9700\u8981\u505a\u5230\u8fd9\u4e24\u70b9\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5728\u989d\u5916\u7a7a\u95f4\u5145\u8db3\u7684\u60c5\u51b5\u4e0b\uff0c\u5c3d\u91cf\u589e\u5927\u6876\u7684\u6570\u91cf"),r.a.createElement("li",null,"\u4f7f\u7528\u7684\u6620\u5c04\u51fd\u6570\u80fd\u591f\u5c06\u8f93\u5165\u7684 N \u4e2a\u6570\u636e\u5747\u5300\u7684\u5206\u914d\u5230 K \u4e2a\u6876\u4e2d")),r.a.createElement("h2",{id:"\u7b97\u6cd5\u539f\u7406"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7b97\u6cd5\u539f\u7406"},r.a.createElement("span",{className:"icon icon-link"})),"\u7b97\u6cd5\u539f\u7406"),r.a.createElement("ol",null,r.a.createElement("li",null,"\u8bbe\u7f6e\u4e00\u4e2a\u5b9a\u91cf\u7684\u6570\u7ec4\u5f53\u4f5c\u7a7a\u6876\u5b50"),r.a.createElement("li",null,"\u5bfb\u8bbf\u5e8f\u5217\uff0c\u5e76\u4e14\u628a\u9879\u76ee\u4e00\u4e2a\u4e00\u4e2a\u653e\u5230\u5bf9\u5e94\u7684\u6876\u5b50\u53bb"),r.a.createElement("li",null,"\u5bf9\u6bcf\u4e2a\u4e0d\u662f\u7a7a\u7684\u6876\u5b50\u8fdb\u884c\u6392\u5e8f"),r.a.createElement("li",null,"\u4ece\u4e0d\u662f\u7a7a\u7684\u6876\u5b50\u91cc\u628a\u9879\u76ee\u518d\u653e\u56de\u539f\u6765\u7684\u5e8f\u5217\u4e2d")),r.a.createElement("h2",{id:"\u7b97\u6cd5\u5206\u6790"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7b97\u6cd5\u5206\u6790"},r.a.createElement("span",{className:"icon icon-link"})),"\u7b97\u6cd5\u5206\u6790"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5e73\u5747\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",r.a.createElement("code",null,"O(n + k)")),r.a.createElement("li",null,"\u6700\u4f73\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",r.a.createElement("code",null,"O(n + k)")),r.a.createElement("li",null,"\u6700\u5dee\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",r.a.createElement("code",null,"O(n ^ 2)")),r.a.createElement("li",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",r.a.createElement("code",null,"O(n * k)")),r.a.createElement("li",null,"\u7a33\u5b9a\u6027\uff1a\u7a33\u5b9a")),r.a.createElement("p",null,"\u6876\u6392\u5e8f\u6700\u597d\u60c5\u51b5\u4e0b\u4f7f\u7528\u7ebf\u6027\u65f6\u95f4 ",r.a.createElement("code",null,"O(n)"),"\uff0c\u6876\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u53d6\u51b3\u4e0e\u5bf9\u5404\u4e2a\u6876\u4e4b\u95f4\u6570\u636e\u8fdb\u884c\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u56e0\u4e3a\u5176\u5b83\u90e8\u5206\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u4e3a ",r.a.createElement("code",null,"O(n)"),"\u3002\u5f88\u663e\u7136\uff0c\u6876\u5212\u5206\u7684\u8d8a\u5c0f\uff0c\u5404\u4e2a\u6876\u4e4b\u95f4\u7684\u6570\u636e\u8d8a\u5c11\uff0c\u6392\u5e8f\u6240\u7528\u7684\u65f6\u95f4\u4e5f\u4f1a\u8d8a\u5c11\u3002\u4f46\u76f8\u5e94\u7684\u7a7a\u95f4\u6d88\u8017\u5c31\u4f1a\u589e\u5927\u3002")),r.a.createElement(m.a,Object(a["a"])({source:{jsx:'import React from \'react\';\nimport img from \'../../assets/sorting/bucket-sort.gif\';\n\nexport default () => <img alt="\u6876\u6392\u5e8f" src={img} width="45%" height="45%" />;'}},{inline:!0,dependencies:{},files:{}}),r.a.createElement(s,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u7b97\u6cd5\u5b9e\u73b0"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7b97\u6cd5\u5b9e\u73b0"},r.a.createElement("span",{className:"icon icon-link"})),"\u7b97\u6cd5\u5b9e\u73b0"),r.a.createElement(i.a,{code:"function bucketSort(arr, num) {\n  if (arr.length <= 1) {\n    return arr;\n  }\n\n  var len = arr.length,\n    buckets = [],\n    result = [],\n    min = (max = arr[0]),\n    regex = '/^[1-9]+[0-9]*$/',\n    space,\n    n = 0;\n\n  num = num || (num > 1 && regex.test(num) ? num : 10);\n\n  for (var i = 1; i < len; i++) {\n    min = min <= arr[i] ? min : arr[i];\n    max = max >= arr[i] ? max : arr[i];\n  }\n\n  space = (max - min + 1) / num;\n\n  for (var j = 0; j < len; j++) {\n    var index = Math.floor((arr[j] - min) / space);\n    if (buckets[index]) {\n      //  \u975e\u7a7a\u6876\uff0c\u63d2\u5165\u6392\u5e8f\n      var k = buckets[index].length - 1;\n      while (k >= 0 && buckets[index][k] > arr[j]) {\n        buckets[index][k + 1] = buckets[index][k];\n        k--;\n      }\n      buckets[index][k + 1] = arr[j];\n    } else {\n      //\u7a7a\u6876\uff0c\u521d\u59cb\u5316\n      buckets[index] = [];\n      buckets[index].push(arr[j]);\n    }\n  }\n\n  while (n < num) {\n    result = result.concat(buckets[n]);\n    n++;\n  }\n\n  return result;\n}\n",lang:"js"})))}}}]);