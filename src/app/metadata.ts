import type { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Maker UI Starter - Built for Next.js',
    template: '%s - Maker UI',
  },
  metadataBase: new URL('https://your-production-url.com/'), // Add your production URL here
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  openGraph: {
    title: 'Maker UI Starter - Built for Next.js',
    url: 'https://your-production-url.com/', // Add your production URL here
    siteName: 'Maker UI Starter',
    images: '/share.jpg', // Include a share.jpg file in your public folder
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    follow: true,
    index: true,
  },
  themeColor: '#fff',
}
