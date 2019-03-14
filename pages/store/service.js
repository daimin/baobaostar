import wepy from 'wepy';

const host = 'http://test.yygcms.cn';
const wxRequest = async (params = {}, url) => {
    // wepy.showToast({
    //   title: '加载中',
    //   icon: 'loading'
    // });
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: params.data || {},
        header: {'Content-Type': 'application/json'},
    });
    wepy.hideToast();
    return res;
};

const toplist = (params) => wxRequest(params, host + '/novelApi');
const newlist = (params) => wxRequest(params, host + '/api/site/Article/news');
const search = (params) => wxRequest(params, host + '/novelSearchApi?name=' + params.query.name);
const detail = (params) => wxRequest(params, host + '/novelInfoApi?name=' + params.query.name);

module.exports = {
  toplist,
  newlist,
  search,
  detail
};