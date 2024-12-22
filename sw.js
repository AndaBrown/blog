const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"fa1272737d27b3153fba3cfad9878bcc","url":"./404.html"},{"revision":"73a1d218ef1994a27bf3d95eca6f1b5d","url":"./about/index.html"},{"revision":"f25defdcf71edd2b3bbf271847481451","url":"./archives/2022/06/index.html"},{"revision":"5c7b87c6f89eb9cbef2bde9f386a0d82","url":"./archives/2022/07/index.html"},{"revision":"e08abfc46a857685ffbbcf3f49eb80cd","url":"./archives/2022/08/index.html"},{"revision":"ee175bda0f6eb7038b16654547129358","url":"./archives/2022/10/index.html"},{"revision":"ec762c082b216befdcc6f748f19cda03","url":"./archives/2022/11/index.html"},{"revision":"b7c14ff8bffbb8c715dd3bd0adc53d5e","url":"./archives/2022/12/index.html"},{"revision":"346a43ea52236c1a4d2caa443fdd5209","url":"./archives/2022/index.html"},{"revision":"f41aaea8c14f8a8d272426b009aef1fb","url":"./archives/2022/page/2/index.html"},{"revision":"297b613e4839f370642b0cd59e975d10","url":"./archives/2023/02/index.html"},{"revision":"f0a96f81882a23d4092f5d1847d4ce77","url":"./archives/2023/04/index.html"},{"revision":"4ca9d3c9a4bcd9074df0d43eed60b19e","url":"./archives/2023/index.html"},{"revision":"243f95f6eee0085925ed0e29ba1e9255","url":"./archives/2024/04/index.html"},{"revision":"291f38ad64f18628a27b1c682dffd78b","url":"./archives/2024/05/index.html"},{"revision":"5adec70dae0e5ff9d891318ab781fac8","url":"./archives/2024/06/index.html"},{"revision":"c3d484c53ec4ac1b02589c9071910816","url":"./archives/2024/09/index.html"},{"revision":"0bc481cf9f87cf00e725f1634db4df71","url":"./archives/2024/index.html"},{"revision":"0d510b808313819db90f8c5556097d93","url":"./archives/index.html"},{"revision":"c66edefc3fe6b6ba92efa6a63dde34c8","url":"./archives/page/2/index.html"},{"revision":"5ad990c3290ab0c73e45000e76340d63","url":"./archives/page/3/index.html"},{"revision":"bde1e6bfc775a896e8f42f3e20d28da4","url":"./categories/AI/index.html"},{"revision":"494649916c4dace67c852b71bb787ac2","url":"./categories/Gridea/index.html"},{"revision":"3f7179c8593dfdcbcb73216dc3597c60","url":"./categories/index.html"},{"revision":"2e8b34dfc011d0e99909f7e78d19a1cf","url":"./categories/Vercel/index.html"},{"revision":"e2af8546bc355bf81645ba85c4bdbdac","url":"./categories/休闲/index.html"},{"revision":"c67cbae2290a67606978cb489dc517da","url":"./categories/建站/index.html"},{"revision":"7193d01574b15248861cf78c33912bfe","url":"./categories/科普/index.html"},{"revision":"d391f0efbe8efde0b23ed190caf39be4","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"7333a65d933866b8e30d40e125937247","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"083828f3a5acdf7f819cdd0d260ad847","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"a8e4bdd7f0bfd0df04cf7f482cf6fbea","url":"./link/index.html"},{"revision":"0aa79a481bd146c063c16985d783e580","url":"./message/index.html"},{"revision":"777e0b2321bb00e9826c6358457a7e49","url":"./page/2/index.html"},{"revision":"c9c3cd543aa913fec7ac64eee48313e5","url":"./page/3/index.html"},{"revision":"70ad13214995bcefd509aed69d7a2ecd","url":"./post/193912eb/index.html"},{"revision":"5f3794c0c2c8cc369a699c4298b33fce","url":"./post/220b8380/index.html"},{"revision":"dd5692eea5ffa36fd1855630b81cee5d","url":"./post/24dc856c/index.html"},{"revision":"ce977164f6efce47fa8b331333249b5b","url":"./post/3082b2c6/index.html"},{"revision":"7c93ee223ba7b7f00df9846c83a76b12","url":"./post/3df9585/index.html"},{"revision":"5cc30ff4a148d1c1679c485a776e6d2c","url":"./post/4a17b156/index.html"},{"revision":"7a42a530cc7f08581fc229c4450fc590","url":"./post/739f0a30/index.html"},{"revision":"8a20aaf3b7f272232c917ddc43f35ad0","url":"./post/73fccf9a/index.html"},{"revision":"fbf0640f877a7b27ae2f8b8527b7f564","url":"./post/7ca5704e/index.html"},{"revision":"8a85deec74dc2f4580ef16f055497f2a","url":"./post/7fc77154/index.html"},{"revision":"d68e7759bcbcd65b6f6cf0c648b33103","url":"./post/8097b5e3/index.html"},{"revision":"8ac7e5a5d65d6b7d22b14040ccd158ba","url":"./post/8422c4dc/index.html"},{"revision":"2af85c1d07f435c14cb1e29d5b24548b","url":"./post/99c7fa1c/index.html"},{"revision":"85621d95cb32172a5265511eb3ab3ba2","url":"./post/9c60e209/index.html"},{"revision":"764204662de7ad17e476f3d2754215d8","url":"./post/ae58d2f1/index.html"},{"revision":"749ec670e3ba27d3bc9a1d25ac4e0496","url":"./post/d4550abf/index.html"},{"revision":"6631bef4861b137de95e0b850f31e5cb","url":"./post/d50c4d0e/index.html"},{"revision":"4b31cc8cf0973453a5f2e1506c6c4282","url":"./post/db569493/index.html"},{"revision":"1621d14280a01fe187e8c1609fb7f97e","url":"./post/dd83a796/index.html"},{"revision":"eaeb3809de96c0bdd39ac62ff9d95df8","url":"./post/f82f332a/index.html"},{"revision":"9e6d0fc686ba5a87cbfe5a9079c1bd0e","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"240661fc7c6c056458ff7ddbffc74bb5","url":"./tags/AI/index.html"},{"revision":"8b60603d5a30040866fdd449241a7d95","url":"./tags/Aplayer/index.html"},{"revision":"81799e1dc1319d82b16c81d73da14aa8","url":"./tags/Bing/index.html"},{"revision":"a2470d736850cfaf5b055de438ad331d","url":"./tags/BUG/index.html"},{"revision":"72cd883665d9c37dc548c6ad0885a127","url":"./tags/CDN/index.html"},{"revision":"83ede2eb5acd00315eadc823da5950b9","url":"./tags/CMS/index.html"},{"revision":"1d7adf1b86864f42d2d413b774eea5d7","url":"./tags/css/index.html"},{"revision":"d0b1b3d9e09e19a661f0e01825120083","url":"./tags/DNS/index.html"},{"revision":"e59d518b0ff0e315a393f267db4eeafc","url":"./tags/Flash/index.html"},{"revision":"eb018fa104d40c2d70c489002c470e7d","url":"./tags/GFW/index.html"},{"revision":"dead672ddb4e1f2c8f97cc92674c51b5","url":"./tags/Gridea/index.html"},{"revision":"1256b5ff6ad9e274dca6f3b7cc6377bf","url":"./tags/HTML/index.html"},{"revision":"4b8912115be5e6df17e4f6219e6d016e","url":"./tags/index.html"},{"revision":"5653e5bebfaa5c528f205c853e485d83","url":"./tags/JavaScript/index.html"},{"revision":"56ec316c12c5d571d1925b59b1399e30","url":"./tags/JQuery/index.html"},{"revision":"fc4bacea53e16e154382b4601cf6e35b","url":"./tags/MetingJS/index.html"},{"revision":"22f253ebb9f1cfbef3dbc47b32294bb1","url":"./tags/NexT/index.html"},{"revision":"603027ecd0586666365e9b2944614ea6","url":"./tags/P2P/index.html"},{"revision":"b5fdb6a24cb10643a46614ebad2a881b","url":"./tags/RSA/index.html"},{"revision":"e2198ebd9b1415c19b9ec12cae7ce1a8","url":"./tags/Vercel/index.html"},{"revision":"0ef9e60c457acd587b7f64681b469f6d","url":"./tags/分享/index.html"},{"revision":"bd82a0de33114b29f0fc4e946f1ec921","url":"./tags/加密/index.html"},{"revision":"e1ef831444989d2e64c64d930aa7bc9a","url":"./tags/加载动画/index.html"},{"revision":"7721bb6f0fce819f42c38c56c5371e59","url":"./tags/右键菜单/index.html"},{"revision":"48704efb545177b65f843a70f900ef7f","url":"./tags/域名/index.html"},{"revision":"766c750b52991fa5a0067b16fade589c","url":"./tags/密码学/index.html"},{"revision":"c5f97387956aec4d80fe1070abbbf452","url":"./tags/建站/index.html"},{"revision":"31a3f2cf59c86f7f5d8e344269c887b0","url":"./tags/插件/index.html"},{"revision":"45545272677ebe3e76d87c3bc7fc75cf","url":"./tags/服务器/index.html"},{"revision":"7383248dc5a9ec243f7f8228f8ebec65","url":"./tags/网页源码/index.html"},{"revision":"600f011c0f3b7910415c3da3cf63f15e","url":"./tags/美化/index.html"},{"revision":"79823f3f3822345ee958425a974df5db","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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
    /^https:\/\/i\.pixiv\.re/,
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