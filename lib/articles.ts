interface Article {
  id: number
  slug: string
  title: string
  description: string
  image: string
  fullContent: string
  category: string
  subtitle?: string
  importantFact?: string
}

export const ARTICLES_VARIOS: Article[] = [
  {
    id: 1,
    title: "Nuevo Centro Cultural Inaugurado en Villa del Dique",
    description:
      "La ciudad celebra la apertura de un espacio dedicado al arte y la cultura local, con una agenda repleta de actividades para toda la comunidad.",
    image: "https://images.unsplash.com/photo-1561839561-b13bcfe95249?auto=format&fit=crop&q=80",
    slug: "nuevo-centro-cultural",
    category: "noticias",
    subtitle: "Un Nuevo Espacio para el Arte y la Cultura",
    importantFact: "El centro cultural cuenta con más de 500m² dedicados a exposiciones y talleres.",
    fullContent: `
    Villa del Dique da un paso importante en su desarrollo cultural con la inauguración del nuevo Centro Cultural Municipal, un espacio que promete convertirse en el corazón artístico de la ciudad.

    [IMAGE:/images/centro-cultural-fachada.jpg] // La fachada renovada del Centro Cultural Municipal mantiene elementos arquitectónicos históricos

    ## Un Proyecto Largamente Esperado

    El nuevo centro cultural, ubicado en el corazón de Villa del Dique, es el resultado de años de planificación y trabajo conjunto entre el municipio y la comunidad artística local. El edificio, completamente restaurado, conserva elementos arquitectónicos históricos mientras incorpora instalaciones modernas.

    [IMAGE:/images/centro-cultural-interior.jpg] // El espacio principal de exposiciones cuenta con iluminación natural y sistemas de montaje versátiles

    ## Instalaciones y Servicios

    - Sala principal de exposiciones
    - Auditorio para 200 personas
    - Talleres multiuso
    - Biblioteca digital
    - Cafetería cultural

    [IMAGE:/images/centro-cultural-auditorio.jpg] // El auditorio principal durante su inauguración

    ## Programación Inaugural

    La agenda de apertura incluye exposiciones de artistas locales, conciertos de música clásica y popular, y talleres gratuitos para todas las edades. El objetivo es crear un espacio vivo y dinámico que refleje la rica vida cultural de Villa del Dique.

    ## Impacto en la Comunidad

    Este nuevo espacio no solo enriquece la oferta cultural de la ciudad, sino que también genera nuevas oportunidades para artistas locales y impulsa el turismo cultural en la región.
    `,
  },
  {
    id: 2,
    title: "Los Mejores Miradores de Villa del Dique",
    description:
      "Descubre los puntos panorámicos más impresionantes para contemplar el lago y las sierras desde diferentes ángulos.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80",
    slug: "mejores-miradores",
    category: "turismo",
    subtitle: "Vistas Panorámicas que Quitan el Aliento",
    importantFact: "El Mirador del Cerro cuenta con una altura de 850 metros sobre el nivel del mar.",
    fullContent: `
    Villa del Dique ofrece algunos de los paisajes más espectaculares de la región, y sus miradores son puntos privilegiados para contemplar estas maravillas naturales.

    ## Mirador del Cerro

    El más famoso y accesible de todos, ofrece una vista panorámica de 360 grados del lago y las sierras circundantes. Es especialmente recomendado para el atardecer.

    ## Mirador de la Cruz

    Ubicado en lo alto de una colina, este mirador histórico combina espiritualidad y naturaleza. El camino de ascenso está bien mantenido y es apto para toda la familia.

    ## Consejos para la Visita

    - Mejor momento: Durante el atardecer
    - Llevar: Agua, protector solar y cámara
    - Acceso: Senderos señalizados
    - Duración recomendada: 2-3 horas

    ## Actividades Disponibles

    Los miradores no son solo puntos de observación; también son lugares perfectos para:
    - Fotografía
    - Picnics
    - Observación de aves
    - Meditación y yoga
    `,
  },
  {
    id: 3,
    title: "Sabores Serranos: Gastronomía Local",
    description:
      "Un recorrido por los platos típicos y los restaurantes más destacados que mantienen viva la tradición culinaria de Villa del Dique.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
    slug: "sabores-serranos",
    category: "gastronomia",
    subtitle: "Tradición y Sabor en Cada Plato",
    importantFact: "Villa del Dique cuenta con más de 30 restaurantes tradicionales.",
    fullContent: `
    La gastronomía de Villa del Dique es un reflejo de su historia y su gente, donde los sabores tradicionales se fusionan con propuestas modernas.

    ## Platos Emblemáticos

    La cocina local se caracteriza por sus platos contundentes y sabrosos:
    - Locro serrano
    - Chivito a la llama
    - Empanadas criollas
    - Dulces caseros

    ## Restaurantes Destacados

    ### La Cocina de la Abuela
    Especializado en comida tradicional, este restaurante familiar mantiene vivas las recetas de generaciones.

    ### El Mirador del Lago
    Combina gastronomía de autor con vistas espectaculares al lago.

    ## Productos Locales

    La región es famosa por:
    - Quesos artesanales
    - Dulces regionales
    - Vinos de altura
    - Hierbas aromáticas

    ## Eventos Gastronómicos

    A lo largo del año se realizan diferentes festivales y ferias que celebran la gastronomía local.
    `,
  },
  {
    id: 4,
    title: "Festival de Teatro Independiente",
    description:
      "Villa del Dique se convierte en escenario de las artes escénicas con su primer festival de teatro independiente.",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80",
    slug: "festival-teatro",
    category: "cultura",
    subtitle: "El Arte Escénico Toma las Calles",
    importantFact: "Participan más de 20 compañías teatrales de todo el país.",
    fullContent: `
    El Festival de Teatro Independiente de Villa del Dique se consolida como un evento cultural de referencia en la región, transformando espacios públicos en escenarios.

    ## Programación Destacada

    El festival incluye:
    - Obras de teatro contemporáneo
    - Teatro callejero
    - Talleres de actuación
    - Charlas con directores

    ## Sedes y Espacios

    Las representaciones se realizan en:
    - Teatro Municipal
    - Plaza Principal
    - Centro Cultural
    - Espacios no convencionales

    ## Impacto Cultural

    Este evento no solo enriquece la vida cultural de Villa del Dique, sino que también:
    - Fomenta el turismo cultural
    - Impulsa el desarrollo de artistas locales
    - Genera espacios de encuentro comunitario

    ## Actividades Paralelas

    Además de las obras, el festival ofrece:
    - Workshops de actuación
    - Muestras fotográficas
    - Encuentros con artistas
    - Actividades para niños
    `,
  },
  {
    id: 5,
    title: "Guía de Emprendimientos Locales",
    description:
      "Conoce las historias de éxito y las oportunidades de negocio que ofrece Villa del Dique para emprendedores.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80",
    slug: "emprendimientos-locales",
    category: "negocios",
    subtitle: "Oportunidades y Desarrollo Local",
    importantFact: "El 60% de los comercios son emprendimientos familiares.",
    fullContent: `
    Villa del Dique se ha convertido en un polo de desarrollo para emprendedores, ofreciendo oportunidades únicas para quienes buscan iniciar su propio negocio.

    ## Sectores en Crecimiento

    Los principales sectores con potencial de desarrollo son:
    - Turismo sustentable
    - Gastronomía local
    - Artesanías
    - Servicios tecnológicos

    ## Casos de Éxito

    ### Eco Aventuras
    Una empresa familiar que comenzó ofreciendo excursiones y hoy es referente en turismo aventura.

    ### Sabores del Valle
    Productores locales que transformaron recetas familiares en una marca reconocida.

    ## Apoyo al Emprendedor

    El municipio ofrece:
    - Asesoramiento gratuito
    - Programas de financiamiento
    - Capacitaciones
    - Espacios de networking

    ## Oportunidades de Inversión

    Sectores con mayor potencial:
    - Alojamiento turístico
    - Servicios gastronómicos
    - Comercio especializado
    - Tecnología y servicios digitales
    `,
  },
]

