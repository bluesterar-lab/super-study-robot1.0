import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['*.dev.coze.site'],
  // 静态导出配置（用于 Netlify Pages）
  output: 'export',
  distDir: 'out',
  // 图片配置（静态导出不支持图片优化）
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lf-coze-web-cdn.coze.cn',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
