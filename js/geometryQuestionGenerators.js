// Geometry Question Generator Functions

// Generate random questions for Geometry 1 (Basic shapes, angles, lines)
function generateGeometry1Questions() {
    const questions = [];
    
    // Type 1: Angle calculations (complementary angles)
    for (let i = 0; i < 3; i++) {
        const angle1 = rand(20, 70);
        const correct = 90 - angle1;
        questions.push({
            q: `Two angles are complementary. If one angle is ${angle1}°, what is the other angle?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 2: Supplementary angles
    for (let i = 0; i < 2; i++) {
        const angle1 = rand(80, 140);
        const correct = 180 - angle1;
        questions.push({
            q: `Two angles are supplementary. If one angle is ${angle1}°, what is the other angle?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 3: Perimeter of rectangle
    for (let i = 0; i < 2; i++) {
        const length = rand(5, 15);
        const width = rand(3, 10);
        const correct = 2 * (length + width);
        questions.push({
            q: `What is the perimeter of a rectangle with length ${length} and width ${width}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 4: Area of rectangle
    for (let i = 0; i < 2; i++) {
        const length = rand(4, 12);
        const width = rand(3, 9);
        const correct = length * width;
        questions.push({
            q: `What is the area of a rectangle with length ${length} and width ${width}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 5: Angles in a triangle sum
    const angle1 = rand(40, 60);
    const angle2 = rand(50, 70);
    questions.push({
        q: `In a triangle, two angles are ${angle1}° and ${angle2}°. What is the third angle?`,
        correct: 180 - angle1 - angle2,
        type: "value"
    });
    
    return questions;
}

// Generate random questions for Geometry 2 (Triangles, Pythagorean theorem)
function generateGeometry2Questions() {
    const questions = [];
    
    // Type 1: Pythagorean theorem (finding hypotenuse)
    for (let i = 0; i < 3; i++) {
        const a = rand(3, 8);
        const b = rand(3, 8);
        const correct = Math.sqrt(a*a + b*b);
        const roundedCorrect = Math.round(correct);
        questions.push({
            q: `In a right triangle, if legs are ${a} and ${b}, what is the hypotenuse (rounded)?`,
            correct: roundedCorrect,
            type: "value"
        });
    }
    
    // Type 2: Area of triangle
    for (let i = 0; i < 2; i++) {
        const base = rand(6, 16);
        const height = rand(4, 12);
        const correct = (base * height) / 2;
        questions.push({
            q: `What is the area of a triangle with base ${base} and height ${height}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 3: Isosceles triangle angles
    for (let i = 0; i < 2; i++) {
        const baseAngle = rand(40, 70);
        const correct = 180 - 2 * baseAngle;
        questions.push({
            q: `In an isosceles triangle, two base angles are ${baseAngle}° each. What is the vertex angle?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 4: Perimeter of triangle
    for (let i = 0; i < 2; i++) {
        const a = rand(5, 10);
        const b = rand(6, 12);
        const c = rand(7, 11);
        const correct = a + b + c;
        questions.push({
            q: `What is the perimeter of a triangle with sides ${a}, ${b}, and ${c}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 5: Right triangle with 3-4-5 ratio
    const scale = rand(2, 5);
    questions.push({
        q: `In a right triangle with legs ${3 * scale} and ${4 * scale}, what is the hypotenuse?`,
        correct: 5 * scale,
        type: "value"
    });
    
    return questions;
}

// Generate random questions for Geometry 3 (Circles, polygons)
function generateGeometry3Questions() {
    const questions = [];
    
    // Type 1: Circumference of circle (using C = 2πr, approximating π as 3)
    for (let i = 0; i < 3; i++) {
        const radius = rand(3, 10);
        const correct = 2 * 3 * radius; // Using π ≈ 3 for simplicity
        questions.push({
            q: `What is the circumference of a circle with radius ${radius}? (Use π ≈ 3)`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 2: Area of circle (A = πr², using π ≈ 3)
    for (let i = 0; i < 2; i++) {
        const radius = rand(3, 8);
        const correct = 3 * radius * radius;
        questions.push({
            q: `What is the area of a circle with radius ${radius}? (Use π ≈ 3)`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 3: Interior angles of polygon
    for (let i = 0; i < 2; i++) {
        const sides = rand(4, 7);
        const correct = (sides - 2) * 180;
        questions.push({
            q: `What is the sum of interior angles of a ${sides}-sided polygon?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 4: Number of diagonals in polygon
    for (let i = 0; i < 2; i++) {
        const sides = rand(4, 8);
        const correct = sides * (sides - 3) / 2;
        questions.push({
            q: `How many diagonals does a ${sides}-sided polygon have?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 5: Each interior angle of regular polygon
    const sides5 = rand(3, 6);
    questions.push({
        q: `What is each interior angle of a regular ${sides5}-sided polygon?`,
        correct: ((sides5 - 2) * 180) / sides5,
        type: "value"
    });
    
    return questions;
}

// Generate random questions for Geometry 4 (3D shapes, surface area, volume)
function generateGeometry4Questions() {
    const questions = [];
    
    // Type 1: Volume of cube
    for (let i = 0; i < 3; i++) {
        const side = rand(3, 8);
        const correct = side * side * side;
        questions.push({
            q: `What is the volume of a cube with side length ${side}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 2: Volume of rectangular prism
    for (let i = 0; i < 2; i++) {
        const length = rand(3, 8);
        const width = rand(3, 7);
        const height = rand(4, 9);
        const correct = length * width * height;
        questions.push({
            q: `What is the volume of a box with dimensions ${length} × ${width} × ${height}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 3: Surface area of cube
    for (let i = 0; i < 2; i++) {
        const side = rand(3, 7);
        const correct = 6 * side * side;
        questions.push({
            q: `What is the surface area of a cube with side length ${side}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 4: Volume of cylinder (V = πr²h, using π ≈ 3)
    for (let i = 0; i < 2; i++) {
        const radius = rand(2, 5);
        const height = rand(4, 10);
        const correct = 3 * radius * radius * height;
        questions.push({
            q: `What is the volume of a cylinder with radius ${radius} and height ${height}? (Use π ≈ 3)`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 5: Surface area of rectangular prism
    const l5 = rand(3, 6);
    const w5 = rand(3, 6);
    const h5 = rand(4, 8);
    questions.push({
        q: `What is the surface area of a box ${l5} × ${w5} × ${h5}?`,
        correct: 2 * (l5*w5 + l5*h5 + w5*h5),
        type: "value"
    });
    
    return questions;
}

// Generate random questions for Geometry 5 (Coordinate geometry, transformations)
function generateGeometry5Questions() {
    const questions = [];
    
    // Type 1: Distance between two points on same horizontal line
    for (let i = 0; i < 3; i++) {
        const x1 = rand(1, 8);
        const x2 = rand(10, 18);
        const correct = x2 - x1;
        questions.push({
            q: `What is the distance between points (${x1}, 5) and (${x2}, 5)?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 2: Distance between two points on same vertical line
    for (let i = 0; i < 2; i++) {
        const y1 = rand(2, 8);
        const y2 = rand(12, 20);
        const correct = y2 - y1;
        questions.push({
            q: `What is the distance between points (3, ${y1}) and (3, ${y2})?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 3: Midpoint x-coordinate
    for (let i = 0; i < 2; i++) {
        const x1 = rand(2, 8);
        const x2 = rand(10, 18);
        const correct = (x1 + x2) / 2;
        questions.push({
            q: `What is the x-coordinate of the midpoint between (${x1}, 0) and (${x2}, 0)?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 4: Translation (adding to x-coordinate)
    for (let i = 0; i < 2; i++) {
        const x = rand(3, 10);
        const shift = rand(4, 8);
        const correct = x + shift;
        questions.push({
            q: `If point (${x}, 5) is translated ${shift} units right, what is the new x-coordinate?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Type 5: Reflection across y-axis (negating x-coordinate)
    const x5 = rand(5, 15);
    questions.push({
        q: `If point (${x5}, 7) is reflected across the y-axis, what is the new x-coordinate?`,
        correct: -x5,
        type: "value"
    });
    
    return questions;
}
