// Utility Functions

// Random number generator helper
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function for GCD (Greatest Common Divisor)
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
