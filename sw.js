const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"99736882c3e803c7d6da632fda064379","url":"./404.html"},{"revision":"a0911468224a0da0eb5068e9d989a54a","url":"./about/index.html"},{"revision":"dda0560551ff54d342ab3c8782c1f650","url":"./archives/2022/06/index.html"},{"revision":"988d75894420b47b742eef7daaddce20","url":"./archives/2022/07/index.html"},{"revision":"ec0510a383b818151a9d81a368e93298","url":"./archives/2022/08/index.html"},{"revision":"5c552a97714929e8800ed4a309cb858c","url":"./archives/2022/10/index.html"},{"revision":"ee74fb00b8977145aa3a8d44346ae435","url":"./archives/2022/11/index.html"},{"revision":"b79013c8ce6a43abccbe01d27aabd885","url":"./archives/2022/12/index.html"},{"revision":"820302304e852750a0e7a14c11e16a76","url":"./archives/2022/index.html"},{"revision":"0de27dbe60c97c54c0620f8f935122d5","url":"./archives/2022/page/2/index.html"},{"revision":"c7281c4d8c3d1ed540223b2696e32f6f","url":"./archives/2023/02/index.html"},{"revision":"82afb11660819824636f5cf519d39382","url":"./archives/2023/04/index.html"},{"revision":"1da9bae6dccea1949f162bc7edd098eb","url":"./archives/2023/index.html"},{"revision":"9f6dcbc8a6279f23786d8226d4f12647","url":"./archives/2024/04/index.html"},{"revision":"4372da5dc2cfd93407a8766cc3513801","url":"./archives/2024/05/index.html"},{"revision":"7a72236997b2d484c971af60ca752d11","url":"./archives/2024/06/index.html"},{"revision":"200626208481a9be26c31fa5ec3cabb8","url":"./archives/2024/index.html"},{"revision":"4ce8554dfdadeedc7aa2f53942351893","url":"./archives/index.html"},{"revision":"044c399df6c2a98355d867d6c5d1a7c8","url":"./archives/page/2/index.html"},{"revision":"113a4f6661ca3c3b3cdeeecf376d098f","url":"./categories/AI/index.html"},{"revision":"412d6483b5cf3c1c3a53fcb1672aea66","url":"./categories/Gridea/index.html"},{"revision":"1d215a50727621e48c0a8a58cad9b2f3","url":"./categories/index.html"},{"revision":"0ebc45258dc9fefa61bed1b9960bef1f","url":"./categories/Vercel/index.html"},{"revision":"3e293666db8e7788b71863dd922cd337","url":"./categories/休闲/index.html"},{"revision":"d20f55c6249f5fb0beada91cc2acfd1e","url":"./categories/建站/index.html"},{"revision":"26b5130bbf2758af261778599e3d8340","url":"./categories/科普/index.html"},{"revision":"f1bedddaa331f663b9378e85f21cdbc8","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"e72c0528efdbb2833255ae4f720144c0","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"4ef75e30693a6e80741d98205c5caf93","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"862f8267cc4064d3e734f05b3c52227d","url":"./link/index.html"},{"revision":"1922f5140b0c1ef0f16190633ddf591c","url":"./message/index.html"},{"revision":"b124aa1dff01c8789a5e79da40e78022","url":"./page/2/index.html"},{"revision":"047696a21e4978165052847d700db135","url":"./post/193912eb/index.html"},{"revision":"214b6af138e5a3da01efa132cab18380","url":"./post/220b8380/index.html"},{"revision":"a1f72075b1086ff6bb96dc98a876c8c6","url":"./post/24dc856c/index.html"},{"revision":"88445e5ff52f742c9282cc3645721a3b","url":"./post/3082b2c6/index.html"},{"revision":"1bde4f01764a1a9321c7e9647171cc7b","url":"./post/3df9585/index.html"},{"revision":"5dccd1a5729384c1d54eeab5a900d882","url":"./post/4a17b156/index.html"},{"revision":"61fcef422d0d7fd06182300b36fbad6b","url":"./post/59d9dfef/index.html"},{"revision":"85f8e108ee62a75a560de24220112cce","url":"./post/739f0a30/index.html"},{"revision":"666883e4423940c10d4815c010f2ac32","url":"./post/73fccf9a/index.html"},{"revision":"9ae7fba7d7e7227d97e20a546334e008","url":"./post/7ca5704e/index.html"},{"revision":"cc05aec64a5f34443d4a8508246d3152","url":"./post/7fc77154/index.html"},{"revision":"927fbf52aae672f79658a45dab614ab9","url":"./post/8422c4dc/index.html"},{"revision":"fe809b824e8214a3e7447690b6790a8f","url":"./post/99c7fa1c/index.html"},{"revision":"8e35cccaf6eaa06e8642059ae063332d","url":"./post/9c60e209/index.html"},{"revision":"9a48cbb5293d460d002ebd6c3124205f","url":"./post/ae58d2f1/index.html"},{"revision":"32df50022f3cee62da8bc00a8388264e","url":"./post/d4550abf/index.html"},{"revision":"aa425f5d95b295a7b575e725a8953bb7","url":"./post/d50c4d0e/index.html"},{"revision":"fbd34a2fe958467c7624e799fe15c8dc","url":"./post/db569493/index.html"},{"revision":"e13fada82ed54a29af0441fca9b1c147","url":"./post/dd83a796/index.html"},{"revision":"eef3ddd7f0a22a5de5cbd8b34830669f","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"1a24e7562457958145110d95779b5ad4","url":"./tags/AI/index.html"},{"revision":"969f0b9f099ee1ba96f8f4eda205b9ef","url":"./tags/Aplayer/index.html"},{"revision":"17776d1544d891c7982afeacd4bafd89","url":"./tags/Bing/index.html"},{"revision":"c196588ee0f37e467247a7d6156c47f3","url":"./tags/BUG/index.html"},{"revision":"635068206aadd1410f6ba86b41595ca4","url":"./tags/CDN/index.html"},{"revision":"5a428c14ee5315aa3448002d243ffddf","url":"./tags/CMS/index.html"},{"revision":"8b19689314056f08cbeab190762929b6","url":"./tags/css/index.html"},{"revision":"d4c8219f09880fce482d42dfe204b79b","url":"./tags/DNS/index.html"},{"revision":"6ff38845fde225e5a982d5e2f25a3c91","url":"./tags/Flash/index.html"},{"revision":"2bac4365e646fb847685fa4d47bc9b12","url":"./tags/GFW/index.html"},{"revision":"673fc0eda02cde20409dc33b058f0135","url":"./tags/Gridea/index.html"},{"revision":"d25223a08dcdbb54efac8918ca8fd843","url":"./tags/HTML/index.html"},{"revision":"17990aac2009f23fe39ebf6a5550278e","url":"./tags/index.html"},{"revision":"72bae526f5a71c683f3d8fed6ae69def","url":"./tags/JavaScript/index.html"},{"revision":"ff7d95bedd53ff7e4bde6201e9b61cfa","url":"./tags/JQuery/index.html"},{"revision":"7a46e1a8e15a2d90a359288614102bc0","url":"./tags/MetingJS/index.html"},{"revision":"d2999297c1c55118df1eee8a32ed3032","url":"./tags/NexT/index.html"},{"revision":"869f5e02500d093aef1e1bd85b2c94e0","url":"./tags/RSA/index.html"},{"revision":"19e7100e9c9376b807f888c2b877d522","url":"./tags/Vercel/index.html"},{"revision":"3512044801bbab0184e59fe2ed10e533","url":"./tags/分享/index.html"},{"revision":"4bda6a5f9560ba26907a4071cca18a37","url":"./tags/加密/index.html"},{"revision":"75e2ab7ad41904999642301f180fb08d","url":"./tags/加载动画/index.html"},{"revision":"72c3e4eaf6f3194f0c128d49273e0cea","url":"./tags/右键菜单/index.html"},{"revision":"670a05ddb6f3e55946e3c742fa5a1400","url":"./tags/域名/index.html"},{"revision":"74a6691de071710ab67e0ab43fd9a270","url":"./tags/密码学/index.html"},{"revision":"00e11da6d44f465f004faec036ad1cf3","url":"./tags/建站/index.html"},{"revision":"b75a3c3ff79dbc38d96e89bc32412769","url":"./tags/插件/index.html"},{"revision":"2221f7f326a5e42871691018fa509608","url":"./tags/服务器/index.html"},{"revision":"fe426555f40d5281cfa5802dfe110283","url":"./tags/网页源码/index.html"},{"revision":"8bee76138246c01b6b636f837e3b3d87","url":"./tags/美化/index.html"},{"revision":"194a5cf7c3c005c486eda7274d885499","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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