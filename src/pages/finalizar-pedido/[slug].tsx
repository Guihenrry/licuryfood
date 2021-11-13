import { NextSeo } from 'next-seo'
import { GetStaticPaths, GetStaticProps } from 'next'

import { data } from 'data'
import { Restaurant } from 'data/types'
import { TemplateCheckout } from 'components/TemplateCheckout'

export default function FinalizarPedido(props: Restaurant) {
  return (
    <>
      <NextSeo
        title={`Finalizar pedido - ${props.name}`}
        description="Licuryfood - a cidade dos sabores"
        canonical={`https://licuryfood.vercel.app/finalizar-pedido/${props.slug}`}
        openGraph={{
          url: `https://licuryfood.vercel.app/finalizar-pedido/${props.slug}`,
          title: `Finalizar pedido - ${props.name}`,
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
      <TemplateCheckout {...props} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Object.keys(data).map((key) => ({ params: { slug: key } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const slug = String(context.params?.slug)
  const restaurantData = data[slug]

  return {
    props: {
      ...restaurantData
    }
  }
}
