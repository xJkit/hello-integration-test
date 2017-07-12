// crawl multiple websites by standard for-loop
const Nightmare = require('nightmare');
const co = require('co');

const urls = ['https://tw.yahoo.com', 'https://google.com', 'http://shopping.pchome.com.tw/'];

// 由於 nightmare 使用 electron 單一實體，必須一一造訪網站。

/* 錯誤示範 *****************
urls.forEach(function(url) {
  nightmare.goto(url)
    .wait('body')
    .title()
    .then(function(result) {
      results.push(result);
    });
});
************************** */

function* getTitle(nightmare, url) {
  const title = yield nightmare.goto(url).wait('body').title();
  return title;
}

function* run(nightmare) {
  try {
    const titles = [];
    for (let i = 0; i < urls.length; i += 1) {
      const title = yield getTitle(nightmare, urls[i]);
      titles.push(title);
    }
    yield nightmare.end();
    return titles;
  } catch (err) {
    console.log(err);
    return err;
  }
}

co.wrap(run)(Nightmare)
  .then(response => console.log(response));
