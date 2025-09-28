const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"c6cc1bb43d6e007f57a875da400522f2","url":"./about/index.html"},{"revision":"4e75c2eeeace38bf71c6ce02857ca5cf","url":"./archives/2022/06/index.html"},{"revision":"6c6df6dba282260bd763abcf9e562ccd","url":"./archives/2022/07/index.html"},{"revision":"7a4ba4838e34e3e53ca3ab73947447f0","url":"./archives/2022/08/index.html"},{"revision":"0a3d8ba7d72d7bc979dd1c2a5585dfef","url":"./archives/2022/10/index.html"},{"revision":"f1f38ef96fa489765a5bdf8614e8973c","url":"./archives/2022/11/index.html"},{"revision":"b61fa74d204931f040fddb7dfa406be9","url":"./archives/2022/12/index.html"},{"revision":"abb8f6d3b3c9adba86b0b2512959eb9c","url":"./archives/2022/index.html"},{"revision":"22ccd7724b6112786596f817050ef470","url":"./archives/2022/page/2/index.html"},{"revision":"cc2df728ae1174e092228b6e909eedc6","url":"./archives/2023/02/index.html"},{"revision":"ac0d0958c09d071e8f7673eb62ab6b64","url":"./archives/2023/04/index.html"},{"revision":"4a1a2c4f068d4af88df90fdde985bc55","url":"./archives/2023/index.html"},{"revision":"2367b3efaac43d23428191e98c4a225f","url":"./archives/2024/04/index.html"},{"revision":"ac26d138d21f1fc3a7d16cdaaf4a325b","url":"./archives/2024/05/index.html"},{"revision":"6fe77a6df4c439298f538fca7bfeb91b","url":"./archives/2024/06/index.html"},{"revision":"b529706969aea40de801adf2af84f122","url":"./archives/2024/09/index.html"},{"revision":"0ed84a36787dd273611a85bad2e760d3","url":"./archives/2024/index.html"},{"revision":"344392ad5a9286f1f2113943aa4595bf","url":"./archives/index.html"},{"revision":"0936662740dafc81c9e194b958ea4851","url":"./archives/page/2/index.html"},{"revision":"2a0497006f2681b989592726bf2cbe41","url":"./archives/page/3/index.html"},{"revision":"cdcbee239f75ece73351e5e72447345f","url":"./categories/AI/index.html"},{"revision":"0a0a5bc967adc4625cbcaac106a27b2c","url":"./categories/Gridea/index.html"},{"revision":"d8708dfb3581c3accfdf87c080ef2539","url":"./categories/index.html"},{"revision":"90448b1c45e0f8220957f70346d2439d","url":"./categories/Vercel/index.html"},{"revision":"c27a09d457a84fd30781270b5b1fd11d","url":"./categories/休闲/index.html"},{"revision":"68d333539db93ba25db44e9ae64eb493","url":"./categories/建站/index.html"},{"revision":"5ec899b2d7b02f5ad035a2add8b48151","url":"./categories/科普/index.html"},{"revision":"69d00ad5e7db83401538541761454029","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"b4d63d386198d8f673a02092e19c7db2","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"de7eabb24d2741381cb08f88b423076b","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"a3cd000242183a67750770e5cab73cf1","url":"./link/index.html"},{"revision":"1072b3b610300ba13b3d2c59d1237375","url":"./message/index.html"},{"revision":"e188d006536664df88e97dd2cebf1444","url":"./page/2/index.html"},{"revision":"e124b2cbb040d47eb31f451b060f704a","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"516afbf8698ea198878dafd76f76a84d","url":"./tags/AI/index.html"},{"revision":"d114eba1bccee16f686241bad15f515a","url":"./tags/Aplayer/index.html"},{"revision":"ab13549829041957dacff52081fc4f40","url":"./tags/Bing/index.html"},{"revision":"c33b8c60e05c28867a7cc90e215b6f20","url":"./tags/BUG/index.html"},{"revision":"c8c748c1b26377669cb8fcaff648c554","url":"./tags/CDN/index.html"},{"revision":"e1c7842768fba507745fae49445f8a99","url":"./tags/CMS/index.html"},{"revision":"6b50cd293dce669891f690fac1bd912f","url":"./tags/css/index.html"},{"revision":"312ea431e0ef046b353966eb5a2fff83","url":"./tags/DNS/index.html"},{"revision":"389c80ff88627f8034d70bd89c26abd7","url":"./tags/Flash/index.html"},{"revision":"bc064167621a273431470e58dc56a315","url":"./tags/GFW/index.html"},{"revision":"0095d98fe7e9cd47fa465b6fc661e897","url":"./tags/Gridea/index.html"},{"revision":"101c9b77479a07e2f0f3aaa3b7a351ef","url":"./tags/HTML/index.html"},{"revision":"caf703184f1d9317557209e8414e5be3","url":"./tags/index.html"},{"revision":"a7ac372b1de068782a50a5816339afeb","url":"./tags/JavaScript/index.html"},{"revision":"5bfb0c57500ea0da80b9ca7f226cb471","url":"./tags/JQuery/index.html"},{"revision":"3c7af0eb882651ade078fdf4d8c5bda6","url":"./tags/MetingJS/index.html"},{"revision":"4873eb192d7c4ddebceddd05b6fe1d6b","url":"./tags/NexT/index.html"},{"revision":"3238197233163dee59796eccb7c3cbdb","url":"./tags/P2P/index.html"},{"revision":"0a69e6dfa7009f1cf3ec1e36059c91e9","url":"./tags/RSA/index.html"},{"revision":"d9008068839ff6706b7232ffbb83cffa","url":"./tags/Vercel/index.html"},{"revision":"d4a9fbcbd526020bf49a799a44850f2c","url":"./tags/分享/index.html"},{"revision":"2f95ac03d350a560622d860babb4a2a3","url":"./tags/加密/index.html"},{"revision":"d1355c8cabbb0c6ad0ae2a03134d1ccd","url":"./tags/加载动画/index.html"},{"revision":"140a4bebab30ae5da79409e8014a6b2c","url":"./tags/右键菜单/index.html"},{"revision":"e98c55edf8ae33a0b9ed586fed12fc98","url":"./tags/域名/index.html"},{"revision":"0e20a907e8f911ae899449562aa5cb11","url":"./tags/密码学/index.html"},{"revision":"a058975730a7556e05da1354dee5d47f","url":"./tags/建站/index.html"},{"revision":"c58377c9b601d63b90516c729bbf9952","url":"./tags/插件/index.html"},{"revision":"976744e2f32aefcb1538b937d9f8e8b3","url":"./tags/服务器/index.html"},{"revision":"e015029209caae6f39e181dbcac8acee","url":"./tags/网页源码/index.html"},{"revision":"e5ee64296a4ba0844c331fdf1c09863c","url":"./tags/美化/index.html"},{"revision":"591ca52bd89044f7942db8cde878650e","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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