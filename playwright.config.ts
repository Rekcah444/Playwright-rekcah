import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir:"./",
    reporter:"html",
    timeout:60000,
    expect:{timeout:10000},
    // retries:3,
    grep:/@sanity/,
    tag:'@sanity',

    use:{
        viewport: { width: 1280, height: 720 },
        screenshot:'only-on-failure',
        video:'on-first-retry',
        trace:'on-first-retry'
    }
});