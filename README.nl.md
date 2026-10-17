[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Startup Financieel Model Excel-sjabloon & Interactieve 5-jarige Unit Economics Calculator
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/eee8e328-ec24-495c-b57e-c9ccbc42952b" />

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2251FF)
![Tool Type: FP&A & Fundraising Model](https://img.shields.io/badge/Tool-FP%26A%20%26%20Fundraising%20Model-051C2C)

**Een Excel-sjabloon voor een startup financieel model over 5 jaar (60 maanden) en een interactieve unit economics calculator. Gebouwd voor oprichters van early-stage SaaS- en digitale bedrijven, interim-CFO's en FP&A-analisten om LTV/CAC-terugverdienperiode, personeels-OpEx, maandelijkse cash burn rate, runway en verwatering bij VC-financieringsrondes te voorspellen — beschikbaar als gratis browsergebaseerde financiële simulator (geen registratie vereist) en als downloadbare Microsoft Excel-werkmap.**

> **Toegang tot de tools voor startup financiële projecties en runway**
>
> - 🌐 **[Start de gratis webgebaseerde startup financieel model simulator](https://hyvoid.github.io/startup-financial-model-excel/)** — Test direct in je browser scenario's voor gebruikersacquisitie-cohorten, LTV/CAC-unit economics en cash runway, zonder installatie of registratie.
> - 📥 **[Download het 60-maanden startup financieel model Excel-werkboek (.xlsx)](https://theseusworkshop.com/l/rdeccv?utm_source=github&utm_medium=GitHub%20README)** — Ontvang de volledige bottom-up spreadsheet-sjabloon voor offline FP&A-forecasting, data rooms voor investeerders due diligence en terugkerende bestuursrapportage.



---

## Kern-FP&A-metrics en uitdagingen bij fondsenwerving die worden opgelost

In plaats van losse marketingbladen en statische P&L-samenvattingen aan elkaar te plakken, verbindt deze bottom-up financiële motor de omzetgroei-drivers direct met de cashflow-liquiditeit. Zo koppelt het model **pijnlijke punten in startup financiële planning** aan controleerbare **VC-fondsenwerving- en unit economics-metrics**:

| Pijnpunt in startup financiële planning | Gekoppeld modelleermechanisme | Gevolgde KPI's en investeerdersmetrics |
| :--- | :--- | :--- |
| **Los staand gebruikersgroei en marketingbestedingen** | Koppelt maandelijkse betaalde acquisitiebudgetten en blended CAC direct aan organische virale groei en cohort-retentiecurven. | Maandelijkse actieve gebruikers (MAU), verdeling betaald vs. organisch, data van 100k / 500k / 1M-gebruikersmijlpalen |
| **Ongevalideerde monetisatie en omzetprognoses** | Vertaalt actieve gebruikerscohorten naar omzet via instelbare freemium-naar-betaald-conversierates en uitbreidingsprijzen. | Maandelijkse terugkerende omzet (MRR), jaarlijkse run rate (ARR), gemiddelde omzet per betalende gebruiker (ARPPU) |
| **Illusoire unit economics en trage terugverdienperiode** | Beoordeelt de op brutomarge gecorrigeerde klantenwaarde tegenover acquisitiekosten over schalende marketingkanalen. | Blended CAC, Customer Lifetime Value (LTV), LTV:CAC-ratio, CAC-terugverdienperiode (maanden) |
| **Ongecontroleerd personeels- en OpEx-verbruik** | Verbindt rol-per-rol aanwervingsroadmaps, basissalarissen en wettelijke socialelasten voor werkgevers direct met de operationele kostenbasis. | Volledig belaste personeelskosten, werkgeversbijdragetarief (%), vaste vs. variabele OpEx |
| **Blindheid voor winstgevendheid vs. cashflow** | Scheidt boekhoudkundige operationele winst van werkelijke bankliquiditeit om precies te zien wanneer het werkkapitaal op raakt. | Maandelijkse EBITDA, maand van operationeel break-even, netto cash burn rate, laagste kasstand, runway (maanden) |
| **Arbitraire VC-financierings- en verwateringsdoelen** | Modelleert pre-money/post-money financieringsrondes tegen multi-scenario tekorten aan contant geld om kapitaalrondes bij investeerders te onderbouwen. | Totale financieringskloof, vereiste kapitaalbuffer, aandelenverwatering (%), exit-waarderingsmultiple & MOIC |

---

## Stapsgewijze handleiding: hoe je een 5-jarige startup financiële forecast bouwt

De modelleerworkflow volgt gangbare institutionele FP&A-best practices: **configureer centrale macro-economische en unit-aannames één keer, voer je operationele uitvoeringsplan in en audit de resulterende 60-maanden kasstroomoverzicht.**

### Stap 1: Configureer kern-unit economics en macro-economische aannames
Open het speciale `Configuration & Assumptions`-tabblad om je baseline-unit economics en corporate governance-parameters vast te leggen (strikt gescheiden van formulecellen om hardcodeerfouten te voorkomen):

- **Tijdlijn en governance:** startdatum van het model, rapportagevaluta (`USD`, `EUR`, `GBP`), vennootschapsbelastingtarief en minimumdrempel voor de kasbuffer.
- **Acquisitie- en retentiedrivers:** betaalde klantacquisitiekosten (CAC), organische groeisnelheid, maandelijkse churnpercentage van gebruikers en betaalde conversiepercentage.
- **Monetisatie en directe kosten:** gemiddelde omzet per gebruiker (ARPU), kosten van verkochte goederen (COGS) / direct hostingtarief en wettelijk werkgeversbijdragetarief (cruciaal voor loonstrokenmodellering in Europa).
- **Fondsenwerving en waardering:** actieve scenario-schakelaar (`Conservative`, `Base`, `Optimistic`) en streefwaarde exit-waarderingsmultiple.

### Stap 2: Voer het 60-maanden operationele en aanwervingsplan in
Vul de aangewezen managementinvoerschema's in over je 5-jarige horizon:

- **Marketing- en groeibudget:** voer maandelijkse betaalde acquisitie-uitgaven in om gebruikerscohorten bovenaan de funnel te voeden.
- **Personeels- en salarisschema:** plan aanwervingen per functierol, doelstartmaand en basisbeloning.
- **Terugkerende bedrijfskosten (OpEx):** voer G&A, R&D, softwareabonnementen en juridische/administratieve overheadkosten in.
- **Financiering en kapitaalrondes:** definieer geplande Seed-, Serie A- of bridge-aandeleninjecties naar timing en rondeomvang.

### Stap 3: Audit gekoppelde maandelijkse financiën en kasrunway
Beoordeel de geautomatiseerde 60-maanden uitvoertabbladen om te verifiëren hoe operationele keuzes de langetermijnsolventie beïnvloeden:

- **Groei- en monetisatieprognose:** volg de voortgang van cohorten van ruw verkeer naar betalende abonnees en brutomarge.
- **Unit economics-dashboard:** monitor of je `LTV:CAC ratio` boven de institutionele benchmark van `3.0x` blijft en of de `CAC Payback` binnen je werkkapitaalcyclus blijft.
- **Geconsolideerde financiële overzichten:** inspecteer maandelijkse EBITDA, timing van operationeel break-even, cumulatieve kasstroom en de exacte **laagste kasstand** (je werkelijke netto financieringsbehoefte).

### Stap 4: Voer een sensitiviteitsanalyse met 3 scenario's uit en exporteer naar Excel
Schakel tussen **Conservative-, Base- en Optimistic-cases** om te stresstesten hoe hogere churn, tragere betaalde conversie of vertraagde aanwervingen je kasrunway en investeerdersrendement-multiples beïnvloeden.

> 📊 **Klaar om je investeerdersklare data room te bouwen?**
> Na het stresstesten van je omzeataannames in de **[gratis webgebaseerde financiële simulator](https://hyvoid.github.io/startup-financial-model-excel/)**, download je het **[herbruikbare 60-maanden financiële model Excel-werkboek (.xlsx)](https://theseusworkshop.com/l/rdeccv?utm_source=github&utm_medium=GitHub%20README)** om regelschema's aan te passen, historische werkelijke vs. budgetvarianties bij te houden en een transparante, formule-auditable spreadsheet te delen met VC-investeerders.

---

## Waarom ik dit gekoppelde startup financiële framework heb gebouwd

Veel startup pitch decks bevatten hockeystick-omzetprognoses die instorten onder basisinvesteerders due diligence, omdat ze de operationele mechanismen verbergen die nodig zijn om die groei te financieren.

Een doel voor maandelijkse actieve gebruikers (MAU) is geen kapitaalplan. Een omzet-ARR-forecast bewijst geen duurzame unit economics. Positieve EBITDA is niet gelijk aan geld op de bank. Zelfs een snelgroeiend digitaal bedrijf dat 500.000 gebruikers bereikt kan een fatale liquiditeitscrisis veroorzaken als betaalde CAC-uitgaven, engineering-salarissen en server-COGS zich maandenlang opstapelen voordat cohortmonetisatie inhaalt.

### De valkuil van "100.000 MAU groei": waarom geïsoleerde spreadsheets falen
Denk aan een oprichter die van plan is **100.000 maandelijkse actieve gebruikers** te bereiken door betaalde performance marketing op te schalen.

In een losse sjabloon vergroot een hoger advertentiebudget simpelweg de totale gebruikersrij. In werkelijkheid werkt die ene beslissing door in de hele balans: het verandert de mix van betaalde en organische gebruikers, verhogen de directe cloudhostingkosten, versnellen het aannemen van klantenservice en verdiepen de kortetermijn **kaslaagte**. Zakt de betaalde conversie slechts 1,5% of loopt de maandelijkse churn iets op, dan versnelt agressieve acquisitie-uitgaven het faillissement in plaats van de bedrijfswaarde.

Dit framework verbindt gebruikersacquisitie, cohortretentie, monetisatie, volledig belaste loonkosten en aandelenfinanciering in een **één enkel geproduceerd beslissingsondersteunend model**. Het verschuift de kernvraag van de oprichter van *"Hoe groot kan onze omzet er in jaar 5 uitzien?"* naar de vraag die institutionele investeerders werkelijk stellen:

> **"Welke exacte combinatie van CAC-terugverdientijd, conversie, aanwervingstempo en aandelenfinanciering maakt onze groeitrajectorie financieel overleefbaar?"**

---

## Statische pitch deck-spreadsheets vs. gekoppelde FP&A-beslissingsmotor

| Dimension van financieel modelleren | Traditionele statische sjablonen en ad-hoc spreadsheets | Gekoppelde startup groei- en financieringsmotor (deze tool) |
| :--- | :--- | :--- |
| **Gebruikersgroei vs. CAC-economie** | Totale gebruikersdoelen worden handmatig ingevoerd of met een vast percentage verhoogd, los van marketingbestedingen en betaalde CAC. | Maandelijkse betaalde marketingbudgetten, blended CAC, organische lift en churn sturen dynamisch de 60-maanden forecast van actieve gebruikers. |
| **Monetisatie en omzetherkenning** | Omzet wordt geprojecteerd als een geïsoleerd forfaitair bedrag, aannemend dat een grote gebruikersbasis zich automatisch omzet in margesterke ARR. | Koppelt actieve gebruikerscohorten, freemium-naar-betaald conversierates, ARPU en directe COGS-tarieven direct aan brutowinst. |
| **Unit economics vs. werkkapitaal** | `LTV/CAC` wordt berekend als een statische theoretische ratio, negerend hoe een lange CAC-terugverdientijd maandelijks bankbalansen aantast. | Beoordeelt `LTV:CAC` en terugverdientijd naast maandelijks netto verbruik, minimale kasbuffers en liquiditeitslaagten. |
| **Personeelsschaling en loonlasten** | Salarissen worden geschat als forfaitaire bedragen, waarbij wettelijke sociale lasten voor werkgevers en aanwervingsvertragingen vaak ontbreken. | Legt rol-specifieke startmaanden, basissalarissen en **werkgeversbijdragetarieven** direct vast in de maandelijkse OpEx-verbranding. |
| **Rondeomvang en verwateringslogica** | Oprichters kiezen rondegroottes op basis van marktconventie (bijv. "$2M ophalen") in plaats van gemodelleerde tekorten aan contant geld. | Berekent de exacte **laagste kasstand** en kapitaalbuffer over 60 maanden om verdedigbare financieringsdoelen te onderbouwen. |
| **Investeerdersscenario stresstests** | Pitch decks vertrouwen op één "Base Case"-forecast en vereisen uren handmatige formulebewerkingen om VC-downsidevragen te beantwoorden. | Ingebouwde **Conservative-, Base- en Optimistic-scenario-schakelaars** herberekenen direct runway, verwatering en exit-multiples. |

---

## Voor wie dit financiële model is gebouwd: rollen en workflows

Deze toolkit voor financieel modelleren in dubbel formaat (Browser + Excel) bedient operators, adviseurs en kapitaaltoewijzers in het hele technologie-ecosysteem:

- **Pre-Seed-, Seed- en Serie A-startup oprichters:** bouw een investeerdersklare **startup financiële projectsjabloon** zonder vanaf een leeg spreadsheet te beginnen. Valideer je bedrijfsmodel, bereken je exacte financieringsvraag en beantwoord moeilijke VC-due diligence-vragen over unit economics en kasrunway.
- **Interim-CFO's, startup adviseurs en finance leads:** standaardiseer klantonboarding met een modulair **60-maanden FP&A Excel-werkboek**. Audit snel het aanwervingsplan van een oprichter, kalibreer wettelijke werkgeverslasten (vooral over Europese jurisdicties heen) en voer bestuursniveau-scenarioplanning uit.
- **SaaS-, mobiele app- en consumptietechnologie-operators:** gebruik de **interactieve unit economics calculator** om prijstiers, freemium-convertiedrempels en betaalde acquisitiebudgetten te testen voordat marketingkapitaal wordt vastgelegd.
- **Venture capital (VC)-analisten, business angels en accelerators:** stresstest pitch deck-claims tijdens dealscreening. Voer baselinemetrics van een portefeuillebedrijf in de **browsergebaseerde financiële simulator** in om te zien hoe gevoelig hun runway is voor churnpieken of CAC-inflatie.
- **Bedrijfskunde-studenten en beoefenaars van financieel modelleren:** bestudeer een schone, modulaire **parametrische spreadsheet-architectuur** die configuratie-invoeren, operationele schema's en driedelige financiële outputs scheidt zonder circulair referentiefouten.

---

## Long-tail scenario's voor financieel modelleren en sector-use cases

Of je nu een B2B SaaS-product bootstrapt of grensoverschrijdend institutioneel risicokapital ophaalt, dit framework past zich aan hoog-inzet planningsscenario's aan:

### 1. Data rooms voor Seed- en Serie A venture capital fondsenwerving
Institutionele investeerders verwachten meer dan een 3-jarig jaaroverzicht. Gebruik de **granulaire 60-maanden maandelijkse forecast** om precies te laten zien wanneer je startup operationeel break-even passeert, hoe nieuw kapitaal je runway verlengt en welke exit-waarderingsmultiple nodig is om doelrendementprofielen te leveren in de Base- en Conservative-cases.

### 2. Europese tech-startup expansie en modellering van volledig belaste loonkosten
Veel VS-gerichte financiële sjablonen negeren de zware werkgeverspremies voor sociale zekerheid en loonlasten die verplicht zijn op Europese markten (zoals Duitsland, Frankrijk, het VK of de Noordse landen). Door het **werkgeversbijdragetarief** te isoleren als globale configuratievariabele naast multi-valutaondersteuning, kunnen financiële teams de werkelijke volledig belaste kosten van grensoverschrijdende aanwervingen nauwkeurig modelleren.

### 3. Cohortmonetisatie-tests voor freemium consumer apps en B2B SaaS
Bij schaling van 10.000 naar 1.000.000 gebruikers kunnen kleine verschuivingen in betaalde conversie of directe hostingkosten brutomarges negatief omslaan. Gebruik de gekoppelde groei-naar-omzetlogica om te simuleren of je monetisatiemodel schaling van betaalde acquisitie ondersteunt of een organisch geleide groeistrategie vereist.

---

### Reikwijdte, governance en financiële disclaimer
*Dit framework is een commercieel beslissingsondersteunend model en FP&A-forecastingtool — geen wettelijke boekhoudsoftware, geen gecertificeerd belasting- of juridisch advies, geen loonverwerkingsinfrastructuur en geen formele investeringswaardering. Gebruik het niet als vervanging van GAAP/IFRS-financiële rapportage of jurisdictiespecifieke compliance. Gebruikers moeten alle belasting-, werkgeversbijdrage- en commerciële aannames valideren met gekwalificeerde financiële professionals.*

## Technische details

<details>
<summary><strong>Werkboekarchitectuur</strong></summary>

Het werkboek is ontworpen als een eenrichtingsafhankelijkheidsketen. Invoeren worden centraal beheerd, operationele forecasts berekenen de gevolgen van die invoeren, en financiële en financieringsoutputs consolideren de resultaten.

| Blad | Verantwoordelijkheid | Belangrijkste outputs |
| --- | --- | --- |
| `01_Assumptions` | Globale instellingen en scenariomatrix | Valuta, startdatum, belastingaanname, actief scenario, groei- en kosten drivers |
| `02_Growth_Acquisition` | Maandelijkse gebruikersacquisitie en retentie | Betaalde en organische toevoegingen, churn, eind-MAU, mijlpaaltiming en marketingbestedingen |
| `03_Revenue_UnitEconomics` | Monetisatie en klanteneconomie | Betalende gebruikers, MRR, ARR run-rate, brutowinst, CAC, LTV en terugverdientijd |
| `04_Team_Opex` | Aanwervings- en bedrijfskostenplanning | Personeelsbestand, salariskosten, werkgeversbijdragen, afdelings-OPEX |
| `05_Monthly_Financials` | Geconsolideerde financiële en kasstroommotor | EBITDA, netto inkomen, kasstroom, kasbalans, runway en financieringskloof |
| `06_Scenarios_Funding` | Kapitaalplanning en exit-analyse | Scenariovergelijkingen, financieringsbedrag, verwatering, MoIC en IRR |
| `07_Executive_Dashboard` | Executive- en investeerdersrapportage | Jaarlijkse financiële samenvattingen, groei-KPI's, mijlpalen en liquiditeitsindicatoren |

<details>
<summary><strong>Afhankelijkheidsstroom</strong></summary>

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

Het diagram toont de beoogde analytische afhankelijkheden. Omzet-, groei- en kostenberekeningen moeten vóór consolidatie op dezelfde maandelijkse perioden worden uitgelijnd.

</details>

<details>
<summary><strong>Conventie van de tijdas</strong></summary>

- `02_Growth_Acquisition`, `03_Revenue_UnitEconomics` en `05_Monthly_Financials` gebruiken kolommen `C:BK` voor 60 maandperioden.
- `04_Team_Opex` reserveert kolommen `A:D` voor personeelsinvoeren en gebruikt `E:BL` voor zijn 60-maanden forecast.
- De startdatum van het model wordt centraal beheerd in `01_Assumptions`.
- De Excel-implementatie gebruikt dynamic-array functies, waaronder `SEQUENCE`, `SCAN`, `LET`, `LAMBDA`, `BYCOL` en spill-verwijzingen.

</details>

De bronspecificatie beschrijft de modelarchitectuur en het formuleontwerp. Werkelijke browser- en werkboekimplementaties moeten afzonderlijk worden getest voordat uitspraken over implementatie, compatibiliteit of geautomatiseerde validatie worden gedaan.

</details>

<details>
<summary><strong>Drie valkuilen die zelfs ervaren startup-oprichters vangen</strong></summary>

<details>
<summary><strong>Valkuil 1 — Een grote gebruikersbasis behandelen als bewijs van een levensvatbaar bedrijf</strong></summary>

Beslissing: acquisitie-uitgaven verhogen om marktdoorsnijding te versnellen.

Verborgen fout: de forecast gaat ervan uit dat actieve gebruikers zich omzetten in betalende klanten zonder conversie, churn en brutomarge adequaat te onderzoeken.

Denk aan een bedrijf met 100.000 MAU, een betaalde conversierate van 2,5% en een maandelijkse ARPU van €19.

| Metric | Illustratief resultaat |
| --- | --- |
| Maandelijkse actieve gebruikers | 100,000 |
| Betalende gebruikers | 2,500 |
| Maandelijkse omzet | €47,500 |
| Omzet bij 4,5% conversie en ongewijzigde ARPU | €85,500 |

Dezelfde actieve gebruikersbasis levert aanzienlijk verschillende omzet op, afhankelijk van conversieprestaties.

De onjuiste aanpak is alleen het acquisitievolume optimaliseren. De gecorrigeerde aanpak is om acquisitie en monetisatie samen te beoordelen en vervolgens te bepalen of de extra uitgaven economisch aantrekkelijke betalende klanten opleveren.

</details>

<details>
<summary><strong>Valkuil 2 — LTV/CAC behandelen als een kasstroomforecast</strong></summary>

Beslissing: marketing opschalen omdat de geprojecteerde LTV/CAC boven 3.0x uitkomt.

Verborgen fout: een gunstige lifetime-value-ratio bewijst niet dat het bedrijf genoeg kas heeft om de acquisitie- en bedrijfsverplichtingen te financieren die nodig zijn om winstgevendheid te bereiken.

Met de basisaannames van €29 maandelijkse ARPU, een COGS-tarief van 18% en 4% maandelijkse churn:

| Metric | Illustratief resultaat |
| --- | --- |
| Maandelijkse brutowinst per betalende gebruiker | €23.78 |
| Vereenvoudigde LTV | €594.50 |
| Betaalde CAC | €12.00 |
| LTV / betaalde CAC | 49.5x |

De ratio is ongewoon hoog omdat de gegeven aannames een lange klantlevensduur en lage acquisitiekosten impliceren. Het moet worden behandeld als een te onderzoeken modeloutput, niet als bewijs dat het onderliggende bedrijf gevalideerd is.

Een bedrijf kan nog steeds een kastekort krijgen terwijl het aantrekkelijke gemodelleerde unit economics rapporteert. De gecorrigeerde aanpak is om unit economics te beoordelen naast marketinguitgaven, vaste bedrijfsverplichtingen, acquisitie-terugverdientijd en de maandelijkse kasbalans.

</details>

<details>
<summary><strong>Valkuil 3 — Kapitaal ophalen tegen EBITDA in plaats van tegen de kaslaagte</strong></summary>

Beslissing: genoeg kapitaal ophalen om de voorspelde operationele verliezen te dekken tot de EBITDA positief wordt.

Verborgen fout: EBITDA vangt niet elke kasbeweging. Betalingstiming, veranderingen in werkkapitaal, kapitaaluitgaven, financieringsevenementen en andere kasposten kunnen een financieringsbehoefte creëren die verschilt van de cumulatieve EBITDA-verliezen.

Het bronmodel scheidt expliciet de P&L-motor van de kasstroommotor. De financieringsanalyse moet daarom gebaseerd zijn op de geprojecteerde kasbalans en de minimale kasbehoefte, niet alleen op de maand van EBITDA break-even.

| Onjuiste aanpak | Gecorrigeerde aanpak |
| --- | --- |
| De EBITDA break-even maand als financieringseindpunt gebruiken. | De maandelijkse kasbalans volgen over de forecasthorizon. |
| Alleen genoeg ophalen om de voorspelde operationele verliezen te dekken. | Het maximale cumulatieve kasdeficit schatten en de vereiste veiligheidsbuffer toevoegen. |
| Aannemen dat positieve EBITDA betekent dat er genoeg kas is. | Liquiditeit en runway onafhankelijk van operationele winstgevendheid beoordelen. |

De beslissing verandert van "Hoeveel geld is nodig tot het bedrijf winstgevend wordt?" naar "Hoeveel geld is nodig om de minimale kasbuffer onder het gekozen bedrijfsscenario niet te overschrijden?"

</details>

</details>

<details>
<summary><strong>Voorbeeldscenario</strong></summary>

De volgende illustratie gebruikt de basis-case acquisitie- en monetisatie-aannames van de bronspecificatie. Het toont hoe de beslissingslogica van het model geïnterpreteerd moet worden; het is geen geverifieerde forecast voor een specifieke startup.

<details>
<summary><strong>Invoeren</strong></summary>

| Aanname | Basis-case |
| --- | --- |
| Maandelijkse betaalde CAC | €12.00 |
| Maandelijkse churn | 4.0% |
| Organische K-factor | 15.0% |
| Betaalde conversierate | 4.5% |
| Maandelijkse ARPU | €29.00 |
| COGS-tarief | 18.0% |
| Werkgeversbijdragetarief | 25.0% |
| Minimale kasbuffer | 3 maanden |

</details>

<details>
<summary><strong>Stap 1 — Groei vertalen naar monetisatie</strong></summary>

Bij 100.000 eind-MAU impliceert een conversierate van 4,5% 4.500 betalende gebruikers.

Bij een maandelijkse ARPU van €29 produceert die gebruikersbasis €130.500 aan maandelijkse terugkerende omzet onder het vereenvoudigde model.

De berekening stelt een omzet-run-rate vast, geen erkende kasontvangsten. Werkelijke omzet en incassotiming kunnen afwijken.

</details>

<details>
<summary><strong>Stap 2 — Klanteneconomie testen</strong></summary>

Bij een COGS-tarief van 18% is de maandelijkse brutowinst per betalende gebruiker €23.78.

Met een vereenvoudigde lifetime-value-schatting:

- Geschatte klantlevensduur: \\(1 / 4\\% = 25\\) maanden.
- Geschatte LTV: €29 × 82% / 4% = €594.50.
- LTV / betaalde CAC: ongeveer 49.5x.

Dit is een sterke gemodelleerde ratio, maar hij is zeer gevoelig voor churn, acquisitie-attributie en de aanname dat dezelfde brutomarge en hetzelfde churnpercentage gedurende de klantlevensduur blijven bestaan.

</details>

<details>
<summary><strong>Stap 3 — Het operationele plan in de analyse betrekken</strong></summary>

Het personeels- en OPEX-plan bepaalt hoeveel brutowinst overblijft na salarissen, werkgeversbijdragen, vaste kosten en reclame.

Een bedrijf met positieve unit economics kan nog steeds negatieve EBITDA genereren wanneer het team- en groeiplan te groot is voor de huidige omzetbasis.

</details>

<details>
<summary><strong>Stap 4 — De financieringsbeslissing bepalen</strong></summary>

Het maandelijkse financiële model consolideert operationele prestaties en kasbewegingen. De financieringsanalyse vergelijkt vervolgens het geprojecteerde kasdeficit met de minimale kasbuffer.

Beslissingsimplicatie: een verdedigbaar groeiplan vereist drie gekoppelde antwoorden: hoe efficiënt klanten kunnen worden verworven, hoeveel brutowinst ze genereren en of het bedrijf het operationele plan kan financieren tot kasgeneratie duurzaam wordt.

</details>

</details>

<details>
<summary><strong>Formulereferentie</strong></summary>

De volgende groepen documenteren de belangrijkste formulepatronen die voor het werkboek zijn gespecificeerd. Het zijn referentieformules, geen garantie dat elke formule is getest in een live werkboek.

</details>

<details>
<summary><strong>Validatieregels</strong></summary>

De volgende regels definiëren de minimale controles die nodig zijn voor een betrouwbare implementatie. Sommige zijn ontwerpeisen; andere zijn extra beveiligingen die worden aanbevolen voordat het model wordt gebruikt voor management- of investeerdersbeslissingen.

| Veld of gebied | Validatieregel | Foutgedrag |
| --- | --- | --- |
| Valutasymbool | Een niet-lege ondersteunde weergavesymbool vereist. Symboolwissel impliceert geen valutaomrekening. | Waarschuwen als het symbool ontbreekt; openbaar maken dat bedragen in dezelfde onderliggende valuta blijven. |
| Startdatum model | Een geldige datum vereist die de eerste dag van een maand vertegenwoordigt. | Ongeldige data afwijzen of een niet-maandstartdatum markeren. |
| Actief scenario | Alleen gehele waarden `1`, `2` of `3` accepteren. | Andere waarden afwijzen voordat scenarioberekeningen draaien. |
| Belastingtarief | Percentage tussen 0% en 100% vereist, onder voorbehoud van toepasselijke belastingbehandeling. | Waarden buiten het bereik markeren. |
| Minimale kasbuffer | Niet-negatief aantal maanden vereist. | Negatieve of niet-numerieke invoeren markeren. |
| Betaalde CAC | Positieve waarde vereist wanneer betaalde acquisitie-uitgaven positief zijn. | Deling-door-nul-omstandigheden en ongeldige acquisitie-aannames markeren. |
| Churnpercentage | Waarde groter dan 0% en niet groter dan 100% vereist voor de vereenvoudigde LTV-formule. | Ongeldige aannames markeren en misleidende LTV-outputs onderdrukken. |
| Conversierate | Waarde tussen 0% en 100% vereist. | Invoeren buiten het bereik afwijzen. |
| ARPU | Niet-negatief geldbedrag vereist. | Negatieve waarden markeren. |
| COGS-tarief | Waarde tussen 0% en 100% vereist. | Waarden buiten het bereik en inconsistente brutomargeresultaten markeren. |
| Werkgeversbijdragetarief | Niet-negatief percentage vereist. | Negatieve waarden of onverwachte tarieven markeren. |
| Aanwervingsmaand | Geheel getal tussen 1 en 60 vereist voor een geplande aanwerving. | Aanwervingen buiten de forecasthorizon markeren. |
| Afdeling | Alleen `R&D`, `S&M` of `G&A` accepteren waar die categorieën berekeningen aandrijven. | Niet-herkende afdelingsnamen markeren die anders uit afdelingstotalen zouden worden weggelaten. |
| Marketingbudget | Niet-negatieve maandbedragen vereist. | Negatieve budgetten markeren en onverwachte lege waarden onderzoeken. |
| Financieringsbedrag | Niet-negatieve waarde vereist; het ingevoerde bedrag vergelijken met de gemodelleerde financieringsbehoefte. | Waarschuwen wanneer geplande financiering onder het aanbevolen bedrag blijft. |
| Pre-money waardering | Niet-negatieve waarde en positieve post-money waardering vereist voor eigendomsberekeningen. | Ongeldige verwateringsresultaten onderdrukken. | 
| Toewijzing fondsenbesteding | Toewijzingspercentages moeten optellen tot 100% als het plan de hele ronde wil toewijzen. | Waarschuwen wanneer de toewijzing niet reconcileert met 100%. |
| Dynamic-array outputs | Ervoor zorgen dat alle beoogde spill-bereiken vrij zijn. | `#SPILL!` oplossen door conflicterende celinhoud te verwijderen. |
| Forecastperiodes | Consistente 60-maanden indices en uitgelijnde data over rekenbladen behouden. | Ontbrekende, gedupliceerde of niet-uitgelijnde periodes markeren. |
| Kas en financiering | Openingskas, operationele kasstroom, financieringsinstromen en slotkas reconciliëren. | Elke mismatch tussen kasroll-forward en financieringsanalyse markeren. |
| Exit-rendementen | Positief investeringsbedrag en duidelijk gedefinieerde eigendomsaannames vereist. | Ongeldige MoIC- en IRR-berekeningen onderdrukken. |

<details>
<summary><strong>Implementatiecontroles vóór release</strong></summary>

Het bronontwerp bevat verschillende gebieden die expliciete reconciliatie vereisen voordat een werkboek als financieel gevalideerd kan worden beschouwd:

1. Reconciliatie gebruikersgroei. De eind-MAU-formel bevat churn en K-factor groei direct, terwijl aparte rijen voor organische toevoegingen en churn ook worden berekend. Verifieer dat de eindsaldo reconcileert met begin-MAU plus nieuwe gebruikers minus churn zonder organische groei dubbel te tellen.

2. Reconciliatie kasstroom. De bron gebruikt netto inkomen als operationele kasstroom en berekent de financieringskloof uit de cumulatieve operationele kasstroom. Verifieer dat alle materiële kasbewegingen en openingskas-aannames consistent worden weergegeven.

3. Scenariovergelijking. Eén enkele actieve scenario-schakelaar kan niet onafhankelijk alle drie de scenario's tegelijk tonen. De vergelijkingsmatrix moet elk scenario afzonderlijk berekenen of expliciet een gecontroleerde methode voor scenariorecalculatie documenteren.

4. Financiering en eigendom. De bron onderscheidt aanbevolen financiering van het werkelijke rondebedrag. Verifieer dat de financieringskloof-analyse financieringsinstromen uitsluit bij het berekenen van het operationele deficit, terwijl de kasbalans de werkelijk geplande financieringsinstromen omvat.

5. Formule- en platformcompatibiliteit. Test de dynamic-array formules in de doel-Excel-versie. Valideer datumuitlijning, gedrag bij nulnoemer, mijlpaaldetectie, spill-bereiken en de werkelijke formuleresultaten in plaats van uitsluitend op een structurele checklist te vertrouwen.

Een als geslaagd gemarkeerde checklist op bron niveau is niet gelijk aan een uitgevoerde werkboektest. Deze controles moeten tegen het geïmplementeerde bestand worden voltooid voordat het model wordt vertrouwd voor financieringsbeslissingen.

</details>

</details>

## Bedrijfslogica en methodologie

Het model gebruikt een drivergebaseerde forecastingaanpak: een kleine set commerciële aannames bepaalt hoe het operationele plan zich ontwikkelt, en de resulterende financiële gevolgen blijven gedurende de forecast verbonden.

- Scenarioanalyse vergelijkt alternatieve acquisitie-, retentie-, monetisatie-, kosten- en exit-aannames. Het verduidelijkt welke aannames het groeiplan en de kapitaalbehoefte wezenlijk veranderen.
- Gebruikerscohortvereenvoudiging en retentiemodellering vertegenwoordigen de pool van actieve gebruikers als een maandsaldo dat wordt beïnvloed door nieuwe acquisitie, organische groei en churn. Dit levert een consistent startpunt voor groeiplanning, al vervangt het geen gedetailleerde cohortanalyse.
- Unit economics vergelijkt acquisitiekosten met de verwachte brutowinstbijdrage per klant. Het helpt bepalen of het gemodelleerde bedrijf de klantacquisitie-uitgaven kan terugverdienen onder de aangenomen retentie- en margeomstandigheden.
- Geïntegreerde operationele forecasts verbinden aanwerving, beloning en terugkerende kosten met omzetgroei. Dit maakt de financiële gevolgen van organisatorische expansie zichtbaar voordat verplichtingen worden aangegaan.
- Kasdeficit- en runway-analyse beoordeelt liquiditeit los van winstgevendheid. Het ondersteunt financieringsbeslissingen op basis van de gemodelleerde timing en diepte van kastekorten in plaats van één jaarlijkse winstcijfer.

De methoden zijn net zo betrouwbaar als hun aannames. Forecasts moeten worden bijgewerkt met werkelijke acquisitieprestaties, conversie, churn, prijzen, loonverplichtingen en kasbewegingen naarmate het bedrijf zich ontwikkelt.

## Andere tools in deze serie

Ontdek verwante lichte businessanalyse- en beslissingsondersteunende tools in de Theseus Workshop-collectie:

- [Business Decision Toolbox](https://github.com/HyVoid/business-decision-toolbox?utm_source=chatgpt.com) — Praktische tools voor terugkerende operationele en financiële beslissingen.
- [Theseus Workshop op GitHub](https://github.com/HyVoid?utm_source=chatgpt.com) — Aanvullende open-source bedrijfsanalyseprojecten en spreadsheetgebaseerde beslissingsframeworks.

## Licentie

Dit project is bedoeld om de Apache License 2.0 te gebruiken. Bekijk het werkelijke `LICENSE`-bestand van de repository vóór herverdeling of commercieel gebruik, en zorg dat de browser- en Excel-versies onder consistente, duidelijk gedocumenteerde voorwaarden worden gedistribueerd.

Zie voor details de [Apache License, Versie 2.0](https://www.apache.org/licenses/LICENSE-2.0?utm_source=chatgpt.com).
