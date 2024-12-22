const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"557128a9b46013a693d4b0572dc42599","url":"./404.html"},{"revision":"3c8e457533c01d5e6ee15263e732226a","url":"./about/index.html"},{"revision":"dc665b25841cb8b49913a2a8f65dee2b","url":"./archives/2022/06/index.html"},{"revision":"2c8a376824883bfed51dd2ede3b1717c","url":"./archives/2022/07/index.html"},{"revision":"54ede5e9251bf74719a9ea98a17bf51a","url":"./archives/2022/08/index.html"},{"revision":"2274a88e41acdff0d71860df32f64a88","url":"./archives/2022/10/index.html"},{"revision":"1b3b3d5a42e06fb4bec0f4d9ca68d626","url":"./archives/2022/11/index.html"},{"revision":"6c29a48e9791afde81a3e015e68fa9ce","url":"./archives/2022/12/index.html"},{"revision":"afb761f472b7fd93b5c59c2f56fed339","url":"./archives/2022/index.html"},{"revision":"fd9ab272f7d9e1becfa67012389c79a2","url":"./archives/2022/page/2/index.html"},{"revision":"a295f09c60ce836f59ee61b6515e2fb4","url":"./archives/2023/02/index.html"},{"revision":"7afbac732eee86fd5a5a827cdf9abab3","url":"./archives/2023/04/index.html"},{"revision":"56022823733004ad53c6ca63644b3801","url":"./archives/2023/index.html"},{"revision":"8a650e2a81a6f1ac90f51d6fe4754632","url":"./archives/2024/04/index.html"},{"revision":"ae5aa02901e4c2bcfe295e4a962347f8","url":"./archives/2024/05/index.html"},{"revision":"5a20320dfeb6631ca6aef8efdd68d9a5","url":"./archives/2024/06/index.html"},{"revision":"fdcb02e3b9c5bd3b38d9fbaf46bb87f9","url":"./archives/2024/09/index.html"},{"revision":"f5170537b4abb97d2c1419ddb2630141","url":"./archives/2024/index.html"},{"revision":"8964c4e49d7fb5301e563ced49a84b9c","url":"./archives/index.html"},{"revision":"32980326209c10de04e7f30b1c3b0753","url":"./archives/page/2/index.html"},{"revision":"3e9a035daa70b64b5102498352778671","url":"./archives/page/3/index.html"},{"revision":"a5c9e5e89b549e6ac63df2023a5c9281","url":"./categories/AI/index.html"},{"revision":"b373c702257698066c7eb7e64fe83a42","url":"./categories/Gridea/index.html"},{"revision":"f678c81dc5f5120b34d3bdec426b3188","url":"./categories/index.html"},{"revision":"6c6056c81f201528f07ee55a845f22fa","url":"./categories/Vercel/index.html"},{"revision":"c1291c0fb93365ad4199cd6db6453837","url":"./categories/休闲/index.html"},{"revision":"9ef9b68f6740842a4a6df757472134f2","url":"./categories/建站/index.html"},{"revision":"dd3c6e96057e1f4730eb3b022d38c26e","url":"./categories/科普/index.html"},{"revision":"de9a44b2037dc15a3b31afe6390ebf5d","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"fb8aa797dcc2dc9608081cd599a1e13c","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"24e6abcad2405d574154ae3d411f117a","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"8db3a52b175edd39b76ca58f2820474f","url":"./link/index.html"},{"revision":"081c2ad813573d5bb15c734629d76b7f","url":"./message/index.html"},{"revision":"c455ed6560791e0949546f1e3bb7aea2","url":"./page/2/index.html"},{"revision":"d8c98106ea88916a093eb9c3520d5ab2","url":"./page/3/index.html"},{"revision":"33fa994fc113f3a275d2b729bc1429cf","url":"./post/193912eb/index.html"},{"revision":"a81e29c7e51221b4c34cbec3189ef3c9","url":"./post/220b8380/index.html"},{"revision":"c0f38b219cdd712cf028332457bce7ac","url":"./post/24dc856c/index.html"},{"revision":"a42d26684885c1973dd25786a1d86cf8","url":"./post/3082b2c6/index.html"},{"revision":"c542234377f43444a6b2fe0d180d18ee","url":"./post/3df9585/index.html"},{"revision":"e02a5364889604928427d23c805eb2b5","url":"./post/4a17b156/index.html"},{"revision":"415efcf3c4ebcdca557f3842d16a1598","url":"./post/739f0a30/index.html"},{"revision":"cba83b585b0edd8ee8751a6cf5d6ba13","url":"./post/73fccf9a/index.html"},{"revision":"67f15ee61a93f6889fe0bbfda84fa77d","url":"./post/7ca5704e/index.html"},{"revision":"bab49e20cd201f4baa38535711155386","url":"./post/7fc77154/index.html"},{"revision":"8a62fe149ef84e9dcd31546292f84612","url":"./post/8097b5e3/index.html"},{"revision":"be9f422288adc51270dfc68e2ba7b919","url":"./post/8422c4dc/index.html"},{"revision":"844334a6dc4a82098fb976f78bdc0da9","url":"./post/99c7fa1c/index.html"},{"revision":"fb447e50774e9a8abad71be498ce4c96","url":"./post/9c60e209/index.html"},{"revision":"d44241b3dd3efbd73fa75e8fb42ac8b0","url":"./post/ae58d2f1/index.html"},{"revision":"ec5e2fbcd3dbe998c48c01b0cd808bdd","url":"./post/d4550abf/index.html"},{"revision":"1827c1df4251813f6d93f43164d31ffc","url":"./post/d50c4d0e/index.html"},{"revision":"69fd4c1bfc4d6ba66665213b0792a70a","url":"./post/db569493/index.html"},{"revision":"6c8d34e228af55876ebfbe4459942d03","url":"./post/dd83a796/index.html"},{"revision":"683c2cedae3e4e005771b3b7a1591e0b","url":"./post/f82f332a/index.html"},{"revision":"9a7ae7e2d0c7353daca5b260f7961ccd","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"e40d7a03112a710b19a45e10087778e4","url":"./tags/AI/index.html"},{"revision":"ddd5c347162e6e7d9658210730e5b1a7","url":"./tags/Aplayer/index.html"},{"revision":"35bffbb7bfa860c1635bee1546a1d3aa","url":"./tags/Bing/index.html"},{"revision":"2307e9684781d3f11dbfa7972a914adc","url":"./tags/BUG/index.html"},{"revision":"35d771459eedfbdf4faf0440632af1b8","url":"./tags/CDN/index.html"},{"revision":"6e52cf61c272b64d95b5f5635409c15d","url":"./tags/CMS/index.html"},{"revision":"b4048d8e88fbca7e13129172d75d201d","url":"./tags/css/index.html"},{"revision":"f361f34dc7129ef559c63fc404521150","url":"./tags/DNS/index.html"},{"revision":"a62ae0deb650483aeb0faa684151573b","url":"./tags/Flash/index.html"},{"revision":"925769e3f1d63cd6e82c487a42aaabff","url":"./tags/GFW/index.html"},{"revision":"9c98cbf7f125b320253268c459b2eaa6","url":"./tags/Gridea/index.html"},{"revision":"993195205949bfd92f424a536d01dc80","url":"./tags/HTML/index.html"},{"revision":"5f99e61c29e9781a94ccae846473afc7","url":"./tags/index.html"},{"revision":"cd502dc823a4fc4c8a14290c1206451c","url":"./tags/JavaScript/index.html"},{"revision":"d78c7a7d7dc680aff75d44903c0bece1","url":"./tags/JQuery/index.html"},{"revision":"118b3418c2bc4a4d70b929aa35191887","url":"./tags/MetingJS/index.html"},{"revision":"ba0cd8076d2e3101bac785662c1f1df7","url":"./tags/NexT/index.html"},{"revision":"48433fc2b9a7a982339c77591ad24aaf","url":"./tags/P2P/index.html"},{"revision":"5d02b3e7da6aa8638fb5822855e13800","url":"./tags/RSA/index.html"},{"revision":"da8c9756b62e96dc1a60e12ef759a3d4","url":"./tags/Vercel/index.html"},{"revision":"e42793710b2a72831478e77decfae248","url":"./tags/分享/index.html"},{"revision":"9fb07c8843e6a0d1f657cf578fa6b701","url":"./tags/加密/index.html"},{"revision":"9432111b2317672219bd6c8898d1a8e2","url":"./tags/加载动画/index.html"},{"revision":"3689b8d6ad7df571b2f876b3b950f986","url":"./tags/右键菜单/index.html"},{"revision":"4f1b264c7fbe43b8bb85a77067f9ccee","url":"./tags/域名/index.html"},{"revision":"e592c2d5eda73616206fbebef0293f66","url":"./tags/密码学/index.html"},{"revision":"50cb4224ce7bc2fcbc90e0b08000773f","url":"./tags/建站/index.html"},{"revision":"0631c362afbe4e2f6c60ab9fe22cadd2","url":"./tags/插件/index.html"},{"revision":"97a2eb56938a019e3a6b9d17aae0ca6f","url":"./tags/服务器/index.html"},{"revision":"28dafa5deb247de0d763cedcca3bc81c","url":"./tags/网页源码/index.html"},{"revision":"b85da964dfe2385c74a7dc9ba9b0c9c1","url":"./tags/美化/index.html"},{"revision":"38c04b5dc746e3d75f1be6240d319b03","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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