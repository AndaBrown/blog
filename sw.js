const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"d4ffd8e58f493f967cebb64eadabac41","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"c90edaf61bcb2da91d2bb74bca73976a","url":"./404.html"},{"revision":"a162566d7d0946c5e542591e18dafc37","url":"./talks/index.html"},{"revision":"83e89082252747854b95d00d9e4b837a","url":"./tags/index.html"},{"revision":"ff0c8283099155702f0a1b53bc8fe7d1","url":"./tags/美化/index.html"},{"revision":"236edda2953acb4ecdd26842779f0090","url":"./tags/网页源码/index.html"},{"revision":"ce56f10856bd1e25d4a7d28cc782f9c9","url":"./tags/服务器/index.html"},{"revision":"6e6c2cd31c5b44abff050cc5cd32dd05","url":"./tags/插件/index.html"},{"revision":"3bc17ef0ac8b7420638f0f21658fc511","url":"./tags/建站/index.html"},{"revision":"4bf4efbdcc835f5b16acff590dd3d950","url":"./tags/密码学/index.html"},{"revision":"dd9148205ca3ae11b80346bbea709eb7","url":"./tags/域名/index.html"},{"revision":"9f87d8e64b173b4ea35a6b850ef229f9","url":"./tags/右键菜单/index.html"},{"revision":"fe83bd01b85d895130de0d420ab2a6af","url":"./tags/区块链/index.html"},{"revision":"34bf594e8b32f243309403f1b02fe044","url":"./tags/加载动画/index.html"},{"revision":"b4c188a572a87c00407ffa3c6937f548","url":"./tags/加密货币/index.html"},{"revision":"9d27c0b4ebe473359a23d36a21894fe7","url":"./tags/加密/index.html"},{"revision":"4d7c2495a2da62b4ee3501900436a2a4","url":"./tags/分享/index.html"},{"revision":"492aae40f9902c77e18e1679f8645ce8","url":"./tags/css/index.html"},{"revision":"6d840e372dbba62ee8220e841ad7678c","url":"./tags/Vercel/index.html"},{"revision":"92f0ec2141d089f830a5edec86e0516e","url":"./tags/RSA/index.html"},{"revision":"76bcc554c09fe2adbade9d8c1408b0c0","url":"./tags/P2P/index.html"},{"revision":"03c4e55ed3665013ef8b437caaeb3199","url":"./tags/NexT/index.html"},{"revision":"152afb004dfdd27775363a6d72b7c1c4","url":"./tags/MetingJS/index.html"},{"revision":"1c53c1de0bf383ab6e7c0ad06458767b","url":"./tags/JavaScript/index.html"},{"revision":"ce1ab5e31e27452b031d5d64c717a1cf","url":"./tags/JQuery/index.html"},{"revision":"6de768f253e1b1f6664f2c1238bd2030","url":"./tags/HTML/index.html"},{"revision":"0aa495ecde4121afe17ac1628d98db79","url":"./tags/Gridea/index.html"},{"revision":"dcec69b5b6b24ec6cf859d4e93679e7e","url":"./tags/GFW/index.html"},{"revision":"e78caff33eaf3e7c79b3c0d27cca7a90","url":"./tags/Flash/index.html"},{"revision":"2d4e27e9171c712238c9257ec85abd02","url":"./tags/DNS/index.html"},{"revision":"63fa85801b429634d9863501a4bfc50f","url":"./tags/CMS/index.html"},{"revision":"a96f9e08169355336d08c309d5ac7bcb","url":"./tags/CDN/index.html"},{"revision":"d54cf6d474a4128e87700b22266636d2","url":"./tags/Bing/index.html"},{"revision":"65da63d8d3c533316b24bc67ab6ce7ef","url":"./tags/BUG/index.html"},{"revision":"c7d3a3db692fc96f64853c0ab3f195b7","url":"./tags/Aplayer/index.html"},{"revision":"2dea3fe3deaf64bd846f9baeb407ef08","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"88655123dab0329103bdd150f90e38b9","url":"./post/fa97bd48/index.html"},{"revision":"0bb6b3a17e12773037c68009c183221a","url":"./post/f82f332a/index.html"},{"revision":"a4c265fd9762261bf7018f92a1e7343e","url":"./post/dd83a796/index.html"},{"revision":"718cacfcd7701fb736dfc5c28e875123","url":"./post/db569493/index.html"},{"revision":"0c56bfd2b5311269400cb564c012b5e7","url":"./post/d50c4d0e/index.html"},{"revision":"36ea2e2f3fb25f1a900c22f12f175261","url":"./post/d4550abf/index.html"},{"revision":"cb498ada403370779d0cfe38d514a0e9","url":"./post/b9a3407d/index.html"},{"revision":"6f8b10ca304f68aaaa9312a9553f017a","url":"./post/ae58d2f1/index.html"},{"revision":"d51427e5eefad46e8bd8a66757fa8a09","url":"./post/9c60e209/index.html"},{"revision":"66511bdfea5cecf392899b7ef2333d7d","url":"./post/99c7fa1c/index.html"},{"revision":"abc529635c417e884aef78675dc8db48","url":"./post/8422c4dc/index.html"},{"revision":"64bb22c1e1795e3c2d94a381fbfd723b","url":"./post/8097b5e3/index.html"},{"revision":"fa1d8027e7b7309b5e9c262bddc41b28","url":"./post/7fc77154/index.html"},{"revision":"14e1a50e62dd31e4b807647d78231ebf","url":"./post/7ca5704e/index.html"},{"revision":"1e9b99f682b12f1c08128c003c4dec71","url":"./post/73fccf9a/index.html"},{"revision":"1a8869c8b4c37c72a1798d3a7ce7960e","url":"./post/739f0a30/index.html"},{"revision":"3c828837104062ce4593e67434d8f5d7","url":"./post/4a17b156/index.html"},{"revision":"be03873633443e619e47552c7f34d742","url":"./post/48bc1675/index.html"},{"revision":"5123c94b7bbae2c2e0a022b059c9707e","url":"./post/3df9585/index.html"},{"revision":"503ee5f4e51012201706bdcaf964089c","url":"./post/3082b2c6/index.html"},{"revision":"695e7a7e8d5a58ac620e1100f9a3023e","url":"./post/24dc856c/index.html"},{"revision":"505e8b1a9e40c59e02a8341ffa2f85b0","url":"./post/220b8380/index.html"},{"revision":"a859aa8bdb198bb26eb9b67ca8643821","url":"./post/193912eb/index.html"},{"revision":"0cdcceafe41ca956652d4e52617ec560","url":"./page/3/index.html"},{"revision":"f81bcf78115d4fda88abe489d1b28284","url":"./page/2/index.html"},{"revision":"2628e6091e53fa6b345aabdd3dbc45da","url":"./message/index.html"},{"revision":"b6b6320f789b04c6cc6a4c8b967d0ef3","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"b3b1efd5f1ce7f66930c1f162ebcd8bf","url":"./cookies-instructions/index.html"},{"revision":"df2d5f2921e4abad25d1114002009c44","url":"./categories/index.html"},{"revision":"b8411052d2073c0e5e146e84538119b9","url":"./categories/网页源码/index.html"},{"revision":"5f2f4a5d03c14efd50379d8781c2a774","url":"./categories/科普/index.html"},{"revision":"fa2369818e15d48a22f66c11db46a0c6","url":"./categories/建站/index.html"},{"revision":"3406d854abce62eb6d180fe25478e607","url":"./categories/休闲/index.html"},{"revision":"88a2d540e6b5d6f9a36df70731ad7db2","url":"./categories/Vercel/index.html"},{"revision":"fdf2b03173675da335d85877a65ab944","url":"./categories/Gridea/index.html"},{"revision":"a7f12ede4084d6501ef2d8a0d582efcf","url":"./categories/AI/index.html"},{"revision":"046a5815b507404332b3aa7e400bfb60","url":"./archives/index.html"},{"revision":"8546a3ff551581688346d8af4031012d","url":"./archives/page/3/index.html"},{"revision":"adf67a674dbb3bf3895a1888320d908f","url":"./archives/page/2/index.html"},{"revision":"2d321cc863670338470d30d9c533f721","url":"./archives/2025/index.html"},{"revision":"4ecca335cc31c4aa560baebd4ca2a323","url":"./archives/2025/10/index.html"},{"revision":"3169738941f240c499e5205af62018b0","url":"./archives/2025/09/index.html"},{"revision":"86225bfb09f53412cbfe62ccf3b3c18d","url":"./archives/2024/index.html"},{"revision":"96a4108468d7efddaef7ec6ec1518f81","url":"./archives/2024/09/index.html"},{"revision":"338b3815127af3e0ef03de05649ae125","url":"./archives/2024/06/index.html"},{"revision":"0155117878a59c217a1033017f0f75ff","url":"./archives/2024/05/index.html"},{"revision":"b4fe7ff5dd786821e4f6e3a3614a0c25","url":"./archives/2024/04/index.html"},{"revision":"d68a1a1f99e3ee4a246d49c3a2fe6951","url":"./archives/2023/index.html"},{"revision":"b30ef2a1c436d6d242aff4dd9d6ae3f4","url":"./archives/2023/04/index.html"},{"revision":"e23892941fdd070c0f16184eb18ef8be","url":"./archives/2023/02/index.html"},{"revision":"7bd7dde7e79f7242aedbdc1a36165f6a","url":"./archives/2022/index.html"},{"revision":"b38b65e339e0e8c42cc66bf3098d381f","url":"./archives/2022/page/2/index.html"},{"revision":"06182bcdff29b933f4f698608ebf1f12","url":"./archives/2022/12/index.html"},{"revision":"9da4eb197de300bc22590b4b6640130d","url":"./archives/2022/11/index.html"},{"revision":"1f6f44204f846eb0e3265ce6d22ae866","url":"./archives/2022/10/index.html"},{"revision":"18beb270dde68f1fdb19830214401a58","url":"./archives/2022/08/index.html"},{"revision":"2296b6400fe3425b8ff4b9d80dc6bd0b","url":"./archives/2022/07/index.html"},{"revision":"c5b3f6bbc930ef75dc3db4ab129ae0a9","url":"./archives/2022/06/index.html"},{"revision":"5cc457607e8e83803a20a02ba01c4e16","url":"./about/index.html"}]);
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