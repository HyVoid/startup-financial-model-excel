[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Modèle Financier Excel pour Startups et Calculatrice Interactive d'Unit Economics sur 5 Ans
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/eee8e328-ec24-495c-b57e-c9ccbc42952b" />

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2251FF)
![Tool Type: FP&A & Fundraising Model](https://img.shields.io/badge/Tool-FP%26A%20%26%20Fundraising%20Model-051C2C)

**Un template Excel de modèle financier pour startups sur 5 ans (60 mois) et une calculatrice interactive d'unit economics. Conçu pour les fondateurs de SaaS et d'activités numériques en phase d'amorçage, les CFOs à temps partagé et les analystes FP&A afin de prévoir le payback LTV/CAC, les charges de personnel OpEx, le burn rate mensuel de trésorerie, le runway et la dilution lors des levées de fonds en capital-risque — disponible sous forme de simulateur financier gratuit dans le navigateur (sans inscription) et d'un classeur Microsoft Excel téléchargeable.**

> **Accédez aux outils de projection financière et de runway pour startups**
>
> - 🌐 **[Lancez le simulateur financier gratuit basé navigateur](https://hyvoid.github.io/startup-financial-model-excel/)** — Testez instantanément dans votre navigateur les cohortes d'acquisition d'utilisateurs, l'unit economics LTV/CAC et les scénarios de runway de trésorerie, sans installation ni inscription.
> - 📥 **[Téléchargez le classeur Excel du modèle financier sur 60 mois (.xlsx)](https://theseusworkshop.com/l/rdeccv?utm_source=github&utm_medium=GitHub%20README)** — Obtenez le template complet de tableur bottom-up pour les prévisions FP&A hors ligne, les data rooms de due diligence investisseurs et le reporting récurrent au conseil d'administration.



---

## Métriques FP&A clés et défis de levée de fonds résolus

Plutôt que d'assembler des feuilles marketing disjointes et des résumés statiques de P&L, ce moteur financier bottom-up relie directement les leviers de croissance du chiffre d'affaires à la liquidité du flux de trésorerie. Voici comment le modèle relie les **points de douleur de la planification financière des startups** aux **métriques auditables d'unit economics et de levée de fonds en capital-risque** :

| Point de douleur de la planification financière de startup | Mécanisme de modélisation connecté | KPIs et métriques investisseurs suivis |
| :--- | :--- | :--- |
| **Croissance utilisateurs et dépenses marketing déconnectées** | Relie les budgets mensuels d'acquisition payante et le CAC mixte directement à la croissance virale organique et aux courbes de rétention par cohortes. | Utilisateurs actifs mensuels (MAU), répartition payant vs organique, dates des jalons de 100k / 500k / 1M d'utilisateurs |
| **Monétisation et prévisions de revenus non validées** | Convertit les cohortes d'utilisateurs actifs en revenus via des taux de conversion freemium-vers-payant configurables et des tarifs d'expansion. | Revenus récurrents mensuels (MRR), revenu annualisé (ARR), revenu moyen par utilisateur payant (ARPPU) |
| **Unit economics illusoires et payback lent** | Évalue la valeur client ajustée de la marge brute par rapport aux coûts d'acquisition sur les canaux marketing en montée en charge. | CAC mixte, valeur vie client (LTV), ratio LTV:CAC, période de payback du CAC (mois) |
| **Burn incontrôlé des effectifs et de l'OpEx** | Relie les plans de recrutement poste par poste, les salaires de base et les cotisations sociales patronales légales directement à la base de coûts d'exploitation. | Coût des effectifs entièrement chargé, taux de cotisation patronale (%), OpEx fixe vs variable |
| **Cécité rentabilité vs flux de trésorerie** | Sépare le résultat opérationnel comptable de la liquidité bancaire réelle pour identifier précisément quand le besoin en fonds de roulement s'épuise. | EBITDA mensuel, mois du point d'équilibre opérationnel, burn rate net de trésorerie, point bas de trésorerie, runway (mois) |
| **Objectifs de levée et de dilution arbitraires** | Modélise les tours pre-money/post-money face à des déficits de trésorerie multi-scénarios pour justifier les levées auprès des investisseurs. | Écart de financement total, coussin de capital requis, dilution du capital (%), multiple de valorisation de sortie et MOIC |

---

## Tutoriel étape par étape : comment construire une prévision financière de startup sur 5 ans

Le flux de modélisation suit les meilleures pratiques institutionnelles de FP&A : **configurez une seule fois les hypothèses macroéconomiques et d'unité centrales, saisissez votre plan d'exécution opérationnelle, puis auditez le relevé de flux de trésorerie de 60 mois qui en résulte.**

### Étape 1 : Configurer l'unit economics de base et les hypothèses macroéconomiques
Ouvrez l'onglet dédié `Configuration & Assumptions` pour établir votre unit economics de référence et vos paramètres de gouvernance d'entreprise (strictement séparés des cellules de formules pour éviter les erreurs de codage en dur) :

- **Chronologie et gouvernance :** date de début du modèle, devise de reporting (`USD`, `EUR`, `GBP`), taux d'imposition des sociétés et seuil minimal de coussin de trésorerie.
- **Leviers d'acquisition et de rétention :** coût d'acquisition client payant (CAC), taux de croissance organique, taux de churn mensuel des utilisateurs et pourcentage de conversion payante.
- **Monétisation et coûts directs :** revenu moyen par utilisateur (ARPU), coût des marchandises vendues (COGS) / taux d'hébergement direct, et taux de cotisation patronale légal (crucial pour la modélisation de la paie en Europe).
- **Levée de fonds et valorisation :** sélecteur de scénario actif (`Conservative`, `Base`, `Optimistic`) et multiple de valorisation de sortie cible.

### Étape 2 : Saisir le plan opérationnel et de recrutement sur 60 mois
Remplissez les grilles de saisie de gestion dédiées sur votre horizon de 5 ans :

- **Budget marketing et croissance :** saisissez la dépense mensuelle d'acquisition payante pour alimenter les cohortes d'utilisateurs en haut de l'entonnoir.
- **Planning des effectifs et de la paie :** cartographiez les recrutements prévus par poste, mois de début cible et rémunération de base.
- **Charges d'exploitation récurrentes (OpEx) :** saisissez les frais généraux et administratifs, la R&D, les abonnements logiciels et les frais juridiques/administratifs.
- **Financement et tours de capital :** définissez les injections de fonds propres prévues (Seed, Série A ou pont) par calendrier et taille de tour.

### Étape 3 : Auditer les états financiers mensuels connectés et le runway de trésorerie
Examinez les onglets de sortie automatisés sur 60 mois pour vérifier comment les choix opérationnels impactent la solvabilité à long terme :

- **Prévision de croissance et de monétisation :** suivez la progression des cohortes, du trafic brut aux abonnés payants et à la marge brute.
- **Tableau de bord d'unit economics :** surveillez si votre `LTV:CAC ratio` reste au-dessus du benchmark institutionnel de `3.0x` et si le `CAC Payback` tient dans votre cycle de besoin en fonds de roulement.
- **États financiers consolidés :** inspectez l'EBITDA mensuel, le moment du point d'équilibre opérationnel, le flux de trésorerie cumulé et le **point bas de trésorerie** exact (votre véritable besoin net de financement).

### Étape 4 : Lancer une analyse de sensibilité à 3 scénarios et exporter vers Excel
Basculez entre les **cas Conservateur, Base et Optimiste** pour tester en contrainte l'impact d'un churn plus élevé, d'une conversion payante plus lente ou d'un recrutement retardé sur votre runway de trésorerie et vos multiples de retour investisseurs.

> 📊 **Prêt à construire votre data room prête pour les investisseurs ?**
> Après avoir testé en contrainte vos hypothèses de revenus dans le **[simulateur financier gratuit basé navigateur](https://hyvoid.github.io/startup-financial-model-excel/)**, téléchargez le **[classeur Excel réutilisable du modèle financier sur 60 mois (.xlsx)](https://theseusworkshop.com/l/rdeccv?utm_source=github&utm_medium=GitHub%20README)** pour personnaliser les grilles poste par poste, maintenir l'historique réel vs budget et partager un tableur transparent et auditable dans ses formules avec les investisseurs en capital-risque.

---

## Pourquoi j'ai construit ce cadre financier connecté pour startups

De nombreux pitch decks de startups affichent des projections de revenus en bâton de hockey qui s'effondrent sous une due diligence investisseur basique, car elles masquent la mécanique opérationnelle nécessaire pour financer cette croissance.

Un objectif d'utilisateurs actifs mensuels (MAU) n'est pas un plan de financement. Une prévision d'ARR de tête ne prouve pas une unit economics durable. Un EBITDA positif n'équivaut pas à de la trésorerie en banque. Même une activité numérique à croissance rapide qui atteint 500 000 utilisateurs peut déclencher une crise de liquidité fatale si les dépenses de CAC payant, la paie des ingénieurs et le COGS des serveurs s'accumulent pendant des mois avant que la monétisation des cohortes ne rattrape.

### Le « piège de la croissance à 100 000 MAU » : pourquoi les tableurs isolés échouent
Imaginons un fondateur qui prévoit d'atteindre **100 000 utilisateurs actifs mensuels** en intensifiant le marketing à la performance payant.

Dans un template déconnecté, augmenter le budget publicitaire gonfle simplement la ligne des utilisateurs totaux. En réalité, cette seule décision se répercute sur tout le bilan : elle modifie le mix utilisateurs payants/organiques, augmente les coûts directs d'hébergement cloud, accélère le recrutement du support client et creuse le **point bas de trésorerie** à court terme. Si la conversion payante recule de seulement 1,5 % ou si le churn mensuel augmente, une dépense d'acquisition agressive accélère la faillite plutôt que la valeur de l'entreprise.

Ce cadre relie l'acquisition d'utilisateurs, la rétention par cohortes, la monétisation, la paie entièrement chargée et le financement en fonds propres dans un **modèle décisionnel unique et industrialisé**. Il déplace la question centrale du fondateur de *« quelle taille nos revenus peuvent-ils afficher en année 5 ? »* vers la question que les investisseurs institutionnels posent réellement :

> **« Quelle combinaison précise de payback CAC, de conversion, de rythme de recrutement et de financement en fonds propres rend notre trajectoire de croissance financièrement survivable ? »**

---

## Tableurs statiques de pitch deck vs moteur de décision FP&A connecté

| Dimension de modélisation financière | Templates statiques traditionnels et tableurs ad hoc | Moteur connecté de croissance et de financement de startup (cet outil) |
| :--- | :--- | :--- |
| **Croissance utilisateurs vs économie du CAC** | Les objectifs d'utilisateurs totaux sont saisis à la main ou cultivés par un pourcentage fixe, déconnectés des dépenses marketing et du CAC payant. | Les budgets marketing payants mensuels, le CAC mixte, le lift organique et le churn pilotent dynamiquement la prévision d'utilisateurs actifs sur 60 mois. |
| **Monétisation et reconnaissance du revenu** | Le revenu est projeté comme une somme forfaitaire isolée, en supposant qu'une large base d'utilisateurs se convertit automatiquement en ARR à forte marge. | Relie les cohortes d'utilisateurs actifs, les taux de conversion freemium-vers-payant, l'ARPU et les taux de COGS directs directement à la marge brute. |
| **Unit economics vs besoin en fonds de roulement** | `LTV/CAC` est calculé comme un ratio théorique statique, ignorant comment une longue période de payback du CAC draine les soldes bancaires mensuels. | Évalue `LTV:CAC` et la durée de payback aux côtés du burn net mensuel, des coussins de trésorerie minimaux et des points bas de liquidité. |
| **Montée en charge des effectifs et charges de paie** | Les salaires sont estimés en sommes forfaitaires, omettant fréquemment les cotisations sociales patronales légales et les délais de montée en charge des recrutements. | Cartographie les mois de début par poste, les salaires de base et les **taux de cotisation patronale** directement dans le burn OpEx mensuel. |
| **Dimensionnement des tours et logique de dilution** | Les fondateurs choisissent la taille des tours selon les conventions du marché (ex. « lever 2 M$ ») plutôt que selon les déficits de trésorerie modélisés. | Calcule le **point bas de trésorerie** exact et le coussin de capital sur 60 mois pour justifier des objectifs de levée défendables. |
| **Tests de résistance de scénarios investisseurs** | Les pitch decks reposent sur une unique prévision « Cas de Base », exigeant des heures d'éditions manuelles de formules pour répondre aux questions de downside des VC. | Les **sélecteurs de scénarios Conservateur, Base et Optimiste** intégrés recalculent instantanément runway, dilution et multiples de sortie. |

---

## À qui s'adresse ce modèle financier : rôles et flux de travail

Cette boîte à outils de modélisation financière au format double (Navigateur + Excel) sert les opérateurs, conseillers et allocateurs de capital de tout l'écosystème technologique :

- **Fondateurs de startups pre-Seed, Seed et Série A :** construisez un **template de projection financière de startup** prêt pour les investisseurs sans partir d'une feuille vierge. Validez votre modèle économique, calculez votre demande de financement exacte et répondez aux questions de due diligence difficiles des VC sur l'unit economics et le runway de trésorerie.
- **CFOs à temps partagé, conseillers de startups et responsables financiers :** standardisez l'onboarding des clients avec un **classeur Excel FP&A modulaire sur 60 mois**. Auditez rapidement le plan de recrutement d'un fondateur, calibrez les charges patronales légales (notamment entre juridictions européennes) et menez des planifications de scénarios au niveau du conseil.
- **Opérateurs SaaS, apps mobiles et tech grand public :** utilisez la **calculatrice interactive d'unit economics** pour tester les paliers de prix, les seuils de conversion freemium et les budgets d'acquisition payante avant d'engager du capital marketing.
- **Analystes capital-risque (VC), business angels et accélérateurs :** testez en contrainte les affirmations des pitch decks pendant le screening des dossiers. Injectez les métriques de base d'une société du portefeuille dans le **simulateur financier basé navigateur** pour voir la sensibilité de son runway aux pics de churn ou à l'inflation du CAC.
- **Étudiants en gestion et praticiens de la modélisation financière :** étudiez une **architecture de tableur paramétrique** propre et modulaire qui sépare les entrées de configuration, les grilles opérationnelles et les sorties financières à trois volets sans erreurs de références circulaires.

---

## Scénarios de modélisation financière longue traîne et cas d'usage sectoriels

Que vous lanciez un produit B2B SaaS en autofinancement ou leviez du capital-risque institutionnel transfrontalier, ce cadre s'adapte aux scénarios de planification à fort enjeu :

### 1. Data rooms de levée en capital-risque Seed et Série A
Les investisseurs institutionnels attendent plus qu'un résumé annuel sur 3 ans. Utilisez la **prévision mensuelle granulaire sur 60 mois** pour démontrer précisément quand votre startup franchit le point d'équilibre opérationnel, comment le nouveau capital étend votre runway et quel multiple de valorisation de sortie est requis pour délivrer les profils de rendement cibles en cas de Base et de Conservateur.

### 2. Expansion des startups tech européennes et modélisation de la paie entièrement chargée
De nombreux templates financiers centrés sur les États-Unis négligent les lourdes cotisations sociales patronales et charges de paie obligatoires sur les marchés européens (comme l'Allemagne, la France, le Royaume-Uni ou les pays nordiques). En isolant le **taux de cotisation patronale** comme variable de configuration globale aux côtés de la gestion multidevises, les équipes financières peuvent modéliser précisément le coût réel entièrement chargé du recrutement transfrontalier.

### 3. Tests de monétisation par cohortes pour apps freemium grand public et B2B SaaS
En passant de 10 000 à 1 000 000 d'utilisateurs, de légers glissements de la conversion payante ou des coûts d'hébergement directs peuvent inverser la marge brute. Utilisez la logique connectée croissance-vers-revenus pour simuler si votre modèle de monétisation soutient une montée en charge de l'acquisition payante ou nécessite une stratégie de croissance menée par l'organique.

---

### Périmètre, gouvernance et avertissement financier
*Ce cadre est un modèle d'aide à la décision commerciale et un outil de prévision FP&A — ni un logiciel comptable réglementaire, ni un conseil fiscal ou juridique certifié, ni une infrastructure de traitement de la paie, ni une évaluation formelle d'investissement. Ne l'utilisez pas en remplacement de la comptabilité financière GAAP/IFRS ou de la conformité propre à chaque juridiction. Les utilisateurs doivent valider toutes les hypothèses fiscales, de cotisation patronale et commerciales auprès de professionnels financiers qualifiés.*

## Détails techniques

<details>
<summary><strong>Architecture du classeur</strong></summary>

Le classeur est conçu comme une chaîne de dépendances unidirectionnelle. Les entrées sont gérées centralement, les prévisions opérationnelles calculent les conséquences de ces entrées, et les sorties financières et de financement consolident les résultats.

| Feuille | Responsabilité | Sorties principales |
| --- | --- | --- |
| `01_Assumptions` | Paramètres globaux et matrice de scénarios | Devise, date de début, hypothèse fiscale, scénario actif, leviers de croissance et de coûts |
| `02_Growth_Acquisition` | Acquisition et rétention mensuelles d'utilisateurs | Ajouts payants et organiques, churn, MAU final, échéancier des jalons et dépenses marketing |
| `03_Revenue_UnitEconomics` | Monétisation et économie client | Utilisateurs payants, MRR, rythme annuel ARR, marge brute, CAC, LTV et payback |
| `04_Team_Opex` | Planification du recrutement et des charges d'exploitation | Effectifs, coûts salariaux, cotisations patronales, OPEX départemental |
| `05_Monthly_Financials` | Moteur financier et de flux de trésorerie consolidé | EBITDA, résultat net, flux de trésorerie, solde de trésorerie, runway et écart de financement |
| `06_Scenarios_Funding` | Planification du capital et analyse de sortie | Comparaisons de scénarios, montant de financement, dilution, MoIC et IRR |
| `07_Executive_Dashboard` | Reporting exécutif et investisseurs | Synthèses financières annuelles, KPIs de croissance, jalons et indicateurs de liquidité |

<details>
<summary><strong>Flux de dépendances</strong></summary>

```
01_Assumptions
      |
      +------> 02_Growth_Acquisition
      |                    |
      +------> 03_Revenue_UnitEconomics
      |                    |
      +------> 04_Team_Opex
                           |
                           v
                 05_Monthly_Financials
                      /          \
                     v            v
          06_Scenarios_Funding   07_Executive_Dashboard
```

Le diagramme représente les dépendances analytiques prévues. Les calculs de revenus, de croissance et de charges doivent être alignés sur les mêmes périodes mensuelles avant consolidation.

</details>

<details>
<summary><strong>Convention de l'axe temporel</strong></summary>

- `02_Growth_Acquisition`, `03_Revenue_UnitEconomics` et `05_Monthly_Financials` utilisent les colonnes `C:BK` pour 60 périodes mensuelles.
- `04_Team_Opex` réserve les colonnes `A:D` aux saisies d'effectifs et utilise `E:BL` pour sa prévision sur 60 mois.
- La date de début du modèle est gérée centralement dans `01_Assumptions`.
- L'implémentation Excel utilise des fonctions de tableaux dynamiques, notamment `SEQUENCE`, `SCAN`, `LET`, `LAMBDA`, `BYCOL` et les références propagées.

</details>

La spécification source décrit l'architecture du modèle et la conception des formules. Les implémentations réelles du navigateur et du classeur doivent être testées séparément avant toute affirmation concernant le déploiement, la compatibilité ou la validation automatisée.

</details>

<details>
<summary><strong>Trois pièges qui attrapent même les fondateurs expérimentés</strong></summary>

<details>
<summary><strong>Piège 1 — Considérer une large base d'utilisateurs comme la preuve d'un modèle viable</strong></summary>

Décision : augmenter les dépenses d'acquisition pour accélérer la pénétration du marché.

Défaut caché : la prévision suppose que les utilisateurs actifs se convertissent en clients payants sans examiner suffisamment la conversion, le churn et la marge brute.

Prenons une activité avec 100 000 MAU, un taux de conversion payante de 2,5 % et un ARPU mensuel de 19 €.

| Métrique | Résultat illustratif |
| --- | --- |
| Utilisateurs actifs mensuels | 100,000 |
| Utilisateurs payants | 2,500 |
| Revenu mensuel | €47,500 |
| Revenu à 4,5 % de conversion et ARPU inchangé | €85,500 |

La même base d'utilisateurs actifs produit des revenus substantiellement différents selon la performance de conversion.

L'approche incorrecte consiste à optimiser seul le volume d'acquisition. L'approche corrigée consiste à évaluer ensemble l'acquisition et la monétisation, puis à déterminer si la dépense supplémentaire produit des clients payants économiquement attractifs.

</details>

<details>
<summary><strong>Piège 2 — Traiter LTV/CAC comme une prévision de flux de trésorerie</strong></summary>

Décision : intensifier le marketing parce que le LTV/CAC projeté dépasse 3.0x.

Défaut caché : un ratio de valeur vie favorable ne démontre pas que l'entreprise dispose d'assez de trésorerie pour financer les engagements d'acquisition et d'exploitation nécessaires pour atteindre la rentabilité.

Avec les hypothèses de base d'un ARPU mensuel de 29 €, un taux de COGS de 18 % et un churn mensuel de 4 % :

| Métrique | Résultat illustratif |
| --- | --- |
| Marge brute mensuelle par utilisateur payant | €23.78 |
| LTV simplifiée | €594.50 |
| CAC payant | €12.00 |
| LTV / CAC payant | 49.5x |

Le ratio est anormalement élevé car les hypothèses fournies impliquent une longue durée de vie client et un coût d'acquisition faible. Il doit être traité comme un résultat de modèle à investiguer, non comme la preuve que l'activité sous-jacente est validée.

Une activité peut encore faire face à une pénurie de trésorerie tout en affichant une unit economics modélisée séduisante. L'approche corrigée consiste à évaluer l'unit economics aux côtés de la dépense marketing, des engagements fixes d'exploitation, du payback de l'acquisition et du solde de trésorerie mensuel.

</details>

<details>
<summary><strong>Piège 3 — Lever du capital contre l'EBITDA au lieu du point bas de trésorerie</strong></summary>

Décision : lever assez de capital pour couvrir la perte opérationnelle prévue jusqu'à ce que l'EBITDA devienne positif.

Défaut caché : l'EBITDA ne capture pas chaque mouvement de trésorerie. Le calendrier des paiements, les variations du fonds de roulement, les dépenses d'investissement, les événements de financement et d'autres postes de trésorerie peuvent créer un besoin de financement différent des pertes d'EBITDA cumulées.

Le modèle source sépare explicitement le moteur de P&L du moteur de flux de trésorerie. L'analyse de financement doit donc s'appuyer sur le solde de trésorerie projeté et le besoin minimal de trésorerie, et non sur le seul mois d'équilibre de l'EBITDA.

| Approche incorrecte | Approche corrigée |
| --- | --- |
| Utiliser le mois d'équilibre de l'EBITDA comme horizon de financement. | Suivre le solde de trésorerie mensuel sur l'horizon de prévision. |
| Lever uniquement de quoi couvrir les pertes opérationnelles prévues. | Estimer le déficit de trésorerie cumulé maximal et ajouter le coussin de sécurité requis. |
| Supposer qu'un EBITDA positif signifie une trésorerie suffisante. | Examiner la liquidité et le runway indépendamment de la rentabilité opérationnelle. |

La décision passe de « de combien d'argent a-t-on besoin jusqu'à ce que l'activité devienne rentable ? » à « de combien d'argent a-t-on besoin pour ne pas enfreindre le coussin minimal de trésorerie sous le scénario opérationnel choisi ? »

</details>

</details>

<details>
<summary><strong>Scénario d'exemple</strong></summary>

L'illustration suivante utilise les hypothèses de base d'acquisition et de monétisation de la spécification source. Elle montre comment la logique de décision du modèle doit être interprétée ; ce n'est pas une prévision vérifiée pour une startup particulière.

<details>
<summary><strong>Entrées</strong></summary>

| Hypothèse | Cas de base |
| --- | --- |
| CAC payant mensuel | €12.00 |
| Churn mensuel | 4.0% |
| K-factor organique | 15.0% |
| Taux de conversion payante | 4.5% |
| ARPU mensuel | €29.00 |
| Taux de COGS | 18.0% |
| Taux de cotisation patronale | 25.0% |
| Coussin minimal de trésorerie | 3 mois |

</details>

<details>
<summary><strong>Étape 1 — Traduire la croissance en monétisation</strong></summary>

À 100 000 MAU finales, un taux de conversion de 4,5 % implique 4 500 utilisateurs payants.

À un ARPU mensuel de 29 €, cette base d'utilisateurs produit 130 500 € de revenus récurrents mensuels dans le modèle simplifié.

Le calcul établit un rythme de revenus, pas des encaissements reconnus. Le revenu réel et le calendrier d'encaissement peuvent différer.

</details>

<details>
<summary><strong>Étape 2 — Tester l'économie client</strong></summary>

À un taux de COGS de 18 %, la marge brute mensuelle par utilisateur payant est de 23,78 €.

Avec une estimation simplifiée de la valeur vie :

- Durée de vie client estimée : \\(1 / 4\\% = 25\\) mois.
- LTV estimée : €29 × 82% / 4% = €594.50.
- LTV / CAC payant : environ 49.5x.

C'est un ratio modélisé solide, mais très sensible au churn, à l'attribution de l'acquisition et à l'hypothèse que la même marge brute et le même taux de churn persistent sur la durée de vie du client.

</details>

<details>
<summary><strong>Étape 3 — Intégrer le plan opérationnel dans l'analyse</strong></summary>

Le plan d'effectifs et d'OPEX détermine la marge brute restante après salaires, cotisations patronales, coûts fixes et publicité.

Une entreprise à unit economics positive peut toujours générer un EBITDA négatif quand le plan d'équipe et de croissance est trop important pour sa base de revenus actuelle.

</details>

<details>
<summary><strong>Étape 4 — Déterminer la décision de financement</strong></summary>

Le modèle financier mensuel consolide la performance opérationnelle et les mouvements de trésorerie. L'analyse de financement compare ensuite le déficit de trésorerie projeté au coussin minimal de trésorerie.

Implication de la décision : un plan de croissance défendable exige trois réponses liées : avec quelle efficacité les clients peuvent être acquis, combien de marge brute ils génèrent, et si l'entreprise peut financer le plan opérationnel jusqu'à ce que la génération de trésorerie devienne durable.

</details>

</details>

<details>
<summary><strong>Référence des formules</strong></summary>

Les groupes suivants documentent les principaux motifs de formules spécifiés pour le classeur. Ce sont des formules de référence, pas une garantie que chaque formule a été testée dans un classeur en usage réel.

</details>

<details>
<summary><strong>Règles de validation</strong></summary>

Les règles suivantes définissent les contrôles minimaux requis pour une implémentation fiable. Certaines sont des exigences de conception ; d'autres sont des garde-fous supplémentaires recommandés avant d'utiliser le modèle pour des décisions de gestion ou d'investissement.

| Champ ou domaine | Règle de validation | Comportement en cas d'erreur |
| --- | --- | --- |
| Symbole de devise | Exiger un symbole d'affichage pris en charge non vide. Changer le symbole n'implique aucune conversion de devise. | Avertir si le symbole est manquant ; indiquer que les montants restent dans la même devise sous-jacente. |
| Date de début du modèle | Exiger une date valide représentant le premier jour d'un mois. | Rejeter les dates invalides ou signaler une date ne correspondant pas à un début de mois. |
| Scénario actif | N'accepter que les valeurs entières `1`, `2` ou `3`. | Rejeter les autres valeurs avant l'exécution des calculs de scénarios. |
| Taux d'imposition | Exiger un pourcentage entre 0 % et 100 %, sous réserve du traitement fiscal applicable. | Signaler les valeurs hors plage. |
| Coussin minimal de trésorerie | Exiger un nombre de mois non négatif. | Signaler les saisies négatives ou non numériques. |
| CAC payant | Exiger une valeur positive dès lors que la dépense d'acquisition payante est positive. | Signaler les divisions par zéro et les hypothèses d'acquisition invalides. |
| Taux de churn | Exiger une valeur supérieure à 0 % et au plus égale à 100 % pour la formule de LTV simplifiée. | Signaler les hypothèses invalides et masquer les sorties de LTV trompeuses. |
| Taux de conversion | Exiger une valeur entre 0 % et 100 %. | Rejeter les saisies hors plage. |
| ARPU | Exiger une valeur monétaire non négative. | Signaler les valeurs négatives. |
| Taux de COGS | Exiger une valeur entre 0 % et 100 %. | Signaler les valeurs hors plage et les résultats de marge brute incohérents. |
| Taux de cotisation patronale | Exiger un pourcentage non négatif. | Signaler les valeurs négatives ou les taux inattendus. |
| Mois de recrutement | Exiger un entier entre 1 et 60 pour un recrutement prévu. | Signaler les recrutements hors horizon de prévision. |
| Département | N'accepter que `R&D`, `S&M` ou `G&A` là où ces catégories pilotent les calculs. | Signaler les noms de départements non reconnus qui seraient sinon omis des totaux départementaux. |
| Budget marketing | Exiger des montants mensuels non négatifs. | Signaler les budgets négatifs et investiguer les vides inattendus. |
| Montant de financement | Exiger une valeur non négative ; comparer le montant saisi au besoin de financement modélisé. | Avertir lorsque le financement prévu est inférieur au montant recommandé. |
| Valorisation pre-money | Exiger une valeur non négative et une valorisation post-money positive pour les calculs de participation. | Masquer les résultats de dilution invalides. |
| Affectation des fonds | Exiger que les pourcentages d'affectation totalisent 100 % si le plan entend affecter la totalité du tour. | Avertir lorsque l'affectation ne boucle pas à 100 %. |
| Sorties de tableaux dynamiques | Garantir que toutes les plages de propagation prévues sont dégagées. | Résoudre `#SPILL!` en supprimant le contenu des cellules en conflit. |
| Périodes de prévision | Maintenir des indices cohérents sur 60 mois et des dates alignées entre les feuilles de calcul. | Signaler les périodes manquantes, dupliquées ou désalignées. |
| Trésorerie et financement | Rapprocher la trésorerie d'ouverture, le flux de trésorerie opérationnel, les entrées de financement et la trésorerie de clôture. | Signaler tout écart entre le déroulé de trésorerie et l'analyse de financement. |
| Rendements de sortie | Exiger un montant d'investissement positif et des hypothèses de participation clairement définies. | Masquer les calculs de MoIC et d'IRR invalides. |

<details>
<summary><strong>Contrôles d'implémentation avant publication</strong></summary>

La conception source comporte plusieurs zones qui exigent un rapprochement explicite avant qu'un classeur puisse être considéré comme validé financièrement :

1. Rapprochement de la croissance utilisateurs. La formule du MAU final intègre directement le churn et la croissance du K-factor, tandis que des lignes distinctes d'ajouts organiques et de churn sont également calculées. Vérifier que le solde final se rapproche du MAU initial plus les nouveaux utilisateurs moins le churn, sans double comptage de la croissance organique.

2. Rapprochement du flux de trésorerie. La source utilise le résultat net comme flux de trésorerie opérationnel et calcule l'écart de financement à partir du flux de trésorerie opérationnel cumulé. Vérifier que tous les mouvements de trésorerie significatifs et les hypothèses de trésorerie d'ouverture sont représentés de manière cohérente.

3. Comparaison des scénarios. Un seul sélecteur de scénario actif ne peut pas afficher indépendamment les trois scénarios à la fois. La matrice de comparaison doit soit calculer chaque scénario séparément, soit documenter explicitement une méthode contrôlée de recalcul de scénario.

4. Financement et participation. La source distingue le financement recommandé du montant réel du tour. Vérifier que l'analyse de l'écart de financement exclut les entrées de financement dans le calcul du déficit opérationnel, tandis que le solde de trésorerie inclut les entrées de financement réellement prévues.

5. Compatibilité des formules et de la plateforme. Tester les formules de tableaux dynamiques dans la version d'Excel cible. Valider l'alignement des dates, le comportement avec dénominateur nul, la détection des jalons, les plages de propagation et les résultats réels des formules plutôt que de se fier uniquement à une liste de contrôle structurelle.

Une liste de contrôle au niveau source marquée comme passée n'équivaut pas à un test exécuté du classeur. Ces contrôles doivent être menés sur le fichier implémenté avant de se fier au modèle pour des décisions de financement.

</details>

</details>

## Logique métier et méthodologie

Le modèle utilise une approche de prévision pilotée par des variables : un petit ensemble d'hypothèses commerciales détermine l'évolution du plan opérationnel, et les conséquences financières résultantes restent connectées tout au long de la prévision.

- L'analyse de scénarios compare des hypothèses alternatives d'acquisition, de rétention, de monétisation, de coûts et de sortie. Elle clarifie quelles hypothèses modifient matériellement le plan de croissance et le besoin en capital.
- La simplification des cohortes d'utilisateurs et la modélisation de la rétention représentent le pool d'utilisateurs actifs comme un solde mensuel affecté par la nouvelle acquisition, la croissance organique et le churn. Cela fournit un point de départ cohérent pour la planification de la croissance, sans remplacer une analyse de cohortes détaillée.
- L'unit economics compare les coûts d'acquisition à la contribution attendue à la marge brute client. Elle aide à déterminer si l'activité modélisée peut récupérer la dépense d'acquisition client dans les conditions de rétention et de marge supposées.
- Les prévisions opérationnelles intégrées relient recrutement, rémunération et charges récurrentes à la croissance du revenu. Cela rend visibles les conséquences financières de l'expansion organisationnelle avant tout engagement.
- L'analyse du déficit de trésorerie et du runway évalue la liquidité séparément de la rentabilité. Elle appuie les décisions de financement sur le calendrier et la profondeur modélisés des déficits de trésorerie plutôt que sur un unique chiffre de bénéfice annuel.

Les méthodes valent ce que valent leurs hypothèses. Les prévisions doivent être mises à jour avec la performance d'acquisition réelle, la conversion, le churn, les prix, les engagements de paie et les mouvements de trésorerie au fil du développement de l'activité.

## Autres outils de cette série

Explorez les outils légers d'analyse d'affaires et d'aide à la décision de la collection Theseus Workshop :

- [Boîte à outils de décision d'affaires](https://github.com/HyVoid/business-decision-toolbox?utm_source=chatgpt.com) — Outils pratiques pour les décisions opérationnelles et financières récurrentes.
- [Theseus Workshop sur GitHub](https://github.com/HyVoid?utm_source=chatgpt.com) — Projets supplémentaires d'analyse d'affaires open source et cadres décisionnels basés sur des tableurs.

## Licence

Ce projet est destiné à utiliser la Licence Apache 2.0. Consultez le fichier `LICENSE` réel du dépôt avant toute redistribution ou usage commercial, et assurez-vous que les versions navigateur et Excel soient distribuées sous des conditions cohérentes et clairement documentées.

Pour plus de détails, voir la [Licence Apache, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0?utm_source=chatgpt.com).
