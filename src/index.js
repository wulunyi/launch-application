/**
 * 唤起桌面应用
 * callNative(url, success, fail)
 */

var iframeDom, focusDom, timer;
var isDone = true;

function done() {
  isDone = true;

  clearTimeout(timer);

  safeRemove(iframeDom);
  safeRemove(focusDom);
  
  iframeDom = null;
  focusDom = null;
}

function safeCall(fn) {
  if (typeof fn === 'function') {
    fn();
  }
}

function safeRemove(element) {
  try {
    if (element) {
      document.body.removeChild(element);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = function launchApplication(url, success, fail) {
  if (!isDone) {
    return;
  }

  iframeDom = document.createElement('iframe');
  focusDom = document.createElement('input');
  
  iframeDom.id = '_Js-call-native';
  iframeDom.style.display = 'none';
  
  focusDom.style.position = 'fixed';
  focusDom.style.left = '-999999px';
  
  document.body.appendChild(iframeDom);
  document.body.appendChild(focusDom);

  isDone = false;

  focusDom.focus();
  focusDom.onblur = function () {
    if (document.activeElement && document.activeElement !== focusDom) {
      if (focusDom) {
        focusDom.focus();      
      }
    } else {
      done();

      safeCall(success);
    }
  };

  iframeDom.addEventListener('error', function (event) {
    done();

    safeCall(fail)
  });

  try {
    iframeDom.src = url;
  } catch (error) {
    done();

    safeCall(fail);
  }

  timer = setTimeout(function () {
    done();

    safeCall(fail);
  }, 300);
}