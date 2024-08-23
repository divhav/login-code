document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Αποτρέπει την προεπιλεγμένη υποβολή της φόρμας

    // Λήψη του κωδικού από το πεδίο εισαγωγής
    var code = document.getElementById('code').value;

    // Λίστα με τους κωδικούς και τους αντίστοιχους συνδέσμους
    var userLinks = {
        '1234': 'https://example.com/page1',
        '1111': 'https://example.com/page2',
        '0000': 'https://example.com/page3',
        // Προσθήκη επιπλέον χρηστών εδώ
    };

    // Έλεγχος αν ο κωδικός υπάρχει στη λίστα
    if(userLinks[code]) {
        // Ανακατεύθυνση στον σύνδεσμο του χρήστη
        window.location.href = userLinks[code];
    } else {
        alert('Wrong Code !');
    }
});
