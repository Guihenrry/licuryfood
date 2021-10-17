import Head from 'next/head'

import { TemplateHome } from 'components/TemplateHome'
import { restaurants } from 'data'

export default function Home() {
  return (
    <>
      <Head>
        <title>Licuryfood</title>
      </Head>
      <TemplateHome restaurants={restaurants} />
    </>
  )
}
