const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"9f21b3dcd7f1f88df19e2e7b65d75109","url":"./about/index.html"},{"revision":"9ea0dfc84c96259ffd2710d03d9090c7","url":"./archives/2022/06/index.html"},{"revision":"4b4c0a3aa7a6eb790e3456c2b5eaea79","url":"./archives/2022/07/index.html"},{"revision":"430555226a77cd6bfd339350eba9ef10","url":"./archives/2022/08/index.html"},{"revision":"06fb1fb612d151d70f65df1444bf81c1","url":"./archives/2022/10/index.html"},{"revision":"3d99789354a1c423f4997f42b23940c0","url":"./archives/2022/11/index.html"},{"revision":"c2911cb033a1fe918edcb2122d07aff9","url":"./archives/2022/12/index.html"},{"revision":"35d25b857013006d8aa571d4b1f9529b","url":"./archives/2022/index.html"},{"revision":"1519639f78bca1c0c22a81d86002edf0","url":"./archives/2022/page/2/index.html"},{"revision":"9464d6dd0e071946564fc2dc2ce24cb5","url":"./archives/2023/02/index.html"},{"revision":"124d7b89225717204818b772249d4e46","url":"./archives/2023/04/index.html"},{"revision":"10351edd663bd083f1b466d9222682dd","url":"./archives/2023/index.html"},{"revision":"284b2290fac7566857c6708be5777f93","url":"./archives/2024/04/index.html"},{"revision":"63f2bd082b6e39f931803ff13f1324c7","url":"./archives/2024/05/index.html"},{"revision":"14c6a95c4e203a85927e4f8a1a03045e","url":"./archives/2024/06/index.html"},{"revision":"b87d5ed8a380ec7e4d3584ee8a015616","url":"./archives/2024/09/index.html"},{"revision":"aee745c23b539a5d2f21411b3d5d1efa","url":"./archives/2024/index.html"},{"revision":"b76706d92dd333fa3fc1216b3a6330b4","url":"./archives/index.html"},{"revision":"b3a524f04af48b7a33c44ec803d24d68","url":"./archives/page/2/index.html"},{"revision":"7f274cabee352c08cadc440dd79bd119","url":"./archives/page/3/index.html"},{"revision":"0f75167b0fb6c979e059f379d92b1eae","url":"./categories/AI/index.html"},{"revision":"3906a139a534d158483ab7b7aa8c32b9","url":"./categories/Gridea/index.html"},{"revision":"bf49b5fbc2a63417efc0a236ba12a46e","url":"./categories/index.html"},{"revision":"082a350282074bbdd59e2854a0005ec3","url":"./categories/Vercel/index.html"},{"revision":"03067875fa9367b46374a1b06380f86a","url":"./categories/休闲/index.html"},{"revision":"c3c6b4318014f8782adfc73c825fbd40","url":"./categories/建站/index.html"},{"revision":"429651fdde395f0d1df285d6ad198f73","url":"./categories/科普/index.html"},{"revision":"24bc9473f1c6078f9a25acc53552aa41","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"ed9c940fd10786e298619dbe8a269fed","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"5fba42754cd3e1090956314133c599c4","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c6c4560767f9ea3eeaa6d313f2d746f8","url":"./link/index.html"},{"revision":"64aa943ec4289bf10150594d5d2f508e","url":"./message/index.html"},{"revision":"f25f0af32e547c733f4879132992276f","url":"./page/2/index.html"},{"revision":"d9b0d6c6d75b6cec8ea000fd9c2563d4","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"3b68dcdbe283071256e38d00babae4bd","url":"./tags/AI/index.html"},{"revision":"5eae82854484c2251337003558e1a499","url":"./tags/Aplayer/index.html"},{"revision":"4718dbba5675d011d7926f654589e5c1","url":"./tags/Bing/index.html"},{"revision":"971d70f0b0a1cad2f94d96bc56034fa3","url":"./tags/BUG/index.html"},{"revision":"4be43e11cf2d54042c7006c97fba95fa","url":"./tags/CDN/index.html"},{"revision":"9c2307dbae87df59eef76c3c709e4246","url":"./tags/CMS/index.html"},{"revision":"859065e84a7bee847019f3db69e46d94","url":"./tags/css/index.html"},{"revision":"7329f140ecc1659bf0b488f1a23e412f","url":"./tags/DNS/index.html"},{"revision":"816ab446ba5c0a4270f11d09b28793f0","url":"./tags/Flash/index.html"},{"revision":"458483da18f01ec47729c78949c0cfce","url":"./tags/GFW/index.html"},{"revision":"a9fef3e639990bad3014043479eefbf8","url":"./tags/Gridea/index.html"},{"revision":"fac4bc30c1e7aef979b5593c530427df","url":"./tags/HTML/index.html"},{"revision":"192287f4e6eeaceece0126b73a92d374","url":"./tags/index.html"},{"revision":"9d5cd90965b29d7985e2ce02999857dd","url":"./tags/JavaScript/index.html"},{"revision":"f3041bac359602c188cfcabb00daf7db","url":"./tags/JQuery/index.html"},{"revision":"3de225d350bad8af4ced1b26c2a0deee","url":"./tags/MetingJS/index.html"},{"revision":"383778445afdadadedd401f68d4290af","url":"./tags/NexT/index.html"},{"revision":"1b2e242bd374d084e5794fa9d499b3b1","url":"./tags/P2P/index.html"},{"revision":"95071998eec8f9d8cef6ef89c735e4c6","url":"./tags/RSA/index.html"},{"revision":"8ae29f1650b4eb9968389a6fe4f6a2e0","url":"./tags/Vercel/index.html"},{"revision":"493d8e72e1d1cd7074cb801a4be9e588","url":"./tags/分享/index.html"},{"revision":"ee2cb061ff666c032f1fe252a6d79c3d","url":"./tags/加密/index.html"},{"revision":"7cb189611fe8c7969c43aa7130c7bdba","url":"./tags/加载动画/index.html"},{"revision":"ebd0edf9cedbd2503195ac02b1d313a0","url":"./tags/右键菜单/index.html"},{"revision":"f1d3c0ee298abd9f5127dac41db2b997","url":"./tags/域名/index.html"},{"revision":"5539d700e85690d1bcff55bc1467c95f","url":"./tags/密码学/index.html"},{"revision":"cca5479b3534a72e2557775ade62c417","url":"./tags/建站/index.html"},{"revision":"becb75872bca2e4709f75a58e3be8f44","url":"./tags/插件/index.html"},{"revision":"7d00207dfffb4d3fc7d2895603d8d812","url":"./tags/服务器/index.html"},{"revision":"306c9041432cc2949d27aef5046da2a7","url":"./tags/网页源码/index.html"},{"revision":"7690e4835588d62adb4d1874ef84cb9e","url":"./tags/美化/index.html"},{"revision":"3facb370ee639f26b6556a04fc25a073","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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