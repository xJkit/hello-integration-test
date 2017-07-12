const Nightmare = require('nightmare');
const co = require('co');
const { BASE_URL } = require('./config');
const urls = ['https://tw.yahoo.com', 'https://google.com', 'http://shopping.pchome.com.tw/'];

function* getTitle(nightmare, url) {
  const title = yield nightmare.goto(url).wait('body').title();
  return title;
}
// for-loop version
function* run1(nightmare) {
  try {
    const titles = [];
    for (let i = 0; i < urls.length; i++) {
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
// yield* version, actually wrapped by the co
function* run2(Nightmare) {
  const titles = yield urls.map((url) => {
    const nightmare = new Nightmare({ show: false });
    const title = getTitle(nightmare, url);
    nightmare.end();
    return title;
  });
  return titles;
}

co.wrap(run2)(Nightmare)
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
