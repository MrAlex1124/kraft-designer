# Kraft Designer

**Tervezd meg. Formáld meg. Alkoss szabadon.**

A **Kraft Designer** egy böngészőből használható, önálló 3D CAD-tervezőalkalmazás. Célja, hogy a precíz digitális modellezést elérhetővé tegye mindazok számára, akik egyszerű alkatrészeket, egyedi tárgyakat vagy összetettebb 3D modelleket szeretnének létrehozni, külön asztali CAD-program telepítése nélkül.

A projekt a [Layerling](https://github.com/henmedia/layerling) nyílt forráskódú alkalmazásának továbbfejlesztésére épül. A Kraft Designer saját magyar nyelvű megjelenést, következetes kék arculatot és hosszú távon önálló fejlesztési irányt kap. A szerkesztő továbbra is általános célú CAD-eszköz: működéséhez nincs szükség webáruházra vagy külső kereskedelmi rendszerre.

> **Állapot:** v0.1 — első arculati és telepítési előkészítés. Nem kész éles kiadás; a Docker build, CAD-folyamatok és böngészőkompatibilitás ellenőrzése még szükséges.

## Mire használható?

- **3D modellezés:** geometriai alakzatok létrehozása és módosítása böngészős munkaterületen.
- **Precíz szerkesztés:** méretezés, elhelyezés, alakzategyesítés és -kivonás, illetve az alapul szolgáló CAD-motor által támogatott további műveletek.
- **Import és export:** 3D fájlok kezelése, többek között STL, 3MF és STEP formátumban, a rendelkezésre álló funkcióknak megfelelően.
- **Projektek:** szerkesztési munka mentése és későbbi folytatása az alkalmazás támogatott tárolási módjaival.
- **Magyar felület:** a már meglévő magyar nyelvi csomag alapértelmezett; más nyelv továbbra is választható.
- **Önálló üzemeltetés:** konténerizált, saját infrastruktúrára telepíthető alkalmazás.

## Alapelvek

### 1. A CAD-funkció az első

A modellezés, az export és a projektkezelés akkor is működik, ha semmilyen külső szolgáltatáshoz nem kapcsolódunk.

### 2. Tiszta termékhatár

**A repository kizárólag Kraft Designer-kódot tartalmazhat.** Nincs benne KraftPrint-árazás, WooCommerce, megrendelés, szállítás, gyártástervezés, ügyféladat-kezelés vagy más 3DKraft-üzleti logika.

Egy későbbi integrációt a **KraftPrint plugin** valósít meg a saját oldalán, a Designer általános export- és interfészfunkcióit felhasználva. A Designernek nem kell ismernie a KraftPrintet. A kötelező hozzájárulási és kódellenőrzési szabályokat lásd: [AGENTS.md](AGENTS.md).

### 3. Fokozatos, ellenőrizhető fejlesztés

A meglévő Layerling CAD-funkciókat nem írjuk át pusztán arculati okokból. A változásokat külön ágakon, tesztelhető lépésekben vezetjük be.

## Technológiai alap

A projekt a Layerling meglévő Next.js / React / TypeScript felületét, 3D geometriai és WebAssembly-függőségeit örökli. A részletes, aktuális technikai verziók a [package.json](package.json) fájlban találhatók.

## Helyi fejlesztés

Szükséges: a [package.json](package.json) `engines` mezőjének megfelelő Node.js és npm.

```bash
npm ci
npm run dev
```

Alapértelmezetten a Next.js fejlesztői szervere indul. Ellenőrzések:

```bash
npm run typecheck
npm run test
npm run build
```

Ezek a parancsok a projektben rendelkezésre állnak; a v0.1 forkra itt még nem futtattunk sikeres CI-t.

## Docker / KraftCloud

A KraftCloud telepítési alapja a [docker/compose.kraftcloud.yml](docker/compose.kraftcloud.yml) fájl. A konténer kizárólag a helyi `127.0.0.1:3300` címre publikálja a szerkesztőt; internetes eléréshez HTTPS reverse proxy szükséges.

```bash
git clone https://github.com/MrAlex1124/kraft-designer.git
cd kraft-designer
git checkout kraft-designer/bootstrap
docker compose -f docker/compose.kraftcloud.yml up -d --build
```

A részletes környezeti beállításokat, ellenőrzési és visszaállítási lépéseket lásd a [KraftCloud telepítési útmutatóban](docs/KRAFT-DESIGNER-DEPLOY.md).

**Figyelem:** a konfiguráció önmagában nem jelent éles telepítést. A szerverhez, DNS-hez, proxyhoz és a futó konténerekhez itt nem nyúltunk hozzá.

## Fejlesztési terv

| Szakasz | Fókusz |
| --- | --- |
| v0.1 | Magyar projektleírás, magyar alapnyelv, Kraft Designer arculat, Docker-alap |
| v0.2 | Felületi márkázás teljessé tétele, átfogó fordítási és CAD-regressziós ellenőrzés |
| v0.3 | Projektkezelés és exportálási élmény csiszolása, stabil telepítés |
| Később | Általános, biztonságos integrációs felületek; külső rendszerek kapcsolása kizárólag azok oldaláról |

## Licenc és eredet

A Kraft Designer a Layerling származékos projektje, ezért **AGPL-3.0-only** licenc alatt marad. A forráskód elérhetősége, az upstream szerzői jogi jelölések és a megfelelő AGPL-kötelezettségek megőrzendők. A v0.1 arculati módosítás nem változtatja meg a licencet.

- Eredeti projekt: [henmedia/layerling](https://github.com/henmedia/layerling)
- Licencszöveg: [LICENSE](LICENSE)
- Saját fejlesztési szabályok: [AGENTS.md](AGENTS.md)

---

**Kraft Designer — tervezés, kötöttségek nélkül.**
