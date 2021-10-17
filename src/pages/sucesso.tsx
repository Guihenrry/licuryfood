import Head from 'next/head'
import { TemplateSuccess } from 'components/TemplateSuccess'

export default function Sucesso() {
  return (
    <>
      <Head>
        <title>Pedido enviado com sucesso</title>
      </Head>
      <TemplateSuccess />
    </>
  )
}
