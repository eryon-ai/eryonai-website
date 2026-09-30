import type { Messages } from "./en";
import { frData } from "./fr-data";

export const fr: Messages = {
  ui: {
    nav: { whatWeDo: "Expertises", industries: "Secteurs", work: "Réalisations", process: "Méthode", insights: "Insights", about: "À propos", careers: "Carrières", contact: "Contact", start: "Démarrer un projet", search: "Rechercher", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu", language: "Langue" },
    header: {
      newGuide: "Nouveau guide",
      banner: "Ingénierie logicielle depuis New Delhi pour des équipes en Inde et dans le monde",
      mega: {
        services: { title: "Expertises", text: "Ingénierie logicielle et produits numériques – de la première architecture à l'exploitation sur le long terme.", cta: "Toutes les expertises" },
        industries: { title: "Secteurs", text: "Des systèmes conçus pour les réalités opérationnelles de chaque secteur.", cta: "Tous les secteurs" },
        insights: { title: "Insights", text: "Des articles concrets sur l'architecture, le produit et les systèmes d'entreprise.", cta: "Tous les articles" },
      },
      megaCard: "Vous avez un système à construire ou à améliorer ?",
      latest: "Dernier article",
      allInsights: "Tous les articles",
      caseStudies: "Études de cas",
      mobileAll: { services: "Toutes les expertises", industries: "Tous les secteurs", insights: "Tous les articles" },
    },
    footer: {
      blurb: "Logiciels sur mesure, applications d'entreprise et produits numériques – conçus et développés à New Delhi, en Inde.",
      email: "E-mail", phone: "Téléphone", india: "Inde", global: "International", globalText: "Collaboration à distance avec des clients hors d'Inde",
      services: "Expertises", industries: "Secteurs", company: "Entreprise", follow: "Suivre",
      links: { work: "Réalisations", process: "Méthode", technology: "Technologies", insights: "Insights", about: "À propos", careers: "Carrières", contact: "Contact" },
      newsletterTitle: "Notes d'ingénierie, chaque mois.",
      newsletterText: "Des articles sur l'architecture, le produit et les systèmes d'entreprise, écrits par notre équipe.",
      statement: "Des logiciels conçus pour\nla façon dont votre entreprise fonctionne.",
      rights: "Enregistrée MSME. Tous droits réservés.",
      legal: { privacy: "Confidentialité", terms: "Conditions", cookie: "Politique cookies", accessibility: "Accessibilité", sitemap: "Plan du site" },
      cookieSettings: "Paramètres des cookies",
    },
    common: {
      home: "Accueil",
      start: "Démarrer un projet",
      viewWork: "Voir nos réalisations",
      readCaseStudy: "Lire l'étude de cas",
      challenge: "Enjeu", solution: "Solution", outcome: "Résultat", technology: "Technologies",
      minRead: "min de lecture",
      featured: "À la une",
      faqs: "Questions fréquentes",
      all: "Tous",
      result: "résultat", results: "résultats",
      clearFilters: "Effacer les filtres",
      noMatchTitle: "Aucun résultat pour ces filtres pour l'instant.",
      noMatchText: "Retirez un filtre – ou parlez-nous de votre projet et nous partagerons directement nos expériences pertinentes.",
      filterBy: "Filtrer par",
      lastUpdated: "Dernière mise à jour",
      englishOnly: "Anglais",
    },
    cta: { title: "Un produit qui mérite\nd'être construit ?", text: "Transformons l'idée en un système que votre entreprise pourra vraiment utiliser." },
    form: { optional: "(facultatif)", select: "Sélectionnez…", sending: "Envoi en cours…", reply: "Nous répondons sous 24 heures.", error: "Une erreur s'est produite. Veuillez réessayer.", network: "Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.", honeypot: "Laissez ce champ vide" },
    newsletter: { email: "E-mail professionnel", subscribe: "S'abonner", subscribing: "Abonnement…", done: "Merci, vous êtes inscrit. Le prochain numéro arrivera dans votre boîte de réception.", note: "Un e-mail par mois. Désinscription à tout moment.", error: "Une erreur s'est produite. Veuillez réessayer.", network: "Impossible de joindre le serveur. Veuillez réessayer." },
    cookie: { region: "Consentement aux cookies", text: "Nous utilisons des cookies essentiels au fonctionnement du site et, avec votre accord uniquement, des cookies Google Analytics et Google Ads pour mesurer les visites et les demandes.", policy: "Politique cookies", accept: "Accepter", decline: "Refuser" },
  },

  meta: {
    home: { title: "Eryon — Développement de logiciels sur mesure et ingénierie produit", description: "Logiciels sur mesure, applications web d'entreprise, applications mobiles, SaaS et systèmes CRM/ERP – conçus et développés par Eryon à New Delhi pour des entreprises en Inde et dans le monde." },
    about: { title: "À propos d'Eryon — Société d'ingénierie logicielle à New Delhi", description: "Eryon est une société d'ingénierie logicielle et de produits numériques basée à New Delhi, qui développe des logiciels sur mesure et des systèmes d'entreprise pour des clients en Inde et à l'international." },
    services: { title: "Services de développement logiciel", description: "Logiciels sur mesure, applications web et mobiles, SaaS, CRM et ERP, e-commerce, automatisation, cloud et DevOps, données, UI/UX, sécurité et modernisation par Eryon." },
    process: { title: "Notre méthode — Processus de livraison logicielle", description: "Le processus en huit étapes d'Eryon – de la découverte à l'optimisation – avec des objectifs, des livrables et une implication client clairs à chaque étape." },
    technology: { title: "Technologies — Notre stack d'ingénierie", description: "Les technologies frontend, backend, mobile, données, cloud, DevOps et sécurité utilisées par Eryon – reliées aux projets livrés où elles ont servi." },
    work: { title: "Nos réalisations — Études de cas", description: "Études de cas de CRM, ERP, SIRH, SaaS, e-commerce et applications mobiles développés par Eryon – avec l'enjeu, l'architecture et le résultat de chacun." },
    contact: { title: "Contact — Démarrer un projet logiciel", description: "Parlez de votre projet logiciel à Eryon. Réponse sous 24 heures. E-mail connect@eryonai.com ou téléphone +91 78278 86571. Basés à New Delhi, en Inde." },
    contactSuccess: { title: "Message reçu", description: "Merci d'avoir contacté Eryon." },
    insights: { title: "Insights — Architecture, produit et technologies d'entreprise", description: "Des articles concrets des ingénieurs d'Eryon sur l'architecture logicielle, le SaaS, le CRM et l'ERP, le cloud, la sécurité, la modernisation et l'ingénierie produit." },
    privacy: { title: "Politique de confidentialité", description: "Comment Eryon collecte, utilise et protège les données personnelles transmises via ce site." },
    terms: { title: "Conditions d'utilisation", description: "Conditions régissant l'utilisation du site Eryon." },
    cookie: { title: "Politique cookies", description: "Les cookies et le stockage du navigateur utilisés par le site Eryon." },
  },

  home: {
    eyebrow: "Ingénierie logicielle et produits numériques",
    heroBefore: "Nous créons des logiciels sur lesquels les",
    heroEm: "entreprises",
    heroAfter: "peuvent compter.",
    heroText: "Eryon conçoit et développe des produits numériques sur mesure, des applications d'entreprise et des systèmes métier fondés sur des besoins opérationnels réels – de la première architecture à la montée en charge sur le long terme.",
    heroAlts: ["Tableau de bord opérationnel avec aperçu du chiffre d'affaires, commandes par statut et commandes récentes", "Gestion des emplois du temps d'un ERP scolaire", "Gestion mobile d'une boutique avec ventes et commandes récentes"],
    trust: ["Ingénierie logicielle", "Ingénierie produit", "Systèmes d'entreprise", "Cloud et infrastructure"],
    numbers: "En chiffres · depuis 2019",
    credentialsLabel: "Certifications",
    build: {
      eyebrow: "Ce que nous construisons", title: "Des systèmes pour le travail qui fait tourner votre entreprise.", intro: "Les captures d'écran proviennent de systèmes que nous avons conçus et développés.", cta: "Voir toutes les expertises",
      cards: [
        { category: "Logiciel sur mesure", title: "Systèmes opérationnels", text: "Des plateformes internes qui reflètent votre fonctionnement – validations, planification, projets et paie." },
        { category: "Web d'entreprise", title: "Plateformes web et portails", text: "Tableaux de bord et portails multi-rôles pour collaborateurs, partenaires et clients." },
        { category: "Mobile", title: "Produits mobiles", text: "Des applications iOS et Android connectées aux systèmes qui les soutiennent." },
        { category: "SaaS", title: "Plateformes SaaS", text: "Des produits multi-locataires avec facturation, onboarding et marge de croissance." },
        { category: "CRM et ERP", title: "Systèmes CRM et ERP", text: "Un système unique pour les ventes, les opérations, les RH et la finance." },
        { category: "E-commerce", title: "Plateformes de commerce", text: "Des boutiques rapides, avec les opérations de commande qui les soutiennent." },
      ],
      previewAlt: "– aperçu de l'interface",
    },
    around: {
      eyebrow: "Construit autour de votre activité", title: "Nous comprenons l'opération avant d'écrire le logiciel.",
      cols: [
        { k: "Comprendre", t: "Comment le travail se fait vraiment", d: "Nous passons du temps avec les personnes qui font le travail, cartographions le processus actuel et repérons où se perdent le temps, l'argent et les données." },
        { k: "Concevoir", t: "Un système qui colle au terrain", d: "Des rôles, des flux et un modèle de données qui reflètent votre activité – conçus et testés avec votre équipe avant la moindre ligne de code de production." },
        { k: "Développer", t: "Construit pour durer", d: "Une architecture propre, des tests automatisés sur les flux critiques, la sécurité intégrée au modèle de données et une infrastructure qui vous appartient." },
      ],
    },
    capabilities: {
      eyebrow: "Compétences", title: "L'ingénierie sur tout le cycle de vie.", intro: "Une seule équipe pour l'architecture, le produit, l'infrastructure et l'exploitation – pour que rien ne se perde entre deux passations.",
      items: [
        { title: "Ingénierie produit", text: "Du premier livrable à un produit qui sert de nombreux clients de façon fiable." },
        { title: "Développement d'applications", text: "Applications web et mobiles pour l'activité quotidienne." },
        { title: "Infrastructure cloud", text: "Environnements, pipelines et supervision qui rendent les mises en production routinières." },
        { title: "Plateformes de données", text: "Des pipelines et un reporting dignes de confiance." },
        { title: "Intégration de systèmes", text: "API et événements qui relient vos outils existants." },
        { title: "Automatisation", text: "Le travail répétitif retiré des mains de votre équipe." },
        { title: "Sécurité", text: "Contrôle d'accès et durcissement pensés dès le départ, pas ajoutés après coup." },
        { title: "UI/UX", text: "Des interfaces conçues autour des tâches réelles, avec les ingénieurs qui les construisent." },
      ],
    },
    work: { eyebrow: "Projets sélectionnés", title: "Ce que nous avons construit.", cta: "Voir toutes les études de cas", intro: "Trois systèmes dans l'industrie, la santé et l'éducation – le problème, le système que nous avons construit et ce qui a changé pour l'entreprise." },
    process: { eyebrow: "Méthode", title: "Six étapes, chacune avec un livrable à examiner.", cta: "Voir toute la méthode" },
    industries: { eyebrow: "Secteurs", title: "Conçu pour les réalités de votre secteur.", cta: "Tous les secteurs" },
    tech: { eyebrow: "Écosystème technologique", title: "Des outils éprouvés, choisis selon le problème.", text: "Une partie du stack de travail de notre équipe – la page Technologies indique les projets où chacun a été utilisé.", cta: "Nos technologies" },
    why: {
      eyebrow: "Pourquoi Eryon", title: "Pourquoi nos clients nous confient leurs systèmes clés.",
      items: [
        { title: "Profondeur technique", text: "Services orientés événements, sécurité au niveau des lignes, modèles de données multi-locataires – nous prenons les décisions d'architecture délibérément et les documentons." },
        { title: "Compréhension métier", text: "Nous partons de la façon dont le travail circule dans votre organisation, pas d'une liste de fonctionnalités. Le logiciel suit l'opération." },
        { title: "Livraison transparente", text: "Un logiciel fonctionnel chaque semaine, un périmètre écrit et des estimations accompagnées de leurs hypothèses." },
        { title: "Partenariat durable", text: "Le code et l'infrastructure vous appartiennent. Nous restons pour l'exploitation et les améliorations – ou nous transmettons proprement." },
      ],
    },
    insights: { eyebrow: "Insights", title: "Notes d'ingénierie.", cta: "Tous les articles" },
    faq: {
      title: "Ce que les entreprises nous demandent d'abord.",
      items: [
        { q: "Que développe Eryon ?", a: "Des logiciels sur mesure pour les entreprises : applications web et portails, applications mobiles, produits SaaS, systèmes CRM et ERP, plateformes e-commerce, automatisation métier, tableaux de bord de données et l'infrastructure cloud sur laquelle ils tournent." },
        { q: "Combien coûte le développement d'un logiciel sur mesure ?", a: "Cela dépend du nombre d'utilisateurs et de rôles, des flux, des intégrations et du niveau de design. Après une courte phase de découverte, vous recevez une estimation écrite pour un premier livrable clairement délimité – le budget est donc fixé avant le début du développement." },
        { q: "Combien de temps faut-il pour développer une application web ou mobile ?", a: "Un premier livrable ciblé prend généralement quelques mois. Nous planifions les livraisons pour que votre équipe utilise tôt des parties du système, et vous voyez un logiciel fonctionnel chaque semaine." },
        { q: "Avec quels pays travaillez-vous ?", a: "Nous sommes basés à New Delhi et travaillons à distance avec des clients en Inde, aux États-Unis, au Royaume-Uni, aux Émirats arabes unis, en Australie et au Canada, avec des plages horaires communes convenues." },
        { q: "Quelles technologies utilisez-vous ?", a: "Principalement React, Next.js et TypeScript côté frontend ; Java Spring Boot, Node.js et Python côté backend ; PostgreSQL, MongoDB et Redis pour les données ; React Native et Flutter pour le mobile ; et AWS, Azure ou Google Cloud avec Docker et Kubernetes." },
        { q: "Assurez-vous le support après la mise en production ?", a: "Oui. Chaque livraison inclut une période de support, et la plupart des clients poursuivent avec un contrat de supervision, de correction et d'améliorations planifiées." },
      ],
    },
  },

  about: {
    crumb: "À propos", eyebrow: "À propos d'Eryon", title: "Une ingénierie exigeante.",
    intro: "Eryon est une société d'ingénierie logicielle et de produits numériques basée à New Delhi, qui développe des logiciels pour les entreprises depuis 2019. Nous concevons, construisons et maintenons les systèmes sur lesquels les entreprises s'appuient – CRM, ERP, plateformes opérationnelles, portails clients, applications mobiles et produits SaaS – pour des clients en Inde et dans le monde.",
    who: {
      eyebrow: "Qui nous sommes", title: "Une équipe d'ingénieurs et de designers qui aime les problèmes opérationnels difficiles.",
      p1: "Notre travail se situe généralement au cœur de l'entreprise : le système qui porte le stock, le planning, le pipeline commercial ou la comptabilité. C'est là que le logiciel a le plus d'effet sur la façon dont une entreprise fonctionne réellement – et là qu'il doit être fiable.",
      p2: "Depuis 2019, nous avons livré plus de 150 projets pour plus de 80 clients en Inde, aux États-Unis, au Royaume-Uni, aux Émirats arabes unis, en Australie et au Canada – dans l'industrie, la santé, l'éducation, l'immobilier, le commerce, la logistique et les services professionnels – avec des technologies courantes que votre future équipe pourra maintenir.",
      alts: ["Tableau de bord CRM développé par Eryon pour un négociant en pierre naturelle", "Tableau de bord RH hospitalier développé par Eryon"],
    },
    numbers: "Eryon en chiffres",
    mission: { eyebrow: "Notre mission", text: "Rendre un logiciel fiable et bien conçu accessible à toute entreprise – du premier produit au système d'entreprise central." },
    vision: { eyebrow: "Notre vision", text: "Être le partenaire d'ingénierie à qui les entreprises confient les systèmes dont elles dépendent, aussi longtemps que ces systèmes comptent." },
    beliefs: {
      eyebrow: "Nos convictions", title: "Quatre principes derrière chaque décision.",
      items: [
        { t: "Le logiciel doit s'adapter à l'entreprise", d: "Pas l'inverse. Nous comprenons d'abord l'opération, puis nous concevons le système autour." },
        { t: "La clarté plutôt que l'astuce", d: "Une technologie éprouvée et bien comprise et un code lisible durent plus longtemps que les choix à la mode." },
        { t: "Dire ce que nous faisons, faire ce que nous disons", d: "Un périmètre écrit, des progrès visibles chaque semaine et une alerte précoce quand quelque chose change." },
        { t: "La propriété revient au client", d: "Votre code, vos comptes, votre documentation – dès le premier jour." },
      ],
    },
    how: { eyebrow: "Notre façon de travailler", title: "Une équipe responsable, du premier atelier à la production.", text: "Un lead engineer porte l'architecture et la livraison de chaque projet, avec des designers et des développeurs qui restent sur le projet. Vous voyez un logiciel fonctionnel chaque semaine et validez par écrit chaque décision importante.", cta: "Notre processus de livraison" },
    culture: {
      eyebrow: "Notre culture d'ingénierie", title: "Des habitudes qui rendent le logiciel fiable.",
      items: [
        { t: "Revue de code à chaque changement", d: "Aucun code n'atteint la branche principale sans avoir été relu par un second ingénieur." },
        { t: "Des tests là où ça compte", d: "Les tests automatisés se concentrent sur les flux qui touchent à l'argent, aux permissions et aux données." },
        { t: "Architecture documentée", d: "Les décisions importantes sont consignées avec les alternatives envisagées." },
        { t: "Les ingénieurs rencontrent les utilisateurs", d: "Les personnes qui construisent le système parlent à celles qui l'utiliseront." },
        { t: "Du temps pour apprendre", d: "Les ingénieurs partagent leurs connaissances lors de revues internes et d'articles comme nos Insights." },
        { t: "Un rythme soutenable", d: "Les équipes fatiguées écrivent des bugs. Nous planifions pour tenir le rythme." },
      ],
    },
    leadership: { eyebrow: "Notre direction", title: "Des profils expérimentés, proches du travail.", lead: "La direction d'Eryon reste opérationnelle. Les responsables de l'entreprise relisent les architectures, participent aux ateliers de découverte et sont joignables quand un client appelle.", text: "Chaque projet a un lead engineer nommé, responsable des décisions techniques et de la livraison, et une ligne directe avec la direction si quelque chose doit être escaladé." },
    capabilities: { eyebrow: "Nos expertises", title: "Douze expertises, une seule équipe.", cta: "Toutes les expertises" },
    trust: { eyebrow: "Certifications et confiance", title: "Des standards reconnus derrière notre travail." },
    standards: {
      eyebrow: "Nos standards", title: "Les références auxquelles nous nous mesurons.",
      items: ["WCAG 2.2 AA comme base d'accessibilité pour les interfaces que nous concevons", "OWASP Top 10 comme base des revues de sécurité applicative", "Infrastructure as Code pour tous les environnements que nous gérons", "Environnements de préproduction et de production séparés", "Aucun secret dans le code source", "Une documentation pour chaque système"],
    },
    locations: { eyebrow: "Implantations", title: "Basés en Inde. Actifs dans le monde entier.", hq: "Inde — Siège", hqPlace: "New Delhi, Inde", hqText: "Ingénierie, design et livraison.", global: "International", globalPlace: "Collaboration à distance", globalText: "Pour les clients hors d'Inde, avec des plages horaires communes convenues pour chaque projet." },
    cta: "Construisons ensemble\nquelque chose d'utile.",
  },

  services: {
    crumb: "Expertises", eyebrow: "Expertises", title: "La technologie au service\nde l'activité.",
    intro: "Douze expertises, une seule équipe. Nous concevons, développons et maintenons les systèmes sur lesquels les entreprises s'appuient – du premier livrable à la plateforme qu'il deviendra. Chaque expertise renvoie à une page détaillée avec la démarche, les technologies, les réalisations et les réponses aux questions fréquentes.",
    index: "Index des expertises", explore: "Découvrir", build: "Ce que nous construisons", deliverables: "Livrables", useCases: "Cas d'usage typiques", technology: "Technologies", industries: "Secteurs concernés", work: "Études de cas associées",
    models: {
      eyebrow: "Modes de collaboration", title: "Trois façons de travailler avec nous.",
      items: [
        { title: "Réalisation de projet", text: "Un périmètre défini, un plan de livraison et une équipe responsable, de la découverte à la mise en production." },
        { title: "Équipe d'ingénierie dédiée", text: "Des ingénieurs, un lead et un designer qui travaillent comme une extension de votre organisation produit." },
        { title: "Exploitation et évolution", text: "Supervision, corrections et améliorations planifiées pour les systèmes en production." },
      ],
    },
    cta: { title: "Vous ne savez pas quelle expertise vous correspond ?", text: "Décrivez le problème. Nous vous dirons ce que nous construirions – ou s'il faut vraiment construire quelque chose." },
    detailsInEnglish: "Les pages détaillées des expertises sont en anglais.",
  },

  process: {
    crumb: "Méthode", eyebrow: "Méthode", title: "Un processus de livraison\ntransparent.",
    intro: "Huit étapes, du premier échange à un système qui s'améliore en continu. Chaque étape a un objectif clair, des activités définies, des documents à examiner et un rôle précis pour votre équipe – vous savez toujours où en est le projet et ce qui vient ensuite.",
    labels: { activities: "Activités", deliverables: "Livrables", involvement: "Votre implication", output: "Résultat" },
    stages: [
      { id: "discovery", title: "Découverte", objective: "Comprendre comment l'entreprise fonctionne réellement avant de décider quoi construire.", activities: ["Entretiens avec les parties prenantes et les utilisateurs", "Observation du processus actuel", "Revue des systèmes, données et intégrations existants", "Recensement des contraintes : budget, calendrier, conformité"], deliverables: ["Cartographie du processus actuel", "Énoncé du problème et objectifs", "Inventaire des intégrations et des données"], client: "Un accès aux personnes qui font le travail, pas seulement à celles qui le pilotent. En général, quelques ateliers.", output: "Une compréhension écrite et partagée du problème." },
      { id: "definition", title: "Définition du produit", objective: "Décider ce que le premier livrable doit faire – et ce qu'il ne fera délibérément pas.", activities: ["Rôles utilisateurs et permissions", "Flux principaux et cas particuliers", "Périmètre de livraison et priorisation", "Exigences non fonctionnelles"], deliverables: ["Document de périmètre", "Plan de livraison", "Estimation avec hypothèses écrites"], client: "Des décisions sur les priorités et les arbitrages. Un product owner unique de votre côté aide beaucoup.", output: "Un périmètre et un plan convenus, sur lesquels vous pouvez nous évaluer." },
      { id: "architecture", title: "Architecture", objective: "Prendre délibérément les décisions difficiles à changer.", activities: ["Conception du modèle de données", "Frontières des services et des modules", "Plan d'hébergement et d'environnements", "Modèle de sécurité et d'accès"], deliverables: ["Document d'architecture avec arbitrages", "Modèle de données", "Plan d'infrastructure"], client: "Une revue avec vos interlocuteurs techniques, s'il y en a. Sinon, nous expliquons les choix en termes clairs.", output: "Une base technique validée." },
      { id: "ux-ui", title: "UX / UI", objective: "Concevoir des interfaces autour des tâches réelles et les tester avant le développement.", activities: ["Parcours utilisateurs et wireframes", "Prototypes cliquables", "Design visuel et design system", "Tests d'utilisabilité avec de vrais utilisateurs"], deliverables: ["Parcours et wireframes", "Maquettes détaillées", "Prototype", "Composants du design system"], client: "Des cycles de retours et un accès à quelques utilisateurs représentatifs.", output: "Des maquettes validées, prêtes pour le développement." },
      { id: "development", title: "Développement", objective: "Construire un logiciel fonctionnel par cycles courts, visible et pilotable.", activities: ["Planification des sprints", "Développement des fonctionnalités sur tout le stack", "Revue de code à chaque changement", "Tests automatisés des flux critiques"], deliverables: ["Un logiciel fonctionnel en préproduction chaque semaine", "Code source dans votre dépôt", "Notes de sprint"], client: "Participation à la démo hebdomadaire et réponses rapides aux questions produit.", output: "Un logiciel qui progresse visiblement semaine après semaine." },
      { id: "testing", title: "Tests", objective: "Prouver que le système fait ce qu'il doit avant que de vrais utilisateurs en dépendent.", activities: ["Tests fonctionnels et de non-régression", "Recette par rôle", "Contrôles de performance", "Revue de sécurité"], deliverables: ["Plan et résultats de tests", "Validation de recette", "Constats de sécurité et corrections"], client: "Une recette réalisée par les personnes qui utiliseront le système.", output: "Une version candidate validée par votre équipe." },
      { id: "deployment", title: "Mise en production", objective: "Passer en production en toute sécurité, avec un retour arrière possible si nécessaire.", activities: ["Mise en place de l'environnement de production", "Migration et vérification des données", "Déploiement progressif", "Formation des utilisateurs"], deliverables: ["Système en production", "Rapport de vérification de migration", "Runbooks d'exploitation", "Supports de formation"], client: "La décision de mise en production, la participation aux formations et un plan de communication pour vos utilisateurs.", output: "Un système en service, avec des utilisateurs formés." },
      { id: "optimization", title: "Optimisation", objective: "Améliorer le système à partir de son utilisation réelle.", activities: ["Supervision et réponse aux incidents", "Analyse de l'usage", "Optimisation des performances et des coûts", "Améliorations planifiées"], deliverables: ["Rapports de support", "Backlog d'améliorations", "Livraisons régulières"], client: "Les retours des utilisateurs et une revue régulière des priorités.", output: "Un système qui s'améliore après la mise en production, au lieu de se dégrader." },
    ],
    constant: {
      eyebrow: "Ce qui ne change jamais", title: "Des principes pour chaque étape.",
      items: [
        { t: "Des décisions écrites", d: "Le périmètre, l'architecture et les arbitrages sont documentés, pas seulement discutés." },
        { t: "Des progrès visibles", d: "Un logiciel fonctionnel chaque semaine, dans un environnement que vous pouvez utiliser." },
        { t: "Votre propriété", d: "Le code, les maquettes, les comptes et la documentation vous appartiennent dès le premier jour." },
        { t: "Pas de surprises", d: "Tout changement de périmètre, de calendrier ou de coût est signalé tôt, avec des options." },
      ],
    },
    faq: {
      title: "Questions sur la méthode.",
      items: [
        { q: "Combien de temps dure chaque étape ?", a: "Cela dépend de la taille du système. La découverte et la définition prennent généralement quelques semaines ; le développement avance par cycles hebdomadaires jusqu'au premier livrable. Vous recevez un plan daté à l'issue de la définition du produit." },
        { q: "Peut-on sauter la découverte si nous avons déjà des spécifications ?", a: "Nous examinons ce que vous avez et raccourcissons la découverte en conséquence. Nous la supprimons rarement entièrement – une courte revue révèle presque toujours des hypothèses à remettre en question." },
        { q: "Et si les priorités changent en cours de projet ?", a: "Cela arrive souvent. Les démos hebdomadaires et un backlog visible facilitent la repriorisation ; nous vous montrons l'impact sur le périmètre et le calendrier avant que vous décidiez." },
        { q: "Faut-il une personne technique de notre côté ?", a: "Non. Ce qui aide, c'est un décideur qui connaît bien l'activité. Nous expliquons les choix techniques en termes clairs." },
      ],
    },
    cta: { title: "Tout commence\npar un échange.", text: "La première étape est un échange sur votre activité et sur ce qui ne fonctionne pas. Sans engagement, sans discours commercial." },
  },

  technology: {
    crumb: "Technologies", eyebrow: "Technologies", title: "Des outils éprouvés,\nchoisis avec soin.",
    intro: "Nous choisissons des technologies pour lesquelles votre future équipe pourra recruter et qu'elle pourra maintenir. Lorsqu'une technologie a été utilisée dans une étude de cas publiée, nous la relions – pour que vous la voyiez en contexte plutôt que de nous croire sur parole.",
    categories: "Catégories technologiques", usedIn: "Utilisé dans",
    cta: { title: "Vous avez déjà\nun stack technique ?", text: "Nous travaillons dans des bases de code existantes aussi souvent que nous en démarrons de nouvelles. Dites-nous ce que vous utilisez aujourd'hui." },
  },

  work: {
    crumb: "Réalisations", eyebrow: "Réalisations", title: "Des systèmes en production,\nexpliqués honnêtement.",
    intro: "Une sélection parmi plus de 150 projets livrés depuis 2019. Chaque étude de cas décrit le problème, l'architecture, le produit et ce qui a changé pour l'entreprise – avec les décisions et arbitrages qui les sous-tendent.",
    all: "Toutes les études de cas",
    filters: { industry: "Secteur", service: "Expertise", platform: "Plateforme", business: "Modèle" },
    detailsInEnglish: "Les études de cas détaillées sont en anglais.",
  },

  contact: {
    crumb: "Contact", eyebrow: "Contact", title: "Construisons quelque chose d'utile.",
    intro: "Parlez-nous du système dont vous avez besoin – ce qu'il doit faire, qui l'utilisera et ce qui ne fonctionne pas aujourd'hui. Plus vous partagez de contexte, plus notre réponse sera utile.",
    formTitle: "Détails du projet", required: "Les champs marqués d'un * sont obligatoires.", submit: "Envoyer la demande",
    fields: { name: "Nom", email: "E-mail professionnel", company: "Entreprise", phone: "Téléphone", projectType: "Type de projet", budget: "Budget estimé", timeline: "Calendrier", message: "Message", messageHint: "Que doit faire le système, qui l'utilisera et comment cela fonctionne-t-il aujourd'hui ?" },
    projectExtra: ["Équipe d'ingénierie dédiée", "Autre chose"],
    budgets: ["Moins de 2 000 $ US (≈ 1,7 lakh ₹)", "2 000–5 000 $ US (≈ 1,7–4 lakh ₹)", "5 000–15 000 $ US (≈ 4–12 lakh ₹)", "15 000–50 000 $ US (≈ 12–40 lakh ₹)", "50 000–150 000 $ US (≈ 40 lakh–1,25 crore ₹)", "Plus de 150 000 $ US", "Parlons-en"],
    timelines: ["Dès que possible", "Sous 3 mois", "3 à 6 mois", "Je me renseigne"],
    other: { title: "Autres moyens de nous joindre", email: "E-mail", phone: "Téléphone", location: "Adresse", locationValue: "New Delhi, Inde", remote: "Collaboration à distance avec des clients du monde entier.", credentials: "Certifications", nda: "NDA sur demande" },
    next: {
      eyebrow: "La suite", title: "Après avoir cliqué sur Envoyer.",
      items: [
        { t: "Nous lisons attentivement", d: "Une personne de notre équipe lit votre message – pas de séquence de réponses automatiques." },
        { t: "Réponse sous 24 heures", d: "Généralement avec quelques questions pour mieux comprendre le problème." },
        { t: "Un appel de découverte", d: "Un échange sur votre activité, vos contraintes et ce que serait une réussite." },
        { t: "Une proposition sur mesure", d: "Périmètre, démarche et estimation par écrit – ou un avis honnête si vous n'avez peut-être pas besoin d'un logiciel sur mesure." },
      ],
    },
    faq: {
      title: "Avant de nous écrire.",
      items: [
        { q: "Le premier échange est-il gratuit ?", a: "Oui. Le premier échange sert à comprendre votre problème et à voir ensemble si nous sommes le bon partenaire." },
        { q: "Signez-vous des accords de confidentialité ?", a: "Oui. Si vous souhaitez un accord avant de partager des détails, mentionnez-le dans votre message – nous vous en enverrons un ou signerons le vôtre." },
        { q: "Travaillez-vous avec des clients hors d'Inde ?", a: "Oui. Nous travaillons à distance et convenons des plages horaires communes et des rituels de communication au démarrage du projet." },
        { q: "Et si je ne connais pas encore mon budget ?", a: "C'est courant. Choisissez « Parlons-en » – lors du premier échange, nous vous aiderons à comprendre ce que coûteraient différents périmètres." },
      ],
    },
  },

  contactSuccess: { eyebrow: "Message reçu", title: "Merci. Nous revenons vers vous.", textBefore: "Un membre de notre équipe d'ingénierie vous répondra sous 24 heures, généralement avec quelques questions. Si c'est urgent, appelez-nous au", work: "Voir nos réalisations", process: "Notre méthode" },

  insights: {
    crumb: "Insights", eyebrow: "Insights", title: "Notes d'ingénierie pour\nceux qui dirigent des entreprises.",
    intro: "L'architecture, les choix produit et les arbitrages concrets derrière les logiciels d'entreprise – écrits par ceux qui les construisent.",
    category: "Catégorie",
    newsletterTitle: "Recevez les nouveaux articles par e-mail", newsletterText: "Une courte note mensuelle avec nos derniers articles sur l'architecture, le SaaS et les systèmes d'entreprise.",
  },

  article: { author: "Auteur", published: "Publié le", updated: "Mis à jour le", readingTime: "Temps de lecture", min: "min", contents: "Sommaire", takeaways: "À retenir", relatedService: "Expertise associée", newsletter: "Cet article vous a plu ? Recevez le prochain par e-mail.", related: "Articles associés", authorName: "Eryon Engineering" },

  legal: {
    privacy: {
      title: "Politique de confidentialité",
      intro: "Cette politique décrit les données personnelles que ERYON AI Software Solutions (« Eryon », « nous ») collecte via ce site, pourquoi, et les choix dont vous disposez. Elle s'appuie sur le Digital Personal Data Protection Act 2023 indien.",
      sections: [
        { h: "Données collectées", p: ["Lorsque vous envoyez le formulaire de contact : votre nom, votre e-mail professionnel, votre entreprise, votre téléphone, les détails du projet ainsi que le budget et le calendrier si vous les indiquez.", "Lorsque vous vous abonnez à la newsletter : votre adresse e-mail.", "Lorsque vous postulez à une offre : votre nom, vos coordonnées, les liens fournis, votre CV et une éventuelle note.", "Notre hébergeur enregistre des journaux serveur standard (adresse IP, navigateur, heure de la requête, etc.) pour la sécurité et la fiabilité.", "Si vous acceptez les cookies, Google Analytics et Google Ads collectent des informations sur votre visite (pages consultées, appareil, localisation approximative et envoi éventuel d'une demande) afin que nous puissions évaluer notre site et notre publicité. Sans votre consentement, ces outils ne sont pas chargés."] },
        { h: "Utilisation", p: ["Pour répondre à votre demande et discuter d'une éventuelle collaboration.", "Pour examiner les candidatures et contacter les candidats.", "Pour protéger le site, notamment par la limitation de débit et la lutte contre le spam.", "Avec votre consentement, pour mesurer la fréquentation du site et l'efficacité de notre publicité."] },
        { h: "Partage", p: ["Les envois de formulaires sont transmis par e-mail à notre équipe via notre fournisseur de messagerie.", "Avec votre consentement, Google (Google Analytics et Google Ads) traite les données de visite et de conversion conformément à sa propre politique de confidentialité.", "Nos formulaires utilisent Google reCAPTCHA pour lutter contre le spam ; il traite des données d'appareil et d'interaction conformément à la politique de confidentialité de Google.", "Les envois de formulaires sont également enregistrés dans une feuille Google privée utilisée par notre équipe.", "Nous ne vendons pas de données personnelles. Nous pouvons divulguer des données si la loi l'exige."] },
        { h: "Durée de conservation", p: ["Nous conservons les demandes le temps nécessaire pour y répondre et, en cas de collaboration, pendant sa durée – en général au plus 24 mois après le dernier contact, sauf obligation légale contraire.", "Nous conservons les adresses de la newsletter jusqu'à votre désinscription.", "Nous conservons les candidatures jusqu'à 12 mois afin de pouvoir vous proposer de futurs postes, sauf si vous demandez leur suppression plus tôt."] },
        { h: "Vos droits", p: ["Vous pouvez demander l'accès, la rectification ou la suppression des données que nous détenons sur vous, ou retirer votre consentement, en écrivant à connect@eryonai.com. Nous répondrons dans un délai raisonnable."] },
        { h: "Sécurité", p: ["Les données sont transmises via des connexions chiffrées (HTTPS). L'accès aux demandes et aux candidatures est limité aux personnes qui en ont besoin."] },
        { h: "Modifications", p: ["Nous pouvons mettre à jour cette politique. La date en haut de page indique la dernière modification."] },
        { h: "Contact", p: ["ERYON AI Software Solutions, New Delhi, Delhi 110001, Inde.", "E-mail connect@eryonai.com · Téléphone +91 78278 86571"] },
      ],
    },
    terms: {
      title: "Conditions d'utilisation",
      intro: "Ces conditions régissent l'utilisation de ce site, exploité par ERYON AI Software Solutions. Les projets clients sont régis par des contrats écrits distincts.",
      sections: [
        { h: "Utilisation du site", p: ["Vous pouvez consulter et partager le contenu de ce site à des fins licites. Vous ne devez pas perturber son fonctionnement, tenter d'y accéder sans autorisation ni envoyer de requêtes automatisées ou abusives."] },
        { h: "Contenu", p: ["Le contenu de ce site est fourni à titre d'information générale et ne constitue pas un conseil professionnel adapté à votre situation. Les études de cas décrivent des travaux passés ; captures d'écran et descriptions peuvent être simplifiées ou anonymisées pour préserver la confidentialité."] },
        { h: "Propriété intellectuelle", p: ["Les textes, le design et le code de ce site appartiennent à ERYON AI Software Solutions, sauf mention contraire. Les noms de produits et marques cités appartiennent à leurs propriétaires respectifs."] },
        { h: "Demandes et propositions", p: ["L'envoi d'une demande ne crée pas de contrat. Une collaboration ne commence qu'après la signature d'un contrat écrit par les deux parties."] },
        { h: "Liens externes", p: ["Les liens vers des sites tiers, y compris les versions en ligne de projets, sont fournis pour votre commodité. Nous ne sommes pas responsables de leur contenu ni de leur disponibilité."] },
        { h: "Responsabilité", p: ["Dans les limites permises par la loi, nous déclinons toute responsabilité pour les pertes résultant de l'utilisation de ce site ou de la confiance accordée à son contenu."] },
        { h: "Droit applicable", p: ["Ces conditions sont régies par le droit indien ; les tribunaux de New Delhi sont compétents."] },
        { h: "Contact", p: ["Questions sur ces conditions : connect@eryonai.com."] },
      ],
    },
    cookie: {
      title: "Politique cookies",
      intro: "Ce site utilise un petit nombre de cookies essentiels et, avec votre accord uniquement, des cookies Google Analytics et Google Ads.",
      sections: [
        { h: "Stockage essentiel", p: ["Une entrée de stockage local (eryon-consent) mémorise si vous avez accepté ou refusé les cookies, afin de ne pas vous le redemander à chaque visite.", "Notre infrastructure d'hébergement peut déposer des cookies strictement nécessaires à la sécurité et à la répartition de charge.", "Lorsque vous commencez à remplir l'un de nos formulaires, Google reCAPTCHA est chargé pour le protéger du spam. Il n'est utilisé que dans les formulaires et uniquement à des fins de sécurité."] },
        { h: "Mesure d'audience et publicité (avec consentement)", p: ["Google Analytics nous aide à comprendre quelles pages sont utiles. Google Ads mesure si les visiteurs venus de nos annonces envoient une demande.", "Ces scripts ne sont chargés qu'après un clic sur Accepter. Si vous refusez, ils ne sont jamais chargés."] },
        { h: "Modifier votre choix", p: ["Utilisez « Paramètres des cookies » en pied de page pour accepter ou refuser à tout moment. Vous pouvez aussi effacer les cookies et le stockage local dans votre navigateur."] },
        { h: "Ce que nous ne faisons pas", p: ["Nous ne vendons aucune donnée collectée via les cookies et ne chargeons aucun script de suivi avant que vous ayez fait votre choix."] },
      ],
    },
  },

  data: frData,
};
