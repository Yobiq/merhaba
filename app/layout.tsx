import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://habesha-merhaba.nl'),
  title: 'Merhaba Habesha Restaurant | Ethiopisch & Eritrees — Apeldoorn',
  description:
    'Traditionele Habesha-gerechten in Apeldoorn. Het soort voedsel dat je niet kunt weerstaan. Reserveer je tafel online.',
  keywords: [
    'Ethiopisch restaurant Apeldoorn',
    'Eritrees restaurant',
    'Habesha eten',
    'injera',
    'vegan Ethiopisch',
    'Merhaba Habesha',
  ],
  openGraph: {
    title: 'Merhaba Habesha Restaurant',
    description: 'Traditionele Ethiopische en Eritrese keuken in Apeldoorn.',
    url: 'https://habesha-merhaba.nl',
    siteName: 'Merhaba Habesha',
    locale: 'nl_NL',
    type: 'website',
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630, alt: 'Merhaba Habesha Restaurant' }],
  },
}

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Merhaba Habesha Restaurant',
  image: 'https://habesha-merhaba.nl/images/hero-bg.jpg',
  servesCuisine: ['Ethiopian', 'Eritrean'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Brinklaan 18',
    addressLocality: 'Apeldoorn',
    postalCode: '7311 LB',
    addressCountry: 'NL',
  },
  telephone: '+31687180111',
  email: 'dejuhadege45@gmail.com',
  url: 'https://habesha-merhaba.nl',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '14:00',
      closes: '00:00',
    },
  ],
  priceRange: '€€',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
