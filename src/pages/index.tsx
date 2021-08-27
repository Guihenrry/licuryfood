import { TemplateHome } from 'components/TemplateHome'
import { restaurants } from 'data'

export default function Home() {
  return <TemplateHome restaurants={restaurants} />
}
