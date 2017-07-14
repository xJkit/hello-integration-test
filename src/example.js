const nightmare = require('nightmare')({ show: true });

nightmare
  .goto('https://google.com')
  .type('#lst-ib', 'github nightmare')
  .click('input[type=submit]')
  .wait('div._NId')
  .wait(3000) // for demo purpose, just wait for 3 seconds
  .evaluate(() => {
    const links = Array.from(document.querySelectorAll('div._NId h3.r a'));
    return links.map(link => link.href);
  })
  .end()
  .then(result => console.log(result))
  .catch(err => console.error('failed: ', err));
