const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"b4cee1bb3176441da83e9446cf84dedf","url":"./404.html"},{"revision":"7e77eb4c7a3755f7480ae360c4c7cde9","url":"./about/index.html"},{"revision":"e89f656714f86d8ce4492370e9b5efc3","url":"./archives/2022/06/index.html"},{"revision":"345c643f3aa1bcba0a5d863d69dedc4e","url":"./archives/2022/07/index.html"},{"revision":"753598b15156e17ee8577031c3bd6ff1","url":"./archives/2022/08/index.html"},{"revision":"fc471c774bf18b360ffbbdbe10730e51","url":"./archives/2022/10/index.html"},{"revision":"6079bee50f0a1e78658a1b72cebd7348","url":"./archives/2022/11/index.html"},{"revision":"f4012fc4188157d8091cae721019fae8","url":"./archives/2022/12/index.html"},{"revision":"38c8896d1d8dc7a182fed1a251019acb","url":"./archives/2022/index.html"},{"revision":"10d473e07aee0bc28246c6efa8768228","url":"./archives/2022/page/2/index.html"},{"revision":"ddc30038051a5b12de2354ae57081ab0","url":"./archives/2023/02/index.html"},{"revision":"a8a53e14d88f2c3a873f94f558ac339b","url":"./archives/2023/04/index.html"},{"revision":"4e1150ea3aa380b00b5d1592766b4739","url":"./archives/2023/index.html"},{"revision":"1957a31b8da770c6767e04c9729ef53f","url":"./archives/2024/04/index.html"},{"revision":"748b063699f0d98e71d51849d4c0963a","url":"./archives/2024/05/index.html"},{"revision":"6bd8f6ff92a07dde7e0e37296c2f8c83","url":"./archives/2024/06/index.html"},{"revision":"b242f797cbc307397adf6774f8f0ff95","url":"./archives/2024/09/index.html"},{"revision":"34e50595d2e6fd6db32681531bd3d3cb","url":"./archives/2024/index.html"},{"revision":"f8589c1d7cdf23ef3a422b9be82fe165","url":"./archives/index.html"},{"revision":"71035a4eb300f7c07fdf17472c7aba11","url":"./archives/page/2/index.html"},{"revision":"9d1d04e0f5988956a660a7278415f43e","url":"./archives/page/3/index.html"},{"revision":"b864e33f7f4aa414bf729551c6be1fc1","url":"./categories/AI/index.html"},{"revision":"550703fe308733b021c2f6759959d8ca","url":"./categories/Gridea/index.html"},{"revision":"d1f21c6d3c4f9f5bdb1825ef319da03f","url":"./categories/index.html"},{"revision":"22c7ed47f9215c4c44ad316017d96e96","url":"./categories/Vercel/index.html"},{"revision":"23b5e906e728fe413decd162f03661de","url":"./categories/休闲/index.html"},{"revision":"4106e47b2f50215fc8cd86cf7ca4cfbe","url":"./categories/建站/index.html"},{"revision":"2a2dba442429b1cbff8dd019902e45fb","url":"./categories/科普/index.html"},{"revision":"8dc3f3366b405204d2599694a3f596e6","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"cf4cec0acef61d8c1ca9b930a4733e9c","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"14d24357c30b30ca2d88b62c8f62feff","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"9f26cdf426b9ed356d43fd4b92b9139f","url":"./link/index.html"},{"revision":"53c2727be6e2fefe8089a24d0a4cd34c","url":"./message/index.html"},{"revision":"abdbe83ec4eec3f56e24fdaa9972a4cb","url":"./page/2/index.html"},{"revision":"2e7bbfa53f683e08405df9e216595092","url":"./page/3/index.html"},{"revision":"33fa994fc113f3a275d2b729bc1429cf","url":"./post/193912eb/index.html"},{"revision":"a81e29c7e51221b4c34cbec3189ef3c9","url":"./post/220b8380/index.html"},{"revision":"c0f38b219cdd712cf028332457bce7ac","url":"./post/24dc856c/index.html"},{"revision":"a42d26684885c1973dd25786a1d86cf8","url":"./post/3082b2c6/index.html"},{"revision":"c542234377f43444a6b2fe0d180d18ee","url":"./post/3df9585/index.html"},{"revision":"e02a5364889604928427d23c805eb2b5","url":"./post/4a17b156/index.html"},{"revision":"415efcf3c4ebcdca557f3842d16a1598","url":"./post/739f0a30/index.html"},{"revision":"cba83b585b0edd8ee8751a6cf5d6ba13","url":"./post/73fccf9a/index.html"},{"revision":"67f15ee61a93f6889fe0bbfda84fa77d","url":"./post/7ca5704e/index.html"},{"revision":"bab49e20cd201f4baa38535711155386","url":"./post/7fc77154/index.html"},{"revision":"8a62fe149ef84e9dcd31546292f84612","url":"./post/8097b5e3/index.html"},{"revision":"be9f422288adc51270dfc68e2ba7b919","url":"./post/8422c4dc/index.html"},{"revision":"9a8c6accf9cee4cbeed226452c041602","url":"./post/99c7fa1c/index.html"},{"revision":"fb447e50774e9a8abad71be498ce4c96","url":"./post/9c60e209/index.html"},{"revision":"a96a24718694d89909b1732796b35237","url":"./post/ae58d2f1/index.html"},{"revision":"d5daccaa80bbf16474103ace707998af","url":"./post/d4550abf/index.html"},{"revision":"1827c1df4251813f6d93f43164d31ffc","url":"./post/d50c4d0e/index.html"},{"revision":"69fd4c1bfc4d6ba66665213b0792a70a","url":"./post/db569493/index.html"},{"revision":"6c8d34e228af55876ebfbe4459942d03","url":"./post/dd83a796/index.html"},{"revision":"683c2cedae3e4e005771b3b7a1591e0b","url":"./post/f82f332a/index.html"},{"revision":"9a7ae7e2d0c7353daca5b260f7961ccd","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"d4a663531f766b7d1d559fd57ee5ffc6","url":"./tags/AI/index.html"},{"revision":"99d5a3b8ac90b7c20d018c1787bc4ce6","url":"./tags/Aplayer/index.html"},{"revision":"16f2973dc5de67609de7e49b21208314","url":"./tags/Bing/index.html"},{"revision":"43689263bc89fa250df40f630cd6d833","url":"./tags/BUG/index.html"},{"revision":"5ee64663fc841a14cdb8184341de9067","url":"./tags/CDN/index.html"},{"revision":"6c693aade2559cf2d2751bef8c95caeb","url":"./tags/CMS/index.html"},{"revision":"8d9b0f312bef1d1af5efe2719ea28472","url":"./tags/css/index.html"},{"revision":"c908bc2038d5ba12536aaadb0c77174a","url":"./tags/DNS/index.html"},{"revision":"ecd3f9052f06aca8efa6666c8a064524","url":"./tags/Flash/index.html"},{"revision":"33a76f31d4242e99e8b1a087ecf384b9","url":"./tags/GFW/index.html"},{"revision":"35ccec4f5ea0953e8584b5693389f012","url":"./tags/Gridea/index.html"},{"revision":"ab076baef6c0fea39d7e97fdbfcce7c3","url":"./tags/HTML/index.html"},{"revision":"1ce44210aa7b54d9aa6c660b5eab68fe","url":"./tags/index.html"},{"revision":"29741c6a417912d402a82398cc50c9e0","url":"./tags/JavaScript/index.html"},{"revision":"49177228576672f922d055a7a5971dc1","url":"./tags/JQuery/index.html"},{"revision":"b2037fd733b0726036e5017ebe591ab8","url":"./tags/MetingJS/index.html"},{"revision":"033b8b3e050a4dfa2858a5fa2677ea4b","url":"./tags/NexT/index.html"},{"revision":"e976fef7b407f5966bf553f48dfb7291","url":"./tags/P2P/index.html"},{"revision":"16d8af91443574f572c1e6ad5e5229d2","url":"./tags/RSA/index.html"},{"revision":"7ea2055613723369266c1bc84cf057c0","url":"./tags/Vercel/index.html"},{"revision":"235d874e90f914c89dbfac47d45e0ab5","url":"./tags/分享/index.html"},{"revision":"e83f528b241801ac58901ea5895899f9","url":"./tags/加密/index.html"},{"revision":"38574ce7a2f34485ee1c4e3b580f8d38","url":"./tags/加载动画/index.html"},{"revision":"6129a3e23e0b94a740de49cefd767b88","url":"./tags/右键菜单/index.html"},{"revision":"36a941edd2622818972089b406f4f606","url":"./tags/域名/index.html"},{"revision":"5ac82af1521f07bb3f7028db7a722990","url":"./tags/密码学/index.html"},{"revision":"233f528b0f874facb05bde54ea1b5e48","url":"./tags/建站/index.html"},{"revision":"5e5296b248fbfd6791eecbad8c5753ef","url":"./tags/插件/index.html"},{"revision":"a9d866373d54fab60e6c9af70860297a","url":"./tags/服务器/index.html"},{"revision":"8ccf9e3f8bf8ac95c6d63007d0585920","url":"./tags/网页源码/index.html"},{"revision":"2328b99d09b53b9d4b265f7c7fba3be2","url":"./tags/美化/index.html"},{"revision":"2251a0e3a79271b0944fb215938bb8ba","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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