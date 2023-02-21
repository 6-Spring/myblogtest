const moment = require('moment');

module.exports = {
    // base: "/myblogtest/",
    themeConfig: {
        astUpdated: '最后更新时间',
        logo: '/assets/img/logo.png',
        //  导航栏链接
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'External', link: 'https://google.com'},
        ]
    },

    // 插件
    plugins: [
        // 时间插件
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale("zh-cn")
                    return moment(timestamp).format("LLLL")
                }
            }
        ]
    ]
}