const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"ba2eeb334bd6796baafd1d8f77c90849","url":"./404.html"},{"revision":"2a123d88b68fd730fbf5bc0ba733c5dc","url":"./about/index.html"},{"revision":"3521e8de317c53abf5ecca7ba8a67707","url":"./archives/2022/06/index.html"},{"revision":"d4859ca3073aede9c602fa90133d1d0b","url":"./archives/2022/07/index.html"},{"revision":"e6f5b1e0a8be62ee4ce58a20c2c1573b","url":"./archives/2022/08/index.html"},{"revision":"c619311e31ecadbc198956b5b64a2428","url":"./archives/2022/10/index.html"},{"revision":"893ec82d20ac22a0b9d85c30d931de94","url":"./archives/2022/11/index.html"},{"revision":"7d7446b928fa8e3c7068c1ae007b58be","url":"./archives/2022/12/index.html"},{"revision":"571ccf5944dd96f29e931785dd27fc30","url":"./archives/2022/index.html"},{"revision":"0d48bab94f93924f512192331a0f0e1e","url":"./archives/2022/page/2/index.html"},{"revision":"078e93478e245723021a08590dc23a5f","url":"./archives/2023/02/index.html"},{"revision":"475821717da3e8dbb0255f2b04440984","url":"./archives/2023/04/index.html"},{"revision":"60f67078041316440fdc4653f66a157b","url":"./archives/2023/index.html"},{"revision":"245c007b19cf1c8310e3ee8c86017d38","url":"./archives/2024/04/index.html"},{"revision":"ba8ccd6c0e1b4475e5aef5e05257d6f3","url":"./archives/2024/05/index.html"},{"revision":"af6cb97094bc3d5b51e129b3adc7629a","url":"./archives/2024/06/index.html"},{"revision":"0e0f641ad2be6b5258389471c07d0191","url":"./archives/2024/09/index.html"},{"revision":"4b59efa4de0c754e911a847c8217e176","url":"./archives/2024/index.html"},{"revision":"acc12ba297fe96ffb8171cfc78930b0f","url":"./archives/index.html"},{"revision":"6d3a1a1071b41a3dff24097bc33bc89f","url":"./archives/page/2/index.html"},{"revision":"0640f1d6d6de5b8b3785ef0ca8a4c9c9","url":"./archives/page/3/index.html"},{"revision":"e9c94af4d5f083034fe59f7234df3bda","url":"./categories/AI/index.html"},{"revision":"cae69bb667ab83d081605830aa19dad7","url":"./categories/Gridea/index.html"},{"revision":"4462af6e5673f5a44a522cea96a27025","url":"./categories/index.html"},{"revision":"ccadb78dccb28f587130a5ed9d649ca6","url":"./categories/Vercel/index.html"},{"revision":"402c9a67fc5f420f7e833dbd6a825832","url":"./categories/休闲/index.html"},{"revision":"36cf82016367e42cc49d3ab035f6c6e8","url":"./categories/建站/index.html"},{"revision":"3b3d3fb0ca678dbacf8ff43ab55b2235","url":"./categories/科普/index.html"},{"revision":"a41cf03049f9995ff2b57c089e848f12","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"f150d5e3ebd29fdd2cde90eec313ada9","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"4caa2d97244ee7c51000b78be3d184a4","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"c2d902b432bc475109e995d7723a427e","url":"./link/index.html"},{"revision":"41ecbb1151130add861551ddd206736c","url":"./message/index.html"},{"revision":"32b39227b5109d9c1672d41d3c85ccbc","url":"./page/2/index.html"},{"revision":"558cba65c88ce96408a6bc4e9a4832dc","url":"./page/3/index.html"},{"revision":"33fa994fc113f3a275d2b729bc1429cf","url":"./post/193912eb/index.html"},{"revision":"a81e29c7e51221b4c34cbec3189ef3c9","url":"./post/220b8380/index.html"},{"revision":"c0f38b219cdd712cf028332457bce7ac","url":"./post/24dc856c/index.html"},{"revision":"a42d26684885c1973dd25786a1d86cf8","url":"./post/3082b2c6/index.html"},{"revision":"c542234377f43444a6b2fe0d180d18ee","url":"./post/3df9585/index.html"},{"revision":"e02a5364889604928427d23c805eb2b5","url":"./post/4a17b156/index.html"},{"revision":"415efcf3c4ebcdca557f3842d16a1598","url":"./post/739f0a30/index.html"},{"revision":"cba83b585b0edd8ee8751a6cf5d6ba13","url":"./post/73fccf9a/index.html"},{"revision":"67f15ee61a93f6889fe0bbfda84fa77d","url":"./post/7ca5704e/index.html"},{"revision":"bab49e20cd201f4baa38535711155386","url":"./post/7fc77154/index.html"},{"revision":"8a62fe149ef84e9dcd31546292f84612","url":"./post/8097b5e3/index.html"},{"revision":"be9f422288adc51270dfc68e2ba7b919","url":"./post/8422c4dc/index.html"},{"revision":"844334a6dc4a82098fb976f78bdc0da9","url":"./post/99c7fa1c/index.html"},{"revision":"fb447e50774e9a8abad71be498ce4c96","url":"./post/9c60e209/index.html"},{"revision":"d44241b3dd3efbd73fa75e8fb42ac8b0","url":"./post/ae58d2f1/index.html"},{"revision":"ec5e2fbcd3dbe998c48c01b0cd808bdd","url":"./post/d4550abf/index.html"},{"revision":"1827c1df4251813f6d93f43164d31ffc","url":"./post/d50c4d0e/index.html"},{"revision":"69fd4c1bfc4d6ba66665213b0792a70a","url":"./post/db569493/index.html"},{"revision":"6c8d34e228af55876ebfbe4459942d03","url":"./post/dd83a796/index.html"},{"revision":"683c2cedae3e4e005771b3b7a1591e0b","url":"./post/f82f332a/index.html"},{"revision":"9a7ae7e2d0c7353daca5b260f7961ccd","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"6502efe7ba4063da4a1494850c287c21","url":"./tags/AI/index.html"},{"revision":"930b38a7fc450f9a6dbff9f70760060b","url":"./tags/Aplayer/index.html"},{"revision":"05392ac2abf2538ed57e9b6e09c990b8","url":"./tags/Bing/index.html"},{"revision":"2905d08de4bd9277e5dd9dc868d170c3","url":"./tags/BUG/index.html"},{"revision":"cefd6d17b5008b5a72f8214212b7c43b","url":"./tags/CDN/index.html"},{"revision":"603c2dbf6d77164b624ef4b7f5a0545e","url":"./tags/CMS/index.html"},{"revision":"473f6bf65da0ebff5e4faa2e7dd9f161","url":"./tags/css/index.html"},{"revision":"2a1af89344522764f30b06a237c5e45d","url":"./tags/DNS/index.html"},{"revision":"e2e8ad122bd41d782cc39f9659f20d56","url":"./tags/Flash/index.html"},{"revision":"4c25c690510c42e8d6de626f16931874","url":"./tags/GFW/index.html"},{"revision":"3f1e0f5570a0578052758149643a32a9","url":"./tags/Gridea/index.html"},{"revision":"af907967df17bfc31eb6ec490f22ede4","url":"./tags/HTML/index.html"},{"revision":"2e24436fd9f3bdbb6f890b1f76994fa3","url":"./tags/index.html"},{"revision":"d21a768a2265ce9d0ee3623878924ad1","url":"./tags/JavaScript/index.html"},{"revision":"d317142f556db3db5dbc89dde0ef1510","url":"./tags/JQuery/index.html"},{"revision":"a5e20ef57034247367aa3e0b78346400","url":"./tags/MetingJS/index.html"},{"revision":"c851655fbd862165fa7c89498ed43e4f","url":"./tags/NexT/index.html"},{"revision":"1014f5c12be9269161c98856e5f1ec21","url":"./tags/P2P/index.html"},{"revision":"92f85d5c0e891aaabb1bb37fc86262c2","url":"./tags/RSA/index.html"},{"revision":"d905427352967783ece23b460a0d9f9c","url":"./tags/Vercel/index.html"},{"revision":"c246559f712ad355305cd275c2b0ba0f","url":"./tags/分享/index.html"},{"revision":"978673cbb5293ccb2b6100442a96c612","url":"./tags/加密/index.html"},{"revision":"865792e72256d546219f48fbb02c650e","url":"./tags/加载动画/index.html"},{"revision":"baa75c95b561a46eb8b5b4aa7d66ea08","url":"./tags/右键菜单/index.html"},{"revision":"df5e692ff21f17c72c83ea8ba4648d83","url":"./tags/域名/index.html"},{"revision":"6aaa620b5277bbc8ea7f8dfff1e86d7e","url":"./tags/密码学/index.html"},{"revision":"5b50c3b283d890aa585dc07b532760a4","url":"./tags/建站/index.html"},{"revision":"d9f811b7dadde5c7cf4ec4c891d0070f","url":"./tags/插件/index.html"},{"revision":"98836f1e4714c816a76bce5cd9146cda","url":"./tags/服务器/index.html"},{"revision":"f840354c3da2bb0c431919284fdccf06","url":"./tags/网页源码/index.html"},{"revision":"be07c44c192a2cc957356db5a38535f1","url":"./tags/美化/index.html"},{"revision":"8c7bf6fbf4504d61dbd329f652b97cec","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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