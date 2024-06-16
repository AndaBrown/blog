const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"e25b284213091b0e032f517649ee9259","url":"./404.html"},{"revision":"76399775d3aef8959dcdbf397523fb38","url":"./about/index.html"},{"revision":"aa5dcbf289341f76f12eb89ab32698b3","url":"./archives/2022/06/index.html"},{"revision":"0d870584063c8a25905826d4b61aca10","url":"./archives/2022/07/index.html"},{"revision":"a055ff3f9d5272fd35896a9b8cc15b49","url":"./archives/2022/08/index.html"},{"revision":"b297a5108fa4746d530a89c69ad3359b","url":"./archives/2022/10/index.html"},{"revision":"96b244940e56e8e07a1645da59866bcf","url":"./archives/2022/11/index.html"},{"revision":"2aaeeab3b66db833c4f1e034d514dc91","url":"./archives/2022/12/index.html"},{"revision":"fd683cf0cebf1ecb2309dddd84bfcf88","url":"./archives/2022/index.html"},{"revision":"c86083d2b7e7818da22027610fa86967","url":"./archives/2022/page/2/index.html"},{"revision":"2f5941259e811e2e5514c39b62941936","url":"./archives/2023/02/index.html"},{"revision":"2e0464e395a6fa19bb7be81a2dc5de31","url":"./archives/2023/04/index.html"},{"revision":"c42655e3f5be64b2a3188728105e10ab","url":"./archives/2023/index.html"},{"revision":"2f736c584b77bfd9f6189b91e53cbb64","url":"./archives/2024/04/index.html"},{"revision":"83619f147aefe621f021e129de2cce12","url":"./archives/2024/05/index.html"},{"revision":"c76930a0d2c63e68f65699402f0b6931","url":"./archives/2024/06/index.html"},{"revision":"43162ec6f394274d23642553e14c8567","url":"./archives/2024/index.html"},{"revision":"4bd2201774b803bcfd79301e3e90eddb","url":"./archives/index.html"},{"revision":"5be35d834f890d65f75a35c0d0d49ebe","url":"./archives/page/2/index.html"},{"revision":"88a1d5e60181bd51ab15d99bf2ac6ef8","url":"./categories/AI/index.html"},{"revision":"9872b17b6d46d6134a02478ddc6bfe54","url":"./categories/Gridea/index.html"},{"revision":"fcb2ee87e11561797bb62004439972f8","url":"./categories/index.html"},{"revision":"1409eb1c2171bdeb9333f8f5f5bf4a92","url":"./categories/Vercel/index.html"},{"revision":"08de0d8c78a8297a5376fe65d301e20b","url":"./categories/休闲/index.html"},{"revision":"2de5cf8c2358b99cbc7228d45981af34","url":"./categories/建站/index.html"},{"revision":"65f375e19139dd989d8d48858dada642","url":"./categories/科普/index.html"},{"revision":"d1aa0f6f4a63f07694d33ba3c11b1641","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"71b40a2c90a37cbc7dd5490697b6488c","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"71aeea57389ac887cd76dbff14dcdf62","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"85f6ff50d54d7da74bb67389b4e39c13","url":"./link/index.html"},{"revision":"dccbec34c9f9a061d724fc022c6e9dba","url":"./message/index.html"},{"revision":"72fa2f3f8bb412ef9c75d70a2cf05193","url":"./page/2/index.html"},{"revision":"bc04ce10d9389398cafc9876165a22c1","url":"./post/ /index.html"},{"revision":"34972147b9425c3f6b845e5dce1a410c","url":"./post/193912eb/index.html"},{"revision":"597a91463a7b528de83459e370e3dcfd","url":"./post/220b8380/index.html"},{"revision":"4ca0f74b96a48553c30b5a1a11707616","url":"./post/24dc856c/index.html"},{"revision":"fe96f9409b10c41e7e2b4ecea1f02ab5","url":"./post/3082b2c6/index.html"},{"revision":"66543fae342c39f0d750be04b82e7168","url":"./post/3df9585/index.html"},{"revision":"b0a0a1e313cfe0a8d2b3a4ec6abac076","url":"./post/4a17b156/index.html"},{"revision":"e64cdf05c86f38a9480cbbbc73de8ae8","url":"./post/739f0a30/index.html"},{"revision":"bff1c9548af7046ffb9643c6e244759e","url":"./post/73fccf9a/index.html"},{"revision":"b5722aaa1714a1b58031d5e9b9b7e859","url":"./post/7ca5704e/index.html"},{"revision":"3e2dbf6ef10b1c0d7174c5da629aa011","url":"./post/7fc77154/index.html"},{"revision":"ac8d63d1722d55ab45090e64c6c1c841","url":"./post/8422c4dc/index.html"},{"revision":"24df3bb197f96daf1cecb139ce658152","url":"./post/99c7fa1c/index.html"},{"revision":"ebc702316f6c297b5a4187e082435285","url":"./post/9c60e209/index.html"},{"revision":"90e3d6e9a0572bd2e6583d8f8519836e","url":"./post/ae58d2f1/index.html"},{"revision":"ed58625c86b63e04da59767c9aa719e0","url":"./post/d4550abf/index.html"},{"revision":"cea8049f6c1de65e004fb2e23aeadb10","url":"./post/d50c4d0e/index.html"},{"revision":"8f016c1f21020aeb3d9d46674d9eed4d","url":"./post/db569493/index.html"},{"revision":"d8845141769aaae7fe555ee383d66d4b","url":"./post/dd83a796/index.html"},{"revision":"409cae9f6f37b18b6ca02041787d52ee","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"bccef888a6fb77838d99a39d5073b7a1","url":"./tags/AI/index.html"},{"revision":"2825eef35aef60875ea86024a4bf8889","url":"./tags/Aplayer/index.html"},{"revision":"5004d9d9c0bd472ad624517202300223","url":"./tags/Bing/index.html"},{"revision":"0157ebdc655bb2418faa78d2ce91f41a","url":"./tags/BUG/index.html"},{"revision":"dbc06fbcc5fdbceb8f3de8bff8b56779","url":"./tags/CDN/index.html"},{"revision":"88accea8b8fd4a17499358135ef0dcf1","url":"./tags/CMS/index.html"},{"revision":"c4d694ce4ae5a4b4ddf06de434e3efd5","url":"./tags/css/index.html"},{"revision":"30ef4f87ae272d91773282b9abe909dc","url":"./tags/DNS/index.html"},{"revision":"817ee7a05a006a944555d133565d9727","url":"./tags/Flash/index.html"},{"revision":"b7e356ae88c656761224a20c06c30681","url":"./tags/GFW/index.html"},{"revision":"f0cd3fa39355a55223eb251537285b57","url":"./tags/Gridea/index.html"},{"revision":"f54a9be46da54e7be51cd1a1094c218d","url":"./tags/HTML/index.html"},{"revision":"91a2ceeeb727df7ee6e8fb98805edf7e","url":"./tags/index.html"},{"revision":"939763acae9485334944b7b3a750b409","url":"./tags/JavaScript/index.html"},{"revision":"9f1eabe9caab1e07eacb3ca0e0a120d4","url":"./tags/JQuery/index.html"},{"revision":"017917420721a39de57364f6e61029e1","url":"./tags/MetingJS/index.html"},{"revision":"409dc767b03717525378e2721d1db329","url":"./tags/NexT/index.html"},{"revision":"f119d3bbfc0320865940a97277cd643c","url":"./tags/RSA/index.html"},{"revision":"b3a87cd4fc2b2c359b9deab22e140b16","url":"./tags/Vercel/index.html"},{"revision":"62d77a40262f42f45aa8b0c2eb713c1a","url":"./tags/分享/index.html"},{"revision":"014b37e874933d3f5d909504957a994c","url":"./tags/加密/index.html"},{"revision":"f429762a33ad6d5407f4820d90871ac1","url":"./tags/加载动画/index.html"},{"revision":"0ad43555185f13ace9f073feed932478","url":"./tags/右键菜单/index.html"},{"revision":"bc38cabd33e59984dceec7fb4304a950","url":"./tags/域名/index.html"},{"revision":"67eda5a5c03f00c0734c9ab89f65ec10","url":"./tags/密码学/index.html"},{"revision":"99e2fc3840e35dfe4903d67b7a35204c","url":"./tags/建站/index.html"},{"revision":"073e2d8b382b950ea03d09db43eba90d","url":"./tags/插件/index.html"},{"revision":"48d399a64a8fc0accc0b348ffe016982","url":"./tags/服务器/index.html"},{"revision":"1e43402ca508d31cefbec55768c824fb","url":"./tags/网页源码/index.html"},{"revision":"254c273f3a3464f50aafdcf2536b4d78","url":"./tags/美化/index.html"},{"revision":"51f24895770d138fe587f0e6bc527928","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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