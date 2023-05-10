# Elért pontok

* A backend statikusan hostolja a frontendet
* Az alkalmazás kapcsolódik egy mongodb instance-hoz
* A szerver megvalósít legalább két modellt, melyek sémája egyértelműen definiált
* Adott legalább két olyan adatbázis hook, amelyek a modellek mentése vagy lekérése közben futnak le
* A szerver megvalósít egy lokális autentikációs stratégiát
* A szerver kezeli a login sessiont
* A szerver rendelkezik a két kezelt modell CRUD interfészeivel, illetve egy login, logout, register route-tal
* A frontend kommunikál a backenddel
* A frontend komponensei route-okkal érhetőek el, a navigáció megfelelően működik
* A frontend rendelkezik legalább egy regisztráció, egy login, egy főoldal/terméklista, egy admin felület, egy termék részletező és egy egyéb komponenssel, melyek fel vannak töltve megfelelő tartalomma
* A frontend a bejelentkezéshez a backend megfelelő végpontjait szólítja meg
* A backenddel való kommunikáció elemei ki vannak szervezve service-ekbe
Van authguard, amely védi a login, register utáni route-okat és az admin felületét

A backend, az ExpressJS a `server.js` fájlba van kiszervezve.
