import type { Messages } from "./en";
import { esData } from "./es-data";

export const es: Messages = {
  ui: {
    nav: { whatWeDo: "Servicios", industries: "Sectores", work: "Proyectos", process: "Metodología", insights: "Insights", about: "Nosotros", careers: "Empleo", contact: "Contacto", start: "Iniciar un proyecto", search: "Buscar", openMenu: "Abrir menú", closeMenu: "Cerrar menú", language: "Idioma" },
    header: {
      newGuide: "Nueva guía",
      banner: "Ingeniería de software desde Nueva Delhi para equipos en la India y en todo el mundo",
      mega: {
        services: { title: "Servicios", text: "Ingeniería de software y productos digitales, desde la primera arquitectura hasta la operación a largo plazo.", cta: "Todos los servicios" },
        industries: { title: "Sectores", text: "Sistemas adaptados a la realidad operativa de cada sector.", cta: "Todos los sectores" },
        insights: { title: "Insights", text: "Artículos prácticos sobre arquitectura, producto y sistemas empresariales.", cta: "Todos los artículos" },
      },
      megaCard: "¿Tiene un sistema que construir o mejorar?",
      latest: "Último artículo",
      allInsights: "Todos los artículos",
      caseStudies: "Casos de éxito",
      mobileAll: { services: "Todos los servicios", industries: "Todos los sectores", insights: "Todos los artículos" },
    },
    footer: {
      blurb: "Software a medida, aplicaciones empresariales y productos digitales, diseñados y desarrollados en Nueva Delhi, India.",
      email: "Correo", phone: "Teléfono", india: "India", global: "Internacional", globalText: "Colaboración remota con clientes fuera de la India",
      services: "Servicios", industries: "Sectores", company: "Empresa", follow: "Síguenos",
      links: { work: "Proyectos", process: "Metodología", technology: "Tecnología", insights: "Insights", about: "Nosotros", careers: "Empleo", contact: "Contacto" },
      newsletterTitle: "Notas de ingeniería, cada mes.",
      newsletterText: "Artículos sobre arquitectura, producto y sistemas empresariales escritos por nuestro equipo.",
      statement: "Software creado para\nla forma en que funciona su empresa.",
      rights: "Registrada como MSME. Todos los derechos reservados.",
      legal: { privacy: "Privacidad", terms: "Términos", cookie: "Política de cookies", accessibility: "Accesibilidad", sitemap: "Mapa del sitio" },
      cookieSettings: "Configuración de cookies",
    },
    common: {
      home: "Inicio",
      start: "Iniciar un proyecto",
      viewWork: "Ver proyectos",
      readCaseStudy: "Leer el caso",
      challenge: "Reto", solution: "Solución", outcome: "Resultado", technology: "Tecnología",
      minRead: "min de lectura",
      featured: "Destacado",
      faqs: "Preguntas frecuentes",
      all: "Todos",
      result: "resultado", results: "resultados",
      clearFilters: "Borrar filtros",
      noMatchTitle: "Todavía no hay resultados con estos filtros.",
      noMatchText: "Quite un filtro, o cuéntenos su proyecto y le compartiremos directamente la experiencia relevante.",
      filterBy: "Filtrar por",
      lastUpdated: "Última actualización",
      englishOnly: "Inglés",
    },
    cta: { title: "¿Tiene un producto que\nmerece ser construido?", text: "Convirtamos la idea en un sistema que su empresa pueda usar de verdad." },
    form: { optional: "(opcional)", select: "Seleccione…", sending: "Enviando…", reply: "Respondemos en menos de 24 horas.", error: "Algo salió mal. Inténtelo de nuevo.", network: "No se pudo contactar con el servidor. Compruebe su conexión e inténtelo de nuevo.", honeypot: "Deje este campo vacío" },
    newsletter: { email: "Correo profesional", subscribe: "Suscribirse", subscribing: "Suscribiendo…", done: "Gracias, ya está suscrito. El próximo número llegará a su bandeja de entrada.", note: "Un correo al mes. Puede darse de baja cuando quiera.", error: "Algo salió mal. Inténtelo de nuevo.", network: "No se pudo contactar con el servidor. Inténtelo de nuevo." },
    cookie: { region: "Consentimiento de cookies", text: "Usamos cookies esenciales para el funcionamiento del sitio y, solo con su permiso, cookies de Google Analytics y Google Ads para medir visitas y solicitudes.", policy: "Política de cookies", accept: "Aceptar", decline: "Rechazar" },
  },

  meta: {
    home: { title: "Eryon — Desarrollo de software a medida e ingeniería de productos digitales", description: "Software a medida, aplicaciones web empresariales, apps móviles, SaaS y sistemas CRM/ERP, diseñados y desarrollados por Eryon en Nueva Delhi para empresas de la India y de todo el mundo." },
    about: { title: "Sobre Eryon — Empresa de ingeniería de software en Nueva Delhi", description: "Eryon es una empresa de ingeniería de software y productos digitales en Nueva Delhi que desarrolla software a medida y sistemas empresariales para clientes en la India y en el extranjero." },
    services: { title: "Servicios de desarrollo de software", description: "Software a medida, apps web y móviles, SaaS, CRM y ERP, e-commerce, automatización, cloud y DevOps, datos, UI/UX, seguridad y modernización de Eryon." },
    process: { title: "Cómo trabajamos — Nuestro proceso de entrega", description: "El proceso de ocho etapas de Eryon, del descubrimiento a la optimización, con objetivos, entregables y participación del cliente claros en cada paso." },
    technology: { title: "Tecnología — Nuestro stack de ingeniería", description: "Las tecnologías de frontend, backend, móvil, datos, cloud, DevOps y seguridad que usa Eryon, enlazadas a los proyectos entregados donde se utilizaron." },
    work: { title: "Proyectos — Casos de éxito", description: "Casos de CRM, ERP, sistemas de RR. HH., SaaS, e-commerce y apps móviles desarrollados por Eryon, con el reto, la arquitectura y el resultado de cada uno." },
    contact: { title: "Contacto — Inicie un proyecto de software", description: "Cuéntele a Eryon su proyecto de software. Respondemos en menos de 24 horas. Correo connect@eryonai.com o teléfono +91 78278 86571. Con sede en Nueva Delhi, India." },
    contactSuccess: { title: "Mensaje recibido", description: "Gracias por contactar con Eryon." },
    insights: { title: "Insights — Arquitectura, producto y tecnología empresarial", description: "Artículos prácticos de los ingenieros de Eryon sobre arquitectura de software, SaaS, CRM y ERP, cloud, seguridad, modernización e ingeniería de producto." },
    privacy: { title: "Política de privacidad", description: "Cómo Eryon recopila, usa y protege los datos personales enviados a través de este sitio web." },
    terms: { title: "Términos y condiciones", description: "Términos que rigen el uso del sitio web de Eryon." },
    cookie: { title: "Política de cookies", description: "Las cookies y el almacenamiento del navegador que utiliza el sitio web de Eryon." },
  },

  home: {
    eyebrow: "Ingeniería de software y productos digitales",
    heroBefore: "Creamos software en el que las",
    heroEm: "empresas",
    heroAfter: "pueden confiar.",
    heroText: "Eryon diseña y desarrolla productos digitales a medida, aplicaciones empresariales y sistemas de negocio basados en necesidades operativas reales, desde la primera arquitectura hasta el crecimiento a largo plazo.",
    heroAlts: ["Panel operativo con resumen de ingresos, pedidos por estado y pedidos recientes", "Gestión de horarios de un ERP escolar", "Gestión móvil de una tienda con ventas y pedidos recientes"],
    trust: ["Ingeniería de software", "Ingeniería de producto", "Sistemas empresariales", "Cloud e infraestructura"],
    numbers: "En cifras · desde 2019",
    credentialsLabel: "Certificaciones",
    build: {
      eyebrow: "Qué construimos", title: "Sistemas para el trabajo que mantiene su negocio en marcha.", intro: "Las capturas proceden de sistemas que hemos diseñado y desarrollado.", cta: "Ver todos los servicios",
      cards: [
        { category: "Software a medida", title: "Sistemas operativos", text: "Plataformas internas que reflejan cómo funciona su empresa: aprobaciones, planificación, proyectos y nóminas." },
        { category: "Web empresarial", title: "Plataformas web y portales", text: "Paneles y portales con varios roles para empleados, socios y clientes." },
        { category: "Móvil", title: "Productos móviles", text: "Apps de iOS y Android conectadas a los sistemas que las respaldan." },
        { category: "SaaS", title: "Plataformas SaaS", text: "Productos multiinquilino con facturación, onboarding y margen para crecer." },
        { category: "CRM y ERP", title: "Sistemas CRM y ERP", text: "Un único sistema para ventas, operaciones, RR. HH. y finanzas." },
        { category: "E-commerce", title: "Plataformas de comercio", text: "Tiendas rápidas con las operaciones de pedidos que las sostienen." },
      ],
      previewAlt: "– vista previa de la interfaz",
    },
    around: {
      eyebrow: "Construido en torno a su negocio", title: "Entendemos la operación antes de escribir el software.",
      cols: [
        { k: "Entender", t: "Cómo se trabaja de verdad", d: "Nos sentamos con quienes hacen el trabajo, trazamos el proceso actual y detectamos dónde se pierden tiempo, dinero y datos." },
        { k: "Diseñar", t: "Un sistema que encaja", d: "Roles, flujos y un modelo de datos que reflejan su negocio, diseñados y probados con su equipo antes de escribir código de producción." },
        { k: "Desarrollar", t: "Hecho para durar", d: "Arquitectura limpia, pruebas automatizadas en los flujos críticos, seguridad en el modelo de datos e infraestructura que es suya." },
      ],
    },
    capabilities: {
      eyebrow: "Capacidades", title: "Ingeniería en todo el ciclo de vida.", intro: "Un solo equipo para arquitectura, producto, infraestructura y operación, para que nada se pierda en los traspasos.",
      items: [
        { title: "Ingeniería de producto", text: "Del primer lanzamiento a un producto que atiende a muchos clientes con fiabilidad." },
        { title: "Desarrollo de aplicaciones", text: "Aplicaciones web y móviles para la operación diaria." },
        { title: "Infraestructura cloud", text: "Entornos, pipelines y monitorización que convierten los despliegues en rutina." },
        { title: "Plataformas de datos", text: "Pipelines e informes en los que se puede confiar." },
        { title: "Integración de sistemas", text: "APIs y eventos que conectan sus herramientas actuales." },
        { title: "Automatización", text: "El trabajo repetitivo, fuera de las manos de su equipo." },
        { title: "Seguridad", text: "Control de acceso y bastionado previstos desde el principio, no añadidos después." },
        { title: "UI/UX", text: "Interfaces diseñadas en torno a tareas reales, junto a los ingenieros que las construyen." },
      ],
    },
    work: { eyebrow: "Proyectos destacados", title: "Lo que hemos construido.", cta: "Ver todos los casos", intro: "Tres sistemas en industria, salud y educación: el problema, el sistema que construimos y lo que cambió para el negocio." },
    process: { eyebrow: "Metodología", title: "Seis etapas, cada una con algo que puede revisar.", cta: "Ver el proceso completo" },
    industries: { eyebrow: "Sectores", title: "Pensado para la realidad de su sector.", cta: "Todos los sectores" },
    tech: { eyebrow: "Ecosistema tecnológico", title: "Herramientas probadas, elegidas según el problema.", text: "Parte del stack de trabajo de nuestro equipo; la página de Tecnología indica los proyectos en los que se usó cada una.", cta: "Nuestra tecnología" },
    why: {
      eyebrow: "Por qué Eryon", title: "Por qué los clientes nos confían sus sistemas clave.",
      items: [
        { title: "Profundidad técnica", text: "Servicios orientados a eventos, seguridad a nivel de fila, modelos de datos multiinquilino: tomamos las decisiones de arquitectura de forma deliberada y las documentamos." },
        { title: "Conocimiento del negocio", text: "Partimos de cómo fluye el trabajo en su organización, no de una lista de funciones. El software sigue a la operación." },
        { title: "Entrega transparente", text: "Software funcionando cada semana, un alcance por escrito y estimaciones con sus supuestos." },
        { title: "Relación a largo plazo", text: "El código y la infraestructura son suyos. Seguimos a cargo de la operación y las mejoras, o hacemos un traspaso limpio." },
      ],
    },
    insights: { eyebrow: "Insights", title: "Notas de ingeniería.", cta: "Todos los artículos" },
    faq: {
      title: "Lo primero que nos preguntan las empresas.",
      items: [
        { q: "¿Qué desarrolla Eryon?", a: "Software a medida para empresas: aplicaciones web y portales, apps móviles, productos SaaS, sistemas CRM y ERP, plataformas de e-commerce, automatización de procesos, paneles de datos y la infraestructura cloud en la que funcionan." },
        { q: "¿Cuánto cuesta desarrollar software a medida?", a: "Depende del número de usuarios y roles, los flujos, las integraciones y el nivel de diseño. Tras un breve descubrimiento recibe una estimación por escrito para un primer lanzamiento bien definido, de modo que el presupuesto queda fijado antes de empezar el desarrollo." },
        { q: "¿Cuánto se tarda en desarrollar una app web o móvil?", a: "Un primer lanzamiento acotado suele llevar unos meses. Planificamos las entregas para que su equipo use pronto partes del sistema, y usted ve software funcionando cada semana." },
        { q: "¿Con qué países trabajan?", a: "Tenemos sede en Nueva Delhi y trabajamos en remoto con clientes de la India, EE. UU., Reino Unido, Emiratos Árabes Unidos, Australia y Canadá, con horarios de solapamiento acordados." },
        { q: "¿Qué tecnologías utilizan?", a: "Principalmente React, Next.js y TypeScript en el frontend; Java Spring Boot, Node.js y Python en el backend; PostgreSQL, MongoDB y Redis para datos; React Native y Flutter para móvil; y AWS, Azure o Google Cloud con Docker y Kubernetes." },
        { q: "¿Ofrecen soporte después del lanzamiento?", a: "Sí. Cada entrega incluye un periodo de soporte, y la mayoría de los clientes continúan con un contrato de monitorización, corrección de errores y mejoras planificadas." },
      ],
    },
  },

  about: {
    crumb: "Nosotros", eyebrow: "Sobre Eryon", title: "Ingeniería con criterio.",
    intro: "Eryon es una empresa de ingeniería de software y productos digitales con sede en Nueva Delhi que desarrolla software para empresas desde 2019. Diseñamos, construimos y mantenemos los sistemas en los que se apoyan las empresas (CRM, ERP, plataformas operativas, portales de clientes, apps móviles y productos SaaS) para clientes en la India y en todo el mundo.",
    who: {
      eyebrow: "Quiénes somos", title: "Un equipo de ingenieros y diseñadores al que le gustan los problemas operativos difíciles.",
      p1: "Nuestro trabajo suele estar en el centro de la empresa: el sistema que gestiona el inventario, los turnos, el pipeline comercial o la contabilidad. Ahí es donde el software tiene más impacto en cómo funciona realmente un negocio, y donde tiene que ser fiable.",
      p2: "Desde 2019 hemos entregado más de 150 proyectos a más de 80 clientes en la India, EE. UU., Reino Unido, Emiratos Árabes Unidos, Australia y Canadá, en industria, salud, educación, inmobiliaria, comercio, logística y servicios profesionales, con tecnologías habituales que su futuro equipo podrá mantener.",
      alts: ["Panel CRM desarrollado por Eryon para un distribuidor de piedra natural", "Panel de RR. HH. hospitalario desarrollado por Eryon"],
    },
    numbers: "Eryon en cifras",
    mission: { eyebrow: "Nuestra misión", text: "Hacer que el software fiable y bien diseñado esté al alcance de cualquier empresa, desde su primer producto hasta su sistema central." },
    vision: { eyebrow: "Nuestra visión", text: "Ser el socio de ingeniería al que las empresas confían los sistemas de los que dependen, durante todo el tiempo que esos sistemas importen." },
    beliefs: {
      eyebrow: "En qué creemos", title: "Cuatro principios detrás de cada decisión.",
      items: [
        { t: "El software debe adaptarse al negocio", d: "No al revés. Primero entendemos la operación y después diseñamos el sistema en torno a ella." },
        { t: "Claridad antes que ingenio", d: "La tecnología probada y bien conocida y el código legible duran más que las decisiones de moda." },
        { t: "Decir lo que hacemos y hacer lo que decimos", d: "Alcance por escrito, avances visibles cada semana y aviso temprano cuando algo cambia." },
        { t: "La propiedad es del cliente", d: "Su código, sus cuentas, su documentación, desde el primer día." },
      ],
    },
    how: { eyebrow: "Cómo trabajamos", title: "Un equipo responsable desde el primer taller hasta producción.", text: "Un lead engineer se responsabiliza de la arquitectura y la entrega de cada proyecto, con diseñadores y desarrolladores que permanecen en él. Usted ve software funcionando cada semana y revisa por escrito cada decisión importante.", cta: "Nuestro proceso de entrega" },
    culture: {
      eyebrow: "Nuestra cultura de ingeniería", title: "Hábitos que hacen fiable el software.",
      items: [
        { t: "Revisión de código en cada cambio", d: "Ningún código llega a la rama principal sin que otro ingeniero lo haya leído." },
        { t: "Pruebas donde importa", d: "Las pruebas automatizadas se centran en los flujos que tocan dinero, permisos y datos." },
        { t: "Arquitectura documentada", d: "Las decisiones importantes se registran junto con las alternativas consideradas." },
        { t: "Los ingenieros conocen a los usuarios", d: "Quienes construyen el sistema hablan con quienes lo van a usar." },
        { t: "Tiempo para aprender", d: "Los ingenieros comparten lo que saben en revisiones internas y en artículos como nuestros Insights." },
        { t: "Ritmo sostenible", d: "Los equipos cansados escriben errores. Planificamos para poder mantener el ritmo." },
      ],
    },
    leadership: { eyebrow: "Nuestra dirección", title: "Personas con experiencia, cerca del trabajo.", lead: "La dirección de Eryon está implicada en el día a día. Los responsables de la empresa revisan arquitecturas, participan en los talleres de descubrimiento y están disponibles cuando llama un cliente.", text: "Cada proyecto tiene un lead engineer designado, responsable de las decisiones técnicas y de la entrega, y una línea directa con la dirección si algo debe escalarse." },
    capabilities: { eyebrow: "Nuestros servicios", title: "Doce servicios, un solo equipo.", cta: "Todos los servicios" },
    trust: { eyebrow: "Certificaciones y confianza", title: "Estándares reconocidos detrás de nuestro trabajo." },
    standards: {
      eyebrow: "Nuestros estándares", title: "Las referencias con las que nos medimos.",
      items: ["WCAG 2.2 AA como base de accesibilidad para las interfaces que diseñamos", "OWASP Top 10 como base para las revisiones de seguridad de aplicaciones", "Infrastructure as Code para todos los entornos que gestionamos", "Entornos de preproducción y producción separados", "Ningún secreto en el código fuente", "Documentación para cada sistema"],
    },
    locations: { eyebrow: "Ubicaciones", title: "Con base en la India. Trabajando en todo el mundo.", hq: "India — Sede central", hqPlace: "Nueva Delhi, India", hqText: "Ingeniería, diseño y entrega.", global: "Internacional", globalPlace: "Colaboración remota", globalText: "Para clientes fuera de la India, con horarios de solapamiento acordados en cada proyecto." },
    cta: "Construyamos juntos\nalgo útil.",
  },

  services: {
    crumb: "Servicios", eyebrow: "Servicios", title: "Tecnología que impulsa\nel negocio.",
    intro: "Doce servicios, un solo equipo. Diseñamos, desarrollamos y mantenemos los sistemas en los que se apoyan las empresas, desde el primer lanzamiento hasta la plataforma en la que se convierte. Cada servicio enlaza a una página detallada con el enfoque, la tecnología, proyectos relacionados y respuestas a preguntas frecuentes.",
    index: "Índice de servicios", explore: "Explorar", build: "Qué construimos", deliverables: "Entregables", useCases: "Casos de uso habituales", technology: "Tecnología", industries: "Sectores relacionados", work: "Casos relacionados",
    models: {
      eyebrow: "Modelos de colaboración", title: "Tres formas de trabajar con nosotros.",
      items: [
        { title: "Entrega de proyectos", text: "Un alcance definido, un plan de entregas y un equipo responsable desde el descubrimiento hasta el lanzamiento." },
        { title: "Equipo de ingeniería dedicado", text: "Ingenieros, un lead y un diseñador que trabajan como parte de su organización de producto." },
        { title: "Operación y evolución", text: "Monitorización, corrección de errores y mejoras planificadas para sistemas en producción." },
      ],
    },
    cta: { title: "¿No sabe qué servicio encaja?", text: "Describa el problema. Le diremos qué construiríamos, o si realmente necesita construir algo." },
    detailsInEnglish: "Las páginas detalladas de cada servicio están en inglés.",
  },

  process: {
    crumb: "Metodología", eyebrow: "Metodología", title: "Un proceso de entrega\nque puede ver por dentro.",
    intro: "Ocho etapas desde la primera conversación hasta un sistema que mejora de forma continua. Cada etapa tiene un objetivo claro, actividades definidas, documentos para revisar y un papel claro para su equipo, para que siempre sepa dónde está el proyecto y qué viene después.",
    labels: { activities: "Actividades", deliverables: "Entregables", involvement: "Su participación", output: "Resultado" },
    stages: [
      { id: "discovery", title: "Descubrimiento", objective: "Entender cómo funciona realmente el negocio antes de decidir qué construir.", activities: ["Entrevistas con responsables y usuarios", "Observación del proceso actual", "Revisión de sistemas, datos e integraciones existentes", "Recogida de restricciones: presupuesto, plazos, cumplimiento normativo"], deliverables: ["Mapa del proceso actual", "Definición del problema y objetivos", "Inventario de integraciones y datos"], client: "Acceso a quienes hacen el trabajo, no solo a quienes lo gestionan. Normalmente, unos pocos talleres.", output: "Una comprensión compartida y por escrito del problema." },
      { id: "definition", title: "Definición del producto", objective: "Decidir qué debe hacer el primer lanzamiento y qué, deliberadamente, no hará.", activities: ["Roles de usuario y permisos", "Flujos principales y casos límite", "Alcance y priorización del lanzamiento", "Requisitos no funcionales"], deliverables: ["Documento de alcance", "Plan de entregas", "Estimación con supuestos por escrito"], client: "Decisiones sobre prioridades y concesiones. Ayuda mucho tener un único product owner por su parte.", output: "Un alcance y un plan acordados con los que puede evaluarnos." },
      { id: "architecture", title: "Arquitectura", objective: "Tomar de forma deliberada las decisiones difíciles de cambiar.", activities: ["Diseño del modelo de datos", "Límites de servicios y módulos", "Plan de hosting y entornos", "Modelo de seguridad y acceso"], deliverables: ["Documento de arquitectura con sus concesiones", "Modelo de datos", "Plan de infraestructura"], client: "Revisión con sus interlocutores técnicos, si los hay. Si no, explicamos las decisiones en lenguaje claro.", output: "Una base técnica revisada." },
      { id: "ux-ui", title: "UX / UI", objective: "Diseñar interfaces en torno a tareas reales y probarlas antes del desarrollo.", activities: ["Flujos de usuario y wireframes", "Prototipos navegables", "Diseño visual y design system", "Pruebas de usabilidad con usuarios reales"], deliverables: ["Flujos y wireframes", "Diseños detallados", "Prototipo", "Componentes del design system"], client: "Rondas de comentarios y acceso a algunos usuarios representativos.", output: "Diseños validados, listos para desarrollar." },
      { id: "development", title: "Desarrollo", objective: "Construir software funcional en ciclos cortos que usted pueda ver y dirigir.", activities: ["Planificación de sprints", "Desarrollo de funcionalidades en todo el stack", "Revisión de código en cada cambio", "Pruebas automatizadas de los flujos críticos"], deliverables: ["Software funcionando en preproducción cada semana", "Código fuente en su repositorio", "Notas de sprint"], client: "Asistencia a la demo semanal y respuestas rápidas a preguntas de producto.", output: "Software que avanza de forma visible semana a semana." },
      { id: "testing", title: "Pruebas", objective: "Demostrar que el sistema hace lo que debe antes de que usuarios reales dependan de él.", activities: ["Pruebas funcionales y de regresión", "Pruebas de aceptación por rol", "Comprobaciones de rendimiento", "Revisión de seguridad"], deliverables: ["Plan y resultados de pruebas", "Aceptación firmada", "Hallazgos de seguridad y correcciones"], client: "Pruebas de aceptación realizadas por quienes usarán el sistema.", output: "Una versión candidata aprobada por su equipo." },
      { id: "deployment", title: "Puesta en producción", objective: "Salir a producción con seguridad, con un camino de vuelta si algo falla.", activities: ["Configuración del entorno de producción", "Migración y verificación de datos", "Despliegue gradual", "Formación de usuarios"], deliverables: ["Sistema en producción", "Informe de verificación de la migración", "Runbooks de operación", "Material de formación"], client: "La decisión de salida a producción, asistencia a las formaciones y un plan de comunicación para sus usuarios.", output: "Un sistema en funcionamiento con usuarios formados." },
      { id: "optimization", title: "Optimización", objective: "Mejorar el sistema a partir de su uso real.", activities: ["Monitorización y respuesta a incidencias", "Análisis de uso", "Optimización de rendimiento y costes", "Mejoras planificadas"], deliverables: ["Informes de soporte", "Backlog de mejoras", "Entregas periódicas"], client: "Comentarios de los usuarios y revisiones periódicas de prioridades.", output: "Un sistema que mejora después del lanzamiento, en lugar de degradarse." },
    ],
    constant: {
      eyebrow: "Lo que no cambia", title: "Principios en cada etapa.",
      items: [
        { t: "Decisiones por escrito", d: "El alcance, la arquitectura y las concesiones se documentan, no solo se comentan." },
        { t: "Avances visibles", d: "Software funcionando cada semana, en un entorno que usted puede usar." },
        { t: "Su propiedad", d: "Código, diseños, cuentas y documentación son suyos desde el primer día." },
        { t: "Sin sorpresas", d: "Cualquier cambio de alcance, plazo o coste se comunica pronto y con opciones." },
      ],
    },
    faq: {
      title: "Preguntas sobre la metodología.",
      items: [
        { q: "¿Cuánto dura cada etapa?", a: "Depende del tamaño del sistema. El descubrimiento y la definición suelen llevar unas semanas; el desarrollo avanza en ciclos semanales hasta el primer lanzamiento. Recibirá un plan con fechas al terminar la definición del producto." },
        { q: "¿Podemos saltarnos el descubrimiento si ya tenemos requisitos?", a: "Revisamos lo que tiene y acortamos el descubrimiento en consecuencia. Rara vez lo eliminamos del todo: una revisión breve casi siempre encuentra supuestos que conviene cuestionar." },
        { q: "¿Y si las prioridades cambian a mitad del proyecto?", a: "Es habitual. Las demos semanales y un backlog visible facilitan repriorizar; le mostramos el impacto en alcance y plazos antes de que decida." },
        { q: "¿Necesitamos una persona técnica en nuestro equipo?", a: "No. Lo que ayuda es alguien con capacidad de decisión que conozca bien el negocio. Explicamos las decisiones técnicas en lenguaje claro." },
      ],
    },
    cta: { title: "Todo empieza\ncon una conversación.", text: "El primer paso es hablar de su operación y de lo que no funciona. Sin compromiso y sin discurso comercial." },
  },

  technology: {
    crumb: "Tecnología", eyebrow: "Tecnología", title: "Herramientas probadas,\nelegidas con criterio.",
    intro: "Elegimos tecnologías para las que su futuro equipo pueda contratar y que pueda mantener. Cuando una tecnología se ha usado en un caso publicado, lo enlazamos, para que la vea en contexto en lugar de fiarse solo de nuestra palabra.",
    categories: "Categorías tecnológicas", usedIn: "Usado en",
    cta: { title: "¿Ya tiene\nun stack tecnológico?", text: "Trabajamos en bases de código existentes tan a menudo como empezamos otras nuevas. Cuéntenos qué usa hoy." },
  },

  work: {
    crumb: "Proyectos", eyebrow: "Proyectos", title: "Sistemas en producción,\nexplicados con honestidad.",
    intro: "Una selección de más de 150 proyectos entregados desde 2019. Cada caso describe el problema, la arquitectura, el producto y lo que cambió para el negocio, con las decisiones y concesiones que hay detrás.",
    all: "Todos los casos",
    filters: { industry: "Sector", service: "Servicio", platform: "Plataforma", business: "Modelo" },
    detailsInEnglish: "Los casos detallados están en inglés.",
  },

  contact: {
    crumb: "Contacto", eyebrow: "Contacto", title: "Construyamos algo útil.",
    intro: "Cuéntenos qué sistema necesita: qué debe hacer, quién lo usará y qué no funciona hoy. Cuanto más contexto comparta, más útil será nuestra respuesta.",
    formTitle: "Detalles del proyecto", required: "Los campos marcados con * son obligatorios.", submit: "Enviar solicitud",
    fields: { name: "Nombre", email: "Correo profesional", company: "Empresa", phone: "Teléfono", projectType: "Tipo de proyecto", budget: "Presupuesto estimado", timeline: "Plazo", message: "Mensaje", messageHint: "¿Qué debe hacer el sistema, quién lo usará y cómo funciona hoy?" },
    projectExtra: ["Equipo de ingeniería dedicado", "Otra cosa"],
    budgets: ["Menos de 2.000 USD (≈ 1,7 lakh ₹)", "2.000–5.000 USD (≈ 1,7–4 lakh ₹)", "5.000–15.000 USD (≈ 4–12 lakh ₹)", "15.000–50.000 USD (≈ 12–40 lakh ₹)", "50.000–150.000 USD (≈ 40 lakh–1,25 crore ₹)", "Más de 150.000 USD", "Hablémoslo"],
    timelines: ["Lo antes posible", "En 3 meses", "De 3 a 6 meses", "Solo estoy explorando"],
    other: { title: "Otras formas de contacto", email: "Correo", phone: "Teléfono", location: "Ubicación", locationValue: "Nueva Delhi, India", remote: "Colaboración remota con clientes de todo el mundo.", credentials: "Certificaciones", nda: "NDA disponible bajo petición" },
    next: {
      eyebrow: "Qué pasa después", title: "Después de pulsar Enviar.",
      items: [
        { t: "Lo leemos con atención", d: "Una persona de nuestro equipo lee su mensaje; no hay cadenas de respuestas automáticas." },
        { t: "Respuesta en menos de 24 horas", d: "Normalmente con algunas preguntas para entender mejor el problema." },
        { t: "Una llamada de descubrimiento", d: "Una conversación sobre su operación, sus restricciones y qué sería un éxito." },
        { t: "Una propuesta a medida", d: "Alcance, enfoque y estimación por escrito, o una opinión honesta si quizá no necesita software a medida." },
      ],
    },
    faq: {
      title: "Antes de escribirnos.",
      items: [
        { q: "¿La primera conversación es gratuita?", a: "Sí. La primera conversación sirve para entender su problema y ver juntos si somos el socio adecuado." },
        { q: "¿Firman acuerdos de confidencialidad?", a: "Sí. Si quiere un acuerdo antes de compartir detalles, indíquelo en su mensaje y le enviaremos uno o firmaremos el suyo." },
        { q: "¿Trabajan con clientes fuera de la India?", a: "Sí. Trabajamos en remoto y acordamos horarios de solapamiento y rutinas de comunicación al inicio del proyecto." },
        { q: "¿Y si todavía no conozco mi presupuesto?", a: "Es habitual. Elija «Hablémoslo»: en la primera conversación le ayudaremos a entender cuánto costarían distintos alcances." },
      ],
    },
  },

  contactSuccess: { eyebrow: "Mensaje recibido", title: "Gracias. Nos pondremos en contacto.", textBefore: "Un miembro de nuestro equipo de ingeniería le responderá en menos de 24 horas, normalmente con algunas preguntas. Si es urgente, llámenos al", work: "Ver proyectos", process: "Cómo trabajamos" },

  insights: {
    crumb: "Insights", eyebrow: "Insights", title: "Notas de ingeniería para\nquienes dirigen empresas.",
    intro: "Arquitectura, decisiones de producto y las concesiones prácticas detrás del software empresarial, escritas por quienes lo construyen.",
    category: "Categoría",
    newsletterTitle: "Reciba los nuevos artículos por correo", newsletterText: "Una breve nota mensual con nuestros últimos artículos sobre arquitectura, SaaS y sistemas empresariales.",
  },

  article: { author: "Autor", published: "Publicado", updated: "Actualizado", readingTime: "Tiempo de lectura", min: "min", contents: "Contenido", takeaways: "Claves", relatedService: "Servicio relacionado", newsletter: "¿Le ha gustado? Reciba el próximo por correo.", related: "Artículos relacionados", authorName: "Eryon Engineering" },

  legal: {
    privacy: {
      title: "Política de privacidad",
      intro: "Esta política describe qué datos personales recopila ERYON AI Software Solutions («Eryon», «nosotros») a través de este sitio web, por qué y qué opciones tiene usted. Sigue la Digital Personal Data Protection Act 2023 de la India.",
      sections: [
        { h: "Qué datos recopilamos", p: ["Cuando envía el formulario de contacto: su nombre, correo profesional, empresa, teléfono, detalles del proyecto y, si los indica, presupuesto y plazo.", "Cuando se suscribe a la newsletter: su dirección de correo.", "Cuando solicita un empleo: su nombre, datos de contacto, los enlaces que facilite, su currículum y cualquier nota.", "Nuestro proveedor de hosting registra datos estándar del servidor (como la dirección IP, el navegador y la hora de la solicitud) por motivos de seguridad y fiabilidad.", "Si acepta las cookies, Google Analytics y Google Ads recopilan información sobre su visita (páginas vistas, dispositivo, ubicación aproximada y si envió una solicitud) para que podamos evaluar nuestro sitio y nuestra publicidad. Sin su consentimiento, estas herramientas no se cargan."] },
        { h: "Para qué los usamos", p: ["Para responder a su consulta y hablar de una posible colaboración.", "Para revisar candidaturas y contactar con los candidatos.", "Para proteger el sitio, incluida la limitación de peticiones y la prevención de spam.", "Con su consentimiento, para medir el tráfico del sitio y la eficacia de nuestra publicidad."] },
        { h: "Con quién los compartimos", p: ["Los formularios enviados llegan a nuestro equipo por correo electrónico a través de nuestro proveedor de correo.", "Con su consentimiento, Google (Google Analytics y Google Ads) trata datos de visitas y conversiones conforme a su propia política de privacidad.", "Nuestros formularios usan Google reCAPTCHA para prevenir el spam; trata datos del dispositivo y de la interacción conforme a la política de privacidad de Google.", "Los formularios enviados también se guardan en una hoja de cálculo privada de Google que usa nuestro equipo.", "No vendemos datos personales. Podemos divulgar datos si la ley lo exige."] },
        { h: "Cuánto tiempo los conservamos", p: ["Conservamos las consultas el tiempo necesario para responderlas y, si trabajamos juntos, durante la colaboración; por lo general no más de 24 meses desde el último contacto, salvo que la ley exija otra cosa.", "Conservamos las direcciones de la newsletter hasta que se dé de baja.", "Conservamos las candidaturas hasta 12 meses para poder tenerle en cuenta en futuros puestos, salvo que pida eliminarlas antes."] },
        { h: "Sus derechos", p: ["Puede solicitar el acceso, la rectificación o la supresión de los datos que tenemos sobre usted, o retirar su consentimiento, escribiendo a connect@eryonai.com. Responderemos en un plazo razonable."] },
        { h: "Seguridad", p: ["Los datos se transmiten mediante conexiones cifradas (HTTPS). El acceso a consultas y candidaturas se limita a las personas que lo necesitan."] },
        { h: "Cambios", p: ["Podemos actualizar esta política. La fecha de la parte superior indica el último cambio."] },
        { h: "Contacto", p: ["ERYON AI Software Solutions, New Delhi, Delhi 110001, India.", "Correo connect@eryonai.com · Teléfono +91 78278 86571"] },
      ],
    },
    terms: {
      title: "Términos y condiciones",
      intro: "Estos términos regulan el uso de este sitio web, gestionado por ERYON AI Software Solutions. Los proyectos de clientes se rigen por contratos escritos independientes.",
      sections: [
        { h: "Uso del sitio", p: ["Puede consultar y compartir el contenido de este sitio con fines lícitos. No debe interferir en su funcionamiento, intentar acceder sin autorización ni enviar solicitudes automatizadas o abusivas."] },
        { h: "Contenido", p: ["El contenido de este sitio es información general y no constituye asesoramiento profesional para su situación concreta. Los casos describen trabajos anteriores; las capturas y descripciones pueden estar simplificadas o anonimizadas para proteger la confidencialidad."] },
        { h: "Propiedad intelectual", p: ["Los textos, el diseño y el código de este sitio pertenecen a ERYON AI Software Solutions, salvo que se indique lo contrario. Los nombres de productos y marcas mencionados pertenecen a sus respectivos titulares."] },
        { h: "Consultas y propuestas", p: ["Enviar una consulta no crea un contrato. La colaboración solo comienza cuando ambas partes firman un contrato por escrito."] },
        { h: "Enlaces externos", p: ["Los enlaces a sitios de terceros, incluidas las versiones en línea de proyectos, se ofrecen por comodidad. No somos responsables de su contenido ni de su disponibilidad."] },
        { h: "Responsabilidad", p: ["En la medida en que lo permita la ley, no somos responsables de las pérdidas derivadas del uso de este sitio o de la confianza depositada en su contenido."] },
        { h: "Legislación aplicable", p: ["Estos términos se rigen por la legislación de la India; los tribunales de Nueva Delhi son los competentes."] },
        { h: "Contacto", p: ["Preguntas sobre estos términos: connect@eryonai.com."] },
      ],
    },
    cookie: {
      title: "Política de cookies",
      intro: "Este sitio usa un pequeño número de cookies esenciales y, solo con su permiso, cookies de Google Analytics y Google Ads.",
      sections: [
        { h: "Almacenamiento esencial", p: ["Una entrada de almacenamiento local (eryon-consent) recuerda si aceptó o rechazó las cookies, para no volver a preguntarle en cada visita.", "Nuestra infraestructura de hosting puede usar cookies estrictamente necesarias para la seguridad y el equilibrio de carga.", "Cuando empieza a rellenar uno de nuestros formularios, se carga Google reCAPTCHA para protegerlo del spam. Solo se usa en los formularios y únicamente con fines de seguridad."] },
        { h: "Analítica y publicidad (con consentimiento)", p: ["Google Analytics nos ayuda a entender qué páginas son útiles. Google Ads mide si los visitantes que llegan desde nuestros anuncios envían una consulta.", "Estos scripts solo se cargan después de que pulse Aceptar. Si los rechaza, nunca se cargan."] },
        { h: "Cambiar su elección", p: ["Use «Configuración de cookies» en el pie del sitio para aceptar o rechazar en cualquier momento. También puede borrar las cookies y el almacenamiento local en su navegador."] },
        { h: "Lo que no hacemos", p: ["No vendemos datos recogidos mediante cookies y no cargamos scripts de seguimiento antes de que usted elija."] },
      ],
    },
  },

  data: esData,
};
