(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[148],{WefD:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),i=a.n(t),c=(a("B2uJ"),a("+su7"),a("qOys")),l=a.n(c);a("5Yjd");n["default"]=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"markdown"},i.a.createElement("h1",{id:"\u6570\u5b57-1-\u7684\u4e2a\u6570"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u6570\u5b57-1-\u7684\u4e2a\u6570"},i.a.createElement("span",{className:"icon icon-link"})),"\u6570\u5b57 1 \u7684\u4e2a\u6570"),i.a.createElement("p",null,i.a.createElement("code",null,"\u6570\u5b66")),i.a.createElement("h2",{id:"\u89e3\u9898\u601d\u8def"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u89e3\u9898\u601d\u8def"},i.a.createElement("span",{className:"icon icon-link"})),"\u89e3\u9898\u601d\u8def"),i.a.createElement("h3",{id:"\u66b4\u529b\u6cd5"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u66b4\u529b\u6cd5"},i.a.createElement("span",{className:"icon icon-link"})),"\u66b4\u529b\u6cd5"),i.a.createElement(l.a,{code:"var countDigitOne = function(n) {\n  let count = 0;\n  for (let i = n; i > 0; i--) {\n    const match = i.toString().match(/1/g);\n    if (match && match.length > 0) {\n      count += match.length;\n    }\n  }\n\n  return count;\n};\n",lang:"js"}),i.a.createElement("h3",{id:"\u5f52\u7eb3\u6cd5"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u5f52\u7eb3\u6cd5"},i.a.createElement("span",{className:"icon icon-link"})),"\u5f52\u7eb3\u6cd5"),i.a.createElement("p",null,"\u5f52\u7eb3\u6cd5\uff0c\u5bf9\u4e8e\u4e2a\u4f4d\u51fa\u73b0\u7684 1\uff1a"),i.a.createElement(l.a,{code:"const a = (n / 10) * 1 + (n % 10) >= 1 ? 1 : 0;\n",lang:"js"}),i.a.createElement("p",null,"\u5bf9\u4e8e\u5341\u4f4d\u51fa\u73b0\u7684 1\uff1a"),i.a.createElement(l.a,{code:"const b = (n / 100) * 10 + if (k > 19) 10 else if (k < 10) 0 else k - 10 + 1;\n",lang:"js"}),i.a.createElement("p",null,"\u5bf9\u4e8e\u767e\u4f4d\u51fa\u73b0\u7684 1\uff1a"),i.a.createElement(l.a,{code:"const c = (n / 1000) * 100 + if (k > 199) 10 else if (k < 100) 0 else k - 100 + 1;\n",lang:"js"}),i.a.createElement("p",null,"\u6700\u7ec8\u5f52\u7eb3\u51fa\uff1a"),i.a.createElement(l.a,{code:"const k = n % (i * 10)\n\nconst d = (n / (i * 10)) * i + if (k > 2 * i - 1) i else if (k < i) 0 else k - i + 1;\n",lang:"js"}),i.a.createElement("p",null,"\u89e3\u6cd5\uff1a"),i.a.createElement(l.a,{code:"const countDigitOne = function(n) {\n  let count = 0;\n\n  for (let i = 1; i <= n; i *= 10) {\n    // \u9664\u6570\n    let divisor = i * 10;\n    // \u6574\u9664\u90e8\u5206\n    let divided = Math.floor(n / divisor),\n      // \u4f59\u6570\n      remainder = n % divisor,\n      rest = 0;\n\n    count += divided * i;\n\n    rest = remainder > 2 * i - 1 ? i : remainder < i ? 0 : remainder - i + 1;\n\n    count += rest;\n  }\n\n  return count;\n};\n",lang:"js"})))}}}]);