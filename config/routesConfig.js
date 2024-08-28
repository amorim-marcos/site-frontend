const pathTranslations = {
  // source : destination
  en: {
    '/products': '/products',
    '/products/bp-berneck/catalog': '/products/bp-berneck/catalog',
    '/bnk-channel': '/bnk-channel',
    '/bnk-channel/:category': '/bnk-channel/:category',
    '/bnk-channel/:category/:slug': '/bnk-channel/:category/:slug'
    // todo
    // fill the rest only in case of the translated pathname is different from original pathname
  },
  'pt-BR': {
    '/quem-somos': '/we-are-berneck',
    '/quem-somos#quem-somos': '/we-are-berneck#who-we-are',
    // todo
    // fix element id redirects
    '/quem-somos#nossa-trajetoria': '/we-are-berneck#trajectory',
    '/quem-somos#onde-estamos': '/we-are-berneck#where-we-are',

    '/certificacoes': '/certifications',

    '/nosso-compromisso': '/our-commitment',
    '/nosso-compromisso#meio-ambiente': '/our-commitment#environment',
    '/nosso-compromisso#nossa-gente': '/our-commitment#our-people',
    '/nosso-compromisso#nossos-valores': '/our-commitment#our-values',
    '/nosso-compromisso#esg': '/our-commitment#report',

    '/divisao-florestal': '/forest-division',
    '/divisao-florestal#manejo-florestal': '/forest-division#management',
    '/divisao-florestal#fornecedor-florestal': '/forest-division#supplier',
    '/divisao-florestal#resumo-publico': '/forest-division#public-summary',
    '/divisao-florestal#producao-florestal': '/forest-division#production',

    '/produtos': '/products',
    '/produtos/bp': '/products/bp-berneck',
    '/produtos/bp/catalogo': '/products/bp-berneck/catalog',
    '/produtos/bp/catalogo/:slug': '/products/bp-berneck/catalog/:slug',

    '/produtos/bp/galeria-de-ambientes': '/products/bp-berneck/gallery',
    '/produtos/bp/galeria-de-ambientes/:slug':
      '/products/bp-berneck/gallery/:slug',

    '/produtos/hdf-berneck': '/products/hdf-berneck',
    '/produtos/mdf-berneck': '/products/mdf-berneck',
    '/produtos/mdp-berneck': '/products/mdp-berneck',
    '/produtos/plus-berneck': '/products/plus-berneck',
    '/produtos/pinus-berneck': '/products/berneck-pinus',
    '/produtos/teca-berneck': '/products/berneck-teca',

    '/canal-bnk': '/bnk-channel',
    // todo
    // change category number to category name
    // ex: '/canal-bnk/inspiracao-sob-medida': '/bnk-channel/1',

    '/canal-bnk/:category': '/bnk-channel/:category',
    '/canal-bnk/:category/:slug': '/bnk-channel/:category/:slug',

    '/canal-bnk/downloads': '/bnk-channel/downloads',
    '/onde-comprar': '/where-to-buy',
    '/contato': '/contact'
  }
}

// export const getRewrites = () => {
//   const rewrites = []
//   for (const [locale, paths] of Object.entries(pathTranslations)) {
//     for (const [source, destination] of Object.entries(paths)) {
//       rewrites.push({
//         source: `/${locale}${source}`,
//         destination: destination,
//         locale: false
//       })
//     }
//   }
//   return rewrites
// }

module.exports = pathTranslations
