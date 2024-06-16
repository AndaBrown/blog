const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"617bab846406049b3994ba32e2fbcd10","url":"./404.html"},{"revision":"73a2682c75656a10c42755b1f9568083","url":"./about/index.html"},{"revision":"f3d02c9e20c540abb1ba1bddc5749206","url":"./archives/2022/06/index.html"},{"revision":"09eb181083faca62ee798882fbe8f79c","url":"./archives/2022/07/index.html"},{"revision":"88d276343318718361e43c7ce58d3ce8","url":"./archives/2022/08/index.html"},{"revision":"c39489c9980c040105f02d761d0759dc","url":"./archives/2022/10/index.html"},{"revision":"fcc5cd58cd0a62698caf9b972397b6fd","url":"./archives/2022/11/index.html"},{"revision":"08f47dc02ac9547dbf34fcedda69da52","url":"./archives/2022/12/index.html"},{"revision":"e777dacc8636657abeeb8ed3e45d6017","url":"./archives/2022/index.html"},{"revision":"d74d4f7be0b0c01d827aa1c649a9a4f9","url":"./archives/2022/page/2/index.html"},{"revision":"7fde05a00cb24307ed20124d4ddc8823","url":"./archives/2023/02/index.html"},{"revision":"9ec7b1470a8181fe3504103d4f8d7620","url":"./archives/2023/04/index.html"},{"revision":"9e3224e80296a483d3d0b07e673344cd","url":"./archives/2023/index.html"},{"revision":"a783dde6a64fcca12eb72d6561e7a019","url":"./archives/2024/04/index.html"},{"revision":"06ee0700764e9249db5e37c0a19002ed","url":"./archives/2024/05/index.html"},{"revision":"6ec45dc98ddd2f1be5f8914a34e86038","url":"./archives/2024/06/index.html"},{"revision":"56de1040114ee06744012be8a9ebaeea","url":"./archives/2024/index.html"},{"revision":"284f29a78b57bacc46270530d319b0d0","url":"./archives/index.html"},{"revision":"10f3e2be4fefa8f6db051418a7052207","url":"./archives/page/2/index.html"},{"revision":"329b8b1777fa45dcbfb23e467b15213d","url":"./categories/AI/index.html"},{"revision":"b300e4f90dc2f239005dae0c315da06e","url":"./categories/Gridea/index.html"},{"revision":"14effeea457e49850a07c75d7de3fc0a","url":"./categories/index.html"},{"revision":"9ed501959d12c18128ba4c88d58e213d","url":"./categories/Vercel/index.html"},{"revision":"6510c41017c5fb6c99f95ccd99e66d51","url":"./categories/休闲/index.html"},{"revision":"c41272c491234a478805172cee898baa","url":"./categories/建站/index.html"},{"revision":"4d7f045dee95b744b24d7e21d36ea6ce","url":"./categories/科普/index.html"},{"revision":"0c4c390ad9509b59f96ef775e2f299c1","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"800d62baaefb3dfdba92e836c59f06a5","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"e927ce0f52aa7a8faa564ac00240dfdd","url":"./go/index.html"},{"revision":"1fd1192d3eedda752caa74690779cc92","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"4abd72f616aea1b5e5b290c185ef46bd","url":"./link/index.html"},{"revision":"a9e8290b316851a680db69263a8e13a6","url":"./message/index.html"},{"revision":"7f550e5e75990f0b589785c0ab2c4e84","url":"./page/2/index.html"},{"revision":"64c534adf85b19664c44352ebfcfb43c","url":"./post/193912eb/index.html"},{"revision":"5740fe018214877f42c0dd308cd9c1f4","url":"./post/220b8380/index.html"},{"revision":"0e981972f63d7c94f71747b09cc28b12","url":"./post/24dc856c/index.html"},{"revision":"0abd066685f43496019eef7fdca572e3","url":"./post/3082b2c6/index.html"},{"revision":"988716e18efdd781116c58a0c3c93646","url":"./post/3df9585/index.html"},{"revision":"489b163b19162e925909c79781f56d21","url":"./post/4a17b156/index.html"},{"revision":"3235c2dad8bc334b1f625a0f81cbab73","url":"./post/739f0a30/index.html"},{"revision":"92dbd787a5f88d1bc1fde6865aa14280","url":"./post/73fccf9a/index.html"},{"revision":"9b4181b4dbd5aef7bd34d6ab76ecf652","url":"./post/7ca5704e/index.html"},{"revision":"4aafc80fe55ccd9ac9584746b02e4367","url":"./post/7fc77154/index.html"},{"revision":"ea2cc55f7c8c66895e2eab9f360e2534","url":"./post/8097b5e3/index.html"},{"revision":"2019480a05aed71c4f61a9994de0bf67","url":"./post/8422c4dc/index.html"},{"revision":"a0d03cd4f82ad98d1de27bc16a4c7f4a","url":"./post/99c7fa1c/index.html"},{"revision":"baa811ed7310a0391274af43fa7beb7d","url":"./post/9c60e209/index.html"},{"revision":"0f8a2cb97e4f1c0495def7688d5e7354","url":"./post/ae58d2f1/index.html"},{"revision":"79576ca08493c63067a07cc00e3232f3","url":"./post/d4550abf/index.html"},{"revision":"aaaf998d06fd896c5e8eb89263958966","url":"./post/d50c4d0e/index.html"},{"revision":"793a7ad70e87fcb7f0ea2b6f85e53cc6","url":"./post/db569493/index.html"},{"revision":"1700e69fbd390860f03f7fd12cc3c769","url":"./post/dd83a796/index.html"},{"revision":"4f18ccc4974e539f3082fe8c0a76de90","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"50c0ddeda37fb1cc703d40c76c5ea016","url":"./tags/AI/index.html"},{"revision":"53c2188d7505da0528ac86934e2fba44","url":"./tags/Aplayer/index.html"},{"revision":"4cf3d87777237ec2c76cbadada17e263","url":"./tags/Bing/index.html"},{"revision":"6457c928ba7cafed5b0b98d6cf207a51","url":"./tags/BUG/index.html"},{"revision":"469853b48e38e9ba7ffeae9deedfaef7","url":"./tags/CDN/index.html"},{"revision":"193bf9f6e87a6b1e99e7a21d655ce18b","url":"./tags/CMS/index.html"},{"revision":"0ad084b264b12bf869647e8ba5678c8e","url":"./tags/css/index.html"},{"revision":"5da13300bf3f246946fbfdce82d2585e","url":"./tags/DNS/index.html"},{"revision":"f9fc23d47bf55b35a7f5271e3f7f0179","url":"./tags/Flash/index.html"},{"revision":"a9e4e86345e81c00eccf98664a235d04","url":"./tags/GFW/index.html"},{"revision":"bfd5491f4190a79229d8b273dc8fcc4f","url":"./tags/Gridea/index.html"},{"revision":"53677e11602eefe7e5c7e3a16adf1a30","url":"./tags/HTML/index.html"},{"revision":"03de4267e0349403b1d6af54a1c747cc","url":"./tags/index.html"},{"revision":"47729df8c00e6af821c5705cea20ef84","url":"./tags/JavaScript/index.html"},{"revision":"170821e3c06ee49700bbc08ec012eeee","url":"./tags/JQuery/index.html"},{"revision":"4587e60be5da6e52fd43df698b6de4ec","url":"./tags/MetingJS/index.html"},{"revision":"ca3afc49a823f274f40c6b4b2e141f18","url":"./tags/NexT/index.html"},{"revision":"3009a1909be2980104c54e6d2850c6a4","url":"./tags/RSA/index.html"},{"revision":"a5bd1586d27d5b47df42c389bb367c6d","url":"./tags/Vercel/index.html"},{"revision":"21a59514710bbd88e5cca0150cee9500","url":"./tags/分享/index.html"},{"revision":"ea86a1d5a8834b4eb048b2866d219644","url":"./tags/加密/index.html"},{"revision":"720ab3a1aa3806d7230ab1c52fd88161","url":"./tags/加载动画/index.html"},{"revision":"92d47e97e18de383c90e2c39334871c3","url":"./tags/右键菜单/index.html"},{"revision":"a2cff96c7cb861717dc19b9e4ba2a2d2","url":"./tags/域名/index.html"},{"revision":"d87da5aa226389d4af2727b5c919ccd6","url":"./tags/密码学/index.html"},{"revision":"332eaad814611be4dbe6788cede67bec","url":"./tags/建站/index.html"},{"revision":"2ca16b95c606adaab11fc06ed05a7dac","url":"./tags/插件/index.html"},{"revision":"2292eae0fb44adde8d1262712326ef3e","url":"./tags/服务器/index.html"},{"revision":"8455bd721957ec67a208c1e4e41ff660","url":"./tags/网页源码/index.html"},{"revision":"ec9a3ea98295a89431ed89e6e3fb3995","url":"./tags/美化/index.html"},{"revision":"91f17af8f3e4b3243e13b5d10fe8699c","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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