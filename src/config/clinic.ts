export const clinic = {
  name: "Amae Centro de Estética",
  logo: "/images/logo.png",
  tagline: "Tu belleza natural en Hellín, Albacete",
  description: "Amae Centro de Estética es tu centro de referencia en Hellín para tratamientos faciales, depilación láser y cuidado integral de la belleza. Con 5 estrellas en Google y 49 reseñas, Sandra y su equipo te ofrecen la máxima profesionalidad en un espacio acogedor y cuidado. Desde limpiezas faciales personalizadas hasta micropigmentación de cejas, cada tratamiento está diseñado para realzar tu belleza con resultados visibles desde la primera sesión.",
  colors: {
    primary: "#C9A86C",
    secondary: "#2D2D2D",
    accent: "#D4A574",
    neutral: "#FAF8F5"
  },
  phone: "614 30 33 69",
  whatsapp: "+34614303369",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de estética.",
  email: "",
  address: {
    street: "C. Balmes, bajo 3, 02400 Hellín, Albacete, España",
    city: "Hellín",
    province: "Albacete",
    postalCode: "02400",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=15371683670611173165&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Amae%20Centro%20de%20Est%C3%A9tica%20%4038.508%2C-1.69608&z=16&output=embed",
  coordinates: {
    lat: 38.508,
    lng: -1.69608
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "10:00–14:00, 16:30–20:30"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 49,
    url: "https://maps.google.com/?cid=15371683670611173165&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    featured: [
      {
        author: "Pilaretasugar",
        rating: 5,
        text: "Fui a hacerme una limpieza facial y me ha encantado. Hacía tiempo que no me hacía una porque en otra ocasión tuve mala experiencia en otro lugar, pero esta vez aquí todo ha sido perfecto. Desde el principio la chica fue muy profesional y muy amable. Antes de empezar me preguntó por mi tipo de piel, qué rutina sigo y qué productos uso, para poder adaptar el tratamiento a mí.\n\nDurante todo el proceso me explicó cada paso, me dijo qué iba a notar en cada momento y estuvo muy pendiente de cómo reaccionaba mi piel. Se nota que sabe lo que hace y que le gusta su trabajo. Me dio mucha confianza y el trato fue de diez.\n\nEl sitio está muy limpio, cuidado y acogedor. Salí encantada y sin duda volveré. Lo recomiendo totalmente.",
        date: "Hace 3 meses"
      },
      {
        author: "Elena Tomás García",
        rating: 5,
        text: "Trato magnífico y gran profesionalidad. Últimos tratamientos pensado para todo tipo de personas. Precios razonables.\nMe siento estupenda cada vez que voy,gracias a Sandra he vuelto a recuperar la forma de mis cejas. Ideal para regalar calidad y tiempo para esa persona.\nMuy muy recomendable 🤩",
        date: "Hace 1 mes"
      },
      {
        author: "Maria Rodriguez",
        rating: 5,
        text: "Muy contenta con el tratamiento de depilación láser. El Sandra es súper profesional, te explican todo con detalle y te hacen sentir cómoda en cada sesión. Las instalaciones están limpias y cuidadas, y desde las primeras sesiones ya se notan los resultados. ¡Totalmente recomendable!",
        date: "Hace 1 mes"
      },
      {
        author: "Marta Romero Clemente",
        rating: 5,
        text: "En masajes como en limpiezas de cara, y todos los servicios en general fenomenal.\nEs muy profesional, simpática y agradable. 100% recomendable, perfecta para ir todos los meses jijij, volveré enseguida, Sandra tiene las mejores manos!!🫶🏽",
        date: "Hace 1 mes"
      },
      {
        author: "Gema Sánchez Marín",
        rating: 5,
        text: "Primera vez y muy contenta con el resultado.  Cejas súper definidas, profesionalidad, amabilidad y súper precio. Sin duda es para volver.\nMuchísimas gracias",
        date: "Hace 3 semanas"
      }
    ]
  },
  services: [
    {
      id: "limpieza-facial",
      name: "Limpiezas Faciales Personalizadas",
      description: "Tratamientos faciales completamente adaptados a tu tipo de piel y necesidades específicas. Antes de comenzar analizamos tu piel, tu rutina y los productos que usas para personalizar cada paso. Te explicamos todo el proceso y estamos pendientes de cómo reacciona tu piel en cada momento.",
      benefits: [
        "Análisis previo de tu tipo de piel y rutina",
        "Tratamiento personalizado paso a paso",
        "Resultados visibles desde la primera sesión"
      ],
      icon: "Sparkles"
    },
    {
      id: "depilacion-laser",
      name: "Depilación Láser Definitiva",
      description: "Eliminación permanente del vello con tecnología láser de última generación. Te explicamos todo con detalle y te hacemos sentir cómoda en cada sesión. Los resultados se notan desde las primeras aplicaciones y las instalaciones están perfectamente cuidadas.",
      benefits: [
        "Tecnología láser de última generación",
        "Resultados visibles desde primeras sesiones",
        "Explicación detallada en cada visita"
      ],
      icon: "Zap"
    },
    {
      id: "micropigmentacion-cejas",
      name: "Micropigmentación de Cejas",
      description: "Recupera la forma perfecta de tus cejas con micropigmentación profesional. Diseñamos cejas súper definidas y naturales que realzan tu mirada. Técnica semipermanente con resultados espectaculares y precios razonables.",
      benefits: [
        "Cejas perfectamente definidas y naturales",
        "Resultados duraderos y profesionales",
        "Diseño personalizado para tu rostro"
      ],
      icon: "Eye"
    },
    {
      id: "masajes",
      name: "Masajes Terapéuticos",
      description: "Masajes relajantes y terapéuticos realizados con las mejores manos. Técnicas profesionales que alivian tensiones, mejoran la circulación y te hacen sentir renovada. Ideal para desconectar y cuidarte todos los meses.",
      benefits: [
        "Técnicas profesionales y efectivas",
        "Alivio de tensiones y estrés",
        "Ambiente acogedor y relajante"
      ],
      icon: "Hand"
    },
    {
      id: "tratamientos-corporales",
      name: "Tratamientos Corporales",
      description: "Tratamientos reductores, reafirmantes y anticelulíticos con tecnología avanzada. Diseñamos cada sesión según tus objetivos para que recuperes tu mejor forma. Resultados visibles y seguimiento personalizado.",
      benefits: [
        "Tratamientos adaptados a tus objetivos",
        "Tecnología de última generación",
        "Seguimiento y resultados medibles"
      ],
      icon: "Heart"
    },
    {
      id: "manicura-pedicura",
      name: "Manicura y Pedicura",
      description: "Cuidado completo de manos y pies con productos de alta calidad. Desde manicuras clásicas hasta tratamientos de belleza para uñas perfectas. Atención al detalle y acabados impecables.",
      benefits: [
        "Productos y esmaltes de alta calidad",
        "Cuidado completo y detallado",
        "Resultados duraderos y elegantes"
      ],
      icon: "Sparkles"
    },
    {
      id: "extensiones-pestanas",
      name: "Extensiones de Pestañas",
      description: "Mirada impactante con extensiones pelo a pelo de máxima calidad. Aplicación cuidadosa y personalizada para un resultado natural y espectacular. Realza tu mirada sin necesidad de maquillaje diario.",
      benefits: [
        "Técnica pelo a pelo para resultado natural",
        "Mirada impactante sin maquillaje",
        "Aplicación profesional y segura"
      ],
      icon: "Eye"
    },
    {
      id: "tratamientos-antiedad",
      name: "Tratamientos Antiedad",
      description: "Últimos tratamientos pensados para combatir los signos del envejecimiento. Hidratación profunda, luminosidad y firmeza con productos premium. Tecnología avanzada adaptada a cada tipo de piel.",
      benefits: [
        "Tecnología de última generación",
        "Hidratación y luminosidad visible",
        "Tratamientos personalizados por edad"
      ],
      icon: "Flower2"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotras",
      description: "Llama al 614 30 33 69 o escríbenos por WhatsApp para reservar tu cita. Te atenderemos con la máxima amabilidad y resolveremos todas tus dudas sobre nuestros tratamientos."
    },
    {
      step: 2,
      title: "Análisis Personalizado",
      description: "Antes de comenzar cualquier tratamiento, analizamos tu tipo de piel, tu rutina actual y tus objetivos. Te preguntamos qué productos usas y diseñamos un plan completamente adaptado a ti."
    },
    {
      step: 3,
      title: "Tratamiento Profesional",
      description: "Realizamos el tratamiento explicándote cada paso del proceso. Te contamos qué vas a notar en cada momento y estamos pendientes de cómo reacciona tu piel. Trabajamos con tecnología avanzada en instalaciones limpias y acogedoras."
    },
    {
      step: 4,
      title: "Resultados y Seguimiento",
      description: "Disfruta de resultados visibles desde la primera sesión. Te damos recomendaciones personalizadas para mantener los efectos y te hacemos seguimiento en cada visita para asegurar tu satisfacción total."
    }
  ],
  whyUs: [
    {
      title: "5 Estrellas en Google",
      description: "Con 49 reseñas verificadas que destacan nuestra profesionalidad, trato cercano y resultados visibles. Somos el centro de estética mejor valorado de Hellín gracias a la confianza de nuestras clientas.",
      icon: "Sparkles"
    },
    {
      title: "Tratamientos Personalizados",
      description: "Analizamos tu piel, tu rutina y tus objetivos antes de cada tratamiento. Te explicamos cada paso del proceso y adaptamos cada sesión a tus necesidades específicas para garantizar los mejores resultados.",
      icon: "Heart"
    },
    {
      title: "Tecnología de Última Generación",
      description: "Trabajamos con equipos avanzados de depilación láser, tratamientos faciales y corporales. Últimos tratamientos pensados para todo tipo de personas con resultados visibles desde las primeras sesiones.",
      icon: "Zap"
    },
    {
      title: "Instalaciones Impecables",
      description: "Espacio muy limpio, cuidado y acogedor donde te sentirás cómoda desde el primer momento. Cada detalle está pensado para ofrecerte una experiencia de belleza completa en un ambiente profesional y relajante.",
      icon: "Flower2"
    }
  ],
  team: [
    {
      name: "Sandra",
      role: "Directora y Esteticista Profesional",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionadas por la belleza y el cuidado personal. En Amae Centro de Estética nos dedicamos a realzar la belleza natural de cada clienta con tratamientos de calidad."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Amae Centro de Estética - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Amae Centro de Estética - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Amae Centro de Estética - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Amae Centro de Estética - Imagen 4"
    },
    {
      src: "/images/hero.webp",
      alt: "Amae Centro de Estética - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "Amae Centro de Estética - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "Amae Centro de Estética - Imagen 7"
    },
    {
      src: "/images/gallery/8.webp",
      alt: "Amae Centro de Estética - Imagen 8"
    }
  ],
  faq: [
    {
      question: "¿Qué incluye una limpieza facial en Amae Centro de Estética?",
      answer: "Nuestra limpieza facial es completamente personalizada. Antes de empezar analizamos tu tipo de piel, qué rutina sigues y qué productos usas para adaptar el tratamiento a ti. Durante todo el proceso te explicamos cada paso, qué vas a notar en cada momento y estamos muy pendientes de cómo reacciona tu piel. Es un tratamiento profundo y efectivo con resultados visibles desde la primera sesión."
    },
    {
      question: "¿Cuántas sesiones de depilación láser necesito?",
      answer: "El número de sesiones varía según la zona y tu tipo de piel, pero los resultados se notan desde las primeras aplicaciones. En Amae Centro de Estética te explicamos todo con detalle antes de comenzar y te hacemos sentir cómoda en cada sesión. Trabajamos con tecnología láser de última generación para garantizar los mejores resultados con la máxima seguridad."
    },
    {
      question: "¿Cómo es el proceso de micropigmentación de cejas?",
      answer: "La micropigmentación de cejas en Amae es un tratamiento profesional donde diseñamos la forma perfecta para tu rostro. Sandra tiene amplia experiencia ayudando a recuperar la forma natural de las cejas con resultados súper definidos y naturales. Es un proceso seguro, con pigmentos de alta calidad y resultados que duran meses. Te explicamos todo el procedimiento antes de comenzar."
    },
    {
      question: "¿Los masajes son solo relajantes o también terapéuticos?",
      answer: "En Amae Centro de Estética ofrecemos masajes tanto relajantes como terapéuticos. Sandra tiene las mejores manos según nuestras clientas y aplica técnicas profesionales que alivian tensiones, mejoran la circulación y te hacen sentir renovada. Son perfectos para cuidarte regularmente en un ambiente acogedor y profesional."
    },
    {
      question: "¿Qué diferencia a Amae de otros centros de estética?",
      answer: "Amae Centro de Estética cuenta con 5 estrellas en Google con 49 reseñas que hablan de nuestra profesionalidad, trato cercano y resultados visibles. Te explicamos cada tratamiento con detalle, adaptamos cada sesión a tus necesidades específicas y trabajamos con tecnología de última generación. Nuestras instalaciones están impecables y el trato es siempre personalizado y amable."
    },
    {
      question: "¿Dónde está ubicado Amae Centro de Estética?",
      answer: "Estamos en Hellín, Albacete, en un espacio muy limpio, cuidado y acogedor. Puedes contactarnos en el 614 30 33 69 para conocer nuestra ubicación exacta y reservar tu cita. Atendemos con cita previa para garantizar la máxima atención personalizada en cada tratamiento."
    },
    {
      question: "¿Son razonables los precios de los tratamientos?",
      answer: "Sí, en Amae Centro de Estética ofrecemos precios razonables sin renunciar a la calidad y profesionalidad. Trabajamos con productos premium y tecnología avanzada, pero mantenemos tarifas accesibles. Nuestros tratamientos son ideales también para regalar calidad y tiempo a esa persona especial. Consulta precios específicos llamando al 614 30 33 69."
    },
    {
      question: "¿Puedo ir regularmente a Amae Centro de Estética?",
      answer: "Por supuesto, muchas de nuestras clientas vienen todos los meses para mantener sus tratamientos de belleza. Ya sea para limpiezas faciales, masajes, manicura o cualquier otro servicio, diseñamos planes de mantenimiento personalizados. Es la mejor forma de cuidarte de forma continua y mantener los resultados espectaculares que buscas."
    }
  ],
  seo: {
    titleTemplate: "%s | Amae Centro de Estética",
    defaultTitle: "Amae Centro de Estética | Hellín, Albacete",
    defaultDescription: "Centro de estética en Hellín con 5⭐ en Google. Tratamientos faciales, depilación láser, micropigmentación y masajes. Profesionalidad y resultados visibles. ☎️ 614 30 33 69",
    keywords: [
      "centro estética Hellín",
      "depilación láser Hellín",
      "limpieza facial Hellín",
      "micropigmentación cejas Hellín",
      "masajes Hellín",
      "Amae Centro de Estética",
      "esteticista Hellín Albacete",
      "tratamientos faciales Hellín",
      "belleza Hellín",
      "spa Hellín",
      "estética avanzada Albacete",
      "centro belleza Hellín"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Amae Centro de Estética",
    cif: "",
    registeredAddress: "C. Balmes, bajo 3, 02400 Hellín, Albacete, España, Hellín, Albacete"
  },
  heroHeadline: [
    "Tu Centro de",
    "Belleza",
    "en Hellín"
  ],
  heroDescription: "En Amae Centro de Estética combinamos tecnología avanzada con un trato personalizado y cercano. Nuestros tratamientos faciales, depilación láser definitiva, masajes terapéuticos y micropigmentación están pensados para que te sientas estupenda. Con 5 estrellas en Google, somos el centro de confianza en Hellín donde cada detalle cuenta.",
  specialty: "Estética Avanzada",
  ctaLabel: "Realza tu Belleza",
  ctaHeadline: "¿Lista para sentirte estupenda?",
  ctaDescription: "Reserva tu cita en Amae Centro de Estética y descubre por qué somos el centro mejor valorado de Hellín. Te explicamos cada tratamiento con detalle y adaptamos cada sesión a tus necesidades.",
  statsLabel: "Clientas",
  schemaType: "BeautySalon",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Técnicas avanzadas de estética y belleza para realzar tu imagen y cuidar de ti.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la belleza en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu belleza, nuestra pasión",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para realzar tu belleza natural.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestras clientas",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestro centro",
    galleryDescription: "Un espacio diseñado para tu bienestar y relajación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestras clientas.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializadas",
    teamDescription: "Experiencia y pasión al servicio de tu belleza"
  }
}

export type Clinic = typeof clinic
