const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"53b1882e6ee73c552f2ed4dd271e601c","url":"./404.html"},{"revision":"7b31330f91807fbfd30eb6964323aa7e","url":"./about/index.html"},{"revision":"2c4deba7cc0c2cda9a9605c4719203f1","url":"./archives/2022/06/index.html"},{"revision":"eb3a7bde126f5f812ca7e82537b130cd","url":"./archives/2022/07/index.html"},{"revision":"925963949aa9ac6eec1a396f6a5614ad","url":"./archives/2022/08/index.html"},{"revision":"6fc9c18b92d9a343dc9874b7533d10d8","url":"./archives/2022/10/index.html"},{"revision":"913772e82ec6b881ed23c05a1836d78a","url":"./archives/2022/11/index.html"},{"revision":"95eacf97b183af05112273e5b702dd85","url":"./archives/2022/12/index.html"},{"revision":"a41c32b47675b133f54c1b49c792b7db","url":"./archives/2022/index.html"},{"revision":"457286a4a4a2afa09f09616aebbfb590","url":"./archives/2022/page/2/index.html"},{"revision":"55510bff10002f3a77823ddd11973a44","url":"./archives/2023/02/index.html"},{"revision":"4de358af3c1baf391d455bf452764f5a","url":"./archives/2023/04/index.html"},{"revision":"2aa1e4fd17605c48074186728b7a852a","url":"./archives/2023/index.html"},{"revision":"f448c5dd9348870677b54806ef89b9f2","url":"./archives/2024/04/index.html"},{"revision":"4107352ed711793afaad9857b534ecfb","url":"./archives/2024/05/index.html"},{"revision":"39022e743cb6f898c45176f2b6f71251","url":"./archives/2024/06/index.html"},{"revision":"7542dee9a0ce53577e20e995ed250aac","url":"./archives/2024/index.html"},{"revision":"905feeabbedab4a28cab4ae6a197932b","url":"./archives/index.html"},{"revision":"26d667f122c2f7329375589690f5eb71","url":"./archives/page/2/index.html"},{"revision":"5365256531e3e13931e4674d464f0e7e","url":"./categories/AI/index.html"},{"revision":"16550770bb309aef118d10f943aa39ae","url":"./categories/Gridea/index.html"},{"revision":"fcde3a238b0be683abda3f5a69a359f6","url":"./categories/index.html"},{"revision":"7eee5231f876484270b772a54103fef6","url":"./categories/Vercel/index.html"},{"revision":"6b19e77b7948f126e32a377425619122","url":"./categories/休闲/index.html"},{"revision":"89a26ab4ee69cc55b3fb33f8e3980c45","url":"./categories/建站/index.html"},{"revision":"033d713545da67532a2d6646a28f5fc5","url":"./categories/科普/index.html"},{"revision":"0d59a86793f99211c9a35e7a684236d4","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"d9c3e7cb3cad0899baa1822ec918897a","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"3941986acb02a1c383a4105e8b88d62c","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"bba1f6155c9a8e6b52b0004bc52ba25f","url":"./link/index.html"},{"revision":"71b82964012046db8f2e628a4d104a50","url":"./message/index.html"},{"revision":"83ced039d96e35b721d640ac3fa79a92","url":"./page/2/index.html"},{"revision":"bb5795f2bef5d777e32adc547a09bdb8","url":"./post/193912eb/index.html"},{"revision":"c6f8ab1910a7290694d8e3d6aa8ba347","url":"./post/220b8380/index.html"},{"revision":"0c8f386417c1e665a428649fb59d0dd6","url":"./post/24dc856c/index.html"},{"revision":"88c021382094dd780d6d76df36503ec7","url":"./post/3082b2c6/index.html"},{"revision":"a796ca5f5c07de7fc8040f992b64ebc7","url":"./post/3df9585/index.html"},{"revision":"11a3cf686d4e9b08d60556b77db87b70","url":"./post/4a17b156/index.html"},{"revision":"cb05dfa333fb394d95f178d06c1859af","url":"./post/59d9dfef/index.html"},{"revision":"d13cfa1a3f221040f480799b3de08ec0","url":"./post/739f0a30/index.html"},{"revision":"b62aeb5ec7c6c734ae4ee8d479d01234","url":"./post/73fccf9a/index.html"},{"revision":"f8633206a15341802c8bfbddccbce6c5","url":"./post/7ca5704e/index.html"},{"revision":"051441a01bb7c859f0f661e2e7fe73f3","url":"./post/7fc77154/index.html"},{"revision":"b8c4f7416bbfb96b0c895a9c0feec582","url":"./post/8422c4dc/index.html"},{"revision":"169fad0a6c3f67449398bdd30ce1ca10","url":"./post/99c7fa1c/index.html"},{"revision":"1de7006ac9527dc2f5510b7ac094bf3f","url":"./post/9c60e209/index.html"},{"revision":"c471d855d6200d17def9d3a9dc11aa26","url":"./post/ae58d2f1/index.html"},{"revision":"c0d26cf9e547c51e936da47de7276b8c","url":"./post/d4550abf/index.html"},{"revision":"17aec381191c5733f4edc60e3c3ee1b0","url":"./post/d50c4d0e/index.html"},{"revision":"a93e60eb410cc950806ad1700e812539","url":"./post/db569493/index.html"},{"revision":"44e03a437d1a0400cc8a198703022dab","url":"./post/dd83a796/index.html"},{"revision":"50b160bfb30614c106aeb3e199019aa5","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"8335debae02f2274d8a9983ef9b5271b","url":"./tags/AI/index.html"},{"revision":"02dbe7bf81eecfe6448dd4ef265c7ab0","url":"./tags/Aplayer/index.html"},{"revision":"2b1d5beeeafb5e89d9646020d9e59c85","url":"./tags/Bing/index.html"},{"revision":"6ceb0631ac7feaef6354881512c89c83","url":"./tags/BUG/index.html"},{"revision":"c9e8c4749863d1a7ed015da21f76d028","url":"./tags/CDN/index.html"},{"revision":"97fe3c64442f0bee7fb03a730d029be5","url":"./tags/CMS/index.html"},{"revision":"8ad86f79412e1957ee5ab361e2f951ab","url":"./tags/css/index.html"},{"revision":"db3cdd9ff8e286096e0a4ec4ecbb7237","url":"./tags/DNS/index.html"},{"revision":"bef27a67a50286150d2ba869ef8811c7","url":"./tags/Flash/index.html"},{"revision":"d683642ffaf7d7581c3627708ab3d888","url":"./tags/GFW/index.html"},{"revision":"33b1d6e530303e51ebbed527ab0e6a4a","url":"./tags/Gridea/index.html"},{"revision":"4c8a764718ab9207dd95a1eaea2bfa69","url":"./tags/HTML/index.html"},{"revision":"c7000318df8f7a411b36c7d730aa99cb","url":"./tags/index.html"},{"revision":"cd094d151e089ac46d2c3a7cb9d69939","url":"./tags/JavaScript/index.html"},{"revision":"a9a4ba704477bd2cecfa53ad0177a469","url":"./tags/JQuery/index.html"},{"revision":"b803e0cbca60580c8047b27b0b3923c3","url":"./tags/MetingJS/index.html"},{"revision":"c3775cef04a65012c5fe7d12f68c9f02","url":"./tags/NexT/index.html"},{"revision":"fc22d0270b1e58d3903c71a0794ebadb","url":"./tags/RSA/index.html"},{"revision":"7ba85f09a633bbde4af35692e0058594","url":"./tags/Vercel/index.html"},{"revision":"d949449f39b6c5a67e8d897d7ec6d1dd","url":"./tags/分享/index.html"},{"revision":"5f17f8ac5dcda2d8458b485c98d3c6d0","url":"./tags/加密/index.html"},{"revision":"706782ee33871d8a567ed2b84d0edac8","url":"./tags/加载动画/index.html"},{"revision":"8d496e6290a5553ab963a28bc7136802","url":"./tags/右键菜单/index.html"},{"revision":"988d80e4579c546f2088517a2fc318f9","url":"./tags/域名/index.html"},{"revision":"69b2ce2e0825bf3abe2ca0d4b1f0b678","url":"./tags/密码学/index.html"},{"revision":"f4829706e23c6954f52183810ca7ca5f","url":"./tags/建站/index.html"},{"revision":"b35ea0bc300f22a7c5b5dbbccadc2dad","url":"./tags/插件/index.html"},{"revision":"d895037457147fd674b1bcfc0114380a","url":"./tags/服务器/index.html"},{"revision":"5707a6d2f14829252499716f8df6d70e","url":"./tags/网页源码/index.html"},{"revision":"5d08f2710145c6f162cde5f869a4aa63","url":"./tags/美化/index.html"},{"revision":"cac18169e4b7f4a01f0cc71787e8885a","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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