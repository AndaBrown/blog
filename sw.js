const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"f42afc4841852bfff368efa9526c4327","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"bd93d5144df335a7067779484f203a16","url":"./404.html"},{"revision":"7f540071cb35b7eb5570f5f05d0b229d","url":"./talks/index.html"},{"revision":"c1da917d6ded00ac06ba0851835ee76f","url":"./tags/index.html"},{"revision":"74bf458e3b88197d8aad90b4d361db73","url":"./tags/美化/index.html"},{"revision":"42b3b61251f3c70532c7d81e04d0f386","url":"./tags/网页源码/index.html"},{"revision":"3545dba5c7b4920a77a38a6dd3f9a791","url":"./tags/服务器/index.html"},{"revision":"a565bf8b103b0f2b5e3bfcd174d1fb41","url":"./tags/插件/index.html"},{"revision":"8f917cf449abe44e2b8e1822411c0e20","url":"./tags/建站/index.html"},{"revision":"7b26d0cc63ec991ef69c83b3691ed7ed","url":"./tags/密码学/index.html"},{"revision":"005a0d3c6145acd878ba3d582a7df137","url":"./tags/域名/index.html"},{"revision":"1b40d3d30ab08caa6429c590b3963ac4","url":"./tags/右键菜单/index.html"},{"revision":"3d011b085b03452f2758a123599b179d","url":"./tags/区块链/index.html"},{"revision":"bd96de6ddadc316cff2fdbb4cd087d1a","url":"./tags/加载动画/index.html"},{"revision":"f69b19a0794901c1a60ff0bd0ba5b6b1","url":"./tags/加密货币/index.html"},{"revision":"831fe3efac6bc8895d4f11ec60dcaa56","url":"./tags/加密/index.html"},{"revision":"b1561f87cdcb4dc643dcaad4286989ef","url":"./tags/分享/index.html"},{"revision":"e05542a579ab9cce6c57d41793554316","url":"./tags/css/index.html"},{"revision":"5f3c781ff4abcc4e54c0c3bef9345917","url":"./tags/Vercel/index.html"},{"revision":"3847e6a4e186b7428ff5e404a64e71a0","url":"./tags/RSA/index.html"},{"revision":"389468b350d2fdce9b21d45a265adea5","url":"./tags/P2P/index.html"},{"revision":"5424233342931a02db7ce62428feefe0","url":"./tags/NexT/index.html"},{"revision":"958335629d53015b597d48c53adc1045","url":"./tags/MetingJS/index.html"},{"revision":"9d99656d6c7a587854f1a7bc3322bbc7","url":"./tags/JavaScript/index.html"},{"revision":"7c362d2159aa27f568b2997202a2792c","url":"./tags/JQuery/index.html"},{"revision":"8f228d794c3a72beefc1bb26825a6e2d","url":"./tags/HTML/index.html"},{"revision":"a22d81c8be88f73756f1eb06fd44fe84","url":"./tags/Gridea/index.html"},{"revision":"126a3151a00aef1f7b77b9a68f1202b9","url":"./tags/GFW/index.html"},{"revision":"369086220a8049000f1a1ad892d0faa6","url":"./tags/Flash/index.html"},{"revision":"bffd00d0c9474e07f81099bcc3f33e90","url":"./tags/DNS/index.html"},{"revision":"10e37fef3905d7f27100b8e1705d6f0c","url":"./tags/CMS/index.html"},{"revision":"e9e27a3d554235a045609414791b752a","url":"./tags/CDN/index.html"},{"revision":"79228c3cf94edb74a55d8e49ffc3e820","url":"./tags/Bing/index.html"},{"revision":"03dda35f900e667cf3d40003d2105b23","url":"./tags/BUG/index.html"},{"revision":"2b9ab25847331c02d4f64b01eb5010c4","url":"./tags/Aplayer/index.html"},{"revision":"1846ed091d211f6e035e9f7f35844714","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"5c0c876314bd2ee88c91a9ffcc1b26cb","url":"./post/fa97bd48/index.html"},{"revision":"6fc54b79d818186c8b482b5f0c8ab031","url":"./post/f82f332a/index.html"},{"revision":"8071d9bb0d0f57e0a823fbe8deff29f5","url":"./post/dd83a796/index.html"},{"revision":"4f9093e5e27fb96a23358a5fce6a9074","url":"./post/db569493/index.html"},{"revision":"2277a21df551251c0fd7300a5ff81b38","url":"./post/d50c4d0e/index.html"},{"revision":"86b0de75406ea2b1d5846a3a88b69c06","url":"./post/d4550abf/index.html"},{"revision":"2fae6cd816092e0dd68f609e152427a2","url":"./post/b9a3407d/index.html"},{"revision":"3e325599cd0b50f882c87e360b492d1b","url":"./post/ae58d2f1/index.html"},{"revision":"e031edfc4a4c44b21fc787eea1f0e599","url":"./post/9c60e209/index.html"},{"revision":"ffa3965c5571cea79ddaaf7bba89a16a","url":"./post/99c7fa1c/index.html"},{"revision":"8c581e8a475fa8381fa5a2ff48e02b16","url":"./post/8422c4dc/index.html"},{"revision":"3eef04b159f807c3281a925bf9e073de","url":"./post/8097b5e3/index.html"},{"revision":"28323709742b3b826937fd0f9623c227","url":"./post/7fc77154/index.html"},{"revision":"6d05f7a4f89872d807dd667cb93e13bd","url":"./post/7ca5704e/index.html"},{"revision":"dfca6b177a36d32c20cd70e7498fcc25","url":"./post/73fccf9a/index.html"},{"revision":"aa939fa637119fa42d2653b622b2f311","url":"./post/739f0a30/index.html"},{"revision":"518022ba228da09887effd68cd53e495","url":"./post/4a17b156/index.html"},{"revision":"17d489c13073b7b20520666365e51062","url":"./post/48bc1675/index.html"},{"revision":"99ad55349cbc860b85d9250dec615d38","url":"./post/3df9585/index.html"},{"revision":"d27ac396b5af88f933e23c990441ed9e","url":"./post/3082b2c6/index.html"},{"revision":"db479613d65561c5bd2abd2a02fedd01","url":"./post/24dc856c/index.html"},{"revision":"ba4f980b0602e4271b9df180d3fa9c00","url":"./post/220b8380/index.html"},{"revision":"d64a45aea3c72b5b377a94d57e884ddf","url":"./post/193912eb/index.html"},{"revision":"2d5cd73d51c1e7115cbbb11df5ae0241","url":"./page/3/index.html"},{"revision":"fa1ad6dbfa2c28ea414093e18250ca10","url":"./page/2/index.html"},{"revision":"da59f3f341c63eb7a642f421e62e0c35","url":"./message/index.html"},{"revision":"0f979bb5a0b2abf0771cfdb251f90049","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"3fc50fea27ae13328e4b615752d6212a","url":"./cookies-instructions/index.html"},{"revision":"9fdfa185f8e3dd4ab3d6bd4b0344c013","url":"./categories/index.html"},{"revision":"3c02337e1ded03923fc79422ec2c6221","url":"./categories/网页源码/index.html"},{"revision":"a6bb26046c0a4a2937060e58ce24cc8f","url":"./categories/科普/index.html"},{"revision":"6c125cdac55b078ecd684f0b4d3fc1f7","url":"./categories/建站/index.html"},{"revision":"f070e6187b9bbdbfcbdacd978723e21b","url":"./categories/休闲/index.html"},{"revision":"cd623d9fbf4b78e36a58ed7e84d72322","url":"./categories/Vercel/index.html"},{"revision":"87d8109d48b725f9bf8f3431bdd0e244","url":"./categories/Gridea/index.html"},{"revision":"60f4e41a33006f5fb7aa24f4b91c41a0","url":"./categories/AI/index.html"},{"revision":"158edd462756114965c6d3891987663e","url":"./archives/index.html"},{"revision":"5c2b325e4c668648514faa1c22bca0ad","url":"./archives/page/3/index.html"},{"revision":"5c8efdc882592e82d35584ed51586131","url":"./archives/page/2/index.html"},{"revision":"ff976f61dfbc6568f6571a35104f2783","url":"./archives/2025/index.html"},{"revision":"cd2d2631c4c6e071a5086f405e83962e","url":"./archives/2025/10/index.html"},{"revision":"6fe85d70dd00446bf8ac4b12d2de3a87","url":"./archives/2025/09/index.html"},{"revision":"a25a19a13d35a445341ddcf456035664","url":"./archives/2024/index.html"},{"revision":"e595ef6c143f6ec8a787a3bcb1585c9e","url":"./archives/2024/09/index.html"},{"revision":"4bb2b3c9aeea0748c975c7e368dc0894","url":"./archives/2024/06/index.html"},{"revision":"29028a263e27f98cc61451311f737333","url":"./archives/2024/05/index.html"},{"revision":"7581e292f646b1328e44fbc9a039af56","url":"./archives/2024/04/index.html"},{"revision":"0791a2dd1db4085684b8bd726b6c685b","url":"./archives/2023/index.html"},{"revision":"0a3c0144b2453d712c2eb1e09df7d788","url":"./archives/2023/04/index.html"},{"revision":"7c3710ad91d3e78e173ebda7bda8bc87","url":"./archives/2023/02/index.html"},{"revision":"1b974f6d7dee859e0b81c0c9287a1921","url":"./archives/2022/index.html"},{"revision":"e8c0fcd7ff78b32c017c203db974a444","url":"./archives/2022/page/2/index.html"},{"revision":"091a89f81a1c1ccc99510fac08738646","url":"./archives/2022/12/index.html"},{"revision":"dc249e20e5eb62aa72c1da820f209f2a","url":"./archives/2022/11/index.html"},{"revision":"2c4d546a4008a1b12ac87a464c1fe97e","url":"./archives/2022/10/index.html"},{"revision":"369fd11d50db993473384109b946660e","url":"./archives/2022/08/index.html"},{"revision":"35fc819ad4545f83984028c181d7b707","url":"./archives/2022/07/index.html"},{"revision":"e47cc68a7d02a8693bf45509f79a48f5","url":"./archives/2022/06/index.html"},{"revision":"f8303bdf54d1204a50b976a046fff0e6","url":"./about/index.html"}]);
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