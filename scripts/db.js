const dishes = [ // Array für sämtliche Gerichte der Speisekarte.

    { // Datensatz 1
        id: 1, // Eindeutige Identifikationsnummer.
        category: "burger", // Zugehörige Gerichtskategorie.
        name: "Veggie mushroom black burger", // Name des Gerichts.
        description: "Mixed green salad, Tomatoes, Edamame, Mushrooms", // Zutaten.
        priceCents: 1690, // Preis: 16,90 Euro.
        image: "assets/images/veggie-mushroom-black-burger.png" // Bildpfad.
    },

    { // Datensatz 2
        id: 2, // Eindeutige Identifikationsnummer.
        category: "burger", // Zugehörige Gerichtskategorie.
        name: "All meat burger", // Name des Gerichts.
        description: "Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ souse", // Zutaten.
        priceCents: 1590, // Preis: 15,90 Euro.
        image: "assets/images/all-meat-burger.png" // Bildpfad.
    },

    { // Datensatz 3
        id: 3, // Eindeutige Identifikationsnummer.
        category: "burger", // Zugehörige Gerichtskategorie.
        name: "Beef red burger", // Name des Gerichts.
        description: "Beef, Cheese, Tomatoes, Lettuce, Onion", // Zutaten.
        priceCents: 1490, // Preis: 14,90 Euro.
        image: "assets/images/beef-red-burger.png" // Bildpfad.
    },

    { // Datensatz 4
        id: 4, // Eindeutige Identifikationsnummer.
        category: "burger", // Zugehörige Gerichtskategorie.
        name: "BIg chicken burger", // Name des Gerichts.
        description: "Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper,", // Zutaten.
        priceCents: 1590, // Preis: 15,90 Euro.
        image: "assets/images/big-chicken-burger.png" // Bildpfad.
    },

    // PIZZA-DATENSÄTZE

    { // Beginnt Datensatz 5.
        id: 5, // Eindeutige Identifikationsnummer.
        category: "pizza", // Zugehörige Gerichtskategorie.
        name: "Pizza Margherita", // Name des Gerichts.
        description: "Tomato Sauce, Mozzarella", // Zutaten.
        priceCents: 1190, // Preis: 11,90 Euro.
        image: "assets/images/pizza-margherita.png" // Bildpfad.
    },

    { // Beginnt Datensatz 6.
        id: 6, // Eindeutige Identifikationsnummer.
        category: "pizza", // Zugehörige Gerichtskategorie.
        name: "Pizza Chorizo", // Name des Gerichts.
        description: "Tomato slices, Mozzarella, Chorizo", // Zutaten.
        priceCents: 1390, // Preis: 13,90 Euro.
        image: "assets/images/pizza-chorizo.png" // Bildpfad.
    },

    { // Beginnt Datensatz 7.
        id: 7, // Eindeutige Identifikationsnummer.
        category: "pizza", // Zugehörige Gerichtskategorie.
        name: "Funghi", // Gerichtsname für Desktop.
        mobileName: "Pizza Funghi", // Alternativer Gerichtsname für Mobil.
        description: "Red onion, Olives, Button Mushrooms, Mozzarella", // Zutaten.
        priceCents: 1290, // Preis: 12,90 Euro.
        image: "assets/images/pizza-funghi.png" // Bildpfad.
    },

    { // Beginnt Datensatz 8.
        id: 8, // Eindeutige Identifikationsnummer.
        category: "pizza", // Zugehörige Gerichtskategorie.
        name: "Quattro Formaggi with Chicken", // Name des Gerichts.
        description: "Chicken, Mozzarella, Gorgonzola, Fontina,  Parmigiano Reggiano", // Zutaten.
        priceCents: 1590, // Preis: 15,90 Euro.
        image: "assets/images/pizza-quattro-formaggi-chicken.png" // Bildpfad.
    },

    // SALAT-DATENSÄTZE 

    { // Beginnt Datensatz 9.
        id: 9, // Eindeutige Identifikationsnummer.
        category: "salad", // Zugehörige Gerichtskategorie.
        name: "Warm beef arugula salad", // Name des Gerichts.
        description: "Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried Tomatoes, Balsamic-vinegar dressing", // Zutaten.
        priceCents: 1690, // Preis: 16,90 Euro.
        image: "assets/images/warm-beef-arugula-salad.png" // Bildpfad.
    },

    { // Beginnt Datensatz 10.
        id: 10, // Eindeutige Identifikationsnummer.
        category: "salad", // Zugehörige Gerichtskategorie.
        name: "Mini green Salad", // Name des Gerichts.
        description: "Green salad, Cucumber, Carrots, Parsley, Radishes", // Zutaten.
        priceCents: 790, // Preis: 7,90 Euro.
        image: "assets/images/mini-green-salad.png" // Bildpfad.
    },

    { // Beginnt Datensatz 11.
        id: 11, // Eindeutige Identifikationsnummer.
        category: "salad", // Zugehörige Gerichtskategorie.
        name: "Green Salad with sea food", // Name des Gerichts.
        description: "Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill", // Zutaten.
        priceCents: 1690, // Preis: 16,90 Euro.
        image: "assets/images/green-salad-with-sea-food.png" // Bildpfad.
    },

    { // Beginnt Datensatz 12.
        id: 12, // Eindeutige Identifikationsnummer.
        category: "salad", // Zugehörige Gerichtskategorie.
        name: "Vegan green salad with tofu", // Name des Gerichts.
        description: "Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu, Peanuts", // Zutaten.
        priceCents: 1490, // Preis: 14,90 Euro.
        image: "assets/images/vegan-green-salad-with-tofu.png" // Bildpfad.
    },

]; // ]; // Beendet das vollständige Array mit allen 12 Gerichten in den 3 Kategorien. 