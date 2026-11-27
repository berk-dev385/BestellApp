// GERICHTSÜBERSCHRIFT
function dishTitle(dish) { // Empfängt ein einzelnes Gerichtsobjekt als Parameter.
  if (dish.mobileName) { // Prüft, ob der alternative Titel einen verwendbaren Wert hat.
    return `<span class="desktop-dish-name">${dish.name}</span><span class="mobile-dish-name">${dish.mobileName}</span>`; // Setzt beide Namen in HTML ein; CSS entscheidet später über die Sichtbarkeit. return beendet die Funktion.
  } // Beendet den IF-Block; ohne mobilen Titel läuft die Funktion weiter.
  return dish.name; // Gibt den normalen Namen zurück, wenn kein alternativer Titel vorhanden ist.
} // Beendet die Titelvorlage.

// GERICHTSKARTEN-VORLAGE
function createDishCard(dish) { // Empfängt ein einzelnes Gerichtsobjekt und erzeugt daraus HTML, ohne den DOM zu verändern.
  return `<article class="dish-card"> <!-- Öffnet eine eigenständige Karte und eine mehrzeilige Zeichenkette. -->
    <img class="dish-image" src="${dish.image}" alt="${dish.name}"> <!-- Setzt Bildpfad und Alternativtext aus dem Objekt ein. -->
    <div class="dish-copy"> <!-- Gruppiert Name und Zutaten für die spätere CSS-Anordnung. -->
      <h3>${dishTitle(dish)}</h3> <!-- Übergibt das Objekt an die Titelvorlage und setzt deren Rückgabewert ein. -->
      <p>${dish.description}</p> <!-- Liest die Zutatenbeschreibung und fügt sie als Absatz ein. -->
    </div> <!-- Schließt den Textcontainer. -->
    <div class="dish-actions"> <!-- Gruppiert Preis und Button unabhängig vom Textcontainer. -->
      <strong>${formatPrice(dish.priceCents)}</strong> <!-- Übergibt die gespeicherten Cent an die Formatierungsfunktion in script.js; zeigt ihren Rückgabewert an. -->
      <button class="add-to-basket" type="button">Add to basket</button> <!-- Erstellt den Button; onclick folgt erst in 08.03. -->
    </div> <!-- Schließt die Aktionsgruppe. -->
  </article>`; // Schließt HTML und Template Literal; gibt die gesamte Zeichenkette zurück.
} // Beendet die Kartenvorlage.

// Was ist ein Template Literal?
// Ein Template Literal ist eine Zeichenkette, die mit Backticks (Graviszeichen) umschlossen wird. Sie erlaubt mehrzeilige Texte und das direkte Einsetzen von Variablen, Eigenschaften und Funktionsrückgabewerten.
//  Aufbau am Beispiel : <p>${dish.description}</p>  // HTML-Struktur  // Dynamischer Platzhalter //Übergebenes Gerichtsobjekt //Eigenschaft des Objekts
// Erzeugte HTML-Zeichenkette für das erste Gericht:  <p>Mixed green salad, Tomatoes, Edamame, Mushrooms</p>

// LEERER WARENKORB
function createEmptyBasket() { // Erzeugt die HTML-Vorlage für einen leeren Warenkorb; benötigt keine Parameter.
  return `<div class="basket-content"> <!-- Hauptcontainer für alle Warenkorbinhalte. -->
    <h2 class="basket-title">Your Basket</h2> <!-- Überschrift des Warenkorbs. -->
    <div class="basket-empty"> <!-- Gruppiert Symbol und Hinweistext; CSS übernimmt die Zentrierung. -->
      <img src="assets/icons/cart.svg" alt=""> <!-- Lädt das dekorative Warenkorbsymbol aus dem Asset-Ordner. -->
      <p>Nothing here yet.<br>Go ahead and choose something delicious!</p> <!-- Hinweistext mit festem Zeilenumbruch durch br. -->
    </div> <!-- Ende des Leerzustand-Containers. -->
  </div>`; // Schließt das Template Literal und gibt den vollständigen HTML-String zurück.
} // Ende der Funktion; keine direkte Veränderung des DOM.