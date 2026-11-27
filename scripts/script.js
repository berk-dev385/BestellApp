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

renderMenu(); // Startaufruf: Führt beim Laden von script.js das Rendering aller drei Kategorien aus.