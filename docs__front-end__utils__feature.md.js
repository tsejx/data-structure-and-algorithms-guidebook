(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[73],{QBLp:function(n,e,t){"use strict";t.r(e);var i=t("q1tI"),o=t.n(i),a=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(a);t("5Yjd");e["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"\u529f\u80fd\u5b9e\u73b0"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u529f\u80fd\u5b9e\u73b0"},o.a.createElement("span",{className:"icon icon-link"})),"\u529f\u80fd\u5b9e\u73b0"),o.a.createElement("h2",{id:"\u56fe\u7247\u61d2\u52a0\u8f7d"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u56fe\u7247\u61d2\u52a0\u8f7d"},o.a.createElement("span",{className:"icon icon-link"})),"\u56fe\u7247\u61d2\u52a0\u8f7d"),o.a.createElement(c.a,{code:"function isVisible(e) {\n  const position = e.getBoundingClientRect();\n  const windowHeight = document.docuemtnElement.clientHeight;\n  // \u9876\u90e8\u8fb9\u7f18\u53ef\u89c1\n  const topVisible = position.top > 0 && position.top < windowHeight;\n  // \u5e95\u90e8\u8fb9\u7f18\u53ef\u89c1\n  const bottomVisible = position.bottom < windowHeight && position.bottom > 0;\n\n  return topVisibile || bottomVisible;\n}\n\nfunction imageLazyLoad() {\n  const images = document.querySelectorAll('img');\n\n  for (let img of images) {\n    const realSrc = img.dataset.src;\n\n    if (!realSrc) continue;\n\n    if (isVisible(img)) {\n      img.src = realSrc;\n      img.dataset.src = '';\n    }\n  }\n}\n",lang:"js"})))}}}]);