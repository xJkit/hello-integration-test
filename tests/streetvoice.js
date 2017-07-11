
fixture('Get started')
.page('https://streetvoice.com/sweetjohnband/songs/499277/');

const Selector = require('testcafe').Selector;
test(`發動 ${process.env.NUMBERS} 次點歌測試，成功！`, async t => {
  const playBtn = Selector('.btn.btn-red.btn-lg.btn-circle.btn-play.m-right-1');
  for (let i = 0; i < process.env.NUMBERS; i++) {
    await t
      .click(playBtn, {speed: 0.3})
  }
});

// test('my first test', async t => {
//   const playBtn = await Selector('.btn.btn-red.btn-lg.btn-circle.btn-play.m-right-1');
//   const playIcon = await Selector('#js-play-icon');
//   await t
//     .click(playBtn)
//     .expect(playIcon.hasClass('has-playing')).ok('has playing now...')
//     .click(playBtn)
// });
/// --- prompt start

