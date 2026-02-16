# TODO - Project Backlog

## Code Quality Improvements

### 🔴 High Priority

#### Refactor TerminalSkills.tsx Component
**Status:** Open  
**Bestand:** `src/components/TerminalSkills.tsx`  
**Probleem:**
- Bestand heeft 294 regels (max: 250)
- Component functie heeft 268 regels (max: 25)
- Cognitive Complexity: 10 (max: 5)

**Oplossing:**
Het `TerminalSkills` component moet worden opgesplitst in kleinere, herbruikbare componenten:
- Extract terminal rendering logica
- Extract typewriter effect logica (mogelijk al deels geïsoleerd)
- Extract state management naar custom hooks
- Splits UI componenten op basis van functionaliteit
- Verminder nesting en conditional complexity

**Geschatte impact:** Hoog - verbetert onderhoudbaarheid en leesbaarheid  
**Geschatte tijd:** 4-8 uur

---

## Completed Tasks

- ✅ Refactor `getIMGAverageColor` functie - Cognitive complexity verminderd van 8 naar ~3
- ✅ Fix duplication in `menuData.js` - Gebruik gemaakt van `baseMenuItems` helper
- ✅ Fix parsing errors in `average-img-color.js` en `portfolioData.js`

