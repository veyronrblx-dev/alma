export const restaurant = {
  name: "Alma Guimarães",
  tagline: "Onde a alma encontra o sabor.",
  city: "Guimarães, Portugal",
  address: "R. João de Melo 20, 4810-431 Guimarães, Portugal",
  phone: "+351 939 445 079",
  phoneHref: "+351939445079",
  email: "",
  mapsEmbed:
    "https://www.google.com/maps?q=R.+João+de+Melo+20,+4810-431+Guimarães&output=embed",
  mapsLink:
    "https://www.google.com/maps?q=R.+João+de+Melo+20,+4810-431+Guimarães",
  social: {
    instagram: "https://www.instagram.com/restaurantealmaguimaraes/",
    facebook: "",
    twitter: "",
  },
}

export const hours = [
  { day: "Segunda-feira", time: "Consultar restaurante" },
  { day: "Terça-feira", time: "Consultar restaurante" },
  { day: "Quarta-feira", time: "Consultar restaurante" },
  { day: "Quinta-feira", time: "Consultar restaurante" },
  { day: "Sexta-feira", time: "Consultar restaurante" },
  { day: "Sábado", time: "Consultar restaurante" },
  { day: "Domingo", time: "Consultar restaurante" },
]

export const featuredDishes = [
  {
    name: 'Camarão à "Guilho"',
    description: "Camarão à guilho com coentros.",
    price: "15",
    image: "/images/dish-1.png",
    tag: "Para partilhar",
  },
  {
    name: "Naco Minhota",
    description: "Naco de carne com acompanhamento e molho.",
    price: "29",
    image: "/images/dish-2.png",
    tag: "Carne",
  },
  {
    name: "Bacalhau à Lagareiro",
    description: "Bacalhau à lagareiro.",
    price: "27",
    image: "/images/dish-3.png",
    tag: "Peixe",
  },
  {
    name: "Tentação",
    description: "Mousse de chocolate e pó de morango.",
    price: "8",
    image: "/images/dish-4.png",
    tag: "Sobremesa",
  },
]

export type MenuItem = {
  name: string
  description: string
  price: string
}

export const menu: { category: string; items: MenuItem[] }[] = [
  {
    category: "Para partilhar",
    items: [
      {
        name: "Couvert",
        description: "Pão, manteiga artesanal e azeite.",
        price: "3,50",
      },
      {
        name: 'Camarão à "Guilho"',
        description: "Camarão à guilho com coentros.",
        price: "15",
      },
      {
        name: "Croquetes",
        description: "Alheira com maionese de paprika.",
        price: "9",
      },
      {
        name: "Camembert",
        description: "Camembert com mel e ervas aromáticas.",
        price: "14",
      },
      {
        name: "Ceviche",
        description: "Ceviche tradicional.",
        price: "12",
      },
      {
        name: "Pimentos Padrón",
        description: "Pimentos Padrón.",
        price: "9",
      },
    ],
  },
  {
    category: "Carne na brasa",
    items: [
      {
        name: "Naco Minhota",
        description: "Acompanhamento e molho.",
        price: "29",
      },
      {
        name: "Plumas de Porco Preto Ibérico",
        description: "Plumas de porco preto ibérico.",
        price: "29",
      },
    ],
  },
  {
    category: "Peixe",
    items: [
      {
        name: "Bacalhau à Lagareiro",
        description: "Bacalhau à lagareiro.",
        price: "27",
      },
      {
        name: "Polvo ao Alho e Coentros",
        description: "Polvo ao alho e coentros.",
        price: "26",
      },
    ],
  },
  {
    category: "Acompanhamentos",
    items: [
      {
        name: "Patatas",
        description: "Acompanhamento de batata.",
        price: "4",
      },
    ],
  },
  {
    category: "Menu Infantil",
    items: [
      {
        name: "Bife de Novilho com Batatas Fritas",
        description: "Bife de novilho acompanhado de batatas fritas.",
        price: "17",
      },
    ],
  },
  {
    category: "Sobremesas",
    items: [
      {
        name: "Carpaccio",
        description: "Manga, abacaxi e frutos vermelhos.",
        price: "7",
      },
      {
        name: "Escabeche",
        description: "Frutas marinadas com gelado.",
        price: "7,50",
      },
      {
        name: "Tentação",
        description: "Mousse de chocolate e pó de morango.",
        price: "8",
      },
      {
        name: "Sopa",
        description: "Sobremesa apresentada no menu como Sopa.",
        price: "6,50",
      },
    ],
  },
  {
    category: "Vinho Branco",
    items: [
      {
        name: "Sequeira",
        description:
          "Malvasia fina, rabacato, gouveio e códega do larinho — Douro.",
        price: "36",
      },
      {
        name: "Grambeira",
        description:
          "Códega do larinho, rabigato e viosinho — Douro.",
        price: "22",
      },
      {
        name: "Quinta dos Lagares",
        description:
          "Códega do larinho, rabigato e viosinho — Douro.",
        price: "38",
      },
      {
        name: "Chão da Quinta",
        description: "Encruzado — Dão.",
        price: "38",
      },
      {
        name: "Ditado",
        description: "Rabigato, gouveio e arinto — Douro.",
        price: "26",
      },
      {
        name: "Dezoito by Maniche",
        description:
          "Viosinho, gouveia, arinto e moscatel galego.",
        price: "33",
      },
    ],
  },
  {
    category: "Espumante & Champagne",
    items: [
      {
        name: "H. Blin",
        description: "Pinot Meunier, Chardonnay e Pinot Noir — Champagne.",
        price: "59",
      },
      {
        name: "Ruinart Blanc de Blancs",
        description: "Chardonnay — Champagne.",
        price: "135",
      },
      {
        name: "Quinta do Rol Rosé",
        description: "Pinot Noir — Lisboa.",
        price: "33",
      },
      {
        name: "Quinta da Rabiana",
        description: "Arinto — Minho.",
        price: "38",
      },
      {
        name: "Quinta Pousada de Fora",
        description: "Loureiro e Arinto — Minho.",
        price: "25",
      },
      {
        name: "Colinas Cuvée Brut Nature",
        description: "Chardonnay — Bairrada.",
        price: "37",
      },
      {
        name: "Veuve Clicquot",
        description: "Champagne.",
        price: "105",
      },
    ],
  },
  {
    category: "Vinho Tinto",
    items: [
      {
        name: "Grambeira",
        description:
          "Touriga Nacional, Touriga Franca e Tinta Roriz — Douro.",
        price: "22",
      },
      {
        name: "Guadelim 2009",
        description:
          "Aragonês, Alfrocheiro, Alicante Bouschet, Tinta Caiada e Moreto — Alentejo.",
        price: "62",
      },
      {
        name: "Espera",
        description: "Vinho tinto.",
        price: "29",
      },
      {
        name: "Circii",
        description:
          "Touriga Nacional, Touriga Franca, Syrah e Aragonez — Alentejo.",
        price: "25",
      },
      {
        name: "Maria Izabel 2018",
        description:
          "Tinta Roriz, Tinto Cão, Touriga Nacional, Sousão e Touriga Franca — Douro.",
        price: "67",
      },
      {
        name: "Dezoito by Maniche",
        description:
          "Touriga Nacional, Touriga Franca e Sousão.",
        price: "33",
      },
      {
        name: "Quinta das Mós",
        description: "Tinta Cão — Douro.",
        price: "27",
      },
      {
        name: "Quinta das Mós",
        description: "Vinho tinto.",
        price: "24",
      },
    ],
  },
  {
    category: "Vinho Verde",
    items: [
      {
        name: "Quinta Pousada de Fora",
        description: "Vinho Verde.",
        price: "17",
      },
      {
        name: "Phulia",
        description: "Vinho Verde.",
        price: "19",
      },
      {
        name: "Rabiana — Arinto",
        description: "Vinho Verde.",
        price: "22",
      },
      {
        name: "Rabiana — Loureiro",
        description: "Vinho Verde.",
        price: "23",
      },
      {
        name: "Encosta do Rolão",
        description: "Vinho Verde.",
        price: "18",
      },
      {
        name: "Incomun",
        description: "Vinho Verde.",
        price: "18",
      },
      {
        name: "Pecebrico",
        description: "Vinho Verde.",
        price: "16",
      },
    ],
  },
]

/*
 * Reviews
 *
 * Do NOT put AI-generated reviews here.
 * These should only contain real reviews supplied by the restaurant
 * or copied from a verified review platform.
 */
export const reviews = []

/*
 * Verified public information available from current listings.
 *
 * The restaurant's Google rating was supplied separately by the owner/user,
 * so it should not be replaced with an invented value.
 *
 * No Michelin-star claim is included.
 */
export const stats = [
  { value: 4.9, suffix: "", label: "Avaliação" },
  { value: 89, suffix: "", label: "Avaliações no TheFork" },
  { value: 23, suffix: "€", label: "Preço médio" },
]

export const galleryImages = [
  {
    src: "/images/gallery-1.png",
    alt: "Alma Restaurante Guimarães",
  },
  {
    src: "/images/dish-2.png",
    alt: "Prato do Alma Restaurante",
  },
  {
    src: "/images/gallery-3.png",
    alt: "Cozinha do Alma Restaurante",
  },
  {
    src: "/images/interior.png",
    alt: "Interior do Alma Restaurante Guimarães",
  },
  {
    src: "/images/gallery-5.png",
    alt: "Espaço do Alma Restaurante",
  },
  {
    src: "/images/dish-3.png",
    alt: "Prato de peixe do Alma Restaurante",
  },
  {
    src: "/images/gallery-4.png",
    alt: "Mesa do Alma Restaurante",
  },
  {
    src: "/images/gallery-2.png",
    alt: "Vinho no Alma Restaurante",
  },
  {
    src: "/images/dish-1.png",
    alt: "Prato do Alma Restaurante",
  },
  {
    src: "/images/gallery-6.png",
    alt: "Prato do Alma Restaurante",
  },
  {
    src: "/images/dish-4.png",
    alt: "Sobremesa do Alma Restaurante",
  },
  {
    src: "/images/chef.png",
    alt: "Equipa do Alma Restaurante",
  },
]

export const navLinks = [
  { label: "Início", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Galeria", to: "/galeria" },
  { label: "Sobre", to: "/sobre" },
  { label: "Contacto", to: "/contacto" },
]
