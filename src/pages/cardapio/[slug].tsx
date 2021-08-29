import { GetStaticProps, GetStaticPaths } from 'next'
import { data } from 'data'

import { RestaurantInfo } from 'components/RestaurantInfo'

export default function Cardapio(props) {
  return <RestaurantInfo {...props} />
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Object.keys(data).map((key) => ({ params: { slug: key } }))

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  return {
    props: {
      ...data[context.params?.slug]
    }
  }
}
