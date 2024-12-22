const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"b9ec5f96f6fcffeb670cf80dd75348ed","url":"./404.html"},{"revision":"7a4015e39fff82bb9ed70cef6a879e35","url":"./about/index.html"},{"revision":"24718d2e902b5ae90968a46a6daab3ba","url":"./archives/2022/06/index.html"},{"revision":"4b64137eb12b9b8201d3904290142bc2","url":"./archives/2022/07/index.html"},{"revision":"bfa9aebcac1ae9f3b6f104218eb8f916","url":"./archives/2022/08/index.html"},{"revision":"91e0ace16f81c1f8080b7c75c187e4c2","url":"./archives/2022/10/index.html"},{"revision":"5a9e832acbca811ca649405516b86d6b","url":"./archives/2022/11/index.html"},{"revision":"01694b9531f762dd7f3604590ecc103b","url":"./archives/2022/12/index.html"},{"revision":"77963e8556befa15f7c69381e2bfc271","url":"./archives/2022/index.html"},{"revision":"b5adf42f3aec9e97f4f97f15e83f0f76","url":"./archives/2022/page/2/index.html"},{"revision":"4a63b554bbff4c467f29b048a1552c6d","url":"./archives/2023/02/index.html"},{"revision":"abb2e2eefc71d36d56377db16c15c311","url":"./archives/2023/04/index.html"},{"revision":"a0c81a3dc307de352d2ac2720a16e425","url":"./archives/2023/index.html"},{"revision":"8794b492e00372a36827c4fd360bac0c","url":"./archives/2024/04/index.html"},{"revision":"ff563ef7df0d5796a58cba438c50ac4f","url":"./archives/2024/05/index.html"},{"revision":"20c98d0517db2702bee1ce26614833c1","url":"./archives/2024/06/index.html"},{"revision":"26aba52d5a2d11f761dd5478d7e9fb3b","url":"./archives/2024/09/index.html"},{"revision":"788db561bca413fc4b888f7d25389a0e","url":"./archives/2024/index.html"},{"revision":"6bcc6114f4b87a64ec1e7c0e08b9897a","url":"./archives/index.html"},{"revision":"738d28ebc3da96f0e10a823133ae57d5","url":"./archives/page/2/index.html"},{"revision":"fb848e55db0376a2927dc8f59b56a0be","url":"./archives/page/3/index.html"},{"revision":"dff74f0944378fd86344544b84a227de","url":"./categories/AI/index.html"},{"revision":"5802cf26e0ce167b6fa8da15693ec425","url":"./categories/Gridea/index.html"},{"revision":"4edb6516ac53f63d483ea6c31d5784da","url":"./categories/index.html"},{"revision":"02646c5a5ed270a7af6ed053eee713c2","url":"./categories/Vercel/index.html"},{"revision":"b3d7c45483dfb67b6c226a05cf7852d0","url":"./categories/休闲/index.html"},{"revision":"c071d0f48c0abd3f8538fbe7e4b03869","url":"./categories/建站/index.html"},{"revision":"7a980747f1533367a747de2909940a67","url":"./categories/科普/index.html"},{"revision":"74740d02788c9c6bf59011ad783e4e0c","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"11c96cff4d5e2ac518956e0ccd907adf","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"31979852b01f864636c81f2d381e5836","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"4db9300aadddf15b0dcc651c802a050b","url":"./link/index.html"},{"revision":"921c8e20283c12f1f60664e423fe16aa","url":"./message/index.html"},{"revision":"88408e3f20bf4b51cffd88bfd15c7000","url":"./page/2/index.html"},{"revision":"22f5028af5d2a46b165011208c63ed08","url":"./page/3/index.html"},{"revision":"6bbcf90b3a5efae794ff8c31b591371d","url":"./post/193912eb/index.html"},{"revision":"04142271c51ca3ac21598bdc89e5f35e","url":"./post/220b8380/index.html"},{"revision":"274aa18655e9dbccc0668ffb8f273974","url":"./post/24dc856c/index.html"},{"revision":"1872262035657608bddba34d48ce039c","url":"./post/3082b2c6/index.html"},{"revision":"34a7a76204f404f894a94d28124a9bcd","url":"./post/3df9585/index.html"},{"revision":"255a6727bd17cf7f244995e3bd74d27c","url":"./post/4a17b156/index.html"},{"revision":"7bbd62f24426f2c1152f0b872ab1ca73","url":"./post/739f0a30/index.html"},{"revision":"9234f4c89a0af58ac5770eb66e74ee60","url":"./post/73fccf9a/index.html"},{"revision":"3cd8d6389c040d39dfe26efe60364cca","url":"./post/7ca5704e/index.html"},{"revision":"ed54a5bc263774c407657f0c7629123f","url":"./post/7fc77154/index.html"},{"revision":"db115dc0ec14a045d4c23b3b04d132f5","url":"./post/8097b5e3/index.html"},{"revision":"b9a541cb63adee2406f4ef4c02ed625a","url":"./post/8422c4dc/index.html"},{"revision":"1977e878acb38c2895d8a47ab23983b3","url":"./post/99c7fa1c/index.html"},{"revision":"725324c8a0c46466ed546070c4351507","url":"./post/9c60e209/index.html"},{"revision":"029e1c9b8d2ae002213578a06584c1b8","url":"./post/ae58d2f1/index.html"},{"revision":"1ef0b47f65180d123f493ca4db4ff20c","url":"./post/d4550abf/index.html"},{"revision":"8c648d9b5cb852e012046eb12d91c6bf","url":"./post/d50c4d0e/index.html"},{"revision":"db1893a4aa36194f691350bdc83c97c8","url":"./post/db569493/index.html"},{"revision":"a0b38cad1be546f83367a677ec8d809f","url":"./post/dd83a796/index.html"},{"revision":"39025570b2e970bf4a1893a582f24229","url":"./post/f82f332a/index.html"},{"revision":"b4a5268baec87645af10f8a3f899d7d4","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"bae6bc29a619c69058f742960b9a2646","url":"./tags/AI/index.html"},{"revision":"d1c3e860811970d38205798a7588d24d","url":"./tags/Aplayer/index.html"},{"revision":"aa85a9379629eb8567be56d05e74410b","url":"./tags/Bing/index.html"},{"revision":"5e8ec7ab42701f1f530616674462b76a","url":"./tags/BUG/index.html"},{"revision":"0ab45c3c7f8d75ee66342acce2700b68","url":"./tags/CDN/index.html"},{"revision":"750ab54025e95a0777d9de1689078581","url":"./tags/CMS/index.html"},{"revision":"0c7347c34551af2422301cb3f665df5d","url":"./tags/css/index.html"},{"revision":"793ecbc9c551f6198f7da7461d227678","url":"./tags/DNS/index.html"},{"revision":"467a98e321b6eaaa6439f13ea900e84d","url":"./tags/Flash/index.html"},{"revision":"6fd4f3890ca88af282f02500ba9ba3ba","url":"./tags/GFW/index.html"},{"revision":"9ffdeefc972f6c09c0e9b7fd28a9abec","url":"./tags/Gridea/index.html"},{"revision":"d8462bc83c23afec79a72087483993c1","url":"./tags/HTML/index.html"},{"revision":"11d35e6bb950778fd3398735f8103b9d","url":"./tags/index.html"},{"revision":"18cbeb40e11a308e738d4b3c326cf0e1","url":"./tags/JavaScript/index.html"},{"revision":"5c799a1eb27b602f11a2c3ab04c581f2","url":"./tags/JQuery/index.html"},{"revision":"d133973a196319716fc7ba2991564bfe","url":"./tags/MetingJS/index.html"},{"revision":"945f5fc01b7f2da093ba2e52f23d8c65","url":"./tags/NexT/index.html"},{"revision":"5d72b6f755e5fa6255788697e0456e45","url":"./tags/P2P/index.html"},{"revision":"c767eea17ddbd1d8aa7fc747d3dfa0c4","url":"./tags/RSA/index.html"},{"revision":"92de9e34a04c023726b63b292db27a12","url":"./tags/Vercel/index.html"},{"revision":"ed11fee214f8cae535f5cb21f37325c2","url":"./tags/分享/index.html"},{"revision":"218af1b6767944db2a746b35838bc0fd","url":"./tags/加密/index.html"},{"revision":"76d1921afc957d77059fbdb573b160ff","url":"./tags/加载动画/index.html"},{"revision":"98d1033d344e944abfc8b76784d2f1d8","url":"./tags/右键菜单/index.html"},{"revision":"111c419562040483e76c5b62b7c56329","url":"./tags/域名/index.html"},{"revision":"9cbf5065b48dc91f114f1415854e2ceb","url":"./tags/密码学/index.html"},{"revision":"e56cb735d873f1ab8632f43e7dfe0fa6","url":"./tags/建站/index.html"},{"revision":"25bf64ffed4ca9a862d138915f437093","url":"./tags/插件/index.html"},{"revision":"5fe74315515fe922c72542202b86b598","url":"./tags/服务器/index.html"},{"revision":"dfac7a43f36cd22cbe14b719fab1a9bb","url":"./tags/网页源码/index.html"},{"revision":"a74d337b9eff3b789d480a2ee7e9fed2","url":"./tags/美化/index.html"},{"revision":"00e3904c1a4820aeddc9cc9ea39460cf","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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