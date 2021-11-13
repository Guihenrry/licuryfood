import { NextSeo } from 'next-seo'
import { TemplateSuccess } from 'components/TemplateSuccess'

export default function Sucesso() {
  return (
    <>
      <NextSeo
        title="Pedido enviado com sucesso"
        description="Pedido enviado com sucesso"
        canonical="https://licuryfood.vercel.app/sucesso"
        openGraph={{
          url: 'https://licuryfood.vercel.app/sucesso',
          title: 'Pedido enviado com sucesso',
          description: 'Pedido enviado com sucesso',
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
      <TemplateSuccess />
    </>
  )
}
