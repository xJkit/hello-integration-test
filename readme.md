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

## FAQ

* Against SPA (CCR)?
* Async Multi sites?
