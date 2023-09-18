import type { Metadata } from 'next'
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";

import ThemeRegistry from '@/styles/ThemeRegistry'
import { TssCacheProvider } from 'tss-react';

import { Header } from '@/components';

import '../public/font/stylesheet.css'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Created by Thipyada - Gigi - Sae-zheng',
}

export default function RootLayout(props: { children: any; }) {
  const { children } = props;


  return (
    <html lang="en">
      <head></head>
      <NextAppDirEmotionCacheProvider options={{ "key": "mui" }}>
        <NextAppDirEmotionCacheProvider
          options={{ "key": "tss" }}
          CacheProvider={TssCacheProvider}
        >
          <ThemeRegistry>
            <body style={{
              margin: 0,
              padding: 0,
              overflow: 'hidden',
              cursor: 'wait',
              background: 'rgba(39, 67, 54, 1)',
              color: '#ece7e1'
            }}>
              <Header />
              {children}
            </body>
          </ThemeRegistry>
        </NextAppDirEmotionCacheProvider>
      </NextAppDirEmotionCacheProvider>
    </html >
  );
}
