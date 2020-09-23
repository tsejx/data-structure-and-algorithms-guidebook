# 功能实现

## 图片懒加载

```js
function isVisible(e) {
  const position = e.getBoundingClientRect();
  const windowHeight = document.docuemtnElement.clientHeight;
  // 顶部边缘可见
  const topVisible = position.top > 0 && position.top < windowHeight;
  // 底部边缘可见
  const bottomVisible = position.bottom < windowHeight && position.bottom > 0;

  return topVisibile || bottomVisible;
}

function imageLazyLoad() {
  const images = document.querySelectorAll('img');

  for (let img of images) {
    const realSrc = img.dataset.src;

    if (!realSrc) continue;

    if (isVisible(img)) {
      img.src = realSrc;
      img.dataset.src = '';
    }
  }
}
```
