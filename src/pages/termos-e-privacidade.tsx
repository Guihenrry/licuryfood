import Head from 'next/head'
import { TemplateTermsAndPrivacyTemplate } from 'components/TemplateTermsAndPrivacy'

export default function TemplateTermsAndPrivacy() {
  return (
    <>
      <Head>
        <title>Termos e privacidade | Licuryfood</title>
      </Head>
      <TemplateTermsAndPrivacyTemplate />
    </>
  )
}
