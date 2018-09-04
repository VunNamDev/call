export default {
  releaseVersion: true,
  versionName: '1.0.9',
  secret: {
    session: 'tiendaica92',
    data: 'emlaSieuNhan1992'
  },
  api: {
    host: {
      base: 'http://149.28.151.10:4000'
    },
    path: {
      base: {
        search: '/search'
      }
    }
  },
  code: {
    CODE_OK: 1,
    CODE_ERR: 2,
    CODE_OK_WITH_MESS: 3,
    CODE_ERR_WITH_MESS: 4,
    CODE_OK_ERR: 5
  },
  ads: {
    Banner: 'ca-app-pub-3940256099942544/6300978111',
    Interstitial: 'ca-app-pub-3940256099942544/1033173712',
    Rewarded: 'ca-app-pub-3940256099942544/5224354917',
    testDevives: ['2DDC859A4C5BE4F88143CB22700EEF57']
  }
};
