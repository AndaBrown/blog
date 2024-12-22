const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"86d741cb500daf1fe0680f91c1eb81be","url":"./404.html"},{"revision":"467445b71bc21cc416f2433dde021304","url":"./about/index.html"},{"revision":"9a958afd3c86e9caec42f55ed3add367","url":"./archives/2022/06/index.html"},{"revision":"b3d8ea9976107558fb166abfc081cc47","url":"./archives/2022/07/index.html"},{"revision":"53f4aafbec7cd6b30ed73e516e684f8a","url":"./archives/2022/08/index.html"},{"revision":"4523d6e49fb656e8d80fb533b07442e9","url":"./archives/2022/10/index.html"},{"revision":"2adfb50ebe92e2c5950293b7891ddc54","url":"./archives/2022/11/index.html"},{"revision":"7735caa61dc4060e98d75110ea368913","url":"./archives/2022/12/index.html"},{"revision":"ff6b96a2c696ff74e751f11ffe9ef8b5","url":"./archives/2022/index.html"},{"revision":"9940c7fa459847af5a936cf0ad1c371e","url":"./archives/2022/page/2/index.html"},{"revision":"98f0df27f02e9ecaa70544e9484682f6","url":"./archives/2023/02/index.html"},{"revision":"5385e5b6e88f3af5fc5aeae6e8f3637e","url":"./archives/2023/04/index.html"},{"revision":"26875e6eaf90687639dade1ed56ee7e6","url":"./archives/2023/index.html"},{"revision":"68a57aa43373ec5b07c9950be3693100","url":"./archives/2024/04/index.html"},{"revision":"73b7c63d17785f0d6d5bcdbd42338019","url":"./archives/2024/05/index.html"},{"revision":"7c12937ddc9cff7249ddf3393be99ff4","url":"./archives/2024/06/index.html"},{"revision":"20f52a1c83f06e39d61674cb0d912c81","url":"./archives/2024/09/index.html"},{"revision":"c6c37dde9e844a1fa782d47c1c10baef","url":"./archives/2024/index.html"},{"revision":"033910ab5b005309ba9922ce77a53ff8","url":"./archives/index.html"},{"revision":"e36c1c9ad0f1cee9c4d8ef0e596dd045","url":"./archives/page/2/index.html"},{"revision":"b069a5a771972370a48a93e4d07a8ff7","url":"./archives/page/3/index.html"},{"revision":"cdf4b435da2b44e3745a0409abb84dab","url":"./categories/AI/index.html"},{"revision":"d3fc4088921ba905f79bdcd2a92ed3a1","url":"./categories/Gridea/index.html"},{"revision":"0c9b415243f776c57e96ac5ac8102755","url":"./categories/index.html"},{"revision":"b91755495928d9f1a94ff2088d5e71bb","url":"./categories/Vercel/index.html"},{"revision":"7bdc98a91c5c148c6652c7dbcc3cae9a","url":"./categories/休闲/index.html"},{"revision":"49243c6afdbf70918413c8741ab70ee9","url":"./categories/建站/index.html"},{"revision":"b7aa9f4795d1e602fa1197006d64b444","url":"./categories/科普/index.html"},{"revision":"132dae9d1b483c301324c000a274033c","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"7448ea6fb7b02bf4e0d9010283803df7","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"6f9c2a32b667a0eb18aaa6a48c821019","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"42297af6c1fb45e6283c87f77ef7c4f7","url":"./link/index.html"},{"revision":"cf45d1856ef8d5eedd56eef28386aab3","url":"./message/index.html"},{"revision":"7423cf2af08d21b774f87ec6793f84ec","url":"./page/2/index.html"},{"revision":"601dfa2d02663ca8ae23da11cbbef741","url":"./page/3/index.html"},{"revision":"33fa994fc113f3a275d2b729bc1429cf","url":"./post/193912eb/index.html"},{"revision":"a81e29c7e51221b4c34cbec3189ef3c9","url":"./post/220b8380/index.html"},{"revision":"c0f38b219cdd712cf028332457bce7ac","url":"./post/24dc856c/index.html"},{"revision":"a42d26684885c1973dd25786a1d86cf8","url":"./post/3082b2c6/index.html"},{"revision":"c542234377f43444a6b2fe0d180d18ee","url":"./post/3df9585/index.html"},{"revision":"e02a5364889604928427d23c805eb2b5","url":"./post/4a17b156/index.html"},{"revision":"415efcf3c4ebcdca557f3842d16a1598","url":"./post/739f0a30/index.html"},{"revision":"cba83b585b0edd8ee8751a6cf5d6ba13","url":"./post/73fccf9a/index.html"},{"revision":"67f15ee61a93f6889fe0bbfda84fa77d","url":"./post/7ca5704e/index.html"},{"revision":"bab49e20cd201f4baa38535711155386","url":"./post/7fc77154/index.html"},{"revision":"8a62fe149ef84e9dcd31546292f84612","url":"./post/8097b5e3/index.html"},{"revision":"be9f422288adc51270dfc68e2ba7b919","url":"./post/8422c4dc/index.html"},{"revision":"844334a6dc4a82098fb976f78bdc0da9","url":"./post/99c7fa1c/index.html"},{"revision":"fb447e50774e9a8abad71be498ce4c96","url":"./post/9c60e209/index.html"},{"revision":"d44241b3dd3efbd73fa75e8fb42ac8b0","url":"./post/ae58d2f1/index.html"},{"revision":"ec5e2fbcd3dbe998c48c01b0cd808bdd","url":"./post/d4550abf/index.html"},{"revision":"1827c1df4251813f6d93f43164d31ffc","url":"./post/d50c4d0e/index.html"},{"revision":"69fd4c1bfc4d6ba66665213b0792a70a","url":"./post/db569493/index.html"},{"revision":"6c8d34e228af55876ebfbe4459942d03","url":"./post/dd83a796/index.html"},{"revision":"683c2cedae3e4e005771b3b7a1591e0b","url":"./post/f82f332a/index.html"},{"revision":"9a7ae7e2d0c7353daca5b260f7961ccd","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"c4a0a1c99b430aa46107ed86c9a1b505","url":"./tags/AI/index.html"},{"revision":"901457312149a635f21e8d594eb56473","url":"./tags/Aplayer/index.html"},{"revision":"29d9f6e503d957c637395c646115f9b3","url":"./tags/Bing/index.html"},{"revision":"48f4b6792e399463c57e45bb4dfaeb27","url":"./tags/BUG/index.html"},{"revision":"59414a64b9deafb6f400656cc1a45a98","url":"./tags/CDN/index.html"},{"revision":"2b13406953384264624cca7b9e5f9b14","url":"./tags/CMS/index.html"},{"revision":"bd55a1144ba03bb451f42bd6c593a0cf","url":"./tags/css/index.html"},{"revision":"bc992f2337d05594a405a520f12d8ab2","url":"./tags/DNS/index.html"},{"revision":"dae34b4cb0c3b703563c544cf575f9b7","url":"./tags/Flash/index.html"},{"revision":"73b7c03445cf5f1b48f8c6cabf625600","url":"./tags/GFW/index.html"},{"revision":"722d4b6409ccf023ba0930b5509b2c52","url":"./tags/Gridea/index.html"},{"revision":"a2dd48ea03718f43997712936ff95c60","url":"./tags/HTML/index.html"},{"revision":"2ae3c64ae725e4883d039a71ecf7ddc6","url":"./tags/index.html"},{"revision":"8a0a50504891550af97e02b044ecd302","url":"./tags/JavaScript/index.html"},{"revision":"fae0f431ff09c825d4c127f385bfe390","url":"./tags/JQuery/index.html"},{"revision":"844f43e47a86e722b58056d0a0477a38","url":"./tags/MetingJS/index.html"},{"revision":"35e1cc2c6e690cf37b8cd0d4668464d3","url":"./tags/NexT/index.html"},{"revision":"4a593f1fcba1c07f78e771d3d93853a0","url":"./tags/P2P/index.html"},{"revision":"648c46674a9e917fb756b245e59688bc","url":"./tags/RSA/index.html"},{"revision":"a82c51bf0f6f51259576705eb0008316","url":"./tags/Vercel/index.html"},{"revision":"f3d6d06bf904aa777b6a6056913364b2","url":"./tags/分享/index.html"},{"revision":"ed19efec61d006843f6cf8faa189ce52","url":"./tags/加密/index.html"},{"revision":"1adeaf00a229e5fe97b90c8b74ab421a","url":"./tags/加载动画/index.html"},{"revision":"8e6993af100ec880f05ad0c59f4220d0","url":"./tags/右键菜单/index.html"},{"revision":"1d280880e8bc18c366b8604a74cd05ce","url":"./tags/域名/index.html"},{"revision":"5f7720fd5f6873e225ff7bf45aaf850e","url":"./tags/密码学/index.html"},{"revision":"236712991f687676147b782c870f1f0a","url":"./tags/建站/index.html"},{"revision":"b3d7bea6119e2251918510a7355179cf","url":"./tags/插件/index.html"},{"revision":"c49af0cd217b0b401a77211baf671ecf","url":"./tags/服务器/index.html"},{"revision":"63b56c513a941c2752433f0a93bd5a15","url":"./tags/网页源码/index.html"},{"revision":"e94d712d61c76df0d258c58c35b59280","url":"./tags/美化/index.html"},{"revision":"7298e4ee80169aa167551baa6026ded4","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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