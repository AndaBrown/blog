const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"ee546d81a24c6a79a5d7a1e9e21d2fce","url":"./404.html"},{"revision":"43831a16ee3d192dd3fe15460ad3e30b","url":"./about/index.html"},{"revision":"524aa5d3dd46e19330e3ad7f94feea41","url":"./archives/2022/06/index.html"},{"revision":"ba4da208adc3b1a479d0708d07adc705","url":"./archives/2022/07/index.html"},{"revision":"add7bb3ac2c8f2e066f7ba577559ebbc","url":"./archives/2022/08/index.html"},{"revision":"ef258ee05667226c69d9c831c366c1f3","url":"./archives/2022/10/index.html"},{"revision":"7f687cf4a47172ee79f62079be251539","url":"./archives/2022/11/index.html"},{"revision":"beec432206d8a9c18889985c4cf46316","url":"./archives/2022/12/index.html"},{"revision":"9821c5b65aa6901d2b6e06baa91ca689","url":"./archives/2022/index.html"},{"revision":"5db1ecfa95af48320a4ebd5e2ea5b494","url":"./archives/2022/page/2/index.html"},{"revision":"ba3bd83843f4a01dd3c91e522df61f04","url":"./archives/2023/02/index.html"},{"revision":"822262ebe2f5aa74324b407169169942","url":"./archives/2023/04/index.html"},{"revision":"1b3a0751a368c6a0d93a91833e1f87ab","url":"./archives/2023/index.html"},{"revision":"c85f0643fcf87c48f9d5b6846da0965a","url":"./archives/2024/04/index.html"},{"revision":"92efc9cb839683de699f803c83366a34","url":"./archives/2024/05/index.html"},{"revision":"1b275b5f56a8a8a4469ba5452e6cc0e5","url":"./archives/2024/06/index.html"},{"revision":"657f485b7ffb9b297d0a78cf66282a95","url":"./archives/2024/09/index.html"},{"revision":"b03d319f2a2aef494e090edd185a63ee","url":"./archives/2024/index.html"},{"revision":"f65e5bf40f2b81f637413498f8643169","url":"./archives/index.html"},{"revision":"0e3caf1c2a6121075701f41004af63f4","url":"./archives/page/2/index.html"},{"revision":"b8fd11b2db9f0f781d8edb93bacf6b19","url":"./archives/page/3/index.html"},{"revision":"6842b721de6c036af28311a57d81ca43","url":"./categories/AI/index.html"},{"revision":"5ed793a00283336df9c63a85bd2d020e","url":"./categories/Gridea/index.html"},{"revision":"e4ee672b4710134dfb71bebd7eeaf8ab","url":"./categories/index.html"},{"revision":"0a281eeabee149c6c9e7cec55875bca9","url":"./categories/Vercel/index.html"},{"revision":"42824ba538390fd61d38bbc7d0559578","url":"./categories/休闲/index.html"},{"revision":"c2590b9fa8297dd4a47d17b5671de9c4","url":"./categories/建站/index.html"},{"revision":"b2d24d0cab3940fd64c53b68ff746562","url":"./categories/科普/index.html"},{"revision":"74e502ba5e2ecfc2738e2e0ba7bfdefd","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"e05509be7e07238a3e494b7be1210087","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"28efcd3626653367040d662aadb36490","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"55fac71f786812671a5693a97c679f3d","url":"./link/index.html"},{"revision":"6850aa23c95f5fb23b0a4c32dc6c150b","url":"./message/index.html"},{"revision":"f0e975988f7a25f8a59e35dab101aad1","url":"./page/2/index.html"},{"revision":"f506b0cc1fe92124e0eaf70d88edfff6","url":"./page/3/index.html"},{"revision":"33fa994fc113f3a275d2b729bc1429cf","url":"./post/193912eb/index.html"},{"revision":"a81e29c7e51221b4c34cbec3189ef3c9","url":"./post/220b8380/index.html"},{"revision":"c0f38b219cdd712cf028332457bce7ac","url":"./post/24dc856c/index.html"},{"revision":"a42d26684885c1973dd25786a1d86cf8","url":"./post/3082b2c6/index.html"},{"revision":"c542234377f43444a6b2fe0d180d18ee","url":"./post/3df9585/index.html"},{"revision":"e02a5364889604928427d23c805eb2b5","url":"./post/4a17b156/index.html"},{"revision":"415efcf3c4ebcdca557f3842d16a1598","url":"./post/739f0a30/index.html"},{"revision":"cba83b585b0edd8ee8751a6cf5d6ba13","url":"./post/73fccf9a/index.html"},{"revision":"67f15ee61a93f6889fe0bbfda84fa77d","url":"./post/7ca5704e/index.html"},{"revision":"bab49e20cd201f4baa38535711155386","url":"./post/7fc77154/index.html"},{"revision":"8a62fe149ef84e9dcd31546292f84612","url":"./post/8097b5e3/index.html"},{"revision":"be9f422288adc51270dfc68e2ba7b919","url":"./post/8422c4dc/index.html"},{"revision":"844334a6dc4a82098fb976f78bdc0da9","url":"./post/99c7fa1c/index.html"},{"revision":"fb447e50774e9a8abad71be498ce4c96","url":"./post/9c60e209/index.html"},{"revision":"d44241b3dd3efbd73fa75e8fb42ac8b0","url":"./post/ae58d2f1/index.html"},{"revision":"ec5e2fbcd3dbe998c48c01b0cd808bdd","url":"./post/d4550abf/index.html"},{"revision":"1827c1df4251813f6d93f43164d31ffc","url":"./post/d50c4d0e/index.html"},{"revision":"69fd4c1bfc4d6ba66665213b0792a70a","url":"./post/db569493/index.html"},{"revision":"6c8d34e228af55876ebfbe4459942d03","url":"./post/dd83a796/index.html"},{"revision":"683c2cedae3e4e005771b3b7a1591e0b","url":"./post/f82f332a/index.html"},{"revision":"9a7ae7e2d0c7353daca5b260f7961ccd","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"d77196bf49b7e5fbe13496a95afc607c","url":"./tags/AI/index.html"},{"revision":"650d47d51030f5b6d9f5c020d8018951","url":"./tags/Aplayer/index.html"},{"revision":"0288fb1357d91f45120903cce94a86ca","url":"./tags/Bing/index.html"},{"revision":"e8368be42e85ff75de651e7197c8dad2","url":"./tags/BUG/index.html"},{"revision":"82390e013cbd35ef802cac3c6696b294","url":"./tags/CDN/index.html"},{"revision":"1beaa330c57d46793a27e6593f6a6bf3","url":"./tags/CMS/index.html"},{"revision":"f9d249d370f0b3972a6cf20b304a93dc","url":"./tags/css/index.html"},{"revision":"660d6b3e4101b493618a611090368410","url":"./tags/DNS/index.html"},{"revision":"f833dcd56ad3f746f66b4833760011a3","url":"./tags/Flash/index.html"},{"revision":"6c5da42a21f4af8b223ea8222e6ab043","url":"./tags/GFW/index.html"},{"revision":"cd88f7c911b1159c813814158fb01463","url":"./tags/Gridea/index.html"},{"revision":"317cbd7d1a81d59412171b2476147d9d","url":"./tags/HTML/index.html"},{"revision":"481d54c2b9307b4814aed8aa8beceaa3","url":"./tags/index.html"},{"revision":"de2bf6c0071ef400c6530f07ccbb5261","url":"./tags/JavaScript/index.html"},{"revision":"f40fc535d8c2a20020e06157be34fec6","url":"./tags/JQuery/index.html"},{"revision":"d55f51136fe5bf920c45341551b6d96b","url":"./tags/MetingJS/index.html"},{"revision":"80b0783c7167cbff27ffbcba222a07c2","url":"./tags/NexT/index.html"},{"revision":"93c7f0534efd90772f753f2a42338f6c","url":"./tags/P2P/index.html"},{"revision":"c5dd9d96358b34aedb5812a135167196","url":"./tags/RSA/index.html"},{"revision":"fa4352e700f70f4d39297949b0c49d55","url":"./tags/Vercel/index.html"},{"revision":"afd719739dfa2da9134c024887b675c4","url":"./tags/分享/index.html"},{"revision":"78ae92bd9c440b322b4835dfa6d32e4c","url":"./tags/加密/index.html"},{"revision":"458e39ef5329b607ece46576796847fd","url":"./tags/加载动画/index.html"},{"revision":"06331ae69b877ffc1dd3e8509c77b247","url":"./tags/右键菜单/index.html"},{"revision":"ff020a165f08ba2f13f324dfb3224294","url":"./tags/域名/index.html"},{"revision":"f611da40f886eedcd275bf434462113f","url":"./tags/密码学/index.html"},{"revision":"b2da48cdbd4e4a37139cb9db12208c3b","url":"./tags/建站/index.html"},{"revision":"58049fce7d1e3b798178b535ce08261c","url":"./tags/插件/index.html"},{"revision":"e09727637159a3e4bf3f062bc5fe3cac","url":"./tags/服务器/index.html"},{"revision":"51ad16fb561cfa15d0206553e002c0cf","url":"./tags/网页源码/index.html"},{"revision":"9146e6c30a105f096604345773f4fa2f","url":"./tags/美化/index.html"},{"revision":"e70d39229b9acc2158cd248e2f350b6e","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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