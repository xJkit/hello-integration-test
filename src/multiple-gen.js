const Nightmare = require('nightmare');
const co = require('co');

const urls = ['https://tw.yahoo.com', 'https://google.com', 'http://shopping.pchome.com.tw/'];

function* getTitle(nightmare, url) {
  const title = yield nightmare.goto(url).wait('body').title().end();
  return title;
}

// yield* version, actually wrapped by the co
// 平行運算好幾個爬蟲，比較吃記憶體

function* run(Nightmare) {
  const titles = yield urls.map(url => getTitle(new Nightmare({ show: true }), url));
  return titles;
}

co.wrap(run)(Nightmare)
  .then(response => console.log(response));

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
