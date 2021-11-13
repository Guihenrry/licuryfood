import { NextSeo } from 'next-seo'
import { GetStaticProps, GetStaticPaths } from 'next'

import { data } from 'data'
import { Restaurant } from 'data/types'
import { TemplateMenu } from 'components/TemplateMenu'

export default function Cardapio(props: Restaurant) {
  return (
    <>
      <NextSeo
        title={`Cardápio - ${props.name}`}
        description={`Faça seu pedido online no ${props.name} aqui no Licuryfood. Acesse e peça já!`}
        canonical={`https://licuryfood.vercel.app/cardapio/${props.slug}`}
        openGraph={{
          url: `https://licuryfood.vercel.app/cardapio/${props.slug}`,
          title: `Cardápio - ${props.name}`,
          description: `Faça seu pedido online no ${props.name} aqui no Licuryfood. Acesse e peça já!`,
          site_name: 'Licuryfood',
          images: [
            {
              url: `https://licuryfood.vercel.app${props.image}`,
              width: 320,
              height: 320,
              alt: props.name,
              type: 'image/jpeg'
            }
          ]
        }}
      />
      <TemplateMenu {...props} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Object.keys(data).map((key) => ({ params: { slug: key } }))

  return {
    paths: paths,
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
