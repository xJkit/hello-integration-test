// go to https://streetvoice.com/sweetjohnband/songs/499277/ and paste the following code
// const $ = require('jquery');

const SWJ = class {
  constructor() {
    this.randomUid = Math.floor(Math.random() * 200000000000);
    this.qs = 'v=1&_v=j56&a=624830922&t=event&_s=1&dl=https%3A%2F%2Fstreetvoice.com%2Fsweetjohnband%2Fsongs%2F499277%2F&ul=en-us&de=UTF-8&dt=%E5%AE%89%E5%85%A8%E7%AF%84%E5%9C%8D%20-%20%E7%94%9C%E7%B4%84%E7%BF%B0%20Sweet%20John%20%7C%20StreetVoice&sd=24-bit&sr=1920x1080&vp=1250x1638&je=0&ec=user%20triggered%20play&ea=song&el=%E5%AE%89%E5%85%A8%E7%AF%84%E5%9C%8D%20(499277)&_u=SACAAEABI~&jid=480398286&gjid=560881336&cid=1714896842.1499332364&tid=UA-964610-24&_gid=1827866541.1499332364&_r=1&cd1=Song%20detail&z=585960308';
    this.requestHeader = {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRFToken': '14v9gnL8IQ4qGrQRZ9gJBxL00yWZFo7z',
    };
    this.get = this.get.bind(this);
    this.play = this.play.bind(this);
    this.changeUid = this.changeUid.bind(this);
    this.initAllJob = this.initAllJob.bind(this);
  }
  get() {
    const URL = `https://streetvoice.com/api/v3/songs/499277?only_fields=id,name,image,like_count,is_like,user&_=${this.randomUid}`;
    fetch(URL, this.requestHeader)
      .then(response => response.json())
      .then(json => console.log(json));
  }
  play() {
    const URL = `https://streetvoice.com/api/v3/songs/499277/play?only_fields=id,name,image,like_count,is_like,user&_=${this.randomUid}`;
    fetch(URL, { method: 'POST' });
  }
  changeUid() {
    this.randomUid = Math.floor(Math.random() * 200000000000);
    console.log(`你的身分變成 id: ${this.randomUid}`);
  }
  initSongJob({ ms = 1000 }) {
    setInterval(this.get, ms);
  }
  initPlayJob({ ms = 1000 }) {
    setInterval(this.play, ms);
  }
  initUidJob({ ms = 10000 }) {
    setInterval(this.changeUid, ms);
  }
  initAllJob({ songMs = 1000, idMs = 10000 }) {
    this.initSongJob({ ms: songMs });
    // this.initPlayJob({ ms: songMs });
    this.initUidJob({ ms: idMs });
  }
};

const swj = new SWJ();
swj.initAllJob({});


// origin
curl 'https://streetvoice.com/api/v3/songs/499277/?only_fields=id,name,image,like_count,is_like,user&_=1499343461829' -H 'Pragma: no-cache' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.8,zh-TW;q=0.6,zh;q=0.4,zh-CN;q=0.2' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Cache-Control: no-cache' -H 'X-Requested-With: XMLHttpRequest' -H 'Cookie: session=acu6edxnhehffuv67c67osamxxj1366s; csrftoken=14v9gnL8IQ4qGrQRZ9gJBxL00yWZFo7z; QINGCLOUDELB=b01f54a4205e24e281030b11ee92af50950860ee3d8ebff2ac20a218dba70f0f|WV4qc|WV4oS' -H 'Connection: keep-alive' -H 'Referer: https://streetvoice.com/sweetjohnband/songs/499277/' -H 'X-CSRFToken: 14v9gnL8IQ4qGrQRZ9gJBxL00yWZFo7z'
GET /api/v3/songs/499277/?only_fields=id,name,image,like_count,is_like,user&_=1499344287067 HTTP/1.1
Host: streetvoice.com
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Accept: application/json, text/javascript, */*; q=0.01
X-Requested-With: XMLHttpRequest
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36
X-CSRFToken: 14v9gnL8IQ4qGrQRZ9gJBxL00yWZFo7z
Referer: https://streetvoice.com/sweetjohnband/songs/499277/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.8,zh-TW;q=0.6,zh;q=0.4,zh-CN;q=0.2
Cookie: session=acu6edxnhehffuv67c67osamxxj1366s; csrftoken=14v9gnL8IQ4qGrQRZ9gJBxL00yWZFo7z; QINGCLOUDELB=b01f54a4205e24e281030b11ee92af50950860ee3d8ebff2ac20a218dba70f0f|WV4tr|WV4oS

// 301
GET /api/v3/songs/499277?only_fields=id,name,image,like_count,is_like,user&_=103006880971 HTTP/1.1
Host: streetvoice.com
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36
Accept: */*
Referer: https://streetvoice.com/sweetjohnband/songs/499277/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.8,zh-TW;q=0.6,zh;q=0.4,zh-CN;q=0.2

// 200
GET /api/v3/songs/499277/?only_fields=id,name,image,like_count,is_like,user&_=103006880971 HTTP/1.1
Host: streetvoice.com
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36
Accept: */*
Referer: https://streetvoice.com/sweetjohnband/songs/499277/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.8,zh-TW;q=0.6,zh;q=0.4,zh-CN;q=0.2

