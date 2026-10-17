[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Plantilla de Modelo Financiero para Startups en Excel y Calculadora Interactiva de Unit Economics a 5 Años
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/eee8e328-ec24-495c-b57e-c9ccbc42952b" />

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2251FF)
![Tool Type: FP&A & Fundraising Model](https://img.shields.io/badge/Tool-FP%26A%20%26%20Fundraising%20Model-051C2C)

**Una plantilla de Excel de modelo financiero para startups a 5 años (60 meses) y calculadora interactiva de unit economics. Diseñada para fundadores de SaaS y negocios digitales en etapa temprana, CFOs fraccionados y analistas de FP&A para pronosticar el payback de LTV/CAC, el OpEx de plantilla, el burn rate mensual de caja, el runway y la dilución en rondas de capital de riesgo — disponible como simulador financiero gratuito en el navegador (sin registro) y como libro de Microsoft Excel descargable.**

> **Accede a las herramientas de proyección financiera y runway para startups**
>
> - 🌐 **[Lanza el simulador financiero gratuito basado en navegador](https://hyvoid.github.io/startup-financial-model-excel/)** — Pon a prueba al instante en tu navegador las cohortes de adquisición de usuarios, la unit economics de LTV/CAC y los escenarios de runway de caja, sin instalación ni registro.
> - 📥 **[Descarga el libro de Excel del modelo financiero de 60 meses (.xlsx)](https://theseusworkshop.com/l/rdeccv?utm_source=github&utm_medium=GitHub%20README)** — Obtén la plantilla completa de hoja de cálculo bottom-up para pronósticos FP&A sin conexión, salas de datos de due diligence para inversores e informes recurrentes para el consejo.



---

## Métricas clave de FP&A y desafíos de captación de fondos que resuelve

En lugar de unir hojas de marketing desconectadas y resúmenes estáticos de P&L, este motor financiero bottom-up conecta los impulsores del crecimiento de ingresos directamente con la liquidez del flujo de caja. Así es como el modelo vincula los **puntos de dolor de la planificación financiera de startups** con **métricas auditables de unit economics y captación de capital de riesgo**:

| Punto de dolor de planificación financiera de startups | Mecanismo de modelado conectado | KPIs y métricas para inversores monitoreadas |
| :--- | :--- | :--- |
| **Crecimiento de usuarios y gasto de marketing desconectados** | Vincula los presupuestos mensuales de adquisición de pago y el CAC combinado directamente con el crecimiento viral orgánico y las curvas de retención por cohortes. | Usuarios activos mensuales (MAU), división entre usuarios de pago y orgánicos, fechas de los hitos de 100k / 500k / 1M de usuarios |
| **Monetización y pronósticos de ingresos sin validar** | Traduce las cohortes de usuarios activos en ingresos mediante tasas de conversión freemium-a-pago configurables y precios de expansión. | Ingresos recurrentes mensuales (MRR), tasa anual de ejecución (ARR), ingreso promedio por usuario que paga (ARPPU) |
| **Unit economics ilusorias y payback lento** | Evalúa el valor del cliente ajustado por margen bruto frente a los costos de adquisición en canales de marketing en expansión. | CAC combinado, valor de vida del cliente (LTV), ratio LTV:CAC, período de payback de CAC (meses) |
| **Quema descontrolada de plantilla y OpEx** | Vincula los planes de contratación por rol, los salarios base y las cotizaciones patronales legales directamente con la base de costos operativos. | Costo total de plantilla con cargas, tasa de contribución patronal (%), OpEx fijo vs. variable |
| **Ceguera entre rentabilidad y flujo de caja** | Separa el beneficio operativo contable de la liquidez bancaria real para identificar exactamente cuándo se agota el capital de trabajo. | EBITDA mensual, mes del punto de equilibrio operativo, burn rate neto de caja, mínimo de caja, runway (meses) |
| **Objetivos arbitrarios de ronda y dilución** | Modela rondas pre-money/post-money frente a déficits de caja multiescenario para justificar las rondas de capital ante inversores. | Brecha total de financiación, colchón de capital requerido, dilución de equity (%), múltiplo de valoración de salida y MOIC |

---

## Tutorial paso a paso: cómo construir un pronóstico financiero de startup a 5 años

El flujo de trabajo de modelado sigue las mejores prácticas institucionales de FP&A: **configura una sola vez los supuestos macroeconómicos y de unidad, introduce tu plan operativo de ejecución y audita el estado de flujo de caja resultante de 60 meses.**

### Paso 1: Configura la unit economics básica y los supuestos macroeconómicos
Abre la pestaña dedicada `Configuration & Assumptions` para establecer tu unit economics de referencia y los parámetros de gobernanza corporativa (mantenidos estrictamente separados de las celdas de fórmulas para evitar errores de hardcoding):

- **Cronología y gobernanza:** fecha de inicio del modelo, divisa de presentación (`USD`, `EUR`, `GBP`), tipo impositivo corporativo y umbral mínimo de colchón de caja.
- **Impulsores de adquisición y retención:** costo de adquisición de clientes de pago (CAC), tasa de crecimiento orgánico, tasa mensual de churn y porcentaje de conversión de pago.
- **Monetización y costos directos:** ingreso promedio por usuario (ARPU), costo de bienes vendidos (COGS) / tasa de hosting directo, y tasa legal de contribución patronal (crucial para modelar nóminas europeas).
- **Captación de fondos y valoración:** interruptor de escenario activo (`Conservative`, `Base`, `Optimistic`) y múltiplo objetivo de valoración de salida.

### Paso 2: Introduce el plan operativo y de contratación de 60 meses
Completa los calendarios de entrada de gestión designados a lo largo de tu horizonte de 5 años:

- **Presupuesto de marketing y crecimiento:** introduce el gasto mensual de adquisición de pago para impulsar las cohortes de usuarios en la parte superior del embudo.
- **Calendario de plantilla y nóminas:** mapea las contrataciones previstas por puesto, mes objetivo de inicio y compensación base.
- **Gastos operativos recurrentes (OpEx):** introduce G&A, R&D, suscripciones de software y gastos generales legales/administrativos.
- **Financiación y rondas de capital:** define las inyecciones de equity previstas (Seed, Serie A o puente) por calendario y tamaño de ronda.

### Paso 3: Audita los estados financieros mensuales conectados y el runway de caja
Revisa las pestañas de salida automatizadas de 60 meses para verificar cómo las decisiones operativas afectan la solvencia a largo plazo:

- **Pronóstico de crecimiento y monetización:** sigue la progresión de las cohortes desde tráfico bruto hasta suscriptores que pagan y margen bruto.
- **Panel de unit economics:** monitoriza si tu `LTV:CAC ratio` se mantiene por encima del benchmark institucional de `3.0x` y si el `CAC Payback` permanece dentro de tu ciclo de capital de trabajo.
- **Estados financieros consolidados:** examina el EBITDA mensual, el momento del equilibrio operativo, el flujo de caja acumulado y el **mínimo de caja** exacto (tu verdadero requisito neto de financiación).

### Paso 4: Ejecuta un análisis de sensibilidad de 3 escenarios y exporta a Excel
Alterna entre los **casos Conservador, Base y Optimista** para someter a prueba de estrés cómo un churn más alto, una conversión de pago más lenta o una contratación retrasada impactan tu runway de caja y los múltiplos de retorno para inversores.

> 📊 **¿Listo para construir tu sala de datos lista para inversores?**
> Tras someter a prueba de estrés tus supuestos de ingresos en el **[simulador financiero gratuito basado en navegador](https://hyvoid.github.io/startup-financial-model-excel/)**, descarga el **[libro de Excel reutilizable del modelo financiero de 60 meses (.xlsx)](https://theseusworkshop.com/l/rdeccv?utm_source=github&utm_medium=GitHub%20README)** para personalizar los calendarios línea por línea, mantener los datos históricos reales frente al presupuesto y compartir una hoja de cálculo transparente y auditable en sus fórmulas con inversores de capital de riesgo.

---

## Por qué construí este marco financiero conectado para startups

Muchos pitch decks de startups presentan proyecciones de ingresos en forma de hockey stick que se derrumban bajo un due diligence básico de los inversores porque ocultan la mecánica operativa necesaria para financiar ese crecimiento.

Un objetivo de usuarios activos mensuales (MAU) no es un plan de capital. Un pronóstico de ARR de cabecera no demuestra una unit economics sostenible. Un EBITDA positivo no equivale a dinero en el banco. Incluso un negocio digital de rápido crecimiento que alcance 500,000 usuarios puede desencadenar una crisis de liquidez fatal si el gasto en CAC de pago, las nóminas de ingeniería y el COGS de servidores se acumulan meses antes de que la monetización de las cohortes alcance ese nivel.

### La "trampa del crecimiento de 100,000 MAU": por qué fallan las hojas de cálculo aisladas
Considera a un fundador que planea alcanzar **100,000 usuarios activos mensuales** escalando el marketing de rendimiento de pago.

En una plantilla desconectada, aumentar el presupuesto publicitario simplemente infla la fila de usuarios totales. En la realidad, esa única decisión se propaga por todo el balance: altera la mezcla de usuarios de pago y orgánicos, aumenta los costos directos de hosting en la nube, acelera la contratación de soporte al cliente y profundiza el **mínimo de caja** a corto plazo. Si la conversión de pago cae apenas un 1.5% o el churn mensual sube, un gasto agresivo en adquisición acelera la quiebra en lugar del valor empresarial.

Este marco conecta la adquisición de usuarios, la retención por cohortes, la monetización, las nóminas con cargas completas y la financiación de equity en un **único modelo de producto para la toma de decisiones**. Cambia la pregunta central del fundador de *"¿qué tan grandes pueden verse nuestros ingresos en el año 5?"* a la pregunta que los inversores institucionales hacen realmente:

> **"¿Qué combinación precisa de payback de CAC, conversión, ritmo de contratación y financiación de equity hace que nuestra trayectoria de crecimiento sea financieramente supervivable?"**

---

## Hojas de cálculo estáticas de pitch deck vs. motor de decisión FP&A conectado

| Dimensión de modelado financiero | Plantillas estáticas tradicionales y hojas ad hoc | Motor conectado de crecimiento y financiación para startups (esta herramienta) |
| :--- | :--- | :--- |
| **Crecimiento de usuarios vs. economía del CAC** | Los objetivos de usuarios totales se escriben a mano o crecen por porcentaje fijo, desconectados del gasto de marketing y el CAC de pago. | Los presupuestos mensuales de marketing de pago, el CAC combinado, el impulso orgánico y el churn impulsan dinámicamente el pronóstico de usuarios activos de 60 meses. |
| **Monetización y reconocimiento de ingresos** | Los ingresos se proyectan como una suma global aislada, asumiendo que una gran base de usuarios se convierte automáticamente en ARR de alto margen. | Vincula cohortes de usuarios activos, tasas de conversión freemium-a-pago, ARPU y tasas de COGS directas directamente con el beneficio bruto. |
| **Unit economics vs. capital de trabajo** | `LTV/CAC` se calcula como un ratio teórico estático, ignorando cómo un período largo de payback de CAC drena los saldos bancarios mensuales. | Evalúa `LTV:CAC` y la duración del payback junto con el burn neto mensual, los colchones mínimos de caja y los mínimos de liquidez. |
| **Escalado de plantilla e impuestos de nómina** | Los salarios se estiman como sumas globales fijas, omitiendo con frecuencia las cotizaciones patronales legales y los retrasos en el ritmo de contratación. | Mapea los meses de inicio por rol, los salarios base y las **tasas de contribución patronal** directamente en el burn mensual de OpEx. |
| **Dimensionamiento de rondas y lógica de dilución** | Los fundadores eligen tamaños de ronda según convenciones del mercado (p. ej., "levantar $2M") en lugar de déficits de caja modelados. | Calcula el **mínimo de caja** exacto y el colchón de capital a lo largo de 60 meses para justificar objetivos de financiación defendibles. |
| **Pruebas de estrés de escenarios para inversores** | Los pitch decks dependen de un único pronóstico de "Caso Base" y requieren horas de ediciones manuales de fórmulas para responder a las preguntas de downside de los VC. | Los **interruptores de escenario Conservador, Base y Optimista** integrados recalculan al instante runway, dilución y múltiplos de salida. |

---

## Para quién está diseñado este modelo financiero: roles y flujos de trabajo

Este kit de modelado financiero de formato dual (Navegador + Excel) sirve a operadores, asesores y asignadores de capital de todo el ecosistema tecnológico:

- **Fundadores de startups pre-Seed, Seed y Serie A:** construye una **plantilla de proyección financiera para startups** lista para inversores sin partir de una hoja en blanco. Valida tu modelo de negocio, calcula tu solicitud exacta de financiación y responde a las duras preguntas de due diligence de los VC sobre unit economics y runway de caja.
- **CFOs fraccionados, asesores de startups y líderes financieros:** estandariza la incorporación de clientes con un **libro de Excel FP&A modular de 60 meses**. Audita rápidamente el plan de contratación de un fundador, calibra las cargas patronales legales (especialmente entre jurisdicciones europeas) y ejecuta planificación de escenarios a nivel de consejo.
- **Operadores de SaaS, apps móviles y tecnología de consumo:** usa la **calculadora interactiva de unit economics** para probar niveles de precios, umbrales de conversión freemium y presupuestos de adquisición de pago antes de comprometer capital de marketing.
- **Analistas de capital de riesgo (VC), inversores ángeles y aceleradoras:** somete a prueba de estrés las afirmaciones de los pitch decks durante el screening de operaciones. Introduce las métricas base de una empresa del portafolio en el **simulador financiero basado en navegador** para ver la sensibilidad de su runway ante picos de churn o inflación del CAC.
- **Estudiantes de negocios y profesionales del modelado financiero:** estudia una **arquitectura paramétrica de hoja de cálculo** limpia y modular que separa las entradas de configuración, los calendarios operativos y las salidas financieras de 3 vías sin errores de referencias circulares.

---

## Escenarios de modelado financiero de nicho y casos de uso sectoriales

Ya sea que estés lanzando un producto B2B SaaS con recursos propios o levantando capital de riesgo institucional transfronterizo, este marco se adapta a escenarios de planificación de alto riesgo:

### 1. Salas de datos para rondas Seed y Serie A de capital de riesgo
Los inversores institucionales esperan más que un resumen anual a 3 años. Usa el **pronóstico mensual granular de 60 meses** para demostrar exactamente cuándo tu startup cruza el equilibrio operativo, cómo el nuevo capital extiende tu runway y qué múltiplo de valoración de salida se requiere para entregar los perfiles de retorno objetivo en los casos Base y Conservador.

### 2. Expansión de startups tecnológicas europeas y modelado de nóminas con cargas completas
Muchas plantillas financieras centradas en EE. UU. pasan por alto las pesadas cotizaciones patronales de seguridad social y los impuestos de nómina obligatorios en los mercados europeos (como Alemania, Francia, Reino Unido o los países nórdicos). Al aislar la **tasa de contribución patronal** como variable de configuración global junto con el soporte multidivisa, los equipos financieros pueden modelar con precisión el costo real con cargas completas de la contratación transfronteriza.

### 3. Pruebas de monetización por cohortes para apps freemium de consumo y B2B SaaS
Al escalar de 10,000 a 1,000,000 de usuarios, pequeños cambios en la conversión de pago o los costos directos de hosting pueden volver negativos los márgenes brutos. Usa la lógica conectada de crecimiento-a-ingresos para simular si tu modelo de monetización soporta el escalado de adquisición de pago o requiere una estrategia de crecimiento liderada por lo orgánico.

---

### Alcance, gobernanza y descargo de responsabilidad financiero
*Este marco es un modelo comercial de apoyo a decisiones y una herramienta de pronóstico FP&A — no es software contable estatutario, asesoramiento fiscal o legal certificado, infraestructura de procesamiento de nóminas ni una valoración formal de inversión. No lo uses como sustituto de los informes financieros GAAP/IFRS ni del cumplimiento específico de cada jurisdicción. Los usuarios deben validar todos los supuestos fiscales, de contribución patronal y comerciales con profesionales financieros cualificados.*

## Detalles técnicos

<details>
<summary><strong>Arquitectura del libro</strong></summary>

El libro está diseñado como una cadena de dependencias unidireccional. Las entradas se mantienen centralmente, los pronósticos operativos calculan las consecuencias de esas entradas, y las salidas financieras y de financiación consolidan los resultados.

| Hoja | Responsabilidad | Salidas principales |
| --- | --- | --- |
| `01_Assumptions` | Configuración global y matriz de escenarios | Divisa, fecha de inicio, supuesto fiscal, escenario activo, impulsores de crecimiento y costos |
| `02_Growth_Acquisition` | Adquisición y retención mensual de usuarios | Adiciones de pago y orgánicas, churn, MAU final, tiempos de hitos y gasto de marketing |
| `03_Revenue_UnitEconomics` | Monetización y economía de clientes | Usuarios que pagan, MRR, ritmo anual ARR, beneficio bruto, CAC, LTV y payback |
| `04_Team_Opex` | Planificación de contratación y gastos operativos | Plantilla, costos salariales, contribuciones patronales, OPEX departamental |
| `05_Monthly_Financials` | Motor financiero y de flujo de caja consolidado | EBITDA, beneficio neto, flujo de caja, saldo de caja, runway y brecha de financiación |
| `06_Scenarios_Funding` | Planificación de capital y análisis de salida | Comparaciones de escenarios, importe de financiación, dilución, MoIC e IRR |
| `07_Executive_Dashboard` | Informes ejecutivos y para inversores | Resúmenes financieros anuales, KPIs de crecimiento, hitos e indicadores de liquidez |

<details>
<summary><strong>Flujo de dependencias</strong></summary>

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

El diagrama representa las dependencias analíticas previstas. Los cálculos de ingresos, crecimiento y gastos deben alinearse con los mismos períodos mensuales antes de la consolidación.

</details>

<details>
<summary><strong>Convención del eje temporal</strong></summary>

- `02_Growth_Acquisition`, `03_Revenue_UnitEconomics` y `05_Monthly_Financials` usan las columnas `C:BK` para 60 períodos mensuales.
- `04_Team_Opex` reserva las columnas `A:D` para entradas de plantilla y usa `E:BL` para su pronóstico de 60 meses.
- La fecha de inicio del modelo se mantiene centralmente en `01_Assumptions`.
- La implementación en Excel utiliza funciones de matrices dinámicas, incluidas `SEQUENCE`, `SCAN`, `LET`, `LAMBDA`, `BYCOL` y referencias desbordadas.

</details>

La especificación fuente describe la arquitectura del modelo y el diseño de fórmulas. Las implementaciones reales del navegador y del libro deben probarse por separado antes de hacer afirmaciones sobre despliegue, compatibilidad o validación automatizada.

</details>

<details>
<summary><strong>Tres trampas que atrapan incluso a fundadores experimentados</strong></summary>

<details>
<summary><strong>Trampa 1 — Tratar una base de usuarios grande como prueba de un negocio viable</strong></summary>

Decisión: aumentar el gasto en adquisición para acelerar la penetración de mercado.

Falla oculta: el pronóstico asume que los usuarios activos se convierten en clientes que pagan sin examinar adecuadamente la conversión, el churn y el margen bruto.

Considera un negocio con 100,000 MAU, una tasa de conversión de pago del 2.5% y un ARPU mensual de €19.

| Métrica | Resultado ilustrativo |
| --- | --- |
| Usuarios activos mensuales | 100,000 |
| Usuarios que pagan | 2,500 |
| Ingresos mensuales | €47,500 |
| Ingresos con conversión del 4.5% y ARPU sin cambios | €85,500 |

La misma base de usuarios activos produce ingresos sustancialmente distintos según el rendimiento de conversión.

El enfoque incorrecto es optimizar solo el volumen de adquisición. El enfoque corregido es evaluar la adquisición y la monetización juntas, y luego determinar si el gasto adicional produce clientes que pagan con atractivo económico.

</details>

<details>
<summary><strong>Trampa 2 — Tratar LTV/CAC como un pronóstico de flujo de caja</strong></summary>

Decisión: escalar el marketing porque el LTV/CAC proyectado supera 3.0x.

Falla oculta: un ratio favorable de valor de vida no establece que la empresa tenga suficiente caja para financiar los compromisos de adquisición y operación necesarios para alcanzar la rentabilidad.

Usando los supuestos base de ARPU mensual de €29, una tasa de COGS del 18% y un churn mensual del 4%:

| Métrica | Resultado ilustrativo |
| --- | --- |
| Beneficio bruto mensual por usuario que paga | €23.78 |
| LTV simplificada | €594.50 |
| CAC de pago | €12.00 |
| LTV / CAC de pago | 49.5x |

El ratio es inusualmente alto porque los supuestos aportados implican una vida útil larga del cliente y un costo de adquisición bajo. Debe tratarse como un resultado del modelo que merece investigación, no como evidencia de que el negocio subyacente está validado.

Un negocio puede seguir enfrentando una escasez de caja mientras reporta una unit economics modelizada atractiva. El enfoque corregido es evaluar la unit economics junto con el gasto de marketing, los compromisos operativos fijos, el payback de adquisición y el saldo de caja mensual.

</details>

<details>
<summary><strong>Trampa 3 — Levantar capital contra el EBITDA en lugar del mínimo de caja</strong></summary>

Decisión: levantar suficiente capital para cubrir la pérdida operativa prevista hasta que el EBITDA sea positivo.

Falla oculta: el EBITDA no captura todos los movimientos de caja. El calendario de pagos, los cambios de capital de trabajo, el capex, los eventos de financiación y otras partidas de caja pueden crear un requisito de financiación distinto de las pérdidas acumuladas de EBITDA.

El modelo fuente separa explícitamente el motor de P&L del motor de flujo de caja. El análisis de financiación debe basarse por tanto en el saldo de caja proyectado y el requisito mínimo de caja, no solo en el mes de equilibrio del EBITDA.

| Enfoque incorrecto | Enfoque corregido |
| --- | --- |
| Usar el mes de equilibrio del EBITDA como punto final de la financiación. | Seguir el saldo de caja mensual a lo largo del horizonte de pronóstico. |
| Levantar solo lo suficiente para cubrir las pérdidas operativas previstas. | Estimar el déficit de caja acumulado máximo y añadir el colchón de seguridad requerido. |
| Asumir que un EBITDA positivo significa caja suficiente. | Revisar la liquidez y el runway con independencia de la rentabilidad operativa. |

La decisión cambia de “¿cuánto dinero se necesita hasta que el negocio sea rentable?” a “¿cuánto dinero se necesita para evitar vulnerar el colchón mínimo de caja bajo el escenario operativo elegido?”

</details>

</details>

<details>
<summary><strong>Escenario de ejemplo</strong></summary>

La siguiente ilustración utiliza los supuestos base de adquisición y monetización de la especificación fuente. Demuestra cómo debe interpretarse la lógica de decisión del modelo; no es un pronóstico verificado para una startup concreta.

<details>
<summary><strong>Entradas</strong></summary>

| Supuesto | Caso base |
| --- | --- |
| CAC de pago mensual | €12.00 |
| Churn mensual | 4.0% |
| Factor K orgánico | 15.0% |
| Tasa de conversión de pago | 4.5% |
| ARPU mensual | €29.00 |
| Tasa de COGS | 18.0% |
| Tasa de contribución patronal | 25.0% |
| Colchón mínimo de caja | 3 meses |

</details>

<details>
<summary><strong>Paso 1 — Convertir crecimiento en monetización</strong></summary>

Con 100,000 MAU finales, una tasa de conversión del 4.5% implica 4,500 usuarios que pagan.

Con un ARPU mensual de €29, esa base de usuarios produce €130,500 en ingresos recurrentes mensuales bajo el modelo simplificado.

El cálculo establece un ritmo de ingresos, no cobros en efectivo reconocidos. Los ingresos reales y el calendario de cobro pueden diferir.

</details>

<details>
<summary><strong>Paso 2 — Probar la economía de clientes</strong></summary>

Con una tasa de COGS del 18%, el beneficio bruto mensual por usuario que paga es de €23.78.

Usando una estimación simplificada del valor de vida:

- Vida estimada del cliente: \\(1 / 4\\% = 25\\) meses.
- LTV estimada: €29 × 82% / 4% = €594.50.
- LTV / CAC de pago: aproximadamente 49.5x.

Es un ratio modelizado fuerte, pero muy sensible al churn, a la atribución de la adquisición y al supuesto de que el mismo margen bruto y la misma tasa de churn persisten durante la vida del cliente.

</details>

<details>
<summary><strong>Paso 3 — Incorporar el plan operativo al análisis</strong></summary>

El plan de plantilla y OPEX determina cuánto beneficio bruto queda después de salarios, contribuciones patronales, costos fijos y publicidad.

Una empresa con una unit economics positiva puede seguir generando un EBITDA negativo cuando el plan de equipo y crecimiento es demasiado grande para su base de ingresos actual.

</details>

<details>
<summary><strong>Paso 4 — Determinar la decisión de financiación</strong></summary>

El modelo financiero mensual consolida el rendimiento operativo y los movimientos de caja. El análisis de financiación compara entonces el déficit de caja proyectado con el colchón mínimo de caja.

Implicación de la decisión: un plan de crecimiento defendible necesita tres respuestas vinculadas: con qué eficiencia se pueden adquirir clientes, cuánto beneficio bruto generan y si la empresa puede financiar el plan operativo hasta que la generación de caja sea sostenible.

</details>

</details>

<details>
<summary><strong>Referencia de fórmulas</strong></summary>

Los siguientes grupos documentan los patrones de fórmulas principales especificados para el libro. Son fórmulas de referencia, no una garantía de que cada fórmula haya sido probada en un libro en uso.

</details>

<details>
<summary><strong>Reglas de validación</strong></summary>

Las siguientes reglas definen las comprobaciones mínimas necesarias para una implementación fiable. Algunas son requisitos de diseño; otras son salvaguardas adicionales recomendadas antes de usar el modelo para decisiones de gestión o de inversores.

| Campo o área | Regla de validación | Comportamiento ante error |
| --- | --- | --- |
| Símbolo de divisa | Requiere un símbolo de visualización soportado no vacío. Cambiar el símbolo no implica conversión de divisa. | Avisar si falta el símbolo; revelar que los importes permanecen en la misma divisa subyacente. |
| Fecha de inicio del modelo | Requiere una fecha válida que represente el primer día de un mes. | Rechazar fechas no válidas o señalar una fecha que no sea inicio de mes. |
| Escenario activo | Aceptar solo los valores enteros `1`, `2` o `3`. | Rechazar otros valores antes de ejecutar los cálculos de escenarios. |
| Tipo impositivo | Requiere un porcentaje entre 0% y 100%, sujeto al tratamiento fiscal aplicable. | Señalar valores fuera de rango. |
| Colchón mínimo de caja | Requiere un número no negativo de meses. | Señalar entradas negativas o no numéricas. |
| CAC de pago | Requiere un valor positivo siempre que el gasto de adquisición de pago sea positivo. | Señalar condiciones de división por cero y supuestos de adquisición no válidos. |
| Tasa de churn | Requiere un valor mayor que 0% y no mayor que 100% para la fórmula de LTV simplificada. | Señalar supuestos no válidos y suprimir salidas de LTV engañosas. |
| Tasa de conversión | Requiere un valor entre 0% y 100%. | Rechazar entradas fuera de rango. |
| ARPU | Requiere un valor monetario no negativo. | Señalar valores negativos. |
| Tasa de COGS | Requiere un valor entre 0% y 100%. | Señalar valores fuera de rango y resultados de margen bruto inconsistentes. |
| Tasa de contribución patronal | Requiere un porcentaje no negativo. | Señalar valores negativos o tasas inesperadas. |
| Mes de contratación | Requiere un entero entre 1 y 60 para una contratación prevista. | Señalar contrataciones fuera del horizonte de pronóstico. |
| Departamento | Aceptar solo `R&D`, `S&M` o `G&A` donde esas categorías impulsen los cálculos. | Señalar nombres de departamento no reconocidos que de otro modo se omitirían de los totales departamentales. |
| Presupuesto de marketing | Requiere importes mensuales no negativos. | Señalar presupuestos negativos e investigar celdas vacías inesperadas. |
| Importe de financiación | Requiere un valor no negativo; comparar el importe introducido con el requisito de financiación modelizado. | Avisar cuando la financiación prevista quede por debajo del importe recomendado. |
| Valoración pre-money | Requiere un valor no negativo y una valoración post-money positiva para los cálculos de participación. | Suprimir resultados de dilución no válidos. |
| Asignación de uso de fondos | Requiere que los porcentajes de asignación sumen 100% si el plan pretende asignar toda la ronda. | Avisar cuando la asignación no cuadre con el 100%. |
| Salidas de matrices dinámicas | Asegurar que todos los rangos de desbordamiento previstos estén despejados. | Resolver `#SPILL!` eliminando el contenido de celdas en conflicto. |
| Períodos de pronóstico | Mantener índices consistentes de 60 meses y fechas alineadas en todas las hojas de cálculo. | Señalar períodos faltantes, duplicados o desalineados. |
| Caja y financiación | Conciliar la caja inicial, el flujo de caja operativo, las entradas de financiación y la caja final. | Señalar cualquier discrepancia entre el desglose de caja y el análisis de financiación. |
| Retornos de salida | Requiere un importe de inversión positivo y supuestos de participación claramente definidos. | Suprimir cálculos de MoIC e IRR no válidos. |

<details>
<summary><strong>Comprobaciones de implementación antes del lanzamiento</strong></summary>

El diseño fuente contiene varias áreas que requieren una conciliación explícita antes de que un libro pueda considerarse validado financieramente:

1. Conciliación del crecimiento de usuarios. La fórmula de MAU final incorpora directamente el churn y el crecimiento del factor K, mientras que también se calculan filas separadas de adiciones orgánicas y de churn. Verifica que el saldo final concilie con el MAU inicial más los usuarios nuevos menos el churn sin duplicar el crecimiento orgánico.

2. Conciliación del flujo de caja. La fuente utiliza el beneficio neto como flujo de caja operativo y calcula la brecha de financiación a partir del flujo de caja operativo acumulado. Verifica que todos los movimientos de caja materiales y los supuestos de caja inicial estén representados de forma consistente.

3. Comparación de escenarios. Un único interruptor de escenario activo no puede mostrar independientemente los tres escenarios a la vez. La matriz de comparación debe calcular cada escenario por separado o documentar explícitamente un método controlado de recálculo de escenarios.

4. Financiación y participación. La fuente distingue la financiación recomendada del importe real de la ronda. Verifica que el análisis de la brecha de financiación excluya las entradas de financiación al calcular el déficit operativo, mientras que el saldo de caja incluya las entradas de financiación realmente previstas.

5. Compatibilidad de fórmulas y plataforma. Prueba las fórmulas de matrices dinámicas en la versión de Excel objetivo. Valida la alineación de fechas, el comportamiento con denominador cero, la detección de hitos, los rangos de desbordamiento y los resultados reales de las fórmulas en lugar de confiar solo en una lista de verificación estructural.

Una lista de verificación a nivel de fuente marcada como superada no equivale a una prueba ejecutada del libro. Estas comprobaciones deben completarse contra el archivo implementado antes de confiar en el modelo para decisiones de financiación.

</details>

</details>

## Lógica de negocio y metodología

El modelo utiliza un enfoque de pronóstico basado en drivers: un pequeño conjunto de supuestos comerciales determina cómo evoluciona el plan operativo, y las consecuencias financieras resultantes permanecen conectadas a lo largo del pronóstico.

- El análisis de escenarios compara supuestos alternativos de adquisición, retención, monetización, costos y salida. Aclara qué supuestos cambian materialmente el plan de crecimiento y el requisito de capital.
- La simplificación de cohortes de usuarios y la modelización de retención representan el grupo de usuarios activos como un saldo mensual afectado por la nueva adquisición, el crecimiento orgánico y el churn. Proporciona un punto de partida consistente para la planificación del crecimiento, aunque no sustituye un análisis de cohortes detallado.
- La unit economics compara los costos de adquisición con la contribución esperada al beneficio bruto del cliente. Ayuda a identificar si el negocio modelizado puede recuperar el gasto de adquisición de clientes bajo las condiciones de retención y margen asumidas.
- Los pronósticos operativos integrados conectan la contratación, la compensación y los gastos recurrentes con el crecimiento de ingresos. Esto hace visibles las consecuencias financieras de la expansión organizativa antes de comprometerse.
- El análisis de déficit de caja y runway evalúa la liquidez por separado de la rentabilidad. Apoya decisiones de financiación basadas en el calendario y la profundidad modelizados de los déficits de caja, en lugar de una única cifra anual de beneficio.

Los métodos son tan fiables como sus supuestos. Los pronósticos deben actualizarse con el rendimiento real de adquisición, la conversión, el churn, los precios, los compromisos de nómina y los movimientos de caja a medida que el negocio se desarrolla.

## Otras herramientas de esta serie

Explora herramientas ligeras relacionadas de análisis de negocio y apoyo a decisiones en la colección Theseus Workshop:

- [Caja de herramientas de decisiones de negocio](https://github.com/HyVoid/business-decision-toolbox?utm_source=chatgpt.com) — Herramientas prácticas para decisiones operativas y financieras recurrentes.
- [Theseus Workshop en GitHub](https://github.com/HyVoid?utm_source=chatgpt.com) — Proyectos adicionales de análisis de negocio de código abierto y marcos de decisión basados en hojas de cálculo.

## Licencia

Este proyecto pretende usar la Licencia Apache 2.0. Revisa el archivo `LICENSE` real del repositorio antes de redistribuir o usar comercialmente, y asegúrate de que las versiones de navegador y Excel se distribuyan bajo términos consistentes y claramente documentados.

Para más detalles, consulta la [Licencia Apache, Versión 2.0](https://www.apache.org/licenses/LICENSE-2.0?utm_source=chatgpt.com).
