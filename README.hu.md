# Kraft Designer

**Tervezd meg. Formáld meg. Alkoss szabadon.**

A Kraft Designer egy önálló, böngészőből használható 3D CAD-alkalmazás. Célunk, hogy a digitális tervezés kezdők és tapasztalt alkotók számára is elérhető, átlátható és kényelmes legyen.

A program a [Layerling](https://github.com/henmedia/layerling) nyílt forráskódú CAD-projekt forkja. A jelenlegi fejlesztési ág egy magyar alapnyelvű, kék arculatú Kraft Designer-kiadás első lépése.

## Főbb lehetőségek

- 3D geometriai alakzatok létrehozása, mozgatása, forgatása és méretezése
- CAD-alapú modellezési műveletek, többek között alakzatok egyesítése és kivonása
- STL, 3MF és STEP formátumok támogatása a meglévő alkalmazás képességei szerint
- Projektek kezelése és helyi mentése
- Magyar nyelvű felhasználói felület, további választható nyelvekkel
- Telepítés saját gépre vagy Docker-konténerben

## Technológia

A Kraft Designer a Layerling meglévő Next.js, React és TypeScript alkalmazására épül. A pontos függőségeket és verziókat a [package.json](package.json) tartalmazza.

## Fejlesztés

A [package.json](package.json) fájlban megjelölt Node.js-verzió és npm szükséges.

```bash
npm ci
npm run dev
```

Ellenőrzések:

```bash
npm run typecheck
npm run test
npm run build
```

A projekt Docker-telepítési megoldásai a [docker](docker) mappában találhatók. Saját telepítés esetén gondoskodni kell a HTTPS-ről, a megfelelő hozzáférés-kezelésről és az üzemeltetés biztonságáról.

## Fejlesztési irány

A hangsúly a megbízható CAD-funkciókon, a felhasználói élményen, a magyar nyelven és az alkalmazás önálló működésén van. A termék nem tartalmaz kereskedelmi árazást, rendeléskezelést vagy külső szolgáltatások üzleti folyamatait.

## Verzióállapot

**v0.1 (fejlesztési változat):** magyar alapnyelv, Kraft Designer elnevezés, színvilág és projektdokumentáció. A módosítások működését kiadás előtt builddel és funkcionális tesztekkel ellenőrizni kell.

## Licenc

A Kraft Designer a Layerling származékos munkája, és az eredeti projekttel összhangban **AGPL-3.0-only** licenc alatt érhető el. Az upstream szerzői jogi jelöléseket és a licencfeltételeket meg kell őrizni.

- [Eredeti projekt](https://github.com/henmedia/layerling)
- [Licenc](LICENSE)

---

**Kraft Designer — alkotás három dimenzióban.**
