const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"c24606c932f60d26b5deffd9429bd05a","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"bd93d5144df335a7067779484f203a16","url":"./404.html"},{"revision":"563618c67b8bb4b8473fc93c4e88296e","url":"./talks/index.html"},{"revision":"0501a18ac656ec8e070a142cda632561","url":"./tags/index.html"},{"revision":"098c28fca8ed30ca16e9a2d979a06d1e","url":"./tags/美化/index.html"},{"revision":"a251554ed94a165fd84d658cf0fb3306","url":"./tags/网页源码/index.html"},{"revision":"98424f059fd6c1dbccffdc2a6cea33b0","url":"./tags/服务器/index.html"},{"revision":"21a8cad50adb8818bcae2a47757615e7","url":"./tags/插件/index.html"},{"revision":"77c6b8f63bef096d4a47d701ed2cde25","url":"./tags/建站/index.html"},{"revision":"5a32b2b16d599bed4e955f92ba71037c","url":"./tags/密码学/index.html"},{"revision":"9aad58c9f72d74cae4346813a9fe9c9a","url":"./tags/域名/index.html"},{"revision":"ac5dfb68002db3168a9fb382bf2e85ea","url":"./tags/右键菜单/index.html"},{"revision":"2837e646c25bc83a897677f5f6556156","url":"./tags/区块链/index.html"},{"revision":"b0dbe44ca929d4a600731657cf66cae4","url":"./tags/加载动画/index.html"},{"revision":"57c00ecc68e777da41f61ba4e940273d","url":"./tags/加密货币/index.html"},{"revision":"199dc7f8006e541b2cbe2363975d5b5e","url":"./tags/加密/index.html"},{"revision":"209949a56abffb8695a34570eb3a4fc4","url":"./tags/分享/index.html"},{"revision":"fea3add458ad276677af38624984f832","url":"./tags/css/index.html"},{"revision":"d1b1f87ab56b1121f902d5d84093ca10","url":"./tags/Vercel/index.html"},{"revision":"35e24f18ba82acf6c113476f9766eaa9","url":"./tags/RSA/index.html"},{"revision":"569203550d4c0f1db079fa9e7b3536c2","url":"./tags/P2P/index.html"},{"revision":"475d161bf89ede3f0574e7a2ada94eb2","url":"./tags/NexT/index.html"},{"revision":"079fba66ed5f0d0487cc1dedace2809f","url":"./tags/MetingJS/index.html"},{"revision":"54e77cae1bc1dff2fda1d34ffe17b75c","url":"./tags/JavaScript/index.html"},{"revision":"d6c793ca5b01f3bff71e37f4fca1f537","url":"./tags/JQuery/index.html"},{"revision":"389455988c637fde357dfe958327a625","url":"./tags/HTML/index.html"},{"revision":"ad3bc069fe3eeb84ad519df1fcea664a","url":"./tags/Gridea/index.html"},{"revision":"51b75fc9751b1a081a032d35b93da421","url":"./tags/GFW/index.html"},{"revision":"b5a589774a5f930e90d35bd7d89c6e49","url":"./tags/Flash/index.html"},{"revision":"f2ff4d4de773c3376892af6b679bda76","url":"./tags/DNS/index.html"},{"revision":"f09fef3c8c34c7d00fbb2ef965ca7587","url":"./tags/CMS/index.html"},{"revision":"7bab07ad2e5bbef7b433948315acb63c","url":"./tags/CDN/index.html"},{"revision":"8b95e0f36908448d9a3c1b35dc22b493","url":"./tags/Bing/index.html"},{"revision":"6188fe3480a5db6a18cc77355239d567","url":"./tags/BUG/index.html"},{"revision":"6a7bbf255bdf2b96ae840348716c1cdc","url":"./tags/Aplayer/index.html"},{"revision":"c376b4e31bf625d1db30e29af2172a91","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"5c0c876314bd2ee88c91a9ffcc1b26cb","url":"./post/fa97bd48/index.html"},{"revision":"6fc54b79d818186c8b482b5f0c8ab031","url":"./post/f82f332a/index.html"},{"revision":"8071d9bb0d0f57e0a823fbe8deff29f5","url":"./post/dd83a796/index.html"},{"revision":"4f9093e5e27fb96a23358a5fce6a9074","url":"./post/db569493/index.html"},{"revision":"2277a21df551251c0fd7300a5ff81b38","url":"./post/d50c4d0e/index.html"},{"revision":"86b0de75406ea2b1d5846a3a88b69c06","url":"./post/d4550abf/index.html"},{"revision":"2fae6cd816092e0dd68f609e152427a2","url":"./post/b9a3407d/index.html"},{"revision":"3e325599cd0b50f882c87e360b492d1b","url":"./post/ae58d2f1/index.html"},{"revision":"e031edfc4a4c44b21fc787eea1f0e599","url":"./post/9c60e209/index.html"},{"revision":"ffa3965c5571cea79ddaaf7bba89a16a","url":"./post/99c7fa1c/index.html"},{"revision":"8c581e8a475fa8381fa5a2ff48e02b16","url":"./post/8422c4dc/index.html"},{"revision":"3eef04b159f807c3281a925bf9e073de","url":"./post/8097b5e3/index.html"},{"revision":"28323709742b3b826937fd0f9623c227","url":"./post/7fc77154/index.html"},{"revision":"6d05f7a4f89872d807dd667cb93e13bd","url":"./post/7ca5704e/index.html"},{"revision":"dfca6b177a36d32c20cd70e7498fcc25","url":"./post/73fccf9a/index.html"},{"revision":"aa939fa637119fa42d2653b622b2f311","url":"./post/739f0a30/index.html"},{"revision":"518022ba228da09887effd68cd53e495","url":"./post/4a17b156/index.html"},{"revision":"4052da90e51d5dd6556f699ced18f14d","url":"./post/48bc1675/index.html"},{"revision":"99ad55349cbc860b85d9250dec615d38","url":"./post/3df9585/index.html"},{"revision":"d27ac396b5af88f933e23c990441ed9e","url":"./post/3082b2c6/index.html"},{"revision":"db479613d65561c5bd2abd2a02fedd01","url":"./post/24dc856c/index.html"},{"revision":"ba4f980b0602e4271b9df180d3fa9c00","url":"./post/220b8380/index.html"},{"revision":"d64a45aea3c72b5b377a94d57e884ddf","url":"./post/193912eb/index.html"},{"revision":"f548eb046460859d564c094eaa86092b","url":"./page/3/index.html"},{"revision":"426ddf809640b15b4e0039b7271b122a","url":"./page/2/index.html"},{"revision":"2ece9a856f3f2feaed7139a013a1e3f4","url":"./message/index.html"},{"revision":"6fac1aef90c4d519bc8caf378d8e4771","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"857fa8975669670cf169405781378c3e","url":"./cookies-instructions/index.html"},{"revision":"5a962acc13743c79a06d0502e84cd25d","url":"./categories/index.html"},{"revision":"041ae32bd23b5f4d3fd48f9c9ed5ac64","url":"./categories/网页源码/index.html"},{"revision":"a9e014e04e7c2652e8e3c7b42fba5d6e","url":"./categories/科普/index.html"},{"revision":"574c1249811a5dc9669e4244d0ce2c46","url":"./categories/建站/index.html"},{"revision":"e2ef78c62ef83728d7815366d8bc57db","url":"./categories/休闲/index.html"},{"revision":"d0f9e81433989b1401b4cfe8ce281384","url":"./categories/Vercel/index.html"},{"revision":"010e49bd9880709a0af2dc3c66a59958","url":"./categories/Gridea/index.html"},{"revision":"6fe0624c1617fe88562a483496d9aee2","url":"./categories/AI/index.html"},{"revision":"d366c1c5479eabc0b67efc1265e86bde","url":"./archives/index.html"},{"revision":"37f8c6376d9ffc4ec2bec0d261a64f52","url":"./archives/page/3/index.html"},{"revision":"e637b337c165abac6b0a72d1ba0bc2e1","url":"./archives/page/2/index.html"},{"revision":"a2bb98e55c1425a68d44e44901e04222","url":"./archives/2025/index.html"},{"revision":"e14aaab428bfb3b5b74605a363928d6d","url":"./archives/2025/10/index.html"},{"revision":"4e7225d57355df5a0ab1c9808dd6cef3","url":"./archives/2025/09/index.html"},{"revision":"b16d97ec405ccd26af7553d8f39249fd","url":"./archives/2024/index.html"},{"revision":"c461c66f31d72932d428ad5a6ff013f5","url":"./archives/2024/09/index.html"},{"revision":"6833ce461432ddb0341aaa26f32af4a0","url":"./archives/2024/06/index.html"},{"revision":"fa751003242f89dd36838fedf14304ed","url":"./archives/2024/05/index.html"},{"revision":"401f6f9a382b1e94287184197500f0bf","url":"./archives/2024/04/index.html"},{"revision":"97409e4e5f705ef9894d747a168e748a","url":"./archives/2023/index.html"},{"revision":"3c1fb2589d6746b860ecf07fbdc63a8f","url":"./archives/2023/04/index.html"},{"revision":"052a985327e3a194d239c144722f1144","url":"./archives/2023/02/index.html"},{"revision":"04083ac5c99b14002dd9523009380ac3","url":"./archives/2022/index.html"},{"revision":"31809ccc339d9c0467fc767ccebc67f0","url":"./archives/2022/page/2/index.html"},{"revision":"ef7ec4880a8374d0c14810d8b0e13fd8","url":"./archives/2022/12/index.html"},{"revision":"da5c6a1a6057b48096192d7329119126","url":"./archives/2022/11/index.html"},{"revision":"c01666b0093f3c51a600e682f719173b","url":"./archives/2022/10/index.html"},{"revision":"8b4981d81e5497ee6bedaf280c66cc79","url":"./archives/2022/08/index.html"},{"revision":"78e618674ce633878c093efae257276f","url":"./archives/2022/07/index.html"},{"revision":"566a19af25e5c79e775e92e78ea4fde7","url":"./archives/2022/06/index.html"},{"revision":"60cfb82954196a944c49e841b0b9a61e","url":"./about/index.html"}]);
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