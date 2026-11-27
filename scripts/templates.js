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
      <button class="add-to-basket" type="button" onclick="addDish(${dish.id})">Add to basket</button> <!-- Übergibt beim Klick die numerische Gericht-ID. -->
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

function createBasketItem(dish, quantity, itemPrice) { // Empfängt Gerichtsobjekt, Bestellmenge und berechneten Positionspreis in Cent.
  return `<div class="basket-item"> <!-- Beginnt eine einzelne Warenkorbposition. -->
    <div class="basket-item-heading"> <!-- Gruppiert Gerichtsname und Löschbutton. -->
      <p>${quantity} x ${dish.name}</p> <!-- Zeigt Bestellmenge und Gerichtsname. -->
      <button type="button" class="basket-delete" onclick="removeDish(${dish.id})" aria-label="Remove ${dish.name}"><img src="assets/icons/delete.svg" alt=""></button> <!-- Löscht die gesamte Position anhand der Gerichts-ID. -->
    </div> <!-- Ende der Kopfzeile. -->
    <div class="basket-item-bottom"> <!-- Gruppiert die Mengensteuerung. -->
      <button type="button" onclick="changeQuantity(${dish.id}, -1)" aria-label="Decrease ${dish.name}">−</button> <!-- Reduziert die Bestellmenge um 1. -->
      <span>${quantity}</span> <!-- Zeigt die aktuelle Bestellmenge. -->
      <button type="button" onclick="changeQuantity(${dish.id}, 1)" aria-label="Increase ${dish.name}">+</button> <!-- Erhöht die Bestellmenge um 1. -->
      <strong class="basket-item-price">${formatPrice(itemPrice)}</strong> <!-- Formatiert den Positionspreis in Euro und zeigt ihn an. -->
    </div> <!-- Ende der Mengensteuerung. -->
  </div>`; // Gibt die vollständige Warenkorbposition als HTML-String zurück.
} // Ende der Positionsvorlage.

function createBasketSummary(subtotal, total) { // Empfängt berechnete Zwischen- und Gesamtsumme in Cent.
  return `<div class="basket-totals"> <!-- Gruppiert alle Preisangaben. -->
    <div class="basket-total-line"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div> <!-- Zeigt die formatierte Zwischensumme. -->
    <div class="basket-total-line"><span>Delivery fee</span><span>${formatPrice(deliveryFeeCents)}</span></div> <!-- Zeigt die Liefergebühr aus db.js. -->
    <div class="basket-grand-total"><span>Total</span><span>${formatPrice(total)}</span></div> <!-- Zeigt die formatierte Gesamtsumme. -->
    <button type="button" class="basket-buy">Buy now (${formatPrice(total)})</button> <!-- Erstellt den Bestellbutton mit Gesamtpreis. -->
  </div>`; // Gibt die vollständige Summenvorlage als HTML-String zurück.
} // Ende der Summenvorlage.

function createFilledBasket(items, subtotal, total) { // Empfängt HTML-Positionen, Zwischensumme und Gesamtsumme.
  return `<div class="basket-content"><h2 class="basket-title">Your Basket</h2><div class="basket-items">${items}</div>${createBasketSummary(subtotal, total)}</div>`; // Verbindet Warenkorbpositionen und Summenvorlage.
} // Ende der gefüllten Warenkorbvorlage.