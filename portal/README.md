# panel

## meta 정보 변경 방법

```ts
// NOTE: src/app/layout.tsx

export const metadata: Metadata = {
  title: {
    default: {기본 브라우저 타이틀},
    template: {여긴 실상 쓸 일 없을 듯},
  },
  description: {설명},
  viewport: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
  icons: {
    // NOTE: favicon을 public 폴더 내에 위치시키면 됨
    icon: [
      { sizes: "32x32", url: "/favicon-32x32.png" },
      { sizes: "16x16", url: "/favicon-16x16.png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
};
```

## 이미지 사용 시

```ts
// NOTE: next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  experimental: {
    appDir: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    // NOTE: 이미지 사용되는 hostname이 추가되었을 경우 하단의 형식처럼 추가하면 됨 (도메인만)
    // NOTE: github.com/zerohertz인 경우 github.com 까지만 적으면 됨
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

```

## 링크 추가가 필요한 경우

```ts
// NOTE: src/common/constants/app.ts

export const APP_LIST: AppInterface[] = [
  {
    name: {이름},
    href: {링크},
    // NOTE: 위의 next.config.ts 예시와 같이 이미지 호스트가 추가된 경우 next.config.ts 까지 추가할 것
    imageSrc: {이미지 소스},
  },
];

```