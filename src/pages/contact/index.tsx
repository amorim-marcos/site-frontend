import Contact from "views/Contact"
import { ContactChannelData } from "views/Contact/Contact"

export default function ContactPage() {
    return <Contact contact_channels={mockContactChannels}/>
}
  
const mockContactChannels: Array<ContactChannelData> = [
    {
        name: "Assessoria de Imprensa",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'AI'
    },
    {
        name: "Assistência Técnica",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'AT'
    },
    {
        name: "Comercial",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'CO'
    },
    {
        name: "Comercial",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'CO'
    },
    {
        name: "Financeiro",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'FIN'
    },
    {
        name: "Fornecimento Florestal",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'FOR'
    },
    {
        name: "Jurídico",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'JUR'
    },
    {
        name: "Marketing",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'MKT'
    },   
    {
        name: "Marketing",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'MKT'
    }, 
    {
        name: "Projetos Incentivados",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'PI'
    },  
    {
        name: "Qualidade",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'QLT'
    },  
    {
        name: "Recursos humanos",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'RH'
    },
    {
        name: "Relacionamento com a Comunidade",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'RH'
    },
    {
        name: "Suprimentos",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'SUP'
    },   
    {
        name: "Ouvidoria",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'OUV'
    }, 
    {
        name: "Outros",
        description: "Text description mocking.",
        image: "/img/contact-channel.png",
        service_code: 'OTH'
    }, 
]