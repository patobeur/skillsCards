const competencesLink = 'https://www.domaine.fr';
const competences = [
    {
        "id": 1,
        "competence": "Gérer la relation client",
        "description": "Gérer la relation client consiste à entretenir des contacts réguliers et positifs avec les clients. Cela permet de mieux comprendre leurs attentes, de répondre à leurs besoins et de construire une fidélité durable.",
        "id_formations": ["ndrc", "mco"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 2,
        "competence": "Développer une stratégie de communication digitale",
        "description": "Développer une stratégie digitale signifie choisir les bons outils en ligne pour faire connaître une entreprise. Cela inclut la création de contenus sur les réseaux sociaux, l’optimisation d’un site internet et l’analyse des résultats.",
        "id_formations": ["com", "rmc"],
        "famille": "communication",
        "niveau": 2,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/charge-de-communication"}]
    },
    {
        "id": 3,
        "competence": "Gérer un projet informatique",
        "description": "Gérer un projet informatique, c'est organiser, planifier et suivre toutes les étapes de création d'un logiciel ou d'un système informatique. Cela demande de coordonner l’équipe projet, de fixer des délais et de respecter le cahier des charges.",
        "id_formations": ["sio_slam", "sio_sisr"],
        "famille": "informatique",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 4,
        "competence": "Déployer une infrastructure réseau",
        "description": "Déployer une infrastructure réseau consiste à installer et configurer tous les équipements qui permettent aux ordinateurs de communiquer entre eux. Il faut également veiller à la sécurité et à la performance du réseau.",
        "id_formations": ["sio_sisr"],
        "famille": "informatique",
        "niveau": 2,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/technicien-systeme-et-reseau"}]
    },
    {
        "id": 5,
        "competence": "Administrer un système d'information",
        "description": "Administrer un système d'information consiste à assurer la gestion, la sécurité et la maintenance des systèmes informatiques d'une organisation. Il faut prévenir les pannes et garantir la disponibilité des données.",
        "id_formations": ["sio_sisr"],
        "famille": "informatique",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 6,
        "competence": "Développer des applications web et mobiles",
        "description": "Développer une application web ou mobile, c’est créer un outil interactif utilisé via internet ou sur smartphone. Cela nécessite de maîtriser les langages de programmation et de penser à l'expérience utilisateur.",
        "id_formations": ["sio_slam"],
        "famille": "informatique",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 7,
        "competence": "Élaborer un plan de communication",
        "description": "Élaborer un plan de communication, c’est définir comment, quand et par quels canaux parler aux clients ou au public. C’est la feuille de route pour transmettre efficacement les messages de l’entreprise.",
        "id_formations": ["com"],
        "famille": "communication",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 8,
        "competence": "Concevoir des outils marketing",
        "description": "Concevoir des outils marketing, c’est créer des supports (affiches, brochures, posts) qui donnent envie aux clients de s’intéresser à un produit. Ces outils doivent être adaptés au public visé pour être efficaces.",
        "id_formations": ["com"],
        "famille": "communication",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 9,
        "competence": "Piloter une action commerciale",
        "description": "Piloter une action commerciale consiste à planifier, animer et contrôler une campagne de vente. L’objectif est d’atteindre un chiffre d’affaires en suivant des étapes bien définies.",
        "id_formations": ["mco"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 10,
        "competence": "Organiser des événements professionnels",
        "description": "Organiser un événement professionnel, c’est gérer toute la logistique autour d’une réunion, d’un salon ou d’une conférence. Cela demande rigueur, sens du détail et capacité à coordonner plusieurs intervenants.",
        "id_formations": ["sam", "com"],
        "famille": "communication",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 11,
        "competence": "Recruter et intégrer des collaborateurs",
        "description": "Recruter des collaborateurs signifie rechercher, sélectionner et embaucher des candidats adaptés aux besoins d'une entreprise. L’intégration consiste ensuite à les accueillir et à les accompagner pour qu’ils prennent leur place dans l’équipe.",
        "id_formations": ["cr", "supdev"],
        "famille": "ressources_humaines",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 12,
        "competence": "Gérer la paie et les obligations sociales",
        "description": "Gérer la paie, c’est calculer les salaires, les charges et établir les bulletins de paie. Il faut aussi veiller au respect des lois sociales et remplir les déclarations obligatoires auprès des organismes.",
        "id_formations": ["sam", "gme"],
        "famille": "administration",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 13,
        "competence": "Mettre en œuvre une stratégie RH",
        "description": "Mettre en œuvre une stratégie RH, c’est organiser les actions pour attirer, motiver et conserver les talents dans une entreprise. Cela concerne également la gestion des carrières et des compétences des collaborateurs.",
        "id_formations": ["supdev", "cr"],
        "famille": "ressources_humaines",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 14,
        "competence": "Fidéliser la clientèle",
        "description": "Fidéliser la clientèle consiste à construire une relation durable pour que les clients restent fidèles à l’entreprise. Cela passe par un excellent service après-vente, des programmes de fidélité et une attention particulière portée aux besoins clients.",
        "id_formations": ["ndrc", "mco"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 15,
        "competence": "Conduire l'action administrative",
        "description": "Conduire l'action administrative, c’est organiser et superviser toutes les tâches de secrétariat et de gestion quotidienne. Cela garantit la fluidité des échanges internes et externes dans une organisation.",
        "id_formations": ["sam", "gme"],
        "famille": "administration",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 16,
        "competence": "Assurer la gestion opérationnelle d'une PME",
        "description": "Assurer la gestion d'une PME signifie coordonner les opérations courantes telles que la facturation, la gestion de stock et le suivi client. Cela demande aussi de savoir gérer les priorités et s'adapter aux besoins quotidiens.",
        "id_formations": ["gme"],
        "famille": "administration",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 17,
        "competence": "Manager une équipe commerciale",
        "description": "Manager une équipe commerciale, c’est encadrer des vendeurs pour atteindre les objectifs de chiffre d’affaires. Il faut fixer les objectifs, former les équipes et suivre les résultats de chacun.",
        "id_formations": ["mco"],
        "famille": "gestion_client",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 18,
        "competence": "Prospecter de nouveaux clients",
        "description": "Prospecter signifie rechercher activement de nouveaux clients pour développer l'activité commerciale. Cela nécessite de préparer son argumentaire, de contacter des prospects et de les convaincre de devenir clients.",
        "id_formations": ["ndrc"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 19,
        "competence": "Accueillir, informer et orienter des patients",
        "description": "Accueillir un patient, c’est vérifier son identité, enregistrer son arrivée et le guider vers le bon service. L'accueil médical demande écoute, patience et respect de la confidentialité.",
        "id_formations": ["vidal"],
        "famille": "medical",
        "niveau": 1,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 20,
        "competence": "Assurer le suivi des dossiers médicaux",
        "description": "Assurer le suivi des dossiers médicaux consiste à vérifier, classer et mettre à jour les informations de santé des patients. C’est essentiel pour garantir un bon traitement et respecter la confidentialité des données.",
        "id_formations": ["vidal"],
        "famille": "medical",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 21,
        "competence": "Gérer les urgences administratives médicales",
        "description": "Gérer une urgence administrative médicale, c’est assurer l’enregistrement et le traitement rapide d’une situation critique. Il faut savoir garder son calme et prioriser les actions essentielles.",
        "id_formations": ["vidal"],
        "famille": "medical",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 22,
        "competence": "Maîtriser les techniques de secrétariat",
        "description": "Maîtriser le secrétariat, c’est savoir gérer les courriers, les appels, les plannings et les réunions efficacement. Un bon secrétaire doit aussi être organisé et rigoureux dans la tenue des dossiers.",
        "id_formations": ["sam", "vidal"],
        "famille": "administration",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 23,
        "competence": "Suivre les fournisseurs et partenaires",
        "description": "Suivre les fournisseurs, c’est assurer que les commandes sont passées à temps, livrées et facturées correctement. Cela passe aussi par la négociation des contrats et la résolution des éventuels litiges.",
        "id_formations": ["gme", "mco"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 24,
        "competence": "Organiser les plannings d'activités",
        "description": "Organiser les plannings consiste à répartir les tâches entre les différents membres d’une équipe en fonction des priorités. C’est essentiel pour assurer la productivité et éviter les retards.",
        "id_formations": ["sam"],
        "famille": "administration",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 25,
        "competence": "Superviser les budgets de communication",
        "description": "Superviser les budgets de communication, c’est prévoir, suivre et contrôler les dépenses liées aux campagnes publicitaires et marketing. Cela permet de garantir que les actions sont rentables et efficaces.",
        "id_formations": ["com", "rmc"],
        "famille": "communication",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 26,
        "competence": "Suivre les campagnes publicitaires",
        "description": "Suivre les campagnes publicitaires, c'est analyser les résultats obtenus après la diffusion d'annonces. Cela permet de savoir si la publicité a été efficace et de corriger si besoin pour mieux atteindre le public visé.",
        "id_formations": ["com", "rmc"],
        "famille": "communication",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 27,
        "competence": "Analyser un marché international",
        "description": "Analyser un marché international, c’est étudier les habitudes de consommation, les besoins et la concurrence dans un autre pays. Cela permet de mieux préparer l'exportation des produits et services.",
        "id_formations": ["ci"],
        "famille": "commerce_international",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/responsable-export"}]
    },
    {
        "id": 28,
        "competence": "Négocier à l'international",
        "description": "Négocier à l’international, c’est s’adapter aux différences culturelles et juridiques pour conclure un contrat à l’étranger. La maîtrise de langues étrangères est souvent un atout important dans ce domaine.",
        "id_formations": ["ci"],
        "famille": "commerce_international",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/negociateur-international"}]
    },
    {
        "id": 29,
        "competence": "Adapter la communication interculturelle",
        "description": "Adapter sa communication interculturelle, c’est comprendre et respecter les différences de culture pour mieux échanger. Cela évite les malentendus et favorise des relations de confiance à l'international.",
        "id_formations": ["ci"],
        "famille": "commerce_international",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 30,
        "competence": "Élaborer un plan d'exportation",
        "description": "Élaborer un plan d'exportation consiste à définir les étapes pour vendre des produits à l'étranger. Cela demande d'analyser les risques, choisir les bons partenaires et organiser la logistique.",
        "id_formations": ["ci"],
        "famille": "commerce_international",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/charge-d-export"}]
    },
    {
        "id": 31,
        "competence": "Évaluer les besoins en formation",
        "description": "Évaluer les besoins en formation, c’est identifier les compétences qu’il manque dans une équipe. Cela permet de proposer des formations adaptées pour faire progresser les collaborateurs.",
        "id_formations": ["supdev"],
        "famille": "ressources_humaines",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 32,
        "competence": "Gérer les carrières et les compétences",
        "description": "Gérer les carrières signifie accompagner l’évolution professionnelle des salariés dans l’entreprise. Cela passe par des entretiens réguliers, des formations et des promotions internes.",
        "id_formations": ["supdev"],
        "famille": "ressources_humaines",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/gestionnaire-carriere"}]
    },
    {
        "id": 33,
        "competence": "Piloter des projets RH",
        "description": "Piloter un projet RH, c’est mettre en place des actions liées aux ressources humaines, comme une campagne de recrutement ou un programme de formation. Cela demande organisation et rigueur.",
        "id_formations": ["supdev"],
        "famille": "ressources_humaines",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 34,
        "competence": "Optimiser la qualité de service client",
        "description": "Optimiser la qualité de service client, c’est améliorer l’accueil, le traitement des demandes et le suivi des clients. Un bon service client renforce la satisfaction et la fidélité.",
        "id_formations": ["ndrc", "mco"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 35,
        "competence": "Exploiter un CRM (gestion de la relation client)",
        "description": "Utiliser un CRM (Customer Relationship Management) permet de mieux gérer les contacts, les ventes et les services liés aux clients. C’est un outil clé pour suivre efficacement la relation client.",
        "id_formations": ["ndrc", "mco"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/charge-de-clientele"}]
    },
    {
        "id": 36,
        "competence": "Optimiser les ventes en ligne (e-commerce)",
        "description": "Optimiser les ventes en ligne, c'est utiliser les meilleures techniques pour attirer plus de visiteurs sur un site et les convertir en clients. Cela passe par un site clair, des promotions et un bon référencement.",
        "id_formations": ["mco", "rmc"],
        "famille": "gestion_client",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 37,
        "competence": "Développer la présence en ligne (SEO/SEA)",
        "description": "Développer sa présence en ligne, c’est améliorer la position de l’entreprise dans les moteurs de recherche. Cela implique d’optimiser les contenus (SEO) ou de lancer des campagnes publicitaires (SEA).",
        "id_formations": ["com", "rmc"],
        "famille": "communication",
        "niveau": 2,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/traffic-manager"}]
    },
    {
        "id": 38,
        "competence": "Analyser les performances commerciales",
        "description": "Analyser les performances commerciales, c’est étudier les ventes, les marges et les parts de marché. Cela permet de savoir ce qui fonctionne et d'ajuster la stratégie commerciale.",
        "id_formations": ["mco"],
        "famille": "gestion_client",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 39,
        "competence": "Construire un argumentaire de vente",
        "description": "Construire un argumentaire de vente, c’est préparer les bonnes phrases pour convaincre un client d'acheter un produit ou un service. Il faut montrer les avantages et répondre aux objections du client.",
        "id_formations": ["ndrc"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 40,
        "competence": "Analyser les besoins des utilisateurs",
        "description": "Analyser les besoins utilisateurs signifie comprendre ce que les utilisateurs attendent d'un produit ou d'un service. Cela aide à créer des solutions adaptées et efficaces.",
        "id_formations": ["sio_slam", "sio_sisr"],
        "famille": "informatique",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 41,
        "competence": "Concevoir une architecture réseau sécurisée",
        "description": "Concevoir une architecture réseau sécurisée, c’est imaginer l’organisation des câbles, serveurs et protections pour assurer que les informations circulent sans danger. La sécurité est une priorité absolue.",
        "id_formations": ["sio_sisr"],
        "famille": "informatique",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 42,
        "competence": "Installer et configurer un serveur",
        "description": "Installer un serveur signifie le préparer pour qu’il puisse stocker des données et héberger des applications pour une entreprise. La configuration doit être précise pour éviter les failles de sécurité.",
        "id_formations": ["sio_sisr"],
        "famille": "informatique",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/administrateur-systeme"}]
    },
    {
        "id": 43,
        "competence": "Assurer la cybersécurité d'un réseau",
        "description": "Assurer la cybersécurité, c'est protéger les réseaux informatiques contre les attaques et les virus. Cela implique des mises à jour régulières et la surveillance constante du système.",
        "id_formations": ["sio_sisr"],
        "famille": "informatique",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/analyste-cybersecurite"}]
    },
    {
        "id": 44,
        "competence": "Développer des solutions de gestion d'entreprise",
        "description": "Développer des solutions de gestion, c’est créer des logiciels qui facilitent la comptabilité, les ventes ou les ressources humaines. Cela demande d’écouter les besoins des utilisateurs et de coder des programmes sur mesure.",
        "id_formations": ["sio_slam"],
        "famille": "informatique",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 45,
        "competence": "Intégrer des services web et API",
        "description": "Intégrer des services web, c’est connecter différents logiciels entre eux pour qu'ils partagent des données. Cela permet par exemple d'afficher des informations météo dans une application mobile.",
        "id_formations": ["sio_slam"],
        "famille": "informatique",
        "niveau": 2,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/developpeur-web"}]
    },
    {
        "id": 46,
        "competence": "Automatiser des tâches informatiques",
        "description": "Automatiser des tâches, c’est créer des programmes qui réalisent des actions répétitives à la place d’un humain. Cela permet de gagner du temps et d’éviter les erreurs.",
        "id_formations": ["sio_slam"],
        "famille": "informatique",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 47,
        "competence": "Gérer les incidents et le support utilisateurs",
        "description": "Gérer les incidents, c’est aider les utilisateurs qui rencontrent des problèmes informatiques. Cela demande de l’écoute, de la patience et des compétences techniques pour résoudre rapidement les soucis.",
        "id_formations": ["sio_sisr"],
        "famille": "informatique",
        "niveau": 2,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/technicien-support"}]
    },
    {
        "id": 48,
        "competence": "Créer du contenu pour les réseaux sociaux",
        "description": "Créer du contenu pour les réseaux sociaux, c’est imaginer des textes, des images ou des vidéos qui vont plaire et engager une communauté. Il faut être créatif et réactif.",
        "id_formations": ["com"],
        "famille": "communication",
        "niveau": 2,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/community-manager"}]
    },
    {
        "id": 49,
        "competence": "Réaliser une veille concurrentielle",
        "description": "Faire une veille concurrentielle, c’est surveiller ce que font les autres entreprises dans son secteur. Cela permet de repérer des tendances, des opportunités ou de nouvelles idées.",
        "id_formations": ["com", "rmc"],
        "famille": "communication",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 50,
        "competence": "Communiquer en situation de crise",
        "description": "Communiquer en situation de crise, c’est transmettre des messages clairs et rassurants quand une entreprise traverse une difficulté. Il faut éviter la panique et donner des informations vérifiées rapidement.",
        "id_formations": ["com", "sam"],
        "famille": "communication",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/charge-de-communication-de-crise"}]
    },
    {
        "id": 51,
        "competence": "Piloter une stratégie omnicanal",
        "description": "Piloter une stratégie omnicanal, c'est organiser la communication et la vente sur plusieurs canaux à la fois (boutiques, site web, réseaux sociaux). L'objectif est d'offrir une expérience fluide aux clients.",
        "id_formations": ["mco", "rmc"],
        "famille": "gestion_client",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 52,
        "competence": "Utiliser les outils de bureautique avancés",
        "description": "Utiliser des outils de bureautique avancés signifie maîtriser les fonctions complexes de Word, Excel, PowerPoint, Outlook. Cela permet de produire des documents professionnels efficaces et bien présentés.",
        "id_formations": ["sam", "gme", "vidal"],
        "famille": "administration",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 53,
        "competence": "Assurer la gestion documentaire",
        "description": "Assurer la gestion documentaire, c’est organiser le classement, l’archivage et la conservation des documents de l'entreprise. Cela garantit que l'information reste accessible et conforme aux obligations légales.",
        "id_formations": ["sam", "vidal"],
        "famille": "administration",
        "niveau": 2,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/gestionnaire-documentaire"}]
    },
    {
        "id": 54,
        "competence": "Rédiger des documents administratifs",
        "description": "Rédiger des documents administratifs, c'est écrire courriers, notes, comptes-rendus ou procédures en respectant les règles de forme. Une bonne rédaction garantit la clarté et la compréhension des informations.",
        "id_formations": ["sam", "vidal"],
        "famille": "administration",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 55,
        "competence": "Optimiser les processus internes",
        "description": "Optimiser les processus internes consiste à rendre les méthodes de travail plus efficaces et moins coûteuses. Cela passe par l'analyse des pratiques actuelles et la proposition d'améliorations concrètes.",
        "id_formations": ["gme", "sam"],
        "famille": "administration",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/consultant-en-organisation"}]
    },
    {
        "id": 56,
        "competence": "Organiser des réunions et comptes-rendus",
        "description": "Organiser une réunion, c'est préparer l'ordre du jour, animer les échanges et assurer le suivi avec un compte-rendu précis. Cela permet de prendre des décisions claires et de garder une trace écrite.",
        "id_formations": ["sam"],
        "famille": "administration",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 57,
        "competence": "Assurer la transmission d'information",
        "description": "Assurer la transmission d'informations, c'est veiller à ce que les bonnes informations soient partagées au bon moment avec les bonnes personnes. Cela évite les erreurs et les malentendus en entreprise.",
        "id_formations": ["sam", "vidal"],
        "famille": "administration",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 58,
        "competence": "Coordonner des prestataires",
        "description": "Coordonner des prestataires signifie gérer les relations avec des entreprises externes qui réalisent des prestations pour l'organisation. Cela nécessite un bon suivi de qualité, de coût et de délai.",
        "id_formations": ["sam", "mco"],
        "famille": "administration",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 59,
        "competence": "Gérer les archives physiques et numériques",
        "description": "Gérer les archives, c’est trier, conserver et sécuriser les documents importants, qu'ils soient papiers ou informatiques. Un bon archivage permet de retrouver rapidement une information utile.",
        "id_formations": ["sam", "vidal"],
        "famille": "administration",
        "niveau": 2,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/archiviste"}]
    },
    {
        "id": 60,
        "competence": "Réaliser des enquêtes de satisfaction",
        "description": "Réaliser une enquête de satisfaction consiste à interroger les clients pour savoir ce qu'ils pensent d'un produit ou service. Ces retours permettent d'améliorer l'offre et la relation client.",
        "id_formations": ["mco", "ndrc"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 61,
        "competence": "Analyser les données clients",
        "description": "Analyser les données clients, c'est étudier leurs achats, leurs habitudes et leurs préférences. Ces informations permettent de mieux cibler les offres et personnaliser la communication.",
        "id_formations": ["mco", "ndrc"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 62,
        "competence": "Participer à l'élaboration du reporting",
        "description": "Participer au reporting, c’est aider à créer des documents qui résument l’activité de l’entreprise (chiffre d'affaires, évolution des ventes...). Cela aide les managers à prendre des décisions rapides.",
        "id_formations": ["gme", "sam"],
        "famille": "administration",
        "niveau": 2,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/assistant-de-gestion"}]
    },
    {
        "id": 63,
        "competence": "Piloter des outils d'automatisation marketing (CRM)",
        "description": "Piloter des outils CRM, c'est utiliser des logiciels pour suivre les campagnes marketing et automatiser certaines tâches. Cela améliore l'efficacité et personnalise l'approche client.",
        "id_formations": ["rmc", "ndrc"],
        "famille": "communication",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 64,
        "competence": "Définir une stratégie commerciale",
        "description": "Définir une stratégie commerciale, c’est établir un plan pour vendre plus de produits ou services. Cela demande de fixer des objectifs clairs et d’adapter les actions en fonction du marché.",
        "id_formations": ["mco", "ndrc"],
        "famille": "gestion_client",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 65,
        "competence": "Gérer un portefeuille de clients",
        "description": "Gérer un portefeuille clients, c’est suivre et animer un ensemble de clients pour développer leur fidélité. Cela demande de l’organisation et un suivi régulier des besoins de chacun.",
        "id_formations": ["ndrc"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/charge-de-clientele"}]
    },
    {
        "id": 66,
        "competence": "Gérer une unité commerciale",
        "description": "Gérer une unité commerciale, c'est diriger un magasin ou une équipe de vente. Il faut s'assurer que les objectifs sont atteints, motiver l'équipe et assurer la rentabilité de l'activité.",
        "id_formations": ["mco"],
        "famille": "gestion_client",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 67,
        "competence": "Négocier et conclure une vente",
        "description": "Négocier et conclure une vente, c’est convaincre un client d'acheter et trouver un accord satisfaisant pour les deux parties. Cela demande de l’écoute, de l’argumentation et de la confiance.",
        "id_formations": ["ndrc", "mco"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 68,
        "competence": "Développer un réseau professionnel",
        "description": "Développer un réseau professionnel consiste à créer des liens avec d'autres professionnels pour échanger des opportunités d'affaires. Cela peut se faire lors d'événements ou sur les réseaux sociaux.",
        "id_formations": ["ndrc", "mco"],
        "famille": "communication",
        "niveau": 2,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/charge-de-reseaux"}]
    },
    {
        "id": 69,
        "competence": "Utiliser les réseaux sociaux professionnels",
        "description": "Utiliser les réseaux professionnels (LinkedIn, Viadeo...) permet de diffuser son CV, suivre les actualités du secteur et contacter de nouveaux partenaires. C’est un outil essentiel dans le monde du travail moderne.",
        "id_formations": ["com", "rmc"],
        "famille": "communication",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 70,
        "competence": "Mettre en place des outils de prospection",
        "description": "Mettre en place des outils de prospection, c'est préparer des supports pour contacter efficacement de nouveaux clients. Cela peut être une base de données, des emails personnalisés ou des appels téléphoniques.",
        "id_formations": ["ndrc", "rmc"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 71,
        "competence": "Adapter son discours commercial",
        "description": "Adapter son discours commercial, c’est ajuster ses arguments en fonction du client, de ses besoins et de sa personnalité. Cela permet d’être plus convaincant et d’augmenter les chances de succès.",
        "id_formations": ["ndrc", "mco"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 72,
        "competence": "Analyser des données commerciales",
        "description": "Analyser des données commerciales, c’est étudier les chiffres de vente pour comprendre les tendances du marché. Cela permet de prendre des décisions stratégiques pour développer l’activité.",
        "id_formations": ["mco"],
        "famille": "gestion_client",
        "niveau": 2,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 73,
        "competence": "Améliorer la rentabilité commerciale",
        "description": "Améliorer la rentabilité commerciale, c’est augmenter les profits sans nécessairement vendre plus. Cela passe par l'optimisation des coûts, l'amélioration de la marge et la fidélisation des clients.",
        "id_formations": ["mco"],
        "famille": "gestion_client",
        "niveau": 3,
        "sources": [{"type": "site_formation", "lien": competencesLink}]
    },
    {
        "id": 74,
        "competence": "Manager un service commercial",
        "description": "Manager un service commercial, c’est encadrer toute une équipe de vendeurs, fixer des objectifs collectifs et suivre les résultats. Le manager doit motiver ses équipes et piloter leur performance.",
        "id_formations": ["mco"],
        "famille": "gestion_client",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/chef-des-ventes"}]
    },
//ajouter a la main
    {
        "id": 75,
        "competence": "Créer et animer un réseau de vente directe",
        "description": "",
        "id_formations": ["ndrc"],
        "famille": "rcar",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/chef-des-ventes"}]
    },
    {
        "id": 75,
        "competence": "Cibler et prospecter la clientèle",
        "description": "",
        "id_formations": ["ndrc"],
        "famille": "rcnv",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/chef-des-ventes"}]
    },
    {
        "id": 75,
        "competence": "Négocier et accompagner la relation client",
        "description": "",
        "id_formations": ["ndrc"],
        "famille": "rcnv",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/chef-des-ventes"}]
    },
    {
        "id": 75,
        "competence": "Organiser et animer un événement commercial",
        "description": "",
        "id_formations": ["ndrc"],
        "famille": "rcnv",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/chef-des-ventes"}]
    },
    {
        "id": 75,
        "competence": "Exploiter et mutualiser l’information commerciale",
        "description": "",
        "id_formations": ["ndrc"],
        "famille": "rcnv",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/chef-des-ventes"}]
    },
    {
        "id": 75,
        "competence": "Maîtriser la relation omnicanale",
        "description": "",
        "id_formations": ["ndrc"],
        "famille": "rcdd",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/chef-des-ventes"}]
    },
    {
        "id": 75,
        "competence": "Animer la relation client digitale",
        "description": "",
        "id_formations": ["ndrc"],
        "famille": "rcdd",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/chef-des-ventes"}]
    },
    {
        "id": 75,
        "competence": "Développer la relation client en e-commerce",
        "description": "",
        "id_formations": ["ndrc"],
        "famille": "rcdd",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/chef-des-ventes"}]
    },
    {
        "id": 75,
        "competence": "Implanter et promouvoir l’offre chez des distributeurs",
        "description": "",
        "id_formations": ["ndrc"],
        "famille": "rcar",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/chef-des-ventes"}]
    },
    {
        "id": 75,
        "competence": "Développer et animer un réseau de partenaires",
        "description": "",
        "id_formations": ["ndrc"],
        "famille": "rcar",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/chef-des-ventes"}]
    },
    {
        "id": 75,
        "competence": "Créer et animer un réseau de vente directe",
        "description": "",
        "id_formations": ["ndrc"],
        "famille": "rcar",
        "niveau": 3,
        "sources": [{"type": "fiche_metier", "lien": "https://www.onisep.fr/metier/chef-des-ventes"}]
    },
];