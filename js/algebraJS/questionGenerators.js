// Question Generator Functions

// Generate random questions for Algebra 1
function generateAlgebra1Questions() {
    const questions = [];
    
    // Type 1: ax + b = c (solve for x)
    for (let i = 0; i < 3; i++) {
        const a = rand(2, 9);
        const b = rand(1, 15);
        const x = rand(1, 10);
        const c = a * x + b;
        const correct = x;
        questions.push({
            q: `Solve for x: ${a}x + ${b} = ${c}`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 2: ax - b = c (solve for x)
    for (let i = 0; i < 2; i++) {
        const a = rand(2, 8);
        const b = rand(1, 12);
        const x = rand(2, 10);
        const c = a * x - b;
        const correct = x;
        questions.push({
            q: `Solve for x: ${a}x - ${b} = ${c}`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 3: x/a = b (solve for x)
    for (let i = 0; i < 2; i++) {
        const a = rand(2, 6);
        const b = rand(2, 8);
        const correct = a * b;
        questions.push({
            q: `Solve for x: x/${a} = ${b}`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 4: Simple addition/subtraction
    for (let i = 0; i < 2; i++) {
        const a = rand(1, 20);
        const b = rand(1, 15);
        const correct = a + b;
        questions.push({
            q: `What is ${a} + ${b}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 5: x - a = b (solve for x)
    const a5 = rand(5, 15);
    const b5 = rand(1, 10);
    questions.push({
        q: `Solve for x: x - ${a5} = ${b5}`,
        correct: a5 + b5,
        type: "value"
    });
    
    return questions;
}

// Generate random questions for Algebra 2
function generateAlgebra2Questions() {
    const questions = [];
    
    // Type 1: x² = a (solve for x)
    for (let i = 0; i < 3; i++) {
        const a = rand(2, 6);
        const correct = a * a;
        questions.push({
            q: `What is x if x² = ${correct}?`,
            correct: a,
            type: "value"
        });
    }
    
    // Type 2: a² + b²
    for (let i = 0; i < 2; i++) {
        const a = rand(2, 5);
        const b = rand(2, 5);
        const correct = a*a + b*b;
        questions.push({
            q: `Calculate: ${a}² + ${b}²`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 3: Powers (a^b)
    for (let i = 0; i < 2; i++) {
        const a = rand(2, 4);
        const b = rand(2, 3);
        const correct = Math.pow(a, b);
        questions.push({
            q: `What is ${a}^${b}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 4: Square roots
    for (let i = 0; i < 2; i++) {
        const a = rand(2, 7);
        const correct = a;
        questions.push({
            q: `What is √${a*a}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 5: a² - b²
    const a5 = rand(5, 8);
    const b5 = rand(2, 4);
    questions.push({
        q: `Calculate: ${a5}² - ${b5}²`,
        correct: a5*a5 - b5*b5,
        type: "value"
    });
    
    return questions;
}

// Generate random questions for Algebra 3
function generateAlgebra3Questions() {
    const questions = [];
    
    // Type 1: Sum of sequence (1+2+3+...+n)
    for (let i = 0; i < 3; i++) {
        const n = rand(5, 10);
        const correct = (n * (n + 1)) / 2;
        questions.push({
            q: `Sum of 1+2+3+...+${n} = ?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 2: Factorial
    for (let i = 0; i < 2; i++) {
        const n = rand(3, 5);
        let correct = 1;
        for (let j = 2; j <= n; j++) correct *= j;
        questions.push({
            q: `What is ${n}! (factorial)?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 3: Geometric sequence
    for (let i = 0; i < 2; i++) {
        const a = rand(2, 3);
        const r = rand(2, 3);
        const n = rand(3, 4);
        const correct = a * Math.pow(r, n-1);
        questions.push({
            q: `Geometric sequence: first term=${a}, ratio=${r}. What is term ${n}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 4: Powers of 3
    for (let i = 0; i < 2; i++) {
        const n = rand(2, 4);
        const correct = Math.pow(3, n);
        questions.push({
            q: `What is 3^${n}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 5: Arithmetic sequence
    const a5 = rand(2, 5);
    const d5 = rand(2, 4);
    const n5 = rand(4, 6);
    questions.push({
        q: `Arithmetic sequence: first=${a5}, difference=${d5}. What is term ${n5}?`,
        correct: a5 + (n5-1)*d5,
        type: "value"
    });
    
    return questions;
}

// Generate random questions for Algebra 4
function generateAlgebra4Questions() {
    const questions = [];
    
    // Type 1: Modulo arithmetic
    for (let i = 0; i < 3; i++) {
        const a = rand(10, 25);
        const b = rand(3, 7);
        const correct = a % b;
        questions.push({
            q: `What is ${a} mod ${b}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 2: GCD (greatest common divisor)
    for (let i = 0; i < 2; i++) {
        const g = rand(2, 5);
        const m1 = rand(2, 4);
        const m2 = rand(2, 4);
        const a = g * m1;
        const b = g * m2;
        questions.push({
            q: `What is gcd(${a}, ${b})?`,
            correct: g,
            type: "value"
        });
    }
    
    // Type 3: Set cardinality
    for (let i = 0; i < 2; i++) {
        const n = rand(3, 8);
        questions.push({
            q: `How many elements in a set with ${n} distinct items?`,
            correct: n,
            type: "value"
        });
    }
    
    // Type 4: Binary addition
    for (let i = 0; i < 2; i++) {
        const a = rand(1, 7);
        const b = rand(1, 7);
        const correct = a + b;
        questions.push({
            q: `In decimal: ${a} + ${b} = ?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 5: Absolute value
    const a5 = rand(-15, -5);
    questions.push({
        q: `What is |${a5}| (absolute value)?`,
        correct: Math.abs(a5),
        type: "value"
    });
    
    return questions;
}

// Generate random questions for Algebra 5
function generateAlgebra5Questions() {
    const questions = [];
    
    // Type 1: Polynomial degree questions
    for (let i = 0; i < 3; i++) {
        const n = rand(2, 5);
        questions.push({
            q: `What is the degree of x^${n}?`,
            correct: n,
            type: "value"
        });
    }
    
    // Type 2: Vector dimension
    for (let i = 0; i < 2; i++) {
        const n = rand(2, 6);
        questions.push({
            q: `What is the dimension of ℝ^${n}?`,
            correct: n,
            type: "value"
        });
    }
    
    // Type 3: LCM (least common multiple)
    for (let i = 0; i < 2; i++) {
        const a = rand(2, 6);
        const b = rand(2, 6);
        const lcm = (a * b) / gcd(a, b);
        questions.push({
            q: `What is lcm(${a}, ${b})?`,
            correct: lcm,
            type: "value"
        });
    }
    
    // Type 4: Roots of unity
    for (let i = 0; i < 2; i++) {
        const n = rand(2, 8);
        questions.push({
            q: `How many ${n}th roots of unity exist?`,
            correct: n,
            type: "value"
        });
    }
    
    // Type 5: Powers of i (imaginary unit)
    const n5 = rand(4, 12);
    const results = [1, 'i', -1, '-i'];
    const idx = n5 % 4;
    questions.push({
        q: `What is i^${n5}? (Enter: 1 for 1, 2 for i, 3 for -1, 4 for -i)`,
        correct: idx === 0 ? 1 : idx === 1 ? 2 : idx === 2 ? 3 : 4,
        type: "value"
    });
    
    return questions;
}
