/* =====================================================================
   TREŚCI STRONY STOWARZYSZENIA „ZA DALEKO”
   ---------------------------------------------------------------------
   To jest JEDYNY plik, który trzeba edytować, żeby zmienić treści na
   stronie: opisy, projekty, zespół i dane kontaktowe.

   Zasady edycji:
   • Tekst zawsze wpisujemy w cudzysłowach: "tekst".
   • Po każdym elemencie listy lub polu stawiamy przecinek.
   • Jeśli w tekście potrzebny jest cudzysłów prosty ("), lepiej użyć
     polskich cudzysłowów „ ” — nie psują one zapisu.
   • Zdjęcia (zmniejszone) wrzucamy do folderu assets/img/ i wpisujemy ścieżkę, np.
     "assets/img/warsztaty-2026.jpg" (wielkość liter ma znaczenie!).
   • Puste pole ("") oznacza: nie pokazuj tego elementu na stronie.

   Po zapisaniu pliku wystarczy odświeżyć stronę w przeglądarce.
   Szczegółowa instrukcja: plik README.md.
   ===================================================================== */

const TRESC = {

  /* -------------------------------------------------------------------
     STRONA GŁÓWNA (pierwszy ekran)
     Hasło jest oficjalnym hasłem stowarzyszenia — nie zmieniamy go.
     ------------------------------------------------------------------- */
  start: {
    // Tekst pod pierwszym ekranem — trzy części o różnej wielkości
    manifest: {
      glowny: "Tworzymy miejsce edukacji, dyskusji i wspólnego odkrywania.",   // duży
      akcent: "Skracamy dystans.",                                            // bardzo duży, niebieski, kursywa
      dopowiedzenie: "Przeciwdziałamy dezinformacji. Wspieramy integrację – konkretnie i bez dystansu.",   // mniejszy akapit
    },
  },


  /* -------------------------------------------------------------------
     O NAS
     „akapity” to oficjalny opis stowarzyszenia — zmieniać tylko
     po decyzji zarządu.
     ------------------------------------------------------------------- */
  oNas: {
    cytat: "To przestrzeń autentycznego spotkania oraz dialogu.",
    akapity: [
      "Stowarzyszenie „Za Daleko” zostało założone, aby nagłaśniać tematy wymagające szerszej perspektywy i rzetelnej wiedzy. To przestrzeń dla historii z podróży, badań i doświadczeń międzykulturowych, które rzadko wybrzmiewają w debacie publicznej, a mogą stanowić fascynujący punkt wyjścia do dyskusji.",
      "Naszą misją jest budowanie rzetelnej narracji o wielokulturowości, przeciwdziałanie dezinformacji oraz wzmacnianie integracji lokalnej. Nasze działania opieramy na edukacji i rzetelnych badaniach, wykorzystując storytelling oraz współpracę z instytucjami naukowymi i społecznymi. Promujemy różnorodność językową, sztukę, rękodzieło i twórczość migrantów, bo wierzymy, że kultura to przestrzeń autentycznego spotkania oraz dialogu.",
    ],
    // Zdjęcia pod opisem (najlepiej 2 poziome); pusta lista = brak zdjęć
    zdjecia: [
      { zdjecie: "assets/img/o-nas/naklejki.jpg", alt: "Naklejki z logo Stowarzyszenia Za Daleko" },
      { zdjecie: "assets/img/o-nas/materialy.jpg", alt: "Stół z materiałami stowarzyszenia: naklejki, wizytówki, książki i kwiaty" },
    ],
  },


  /* -------------------------------------------------------------------
     NASZE DZIAŁANIA — obszary działalności (numerowane automatycznie)
     ------------------------------------------------------------------- */
  dzialania: {
    tytul: "Co robimy",
    wstep: "Sześć obszarów, w których skracamy dystans — między ludźmi, kulturami i wiedzą.",
    lista: [
      {
        tytul: "Edukacja i popularyzacja wiedzy",
        opis: "Tłumaczymy złożone i odległe tematy tak, by stały się bliższe i zrozumiałe.",
      },
      {
        tytul: "Dialog międzykulturowy",
        opis: "Tworzymy okazje do rozmowy między ludźmi o różnych doświadczeniach i perspektywach.",
      },
      {
        tytul: "Przeciwdziałanie dezinformacji",
        opis: "Stawiamy na sprawdzone źródła i rzetelną wiedzę zamiast uproszczeń i stereotypów.",
      },
      {
        tytul: "Integracja lokalna",
        opis: "Łączymy ludzi w lokalnej społeczności, niezależnie od tego, skąd pochodzą.",
      },
      {
        tytul: "Kultura, sztuka i twórczość migrantów",
        opis: "Pokazujemy sztukę, rękodzieło i różnorodność języków — także podczas warsztatów, które prowadzimy.",
      },
      {
        tytul: "Storytelling, podróże i badania",
        opis: "Dzielimy się historiami z podróży i badań w formie rozmów, spotkań i opowieści.",
      },
    ],
  },


  /* -------------------------------------------------------------------
     PROJEKTY
     Aby dodać projekt: skopiuj wzór poniżej, usuń znaki // na początku
     linii i uzupełnij pola.

     Pola:
       tytul   – nazwa projektu (wymagane)
       rodzaj  – np. "Warsztaty", "Cykl spotkań" (opcjonalne)
       okres   – data lub okres realizacji, dowolny tekst (opcjonalne)
       opis    – 2–3 zdania (wymagane)
       zdjecie – ścieżka do zdjęcia, np. "assets/img/projekt.jpg" (opcjonalne)
       alt     – opis zdjęcia dla osób niewidomych (wymagane, jeśli jest zdjęcie)
       link    – adres strony ze szczegółami (opcjonalne)
       linkTekst – napis na linku (opcjonalne; domyślnie „Szczegóły”)
       galeria – dodatkowe zdjęcia pod opisem (opcjonalne), lista:
                 [ { zdjecie: "...", alt: "..." }, ... ] — najlepiej 4 pionowe
     ------------------------------------------------------------------- */
  projekty: {
    tytul: "Projekty i inicjatywy",
    // Projekty układają się same od najnowszego (według miesiąca i roku w polu okres).
    // Najnowszy wyświetla się jako duża, wyróżniona karta.
    gdyBrak: "Pierwsze projekty pojawią się tutaj już wkrótce.",
    lista: [
      {
        tytul: "Festiwal Afryki i Bliskiego Wschodu",
        rodzaj: "Festiwal",
        okres: "Marzec 2026",
        opis: "Z Festiwalem w Instytucie Bliskiego i Dalekiego Wschodu jesteśmy związane już od kilku lat. Chęć organizacji tak dużego wydarzenia jest podyktowana naszą ogromną pasją - zarówno do regionów Afryki i Azji Zachodniej, jak i do edukacji i popularyzacji nauki. Jest to też świetne miejsce spotkań przyjaciół, ekspertów, podróżników.",
        zdjecie: "assets/img/projekty/festiwal-afryki/glowne.jpg",
        alt: "Rozmowa na scenie podczas festiwalu, w tle ekran z nazwą Za Daleko",
        link: "https://www.facebook.com/profile.php?id=61572482759901",
        linkTekst: "Facebook festiwalu",
        galeria: [
          { zdjecie: "assets/img/projekty/festiwal-afryki/koncert.jpg", alt: "Muzyk grający na korze podczas koncertu" },
          { zdjecie: "assets/img/projekty/festiwal-afryki/warsztaty-tykwy.jpg", alt: "Warsztaty zdobienia tykw — wzory i narzędzia na stole" },
          { zdjecie: "assets/img/projekty/festiwal-afryki/warsztaty-plecionka.jpg", alt: "Uczestniczka warsztatów z uplecionym koszyczkiem" },
          { zdjecie: "assets/img/projekty/festiwal-afryki/pismo.jpg", alt: "Uczestniczka z kartką ćwiczeń pisma etiopskiego" },
        ],
      },
      {
        tytul: "Globalne a polskie – moje miejsce w świecie bez granic",
        rodzaj: "Warsztaty dla młodzieży",
        okres: "Lipiec – listopad 2026",
        // \n\n = nowy akapit
        opis: "Podczas warsztatów młodzież wyruszyła w podróż przez wieki, odkrywając, jak zmieniało się życie w Polsce. Rozmawialiśmy m.in. o popularności łaciny, królewskich strojach i materiałach, z których je szyto, składnikach potraw goszczących na chłopskich, szlacheckich i tatarskich stołach, a także o historii pierwszej pralki w Polsce.\n\nNie zabrakło również współczesnych, globalnych historii. Uczestnicy odkrywali, skąd biorą się nasze jeansy, ile osób jest zaangażowanych w powstanie bochenka chleba oraz jak wyglądają współczesne szlaki handlowe. Wszystko po to, by zobaczyć, jak od wieków to, co lokalne i polskie, łączy się z tym, co globalne.",
        zdjecie: "assets/img/projekty/globalne-a-polskie/glowne.jpg",
        alt: "Młodzież pracuje w grupach nad plakatem Globalne Południe i Globalna Północ",
        link: "",
        galeria: [
          { zdjecie: "assets/img/projekty/globalne-a-polskie/mapa-jezykow.jpg", alt: "Uczestnik z mapą świata – zadanie o językach lokalnych i kolonialnych" },
          { zdjecie: "assets/img/projekty/globalne-a-polskie/plakat-rozwoj.jpg", alt: "Plakat o zrównoważonym rozwoju oklejony karteczkami z pomysłami uczestników" },
          { zdjecie: "assets/img/projekty/globalne-a-polskie/kartka-postaci.jpg", alt: "Kartka z opisem postaci mieszkającej w dużym mieście w Brazylii" },
        ],
      },      {
        tytul: "Folkowisko",
        rodzaj: "Warsztaty",
        okres: "Lipiec 2026",
        opis: "Prowadziłyśmy warsztaty plecenia breloków-kwiatów z makramy i podkładek-misek z rafii, a przy okazji nagrałyśmy rozmowy o Podkarpaciu, Zakarpaciu, historii Gorajca i samym festiwalu.",
        zdjecie: "assets/img/projekty/folkowisko/glowne.jpg",
        alt: "Warsztaty plecenia breloków z makramy — sznurki, gotowe breloki i tabliczka Stowarzyszenia Za Daleko",
        link: "https://folkowisko.pl/",
        linkTekst: "Strona Folkowiska",
        galeria: [
          { zdjecie: "assets/img/projekty/folkowisko/brelok.jpg", alt: "Gotowy brelok-kwiat z makramy w dłoni uczestniczki" },
          { zdjecie: "assets/img/projekty/folkowisko/rafia.jpg", alt: "Stół warsztatowy z rafią, sznurkami i materiałami Za Daleko" },
          { zdjecie: "assets/img/projekty/folkowisko/scena.jpg", alt: "Koncert zespołu ludowego na Scenie Tradycji" },
          { zdjecie: "assets/img/projekty/folkowisko/stoisko.jpg", alt: "Członkini stowarzyszenia przy stoisku z naklejkami i wizytówkami Za Daleko" },
        ],
      },      // Wzór kolejnego projektu — skopiuj, usuń znaki // i uzupełnij:
      // {
      //   tytul: "Nazwa projektu",
      //   rodzaj: "Warsztaty",
      //   okres: "wrzesień – grudzień 2026",
      //   opis: "Krótki opis projektu: o czym jest, do kogo jest skierowany i jak można wziąć w nim udział.",
      //   zdjecie: "assets/img/nazwa-zdjecia.jpg",
      //   alt: "Uczestnicy warsztatów przy wspólnym stole",
      //   link: "",
      // },
    ],
  },


  /* -------------------------------------------------------------------
     ZESPÓŁ
     Jeśli nie ma zdjęcia, na stronie pojawią się inicjały.

     Pola:
       imie    – imię i nazwisko (wymagane)
       funkcja – np. "Prezeska zarządu" (wymagane)
       opis    – 1–2 zdania (opcjonalne)
       zdjecie – najlepiej pionowe, np. "assets/img/zespol-anna.jpg" (opcjonalne)
       alt     – opis zdjęcia (opcjonalne; domyślnie imię i nazwisko)
     ------------------------------------------------------------------- */
  zespol: {
    tytul: "Ludzie stowarzyszenia",
    gdyBrak: "Wkrótce przedstawimy osoby, które tworzą stowarzyszenie.",
    lista: [
      // Kolejność na liście = kolejność na stronie (od lewej do prawej)
      {
        imie: "Martyna Winiarek",
        funkcja: "",   // ← wpisz funkcję, np. "Prezeska zarządu"
        opis: "",
        zdjecie: "assets/img/zespol/martyna-winiarek.jpg",
        alt: "Martyna Winiarek na plaży",
      },
      {
        imie: "Martyna Krasny",
        funkcja: "",
        opis: "",
        zdjecie: "assets/img/zespol/martyna-krasny.jpg",
        alt: "Portret Martyny Krasny w plenerze",
      },
      {
        imie: "Marcelina Cieślik",
        funkcja: "",
        opis: "",
        zdjecie: "assets/img/zespol/marcelina-cieslik.jpg",
        alt: "Marcelina Cieślik prowadzi zajęcia przy tablicy",
      },
      // Wzór kolejnej osoby — skopiuj, usuń znaki // i uzupełnij:
      // {
      //   imie: "Imię Nazwisko",
      //   funkcja: "Funkcja w stowarzyszeniu",
      //   opis: "Krótki opis osoby.",
      //   zdjecie: "assets/img/zespol-imie.jpg",
      //   alt: "",
      // },
    ],
  },


  /* -------------------------------------------------------------------
     KONTAKT
     Puste pole ("") = dany kanał nie pojawi się na stronie.
     ------------------------------------------------------------------- */
  kontakt: {
    tytul: "Skróćmy dystans.\nNapisz do nas.",   // \n = nowa linia
    email: "stowarzyszeniezadaleko@gmail.com",
    nip: "6793355071",
    instagram: { nazwa: "@zadalekopl", adres: "https://www.instagram.com/zadalekopl/" },
    facebook:  { nazwa: "Stowarzyszenie Za Daleko", adres: "https://www.facebook.com/stowarzyszeniezadaleko/" },
    linkedin:  { nazwa: "Stowarzyszenie Za Daleko", adres: "https://www.linkedin.com/company/stowarzyszenie-za-daleko/" },
    inne: [
      // { kanal: "YouTube", nazwa: "Za Daleko", adres: "https://www.youtube.com/..." },
    ],
  },


  /* -------------------------------------------------------------------
     STOPKA
     ------------------------------------------------------------------- */
  stopka: {
    politykaPrywatnosci: "",   // np. "polityka-prywatnosci.html" — pusty = link ukryty
  },

};
