(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[70],{L5a8:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),r=a.n(t),s=(a("B2uJ"),a("+su7"),a("qOys")),l=a.n(s);a("5Yjd");n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u5f02\u6b65\u7f16\u7a0b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5f02\u6b65\u7f16\u7a0b"},r.a.createElement("span",{className:"icon icon-link"})),"\u5f02\u6b65\u7f16\u7a0b"),r.a.createElement("h2",{id:"\u5f02\u6b65\u5e76\u53d1\u6570\u9650\u5236"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5f02\u6b65\u5e76\u53d1\u6570\u9650\u5236"},r.a.createElement("span",{className:"icon icon-link"})),"\u5f02\u6b65\u5e76\u53d1\u6570\u9650\u5236"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("code",null,"new Promise")," \u4e00\u65e6\u521b\u5efa\uff0c\u7acb\u5373\u6267\u884c"),r.a.createElement("li",null,"\u4f7f\u7528 ",r.a.createElement("code",null,"Promise.resolve().then()")," \u53ef\u4ee5\u628a\u4efb\u52a1\u52a0\u5230\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\uff0c\u9632\u6b62\u7acb\u5373\u6267\u884c\u8fed\u4ee3\u65b9\u6cd5"),r.a.createElement("li",null,"\u5fae\u4efb\u52a1\u5904\u7406\u8fc7\u7a0b\u4e2d\uff0c\u4ea7\u751f\u7684\u65b0\u7684\u5fae\u4efb\u52a1\uff0c\u4f1a\u5728\u540c\u4e00\u4e8b\u4ef6\u5faa\u73af\u5185\uff0c\u8ffd\u52a0\u5230\u5fae\u4efb\u52a1\u961f\u5217\u91cc"),r.a.createElement("li",null,"\u4f7f\u7528 ",r.a.createElement("code",null,"race")," \u5728\u67d0\u4e2a\u4efb\u52a1\u5b8c\u6210\u65f6\uff0c\u7ee7\u7eed\u6dfb\u52a0\u4efb\u52a1\uff0c\u4fdd\u6301\u4efb\u52a1\u6309\u7167\u6700\u5927\u5e76\u53d1\u6570\u8fdb\u884c\u6267\u884c"),r.a.createElement("li",null,"\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u9700\u8981\u4ece ",r.a.createElement("code",null,"doningTasks")," \u4e2d\u79fb\u51fa")),r.a.createElement(l.a,{code:"function limit(count, arr, iterateFunc) {\n  const tasks = [];\n  const doingTasks = [];\n  let i = 0;\n  const enqueue = () => {\n    if (i === arr.length) {\n      return Promise.resolve();\n    }\n    const task = Promise.resolve().then(() => iterateFunc(arr[i++]));\n    tasks.push(task);\n    const doing = task.then(() => doingTasks.splice(doingTasks.indexOf(doing), 1));\n    doingTasks.push(doing);\n    const res = dongTasks.length >= count ? Promise.race(doingTasks) : Promise.resolve();\n    return res.then(enqueue);\n  };\n  return enqueue().then(() => Promise.all(tasks));\n}\n",lang:"js"}),r.a.createElement("p",null,"\u4f7f\u7528\u65b9\u5f0f\uff1a"),r.a.createElement(l.a,{code:"const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));\n\nlimit(2, [1000, 1000, 1000, 1000], timeout).then(res => console.log(res));\n",lang:"js"}),r.a.createElement("h2",{id:"\u5f02\u6b65\u4e32\u884c\u548c\u5f02\u6b65\u5e76\u884c"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5f02\u6b65\u4e32\u884c\u548c\u5f02\u6b65\u5e76\u884c"},r.a.createElement("span",{className:"icon icon-link"})),"\u5f02\u6b65\u4e32\u884c\u548c\u5f02\u6b65\u5e76\u884c"),r.a.createElement("p",null,r.a.createElement("code",null,"\u5b57\u8282\u8df3\u52a8")),r.a.createElement(l.a,{code:"// \u5b9e\u73b0\u5f02\u6b65\u52a0\u6cd5\nfunction asyncAdd(a, b, callback) {\n  setTimeout(function() {\n    callback(null, a + b);\n  }, 500);\n}\n",lang:"js"}),r.a.createElement("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a"),r.a.createElement(l.a,{code:"// 1. Promisify\nconst promiseAdd = (a, b) =>\n  new Promise((resolve, reject) => {\n    asyncAdd(a, b, (err, res) => {\n      if (err) {\n        reject(err);\n      } else {\n        resolve(res);\n      }\n    });\n  });\n\n// 2. \u4e32\u884c\u5904\u7406\nasync function serialSum(...args) {\n  return args.reduce((task, now) => task.then(res => promiseAdd(res, now)), Promise.resolve(0));\n}\n\n// 3. \u5e76\u884c\u5904\u7406\nasync function parallelSum(...args) {\n  if (args.length === 1) return args[0];\n\n  const tasks = [];\n\n  for (let i = 0; i < args.length; i += 2) {\n    tasks.push(promiseAdd(args[i], args[i + 1] || 0));\n  }\n  const results = await Promise.all(tasks);\n\n  return parallelSum(...results);\n}\n",lang:"js"})))}}}]);