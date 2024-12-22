const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"ee2dcd821220b4bc20024182ccdcb0d9","url":"./404.html"},{"revision":"cfc0e7bfa455e25800867977a6269bbc","url":"./about/index.html"},{"revision":"d0974d55222f31187552770c03cc6156","url":"./archives/2022/06/index.html"},{"revision":"d745d5152a815c06805c6a63b4a2b127","url":"./archives/2022/07/index.html"},{"revision":"c1edade89779d18acf6b293dd9bbbfd3","url":"./archives/2022/08/index.html"},{"revision":"a70e2a8061f04373dc34a55908491e38","url":"./archives/2022/10/index.html"},{"revision":"22c8ba653dfede89efcebb96e6e15ac2","url":"./archives/2022/11/index.html"},{"revision":"2c498bde3e4ae2ab8142f0f6273df497","url":"./archives/2022/12/index.html"},{"revision":"3b230503471101899e775d41919aedd9","url":"./archives/2022/index.html"},{"revision":"6ea799b16b65555fe242d0671ce4966a","url":"./archives/2022/page/2/index.html"},{"revision":"2af1029d28c947a4c8628af37aada9a7","url":"./archives/2023/02/index.html"},{"revision":"0bc1d7840c4991a41e9414afdf10af8b","url":"./archives/2023/04/index.html"},{"revision":"2cd09643e014174c7d6cc18ec2e08efe","url":"./archives/2023/index.html"},{"revision":"895fef5def8f9151064559a30a81f9a2","url":"./archives/2024/04/index.html"},{"revision":"6e6ab3be04422c9e6ae47d0693d5a0c0","url":"./archives/2024/05/index.html"},{"revision":"c211a17687b89c161abb76d127bfbcd8","url":"./archives/2024/06/index.html"},{"revision":"99d674fe96afe5e946ec31224081e50f","url":"./archives/2024/09/index.html"},{"revision":"7ca4c4a533863164b2118832bf31220e","url":"./archives/2024/index.html"},{"revision":"bf325ecdb614345ea20c2ac21403a788","url":"./archives/index.html"},{"revision":"6b51f3b9aaafa11d78efcbb35d5fc0b3","url":"./archives/page/2/index.html"},{"revision":"40c77ccfdd3b6a99c439eea756d851a3","url":"./archives/page/3/index.html"},{"revision":"6c5c017b1646629f068bcbcf28057055","url":"./categories/AI/index.html"},{"revision":"5c80d2523e6039da40195afd8e2bb8ab","url":"./categories/Gridea/index.html"},{"revision":"5a78cf3ffde50f8be5ac3c4e1bda5eca","url":"./categories/index.html"},{"revision":"a7f538c103776dcfe519fef8019c95ff","url":"./categories/Vercel/index.html"},{"revision":"4aa1160050aad1a589d48604a723bfcb","url":"./categories/休闲/index.html"},{"revision":"f0c9a81cc6ff4ffa1b2905241096749b","url":"./categories/建站/index.html"},{"revision":"8918dea08b16bc0c79051363f8637440","url":"./categories/科普/index.html"},{"revision":"76159045b4037ad83109a9e47d977bd3","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"6e6b995801f8e9b96cf7bc8a17baabe1","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"059297bbfb6414277cb9c33f167a81a8","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"7333acea1181b31861c9060ac4579916","url":"./link/index.html"},{"revision":"9ca7a852fa53a7fb266d03aa10c52266","url":"./message/index.html"},{"revision":"a3b797828d6eda22ac4de7b44cbd63df","url":"./page/2/index.html"},{"revision":"e00290cdeb858060aff4a0a48f3ecac5","url":"./page/3/index.html"},{"revision":"33fa994fc113f3a275d2b729bc1429cf","url":"./post/193912eb/index.html"},{"revision":"a81e29c7e51221b4c34cbec3189ef3c9","url":"./post/220b8380/index.html"},{"revision":"c0f38b219cdd712cf028332457bce7ac","url":"./post/24dc856c/index.html"},{"revision":"a42d26684885c1973dd25786a1d86cf8","url":"./post/3082b2c6/index.html"},{"revision":"c542234377f43444a6b2fe0d180d18ee","url":"./post/3df9585/index.html"},{"revision":"e02a5364889604928427d23c805eb2b5","url":"./post/4a17b156/index.html"},{"revision":"415efcf3c4ebcdca557f3842d16a1598","url":"./post/739f0a30/index.html"},{"revision":"cba83b585b0edd8ee8751a6cf5d6ba13","url":"./post/73fccf9a/index.html"},{"revision":"67f15ee61a93f6889fe0bbfda84fa77d","url":"./post/7ca5704e/index.html"},{"revision":"bab49e20cd201f4baa38535711155386","url":"./post/7fc77154/index.html"},{"revision":"8a62fe149ef84e9dcd31546292f84612","url":"./post/8097b5e3/index.html"},{"revision":"be9f422288adc51270dfc68e2ba7b919","url":"./post/8422c4dc/index.html"},{"revision":"844334a6dc4a82098fb976f78bdc0da9","url":"./post/99c7fa1c/index.html"},{"revision":"fb447e50774e9a8abad71be498ce4c96","url":"./post/9c60e209/index.html"},{"revision":"d44241b3dd3efbd73fa75e8fb42ac8b0","url":"./post/ae58d2f1/index.html"},{"revision":"ec5e2fbcd3dbe998c48c01b0cd808bdd","url":"./post/d4550abf/index.html"},{"revision":"1827c1df4251813f6d93f43164d31ffc","url":"./post/d50c4d0e/index.html"},{"revision":"69fd4c1bfc4d6ba66665213b0792a70a","url":"./post/db569493/index.html"},{"revision":"6c8d34e228af55876ebfbe4459942d03","url":"./post/dd83a796/index.html"},{"revision":"683c2cedae3e4e005771b3b7a1591e0b","url":"./post/f82f332a/index.html"},{"revision":"9a7ae7e2d0c7353daca5b260f7961ccd","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"30f3bcbdf63314cc069345cc457e55b5","url":"./tags/AI/index.html"},{"revision":"03193194aad8785fc1017ae0db17f233","url":"./tags/Aplayer/index.html"},{"revision":"872fc5ab8e8a3d4242d2ec1c7f73b540","url":"./tags/Bing/index.html"},{"revision":"5ca8563fcb4876151dd0beba7e3e69d5","url":"./tags/BUG/index.html"},{"revision":"7fd9f7bb67224f4b79a731c4f9b13baa","url":"./tags/CDN/index.html"},{"revision":"98738dd3782332717425f9348964fd5d","url":"./tags/CMS/index.html"},{"revision":"512e53903f98c3c6bedf11dd435b5464","url":"./tags/css/index.html"},{"revision":"582c57ba14a284d3d44eb57ae763daa7","url":"./tags/DNS/index.html"},{"revision":"d33ecb71d02cf42cee2932e538bb615b","url":"./tags/Flash/index.html"},{"revision":"7e2cf48abc45dde36b0c01cab9a78959","url":"./tags/GFW/index.html"},{"revision":"2311c2d59701d8ebdf2ed19171ee9aa6","url":"./tags/Gridea/index.html"},{"revision":"a368ab2575ddc0c3af792ad1a26693e2","url":"./tags/HTML/index.html"},{"revision":"0fa421036c4f3858ff67413446df0502","url":"./tags/index.html"},{"revision":"220e662f3d142ce63cba4a8769fa9ad6","url":"./tags/JavaScript/index.html"},{"revision":"3df80d238e2e98b47f4c5b639a4095e8","url":"./tags/JQuery/index.html"},{"revision":"53e12b5fe6804b75b6eb0107b16a1fee","url":"./tags/MetingJS/index.html"},{"revision":"1c1e91e0e6b70c939a9d50939ab4572f","url":"./tags/NexT/index.html"},{"revision":"208b38524dc210e3967b163f3d1fe680","url":"./tags/P2P/index.html"},{"revision":"0d281fe988d8e685eddfa487cec8f790","url":"./tags/RSA/index.html"},{"revision":"265491115c79bc036c0c15f4c7e97f07","url":"./tags/Vercel/index.html"},{"revision":"c36c8a68eaee1aaa881e1a3b82851722","url":"./tags/分享/index.html"},{"revision":"6fdd0083368d7dec4f5a423e3f487bdf","url":"./tags/加密/index.html"},{"revision":"e223789ba5adeecbc1b172169d36f996","url":"./tags/加载动画/index.html"},{"revision":"d2f8813182e44ef3ee3b3f7238940283","url":"./tags/右键菜单/index.html"},{"revision":"df9f5f30d8ff8d273b1c2867c249f3fd","url":"./tags/域名/index.html"},{"revision":"b0534c9b7474fef41821ccf114c76806","url":"./tags/密码学/index.html"},{"revision":"d95f2af7e69ccb97072a1998b500cce7","url":"./tags/建站/index.html"},{"revision":"2ff225d1f098f3b32d54f62e4f3144f2","url":"./tags/插件/index.html"},{"revision":"079144fd7000081105608a32200394d5","url":"./tags/服务器/index.html"},{"revision":"aa73f3d2115654a777574403fd6c8663","url":"./tags/网页源码/index.html"},{"revision":"543469547350c98547ce9280494c8ccb","url":"./tags/美化/index.html"},{"revision":"e03e65e920de4dc2260d52ff80f3ad72","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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