function spin() {
    // Generera slumpmässiga nummer mellan 1 och 9 för varje slot
    let slot1 = Math.floor(Math.random() * 9) + 1;
    let slot2 = Math.floor(Math.random() * 9) + 1;
    let slot3 = Math.floor(Math.random() * 9) + 1;

    // Uppdatera HTML med de nya värdena
    document.getElementById('slot1').textContent = slot1;
    document.getElementById('slot2').textContent = slot2;
    document.getElementById('slot3').textContent = slot3;

    // Kontrollera om det är en vinst
    if (slot1 === slot2 && slot2 === slot3) {
        document.getElementById('result').textContent = 'Grattis! Du vann!';
    } else {
        document.getElementById('result').textContent = 'Försök igen!';
    }
}
