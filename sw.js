const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"a3418950105604170646495d695b756e","url":"./404.html"},{"revision":"f7d91c9d9d45a627e76729d1c6e5aed3","url":"./about/index.html"},{"revision":"8fb38b1a031d633e91c560a32165eac6","url":"./archives/2022/06/index.html"},{"revision":"7d0f7554637ed0f33ae551885d7a0ff4","url":"./archives/2022/07/index.html"},{"revision":"80d3399048343effce2c2113749d588e","url":"./archives/2022/08/index.html"},{"revision":"61a1bc732d694beb50326dffb80b5ea0","url":"./archives/2022/10/index.html"},{"revision":"bd49fe1df069fc66fadeb9687c278cf4","url":"./archives/2022/11/index.html"},{"revision":"ce0f9a0348c33c255786e73501e6bb9e","url":"./archives/2022/12/index.html"},{"revision":"22c60bbd808de95c4c98a8da21625177","url":"./archives/2022/index.html"},{"revision":"19b0012dc75ff7cadb64762e409d9924","url":"./archives/2022/page/2/index.html"},{"revision":"5f7cac281fb98f9748758c4a766f8f5b","url":"./archives/2023/02/index.html"},{"revision":"bfb7a63f6cd0cc15f4dfdeb752410988","url":"./archives/2023/04/index.html"},{"revision":"1994da3095ca3e725d71208e3deff83d","url":"./archives/2023/index.html"},{"revision":"311cbbfbd918dd20e2ec8d13649c8347","url":"./archives/2024/04/index.html"},{"revision":"d71796a05cc6149f4d778c84969d9d2e","url":"./archives/2024/05/index.html"},{"revision":"e4205efbeb3cb726c084a3b9005ea9f8","url":"./archives/2024/06/index.html"},{"revision":"c187fb0b682d825279b07cbc935e4cad","url":"./archives/2024/index.html"},{"revision":"4f59b47da59676189af7c4945a576d39","url":"./archives/index.html"},{"revision":"01d8f4f136f167bd5ccd6f6af748180e","url":"./archives/page/2/index.html"},{"revision":"d83b848bc7aad6c7e6d99eb0a45e4b4c","url":"./categories/AI/index.html"},{"revision":"93a76230c155ac2334112fb9c8b932b4","url":"./categories/Gridea/index.html"},{"revision":"3d6708d2a8b8c5266f7eeec5545d091f","url":"./categories/index.html"},{"revision":"2c7f301e8f7efd29b8acf3272615ee6e","url":"./categories/Vercel/index.html"},{"revision":"2f54b78d1f2a26226f3085f28196f758","url":"./categories/休闲/index.html"},{"revision":"9149813256bbb65fdaddb1921b77d1af","url":"./categories/建站/index.html"},{"revision":"acd79a1a950de61144b2c7d7204106dd","url":"./categories/科普/index.html"},{"revision":"16c4eb9f122023ee9612411c7834eeab","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"f6dd367a047bf4321d5f77ebe5f03dcd","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"3ecf7f9278d42257e81abcfb5d8f1c76","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"5ced991138d5d19c3e30c3189feefbdf","url":"./link/index.html"},{"revision":"d6efebce4103a328b0692cc4083a4769","url":"./message/index.html"},{"revision":"095b6f13734f70c0106e657cd91a8dc9","url":"./page/2/index.html"},{"revision":"a2be509d26d95c1598495e78f0563e3a","url":"./post/193912eb/index.html"},{"revision":"87b42db59986d5f9eb2fe06f213ed636","url":"./post/220b8380/index.html"},{"revision":"bfecf13b008af943dd349ffb726e905f","url":"./post/24dc856c/index.html"},{"revision":"ddd15b531c1f676fad2e5d0441b663f5","url":"./post/3082b2c6/index.html"},{"revision":"6b9ab2b2d221341fdf46b64b4e63ac2a","url":"./post/3df9585/index.html"},{"revision":"938b1a973154e5afbca032937e5630de","url":"./post/4a17b156/index.html"},{"revision":"76610b7fe9b6028a1681025a0b9db4f4","url":"./post/59d9dfef/index.html"},{"revision":"ba2ea2eca90bed70457c6a84311563bd","url":"./post/739f0a30/index.html"},{"revision":"a76343fc1e0db440586805d1e426bf33","url":"./post/73fccf9a/index.html"},{"revision":"16ff1a675100f4a97329884525ddd57a","url":"./post/7ca5704e/index.html"},{"revision":"5b03767f7fb6c4065dab08cbec459c51","url":"./post/7fc77154/index.html"},{"revision":"39242fbaf97dd4b9ec9b43a91d185a17","url":"./post/8422c4dc/index.html"},{"revision":"a6f3e74e75f8cb3b6063f281f5da8779","url":"./post/99c7fa1c/index.html"},{"revision":"43f5e193f2876663f5ab9a105938124c","url":"./post/9c60e209/index.html"},{"revision":"7abcfc72dd7581772b5195ce0b61df5c","url":"./post/ae58d2f1/index.html"},{"revision":"32df50022f3cee62da8bc00a8388264e","url":"./post/d4550abf/index.html"},{"revision":"4505539545e437bcf19ea7570162a2dd","url":"./post/d50c4d0e/index.html"},{"revision":"373fb8a62b697f7c8f2bc92a82463e23","url":"./post/db569493/index.html"},{"revision":"776f32c937b4fcc988ea1782a345cc6c","url":"./post/dd83a796/index.html"},{"revision":"0ffc7286086cc6cc25ab6754938a0536","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"eb27021935fec8f87b1e9345bd3d0a49","url":"./tags/AI/index.html"},{"revision":"b2fec6a5c26b83e1a192badb43493642","url":"./tags/Aplayer/index.html"},{"revision":"c96bd2d4a52e6d7dd3689a7084a2cc0b","url":"./tags/Bing/index.html"},{"revision":"7f3676ab263647b6188610e3c21c01fe","url":"./tags/BUG/index.html"},{"revision":"b4961af62f22bde702cfee7a9f3da52d","url":"./tags/CDN/index.html"},{"revision":"f41c8ff1b663a477a7ed2c924001636e","url":"./tags/CMS/index.html"},{"revision":"5f9b8e43dd938a49aae14a176bfeaa2e","url":"./tags/css/index.html"},{"revision":"0fff50eeef07731665a33a8747fc3f55","url":"./tags/DNS/index.html"},{"revision":"7af3d5c69ed27aee566d34d5363c4c28","url":"./tags/Flash/index.html"},{"revision":"91d572fde47a2486d1739f7c817a935c","url":"./tags/GFW/index.html"},{"revision":"fd7ba0faac3822e2d2508d24cb6e3f8e","url":"./tags/Gridea/index.html"},{"revision":"55af96f34678f9005af7216d0ecd357f","url":"./tags/HTML/index.html"},{"revision":"b52fd347c21ded2bab5243b2809fabd4","url":"./tags/index.html"},{"revision":"834b9ec33a63a85ba42fe5d76726241b","url":"./tags/JavaScript/index.html"},{"revision":"58d468c87ca79e3f3c2c8c868413d857","url":"./tags/JQuery/index.html"},{"revision":"cc73edb2d0d04b3b7b9a61e084d664c4","url":"./tags/MetingJS/index.html"},{"revision":"2e290b07707214671aa0d8c343614292","url":"./tags/NexT/index.html"},{"revision":"4f64e18d4b8dccb9ab03ab91c31c4c70","url":"./tags/RSA/index.html"},{"revision":"8f3921b07ff0bcdedce1cf3be18a8461","url":"./tags/Vercel/index.html"},{"revision":"be98b758fea9f1fcecff3406a9a42f64","url":"./tags/分享/index.html"},{"revision":"7344ce0f059b8112e78e4f17319a82b0","url":"./tags/加密/index.html"},{"revision":"571543e63d46aec78ae40a62d783cf8a","url":"./tags/加载动画/index.html"},{"revision":"2e287d69fd1d7ef365d7092c9ce40471","url":"./tags/右键菜单/index.html"},{"revision":"dcaff945845a58fdb41bd9ab6b6fa099","url":"./tags/域名/index.html"},{"revision":"73ef6d536e866594841c1d31f8db0855","url":"./tags/密码学/index.html"},{"revision":"fb92e801306b7118d48bfc13f593940e","url":"./tags/建站/index.html"},{"revision":"e4512b9f0bcfa47a562ae5620b6932e4","url":"./tags/插件/index.html"},{"revision":"d59eb2d74bd75475780b67e834e0b021","url":"./tags/服务器/index.html"},{"revision":"12b0ab924c40157681c30924c440fd6d","url":"./tags/网页源码/index.html"},{"revision":"677d21a1db37e20b55c731eb184d9b32","url":"./tags/美化/index.html"},{"revision":"ed5aca80b635cce67f6c171ed799818f","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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