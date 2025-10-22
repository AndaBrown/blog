const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"c2400e51b90a244501595531c80c8dc1","url":"./404.html"},{"revision":"90939c23bdde0f861cf0adc2c3d146d4","url":"./about/index.html"},{"revision":"1822600b514b8830c415f15def7b17e4","url":"./archives/2022/06/index.html"},{"revision":"e7014f1b7f1c41fff3d8fa38e58a3963","url":"./archives/2022/07/index.html"},{"revision":"de77c0e4c15a8f5ce0f85da3ba6c4c92","url":"./archives/2022/08/index.html"},{"revision":"0c00eb571c5d55fc454520b05ab702b5","url":"./archives/2022/10/index.html"},{"revision":"1b8200d861ef31a935e2edc2e19aaf59","url":"./archives/2022/11/index.html"},{"revision":"eb94f34b7005c1afb3d755add844d720","url":"./archives/2022/12/index.html"},{"revision":"6bd831dd255d6dd3d2b4005be6a445b3","url":"./archives/2022/index.html"},{"revision":"907364442b36b4e361aa5d8a27011e77","url":"./archives/2022/page/2/index.html"},{"revision":"edf5618b2323c42da7af6c2118352f7a","url":"./archives/2023/02/index.html"},{"revision":"3818fe42a567d4272e75541723b56d2f","url":"./archives/2023/04/index.html"},{"revision":"43c79b1dba517da79c40f4d629d5d8ec","url":"./archives/2023/index.html"},{"revision":"22e156cc1c509a46dd08f2845547b031","url":"./archives/2024/04/index.html"},{"revision":"8a513f1d87912e3ff509997c9210e201","url":"./archives/2024/05/index.html"},{"revision":"8e1d10ed11beef72732633e216e5cab0","url":"./archives/2024/06/index.html"},{"revision":"6c77f13a2fe8cbb16c69d42b98150c2c","url":"./archives/2024/09/index.html"},{"revision":"6a4ea8af99fea4c0585cd414cb1cdb3b","url":"./archives/2024/index.html"},{"revision":"e3bdc24b248e60461edaa5a07d2392b3","url":"./archives/2025/09/index.html"},{"revision":"7f111e674a249e73f2106ddd76df13a0","url":"./archives/2025/index.html"},{"revision":"0d47160fb7807f91bc5149051f7cc7ce","url":"./archives/index.html"},{"revision":"4a9901fb23b57edca3c5d79390fcca11","url":"./archives/page/2/index.html"},{"revision":"2d276329e6ee00b49ce649eb4dc4e063","url":"./archives/page/3/index.html"},{"revision":"237e258e3a8a323746fdacee8911c718","url":"./categories/AI/index.html"},{"revision":"64f55425c9160944a4a454b8c12d18eb","url":"./categories/Gridea/index.html"},{"revision":"c1cc947b82fb59652c43b3b931d39687","url":"./categories/index.html"},{"revision":"f6f92b915c7648c2dd744bb5847e8b56","url":"./categories/Vercel/index.html"},{"revision":"b08d09f07c26060f2215725504a6dce5","url":"./categories/休闲/index.html"},{"revision":"93f585fc9e6b29f4d679701a3fc31170","url":"./categories/建站/index.html"},{"revision":"e414ca60de2381ce4bb5b23d45f67555","url":"./categories/科普/index.html"},{"revision":"dc220c1500ceb8f52cb5477f36d5329c","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"e641e5fba771d1e3964a0e46daff0e48","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"681fab11723a687db247e5c0b79251aa","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"09c3ce3e30bd5c63a6aa3df0316d0ed0","url":"./link/index.html"},{"revision":"8dedde45d0d3460e4f4d1cddd13c0510","url":"./message/index.html"},{"revision":"7f5c9b7b7f187a0c38533f3293b624f8","url":"./page/2/index.html"},{"revision":"133b07ccc536c73665d841cece0dffbc","url":"./page/3/index.html"},{"revision":"cf6520a925b3bd2ddb4ccd483f12709f","url":"./post/193912eb/index.html"},{"revision":"50ce148a08f49faca333238e73144547","url":"./post/220b8380/index.html"},{"revision":"935fadf4f77ba3e082bf00143ff99e55","url":"./post/24dc856c/index.html"},{"revision":"87b181b2dc0cdf2028cb62a79595ec72","url":"./post/3082b2c6/index.html"},{"revision":"af7c83713ce8e2c21c77b3ef4d7cfe79","url":"./post/3df9585/index.html"},{"revision":"2605cd28e974d8340bf10b1aca14f5c0","url":"./post/4a17b156/index.html"},{"revision":"57a9e632b3647484ccefd18bc2396f81","url":"./post/739f0a30/index.html"},{"revision":"d0a819e6be2c614281ef65fddf6a57fb","url":"./post/73fccf9a/index.html"},{"revision":"3ccfeb266db78e72ab3ef1a986689339","url":"./post/7ca5704e/index.html"},{"revision":"f2a190ab6760666b9ed2b82c2da9abed","url":"./post/7fc77154/index.html"},{"revision":"d7ff7167a972c593715499c1191c3cc8","url":"./post/8097b5e3/index.html"},{"revision":"044df9d7ac329ef8272efb6b1d3f0a94","url":"./post/8422c4dc/index.html"},{"revision":"0f196c8b4b9f64f22417c3e857975da2","url":"./post/99c7fa1c/index.html"},{"revision":"678ec045eb3f5cfaeb545c38b734b226","url":"./post/9c60e209/index.html"},{"revision":"2813c53e30efe2533845dae4cd8956fd","url":"./post/ae58d2f1/index.html"},{"revision":"a9f61607691cad802f442fb48f71fbab","url":"./post/b9a3407d/index.html"},{"revision":"1c0cfef4181063368e708cb4de699f19","url":"./post/d4550abf/index.html"},{"revision":"26bbd0e083c97c3804885d1261f94c9a","url":"./post/d50c4d0e/index.html"},{"revision":"05f1496c7d20e99fd664fc54c0fe6137","url":"./post/db569493/index.html"},{"revision":"e229c4828cee5b28737d78724d793c84","url":"./post/dd83a796/index.html"},{"revision":"99095e2e3d806c0e242c1e5c64835e8d","url":"./post/f82f332a/index.html"},{"revision":"9d7e270d785017679fe44499758d95ea","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"78190b5c87ac7d1602e427511f6ae0ae","url":"./tags/AI/index.html"},{"revision":"e2b8f0f33744378d1dd2b186cf103b22","url":"./tags/Aplayer/index.html"},{"revision":"83633665b65c461d1156f0ce483fe4e7","url":"./tags/Bing/index.html"},{"revision":"50af0d65ec5180d2c005b6a359815cbe","url":"./tags/BUG/index.html"},{"revision":"1b388ea1cb09ed0cd36320400405f105","url":"./tags/CDN/index.html"},{"revision":"69bf8d47ec57ff870a3b7b1e54300f6f","url":"./tags/CMS/index.html"},{"revision":"cb36b7dbf0a8dc144ff262c9452f7d12","url":"./tags/css/index.html"},{"revision":"03c4f9e2200ec1fc47540b3f715203d3","url":"./tags/DNS/index.html"},{"revision":"9a1ed0c9a9999e997e25f5b28574e783","url":"./tags/Flash/index.html"},{"revision":"f155e92f451ac6304ab6b806f220382b","url":"./tags/GFW/index.html"},{"revision":"f96faee8aa45f9ccb96283a65f0d5209","url":"./tags/Gridea/index.html"},{"revision":"67693d9fa59414c5ef46f31fe2f86702","url":"./tags/HTML/index.html"},{"revision":"e4a2a9c4b92d52d4f1829e69b1dc5cc3","url":"./tags/index.html"},{"revision":"81594eb685fe1c157ed343fd8129384c","url":"./tags/JavaScript/index.html"},{"revision":"18e8a1ca6fee73de8dfd5c5e61daf8bf","url":"./tags/JQuery/index.html"},{"revision":"21cf633e1f3aaa4af78388479bc79db9","url":"./tags/MetingJS/index.html"},{"revision":"57e1b0a38d46c71c85d636573d3a0f4d","url":"./tags/NexT/index.html"},{"revision":"33103e09677cade9756a814df5be4295","url":"./tags/P2P/index.html"},{"revision":"5eef27d4b250456a4219b3a106858b83","url":"./tags/RSA/index.html"},{"revision":"aa06aa7fcf9f14adb50babb3c0934bbf","url":"./tags/Vercel/index.html"},{"revision":"4e65bf12436a4b7289834b42d05cd1fb","url":"./tags/分享/index.html"},{"revision":"d1767ca0db249681b3f3aed5b523889b","url":"./tags/加密/index.html"},{"revision":"23d6d1f8ce7ade7cb32087917595d39c","url":"./tags/加密货币/index.html"},{"revision":"9ecd37aee0e5aaf4ca98584e2ab0814a","url":"./tags/加载动画/index.html"},{"revision":"910fd082621aaa5bb18ee6f121ad04c8","url":"./tags/区块链/index.html"},{"revision":"7f5b960a84275e632c6ad443a80f36dc","url":"./tags/右键菜单/index.html"},{"revision":"eb53200ca441d715f89a09204f8bb618","url":"./tags/域名/index.html"},{"revision":"c49042b38230c5b2f7a32045403bfa0c","url":"./tags/密码学/index.html"},{"revision":"24d145cd21a6a1504037fd9589463746","url":"./tags/建站/index.html"},{"revision":"b356250011ff9974383b609817dd627c","url":"./tags/插件/index.html"},{"revision":"4a1e841df95199e71f19c4cefef52634","url":"./tags/服务器/index.html"},{"revision":"73966271d61dcd89617699baffb431d6","url":"./tags/网页源码/index.html"},{"revision":"12a6a062329bd0ef28511178b385fe2e","url":"./tags/美化/index.html"},{"revision":"116330d54427dd25e1df18e63c901d68","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Pixiv Images
workbox.routing.registerRoute(
    /^https:\/\/i\.pixiv\.(?:nl|re)/,
    new workbox.strategies.CacheFirst({
        cacheName: "pixiv-re",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

//Bing Wallpaper
workbox.routing.registerRoute(
    /^https:\/\/api\.dujin\.org/,
    new workbox.strategies.CacheFirst({
        cacheName: "bing-wallpaper",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();