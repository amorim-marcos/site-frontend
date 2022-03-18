import { GetStaticProps } from 'next'
import Contact from 'views/Contact'
import { ContactChannelData } from 'views/Contact/Contact'

export default function ContactPage(props: { fireWarning: string }) {
  return (
    <Contact
      contact_channels={mockContactChannels}
      fireWarning={props.fireWarning}
    />
  )
}

const mockContactChannels: Array<ContactChannelData> = [
  {
    name: 'Assessoria de Imprensa',
    description:
      'Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.',
    image: '/img/contact-channel.png',
    service_code: 'AI'
  },
  {
    name: 'Assistência Técnica',
    description:
      'Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.',
    image: '/img/contact-channel.png',
    service_code: 'AT'
  },
  {
    name: 'Comercial',
    description:
      'Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.',
    image: '/img/contact-channel.png',
    service_code: 'CO'
  },
  {
    name: 'Financeiro',
    description:
      'Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.',
    image: '/img/contact-channel.png',
    service_code: 'FIN'
  },
  {
    name: 'Fornecimento Florestal',
    description:
      'Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.',
    image: '/img/contact-channel.png',
    service_code: 'FOR'
  },
  {
    name: 'Jurídico',
    description:
      'Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.',
    image: '/img/contact-channel.png',
    service_code: 'JUR'
  },
  {
    name: 'Marketing',
    description:
      'Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.',
    image: '/img/contact-channel.png',
    service_code: 'MKT'
  },
  {
    name: 'Projetos Incentivados',
    description:
      'Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.',
    image: '/img/contact-channel.png',
    service_code: 'PI'
  },
  {
    name: 'Qualidade',
    description:
      'Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.',
    image: '/img/contact-channel.png',
    service_code: 'QLT'
  },
  {
    name: 'Recursos humanos',
    description:
      'Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.',
    image: '/img/contact-channel.png',
    service_code: 'RH'
  },
  {
    name: 'Relacionamento com a Comunidade',
    description:
      'Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.',
    image: '/img/contact-channel.png',
    service_code: 'RCC'
  },
  {
    name: 'Suprimentos',
    description:
      'Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.',
    image: '/img/contact-channel.png',
    service_code: 'SUP'
  },
  {
    name: 'Ouvidoria',
    description:
      'Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.',
    image: '/img/contact-channel.png',
    service_code: 'OUV',
    attention_required: true
  },
  {
    name: 'Outros',
    description:
      'Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.',
    image: '/img/contact-channel.png',
    service_code: 'OTH'
  }
]

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let fireWarning
  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/fire-warning?_locale=${locale}`
    )
    fireWarning = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/fire-warning`)
    fireWarning = await res.json()
  }

  return {
    props: {
      fireWarning: fireWarning.warning_text
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
