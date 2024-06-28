document.addEventListener('DOMContentLoaded', () => {
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBJJ5Wwv7KJeCSEWwYiKrWE8Du4QRi7Rq8",
        authDomain: "api-visitor.firebaseapp.com",
        databaseURL: "https://api-visitor-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "api-visitor",
        storageBucket: "api-visitor.appspot.com",
        messagingSenderId: "1077996878891",
        appId: "1:1077996878891:web:a8421644ed3879fcdbfe6e"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    // Function to update the visit count
    function updateVisitCount() {
        const visitCountRef = database.ref('visitCount');

        visitCountRef.transaction(currentCount => {
            //console.log('Current Count:', currentCount);
            if (currentCount === null) {
                return 1; // Initial count
            }
            return currentCount + 1; // Increment count
        }).then(() => {
            console.log('Visit count updated');
        }).catch(error => {
            console.error('Error updating visit count:', error);
        });
    }

    // Call the function to update the visit count
    updateVisitCount();
});