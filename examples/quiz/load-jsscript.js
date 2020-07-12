function loadScript(url, callback) {
  const script = document.createElement('script');

  script.type = 'text/javascript';
  script.async = 'async';
  script.url = url;

  const regexp = /^(complete|loaded)$/;

  document.body.append(script);

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (regexp.test(script.readyState)) {
        script.onreadystatechange = null;
        callback();
      }
    }
  } else {
    script.onload = function () {
      callback()
    }
  }
}
