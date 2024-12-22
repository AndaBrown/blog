const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"53675e9588b9121519d70b3349c280ed","url":"./404.html"},{"revision":"c39afe7dbe54a51820486301a5e7bce4","url":"./about/index.html"},{"revision":"cafea325d4443360fc27356fad06a761","url":"./archives/2022/06/index.html"},{"revision":"b5730f0508e7cb05cb1e0a81daaf2821","url":"./archives/2022/07/index.html"},{"revision":"4890fd6406d1a135b4e9e825ce94c60a","url":"./archives/2022/08/index.html"},{"revision":"64f33c6ad4b6f9b9237b29bbe051a1ec","url":"./archives/2022/10/index.html"},{"revision":"e404e88ec58105a86e819ebf52c5810a","url":"./archives/2022/11/index.html"},{"revision":"e6b2c158c5855c928e67ec86f5971404","url":"./archives/2022/12/index.html"},{"revision":"f9af511d585b38a68840194f32965ff0","url":"./archives/2022/index.html"},{"revision":"ac31567dad06c9e7487a24fdb2d3321a","url":"./archives/2022/page/2/index.html"},{"revision":"88057fc2bd3a05a579781a3c4fbe2c30","url":"./archives/2023/02/index.html"},{"revision":"3ae9c80faa79c1e611eab49b0c17667f","url":"./archives/2023/04/index.html"},{"revision":"4a47aa493b90027b38aa03b0452a2c44","url":"./archives/2023/index.html"},{"revision":"1738f003cfca4eb5239495a03b76ae2d","url":"./archives/2024/04/index.html"},{"revision":"18e0ba5b5d9b42c6c4f575c592a10f58","url":"./archives/2024/05/index.html"},{"revision":"b2179a3244fbc2721fce4af1da34c823","url":"./archives/2024/06/index.html"},{"revision":"19532e97861c3359a4d6c71cd45595b2","url":"./archives/2024/09/index.html"},{"revision":"005239f404774e240ba4088366a77d63","url":"./archives/2024/index.html"},{"revision":"81e77eddfda790c2598aadd5b8045e22","url":"./archives/index.html"},{"revision":"c4127369b590432ff3df40afd40de97b","url":"./archives/page/2/index.html"},{"revision":"c182c01e7cae9db2414c027cbae68550","url":"./archives/page/3/index.html"},{"revision":"3ace3f4c005c05f441bda6d6160cf769","url":"./categories/AI/index.html"},{"revision":"6798079af1cbf87792f4b26a50edc0f7","url":"./categories/Gridea/index.html"},{"revision":"431ee59610d0c58eddbf8c7f0fa8262a","url":"./categories/index.html"},{"revision":"6875285537a23e67a1f79edb52eaceae","url":"./categories/Vercel/index.html"},{"revision":"f79a672bb747953ae00bc29fbf8b8794","url":"./categories/休闲/index.html"},{"revision":"4ad3e246315246c037e330257e0590b8","url":"./categories/建站/index.html"},{"revision":"49e0adff5538057e3738866ebe1638c1","url":"./categories/科普/index.html"},{"revision":"ab5cb5dee62c3bc8459950fde7ff8cff","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"989bb619049e1821792da9c5822b28c8","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"d46b2592f92996a844520a594441b366","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"b454f9c69813bb844402331a847f1834","url":"./link/index.html"},{"revision":"028c5210ad1da00ccd73746c9bffda62","url":"./message/index.html"},{"revision":"687a9b733e7b5b3f6f815a2235cbd80f","url":"./page/2/index.html"},{"revision":"3cd0c28143c64909a893cde4265f953b","url":"./page/3/index.html"},{"revision":"7ea25dd2d4b6deaa7b198358f1d77ed7","url":"./post/193912eb/index.html"},{"revision":"d8852656806d06a3f955e8eeba176083","url":"./post/220b8380/index.html"},{"revision":"6121c245542f38890054a09a63957647","url":"./post/24dc856c/index.html"},{"revision":"2a82446cd5b18606f6dc6df665d10ca0","url":"./post/3082b2c6/index.html"},{"revision":"9b7fe733ef8aa970d499c8b7b2036add","url":"./post/3df9585/index.html"},{"revision":"9260a79934b4ff13913687508d122906","url":"./post/4a17b156/index.html"},{"revision":"7365601a4da0bec54a979a94ce8f8d78","url":"./post/739f0a30/index.html"},{"revision":"f0d286142b36a88988f6da4626b56fbf","url":"./post/73fccf9a/index.html"},{"revision":"420ebc22e0bec1a71a1d00f7269203b8","url":"./post/7ca5704e/index.html"},{"revision":"1ed465a12de1634e0e91cd07112eaad4","url":"./post/7fc77154/index.html"},{"revision":"07481f2cb2a0f28ea14ca529b59ca2b4","url":"./post/8097b5e3/index.html"},{"revision":"aa36dd385b7fe539b288dee498f3aca3","url":"./post/8422c4dc/index.html"},{"revision":"51e5feeceba27465bc3b41675d061683","url":"./post/99c7fa1c/index.html"},{"revision":"c56a7908c9e713b5fd0d3318218ec5fa","url":"./post/9c60e209/index.html"},{"revision":"8eed47bd16d30aeea3b6d96ed62238d8","url":"./post/ae58d2f1/index.html"},{"revision":"adc1466a432a247ab3dbf9bc1f1ecc45","url":"./post/d4550abf/index.html"},{"revision":"d22f448d738adc363e2c8c773b6451d6","url":"./post/d50c4d0e/index.html"},{"revision":"5b86773fc5d2c69835c29145f2d0cf88","url":"./post/db569493/index.html"},{"revision":"2c031a7da9259e166c7e9f2e5e49b40e","url":"./post/dd83a796/index.html"},{"revision":"1bbbcfd350af7f66aa08958610792c35","url":"./post/f82f332a/index.html"},{"revision":"7fc26c26a48328ffbf40f645df562cb8","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"836c8303a75e1e16be9168ee8dd9edb5","url":"./tags/AI/index.html"},{"revision":"470ef816267ee6e761cd8361d5b262bb","url":"./tags/Aplayer/index.html"},{"revision":"7fec6b9388aaf72895c9a8b734b2681a","url":"./tags/Bing/index.html"},{"revision":"cfa6ee5c0921fb1b788166aacc644960","url":"./tags/BUG/index.html"},{"revision":"209ccd0c29f006ab0cb98e2144e1bf8c","url":"./tags/CDN/index.html"},{"revision":"92dec291281908554b416072fbbc8683","url":"./tags/CMS/index.html"},{"revision":"8a4669ca9c21322f360965ae5be26568","url":"./tags/css/index.html"},{"revision":"91f4575303c0779757e69e88e76f6c24","url":"./tags/DNS/index.html"},{"revision":"ec332b498abbffe2d5dc227f62df111c","url":"./tags/Flash/index.html"},{"revision":"d33a15ec811e1d3e34df149a7c1f9acb","url":"./tags/GFW/index.html"},{"revision":"9a6cd8136bb69e9ad2d932aa737d12be","url":"./tags/Gridea/index.html"},{"revision":"17c3736201d162e601dcb1317270f24e","url":"./tags/HTML/index.html"},{"revision":"7c6f7ef7da0ef6ef0a91b6ad8c246804","url":"./tags/index.html"},{"revision":"24458afa5ebddc5aeb5c27e7dc686790","url":"./tags/JavaScript/index.html"},{"revision":"90da4823a2f578feb25c602728d6856d","url":"./tags/JQuery/index.html"},{"revision":"575b303a7f0ff1b20fb5469a88e8b14b","url":"./tags/MetingJS/index.html"},{"revision":"216f1bc08602893cff41a528020ab0fd","url":"./tags/NexT/index.html"},{"revision":"2a54694b390691cd0c743f6cb313397e","url":"./tags/P2P/index.html"},{"revision":"966bfbad1ec69d3bd219f9227485aaca","url":"./tags/RSA/index.html"},{"revision":"a9466fa88f185d176eee572ad8fd6c63","url":"./tags/Vercel/index.html"},{"revision":"387cf378ce64d725b44dcfd92dff784c","url":"./tags/分享/index.html"},{"revision":"0140561f877ad47e6f2d3833a4197599","url":"./tags/加密/index.html"},{"revision":"92415bf050d24ac528d2ca57fca05bf6","url":"./tags/加载动画/index.html"},{"revision":"53360373cbc2ca0c1db0fedf7245cfd7","url":"./tags/右键菜单/index.html"},{"revision":"d8b227b83e9c091ed410ab9dde72b702","url":"./tags/域名/index.html"},{"revision":"a98bae40015df4d2b1a20a633866da53","url":"./tags/密码学/index.html"},{"revision":"73f6ee839471df1dedcaa9bad8be2f40","url":"./tags/建站/index.html"},{"revision":"56d6f94388f763447ea35493cee32735","url":"./tags/插件/index.html"},{"revision":"005aa8b09adfa64963524b4848246abb","url":"./tags/服务器/index.html"},{"revision":"576a1cd6b6b0d6f8a4842e0b97b0c585","url":"./tags/网页源码/index.html"},{"revision":"d9838a277e420376811126058ff6945d","url":"./tags/美化/index.html"},{"revision":"15a24d0f771266858520d479f34ad657","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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