const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"870e2cc674c050305cc35e6d2db1182f","url":"./404.html"},{"revision":"9126e53db9457ef1f8a3a44412d9ccb6","url":"./about/index.html"},{"revision":"c802fb0b5482a76e2d7b5679d1c42976","url":"./archives/2022/06/index.html"},{"revision":"df8e1bef0dcba490d2d911ced7f9c9b7","url":"./archives/2022/07/index.html"},{"revision":"90eae1cc5b594ce1185841d91c268b4a","url":"./archives/2022/08/index.html"},{"revision":"9dd0a24c26db3dbc99f772170550d8e1","url":"./archives/2022/10/index.html"},{"revision":"00f04a20039c23678dbe38a94e439ac6","url":"./archives/2022/11/index.html"},{"revision":"d0bbd665bb24553daaf961c8f5be99ed","url":"./archives/2022/12/index.html"},{"revision":"674971ee74d1a5116e84ca47ed3333d4","url":"./archives/2022/index.html"},{"revision":"b8f435b13faeb4179f04ee76c29235b6","url":"./archives/2022/page/2/index.html"},{"revision":"73fac62f34f4e63e099ffba469641c99","url":"./archives/2023/02/index.html"},{"revision":"b40f9df296f23f9ea4885dbf843c9234","url":"./archives/2023/04/index.html"},{"revision":"97c24b88648d32b9f1a8c3b7b133da4d","url":"./archives/2023/index.html"},{"revision":"cb88f43243e76e9cee51c67224a8152f","url":"./archives/2024/04/index.html"},{"revision":"40797b3f3848eb6897d52ac38f721cd3","url":"./archives/2024/05/index.html"},{"revision":"003c81dfc0505a186fc5647435de1e7b","url":"./archives/2024/06/index.html"},{"revision":"252a509dfebf1e3cdc9595c3d6070557","url":"./archives/2024/09/index.html"},{"revision":"0d7f03a7fd6e18c58d1d252aebce90ba","url":"./archives/2024/index.html"},{"revision":"00a8f4627053b6148d0c7e50c0ab0f2d","url":"./archives/index.html"},{"revision":"0654e9a17f00a503bcde86502759340f","url":"./archives/page/2/index.html"},{"revision":"877183d41bbd9ef227aba60be59050df","url":"./archives/page/3/index.html"},{"revision":"ad2d0e70bb6c00fb17a38f55f565015d","url":"./categories/AI/index.html"},{"revision":"64fd252d28edce05302049395d2e21c5","url":"./categories/Gridea/index.html"},{"revision":"25dec8bac9a37aa985d00ba551f998d7","url":"./categories/index.html"},{"revision":"45389d84c0dea33e62ca77856b01e21a","url":"./categories/Vercel/index.html"},{"revision":"2268833a36d17658abc5603dc21a284f","url":"./categories/休闲/index.html"},{"revision":"75b95ea466b1ccecc8b6903812b90a99","url":"./categories/建站/index.html"},{"revision":"63ab782f5061ae7b684cfbf6b62cf3c6","url":"./categories/科普/index.html"},{"revision":"37154a8ef826465eb8315ae91a2af65e","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"c6b678981d54971d2405e9f756645b0e","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"ec1d5ba7e9991a4a97fcc7d4034e399b","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"b2266433e1241beebdc70d1461bffafa","url":"./link/index.html"},{"revision":"ce2328f1cd8a2694327ab0b39de94617","url":"./message/index.html"},{"revision":"256d29d1fa1a36517de943c53d825a0b","url":"./page/2/index.html"},{"revision":"ad1ab467c9c602127b89544b8c89fa10","url":"./page/3/index.html"},{"revision":"33fa994fc113f3a275d2b729bc1429cf","url":"./post/193912eb/index.html"},{"revision":"a81e29c7e51221b4c34cbec3189ef3c9","url":"./post/220b8380/index.html"},{"revision":"c0f38b219cdd712cf028332457bce7ac","url":"./post/24dc856c/index.html"},{"revision":"a42d26684885c1973dd25786a1d86cf8","url":"./post/3082b2c6/index.html"},{"revision":"c542234377f43444a6b2fe0d180d18ee","url":"./post/3df9585/index.html"},{"revision":"e02a5364889604928427d23c805eb2b5","url":"./post/4a17b156/index.html"},{"revision":"415efcf3c4ebcdca557f3842d16a1598","url":"./post/739f0a30/index.html"},{"revision":"cba83b585b0edd8ee8751a6cf5d6ba13","url":"./post/73fccf9a/index.html"},{"revision":"67f15ee61a93f6889fe0bbfda84fa77d","url":"./post/7ca5704e/index.html"},{"revision":"bab49e20cd201f4baa38535711155386","url":"./post/7fc77154/index.html"},{"revision":"8a62fe149ef84e9dcd31546292f84612","url":"./post/8097b5e3/index.html"},{"revision":"be9f422288adc51270dfc68e2ba7b919","url":"./post/8422c4dc/index.html"},{"revision":"844334a6dc4a82098fb976f78bdc0da9","url":"./post/99c7fa1c/index.html"},{"revision":"fb447e50774e9a8abad71be498ce4c96","url":"./post/9c60e209/index.html"},{"revision":"d44241b3dd3efbd73fa75e8fb42ac8b0","url":"./post/ae58d2f1/index.html"},{"revision":"ec5e2fbcd3dbe998c48c01b0cd808bdd","url":"./post/d4550abf/index.html"},{"revision":"1827c1df4251813f6d93f43164d31ffc","url":"./post/d50c4d0e/index.html"},{"revision":"69fd4c1bfc4d6ba66665213b0792a70a","url":"./post/db569493/index.html"},{"revision":"6c8d34e228af55876ebfbe4459942d03","url":"./post/dd83a796/index.html"},{"revision":"683c2cedae3e4e005771b3b7a1591e0b","url":"./post/f82f332a/index.html"},{"revision":"9a7ae7e2d0c7353daca5b260f7961ccd","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"58544be71efc55ae8f82bd670c5c1085","url":"./tags/AI/index.html"},{"revision":"6f8aba79378173dd7552c0ea6b8551ea","url":"./tags/Aplayer/index.html"},{"revision":"3a0633caefc24bb5fab26899e358bdfe","url":"./tags/Bing/index.html"},{"revision":"02cf16a7bce867ff24ed7b283a675b61","url":"./tags/BUG/index.html"},{"revision":"6b78b2eb956af191a55c13a82830ac8f","url":"./tags/CDN/index.html"},{"revision":"5fbb44bd69f598179d07c7939c920d60","url":"./tags/CMS/index.html"},{"revision":"2d00a20293f7ec00aa7935e3efd17945","url":"./tags/css/index.html"},{"revision":"9219d39aff9042a7e2a6f6fd8ccd23ed","url":"./tags/DNS/index.html"},{"revision":"a51c8ba664e096fe2cdf9cdc0e55a5b2","url":"./tags/Flash/index.html"},{"revision":"38154b2cf15be65dc71e6f556f908a1d","url":"./tags/GFW/index.html"},{"revision":"c8fa0ae076bdfa32b2fbb79d8e4f731c","url":"./tags/Gridea/index.html"},{"revision":"4ae3b8bbab25e8f8415c265e3d05f574","url":"./tags/HTML/index.html"},{"revision":"af9b317a05852ebac19ce6dd8e1ec8b0","url":"./tags/index.html"},{"revision":"ae8b9a37cf7e76f58fb83af65ed1ca91","url":"./tags/JavaScript/index.html"},{"revision":"7689ae4db125f8e032715ba2512d3a8d","url":"./tags/JQuery/index.html"},{"revision":"9bb6191968de8e1846098cf47529478a","url":"./tags/MetingJS/index.html"},{"revision":"10099fe2ab70ebaf7ad95cf9826a2859","url":"./tags/NexT/index.html"},{"revision":"d320c031ce7444604359c51e72a70001","url":"./tags/P2P/index.html"},{"revision":"b33d0fe062bd1179874ffd511fa60feb","url":"./tags/RSA/index.html"},{"revision":"4bb74d6d9e814e55d2a486c9a73fbc2f","url":"./tags/Vercel/index.html"},{"revision":"9f83a609019a729f74fb1ce9d9fc62aa","url":"./tags/分享/index.html"},{"revision":"0379fcde25c99394dd18881121021ae2","url":"./tags/加密/index.html"},{"revision":"579eb235594c1865428b68cc7f811adc","url":"./tags/加载动画/index.html"},{"revision":"e78633c27ac9952c8c28017b992eab28","url":"./tags/右键菜单/index.html"},{"revision":"1f9d97c0613281547ceb89e249197ac2","url":"./tags/域名/index.html"},{"revision":"e84c23dba23797b2d1db5a16bd92e865","url":"./tags/密码学/index.html"},{"revision":"acc984eb1bcdb3850f1a7b89dbaba00e","url":"./tags/建站/index.html"},{"revision":"1ffadd5fdc5cc071c65cd8d88ce6af25","url":"./tags/插件/index.html"},{"revision":"438af90a3037e4d3248103ebe4207cbc","url":"./tags/服务器/index.html"},{"revision":"2730d3335435307f4667f7fab0ff1b0a","url":"./tags/网页源码/index.html"},{"revision":"64f2527ac334cd3d951a0956c85cf777","url":"./tags/美化/index.html"},{"revision":"e409235dcb9140859c44c97e7ea1e55a","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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