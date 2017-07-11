module.exports = {
  BASE_URL: 'https://streetvoice.com',
  API_ROOT: '/api/v3/songs',
  SONG_ID: {
    anQuanFanWei: '499277',
  },
  getPlayUrl: songId => `${this.BASE_URL}${this.API_ROOT}/${songId}/play/`,
};

