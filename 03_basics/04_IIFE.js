// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB connected`);
}) (); // FIRST PARENTHESIS EWHERE WE WRITE DEFINATION OF FUNCTION AND IN LATER PARENTHESIS WE USE IT TO EXECUTE THE CODE
// kahi bar global scope ke polllution se bachne ke liye we use IIFE

( (name) => {
    console.log(`DB connecteed to ${name}`);
    
} ) ('vikir');

// agar humne doh IIFE eksath likha hai toh  ;  became very important to execute the code.