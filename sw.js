const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"740d73e0f4e766f33c8fe72a8d092230","url":"./404.html"},{"revision":"4a1478655caf386d7315b4e077e3b1b8","url":"./about/index.html"},{"revision":"49f8e9f94d94a5d24baa6b087223f52b","url":"./archives/2022/06/index.html"},{"revision":"8554fd327e7db33832040ae2be4cab68","url":"./archives/2022/07/index.html"},{"revision":"331da47fd551d1fe3980d1646e0baa21","url":"./archives/2022/08/index.html"},{"revision":"af7a844485cb49b85d7cac13ecebd92d","url":"./archives/2022/10/index.html"},{"revision":"460090a6afb466eb3af71e875f1c5722","url":"./archives/2022/11/index.html"},{"revision":"97712f296b1d81bbe824f576b6a7d6e5","url":"./archives/2022/12/index.html"},{"revision":"664f266a7a9f388e4736f669d31ffc35","url":"./archives/2022/index.html"},{"revision":"1be15a4af11e49ddc34009d44b0ce1cc","url":"./archives/2022/page/2/index.html"},{"revision":"bf4025f5ff6205c9af30a1aad8ff41d4","url":"./archives/2023/02/index.html"},{"revision":"a01f31bee6ae510bb90b074f25ec7519","url":"./archives/2023/04/index.html"},{"revision":"87a2b9fa21f538c5c6e8691c7b197172","url":"./archives/2023/index.html"},{"revision":"581e9f0426e09de4dcc999fa845602b8","url":"./archives/2024/04/index.html"},{"revision":"d9ba3eff19c50e382e270eec34024846","url":"./archives/2024/index.html"},{"revision":"7d9c544c0de50a3e693f338282b2320e","url":"./archives/index.html"},{"revision":"4a71733940bf14aacbda305b7d2f2c68","url":"./archives/page/2/index.html"},{"revision":"316136ed1152b9a7d2e5a8629301ad29","url":"./categories/AI/index.html"},{"revision":"6dc91b73d7c2cf477893dca8a27d5176","url":"./categories/Gridea/index.html"},{"revision":"a37bf3edc994a8bf61898f196c72c951","url":"./categories/index.html"},{"revision":"fdcc0ae311224fd3c10820b0a70e12e3","url":"./categories/Vercel/index.html"},{"revision":"5469baa2bb53d1a2d8a74ac4e5896821","url":"./categories/休闲/index.html"},{"revision":"372d9755be9d2ef30bd84f25a106c20c","url":"./categories/建站/index.html"},{"revision":"3d638b9279596ba06f96f0d94340a001","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"1cfb566a425bcc8e3f7227d129206ae0","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"982f77e37adcb7ffe798a42e4df97d7f","url":"./go/index.html"},{"revision":"95cea88157be9b3e0eeaefa913e6f557","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"3eec1960a592081d9eb82be356b206d9","url":"./link/index.html"},{"revision":"61df44a33285b6f05a4fa471d802e84f","url":"./message/index.html"},{"revision":"fe5956b4b1cef4817abce0fcf31032e7","url":"./page/2/index.html"},{"revision":"bccee8b7a81f51fb5e30d29735bc9dc1","url":"./post/193912eb/index.html"},{"revision":"5889311e3277e3d590bcc12aa31928b8","url":"./post/220b8380/index.html"},{"revision":"c58ffa9d73e34f90db056cf6024ce5c9","url":"./post/24dc856c/index.html"},{"revision":"86c35102c1566ea31b08d9e42eeb2efb","url":"./post/3082b2c6/index.html"},{"revision":"f87c8ee6411bb055bc9d6494b0c2d76e","url":"./post/3df9585/index.html"},{"revision":"ac9b39fae80d24a19a57367c046255d3","url":"./post/4a17b156/index.html"},{"revision":"c9ea07beb4eac6b10da720881874219d","url":"./post/739f0a30/index.html"},{"revision":"effd3102311234b4689f1d601808e8a6","url":"./post/73fccf9a/index.html"},{"revision":"e5ae1f2b04cf2603d028b18e80ef43ff","url":"./post/7ca5704e/index.html"},{"revision":"7bffb116696cf273cfd695d5defb539a","url":"./post/7fc77154/index.html"},{"revision":"028d00a1e0b3abb319a86a7f0f666578","url":"./post/8422c4dc/index.html"},{"revision":"e76288c848e7dd31c40f90d66ad9de09","url":"./post/99c7fa1c/index.html"},{"revision":"fdad9a635d32a387ccf3e22df598834f","url":"./post/9c60e209/index.html"},{"revision":"9426d8f1d3432aff3a2186e77dd03992","url":"./post/d50c4d0e/index.html"},{"revision":"512ff4e42e3157e986ec3591ab2fb910","url":"./post/db569493/index.html"},{"revision":"f692c1ce520ed896ea7d29dbf5941df4","url":"./post/dd83a796/index.html"},{"revision":"61ccd79bddbbb4f857791f4aed370322","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"5c9bb8dfae8abe7180b03aac05cce3bf","url":"./tags/AI/index.html"},{"revision":"1680f63a0d62aa11b15ebaf0980b019d","url":"./tags/Aplayer/index.html"},{"revision":"6c015a716752e82d7442bcc5e168bdca","url":"./tags/Bing/index.html"},{"revision":"95ed0f983022abc8fb22fa9811a58960","url":"./tags/BUG/index.html"},{"revision":"249c8e0ae53b10f7a5d2a543abf0cc23","url":"./tags/css/index.html"},{"revision":"2b63b4aac8c6e619920ed0000ee39136","url":"./tags/DNS/index.html"},{"revision":"760e469be8bd19a362598a015bce203a","url":"./tags/Flash/index.html"},{"revision":"6b5f25b89e6155809baa5264b5c3de91","url":"./tags/GFW/index.html"},{"revision":"a64cbb9eca41a5a301fd2645a07dec76","url":"./tags/Gridea/index.html"},{"revision":"246e7b40464b3eaba90c766a3796e619","url":"./tags/HTML/index.html"},{"revision":"9849900b113993789149b6997374bec6","url":"./tags/index.html"},{"revision":"6b61b110fc735ed3e5f3903f3d415deb","url":"./tags/JavaScript/index.html"},{"revision":"99a1ecb4d23fe4f89f7af2d2e25d093c","url":"./tags/JQuery/index.html"},{"revision":"78900188e27b864a39198cb946b72c33","url":"./tags/MetingJS/index.html"},{"revision":"36246d09b2fad5b0bb8d812986bc3952","url":"./tags/NexT/index.html"},{"revision":"abc93b26c743e87a7e4236d2ac4c359b","url":"./tags/Vercel/index.html"},{"revision":"334305bfdbc795b5071007b0a071797c","url":"./tags/分享/index.html"},{"revision":"7b9f5a4819c1b1048483af1782044c74","url":"./tags/加载动画/index.html"},{"revision":"d9f54ad9d139e75e78e00d88bb79e565","url":"./tags/右键菜单/index.html"},{"revision":"5adba3d8355a97b75fe3e72bd39d2b67","url":"./tags/域名/index.html"},{"revision":"29bc5760e3ae5019af24e37d1381b663","url":"./tags/建站/index.html"},{"revision":"e85f93774a74c096301bb4bc93260b41","url":"./tags/插件/index.html"},{"revision":"42a03b46962756c7f4b35c8695f9304a","url":"./tags/服务器/index.html"},{"revision":"8220ac2170eca26a18ac5ef9d5c80462","url":"./tags/网页源码/index.html"},{"revision":"f5947319e9ba054143d34c352679f71e","url":"./tags/美化/index.html"}]);

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