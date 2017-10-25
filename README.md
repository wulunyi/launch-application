# launchApplication

## 使用示例
```javascript
import launchApplication from 'launch-application';

let url = 'xxx://open';

function success() {
  alert('success');
}

function fail() {
  alert('fail')
}

launchApplication(url, success, fail);
```

## launchApplication(url, success, fail);
唤起桌面应用
### 参数
- url <String> 外链地址
- success <Function> 成功回调
- fail <Function> 失败回调

## 具体使用请参考 test