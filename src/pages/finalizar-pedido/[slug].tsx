import { GetStaticPaths, GetStaticProps } from 'next'

import { data } from 'data'
import { TemplateCheckout } from 'components/TemplateCheckout'

export default function FinalizarPedido() {
  return <TemplateCheckout />
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
