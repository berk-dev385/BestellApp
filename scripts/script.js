let basket = []; // Speichert nur ausgewählte Gerichte und deren Mengen.

// PREISFORMATIERUNG
function formatPrice(cents) { // Empfängt einen ganzzahligen Centbetrag als Parameter.
    return (cents / 100).toFixed(2).replace('.', ',') + '€'; // Rechnet Cent in Euro um, formatiert den Betrag und gibt ihn als Text zurück.
} // Beendet die Funktion; die Originalzahl bleibt unverändert.

function renderCategory(category, targetId) { // Parameter: category = gesuchte Kategorie; targetId = ID des HTML-Zielelements.
    let markup = ''; // Veränderbarer String als Zwischenspeicher für alle passenden HTML-Karten.
    for (let i = 0; i < dishes.length; i++) { // Durchläuft das dishes-Array aus db.js: Startindex 0, alle Objekte, i + 1 je Durchlauf.
        if (dishes[i].category === category) { // Vergleicht IST-Kategorie des aktuellen Objekts mit SOLL-Kategorie des Parameters (Wert und Datentyp).
            markup += createDishCard(dishes[i]); // Übergibt das Gerichtsobjekt an templates.js; hängt den zurückgegebenen HTML-String an markup an.
        } // Ende der IF-Abfrage; nicht passende Gerichte werden übersprungen.
    } // Ende der FOR-Schleife; markup enthält jetzt alle passenden HTML-Karten.
    document.getElementById(targetId).innerHTML = markup; // Sucht das HTML-Zielelement per ID und ersetzt dessen Inhalt durch die gesammelten Karten.
} // Ende der Funktion; markup ist nur innerhalb dieser Funktion verfügbar.

function renderMenu() { // Koordiniert die Ausgabe aller drei Gerichtskategorien.
    renderCategory('burger', 'burgerList'); // Argumente: Kategorie burger; HTML-Ziel burgerList.
    renderCategory('pizza', 'pizzaList'); // Argumente: Kategorie pizza; HTML-Ziel pizzaList.
    renderCategory('salad', 'saladList'); // Argumente: Kategorie salad; HTML-Ziel saladList.
} // Ende der Funktion; alle drei Kategorien werden nacheinander verarbeitet, sobald sie aufgerufen wird.

function findDish(id) { // Empfängt die ID des gesuchten Gerichts.
    for (let i = 0; i < dishes.length; i++) { // Durchläuft alle Gerichtsobjekte aus db.js.
        if (dishes[i].id === id) { // Vergleicht die gespeicherte ID mit der gesuchten ID.
            return dishes[i]; // Gibt das vollständige gefundene Gerichtsobjekt zurück.
        } // Ende der ID-Prüfung.
    } // Ende der Suche im dishes-Array.
    return null; // Kein Gericht mit dieser ID gefunden.
} // Ende der Gerichtsuche.

function findBasketIndex(id) { // Empfängt die ID des gesuchten Gerichts im Warenkorb.
    for (let i = 0; i < basket.length; i++) { // Durchläuft alle vorhandenen Warenkorbpositionen.
        if (basket[i].dishId === id) { // Vergleicht die gespeicherte Gerichts-ID mit der gesuchten ID.
            return i; // Gibt den Array-Index der gefundenen Warenkorbposition zurück.
        } // Ende der ID-Prüfung.
    } // Ende der Suche im basket-Array.
    return -1; // Keine Warenkorbposition mit dieser ID gefunden.
} // Ende der Positionssuche.

function addDish(id) { // Empfängt die ID des hinzuzufügenden Gerichts.
    if (!findDish(id)) return; // Beendet die Funktion, wenn das Gericht nicht in db.js existiert.
    const index = findBasketIndex(id); // Ermittelt den Index des Gerichts im Warenkorb.
    if (index === -1) { // Prüft, ob das Gericht noch nicht im Warenkorb liegt.
        basket.push({ dishId: id, quantity: 1 }); // Erstellt eine neue Position mit Gerichts-ID und Menge 1.
    } else { // Wird ausgeführt, wenn das Gericht bereits im Warenkorb liegt.
        basket[index].quantity++; // Erhöht die Menge der vorhandenen Position um 1.
    } // Ende der Fallunterscheidung.
    renderBasket(); // Aktualisiert die Warenkorbanzeige.
} // Ende der Hinzufügefunktion.

function changeQuantity(id, change) { // Parameter: Gerichts-ID und gewünschte Mengenänderung.
    const index = findBasketIndex(id); // Ermittelt den Index der vorhandenen Warenkorbposition.
    if (index === -1) return; // Beendet die Funktion, wenn keine Position existiert.
    basket[index].quantity += change; // Addiert die übergebene Änderung zur gespeicherten Menge.
    if (basket[index].quantity <= 0) { // Prüft, ob die Menge null oder negativ geworden ist.
        basket.splice(index, 1); // Entfernt genau einen Eintrag am ermittelten Array-Index.
    } // Ende der Mengenprüfung.
    renderBasket(); // Aktualisiert die Warenkorbanzeige.
} // Ende der Mengensteuerung.

function removeDish(id) { // Empfängt die ID des vollständig zu entfernenden Gerichts.
    const index = findBasketIndex(id); // Ermittelt den Index der zu löschenden Position.
    if (index === -1) return; // Beendet die Funktion, wenn keine Position existiert.
    basket.splice(index, 1); // Entfernt die gesamte Position unabhängig von ihrer Menge.
    renderBasket(); // Aktualisiert die Warenkorbanzeige.
} // Ende der Löschfunktion.

function calculateSubtotal() { // Berechnet den Warenwert aller Warenkorbpositionen.
    let subtotal = 0; // Initialisiert die Zwischensumme mit 0 Cent.
    for (let i = 0; i < basket.length; i++) { // Durchläuft alle Positionen im basket-Array.
        const dish = findDish(basket[i].dishId); // Holt das zugehörige Gerichtsobjekt aus db.js.
        subtotal += dish.priceCents * basket[i].quantity; // Addiert Einzelpreis mal Bestellmenge zur Zwischensumme.
    } // Ende der Summenschleife.
    return subtotal; // Gibt die berechnete Zwischensumme in Cent zurück.
} // Ende der Zwischensummenberechnung.

function calculateItemPrice(dish, quantity) { // Empfängt Gerichtsobjekt und Bestellmenge.
    return dish.priceCents * quantity; // Gibt den Positionspreis als Centbetrag zurück.
} // Ende der Positionspreisberechnung.

function calculateTotal(subtotal) { // Empfängt die berechnete Zwischensumme in Cent.
    return subtotal + deliveryFeeCents; // Addiert die feste Liefergebühr aus db.js.
} // Ende der Gesamtsummenberechnung.

function renderBasket() { // Entscheidet zwischen leerer und gefüllter Warenkorbansicht.
    let markup = createEmptyBasket(); // Speichert zunächst die HTML-Vorlage des Leerzustands.
    if (basket.length > 0) { // Prüft, ob mindestens eine Warenkorbposition vorhanden ist.
        let items = ''; // Erstellt einen leeren String für alle Warenkorbpositionen.
        for (let i = 0; i < basket.length; i++) { // Durchläuft alle Positionen im basket-Array.
            const dish = findDish(basket[i].dishId); // Holt anhand der Gerichts-ID das zugehörige Objekt aus db.js.
            items += createBasketItem(dish, basket[i].quantity, calculateItemPrice(dish, basket[i].quantity)); // Berechnet den Positionspreis und übergibt Gericht, Menge und Preis an die HTML-Vorlage.
        } // Ende der Schleife; alle Warenkorbpositionen wurden gesammelt.
        const subtotal = calculateSubtotal(); // Berechnet den Warenwert einmal aus allen Warenkorbpositionen.
        markup = createFilledBasket(items, subtotal, calculateTotal(subtotal)); // Berechnet den Gesamtbetrag und übergibt beide Beträge an die HTML-Vorlage.
    } // Ende der Zustandsprüfung.
    document.getElementById('desktopBasket').innerHTML = markup; // Ersetzt den bisherigen HTML-Inhalt durch den aktuellen Warenkorbzustand.
} // Ende der Warenkorb-Renderingfunktion.

renderMenu(); // Startaufruf: Führt beim Laden von script.js das Rendering aller drei Kategorien aus.
renderBasket(); // Zeigt den anfänglich leeren Korb an.
