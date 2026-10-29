# Kraft Designer

**3D tervezés egyszerűen, közvetlenül a böngészőben.**

A **Kraft Designer** egy önálló, nyílt forráskódú CAD-alkalmazás, amellyel 3D modellek készíthetők és szerkeszthetők külön telepítendő tervezőprogram nélkül.

A projekt célja a könnyen használható, mégis precíz modellezési élmény: egyszerű alapformáktól a részletes, műszaki alkatrészekig.

## Lehetőségek

- Interaktív 3D szerkesztő és pontos méretezés
- Geometriai műveletek, furatok, egyesítés és kivonás
- Lekerekítés, élletörés és további CAD-eszközök
- 3D fájlok importálása és exportálása, többek között STL, 3MF és STEP formátumban
- Projektek mentése és későbbi szerkesztése
- Magyar nyelvű kezelőfelület

## Indulás

A projekt Node.js-alapú. A támogatott Node.js-verzió a `package.json` fájlban található.

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

A konténeres futtatáshoz a `docker/` könyvtár tartalmazza az alkalmazás általános Docker-fájljait.

## Dokumentáció

- [Részletes magyar projektismertető](README.hu.md)
- [Közreműködési alapelvek](AGENTS.md)
- [Licenc](LICENSE)

## Állapot

**v0.1 — fejlesztési változat.** A megjelenés és a magyar alapnyelv testreszabása folyamatban van. Az éles használat előtt build- és funkcionális tesztelés szükséges.

## Licenc és eredet

A Kraft Designer a [Layerling](https://github.com/henmedia/layerling) projekt származékos változata. A forráskód az eredeti **AGPL-3.0-only** licenc feltételei szerint érhető el. Az eredeti szerzői jogi és licencjelölések a forrásban és a [LICENSE](LICENSE) fájlban megmaradnak.

---

*Kraft Designer — alkotás három dimenzióban.*
