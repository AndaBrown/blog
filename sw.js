const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"b2b368688c34674c390b70a2f205e194","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"bd93d5144df335a7067779484f203a16","url":"./404.html"},{"revision":"ee31acab5c97fa6a95bc539cc3991328","url":"./talks/index.html"},{"revision":"53cc79e9f7cb54ba96769dbed27e504f","url":"./tags/index.html"},{"revision":"377ba20b8fb3a4094cec4ec1aba80c93","url":"./tags/美化/index.html"},{"revision":"f1b89443336ba0e15f976481c409e8aa","url":"./tags/网页源码/index.html"},{"revision":"6305fd600d63f062635b68a18002e0a9","url":"./tags/服务器/index.html"},{"revision":"b265a4a5fa0a55c36ae0200afeb375eb","url":"./tags/插件/index.html"},{"revision":"908eb492289718fe56a8a5ca4fcb5eaf","url":"./tags/建站/index.html"},{"revision":"0d013a8867d83e9d3ae16e65707e4a78","url":"./tags/密码学/index.html"},{"revision":"4f8ab96d3f01e121e318668d5c7b2927","url":"./tags/域名/index.html"},{"revision":"140078ea24b0d15470eea5872e6890c3","url":"./tags/右键菜单/index.html"},{"revision":"b338e2d09a5a47f12b7617533315a31a","url":"./tags/区块链/index.html"},{"revision":"53d8a3ecd622cd1c6a57008d9d7aadee","url":"./tags/加载动画/index.html"},{"revision":"4fa05e90a980946d011d425ac2a9bb0c","url":"./tags/加密货币/index.html"},{"revision":"663c12937bfcc6b751eb807b01ec57a6","url":"./tags/加密/index.html"},{"revision":"e601ac7ea3d8206e44f3a73d173dc281","url":"./tags/分享/index.html"},{"revision":"7a69e1b6a4be0a4a48feb71c8782a1d3","url":"./tags/css/index.html"},{"revision":"0d767f0a92afc9c4f68ff104af206f5b","url":"./tags/Vercel/index.html"},{"revision":"d082e2a5c5d7309ed8e73578091db79c","url":"./tags/RSA/index.html"},{"revision":"067cf37101173c07f6922c4186ef0d66","url":"./tags/P2P/index.html"},{"revision":"6ad26ecd310921e5cac8b352a4cf2f09","url":"./tags/NexT/index.html"},{"revision":"efe010bf84eeb5c89bdcd79f56d93132","url":"./tags/MetingJS/index.html"},{"revision":"25f59151511fe2fd2c7270f35e268eb2","url":"./tags/JavaScript/index.html"},{"revision":"3813b1205dfb7ee6f90d392450cecef0","url":"./tags/JQuery/index.html"},{"revision":"87bcab4506a25b920a921dc2815b6a6d","url":"./tags/HTML/index.html"},{"revision":"55374bea826ed07115900aa2dec152d6","url":"./tags/Gridea/index.html"},{"revision":"ca4a93e03b5750f4e75aa77a29be2ca7","url":"./tags/GFW/index.html"},{"revision":"41531bb42e7bf65f834f25866c83de04","url":"./tags/Flash/index.html"},{"revision":"14bf6391dc313fa2f55ded167bdcdc2f","url":"./tags/DNS/index.html"},{"revision":"042958d44b72afee4b1bf6945d6d4b6b","url":"./tags/CMS/index.html"},{"revision":"dee77d30daa461205511fe45cc706422","url":"./tags/CDN/index.html"},{"revision":"1817c982c24be5eb4246754d08e2f9ba","url":"./tags/Bing/index.html"},{"revision":"3cbc87b7cb57844e70c09cbf5b9f27d1","url":"./tags/BUG/index.html"},{"revision":"cf63ef52d6a483e73fd60d4a66f41a01","url":"./tags/Aplayer/index.html"},{"revision":"2419b3401e47256be9c8fa1e60d2372e","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"5c0c876314bd2ee88c91a9ffcc1b26cb","url":"./post/fa97bd48/index.html"},{"revision":"6fc54b79d818186c8b482b5f0c8ab031","url":"./post/f82f332a/index.html"},{"revision":"8071d9bb0d0f57e0a823fbe8deff29f5","url":"./post/dd83a796/index.html"},{"revision":"4f9093e5e27fb96a23358a5fce6a9074","url":"./post/db569493/index.html"},{"revision":"2277a21df551251c0fd7300a5ff81b38","url":"./post/d50c4d0e/index.html"},{"revision":"86b0de75406ea2b1d5846a3a88b69c06","url":"./post/d4550abf/index.html"},{"revision":"2fae6cd816092e0dd68f609e152427a2","url":"./post/b9a3407d/index.html"},{"revision":"3e325599cd0b50f882c87e360b492d1b","url":"./post/ae58d2f1/index.html"},{"revision":"e031edfc4a4c44b21fc787eea1f0e599","url":"./post/9c60e209/index.html"},{"revision":"ffa3965c5571cea79ddaaf7bba89a16a","url":"./post/99c7fa1c/index.html"},{"revision":"8c581e8a475fa8381fa5a2ff48e02b16","url":"./post/8422c4dc/index.html"},{"revision":"3eef04b159f807c3281a925bf9e073de","url":"./post/8097b5e3/index.html"},{"revision":"28323709742b3b826937fd0f9623c227","url":"./post/7fc77154/index.html"},{"revision":"6d05f7a4f89872d807dd667cb93e13bd","url":"./post/7ca5704e/index.html"},{"revision":"dfca6b177a36d32c20cd70e7498fcc25","url":"./post/73fccf9a/index.html"},{"revision":"aa939fa637119fa42d2653b622b2f311","url":"./post/739f0a30/index.html"},{"revision":"518022ba228da09887effd68cd53e495","url":"./post/4a17b156/index.html"},{"revision":"17d489c13073b7b20520666365e51062","url":"./post/48bc1675/index.html"},{"revision":"99ad55349cbc860b85d9250dec615d38","url":"./post/3df9585/index.html"},{"revision":"d27ac396b5af88f933e23c990441ed9e","url":"./post/3082b2c6/index.html"},{"revision":"db479613d65561c5bd2abd2a02fedd01","url":"./post/24dc856c/index.html"},{"revision":"ba4f980b0602e4271b9df180d3fa9c00","url":"./post/220b8380/index.html"},{"revision":"d64a45aea3c72b5b377a94d57e884ddf","url":"./post/193912eb/index.html"},{"revision":"da0ac897ce75c5b546d0ce546dc761c9","url":"./page/3/index.html"},{"revision":"16cebcb9357695339396ab8e63e1190e","url":"./page/2/index.html"},{"revision":"8f9b527aff179af3c617cc226800774a","url":"./message/index.html"},{"revision":"92e230362ff9fb56c5b6512694796536","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"1697cda425830af0280b2e1169beb453","url":"./cookies-instructions/index.html"},{"revision":"22a96af8f1abd011dacfdcfe4f68d39d","url":"./categories/index.html"},{"revision":"8de53b1aeea9f4399501256dd4dfe377","url":"./categories/网页源码/index.html"},{"revision":"66f45d817b9f6c60d365f02ca2b4277d","url":"./categories/科普/index.html"},{"revision":"6783cfcc61ac7a58cf4eebf84c85e327","url":"./categories/建站/index.html"},{"revision":"af7bf282b01d13e932a83ea3a5746f7d","url":"./categories/休闲/index.html"},{"revision":"01003f2da6e4891fc6fd2aaa2474eb21","url":"./categories/Vercel/index.html"},{"revision":"cf0e2b027fc6e9288669322ca4950053","url":"./categories/Gridea/index.html"},{"revision":"018d4fea9ad8dc17b97513238f201dae","url":"./categories/AI/index.html"},{"revision":"8ac742f852091d523660ab15e0113b94","url":"./archives/index.html"},{"revision":"f353ddd911875cb3a6dd21c7e4bee34f","url":"./archives/page/3/index.html"},{"revision":"69fd0a452d75fd121696b7b56f51f463","url":"./archives/page/2/index.html"},{"revision":"2176db9d399b6f6bfd59c90492a2367e","url":"./archives/2025/index.html"},{"revision":"a4069dfd560cd954aae0094f10edeee4","url":"./archives/2025/10/index.html"},{"revision":"2a5539a7700aba9687bab70ae387c21c","url":"./archives/2025/09/index.html"},{"revision":"ae4ef33544b8b170d3908c0d2c43e177","url":"./archives/2024/index.html"},{"revision":"857d0a42cf0d586c4507f0988a235ee5","url":"./archives/2024/09/index.html"},{"revision":"3ce2800215ae8b828722a877bb4e4d9e","url":"./archives/2024/06/index.html"},{"revision":"e80905d65b36df1a01c4bf7fc0134342","url":"./archives/2024/05/index.html"},{"revision":"e3ee78a9b8af8ea322e8a5830711a180","url":"./archives/2024/04/index.html"},{"revision":"30884bd4267bf3c59137d48698e0fda2","url":"./archives/2023/index.html"},{"revision":"c91aaa67d4a6ce3ef3a64f59fda10eee","url":"./archives/2023/04/index.html"},{"revision":"a8e1b3516630a76529274764b019efdf","url":"./archives/2023/02/index.html"},{"revision":"007a89f9129052e4c8d63932c6cd0e3f","url":"./archives/2022/index.html"},{"revision":"80766ea85c8992c2020bad3349fa9a4e","url":"./archives/2022/page/2/index.html"},{"revision":"4db4eb853dae9ebdaf4b25a6c75ecfa6","url":"./archives/2022/12/index.html"},{"revision":"008c6bd55ba8d166e311b4064acd2369","url":"./archives/2022/11/index.html"},{"revision":"2b44e9efd5b67b63ad410396af034431","url":"./archives/2022/10/index.html"},{"revision":"63123999cf9131751c23cdbb87f1efaa","url":"./archives/2022/08/index.html"},{"revision":"d50b659c10decbd8413e3ab4ed4984f9","url":"./archives/2022/07/index.html"},{"revision":"b73fa8416fb3917650de4f96a28b2272","url":"./archives/2022/06/index.html"},{"revision":"bd3380f110fac4937b38c6306e6ff17a","url":"./about/index.html"}]);
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