const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"4bd2e9b40fa4cffd1d142f9b14f5bb0d","url":"./404.html"},{"revision":"f283cbacdb8a17606e69072342e625a8","url":"./about/index.html"},{"revision":"ceb9c1987f6b29dc765e958664cc57bd","url":"./archives/2022/06/index.html"},{"revision":"eb8a51644b5bd78bf2e591cb84123741","url":"./archives/2022/07/index.html"},{"revision":"d4b93090dc7f0e177e04dba53c20bfed","url":"./archives/2022/08/index.html"},{"revision":"d6c69b5471a0860bd35b6f8e82a9b9e7","url":"./archives/2022/10/index.html"},{"revision":"bc6b1f701ccbd9b9f4581dbdad8843e6","url":"./archives/2022/11/index.html"},{"revision":"c33456af0b121bb278d25bf30c39ea13","url":"./archives/2022/12/index.html"},{"revision":"93eb4c48021887d6df63083ef8322d0b","url":"./archives/2022/index.html"},{"revision":"eaf4b01ef2d3cd99003b0b44b5f216f8","url":"./archives/2022/page/2/index.html"},{"revision":"9fb6ce11e22715a59d88a3b1bc87c7fc","url":"./archives/2023/02/index.html"},{"revision":"f5828d5537de67a2e598212976fb3e01","url":"./archives/2023/04/index.html"},{"revision":"56427062d14e481a42579e0a7cfeeeea","url":"./archives/2023/index.html"},{"revision":"852f3085df4be2d0e7540a2fb40daa5d","url":"./archives/2024/04/index.html"},{"revision":"7b0b4565b1d7a753ac64043e1e33688b","url":"./archives/2024/05/index.html"},{"revision":"0bc4c8dee6946b47836b601a2c7f20d4","url":"./archives/2024/index.html"},{"revision":"085144c1744ea2a34673df0118206e39","url":"./archives/index.html"},{"revision":"7c2e38f78476333c34204bbeda5d3493","url":"./archives/page/2/index.html"},{"revision":"6219eac70cf743f15ec38ba78680974b","url":"./categories/AI/index.html"},{"revision":"6e35e7d982601f78b5ba724b86cc45e8","url":"./categories/Gridea/index.html"},{"revision":"cc07cf7174f6f5baecafa8c2fab8314f","url":"./categories/index.html"},{"revision":"c1c9f154b9c3836ca81af298e8c3b774","url":"./categories/Vercel/index.html"},{"revision":"bfce0d17761d21fcfdf72ed5d49c827c","url":"./categories/休闲/index.html"},{"revision":"63d317fe9495831685510085cd93f192","url":"./categories/建站/index.html"},{"revision":"884086b6d6ecf560b15a131fede58b39","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"2e71cbad3701645814e14661074b4e4b","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"b649a6c1f07b8bb0f3d8e269df18d083","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"a6cc0dcb93f59f0d6e1dc426c2bc7a0b","url":"./link/index.html"},{"revision":"7c789bff32af07676378490ed4af568e","url":"./message/index.html"},{"revision":"01d2d6b10aff8020b34ca5a1cad9dbee","url":"./page/2/index.html"},{"revision":"eec4e7f4c6815cd4873e060d9c83d802","url":"./post/193912eb/index.html"},{"revision":"0c7ee00f3d0005498412e5dfb378b682","url":"./post/220b8380/index.html"},{"revision":"12c1e69ebea1378198716eb1b1995b5d","url":"./post/24dc856c/index.html"},{"revision":"5c357695c25e66e7ec05e8db8d33fcb5","url":"./post/3082b2c6/index.html"},{"revision":"b9318521d2c975b2426d90a51a26e1af","url":"./post/3df9585/index.html"},{"revision":"4be4e8f461af3b977ad68bcf5f45ef55","url":"./post/4a17b156/index.html"},{"revision":"28b5200f8379dcea4b4da71f0ab3e15d","url":"./post/739f0a30/index.html"},{"revision":"f476d9e287015e99d43a60a75f0c074e","url":"./post/73fccf9a/index.html"},{"revision":"f4651f60586b5e77a09c83a11e39d890","url":"./post/7ca5704e/index.html"},{"revision":"08f02c00397ce6f1f18afc0eb2b8f0c1","url":"./post/7fc77154/index.html"},{"revision":"c7099eaf41b137b9c7afa8904e2d3927","url":"./post/8422c4dc/index.html"},{"revision":"799f8221b1a53ce998b62503ea3af814","url":"./post/99c7fa1c/index.html"},{"revision":"746404e951712d464e58b5ee4fb3bead","url":"./post/9c60e209/index.html"},{"revision":"c7eb6e4a87ef7123f0e5f5b0b911193d","url":"./post/ae58d2f1/index.html"},{"revision":"23ee95264546c987dbd76a5846d8e947","url":"./post/d4550abf/index.html"},{"revision":"e2afcfa352fb6a9999c9ee3135c01236","url":"./post/d50c4d0e/index.html"},{"revision":"d8ee6ebd38e97a0c982c535ecc4b991e","url":"./post/db569493/index.html"},{"revision":"7d300630362ca67361717965b5dc9ee0","url":"./post/dd83a796/index.html"},{"revision":"bc4302d46eb575d0207c39ec423c673e","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"57a9949189b42e26e15108cda923c59c","url":"./tags/AI/index.html"},{"revision":"3b813c7eb69e4f93dfd7a93399053545","url":"./tags/Aplayer/index.html"},{"revision":"49361427f60824bd39545ca67a96f7fb","url":"./tags/Bing/index.html"},{"revision":"89ba7f645e2f1e6697661adffef9ba6b","url":"./tags/BUG/index.html"},{"revision":"047d02375a99ff9012f0a89df4d5fec2","url":"./tags/CDN/index.html"},{"revision":"b58fda995e825afe69ea3f22fba8ada9","url":"./tags/CMS/index.html"},{"revision":"63e3a319268bd6f72a47619117978ea6","url":"./tags/css/index.html"},{"revision":"8d7d7d5647e6fac5d458453a97cdd65e","url":"./tags/DNS/index.html"},{"revision":"1e4e0caca5dfc25d62e524c4c92ae595","url":"./tags/Flash/index.html"},{"revision":"8dfc1ef9060bc770db3c1049ff26ba9a","url":"./tags/GFW/index.html"},{"revision":"50996c476e6972c59a6e36096cc78b5a","url":"./tags/Gridea/index.html"},{"revision":"222e041d4357f4b054262a92f7aad62c","url":"./tags/HTML/index.html"},{"revision":"9a14d212d57bf4def69d500845638eaa","url":"./tags/index.html"},{"revision":"ad1df7c6e4e5014b3de92097a34ecac9","url":"./tags/JavaScript/index.html"},{"revision":"9e9fd880106a78924d0499459886b786","url":"./tags/JQuery/index.html"},{"revision":"15e89e8268fccfac5800763a9015aeb8","url":"./tags/MetingJS/index.html"},{"revision":"ab0574e099c01bc1df17167ae434f682","url":"./tags/NexT/index.html"},{"revision":"5fbed3eff6fc610cbef6d70b1baab02b","url":"./tags/Vercel/index.html"},{"revision":"ff8f853d58fb565f17eb327d4ec15ab6","url":"./tags/分享/index.html"},{"revision":"4ce3e08922516d5ae4b25ff846fa07a1","url":"./tags/加载动画/index.html"},{"revision":"b7526eafe075925a35820619b9c4f56b","url":"./tags/右键菜单/index.html"},{"revision":"e7ebb009341e565fa6d2b11cbbe1c650","url":"./tags/域名/index.html"},{"revision":"10a7f8c07d89be64f3feb31fcecc6575","url":"./tags/建站/index.html"},{"revision":"a40b0696a288f9efc257a96b26d05029","url":"./tags/插件/index.html"},{"revision":"29bfa74a83baf75d140ac651ce4ecbe9","url":"./tags/服务器/index.html"},{"revision":"c5a5ece99495b5de91b57eaaaecec458","url":"./tags/网页源码/index.html"},{"revision":"b0954b88d0831bee534dd2cff4d41635","url":"./tags/美化/index.html"},{"revision":"315364b68355b203cadae6508c543380","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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