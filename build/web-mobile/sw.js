importScripts('https://static.biubiupiu.cn/workbox-sw.js');

workbox.setConfig({
    debug: false
});

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

var cacheList = ['/index.html', '/game', '/game/', '/game/index.html'];

workbox.routing.registerRoute(
    function(event) {
        // 需要缓存的HTML路径列表
        if (~cacheList.indexOf(event.url.pathname)) return true;
        else return false;
    },
    new workbox.strategies.NetworkFirst({
        cacheName: 'html-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 10
            })
        ]
    })
);

workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.StaleWhileRevalidate({
        // Use a custom cache name.
        cacheName: 'js-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30
            })
        ]
    })
);

workbox.routing.registerRoute(
    /\.(?:json|bin|mp3)$/,
    new workbox.strategies.StaleWhileRevalidate({
        // Use a custom cache name.
        cacheName: 'json-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30
            })
        ]
    })
);

workbox.routing.registerRoute(
    // Cache CSS files.
    /\.css$/,
    // Use cache but update in the background.
    new workbox.strategies.StaleWhileRevalidate({
        // Use a custom cache name.
        cacheName: 'css-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 20
            })
        ]
    })
);

workbox.routing.registerRoute(
    // Cache image files.
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    // Use the cache if it's available.
    new workbox.strategies.StaleWhileRevalidate({
        // Use a custom cache name.
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 40
            })
        ]
    })
);
