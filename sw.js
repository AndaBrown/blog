const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"d902c12e23913ce9e770d30a0305dc90","url":"./404.html"},{"revision":"177e3f90aecdd2f2cd10d56306ed0922","url":"./about/index.html"},{"revision":"931e80fcb6985d82e405cfe06b4aab51","url":"./archives/2022/06/index.html"},{"revision":"57aa1c14d2290dcb674e14f644aa7b05","url":"./archives/2022/07/index.html"},{"revision":"9e95cdbf63ecad93cdbab941573edd7f","url":"./archives/2022/08/index.html"},{"revision":"83909d52bc3bfad977f9840ee1b88be7","url":"./archives/2022/10/index.html"},{"revision":"b906c7b8844080a83751c04775d1ee78","url":"./archives/2022/11/index.html"},{"revision":"3b738c3779ae3b452f91f83d810e9b12","url":"./archives/2022/12/index.html"},{"revision":"a254b72f4ff15750a7c6740ccc4075f8","url":"./archives/2022/index.html"},{"revision":"7b0f6ba14416e73020bb8c173740812d","url":"./archives/2022/page/2/index.html"},{"revision":"7fdc79b398db9494a6bf1fb1b19f3d73","url":"./archives/2023/02/index.html"},{"revision":"88b3c3805277430c5734fe44f1f0c617","url":"./archives/2023/index.html"},{"revision":"3351904c8277c7da6159e3966225b9e5","url":"./archives/index.html"},{"revision":"ab1779ca495e7868f9cb6ef7244da1c9","url":"./archives/page/2/index.html"},{"revision":"c267c4bed8c0ad1e19aefe921b35f71d","url":"./categories/Gridea/index.html"},{"revision":"b40232bc574f89ce8de6b023c3315d6b","url":"./categories/index.html"},{"revision":"ae85e1d04fdc5eedb445c88b2a367dba","url":"./categories/Vercel/index.html"},{"revision":"97cd74cab7939ddf5e7cac7d1e79a909","url":"./categories/休闲/index.html"},{"revision":"d0eb9e74c54da463a887861aa51257bd","url":"./categories/建站/index.html"},{"revision":"cb90a59f9c16a7f9d86246be0deee1a7","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"22f51ad5ac46193e286e991ee13278ea","url":"./cookies-instructions/index.html"},{"revision":"4252cf4b91097427e40c22fd46f002fe","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"982f77e37adcb7ffe798a42e4df97d7f","url":"./go/index.html"},{"revision":"bc35b43086628964855bcc2e93e69efa","url":"./index.html"},{"revision":"5a6ecf34399a1729b115064d2f283227","url":"./js/main.js"},{"revision":"786b8da5325888c55c04e6b6687bf9f5","url":"./js/search/algolia.js"},{"revision":"1ec55c21e97cc170ee4dadaf96b44806","url":"./js/search/local-search.js"},{"revision":"bc064917c366036544975274bb20a01d","url":"./js/tw_cn.js"},{"revision":"0dccc99f6a5b70b9ccfbf58d2c6eec5b","url":"./js/utils.js"},{"revision":"a2d8ae2c88889a110d9ef55e805b3204","url":"./link/index.html"},{"revision":"fbc2b930654eee04c0a2543259e55eee","url":"./message/index.html"},{"revision":"6ecdfee638de6452de9e48bc5914c634","url":"./page/2/index.html"},{"revision":"bbb12ed70d7b7658efb55c96c5ab1e73","url":"./post/193912eb/index.html"},{"revision":"4b2cb9c4d83a3d7f21823f64d2d73e1b","url":"./post/220b8380/index.html"},{"revision":"c762a2a02842440f527bd991407442a5","url":"./post/24dc856c/index.html"},{"revision":"95a9baaeb44bc6eb5b2e3714a123c904","url":"./post/3082b2c6/index.html"},{"revision":"bdeae48579ba773836961ebd5ae148b4","url":"./post/3df9585/index.html"},{"revision":"b744369a8a93adc92768ae49be9d3dc7","url":"./post/4a17b156/index.html"},{"revision":"7f5cc4e5179d4232ac0561af4ef983b5","url":"./post/73fccf9a/index.html"},{"revision":"f3854f5a7792307676496f39a0d247df","url":"./post/7ca5704e/index.html"},{"revision":"fbf54bfa716343e8b50d31f1a33fd61c","url":"./post/7fc77154/index.html"},{"revision":"c79784c65f38ebac2f0aa660d09665d3","url":"./post/8422c4dc/index.html"},{"revision":"85f0e0d5512c1a1aa4e3d34612eb7dae","url":"./post/9c60e209/index.html"},{"revision":"db65996858489198dae37144e083fe8b","url":"./post/d50c4d0e/index.html"},{"revision":"7dc90018386ec42adfb3cce493d2d7ec","url":"./post/db569493/index.html"},{"revision":"52aef3a070175cc1703499535d1a66f4","url":"./post/dd83a796/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"7d9dd1b8713b4c1ce6c5bcb4043a7de4","url":"./tags/Aplayer/index.html"},{"revision":"5beefa51305e10425c93f0f172091f70","url":"./tags/BUG/index.html"},{"revision":"04ff0fae83f7f24ce4a3a983f12ab644","url":"./tags/css/index.html"},{"revision":"dc1fd259739c26d9483dc50609563d89","url":"./tags/DNS/index.html"},{"revision":"7fb50c9b590201b511f1784d9323e32b","url":"./tags/Flash/index.html"},{"revision":"9ae643ce1135fb3c63c27fad3252f8ef","url":"./tags/GFW/index.html"},{"revision":"fae638821f13083c3a13944c58117aae","url":"./tags/Gridea/index.html"},{"revision":"212f16b14fe35b98ace54c07e624c741","url":"./tags/HTML/index.html"},{"revision":"36d13a7b1e88a13edffc82a7aefb42fd","url":"./tags/index.html"},{"revision":"0eac1a880f0e3e466162fc30b63124ae","url":"./tags/JavaScript/index.html"},{"revision":"c3b9cba2ab6b1e3cf3b7320b8ff80eb0","url":"./tags/JQuery/index.html"},{"revision":"12a74b4b69ba142403010bdd890ea316","url":"./tags/MetingJS/index.html"},{"revision":"0e9a6a23d389a97dec9f6e9c15b1ada9","url":"./tags/NexT/index.html"},{"revision":"9f8e1da4828fb998d0c622ef68c7cbaa","url":"./tags/Vercel/index.html"},{"revision":"883d4ffa546cfb16e41081ff4270df57","url":"./tags/加载动画/index.html"},{"revision":"092dd4caf29b974a63ca1712cf15a79c","url":"./tags/右键菜单/index.html"},{"revision":"2a1ab462c6c8cf4676172d1e80ec943b","url":"./tags/域名/index.html"},{"revision":"a7b5b6e11c48efe96baeea2b9e9ada5f","url":"./tags/建站/index.html"},{"revision":"7ec8e705981ed389fbf5251b6f0a9e9e","url":"./tags/插件/index.html"},{"revision":"9344bb946f8cb35ab4a90bdb490ac5ca","url":"./tags/网页源码/index.html"},{"revision":"32ddd72f8e91e6eb54298d35764627e9","url":"./tags/美化/index.html"}]);

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

workbox.googleAnalytics.initialize();