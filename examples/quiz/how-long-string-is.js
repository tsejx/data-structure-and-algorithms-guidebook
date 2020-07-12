/*假设：一个英文字符占用一个字节，一个中文字符占用两个字节*/
function getBytes(str) {
    var len = str.length,
      bytes = len,
      i = 0;
    for (; i < len; i++) {
      if (str.charCodeAt(i) > 255) bytes++;
    }
    return bytes;
  }
  alert(getBytes('玩,as'));