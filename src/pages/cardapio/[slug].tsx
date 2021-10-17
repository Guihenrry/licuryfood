import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'

import { data } from 'data'
import { Restaurant } from 'data/types'
import { TemplateMenu } from 'components/TemplateMenu'

export default function Cardapio(props: Restaurant) {
  return (
    <>
      <Head>
        <title>Cardápio - {props.name}</title>
      </Head>
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
