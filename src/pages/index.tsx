import { NextSeo } from 'next-seo'

import { TemplateHome } from 'components/TemplateHome'
import { restaurants } from 'data'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Licuryfood"
        description="Licuryfood - a cidade dos sabores"
        canonical="https://licuryfood.vercel.app/"
        openGraph={{
          url: 'https://licuryfood.vercel.app/',
          title: 'Licuryfood',
          description: 'Licuryfood - a cidade dos sabores',
          site_name: 'Licuryfood',
          images: [
            {
              url: 'https://licuryfood.vercel.app/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Licuryfood',
              type: 'image/jpeg'
            },
            {
              url: 'https://licuryfood.vercel.app/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Licuryfood',
              type: 'image/jpeg'
            }
          ]
        }}
      />

      <TemplateHome restaurants={restaurants} />
    </>
  )
}
