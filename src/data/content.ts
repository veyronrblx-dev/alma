export const restaurant = {
  name: "Alma Guimarães",
  tagline: "Cozinha de Autor",
  city: "Guimarães, Portugal",
  address: "Rua de Santa Maria, 42, 4800-443 Guimarães, Portugal",
  phone: "+351 253 000 100",
  phoneHref: "+351253000100",
  email: "reservas@almaguimaraes.pt",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+de+Santa+Maria+Guimaraes+Portugal&output=embed",
  mapsLink: "https://maps.google.com/?q=Rua+de+Santa+Maria+Guimaraes+Portugal",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
  },
}

export const hours = [
  { day: "Segunda-feira", time: "Encerrado" },
  { day: "Terça a Quinta", time: "19:00 — 23:00" },
  { day: "Sexta e Sábado", time: "12:30 — 15:00 · 19:00 — 00:00" },
  { day: "Domingo", time: "12:30 — 16:00" },
]

export const featuredDishes = [
  {
    name: "Vieira & Couve-flor",
    description:
      "Vieira selada, puré aveludado de couve-flor, manteiga tostada e folha de ouro.",
    price: "28",
    image: "/images/dish-1.png",
    tag: "Entrada",
  },
  {
    name: "Wagyu & Trufa Negra",
    description:
      "Lombo de wagyu maturado, jus de trufa negra do Alentejo e ervas do jardim.",
    price: "46",
    image: "/images/dish-2.png",
    tag: "Principal",
  },
  {
    name: "Ostras & Caviar",
    description:
      "Ostras da Ria de Aveiro, caviar Oscietra e um toque de citrinos frescos.",
    price: "34",
    image: "/images/dish-3.png",
    tag: "Do Mar",
  },
  {
    name: "Chocolate & Ouro",
    description:
      "Ganache de chocolate Valrhona, coulis de frutos vermelhos e folha de ouro comestível.",
    price: "16",
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
    category: "Entradas",
    items: [
      {
        name: "Vieira & Couve-flor",
        description:
          "Vieira selada, puré aveludado de couve-flor, manteiga tostada e folha de ouro.",
        price: "28",
      },
      {
        name: "Ostras & Caviar",
        description:
          "Ostras da Ria de Aveiro, caviar Oscietra e um toque de citrinos frescos.",
        price: "34",
      },
      {
        name: "Foie Gras & Figo",
        description:
          "Foie gras escalfado, compota de figo do Douro e brioche tostado.",
        price: "26",
      },
      {
        name: "Tártaro de Atum",
        description:
          "Atum do Atlântico, abacate, gengibre, sésamo negro e emulsão de yuzu.",
        price: "24",
      },
    ],
  },
  {
    category: "Principais",
    items: [
      {
        name: "Wagyu & Trufa Negra",
        description:
          "Lombo de wagyu maturado, jus de trufa negra do Alentejo e ervas do jardim.",
        price: "46",
      },
      {
        name: "Robalo Selvagem",
        description:
          "Robalo selvagem, beurre blanc de açafrão, espargos verdes e caviar de limão.",
        price: "38",
      },
      {
        name: "Cabrito de Barroso",
        description:
          "Cabrito estufado lentamente, puré de castanha e redução de vinho do Porto.",
        price: "36",
      },
      {
        name: "Risotto de Cogumelos",
        description:
          "Risotto carnaroli, cogumelos selvagens, parmesão de 24 meses e trufa branca.",
        price: "30",
      },
    ],
  },
  {
    category: "Sobremesas",
    items: [
      {
        name: "Chocolate & Ouro",
        description:
          "Ganache de chocolate Valrhona, coulis de frutos vermelhos e folha de ouro.",
        price: "16",
      },
      {
        name: "Pastel de Nata Reinventado",
        description:
          "Interpretação de autor do clássico português, canela e caramelo salgado.",
        price: "14",
      },
      {
        name: "Soufflé de Baunilha",
        description:
          "Soufflé de baunilha de Madagáscar, gelado de nata e tuile de amêndoa.",
        price: "15",
      },
    ],
  },
  {
    category: "Vinhos & Bar",
    items: [
      {
        name: "Vinho Verde Reserva",
        description: "Casa da região do Minho, cítrico e mineral. (copo / garrafa)",
        price: "9 / 42",
      },
      {
        name: "Douro Tinto Grande Reserva",
        description: "Encorpado, notas de frutos negros e especiarias. (copo / garrafa)",
        price: "14 / 68",
      },
      {
        name: "Champagne Brut",
        description: "Seleção da casa, fino e persistente. (copo / garrafa)",
        price: "18 / 95",
      },
    ],
  },
]

export const reviews = [
  {
    quote:
      "Uma experiência gastronómica que roça a perfeição. Cada prato é uma obra de arte e o serviço é impecável.",
    author: "Maria Fernandes",
    role: "Crítica Gastronómica",
  },
  {
    quote:
      "O melhor jantar que tive em Portugal. A ligação entre tradição e inovação é simplesmente extraordinária.",
    author: "James Whitfield",
    role: "The Culinary Review",
  },
  {
    quote:
      "Do primeiro ao último momento, tudo foi cinematográfico. Alma Guimarães merece todas as estrelas.",
    author: "Sofia Almeida",
    role: "Hóspede Habitual",
  },
]

export const stats = [
  { value: 18, suffix: "", label: "Anos de excelência" },
  { value: 2, suffix: "", label: "Estrelas Michelin" },
  { value: 40, suffix: "+", label: "Produtores locais" },
  { value: 12, suffix: "k", label: "Convidados por ano" },
]

export const galleryImages = [
  { src: "/images/gallery-1.png", alt: "Mesa posta com velas e taças de vinho" },
  { src: "/images/dish-2.png", alt: "Lombo de wagyu com trufa negra" },
  { src: "/images/gallery-3.png", alt: "Chef a finalizar um prato com pinça" },
  { src: "/images/interior.png", alt: "Interior elegante do restaurante" },
  { src: "/images/gallery-5.png", alt: "Bar do restaurante com prateleiras iluminadas" },
  { src: "/images/dish-3.png", alt: "Ostras e caviar sobre gelo" },
  { src: "/images/gallery-4.png", alt: "Pão artesanal e azeite" },
  { src: "/images/gallery-2.png", alt: "Sommelier a servir vinho tinto" },
  { src: "/images/dish-1.png", alt: "Vieira com puré de couve-flor" },
  { src: "/images/gallery-6.png", alt: "Aperitivo com flores comestíveis" },
  { src: "/images/dish-4.png", alt: "Sobremesa de chocolate com folha de ouro" },
  { src: "/images/chef.png", alt: "Chef executivo na cozinha" },
]

export const navLinks = [
  { label: "Início", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Galeria", to: "/galeria" },
  { label: "Sobre", to: "/sobre" },
  { label: "Contacto", to: "/contacto" },
]
