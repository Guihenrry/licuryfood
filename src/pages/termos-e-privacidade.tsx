import { NextSeo } from 'next-seo'
import { TemplateTermsAndPrivacyTemplate } from 'components/TemplateTermsAndPrivacy'

export default function TemplateTermsAndPrivacy() {
  return (
    <>
      <NextSeo
        title="Termos e privacidade | Licuryfood"
        description="Termos e privacidade Licuryfood"
        canonical="https://licuryfood.vercel.app/termos-e-privacidade"
        openGraph={{
          url: 'https://licuryfood.vercel.app/termos-e-privacidade',
          title: 'Termos e privacidade | Licuryfood',
          description: 'Termos e privacidade Licuryfood',
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

      <TemplateTermsAndPrivacyTemplate />
    </>
  )
}
