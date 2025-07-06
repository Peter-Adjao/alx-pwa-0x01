import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Android Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="310x310" href="/icons/ms-icon-310x310.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />

        {/* Theme Colors */}
        <meta name="theme-color" content="#0070f3" />
        <meta name="background-color" content="#FFFFFF" />

        {/* Apple PWA Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Cine Seek" />

        {/* General PWA Meta Tags */}
        <meta name="application-name" content="Cine Seek" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
