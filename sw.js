const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"0eebcdd0da624335d0b0066123b943e5","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"8497308aef6dc66a6a384375b494d1a0","url":"./404.html"},{"revision":"e6a2dd4eb8133ab65f5c5a2c2a14c85b","url":"./talks/index.html"},{"revision":"2bc97884afd4580ef53a9b59ae0e9d38","url":"./tags/index.html"},{"revision":"952be20f7db6a21a3b9dad463a6d19b8","url":"./tags/美化/index.html"},{"revision":"ca004fc83c21942df3401e4289a7851f","url":"./tags/网页源码/index.html"},{"revision":"653c2dcb836666b999999be7b88fb030","url":"./tags/服务器/index.html"},{"revision":"dbdfb085a31836f64e95d7f3b798c369","url":"./tags/插件/index.html"},{"revision":"9351f793850027084d69784f0bd0fae0","url":"./tags/建站/index.html"},{"revision":"087cb114b3d05fb1104539bf2ae28ef4","url":"./tags/密码学/index.html"},{"revision":"06c7af247538e64a936a728c032b4634","url":"./tags/域名/index.html"},{"revision":"3ffaccafa6b90238d32dd3f5b260e4a4","url":"./tags/右键菜单/index.html"},{"revision":"f2797fc11e7cd91889a3a701884e8309","url":"./tags/区块链/index.html"},{"revision":"9988ee011f61867675eac752f92cdd43","url":"./tags/加载动画/index.html"},{"revision":"f8048244c7c87131793e1c373cce4167","url":"./tags/加密货币/index.html"},{"revision":"3d8fa860b151c649f0761ae3e0067dc8","url":"./tags/加密/index.html"},{"revision":"1baad8a9a8f22aede5fbbaaa508e7284","url":"./tags/分享/index.html"},{"revision":"10761a0ce2faf5aceca6da5e48e6f228","url":"./tags/css/index.html"},{"revision":"1cffe61cc48c6660e4d77d8eb081ed45","url":"./tags/Vercel/index.html"},{"revision":"524f17bd5ce2e45b5e3dc2c87c4fc1e4","url":"./tags/RSA/index.html"},{"revision":"07de396f38e04efe1e4ad3bc792e89f5","url":"./tags/P2P/index.html"},{"revision":"e8fb9577cb307067cf1f26bb705a1958","url":"./tags/NexT/index.html"},{"revision":"1c3eea177b894024d97c4b53a002b01a","url":"./tags/MetingJS/index.html"},{"revision":"359d37c2fa7fa57095de61cf7ba57ddb","url":"./tags/JavaScript/index.html"},{"revision":"cbf72f624939ce3ca3cb59bceae6437d","url":"./tags/JQuery/index.html"},{"revision":"bb54e1bee8ab6e717d5920e70553ee49","url":"./tags/HTML/index.html"},{"revision":"ab5313c78e0892c1579ba9fc2dc57bbe","url":"./tags/Gridea/index.html"},{"revision":"f67c4dc2881644d8e55b60a5aba33227","url":"./tags/GFW/index.html"},{"revision":"85914e2a8f90dccdf8ea663ecadd207a","url":"./tags/Flash/index.html"},{"revision":"9bc2da504c87155d23a15487e0d5da98","url":"./tags/DNS/index.html"},{"revision":"b13ab92888ac26fd9bd81f42e3340ad2","url":"./tags/CMS/index.html"},{"revision":"983040643ea13c5c2cf6f344d267ba09","url":"./tags/CDN/index.html"},{"revision":"a8cdd4ed0b532de1ee11ef8546174505","url":"./tags/Bing/index.html"},{"revision":"45d2b96154d267ae8f4db5bd8cb7e255","url":"./tags/BUG/index.html"},{"revision":"774582b66c86c2282a697d00af27149f","url":"./tags/Aplayer/index.html"},{"revision":"5f9a716bc399f89b5549078d8d7c2161","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"0e6a2c1908eac0899424f064d51fa03b","url":"./post/fa97bd48/index.html"},{"revision":"ff65a81124e8a5a2dfa79fc93b0fdeac","url":"./post/f82f332a/index.html"},{"revision":"a0fede8c90a00b38737fdda3c50abcf2","url":"./post/dd83a796/index.html"},{"revision":"b72d9825757928d77c66a7ff94c7689c","url":"./post/db569493/index.html"},{"revision":"5f90f5a44ac49afd25a5b4417ab97fb2","url":"./post/d50c4d0e/index.html"},{"revision":"dd4d5020bc5afbeac56a9f3da69aabc6","url":"./post/d4550abf/index.html"},{"revision":"725b08064867fa40f15e09439b444f8c","url":"./post/b9a3407d/index.html"},{"revision":"d6308393105c79d2b1901001f5aa910f","url":"./post/ae58d2f1/index.html"},{"revision":"01f2063cc113d89e1d69120cefb8fda6","url":"./post/9c60e209/index.html"},{"revision":"4f3c770be0dc9fc27fb4d45a912fca4e","url":"./post/99c7fa1c/index.html"},{"revision":"abe9b83d3de894f6ebc21bed610b4de6","url":"./post/8422c4dc/index.html"},{"revision":"5bab0d1b3be3ddd1a53b35c00ef5df6c","url":"./post/8097b5e3/index.html"},{"revision":"899533b07c713bfa681814c168845553","url":"./post/7fc77154/index.html"},{"revision":"e1cac76b1e4672eaaa5ea5784f47213a","url":"./post/7ca5704e/index.html"},{"revision":"9b0a5f221260ede14955e2e7dec7db48","url":"./post/73fccf9a/index.html"},{"revision":"72f021ee5a28ced5253e914f8ec17ebc","url":"./post/739f0a30/index.html"},{"revision":"c3d45bc69b03b45139a34d8b9ddecea5","url":"./post/4a17b156/index.html"},{"revision":"e1c55ca45264b2e327219f3d02d36257","url":"./post/48bc1675/index.html"},{"revision":"5789a6db734839d9b86b44296986a803","url":"./post/454446b9/index.html"},{"revision":"31092d9a23fb4acaea3a0ecd785701db","url":"./post/3df9585/index.html"},{"revision":"c8ca675914f489e782d79a499596c732","url":"./post/3082b2c6/index.html"},{"revision":"d5d811cf383fd5d73963a5bbd13e930d","url":"./post/24dc856c/index.html"},{"revision":"63a6894d9763a1672e502d4903b2672d","url":"./post/220b8380/index.html"},{"revision":"88b659942a94e94f08f365c7b9df217c","url":"./post/193912eb/index.html"},{"revision":"22d1cb01695174e6d1a04361bb44be15","url":"./page/3/index.html"},{"revision":"ac9463192bdba20291f32ea73fcf84d9","url":"./page/2/index.html"},{"revision":"ccd05aa9c1fcd9cf59e34e699a34a1cc","url":"./message/index.html"},{"revision":"f72e31737e4d23fb8b73be598d19ec7f","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"aab7e4c827f6205402750971729f660c","url":"./cookies-instructions/index.html"},{"revision":"8e9107f7cf72efc28e9a8026844f264d","url":"./categories/index.html"},{"revision":"48b07ac4460c75cafa0975c7b664c764","url":"./categories/记录/index.html"},{"revision":"977956b7f05447de5bb96687a4b8beb0","url":"./categories/网页源码/index.html"},{"revision":"64b6e13b10aab19b80e6c2421762e2fe","url":"./categories/科普/index.html"},{"revision":"85c35a24272ca8b5459984b9e874dc10","url":"./categories/建站/index.html"},{"revision":"5ff2c25f73547dd3c42828cdf541826e","url":"./categories/休闲/index.html"},{"revision":"20e2c64ffcb5f4a198427e6b5fa41458","url":"./categories/Vercel/index.html"},{"revision":"28611c37e733e6cb2edcf03b11f76680","url":"./categories/Gridea/index.html"},{"revision":"7bdba1522c266d955cf0f72c299bf2c3","url":"./categories/AI/index.html"},{"revision":"884b83284b902369a51607a955c19316","url":"./archives/index.html"},{"revision":"4b3a4d60967e4762773169584ff03b6c","url":"./archives/page/3/index.html"},{"revision":"da3122ab9161fe44c6a82a6bf82b92c7","url":"./archives/page/2/index.html"},{"revision":"bb65e30303102d8c32f9aa7683c2010b","url":"./archives/2026/index.html"},{"revision":"8587ab205dcd59e51444fd2c6f4243ec","url":"./archives/2026/04/index.html"},{"revision":"d00bd9d70f6e05f0dd1fc37d0806995d","url":"./archives/2025/index.html"},{"revision":"def7b0266079b2e80965c7b4d4582737","url":"./archives/2025/10/index.html"},{"revision":"406f655fd525f464ae72fd2e891322c6","url":"./archives/2025/09/index.html"},{"revision":"1dbc7916973a9e276f5a1c2e867c3094","url":"./archives/2024/index.html"},{"revision":"befc578ea706c21b70e7ce5d8cf150ed","url":"./archives/2024/09/index.html"},{"revision":"ef3f47bf313682ef8bd0111ee77ea727","url":"./archives/2024/06/index.html"},{"revision":"255b396d32e34bd0e5a5db9ee3cfaf03","url":"./archives/2024/05/index.html"},{"revision":"b50932809e82ed3d27cb0afe3f7d91ff","url":"./archives/2024/04/index.html"},{"revision":"74fbba2196c02bc527facf5825973b42","url":"./archives/2023/index.html"},{"revision":"345f5be05a779e4fd4507af6d7afb339","url":"./archives/2023/04/index.html"},{"revision":"8206524008aa13e0dcb1785aa13489bc","url":"./archives/2023/02/index.html"},{"revision":"2bc34286c4797e8050af987de02f5378","url":"./archives/2022/index.html"},{"revision":"4539c719e1957bf3fc02b0134f8f9138","url":"./archives/2022/page/2/index.html"},{"revision":"10a800a25b30d3b20f80f72a6fec89bf","url":"./archives/2022/12/index.html"},{"revision":"58806db85ccbe2a2d48415932023f017","url":"./archives/2022/11/index.html"},{"revision":"c53090e09c09e12b05e8f960dc23d7a3","url":"./archives/2022/10/index.html"},{"revision":"65542a9152dad5e91f4e68c4bfc81279","url":"./archives/2022/08/index.html"},{"revision":"b94adffa8c14de39d367c5bb4f96aa4f","url":"./archives/2022/07/index.html"},{"revision":"ab5712dd0a0ce3012beaa128c799e5d1","url":"./archives/2022/06/index.html"},{"revision":"777e834af9911e8e7c8fdc7b71fc0cdd","url":"./about/index.html"}]);
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