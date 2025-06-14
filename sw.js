const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"88270e36084114dad654cefa6cae11fd","url":"./404.html"},{"revision":"ee1c2c0b88a93092a1935886ee6796a2","url":"./about/index.html"},{"revision":"cc1005c2da37550e8ca436b84acde8ad","url":"./archives/2022/06/index.html"},{"revision":"730152aab4a163046409a1eeac17e439","url":"./archives/2022/07/index.html"},{"revision":"cdcb9417ade769c994997545427fab08","url":"./archives/2022/08/index.html"},{"revision":"befd46085fb261056e587bfea40e2c6d","url":"./archives/2022/10/index.html"},{"revision":"1645b3315b9c3c648ef35d46a2806c18","url":"./archives/2022/11/index.html"},{"revision":"938c6cb1af227b974587142ac232678d","url":"./archives/2022/12/index.html"},{"revision":"eb8f0b1ea8634057336840ea060488d6","url":"./archives/2022/index.html"},{"revision":"81e4025c61a4ce95b8da475dd15a2f09","url":"./archives/2022/page/2/index.html"},{"revision":"4d46bd9130058510faa756f27acf0c03","url":"./archives/2023/02/index.html"},{"revision":"e406c8c0a0de01f1cd703f6409deaa18","url":"./archives/2023/04/index.html"},{"revision":"f830da2f041f1b3a14816b3a9c12e8f6","url":"./archives/2023/index.html"},{"revision":"324593d1d01d7d3d0899775d4e53aa2c","url":"./archives/2024/04/index.html"},{"revision":"bd0912cfd856b93bbf6091ef7282a864","url":"./archives/2024/05/index.html"},{"revision":"51376a8cfaefedf401adbdf84b45bd48","url":"./archives/2024/06/index.html"},{"revision":"1275056779426c3942e49fdf4f2bbb3a","url":"./archives/2024/09/index.html"},{"revision":"8cae2620f6f1bfee9f3df9be3e3e9ffe","url":"./archives/2024/index.html"},{"revision":"a94e56364016ceea186b955d8eb0e5f9","url":"./archives/index.html"},{"revision":"4d81a8e352613ab297171bb5ff356ca3","url":"./archives/page/2/index.html"},{"revision":"2cc7d40256dfe1e1cde32c7206d65297","url":"./archives/page/3/index.html"},{"revision":"cb3b50d728f5ced0c0efd5cfcd5b9a24","url":"./categories/AI/index.html"},{"revision":"70b3eb787e00bcfd61d2f88f73253bec","url":"./categories/Gridea/index.html"},{"revision":"b351341a37a2e2f689dd3c9adb0a1703","url":"./categories/index.html"},{"revision":"191d53dbdd049c5aacd082d84ba6113f","url":"./categories/Vercel/index.html"},{"revision":"b3f0a13d37cd2790468ac1f383b3145c","url":"./categories/休闲/index.html"},{"revision":"4ea171c6cf05b64d792cd00b8f1fe604","url":"./categories/建站/index.html"},{"revision":"d0f4cddbcd4a27fd2767bd70c6f0981d","url":"./categories/科普/index.html"},{"revision":"bede426e13ec3a12028c08c5d56509f2","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"136e9c04db0c59e6b0c43319ea0e1837","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d56df16d117aefbf51d481bdd75e9f89","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"e4d5047daa2aa10a7520c6352f1c788c","url":"./link/index.html"},{"revision":"90d3716e7a9b9ea0a28579cdfd87ad19","url":"./message/index.html"},{"revision":"542bae378168604049955f76d1da400a","url":"./page/2/index.html"},{"revision":"231ed1a49fe5b350897e2a5f9f44b860","url":"./page/3/index.html"},{"revision":"24a40c20c608da3ea5eebebfadd65138","url":"./post/193912eb/index.html"},{"revision":"62f6389ce933db4cbdbd4b7963d9bcf2","url":"./post/220b8380/index.html"},{"revision":"0720398b20d8235698abadac01e7f90e","url":"./post/24dc856c/index.html"},{"revision":"fa84193f82ecf411ac4e6218ce7d2469","url":"./post/3082b2c6/index.html"},{"revision":"e2d4098addbcc44e453d1e9e3360f978","url":"./post/3df9585/index.html"},{"revision":"2b2fe561541a63e91168f50fecd5fbb4","url":"./post/4a17b156/index.html"},{"revision":"e40f7384aabcf8335ed5401bdbbdd157","url":"./post/739f0a30/index.html"},{"revision":"26be8a4de678cb82e893487e05dcd9d6","url":"./post/73fccf9a/index.html"},{"revision":"b412ac656653f14b7cf71a10a2a36d8c","url":"./post/7ca5704e/index.html"},{"revision":"8a428451c18155e40191c04443c6631a","url":"./post/7fc77154/index.html"},{"revision":"84728a29980a22cef2ea51f6d6d7c5cc","url":"./post/8097b5e3/index.html"},{"revision":"ce9d1c5e13adea166b49eba3ecb9f53b","url":"./post/8422c4dc/index.html"},{"revision":"cc96a6dc8c2bd32d1a1943209508df05","url":"./post/99c7fa1c/index.html"},{"revision":"0dd9fac5c804ed0bc8b421bce441809a","url":"./post/9c60e209/index.html"},{"revision":"3202e713b422aebb2ffdc50f4cea7486","url":"./post/ae58d2f1/index.html"},{"revision":"5de1a9d46ed995ff34ebd0772520bf01","url":"./post/d4550abf/index.html"},{"revision":"fc6e4ba61dd13892cfec560d7e203198","url":"./post/d50c4d0e/index.html"},{"revision":"4bb6f5d4a9111f7e3ef2a155eb1097c7","url":"./post/db569493/index.html"},{"revision":"eebed0cdd6bfd85bcabe74de3feeb9f2","url":"./post/dd83a796/index.html"},{"revision":"b60a8c9b19d2fe547dbe1ad6bc011e5d","url":"./post/f82f332a/index.html"},{"revision":"83bbbbc5c1e2337497edfdb7366ab7ff","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"a0d47f7322920d7e37fd0dfd908aab6a","url":"./tags/AI/index.html"},{"revision":"c2d38ee2f75a8a7b6bc7028a8e92148e","url":"./tags/Aplayer/index.html"},{"revision":"044ae1a66b002bc635c3114d77049fc4","url":"./tags/Bing/index.html"},{"revision":"55325489598a2e08db6506be265104ec","url":"./tags/BUG/index.html"},{"revision":"ffc52381194b0ff00840f70087889daf","url":"./tags/CDN/index.html"},{"revision":"f9541cd45462b1d91f214d596940a519","url":"./tags/CMS/index.html"},{"revision":"881347a3ef0afd1a2db3a990a53131f3","url":"./tags/css/index.html"},{"revision":"f45e500dcb2bed47bcba3f6f91e31ebd","url":"./tags/DNS/index.html"},{"revision":"40e1645cbae52a119e277b2da03d1f17","url":"./tags/Flash/index.html"},{"revision":"49ac09092617bf835a69c371c573bde2","url":"./tags/GFW/index.html"},{"revision":"f6171111915643bf2c5cbb8dc2611aff","url":"./tags/Gridea/index.html"},{"revision":"b9fed60630403ea09305af0375326fa7","url":"./tags/HTML/index.html"},{"revision":"aac5f7064d31e90883bb4e80faa7aa3b","url":"./tags/index.html"},{"revision":"b6e1e1ee7761a943ad7825918c0e7621","url":"./tags/JavaScript/index.html"},{"revision":"94828391e870a92174bd59b21b7fe6b0","url":"./tags/JQuery/index.html"},{"revision":"c89f9da90114fb40f256c5e448c10cad","url":"./tags/MetingJS/index.html"},{"revision":"726994b6afc23ef2cdedc69d95d63672","url":"./tags/NexT/index.html"},{"revision":"b4a1c061c0682667771e22efc5242d11","url":"./tags/P2P/index.html"},{"revision":"4b6e3a75a7f3fa6dbe8630ee8b7945f5","url":"./tags/RSA/index.html"},{"revision":"6fa6f6151bf838d63b1d733a3f84fbb6","url":"./tags/Vercel/index.html"},{"revision":"eca587f6460798473846128e12fb5672","url":"./tags/分享/index.html"},{"revision":"cfc840fa7d874855a5cad09bafcee575","url":"./tags/加密/index.html"},{"revision":"b1b1f6f843d9de8b59b4523ee924c585","url":"./tags/加载动画/index.html"},{"revision":"dad5859cbf9278501b196c8d526f7464","url":"./tags/右键菜单/index.html"},{"revision":"7c79d927a3dbfc3794402271b64a7f8b","url":"./tags/域名/index.html"},{"revision":"90c84f4a8f6d27956d57c4175b4d620b","url":"./tags/密码学/index.html"},{"revision":"404af6354cc00fdb2ea5fcb7d2450ac1","url":"./tags/建站/index.html"},{"revision":"527b5312285bc09cb5d4e315362ba0fd","url":"./tags/插件/index.html"},{"revision":"198175575ed8f6196ebb19963c5177b8","url":"./tags/服务器/index.html"},{"revision":"3b0e42e011d3280edc7da59af6de5545","url":"./tags/网页源码/index.html"},{"revision":"80b28a1ee35f3dbbf73d162c4c4808f7","url":"./tags/美化/index.html"},{"revision":"801797be44b664ac591a755c6643939e","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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