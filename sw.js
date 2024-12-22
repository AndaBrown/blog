const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"823b840a5aeb03e03c6edba5ff557cad","url":"./404.html"},{"revision":"01639568b21c3e41cacc6e8c2a72166f","url":"./about/index.html"},{"revision":"4cd4c1f4bf90119ca577a062d0b506ca","url":"./archives/2022/06/index.html"},{"revision":"9f539b335d751b729fab49d03988b61b","url":"./archives/2022/07/index.html"},{"revision":"24276bb569f58d5137e748969a1490d0","url":"./archives/2022/08/index.html"},{"revision":"3f61fea97f461a81001892c8bc4c6aee","url":"./archives/2022/10/index.html"},{"revision":"dc79d262a2acf429e1f46d0b34a97cd5","url":"./archives/2022/11/index.html"},{"revision":"507b1595c0761ab65e90cff376f3eed1","url":"./archives/2022/12/index.html"},{"revision":"fca56180b5c29a21cefbb89613192fee","url":"./archives/2022/index.html"},{"revision":"a5e21f3d266ea2b3a9ee5ef77c73fcc8","url":"./archives/2022/page/2/index.html"},{"revision":"bf8c56b042ecea493d24585a972b4400","url":"./archives/2023/02/index.html"},{"revision":"a1e8048216627a66225847c6fcd38908","url":"./archives/2023/04/index.html"},{"revision":"5da25cff1293d957864d3634de37797f","url":"./archives/2023/index.html"},{"revision":"a29d271db82aaf388b4eb9b56595060a","url":"./archives/2024/04/index.html"},{"revision":"f019a00b4c8d1f7f7fd7305b22729e80","url":"./archives/2024/05/index.html"},{"revision":"aa655b68ca3e43b9a83515a3a30eb9da","url":"./archives/2024/06/index.html"},{"revision":"513f4a7ec0c75d4e6fded65ff5754d1e","url":"./archives/2024/09/index.html"},{"revision":"19392a6be5b9d3b78e1f0d6c64b96b07","url":"./archives/2024/index.html"},{"revision":"92b08c546aa82aeb78f92c6189d2eb38","url":"./archives/index.html"},{"revision":"b3fedecd7d60fd8cb35391f2a1cf6c59","url":"./archives/page/2/index.html"},{"revision":"66884fbaa807499805b3db77d6d2e0b7","url":"./archives/page/3/index.html"},{"revision":"734107aa54fff67381d04b9b7a4eadd8","url":"./categories/AI/index.html"},{"revision":"4e8fdd7d589c406e5cff097df3fac042","url":"./categories/Gridea/index.html"},{"revision":"2ad4411cf3d04921f74915491f6d9557","url":"./categories/index.html"},{"revision":"15f6d4049dfef74fea9862cc1700a4e3","url":"./categories/Vercel/index.html"},{"revision":"7cbeed7667871951f0542dc43dac9357","url":"./categories/休闲/index.html"},{"revision":"d288fd6932002fa5d190d6c4496c5389","url":"./categories/建站/index.html"},{"revision":"87c52c9e45e4252395bfe75d7cc1d778","url":"./categories/科普/index.html"},{"revision":"039354f48cbf7775f17ca183cce5fa69","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"a2ec38ea3ba3066e12bcfd42a28772d8","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"babbd3e1baf4ca1feaf6b96536e6f3cf","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"ca8bffb693cc07ed27bead35d1977b45","url":"./link/index.html"},{"revision":"bfe5124c41d4763ec8ab68062c8414c9","url":"./message/index.html"},{"revision":"41df0aee770eed32498391343e1ef632","url":"./page/2/index.html"},{"revision":"0c6b7f4727588f556dcd56e2e211e473","url":"./page/3/index.html"},{"revision":"7ea25dd2d4b6deaa7b198358f1d77ed7","url":"./post/193912eb/index.html"},{"revision":"d8852656806d06a3f955e8eeba176083","url":"./post/220b8380/index.html"},{"revision":"6121c245542f38890054a09a63957647","url":"./post/24dc856c/index.html"},{"revision":"2a82446cd5b18606f6dc6df665d10ca0","url":"./post/3082b2c6/index.html"},{"revision":"9b7fe733ef8aa970d499c8b7b2036add","url":"./post/3df9585/index.html"},{"revision":"9260a79934b4ff13913687508d122906","url":"./post/4a17b156/index.html"},{"revision":"be89ef02787d3821429a36e12e6dd91a","url":"./post/739f0a30/index.html"},{"revision":"f0d286142b36a88988f6da4626b56fbf","url":"./post/73fccf9a/index.html"},{"revision":"420ebc22e0bec1a71a1d00f7269203b8","url":"./post/7ca5704e/index.html"},{"revision":"1ed465a12de1634e0e91cd07112eaad4","url":"./post/7fc77154/index.html"},{"revision":"07481f2cb2a0f28ea14ca529b59ca2b4","url":"./post/8097b5e3/index.html"},{"revision":"aa36dd385b7fe539b288dee498f3aca3","url":"./post/8422c4dc/index.html"},{"revision":"df8763a5d783561efb79d7c08ef6aeaf","url":"./post/99c7fa1c/index.html"},{"revision":"c56a7908c9e713b5fd0d3318218ec5fa","url":"./post/9c60e209/index.html"},{"revision":"1da5c67075080f9273f0d924934d4cb8","url":"./post/ae58d2f1/index.html"},{"revision":"c574d9cfc2ee01c41e28c69b97537bc2","url":"./post/d4550abf/index.html"},{"revision":"d22f448d738adc363e2c8c773b6451d6","url":"./post/d50c4d0e/index.html"},{"revision":"5b86773fc5d2c69835c29145f2d0cf88","url":"./post/db569493/index.html"},{"revision":"a7c2505ba5e577decb20ea82f57f4aab","url":"./post/dd83a796/index.html"},{"revision":"893506b2d402f901757d0842479f119a","url":"./post/f82f332a/index.html"},{"revision":"7fc26c26a48328ffbf40f645df562cb8","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"d8ad3dd346ac571b66e10622fa0bb108","url":"./tags/AI/index.html"},{"revision":"582c188d4cade909e034c113d327a265","url":"./tags/Aplayer/index.html"},{"revision":"2e77b978f702f0ba755eee09c945eaa9","url":"./tags/Bing/index.html"},{"revision":"22d0cbc606bdc38505fb83a164a6b2df","url":"./tags/BUG/index.html"},{"revision":"3f1765a75e8e87cfc37f37cf2a6f820b","url":"./tags/CDN/index.html"},{"revision":"89db92e8c1b8ccb06b15238335e217c6","url":"./tags/CMS/index.html"},{"revision":"e3ed6f1eb11e4134c0f12e6dbc754f15","url":"./tags/css/index.html"},{"revision":"2c5591bff33a32bf8c0b37155a79e728","url":"./tags/DNS/index.html"},{"revision":"fa4eeb8065eb9d179fa6817224b01ce5","url":"./tags/Flash/index.html"},{"revision":"4de7ddaf691e25ac50fd9b979629d1ac","url":"./tags/GFW/index.html"},{"revision":"ca33a72830ea891e89beff9e1de49bc3","url":"./tags/Gridea/index.html"},{"revision":"a35b541ae0d2d97580453e7771509f4b","url":"./tags/HTML/index.html"},{"revision":"1899844de401e3d014107850f2ca8c6e","url":"./tags/index.html"},{"revision":"393df51fa622c1ca042d2979d21a7a8f","url":"./tags/JavaScript/index.html"},{"revision":"7a29386ccd1950113a16d0f3b57d6959","url":"./tags/JQuery/index.html"},{"revision":"a5484ebd128a0dca983ce92cd529f9ed","url":"./tags/MetingJS/index.html"},{"revision":"67ecaf3ad38f46cabd4d528f777c8a23","url":"./tags/NexT/index.html"},{"revision":"7a238d823ab77f065fef4d6df185e3bc","url":"./tags/P2P/index.html"},{"revision":"9e30053d27096ba99ae16d3c63c80953","url":"./tags/RSA/index.html"},{"revision":"8410f8383b105581eccc4d129c7d84d8","url":"./tags/Vercel/index.html"},{"revision":"c81a7b919cf96acf2d28df5bb5e333bb","url":"./tags/分享/index.html"},{"revision":"e52bc7944ccb777fe3172f3f32f6e78c","url":"./tags/加密/index.html"},{"revision":"ccdf23bc32d91d9dccf8a24d198bf7a1","url":"./tags/加载动画/index.html"},{"revision":"f8a1a528fd5a528012182f4aef223f43","url":"./tags/右键菜单/index.html"},{"revision":"f458d61ac44144defb1b82c55f88f701","url":"./tags/域名/index.html"},{"revision":"20a4ce43eb109f3ba19829c6472c65d1","url":"./tags/密码学/index.html"},{"revision":"42fae85943ca82782988f3750571266c","url":"./tags/建站/index.html"},{"revision":"0aa88949a4530971ad6bfb8b96687e9f","url":"./tags/插件/index.html"},{"revision":"aca19e8f0029c5e2e4e1eb1f849f7190","url":"./tags/服务器/index.html"},{"revision":"b9e41327577bc109997816043487f813","url":"./tags/网页源码/index.html"},{"revision":"fc5de37b6db5d0a3e39d3a9f457f5f05","url":"./tags/美化/index.html"},{"revision":"f5b149b9d19d7eb10802a34a5326ae47","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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