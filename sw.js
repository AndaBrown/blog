const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"44c363dfe27e262c70fc94f96f81a497","url":"./404.html"},{"revision":"2f126ab9f9da5eefab94867beeceaeab","url":"./about/index.html"},{"revision":"b4e8ffa8958fb2ba17f96d292a0f6308","url":"./archives/2022/06/index.html"},{"revision":"cf2123198a4cd2f6e363044be53dad1f","url":"./archives/2022/07/index.html"},{"revision":"5686e68116723bd31101f83cdd2d528c","url":"./archives/2022/08/index.html"},{"revision":"1eba590f70a2a309d8e80f0aa9253ec3","url":"./archives/2022/10/index.html"},{"revision":"406610934a1f5a8315f8a3700ab3141d","url":"./archives/2022/11/index.html"},{"revision":"c088b0038c581955e70eefff3484b5e1","url":"./archives/2022/12/index.html"},{"revision":"f6cf957ed2c5e28e3e2c72d7e52df8c5","url":"./archives/2022/index.html"},{"revision":"39b6309cedf3a5cf95327e83e6d8634a","url":"./archives/2022/page/2/index.html"},{"revision":"bf24ab4bade75e74121c804022ec0050","url":"./archives/2023/02/index.html"},{"revision":"8152c63910a2241ffbe4ee188a8060be","url":"./archives/2023/04/index.html"},{"revision":"8f50d605c8efe8d6840e3ed46d10d179","url":"./archives/2023/index.html"},{"revision":"110110d7982ce482495d33a43b79b6b3","url":"./archives/2024/04/index.html"},{"revision":"0ba186c25f9e6d3c0160f7358cc878a6","url":"./archives/2024/05/index.html"},{"revision":"5fa36060837d4c427a05c73b80a9e2a8","url":"./archives/2024/06/index.html"},{"revision":"2382a128c74d2c170edaf1c64fc994ea","url":"./archives/2024/index.html"},{"revision":"3bed33137866bba36d9faf281862f2e1","url":"./archives/index.html"},{"revision":"76f033732cdcaa11f6a50b89702f1956","url":"./archives/page/2/index.html"},{"revision":"3ddbb6bcdcd60f39d1a43f1d57c9c9c5","url":"./categories/AI/index.html"},{"revision":"d6171fec871dd2eff00ff22e1bab5f64","url":"./categories/Gridea/index.html"},{"revision":"422f1eb954090551c62b7eae20491822","url":"./categories/index.html"},{"revision":"baf561fee1961b130e92df5b89402b1a","url":"./categories/Vercel/index.html"},{"revision":"1fe527b2238abee3f43d37e96c496af4","url":"./categories/休闲/index.html"},{"revision":"d169a33347c51c158b334de34583721c","url":"./categories/建站/index.html"},{"revision":"159ba61b789a9c4ce21fe98d86c2ce5b","url":"./categories/科普/index.html"},{"revision":"0b2224263afd7336e6b03d6340c8f01d","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"1f5f41a6ff7009b5de6a30deabe4de42","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"e927ce0f52aa7a8faa564ac00240dfdd","url":"./go/index.html"},{"revision":"0a9a3edae9cb39892dded85eec041020","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"7a5d2d86da37ba0dd393ad56c908bc84","url":"./link/index.html"},{"revision":"d2eff22fabac9e41d5732ce1a081a2d6","url":"./message/index.html"},{"revision":"cf50ac7418f59bac179c2698d66b0c55","url":"./page/2/index.html"},{"revision":"006718d13c462e302f02e390e224958e","url":"./post/193912eb/index.html"},{"revision":"4ebf731f0209b6d8947e76e74a58fb82","url":"./post/220b8380/index.html"},{"revision":"51768d1ee6032a42985e19ad0288b4d0","url":"./post/24dc856c/index.html"},{"revision":"4e43d10dadec55f3079ac7aeb9e00400","url":"./post/3082b2c6/index.html"},{"revision":"d1dabb905670603661ee7f24fa76023d","url":"./post/3df9585/index.html"},{"revision":"bc2320a4866a0f8373892b1eebbcf7f2","url":"./post/4a17b156/index.html"},{"revision":"4a8f87f4409ba44f178b4ac42a751b3c","url":"./post/739f0a30/index.html"},{"revision":"6cf6340d1e06e738a2bc0e3f5cd62cc7","url":"./post/73fccf9a/index.html"},{"revision":"fa773df67636b61f68e6573da375adfc","url":"./post/7ca5704e/index.html"},{"revision":"b9322f8e7ea8542d57f693a3b6d01ae6","url":"./post/7fc77154/index.html"},{"revision":"ea2cc55f7c8c66895e2eab9f360e2534","url":"./post/8097b5e3/index.html"},{"revision":"330433ba0cdc0e1e17bcbcd02e53a28a","url":"./post/8422c4dc/index.html"},{"revision":"370cb3bc7ad271c6776cd985a264e214","url":"./post/99c7fa1c/index.html"},{"revision":"d2fdc903fd07dabbdca192ef1a59f4a9","url":"./post/9c60e209/index.html"},{"revision":"759fe43a00e7f261b8ba0be29e90e6ad","url":"./post/ae58d2f1/index.html"},{"revision":"79576ca08493c63067a07cc00e3232f3","url":"./post/d4550abf/index.html"},{"revision":"64e1db5f72b54e8fe026a92592e9bd6b","url":"./post/d50c4d0e/index.html"},{"revision":"f22bceffa79951ed8c78d67cc1b2d927","url":"./post/db569493/index.html"},{"revision":"f560d3f7b572a5a53429822eca2669e9","url":"./post/dd83a796/index.html"},{"revision":"89f9648c7fa024ddaafdb79e81dfa426","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"f46cfe37924e72cb161b7d385760e0f4","url":"./tags/AI/index.html"},{"revision":"a5f5174ab083d4f79d069be87c00c4cd","url":"./tags/Aplayer/index.html"},{"revision":"85121e433a6377752d35a15334a2d5db","url":"./tags/Bing/index.html"},{"revision":"f75367abda912f4914f425e5d9ebc114","url":"./tags/BUG/index.html"},{"revision":"9af1db5a17815afb1e54e4740bb8d537","url":"./tags/CDN/index.html"},{"revision":"2c0ad5c67200122e2ff0b8b590f74eb3","url":"./tags/CMS/index.html"},{"revision":"9ad01861410efd512bb6f442a6817787","url":"./tags/css/index.html"},{"revision":"7422c5e7139fe742df5f8636652459f3","url":"./tags/DNS/index.html"},{"revision":"9a7da91faca741804ca10a05130cb4bd","url":"./tags/Flash/index.html"},{"revision":"31d58e3e647a1eea2080237d729cd20e","url":"./tags/GFW/index.html"},{"revision":"d66b2cb9c5b7d2e2f86a54ef36475894","url":"./tags/Gridea/index.html"},{"revision":"192f5a4fcbee09de5af41eb07636d849","url":"./tags/HTML/index.html"},{"revision":"9947ee6c8df2c103a5013184e96cb251","url":"./tags/index.html"},{"revision":"e501445544aa5a93a0531498a986ba5f","url":"./tags/JavaScript/index.html"},{"revision":"3690dc98e206ce0c5e147f13a791fbd9","url":"./tags/JQuery/index.html"},{"revision":"8d68f6c180a937e746a58c0bdf5a7469","url":"./tags/MetingJS/index.html"},{"revision":"9d3b4b1aecb344e1ce4cc5cfb05b12e9","url":"./tags/NexT/index.html"},{"revision":"533b4ada3991bd789ca09381993cde7f","url":"./tags/RSA/index.html"},{"revision":"2c8d7c2f715dc099bf405085e5769128","url":"./tags/Vercel/index.html"},{"revision":"e694c43b4ca84028f54abcff9842d784","url":"./tags/分享/index.html"},{"revision":"e4a425422b6aa48dd7b99af6e12d3c0d","url":"./tags/加密/index.html"},{"revision":"2a655eae01ff03acc45c41c9e3428e64","url":"./tags/加载动画/index.html"},{"revision":"9792c5f61414d6869af441e07b45a985","url":"./tags/右键菜单/index.html"},{"revision":"7ef8993301135ca7d900adadce79a8d6","url":"./tags/域名/index.html"},{"revision":"65ed39862f53920f2113e5ce59620c1a","url":"./tags/密码学/index.html"},{"revision":"0f7f7f062e2823fdae33e5ca123b4146","url":"./tags/建站/index.html"},{"revision":"bd15e6003348298dd5a711c3fe86d3f5","url":"./tags/插件/index.html"},{"revision":"8ec480f530b5956432a866f34a0944f3","url":"./tags/服务器/index.html"},{"revision":"d05b45d7e9571762f6ede28b16d4deec","url":"./tags/网页源码/index.html"},{"revision":"ce4cae441189c49e34b826135789f354","url":"./tags/美化/index.html"},{"revision":"53368518b2a2258fc352c267ceb2c74a","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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