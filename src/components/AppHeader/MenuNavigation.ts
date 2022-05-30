export const menuNavigation = {
  speakWithUs: {
    key: 'topMenu.speakWithUs',
    href: '/contact'
  },
  workWithUs: {
    key: 'topMenu.workWithUs',
    href: 'https://platform.senior.com.br/hcmrs/hcm/curriculo/?tenant=berneck&tenantdomain=berneck.com.br#!/vacancies/list'
  },
  whereBuy: {
    key: 'topMenu.whereBuy',
    href: '/onde-comprar'
  },
  restrictAccess: {
    key: 'topMenu.restrictAccess',
    href: 'http://portalcrm.berneck.com.br/'
  },
  whoWeAre: {
    key: 'menu.whoWeAre.title',
    href: '/somos-berneck',
    subItems: [
      { key: 'menu.whoWeAre.whoWeAre', href: '/somos-berneck/#quem-somos' },
      { key: 'menu.whoWeAre.ourTrajectory', href: '/somos-berneck#trajetoria' },
      { key: 'menu.whoWeAre.whereWeAre', href: '/somos-berneck#onde-estamos' },
      { key: 'menu.whoWeAre.certifications', href: '/certificacoes' }
    ]
  },
  ourCommitment: {
    key: 'menu.ourCommitment.title',
    href: '/nosso-compromisso',
    subItems: [
      {
        key: 'menu.ourCommitment.environment',
        href: '/nosso-compromisso#meio-ambiente'
      },
      {
        key: 'menu.ourCommitment.ourPeople',
        href: '/nosso-compromisso#nossa-gente'
      },
      {
        key: 'menu.ourCommitment.ourValues',
        href: '/nosso-compromisso#nossos-valores'
      },
      {
        key: 'menu.ourCommitment.report',
        href: '/nosso-compromisso#relatorio'
      }
    ]
  },
  florestalDivision: {
    key: 'menu.florestalDivision.title',
    href: '/divisao-florestal',
    subItems: [
      {
        key: 'menu.florestalDivision.forestManagement',
        href: '/divisao-florestal#manejo'
      },
      {
        key: 'menu.florestalDivision.forestProduction',
        href: '/divisao-florestal#producao'
      },
      {
        key: 'menu.florestalDivision.forestSuppliers',
        href: '/divisao-florestal#fornecedor'
      },
      {
        key: 'menu.florestalDivision.publicResume',
        href: '/divisao-florestal#resumo-publico'
      }
    ]
  },
  products: {
    key: 'menu.products.title',
    href: '/products',
    subItems: [
      {
        key: 'menu.products.panels.title',
        href: '/products',
        subItems: [
          {
            key: 'menu.products.panels.bpBerneck.title',
            href: '/products/bp-berneck'
          },
          {
            key: 'menu.products.panels.bpBerneck.bpCatalog',
            href: '/products/bp-berneck/catalog',
            arrow: true
          },
          {
            key: 'menu.products.panels.bpBerneck.ambientsGallery',
            href: '/products/bp-berneck/gallery',
            arrow: true
          },
          {
            key: 'menu.products.panels.hdf',
            href: '/products/hdf-berneck'
          },
          {
            key: 'menu.products.panels.mdf',
            href: '/products/mdf-berneck'
          },
          {
            key: 'menu.products.panels.mdp',
            href: '/products/mdp-berneck'
          },
          {
            key: 'menu.products.panels.plus',
            href: '/products/plus-berneck'
          }
        ]
      },
      {
        key: 'menu.products.sawns.title',
        href: '/products',
        subItems: [
          {
            key: 'menu.products.sawns.pinus',
            href: '/products/berneck-pinus'
          },
          {
            key: 'menu.products.sawns.teca',
            href: '/products/berneck-teca'
          }
        ]
      }
    ]
  },
  channelBNK: {
    key: 'menu.channelBNK.title',
    href: '/canal-bnk',
    subItems: [
      {
        key: 'menu.channelBNK.inspiration_channel',
        href: '/canal-bnk/1/'
      },
      {
        key: 'menu.channelBNK.knowledge_channel',
        href: '/canal-bnk/2/'
      },
      {
        key: 'menu.channelBNK.bernecks_world_channel',
        href: '/canal-bnk/3/'
      },
      {
        key: 'menu.channelBNK.downloads',
        href: '/canal-bnk/downloads'
      }
    ]
  }
}
