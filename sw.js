const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"9a2faa84a8332b052acc50fee4498de1","url":"./404.html"},{"revision":"37e8ad4f8441729a6b73b59da1759154","url":"./about/index.html"},{"revision":"52359f0dd2890441b1b09fa5bfb8a094","url":"./archives/2022/06/index.html"},{"revision":"4108eafe68f0aba85084890c3586cb78","url":"./archives/2022/07/index.html"},{"revision":"8e743633f4d37007b10f4c63dafa27d6","url":"./archives/2022/08/index.html"},{"revision":"56fcbae23147b69c67ffa23f4d7be6bf","url":"./archives/2022/10/index.html"},{"revision":"709979eaf73cf431f5d81cae07177ac6","url":"./archives/2022/11/index.html"},{"revision":"68aab364bd3bd7f7fc6f2b516bb81b14","url":"./archives/2022/12/index.html"},{"revision":"e0f8de1353ec6bf8b4e7bfb2e418b39e","url":"./archives/2022/index.html"},{"revision":"44ceeb26b55156f7c9588ad4fe9ba42d","url":"./archives/2022/page/2/index.html"},{"revision":"2fc88970e5b4ea5bc0cea4b234761782","url":"./archives/2023/02/index.html"},{"revision":"a7941a0329ea8b569154b6de7db55b64","url":"./archives/2023/04/index.html"},{"revision":"aafc484b10a8ea5242a39ab2fdccbd74","url":"./archives/2023/index.html"},{"revision":"845a14e7a74159ffeacdb2b4b917d4e1","url":"./archives/2024/04/index.html"},{"revision":"7aecf12428c75bb1ebfbaa5166f20819","url":"./archives/2024/05/index.html"},{"revision":"d031b6a9a690d0fbc161efd1559a7f56","url":"./archives/2024/index.html"},{"revision":"9c0c1cefcab0a094938ba629ea7e981f","url":"./archives/index.html"},{"revision":"3413a20e75184790255843abb74b0533","url":"./archives/page/2/index.html"},{"revision":"ab7b53aa7130e2eabf7c78e35e75bd39","url":"./categories/AI/index.html"},{"revision":"5507a5c52f1634d1ed4ee08d9bf4e6bd","url":"./categories/Gridea/index.html"},{"revision":"b04ba5239378784d019e85ee6b04b7a5","url":"./categories/index.html"},{"revision":"10b1c9dfd1f7285a3d7f134a9fe400d8","url":"./categories/Vercel/index.html"},{"revision":"70d588d4619a53839c229107cfebe0b9","url":"./categories/休闲/index.html"},{"revision":"e6643839834809e9abcc30bcafc1bfaa","url":"./categories/建站/index.html"},{"revision":"3cceed153175aa378c6c350808ffc59d","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"35a6cae98bb6392e1977f542fb3b1222","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"3cb4d22033af60a5435dea27278cd16b","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"310d39f43cdc1b62ab3742dd8cb83099","url":"./link/index.html"},{"revision":"09662dc2b5e7d16f68a0c646d20e4e1a","url":"./message/index.html"},{"revision":"9c5d45b31addedb755ce4315dde13156","url":"./page/2/index.html"},{"revision":"9940c19b833a60ba80a7952fa6ef4845","url":"./post/193912eb/index.html"},{"revision":"0a43222ada5b23831be683dff5d16f70","url":"./post/220b8380/index.html"},{"revision":"f8f84139ca85db9053a0de503c919223","url":"./post/24dc856c/index.html"},{"revision":"1ece0f0f21061c5cb16a1b75cad17c33","url":"./post/3082b2c6/index.html"},{"revision":"0b4927b2fe9a32fc3cef68a3a9f0e85b","url":"./post/3df9585/index.html"},{"revision":"5d012f6470b57ee08eff465d643573db","url":"./post/4a17b156/index.html"},{"revision":"c7fcf7dd8fbed78f9ef44833cd708510","url":"./post/739f0a30/index.html"},{"revision":"94dbdc89fc27f2cb2ae1ad44c3c0237c","url":"./post/73fccf9a/index.html"},{"revision":"9c5999f3d6fab31e3de9cc25bed19863","url":"./post/7ca5704e/index.html"},{"revision":"f96e1d8e69bf853437b3de5767a3d44c","url":"./post/7fc77154/index.html"},{"revision":"27b7813ff3a2c0ae37f768674434f3a5","url":"./post/8422c4dc/index.html"},{"revision":"7a4b40582776be0f17af56599bb77eb3","url":"./post/99c7fa1c/index.html"},{"revision":"9a83f79c7c3a9652a863a5a462b2d291","url":"./post/9c60e209/index.html"},{"revision":"946f65603ed214665132d5127c974841","url":"./post/ae58d2f1/index.html"},{"revision":"23ee95264546c987dbd76a5846d8e947","url":"./post/d4550abf/index.html"},{"revision":"1ce16516f7b4cc66fff3e667001f1e1e","url":"./post/d50c4d0e/index.html"},{"revision":"99b551a3a0d2be77dfdff0f001f15e30","url":"./post/db569493/index.html"},{"revision":"b4e5d95fce0a7e1fb95ee1fff018b741","url":"./post/dd83a796/index.html"},{"revision":"fbcdd36c15bd854d4cf68ed87de5372e","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"2662ccfd70499cbe8d10fd1ad09039cd","url":"./tags/AI/index.html"},{"revision":"339afea908435d4906573fd116e030dd","url":"./tags/Aplayer/index.html"},{"revision":"51f411c141309b55e7f5e977b617282c","url":"./tags/Bing/index.html"},{"revision":"f2eaf1a2115fdd3cb85d74db20eb4a2c","url":"./tags/BUG/index.html"},{"revision":"e6228be75b5e959bf2e72df99fafc368","url":"./tags/CDN/index.html"},{"revision":"9f70d3427826e297c4509c413d3a5406","url":"./tags/CMS/index.html"},{"revision":"3e71e11d3e57151ff722c1ba12be474c","url":"./tags/css/index.html"},{"revision":"3d19b78dbbdf64b3c2977d4a93e611b0","url":"./tags/DNS/index.html"},{"revision":"a53c5efb92b92ac3c04f6d2a125a82fe","url":"./tags/Flash/index.html"},{"revision":"55dc0d1dc36c09dbad75a262ef6e9a8e","url":"./tags/GFW/index.html"},{"revision":"e3cf1bc493e3cb2c262d1f941182998d","url":"./tags/Gridea/index.html"},{"revision":"b25159a37d5ba6f80e5a0ee25485d435","url":"./tags/HTML/index.html"},{"revision":"23610625f40de02cb37f521534d06954","url":"./tags/index.html"},{"revision":"2d7e7f38e170c58afc6183a70d854638","url":"./tags/JavaScript/index.html"},{"revision":"f8c1eb98081b8616049a688783144b4a","url":"./tags/JQuery/index.html"},{"revision":"6192c59c39f5a62a45f11bb77e800796","url":"./tags/MetingJS/index.html"},{"revision":"4635275f884f4bf24ba44eab4da18de8","url":"./tags/NexT/index.html"},{"revision":"59b230e7f8740b7e9ec77140ce833c6c","url":"./tags/Vercel/index.html"},{"revision":"ffc2bcb76623f7177a8417810734458e","url":"./tags/分享/index.html"},{"revision":"04ec68042d661eab0e8a8e43199da787","url":"./tags/加载动画/index.html"},{"revision":"b76215dc94b56579fdd00264523c5c7d","url":"./tags/右键菜单/index.html"},{"revision":"e50fb50a6ea5d6974958b89838c2afd1","url":"./tags/域名/index.html"},{"revision":"d4edef7cefe80b42ffb7e72dcca4c26e","url":"./tags/建站/index.html"},{"revision":"a87ba85cb679042a21abbefa505176e0","url":"./tags/插件/index.html"},{"revision":"55677153ccf5d14181972e2cb8d8165e","url":"./tags/服务器/index.html"},{"revision":"fc0336624743089ff20bb51f7cd32c0f","url":"./tags/网页源码/index.html"},{"revision":"6f3b6b8ff399bc0d5f9bbb7c27a6c98e","url":"./tags/美化/index.html"},{"revision":"b460af670599a792e1f827e6b1815684","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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