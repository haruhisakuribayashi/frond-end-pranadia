self.addEventListener("message", async (event) => {
  if (event.data.action === "cache-on-demand") {
    const cache = await caches.open("static-image-assets");
    const isCached = await cache.match("poli.png");
    if (!isCached) {
      const res = await fetch("poli.png");
      await cache.put("poli.png", res);
    }
  }
  event.ports[0].postMessage(true);
});
