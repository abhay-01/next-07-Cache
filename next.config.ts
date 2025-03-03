const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled:process.env.ANALYZE === 'true'
});

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging:{
    fetches:{
      fullUrl: true,
    }
  },
  images: {
    domains: ['picsum.photos', 'jsonplaceholder.typicode.com','cdn.dummyjson.com'],
  },
  /* config options here */
};

export default withBundleAnalyzer(nextConfig);