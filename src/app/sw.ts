// import { defaultCache } from "@serwist/next/browser";
import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";
import { installSerwist } from "@serwist/sw";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;
const revision = crypto.randomUUID();

installSerwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
  offlineAnalyticsConfig: true,
  fallbacks: {
    entries: [
      {
        url: "/offline",
        revision: revision,
        matcher({ request }) {
          return request.destination === "document";
        },
      },
    ],
  },
  // importScripts: ["custom-sw.js"],
});

// serwist.addEventListeners();
