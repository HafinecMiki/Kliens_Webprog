Feladat a Stratego nevű társasjáték számítógépes megvalósítása. A játékban két játékos játszik egymással egy-egy hadsereg élén. Cél az ellenfél zászlójának megszerzése. A tábla 10x10 cellából áll. Eredetileg mindkét félnek 40 bábuja van: 1 zászló, 5 bomba, és katonák 1-től 10-es erővel. Egymás bábuit azonban nem látják, csak akkor, amikor két bábu csatázni kezd. Ekkor az erősebb bábu marad a pályán, a gyengébbik leesik a tábláról. Ha két azonos bábu harcol egymással, akkor mindkettő lekerül a tábláról. Minden bábu csak 1-et léphet előre, hátra, jobbra, balra. a zászló és az akna értelemszerűen nem tud lépni. A táblán lehetnek olyan mezők, amelyre nem lehet lépni (tó). Van pár speciális figura:

a 2-es a felderítő, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani.
a 3-as az aknász. Csak ő tudja hatástalanítani a bombát
az 1-es a kém, ha ő támadja meg az ellenfél 10-esét, akkor megöli.
bomba: aki rálép, az felrobban, a bomba viszont megmarad. Csak az aknász képes leszedni a tábláról.
A tábla mellett a játék működtetéséhez egyéb képernyők is kellenek:

Főoldal: logó, játékszabály (akár külön oldalon), és két funkció
új játék indítása: ekkor egy várakozó "szobába" kerülünk, ahol a megjelenik a szoba azonosítója. Ő lesz az 1. játékos.
csatlakozás szobához: egy szöveges beviteli mezőbe kell beírni a szoba azonosítóját, majd egy gombot megnyomni. A gomb megnyomására az előkészítő oldalra kerülünk. Ő lesz a 2. játékos.
Várakozó szoba: egy szobaszám és egy Vissza gomb, ami a főoldalra visz.
Előkészítő oldal: itt lehet a bábukat a táblára helyezni. Ha készen vagyunk, akkor egy gomb megnyomásával jelezzük ezt. Ekkor a játékoldalra kerülünk.
Játékoldal: megjelenik a játéktábla, a két játékos felváltva lép. Ha valamelyikük nyer, akkor visszaléphetünk a főoldalra.
Játék folyamata: az 1. játékos választ egy figurát. Ekkor opcionálisan jelezzük a táblán, hogy az adott bábu hova léphet. Ha újra a kiválasztott figurára kattintunk, akkor a kijelölés megszűnik. Kiválasztás után választunk egy cellát. Ha nem léphet az adott cellára, akkor nem történik semmi. Ha oda léphet a bábu, akkor odalép. Ha ez ellenséges bábu volt, akkor csata lesz, ami azt jelenti, hogy 3mp-ig kiírjuk mindkét játékos bábujának számát a tábla mellé, majd az erőviszonyoknak megfelelően leveszünk egy vagy két bábut. A levett bábu megjelenik az adott játékos listájában. 3mp után a 2. játékos jön. Ha nem volt csata, akkor lépés után a 2. játékos jön. Az aktuális játékost jelezzük a felületen.

A feladatot VSCode-ban lehet futtatni az npm start paranccsal. Leinkább React és Redux-ban lett megírva.
