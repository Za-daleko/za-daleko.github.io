# Stowarzyszenie „Za Daleko” — strona internetowa

Strona-wizytówka stowarzyszenia. Czysty HTML, CSS i JavaScript — bez instalowania czegokolwiek, bez kompilacji, bez płatnych usług.
Adres docelowy: **https://za-daleko.github.io/**

## Struktura plików

```
Za-daleko-website/
├── index.html          ← strona główna (pierwszy ekran + spis podstron)
├── o-nas.html (z sekcją Co robimy), projekty.html,
│   zespol.html, kontakt.html   ← podstrony
├── content.js          ← WSZYSTKIE TREŚCI: projekty, zespół, kontakt
├── style.css           ← wygląd (kolory, czcionki, układ)
├── script.js           ← działanie strony (menu, animacje, wstawianie treści)
├── Logo_wizytówka/, Zespół/, Festiwal…/, Zdjęcia_dodatkowe/   ← Wasze oryginały (strona ich nie używa bezpośrednio)
├── assets/
│   ├── img/            ← zoptymalizowane wersje grafik używane na stronie
│   ├── icons/          ← favicony (ikony w karcie przeglądarki)
│   └── fonts/          ← czcionki Gloock i Jost (lokalnie, licencja SIL OFL)
├── site.webmanifest, robots.txt, sitemap.xml   ← pliki techniczne (SEO)
└── _archiwum/          ← kopie poprzednich wersji (nie trafiają na stronę)
```

## 1. Podgląd strony na komputerze (Live Server)

1. Otwórz folder `Za-daleko-website` w Visual Studio Code (*Plik → Otwórz folder*).
2. Kliknij prawym przyciskiem na `index.html` → **Open with Live Server**.
3. Strona otworzy się w przeglądarce i będzie odświeżać się sama po każdym zapisie pliku.

Strona działa też po zwykłym dwukrotnym kliknięciu `index.html`.

## 2. Edycja tekstów

Wszystkie treści są w pliku **`content.js`**. Otwórz go w VS Code — każda sekcja ma opis i komentarze.

- Tekst wpisuj zawsze **w cudzysłowach** `"..."`, a po każdym polu stawiaj **przecinek**.
- Puste pole `""` oznacza, że dany element się nie wyświetli.
- W tytule sekcji Kontakt znak `\n` oznacza przejście do nowej linii.
- Oficjalnego opisu stowarzyszenia (`oNas.akapity`) i hasła nie należy zmieniać bez decyzji zarządu.

**Jeśli po zmianie strona przestała pokazywać treści**, prawie zawsze brakuje przecinka albo cudzysłowu. Naciśnij **F12** w przeglądarce i zajrzyj do zakładki *Console* — pojawi się tam komunikat z numerem linii.

## 3. Dodawanie zdjęć

1. Zmniejsz zdjęcie (patrz niżej) i wrzuć je do folderu `assets/img/` (możesz założyć podfolder, np. `assets/img/projekty/`).
2. Nazwij plik prosto: małe litery, bez spacji i polskich znaków, np. `warsztaty-pazdziernik-2026.jpg`.
3. W `content.js` wpisz ścieżkę: `zdjecie: "assets/img/warsztaty-pazdziernik-2026.jpg"`.
4. Uzupełnij pole `alt` — krótki opis tego, co widać na zdjęciu (dla osób niewidomych i wyszukiwarek).

**Przed wrzuceniem zmniejsz zdjęcie**, żeby strona ładowała się szybko: najlepiej do ok. **1600 px** szerokości i poniżej **400 KB** (np. darmowym narzędziem https://squoosh.app). Kadrowanie jest automatyczne — zdjęcia nie są rozciągane, tylko przycinane do ramki.

- Projekty: najlepiej zdjęcia **poziome**.
- Zespół: najlepiej zdjęcia **pionowe** (portret). Bez zdjęcia pojawią się inicjały.
- Gdy wpis nie ma zdjęcia, strona pokaże fragment mapy w barwach stowarzyszenia.
- Gdy ścieżka jest błędna, strona też pokaże mapę, a w konsoli (F12) pojawi się ostrzeżenie z nazwą pliku.

## 4. Dodawanie projektu

W `content.js` znajdź sekcję `projekty` i wzór zakomentowany znakami `//`. Skopiuj go, usuń `//` i uzupełnij:

```js
lista: [
  {
    tytul: "Nazwa projektu",
    rodzaj: "Warsztaty",
    okres: "wrzesień – grudzień 2026",
    opis: "Krótki opis projektu.",
    zdjecie: "assets/img/projekt.jpg",
    alt: "Opis zdjęcia",
    link: "",            // adres ze szczegółami albo puste
  },
],
```

Pierwszy projekt na liście wyświetla się jako duża, wyróżniona karta.

## 5. Zespół, kontakt, stopka

- **Zespół** — sekcja `zespol` w `content.js` (imię i nazwisko, funkcja, opis, zdjęcie).
- **Kontakt** — `kontakt`: e-mail, Instagram, Facebook, LinkedIn; kolejne kanały (np. YouTube) dopisz w `inne`. Pusty adres = kanał się nie wyświetla.
- **Polityka prywatności** — jeśli powstanie, zapisz ją jako np. `polityka-prywatnosci.html` i wpisz nazwę w `stopka.politykaPrywatnosci`. Strona nie używa ciasteczek ani statystyk, a czcionki są lokalne, więc na ten moment polityka nie jest technicznie konieczna.

## 6. Menu i podstrony

Każda podstrona to osobny plik HTML. Menu i stopka są wpisane w każdy z nich (dzięki temu działają nawet przy błędzie w `content.js`). **Jeśli zmieniasz nazwę pozycji w menu, popraw ją we wszystkich 5 plikach HTML** (w VS Code: *Edycja → Zamień w plikach*, Ctrl+Shift+H).

Treści podstron nadal edytujesz wyłącznie w `content.js`.

## 7. Zmiana kolorów

Na początku `style.css`, w sekcji `:root`, są wszystkie kolory (`--blue`, `--sand` itd.). Zmiana w jednym miejscu działa na całej stronie.

## 8. Publikowanie na GitHub Pages

Repozytorium musi nazywać się **`za-daleko.github.io`** (konto/organizacja `za-daleko`), a pliki muszą leżeć w jego **głównym katalogu** (tak jak w tym folderze).

**Przez stronę GitHub (najprościej):**
1. Wejdź do repozytorium → **Add file → Upload files**.
2. Przeciągnij całą zawartość folderu (pliki i foldery, nie sam folder).
3. Kliknij **Commit changes**.
4. Za pierwszym razem: **Settings → Pages → Source: Deploy from a branch**, gałąź `main`, folder `/ (root)`.
5. Po 1–2 minutach zmiany będą widoczne pod https://za-daleko.github.io/ (czasem trzeba odświeżyć stronę z Ctrl+F5).

**Przez VS Code (Git):** zakładka *Source Control* → wpisz opis zmian → **Commit** → **Sync Changes / Push**.

Przy kolejnych zmianach zwykle wystarczy wysłać tylko `content.js` i nowe zdjęcia z `assets/img/`.

> Duże oryginały w folderach z oryginałami (tła po ~10–12 MB) nie są używane bezpośrednio przez stronę — strona korzysta z lekkich kopii w `assets/img/`. Można je trzymać w repozytorium (limit GitHub to 100 MB na plik), ale nie spowalniają strony.
