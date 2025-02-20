const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"56b89a2c1f0b2e7691de8d0a02482b72","url":"./404.html"},{"revision":"40b96377f4e78cae572a204fc9a200a7","url":"./about/index.html"},{"revision":"477b29ebb86acbc2b88f39c31099355f","url":"./archives/2022/06/index.html"},{"revision":"6531076633d2f179e81bef4f7d0da552","url":"./archives/2022/07/index.html"},{"revision":"fa9f17b4300132147b81d1723109260a","url":"./archives/2022/08/index.html"},{"revision":"d780cf755670415a5e21c972af47020f","url":"./archives/2022/10/index.html"},{"revision":"812602155d7d25f406b7091a3a603740","url":"./archives/2022/11/index.html"},{"revision":"c2c0b561b8455e373a784006823d9e95","url":"./archives/2022/12/index.html"},{"revision":"d5fe54f11b79332100588974f52ab383","url":"./archives/2022/index.html"},{"revision":"19636b8a2866117008c92a352fe78857","url":"./archives/2022/page/2/index.html"},{"revision":"8908dad76fa01a7642d6a3433b331e26","url":"./archives/2023/02/index.html"},{"revision":"eeee834a8fd1bd47c369a33b6bee743c","url":"./archives/2023/04/index.html"},{"revision":"550bb419b0fd322fb0ea5ae3d82cd9a6","url":"./archives/2023/index.html"},{"revision":"0c21061a2bc7ab07fddc8204ea5ff4f4","url":"./archives/2024/04/index.html"},{"revision":"a42520c351db864a60c156cc7f46cb8d","url":"./archives/2024/05/index.html"},{"revision":"3c3116b915d36085340c46296ae9345c","url":"./archives/2024/06/index.html"},{"revision":"df8f92d8166b6932be2d286ed2409002","url":"./archives/2024/09/index.html"},{"revision":"b69f7f9e168edc09d17aac4511263826","url":"./archives/2024/index.html"},{"revision":"1df94db36cf18022c9b693de643def7f","url":"./archives/index.html"},{"revision":"f771e49387fa83ee345e69e7a6ee824a","url":"./archives/page/2/index.html"},{"revision":"849be95c13d228a194f957325cb6a0d8","url":"./archives/page/3/index.html"},{"revision":"d446faa7ad982ead2b09f1dcfe42279a","url":"./categories/AI/index.html"},{"revision":"ba46f5a13cc585e012696dc7248821bd","url":"./categories/Gridea/index.html"},{"revision":"b758290460c55566171d7951c42ec9af","url":"./categories/index.html"},{"revision":"fe4ff8f8c882e716e8659cc087b117b1","url":"./categories/Vercel/index.html"},{"revision":"9977a3deae393d93de114aea4ecab1df","url":"./categories/休闲/index.html"},{"revision":"c2ba4be7fd729ad4ea982797e4815e92","url":"./categories/建站/index.html"},{"revision":"eefbf5ae3f29547fa761932f21bb7dd1","url":"./categories/科普/index.html"},{"revision":"85850823202f2869e0b6b330ad4dcfd9","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"0d4ee156c6828d2de15eacef06d43e18","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"8e8d95c8e5918869cc3af0e732ecf3bc","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"8d8b9b1af3c194530e47fd8ffe53165e","url":"./link/index.html"},{"revision":"e42087224b95257c0590121328fe11b0","url":"./message/index.html"},{"revision":"90bcb95f75fddcf84140072a8a0d76f4","url":"./page/2/index.html"},{"revision":"afdfbfb1533c20914d230d1a9ee94cde","url":"./page/3/index.html"},{"revision":"24a40c20c608da3ea5eebebfadd65138","url":"./post/193912eb/index.html"},{"revision":"62f6389ce933db4cbdbd4b7963d9bcf2","url":"./post/220b8380/index.html"},{"revision":"0720398b20d8235698abadac01e7f90e","url":"./post/24dc856c/index.html"},{"revision":"fa84193f82ecf411ac4e6218ce7d2469","url":"./post/3082b2c6/index.html"},{"revision":"e2d4098addbcc44e453d1e9e3360f978","url":"./post/3df9585/index.html"},{"revision":"2b2fe561541a63e91168f50fecd5fbb4","url":"./post/4a17b156/index.html"},{"revision":"e40f7384aabcf8335ed5401bdbbdd157","url":"./post/739f0a30/index.html"},{"revision":"26be8a4de678cb82e893487e05dcd9d6","url":"./post/73fccf9a/index.html"},{"revision":"b412ac656653f14b7cf71a10a2a36d8c","url":"./post/7ca5704e/index.html"},{"revision":"8a428451c18155e40191c04443c6631a","url":"./post/7fc77154/index.html"},{"revision":"84728a29980a22cef2ea51f6d6d7c5cc","url":"./post/8097b5e3/index.html"},{"revision":"ce9d1c5e13adea166b49eba3ecb9f53b","url":"./post/8422c4dc/index.html"},{"revision":"cc96a6dc8c2bd32d1a1943209508df05","url":"./post/99c7fa1c/index.html"},{"revision":"0dd9fac5c804ed0bc8b421bce441809a","url":"./post/9c60e209/index.html"},{"revision":"3202e713b422aebb2ffdc50f4cea7486","url":"./post/ae58d2f1/index.html"},{"revision":"5de1a9d46ed995ff34ebd0772520bf01","url":"./post/d4550abf/index.html"},{"revision":"fc6e4ba61dd13892cfec560d7e203198","url":"./post/d50c4d0e/index.html"},{"revision":"4bb6f5d4a9111f7e3ef2a155eb1097c7","url":"./post/db569493/index.html"},{"revision":"eebed0cdd6bfd85bcabe74de3feeb9f2","url":"./post/dd83a796/index.html"},{"revision":"b60a8c9b19d2fe547dbe1ad6bc011e5d","url":"./post/f82f332a/index.html"},{"revision":"83bbbbc5c1e2337497edfdb7366ab7ff","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"3aaddfa1cce00428bff6dce8dcdb3577","url":"./tags/AI/index.html"},{"revision":"6b4d4e39b53c1e162647f97e62b32d0c","url":"./tags/Aplayer/index.html"},{"revision":"0d9908e06430aaae63f83c7bed6fb56f","url":"./tags/Bing/index.html"},{"revision":"d11ee336b3852628c7a875c516118a70","url":"./tags/BUG/index.html"},{"revision":"71f2bbd5b1c2e01389dc831806ad1735","url":"./tags/CDN/index.html"},{"revision":"f4a1207f6fa9cc1d4b73de2007b34293","url":"./tags/CMS/index.html"},{"revision":"0a6a2a38054e9d926703a89a29a3457d","url":"./tags/css/index.html"},{"revision":"f3ad5de849339df32dc136dd00442d74","url":"./tags/DNS/index.html"},{"revision":"26c152b76c93d4063725431561246981","url":"./tags/Flash/index.html"},{"revision":"06d3718f2006f22011c2489989ce63e4","url":"./tags/GFW/index.html"},{"revision":"bdecec83e15559d05408c880f66e9aac","url":"./tags/Gridea/index.html"},{"revision":"3e31267c8161a172e4b699ff49728285","url":"./tags/HTML/index.html"},{"revision":"90aa6936ce4858c02e19e5e9ccc5502e","url":"./tags/index.html"},{"revision":"774f1a98377a910a2fe90e7cc86b2ed9","url":"./tags/JavaScript/index.html"},{"revision":"d08ded2d3cc8ea8d7160cd0db4a94460","url":"./tags/JQuery/index.html"},{"revision":"429d097dabb9c54bad35e237f29a6db0","url":"./tags/MetingJS/index.html"},{"revision":"eab4d887ef6d23142cfb1b8870c3b5b3","url":"./tags/NexT/index.html"},{"revision":"5b767407225e8cb453eedaca4f060ecd","url":"./tags/P2P/index.html"},{"revision":"844c3b0d9574dcf74fa5c466461dbc4a","url":"./tags/RSA/index.html"},{"revision":"779103b1abd984e74c4a0ed0514e849b","url":"./tags/Vercel/index.html"},{"revision":"3f25fae3659fe2da4b02e4dd1fe0f289","url":"./tags/分享/index.html"},{"revision":"f0db406c3cdc0bdf0fce4c3dcfda4254","url":"./tags/加密/index.html"},{"revision":"64cdedb0708443cd175210e3d66c9ce4","url":"./tags/加载动画/index.html"},{"revision":"ad5ae51f11f498a3325f5934e68c6dcf","url":"./tags/右键菜单/index.html"},{"revision":"57cb3117361d3898554b82748b0db0f8","url":"./tags/域名/index.html"},{"revision":"25b1f995151102dca1511baa34cf8330","url":"./tags/密码学/index.html"},{"revision":"5bd53a2058acd71c41d85bf7836a0309","url":"./tags/建站/index.html"},{"revision":"1a58571c60a400bc837447c9a53c6153","url":"./tags/插件/index.html"},{"revision":"7d6db0b566b6a024bc8dfe16ee2ab66a","url":"./tags/服务器/index.html"},{"revision":"1bf886bbb8fd2448f609704b3d4265d7","url":"./tags/网页源码/index.html"},{"revision":"175d23e6c748453608272bd8f7b82497","url":"./tags/美化/index.html"},{"revision":"409168f907411ae6ba8c7dd3cba15e2d","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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