const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"9f300cb2715ad03d12ca396dd2c4346e","url":"./about/index.html"},{"revision":"63f19e278c824de3a445ad2a7276d7bd","url":"./archives/2022/06/index.html"},{"revision":"8b2fa9f4ec2df6696e9161523899948c","url":"./archives/2022/07/index.html"},{"revision":"6367130a9ad17364b25e19795973e2a5","url":"./archives/2022/08/index.html"},{"revision":"10c5efb4d0ac17d2987a58d35ec415fe","url":"./archives/2022/10/index.html"},{"revision":"edde393d13c7aaeb422dfe47fca09052","url":"./archives/2022/11/index.html"},{"revision":"2c05aa182a4a08c8fc14cb17cc4978aa","url":"./archives/2022/12/index.html"},{"revision":"11ca026e90284fd9ef989eeb96a8063c","url":"./archives/2022/index.html"},{"revision":"4d1cf05960c6a4452ebf249da7a06d05","url":"./archives/2022/page/2/index.html"},{"revision":"b2b6b7ea594310824881b3131ea4d0cc","url":"./archives/2023/02/index.html"},{"revision":"56a0938992fc06e6ca98b6620bce5ef9","url":"./archives/2023/04/index.html"},{"revision":"b4026ba8bf2a962b5d637a8113514283","url":"./archives/2023/index.html"},{"revision":"aa18b1879b40638a35a137f0e3c57189","url":"./archives/2024/04/index.html"},{"revision":"d31281fa457252b1e95b0567bf439960","url":"./archives/2024/05/index.html"},{"revision":"bab81b7d4c52228b0bf231c0ab91d41f","url":"./archives/2024/06/index.html"},{"revision":"1fb4965aa4ce6b670fec0ac1dfd60040","url":"./archives/2024/09/index.html"},{"revision":"0900ab30eac9eb60c7b01d3aada0b8ef","url":"./archives/2024/index.html"},{"revision":"2765ea36aa2377931a43dc042e3e3fc0","url":"./archives/index.html"},{"revision":"4a3c00502d7c5d9f60d195935c4567e0","url":"./archives/page/2/index.html"},{"revision":"d4d9f67e13271c71d52a5a733cae63f7","url":"./archives/page/3/index.html"},{"revision":"ab51d2ed31f70af04c1d9b810fbcb40c","url":"./categories/AI/index.html"},{"revision":"610399695f937433d63599959c632c38","url":"./categories/Gridea/index.html"},{"revision":"78e38befb17e8f27f312eaabcea51046","url":"./categories/index.html"},{"revision":"04ec335a2bec75db46b49a7521e1c24a","url":"./categories/Vercel/index.html"},{"revision":"9a874f0c3e3c379eb1a929fa4ce10c62","url":"./categories/休闲/index.html"},{"revision":"a603046fe545f61599cb02890bb300a5","url":"./categories/建站/index.html"},{"revision":"6e2afd1067b8387210f3c9695240b890","url":"./categories/科普/index.html"},{"revision":"c747a9a8462972f60913e543415bcf94","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"14ebcdc896b912832addb3bcb6e83501","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"4c4460d264b434cd5878653aa81df8cc","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"8a598049ad4bc7431bf892b481e2eb46","url":"./link/index.html"},{"revision":"a1f617578f69db7e6392be9e7c9b5e6d","url":"./message/index.html"},{"revision":"f54981d48eb086176936b7f3eed7999a","url":"./page/2/index.html"},{"revision":"9e58fc4bbb7a37341759ad09d1c0fa8e","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"aa06a44d9857f48951d3daa47bf1b7e0","url":"./tags/AI/index.html"},{"revision":"43f50ce9689a2c13f66140a7d8e3ae0f","url":"./tags/Aplayer/index.html"},{"revision":"50b8d2623932a79c7699efeeb730d00e","url":"./tags/Bing/index.html"},{"revision":"bebb67332fedd809cbc6085c073263c3","url":"./tags/BUG/index.html"},{"revision":"e43e130d44f8b4483c87fd75e5d95b33","url":"./tags/CDN/index.html"},{"revision":"225a6d258059a97f8b2db9542b27ac78","url":"./tags/CMS/index.html"},{"revision":"dc16f8bc0ff74040e504493b181762f6","url":"./tags/css/index.html"},{"revision":"ab03c955452fe166462ccc3d4eaf6528","url":"./tags/DNS/index.html"},{"revision":"d22360071bffa2a2c62bc08cf57ebac1","url":"./tags/Flash/index.html"},{"revision":"dd1b53496cfe745f339b458877d06192","url":"./tags/GFW/index.html"},{"revision":"99f6e472798604cf10f8041fe026644a","url":"./tags/Gridea/index.html"},{"revision":"e2210e22353551ec65d00565957f4dc2","url":"./tags/HTML/index.html"},{"revision":"dc6000f16dd82e4cb2f15c40225ca4f3","url":"./tags/index.html"},{"revision":"2d2224e5eccc8b0cef0ba6257c5069c2","url":"./tags/JavaScript/index.html"},{"revision":"9a0817f7244950183d46c9b8caa335a0","url":"./tags/JQuery/index.html"},{"revision":"6decc0a8becf54bea6ec9c24734f5148","url":"./tags/MetingJS/index.html"},{"revision":"a8d9e88723c646d587d476d332434edf","url":"./tags/NexT/index.html"},{"revision":"dbf04465d2001703003e6e0069c8d69e","url":"./tags/P2P/index.html"},{"revision":"d3d5e74aff937e9499603ec8a14e64a1","url":"./tags/RSA/index.html"},{"revision":"1ebe703b538e411bd775e84c92499245","url":"./tags/Vercel/index.html"},{"revision":"13e6fa7c80df1714fcc5ad8b0e803c48","url":"./tags/分享/index.html"},{"revision":"905f006bfa40e32aa1e9be8d920b6004","url":"./tags/加密/index.html"},{"revision":"9f5e48101cf9ad44bdd6b3607b010a63","url":"./tags/加载动画/index.html"},{"revision":"5f95f117952eaeccf9d47b888104540d","url":"./tags/右键菜单/index.html"},{"revision":"1a580b4dfee7eb2febf78ad5dc5013db","url":"./tags/域名/index.html"},{"revision":"0c54653f213029f39590e7099326d68c","url":"./tags/密码学/index.html"},{"revision":"f17c1ef64032b9dc567ae5457dbbab00","url":"./tags/建站/index.html"},{"revision":"bc76fda7287a2ada14c71fa68af29c50","url":"./tags/插件/index.html"},{"revision":"d6e625aea64b82b77d44d0dc069019fb","url":"./tags/服务器/index.html"},{"revision":"336deab24261042dfa3d0a7974065c56","url":"./tags/网页源码/index.html"},{"revision":"6df32d5a0dee718cf6b84e7b5dec6cb5","url":"./tags/美化/index.html"},{"revision":"bde852825c6dd574f6e423258c69d01e","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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