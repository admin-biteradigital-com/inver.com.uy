---
description: Documentar el progreso del proyecto enfocado a ventas (SCCC)
---
# Flujo de Trabajo: Documentación de Progreso B2B/B2C

Este workflow asegura que cada avance del código se registre formalmente usando terminología corporativa y técnica para maximizar el valor percibido del proyecto al momento de vender el sistema. Cada vez que completes un hito, debes seguir **obligatoriamente** estos pasos:

1. **Actualizar el Task Tracker (`task.md`)**:
   - Marca explícitamente qué requerimiento de arquitectura o diseño fue completado usando la notación `[x]`.
   - Agrega métricas si aplican (ej. "Reemplazo de 100% de Emojis por SVG" o "Mejora de lighthouse score").

2. **Registrar lecciones ejecutivas (`development_learnings.md`)**:
   - Agrega un párrafo destacando cómo el hito recién integrado **aumenta la conversión, mejora la retención del usuario, optimiza el SEO o disminuye la deuda técnica**.
   - Usa tono de "Vendor/Agencia Digital" (ej: "Se estableció un funnel asíncrono con WhatsApp que incrementa el Rate de Cierre Comercial").

3. **Inyectar evidencia en `walkthrough.md`**:
   - Describe las capas funcionales y de UX añadidas.
   - Si se realizaron cambios visuales notables, incluye links absolutos a capturas de pantalla o reportes de estado (e.g., resultados de *Build* o *Lighthouse*).

> **Nota:** Nunca finalices una sesión de desarrollo de features sin haber ejecutado esta cadena de documentación para mantener el historial impecable.
