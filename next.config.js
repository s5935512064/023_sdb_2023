// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
    images: {
        domains: ["localhost", "swiperjs.com", "vercel.app", 'scontent-kul2-2.xx.fbcdn.net', 'scontent.fbkk10-1.fna.fbcdn.net', "scontent-kut2-1.xx.fbcdn.net", "scontent.fbkk14-1.fna.fbcdn.net", "scontent-kul3-1.xx.fbcdn.net", "rmsdev.ssdapp.net"],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
    },

    transpilePackages: ['vanilla-cookieconsent'],
    webpack: (config, { isServer }) => {
        if (isServer) {
            // @ts-ignore
            require("./scripts/sitemap-generator");
        }
        return config;
    },

}

module.exports = nextConfig
