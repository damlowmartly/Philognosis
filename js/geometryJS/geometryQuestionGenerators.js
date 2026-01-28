// Geometry Question Generator Functions - Expanded to 8 Topics

// Geometry 1: Introduction, Basic Elements, and Notation
function generateGeometry1Questions() {
    const questions = [];
    
    // Basic elements identification
    const elements = [
        { q: "A point is described by:", correct: "A location with no size", type: "choice", options: ["A location with no size", "A straight path", "A flat surface", "A line"] },
        { q: "A line segment has:", correct: "Two endpoints", type: "choice", options: ["Two endpoints", "One endpoint", "No endpoints", "Infinite endpoints"] },
        { q: "A ray has:", correct: "One endpoint", type: "choice", options: ["One endpoint", "Two endpoints", "No endpoints", "Curved path"] },
        { q: "A plane is best described as:", correct: "A flat surface extending forever", type: "choice", options: ["A flat surface extending forever", "A curved line", "A single point", "A solid object"] }
    ];
    
    for (let i = 0; i < 2; i++) {
        const chosen = elements[rand(0, elements.length - 1)];
        questions.push(chosen);
    }
    
    // Notation and symbols
    const notationQuestions = [
        { q: "The symbol ∠ represents:", correct: "An angle", type: "choice", options: ["An angle", "A line", "A point", "A circle"] },
        { q: "The symbol ≅ means:", correct: "Congruent (same size and shape)", type: "choice", options: ["Congruent (same size and shape)", "Similar", "Parallel", "Perpendicular"] },
        { q: "The symbol ∥ means:", correct: "Parallel lines", type: "choice", options: ["Parallel lines", "Perpendicular lines", "Congruent", "Angle"] },
        { q: "The symbol ⊥ means:", correct: "Perpendicular lines", type: "choice", options: ["Perpendicular lines", "Parallel lines", "Equal", "Angle"] }
    ];
    
    for (let i = 0; i < 3; i++) {
        const chosen = notationQuestions[rand(0, notationQuestions.length - 1)];
        questions.push(chosen);
    }
    
    // Why geometry matters
    questions.push({
        q: "Geometry is used in which real-world field?",
        correct: "Architecture and construction",
        type: "choice",
        options: ["Architecture and construction", "Writing poetry", "Playing music", "Cooking recipes"]
    });
    
    // Measuring units
    questions.push({
        q: "Angles are measured in:",
        correct: "Degrees",
        type: "choice",
        options: ["Degrees", "Meters", "Liters", "Kilograms"]
    });
    
    questions.push({
        q: "What does geometry primarily study?",
        correct: "Shapes and spatial relationships",
        type: "choice",
        options: ["Shapes and spatial relationships", "Chemical reactions", "Historical events", "Literary works"]
    });
    
    questions.push({
        q: "A line extends:",
        correct: "Forever in both directions",
        type: "choice",
        options: ["Forever in both directions", "To a fixed length", "Only in one direction", "In a circle"]
    });
    
    questions.push({
        q: "Which unit is commonly used to measure length?",
        correct: "Centimeters",
        type: "choice",
        options: ["Centimeters", "Degrees", "Seconds", "Watts"]
    });
    
    return questions;
}

// Geometry 2: Angles and Angle Relationships
function generateGeometry2Questions() {
    const questions = [];
    
    // Angle types
    const angleTypes = [
        { q: "An angle measuring 45° is:", correct: "Acute", type: "choice", options: ["Acute", "Right", "Obtuse", "Straight"] },
        { q: "An angle measuring 90° is:", correct: "Right", type: "choice", options: ["Right", "Acute", "Obtuse", "Reflex"] },
        { q: "An angle measuring 135° is:", correct: "Obtuse", type: "choice", options: ["Obtuse", "Acute", "Right", "Straight"] },
        { q: "An angle measuring 180° is:", correct: "Straight", type: "choice", options: ["Straight", "Obtuse", "Right", "Reflex"] }
    ];
    
    for (let i = 0; i < 2; i++) {
        const chosen = angleTypes[rand(0, angleTypes.length - 1)];
        questions.push(chosen);
    }
    
    // Complementary angles
    for (let i = 0; i < 2; i++) {
        const angle1 = rand(20, 70);
        const correct = 90 - angle1;
        questions.push({
            q: `Two angles are complementary. If one angle is ${angle1}°, what is the other angle?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Supplementary angles
    for (let i = 0; i < 2; i++) {
        const angle1 = rand(30, 150);
        const correct = 180 - angle1;
        questions.push({
            q: `Two angles are supplementary. If one angle is ${angle1}°, what is the other angle?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Vertical angles
    for (let i = 0; i < 2; i++) {
        const angle = rand(40, 140);
        questions.push({
            q: `Two lines intersect. If one angle is ${angle}°, what is the vertical angle opposite to it?`,
            correct: angle,
            type: "value"
        });
    }
    
    // Adjacent angles concept
    questions.push({
        q: "Adjacent angles share:",
        correct: "A common vertex and side",
        type: "choice",
        options: ["A common vertex and side", "Nothing", "The same measure", "Opposite positions"]
    });
    
    questions.push({
        q: "Complementary angles add up to:",
        correct: "90°",
        type: "choice",
        options: ["90°", "180°", "360°", "270°"]
    });
    
    return questions;
}

// Geometry 3: Parallel Lines and Transversals
function generateGeometry3Questions() {
    const questions = [];
    
    // Parallel lines - corresponding angles
    for (let i = 0; i < 3; i++) {
        const angle = rand(50, 130);
        questions.push({
            q: `A transversal crosses two parallel lines. If one corresponding angle is ${angle}°, what is the other corresponding angle?`,
            correct: angle,
            type: "value"
        });
    }
    
    // Alternate interior angles
    for (let i = 0; i < 3; i++) {
        const angle = rand(60, 120);
        questions.push({
            q: `When a transversal crosses parallel lines, if one alternate interior angle is ${angle}°, what is the other?`,
            correct: angle,
            type: "value"
        });
    }
    
    // Parallel lines concept
    questions.push({
        q: "Parallel lines:",
        correct: "Never intersect",
        type: "choice",
        options: ["Never intersect", "Always intersect", "Intersect at one point", "Form right angles"]
    });
    
    questions.push({
        q: "A transversal is:",
        correct: "A line that crosses two or more lines",
        type: "choice",
        options: ["A line that crosses two or more lines", "A parallel line", "A perpendicular line", "A curved line"]
    });
    
    questions.push({
        q: "Corresponding angles formed by parallel lines and a transversal are:",
        correct: "Equal",
        type: "choice",
        options: ["Equal", "Supplementary", "Complementary", "Unrelated"]
    });
    
    questions.push({
        q: "Alternate interior angles are:",
        correct: "Equal",
        type: "choice",
        options: ["Equal", "Supplementary", "Complementary", "Different"]
    });
    
    return questions;
}

// Geometry 4: Triangles - Basics and Congruence
function generateGeometry4Questions() {
    const questions = [];
    
    // Triangle angle sum
    for (let i = 0; i < 3; i++) {
        const angle1 = rand(40, 70);
        const angle2 = rand(45, 75);
        const correct = 180 - angle1 - angle2;
        questions.push({
            q: `In a triangle, two angles measure ${angle1}° and ${angle2}°. What is the third angle?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Triangle types by sides
    const triangleTypes = [
        { q: "A triangle with all sides equal is called:", correct: "Equilateral", type: "choice", options: ["Equilateral", "Isosceles", "Scalene", "Right"] },
        { q: "A triangle with two equal sides is called:", correct: "Isosceles", type: "choice", options: ["Isosceles", "Equilateral", "Scalene", "Obtuse"] },
        { q: "A triangle with no equal sides is called:", correct: "Scalene", type: "choice", options: ["Scalene", "Equilateral", "Isosceles", "Acute"] }
    ];
    
    for (let i = 0; i < 2; i++) {
        const chosen = triangleTypes[rand(0, triangleTypes.length - 1)];
        questions.push(chosen);
    }
    
    // Triangle angle sum theorem
    questions.push({
        q: "The sum of all angles in a triangle is:",
        correct: "180°",
        type: "choice",
        options: ["180°", "90°", "360°", "270°"]
    });
    
    // Congruence
    questions.push({
        q: "Congruent triangles have:",
        correct: "Same size and shape",
        type: "choice",
        options: ["Same size and shape", "Same shape only", "Different sizes", "No relationship"]
    });
    
    questions.push({
        q: "SSS congruence rule means:",
        correct: "All three sides are equal",
        type: "choice",
        options: ["All three sides are equal", "Two sides are equal", "All angles are equal", "One side is equal"]
    });
    
    questions.push({
        q: "An acute triangle has:",
        correct: "All angles less than 90°",
        type: "choice",
        options: ["All angles less than 90°", "One 90° angle", "One angle greater than 90°", "All equal angles"]
    });
    
    return questions;
}

// Geometry 5: Triangles - Advanced (Pythagorean, Similarity, Area)
function generateGeometry5Questions() {
    const questions = [];
    
    // Pythagorean theorem
    for (let i = 0; i < 3; i++) {
        const a = rand(3, 8);
        const b = rand(3, 8);
        const c = Math.sqrt(a*a + b*b);
        const correct = Math.round(c);
        questions.push({
            q: `In a right triangle with legs ${a} and ${b}, what is the hypotenuse (rounded to nearest whole number)?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Triangle area
    for (let i = 0; i < 3; i++) {
        const base = rand(6, 14);
        const height = rand(4, 12);
        const correct = (base * height) / 2;
        questions.push({
            q: `What is the area of a triangle with base ${base} and height ${height}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Similarity
    questions.push({
        q: "Similar triangles have:",
        correct: "Same shape but different size",
        type: "choice",
        options: ["Same shape but different size", "Same size and shape", "Different shapes", "No relationship"]
    });
    
    questions.push({
        q: "The Pythagorean theorem is:",
        correct: "a² + b² = c²",
        type: "choice",
        options: ["a² + b² = c²", "a + b = c", "a × b = c", "a - b = c"]
    });
    
    questions.push({
        q: "The formula for triangle area is:",
        correct: "(base × height) ÷ 2",
        type: "choice",
        options: ["(base × height) ÷ 2", "base × height", "base + height", "base ÷ height"]
    });
    
    questions.push({
        q: "In a right triangle, the longest side is called:",
        correct: "Hypotenuse",
        type: "choice",
        options: ["Hypotenuse", "Base", "Height", "Leg"]
    });
    
    return questions;
}

// Geometry 6: Polygons and Quadrilaterals
function generateGeometry6Questions() {
    const questions = [];
    
    // Interior angles of polygons
    for (let i = 0; i < 3; i++) {
        const sides = rand(4, 8);
        const correct = (sides - 2) * 180;
        questions.push({
            q: `What is the sum of interior angles of a polygon with ${sides} sides?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Quadrilateral types
    const quadTypes = [
        { q: "A quadrilateral with all sides equal and all angles 90° is:", correct: "Square", type: "choice", options: ["Square", "Rectangle", "Rhombus", "Trapezoid"] },
        { q: "A quadrilateral with opposite sides parallel is:", correct: "Parallelogram", type: "choice", options: ["Parallelogram", "Trapezoid", "Kite", "Pentagon"] },
        { q: "A parallelogram with all angles 90° is:", correct: "Rectangle", type: "choice", options: ["Rectangle", "Rhombus", "Trapezoid", "Kite"] },
        { q: "A quadrilateral with all sides equal is:", correct: "Rhombus", type: "choice", options: ["Rhombus", "Rectangle", "Trapezoid", "Kite"] }
    ];
    
    for (let i = 0; i < 3; i++) {
        const chosen = quadTypes[rand(0, quadTypes.length - 1)];
        questions.push(chosen);
    }
    
    // Rectangle perimeter/area
    for (let i = 0; i < 2; i++) {
        const length = rand(5, 12);
        const width = rand(3, 10);
        const perimeter = 2 * (length + width);
        questions.push({
            q: `What is the perimeter of a rectangle with length ${length} and width ${width}?`,
            correct: perimeter,
            type: "value"
        });
    }
    
    questions.push({
        q: "The formula for polygon interior angles is:",
        correct: "(n - 2) × 180°",
        type: "choice",
        options: ["(n - 2) × 180°", "n × 180°", "n × 90°", "(n + 2) × 180°"]
    });
    
    questions.push({
        q: "A polygon is:",
        correct: "A closed figure with straight sides",
        type: "choice",
        options: ["A closed figure with straight sides", "A curved shape", "A 3D object", "An open figure"]
    });
    
    return questions;
}

// Geometry 7: Circles and Circle Theorems
function generateGeometry7Questions() {
    const questions = [];
    
    // Circle circumference (using π ≈ 3)
    for (let i = 0; i < 3; i++) {
        const radius = rand(3, 10);
        const correct = 2 * 3 * radius;
        questions.push({
            q: `What is the circumference of a circle with radius ${radius}? (Use π ≈ 3)`,
            correct: correct,
            type: "value"
        });
    }
    
    // Circle area (using π ≈ 3)
    for (let i = 0; i < 3; i++) {
        const radius = rand(2, 8);
        const correct = 3 * radius * radius;
        questions.push({
            q: `What is the area of a circle with radius ${radius}? (Use π ≈ 3)`,
            correct: correct,
            type: "value"
        });
    }
    
    // Circle definitions
    questions.push({
        q: "The diameter of a circle is:",
        correct: "Twice the radius",
        type: "choice",
        options: ["Twice the radius", "Half the radius", "Equal to the radius", "The circumference"]
    });
    
    questions.push({
        q: "A chord is:",
        correct: "A line segment connecting two points on a circle",
        type: "choice",
        options: ["A line segment connecting two points on a circle", "The center of a circle", "Half of a circle", "The radius"]
    });
    
    questions.push({
        q: "The formula for circle area is:",
        correct: "πr²",
        type: "choice",
        options: ["πr²", "2πr", "πd", "r²"]
    });
    
    questions.push({
        q: "The distance from the center to the edge of a circle is:",
        correct: "Radius",
        type: "choice",
        options: ["Radius", "Diameter", "Circumference", "Chord"]
    });
    
    return questions;
}

// Geometry 8: 3D Geometry, Coordinate Geometry & Proofs
function generateGeometry8Questions() {
    const questions = [];
    
    // 3D shapes - volume
    for (let i = 0; i < 2; i++) {
        const side = rand(3, 8);
        const correct = side * side * side;
        questions.push({
            q: `What is the volume of a cube with side length ${side}?`,
            correct: correct,
            type: "value"
        });
    }
    
    // Distance formula
    for (let i = 0; i < 2; i++) {
        const x1 = rand(1, 4);
        const y1 = rand(1, 4);
        const x2 = rand(6, 10);
        const y2 = rand(6, 10);
        const distance = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
        const correct = Math.round(distance);
        questions.push({
            q: `What is the distance between points (${x1}, ${y1}) and (${x2}, ${y2})? (Round to nearest whole number)`,
            correct: correct,
            type: "value"
        });
    }
    
    // Midpoint
    for (let i = 0; i < 2; i++) {
        const x1 = rand(2, 6);
        const y1 = rand(2, 6);
        const x2 = rand(8, 14);
        const y2 = rand(8, 14);
        const midX = (x1 + x2) / 2;
        questions.push({
            q: `What is the x-coordinate of the midpoint between (${x1}, ${y1}) and (${x2}, ${y2})?`,
            correct: midX,
            type: "value"
        });
    }
    
    // Coordinate plane
    questions.push({
        q: "In the coordinate plane, the point (0, 0) is called:",
        correct: "The origin",
        type: "choice",
        options: ["The origin", "The vertex", "The midpoint", "The center"]
    });
    
    // Transformations
    questions.push({
        q: "A translation is:",
        correct: "Sliding a figure without changing its size",
        type: "choice",
        options: ["Sliding a figure without changing its size", "Rotating a figure", "Flipping a figure", "Resizing a figure"]
    });
    
    // Proofs
    questions.push({
        q: "A postulate is:",
        correct: "A statement accepted as true without proof",
        type: "choice",
        options: ["A statement accepted as true without proof", "A proven statement", "A definition", "A hypothesis"]
    });
    
    questions.push({
        q: "The volume of a cube with side s is:",
        correct: "s³",
        type: "choice",
        options: ["s³", "s²", "3s", "6s²"]
    });
    
    return questions;
}
