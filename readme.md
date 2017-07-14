# Hello, Integration Testing!

使用 Browser Automation Tools

[testcafe](https://github.com/DevExpress/testcafe)
* 沒有任何 dependencies (無需 Selenium, 無需 WebDriver)
* 可呼叫瀏覽器們發動測試： Chrome, Firefox, Safari, IE, Edge
* fixture, test 全域污染
* 有些功能要錢

[nightmare](https://github.com/segmentio/nightmare)
* 基於 Chromiun(Electron) 瀏覽器的自動化測試工具
* 使用 `Promise`, `generator` 以及 `async/await` 的方式各實作一次
* generator 使用 tj 大大的 [co](https://github.com/tj/co)

## Installation

```sh
npm install
# yarn
```

## Usage

Demo 使用 testcafe 做跨瀏覽器測試，包含了 `Safari`, `Opera`, `Chrome`, 和 `Firefox`，前提是你電腦要安裝這些瀏覽器（沒試過沒安裝的下場 XD）

如果瀏覽器未安裝，請在 `gulpfile.config` 裡將它刪除：

```js
  // ...
    .pipe(testcafe({
      browsers: ['safari', 'chrome', 'firefox', 'opera'],
    }));
```

```sh
npm run test # 透過 gulp 執行 testcafe
npm run test:example # 執行 nightmare 瀏覽器自動化
```



## FAQ

* Against SPA (CCR)?
* Async Multi sites?
