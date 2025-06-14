const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"8a1bdc0b6e208b79303d9f7d54959f24","url":"./404.html"},{"revision":"7d197b886e2ed417ec76e8df33b5bb8c","url":"./about/index.html"},{"revision":"2389e95f1a6c6fb9733a0f0aa3d34384","url":"./archives/2022/06/index.html"},{"revision":"d6f1b8ead36201e1179ec23b7987500f","url":"./archives/2022/07/index.html"},{"revision":"cc85dd0a8ae189ee28efb0551287871d","url":"./archives/2022/08/index.html"},{"revision":"d63b072a4d7ae7af46d1acef6574c85f","url":"./archives/2022/10/index.html"},{"revision":"591d64a76fc65c9a5adc2c664eeb2915","url":"./archives/2022/11/index.html"},{"revision":"aad97827ec90d435dbac115b9ca2f7b7","url":"./archives/2022/12/index.html"},{"revision":"8ba515e785dbbb10570fb39d3df0a76c","url":"./archives/2022/index.html"},{"revision":"5ef9a6f94775f65430dc3322ff2e7059","url":"./archives/2022/page/2/index.html"},{"revision":"d82625a8911c33cbaf003eb2e38098bf","url":"./archives/2023/02/index.html"},{"revision":"890e06ae79de2a4b0a0c079751b17dc1","url":"./archives/2023/04/index.html"},{"revision":"c1d8114408d6bf1dce7cad906b050e9e","url":"./archives/2023/index.html"},{"revision":"9c54db36f653e60883eb0cd5fc371907","url":"./archives/2024/04/index.html"},{"revision":"defb979c87115ff691e75eb10df1b6f7","url":"./archives/2024/05/index.html"},{"revision":"681fd182e9b286316771ea537a7ddf8f","url":"./archives/2024/06/index.html"},{"revision":"14764bbea1e5691c9303b82c5d8e5b6f","url":"./archives/2024/09/index.html"},{"revision":"165270992d62a7748bf5697e449beaec","url":"./archives/2024/index.html"},{"revision":"235034a6c129704d1b4823f1c1d18873","url":"./archives/index.html"},{"revision":"484759453b1d237e032f184e60d99713","url":"./archives/page/2/index.html"},{"revision":"b52c8991ddf3c84d4c7cfca3791e8ff4","url":"./archives/page/3/index.html"},{"revision":"3b26fd0717773b3f7acc31947a138415","url":"./categories/AI/index.html"},{"revision":"0656df672252307101aa89dc3c8eb4b8","url":"./categories/Gridea/index.html"},{"revision":"a3d9b73ebe4e24041d710aa97b63cf0e","url":"./categories/index.html"},{"revision":"4d6b1416cfbd4040d1e1fb691a0a55c6","url":"./categories/Vercel/index.html"},{"revision":"4d9fded5330f0a3b98f93467fd353683","url":"./categories/休闲/index.html"},{"revision":"95dfa760a02e26a8af03c583444b2ff0","url":"./categories/建站/index.html"},{"revision":"128fa7a090572ff1ab3accffec9e0ff8","url":"./categories/科普/index.html"},{"revision":"7a0d360a4aca6ef0b45efaa644aaac91","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"4e9533d461914ceb6be5c97ad2fb0c2c","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"14e1673d2d68088f93dffa5bf2feac12","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"3cdeeeca79a989feb2a1a1b38f65d62d","url":"./link/index.html"},{"revision":"798928120871293231bad0586b00d3db","url":"./message/index.html"},{"revision":"b1718f61e5bf1173cd2777c08b85449b","url":"./page/2/index.html"},{"revision":"261ab8523aab60b31ea41b685af38ba6","url":"./page/3/index.html"},{"revision":"24a40c20c608da3ea5eebebfadd65138","url":"./post/193912eb/index.html"},{"revision":"62f6389ce933db4cbdbd4b7963d9bcf2","url":"./post/220b8380/index.html"},{"revision":"0720398b20d8235698abadac01e7f90e","url":"./post/24dc856c/index.html"},{"revision":"fa84193f82ecf411ac4e6218ce7d2469","url":"./post/3082b2c6/index.html"},{"revision":"e2d4098addbcc44e453d1e9e3360f978","url":"./post/3df9585/index.html"},{"revision":"2b2fe561541a63e91168f50fecd5fbb4","url":"./post/4a17b156/index.html"},{"revision":"e40f7384aabcf8335ed5401bdbbdd157","url":"./post/739f0a30/index.html"},{"revision":"26be8a4de678cb82e893487e05dcd9d6","url":"./post/73fccf9a/index.html"},{"revision":"b412ac656653f14b7cf71a10a2a36d8c","url":"./post/7ca5704e/index.html"},{"revision":"8a428451c18155e40191c04443c6631a","url":"./post/7fc77154/index.html"},{"revision":"84728a29980a22cef2ea51f6d6d7c5cc","url":"./post/8097b5e3/index.html"},{"revision":"ce9d1c5e13adea166b49eba3ecb9f53b","url":"./post/8422c4dc/index.html"},{"revision":"cc96a6dc8c2bd32d1a1943209508df05","url":"./post/99c7fa1c/index.html"},{"revision":"0dd9fac5c804ed0bc8b421bce441809a","url":"./post/9c60e209/index.html"},{"revision":"3202e713b422aebb2ffdc50f4cea7486","url":"./post/ae58d2f1/index.html"},{"revision":"5de1a9d46ed995ff34ebd0772520bf01","url":"./post/d4550abf/index.html"},{"revision":"fc6e4ba61dd13892cfec560d7e203198","url":"./post/d50c4d0e/index.html"},{"revision":"4bb6f5d4a9111f7e3ef2a155eb1097c7","url":"./post/db569493/index.html"},{"revision":"eebed0cdd6bfd85bcabe74de3feeb9f2","url":"./post/dd83a796/index.html"},{"revision":"b60a8c9b19d2fe547dbe1ad6bc011e5d","url":"./post/f82f332a/index.html"},{"revision":"83bbbbc5c1e2337497edfdb7366ab7ff","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"1dbecd4d58c01c4391f997db054eacb7","url":"./tags/AI/index.html"},{"revision":"c21d0aa505841f86b4721e1224de0394","url":"./tags/Aplayer/index.html"},{"revision":"5fb3b87b2b8fb5d123a5b5560d158521","url":"./tags/Bing/index.html"},{"revision":"6cd4b451dc9179fb61fe4e75b153a398","url":"./tags/BUG/index.html"},{"revision":"b90dd37b486be8fad5da4155a6fbb125","url":"./tags/CDN/index.html"},{"revision":"6ee7c2e0d12733a61855299d7fb49008","url":"./tags/CMS/index.html"},{"revision":"1f23eadf740dec22d4ba2347f67d7087","url":"./tags/css/index.html"},{"revision":"0289b420bacaa202f7892756f9617074","url":"./tags/DNS/index.html"},{"revision":"15ff154def854bd139cab406372666f0","url":"./tags/Flash/index.html"},{"revision":"7be406aa25bfd35f6e7296854032c7ef","url":"./tags/GFW/index.html"},{"revision":"348cd998019edec2390edb8e4a5f756c","url":"./tags/Gridea/index.html"},{"revision":"1ee121ae75989a81561596e22f24cca6","url":"./tags/HTML/index.html"},{"revision":"a32eee082c5e2f38a37c883fd8233005","url":"./tags/index.html"},{"revision":"b92da835a8ad751a71d9ee985fcc2da5","url":"./tags/JavaScript/index.html"},{"revision":"a29150fb968f964be4026f6c6e528c97","url":"./tags/JQuery/index.html"},{"revision":"7845435b449d01edaa127cf3c3609018","url":"./tags/MetingJS/index.html"},{"revision":"ccd806f62dc7cbbb9a49c5567f664add","url":"./tags/NexT/index.html"},{"revision":"1545f267734dfc8149e2b282f1859be4","url":"./tags/P2P/index.html"},{"revision":"74d4ee256df8aee83a8f7ab72ef6291f","url":"./tags/RSA/index.html"},{"revision":"c6e95fc730f7ae2aa12c89ceeb39f451","url":"./tags/Vercel/index.html"},{"revision":"c90f7346bffaf76c3da5d662f76edd4b","url":"./tags/分享/index.html"},{"revision":"c6dafdd7989631265a662728f5777ea8","url":"./tags/加密/index.html"},{"revision":"6e2a7fc152134021251d94453c67afc6","url":"./tags/加载动画/index.html"},{"revision":"dcff1aa1fa80647379849689e12e76fb","url":"./tags/右键菜单/index.html"},{"revision":"3816a82a43959b62a217b0a92a6560b2","url":"./tags/域名/index.html"},{"revision":"bf575975a0753848d841e6b55070365c","url":"./tags/密码学/index.html"},{"revision":"f7a2476ff585cd0f77729c4ebf9b4185","url":"./tags/建站/index.html"},{"revision":"bc7a90cd19b798d856a5c27ca3316d27","url":"./tags/插件/index.html"},{"revision":"acf192b7d0a15c6a502a19dcb6e0a676","url":"./tags/服务器/index.html"},{"revision":"292acc0ce1a545bea349958fac6ea9a8","url":"./tags/网页源码/index.html"},{"revision":"4e1722d3ce6b1d5e060c63f1df1b23b6","url":"./tags/美化/index.html"},{"revision":"5468313aab7a17cc66157b4cf9df0ea7","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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