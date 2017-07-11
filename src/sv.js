const nightmare = require('nightmare')({ show: true });
const { BASE_URL } = require('./config');
// const { BASE_URL } = config;

const requestHeaders = {
  Host: BASE_URL,
  Origin: 'http://pages.streetvoice.com',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'X-CSRFToken': '',
  Referer: BASE_URL,
  Cookie: '',
};

const getHeaderData = url => nm => nm
  .goto(url)
  .cookies.get({ name: 'csrftoken' })
  .then((token) => {
    requestHeaders['X-CSRFToken'] = token.value;
  })
  .then(() => nm.goto(url))
  .then(response => {
    requestHeaders.Cookie = response.headers['set-cookie'];
    console.log('final headers: ', requestHeaders);
    return response;
  });
  // .then(() => nm.goto(url).cookies.clearAll());

nightmare
  .use(getHeaderData(BASE_URL));

/** All cookie data

[ { name: 'csrftoken',
    value: 'HeuWBkhq1vqMPNyPthY6EaSXqDQIbwNq',
    domain: 'streetvoice.com',
    hostOnly: true,
    path: '/',
    secure: false,
    httpOnly: false,
    session: false,
    expirationDate: 1531205113.593244 },
  { name: 'session',
    value: 'ke3yhz5bu4tjda6tsju42b2xs0vf0lmj',
    domain: '.streetvoice.com',
    hostOnly: false,
    path: '/',
    secure: false,
    httpOnly: true,
    session: false,
    expirationDate: 1500965113.593356 },
  { name: 'QINGCLOUDELB',
    value: 'b01f54a4205e24e281030b11ee92af50950860ee3d8ebff2ac20a218dba70f0f|WWRz/|WWRz/',
    domain: 'streetvoice.com',
    hostOnly: true,
    path: '/',
    secure: false,
    httpOnly: false,
    session: true },
  { name: '_ga',
    value: 'GA1.2.1813723458.1499755514',
    domain: '.streetvoice.com',
    hostOnly: false,
    path: '/',
    secure: false,
    httpOnly: false,
    session: false,
    expirationDate: 1562827514 },
  { name: '_gid',
    value: 'GA1.2.275293428.1499755514',
    domain: '.streetvoice.com',
    hostOnly: false,
    path: '/',
    secure: false,
    httpOnly: false,
    session: false,
    expirationDate: 1499841914 },
  { name: '__gads',
    value: 'ID=f92f12f84215ccab:T=1499755515:S=ALNI_MYdyOIEVsKQgy5K4Z6tYd78G8_F4w',
    domain: '.streetvoice.com',
    hostOnly: false,
    path: '/',
    secure: false,
    httpOnly: false,
    session: false,
    expirationDate: 1562827515 } ]
*/
