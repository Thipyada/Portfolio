import type { Metadata } from 'next'
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";

import ThemeRegistry from '@/styles/ThemeRegistry'
import { TssCacheProvider } from 'tss-react';

import { Header } from '@/components';

import '../public/font/stylesheet.css'
import useStyles from '@/styles/global.styles';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Created by Thipyada - Gigi - Sae-zheng',
}

export default function RootLayout(props: { children: any; }) {
  const { children } = props;
  const { classes } = useStyles()


  return (
    <html lang="en">
      <head></head>
      <NextAppDirEmotionCacheProvider options={{ "key": "mui" }}>
        <NextAppDirEmotionCacheProvider
          options={{ "key": "tss" }}
          CacheProvider={TssCacheProvider}
        >
          <ThemeRegistry>
            <body className={classes.body}>
              <Header />
              {children}
            </body>
          </ThemeRegistry>
        </NextAppDirEmotionCacheProvider>
      </NextAppDirEmotionCacheProvider>
    </html >
  );
}
