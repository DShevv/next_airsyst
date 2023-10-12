/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",
  rewrites: async () => [
    {
      source: "/cab",
      destination: "/cab.html",
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
