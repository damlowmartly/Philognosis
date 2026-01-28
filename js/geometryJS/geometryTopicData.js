// Geometry Topic Data Configuration - Expanded to 8 Topics

const geometryTopicData = {
  geometry1: {
    title: "Geometry 1: Introduction & Basic Elements",
    image: "../../images/geometry1.png",
    why: "Understanding the basic building blocks of geometry (points, lines, angles) is essential for all future geometric concepts. Learning proper notation helps you communicate mathematical ideas clearly.",
    explanation:
      "Geometry 1 introduces what geometry is and why it matters in fields like architecture, engineering, art, and everyday life. You'll learn about basic geometric elements: points (locations with no size), lines (straight paths extending forever), line segments (parts of lines with two endpoints), rays (lines with one endpoint), and planes (flat surfaces). You'll master measuring and notation - understanding units (cm, m, degrees) and geometric symbols like ∠ (angle), ≅ (congruent), ⊥ (perpendicular), ∥ (parallel).",
    quizGenerator: generateGeometry1Questions,
    videos: [
      {
        title: "📺 What is Geometry?",
        url: "https://www.youtube.com/watch?v=302eJ3TzJQU",
      },
      {
        title: "📺 Points, Lines, and Planes",
        url: "https://www.youtube.com/watch?v=k5etrWdIY6o",
      },
      {
        title: "📺 Geometric Notation",
        url: "https://www.youtube.com/watch?v=zRKZ0-kOUZM",
      },
    ],
  },
  geometry2: {
    title: "Geometry 2: Angles & Angle Relationships",
    image: "../../images/geometry2.png",
    why: "Angles are everywhere - from the corners of buildings to the hands of a clock. Understanding angle relationships is crucial for solving geometric problems and unlocks many important theorems.",
    explanation:
      "Geometry 2 focuses entirely on angles and how they interact. You'll classify angles by measure: acute (< 90°), right (= 90°), obtuse (90° < angle < 180°), and straight (= 180°). You'll master angle relationships: complementary angles (add to 90°), supplementary angles (add to 180°), vertical angles (opposite angles when lines intersect - always equal), and adjacent angles (share a common vertex and side). These concepts are foundational for all future geometry.",
    quizGenerator: generateGeometry2Questions,
    videos: [
      {
        title: "📺 Types of Angles",
        url: "https://www.youtube.com/watch?v=UsE1hu-q0Cs",
      },
      {
        title: "📺 Complementary and Supplementary Angles",
        url: "https://www.youtube.com/watch?v=Qpq_XEeBBZw",
      },
      {
        title: "📺 Vertical and Adjacent Angles",
        url: "https://www.youtube.com/watch?v=08UccEsoKN4",
      },
    ],
  },
  geometry3: {
    title: "Geometry 3: Parallel Lines & Transversals",
    image: "../../images/geometry3.jpg",
    why: "Parallel lines appear everywhere from railroad tracks to architectural designs. Understanding how transversals interact with parallel lines is essential for geometric proofs and real-world applications.",
    explanation:
      "Geometry 3 explores parallel lines (lines that never intersect) and transversals (lines that cross two or more other lines). You'll discover powerful angle relationships: corresponding angles are equal, alternate interior angles are equal, and alternate exterior angles are equal. You'll also learn about consecutive interior angles (supplementary). These properties are critical for proving lines are parallel and for solving complex geometric problems.",
    quizGenerator: generateGeometry3Questions,
    videos: [
      {
        title: "📺 Parallel Lines Introduction",
        url: "https://www.youtube.com/watch?v=HdNCiP5znT8",
      },
      {
        title: "📺 Transversals and Angle Relationships",
        url: "https://www.youtube.com/watch?v=e4o7X6LyX-I",
      },
      {
        title: "📺 Proving Lines Parallel",
        url: "https://www.youtube.com/watch?v=yLWm_IlWBIg",
      },
    ],
  },
  geometry4: {
    title: "Geometry 4: Triangles - Basics & Congruence",
    image: "../../images/geometry4.png",
    why: "Triangles are the simplest polygon and the foundation for understanding all other polygons. They're used in construction, navigation, surveying, and countless other fields.",
    explanation:
      "Geometry 4 introduces triangles comprehensively. You'll learn the triangle angle-sum theorem (angles always add to 180°). You'll classify triangles by sides: equilateral (all sides equal), isosceles (two sides equal), scalene (no sides equal), and by angles: acute (all angles < 90°), right (one 90° angle), obtuse (one angle > 90°). You'll master triangle congruence - when two triangles are exactly the same size and shape. Learn the congruence rules: SSS (Side-Side-Side), SAS (Side-Angle-Side), ASA (Angle-Side-Angle), and AAS (Angle-Angle-Side).",
    quizGenerator: generateGeometry4Questions,
    videos: [
      {
        title: "📺 Triangle Basics",
        url: "https://www.youtube.com/watch?v=q7vI2oXL0gQ",
      },
      {
        title: "📺 Classifying Triangles",
        url: "https://www.youtube.com/watch?v=H62faKsyemc ",
      },
      {
        title: "📺 Triangle Congruence Rules",
        url: "https://www.youtube.com/watch?v=vGuiy7NnJlM",
      },
    ],
  },
  geometry5: {
    title: "Geometry 5: Triangles - Advanced Topics",
    image: "../../images/geometry5.jpg",
    why: "The Pythagorean theorem is one of the most famous and useful formulas in all of mathematics. Triangle similarity and area calculations are essential for real-world problem-solving in construction, physics, and engineering.",
    explanation:
      "Geometry 5 covers advanced triangle concepts. You'll master the Pythagorean theorem (a² + b² = c²) for finding sides of right triangles - crucial for distance calculations, construction, and physics. You'll learn to calculate triangle area using ½(base × height) and understand when triangles are similar (same shape, different size). Learn similarity rules: AA (Angle-Angle), SAS (Side-Angle-Side similarity), and SSS (Side-Side-Side similarity). You'll also explore triangle perimeters, medians, and altitudes.",
    quizGenerator: generateGeometry5Questions,
    videos: [
      {
        title: "📺 Pythagorean Theorem",
        url: "https://www.youtube.com/watch?v=nCD-bAEbB3I",
      },
      {
        title: "📺 Triangle Area and Perimeter",
        url: "https://www.youtube.com/watch?v=JCWJihpZ-Lo",
      },
      {
        title: "📺 Similar Triangles",
        url: "https://www.youtube.com/watch?v=YiFwvAFk-xs",
      },
    ],
  },
  geometry6: {
    title: "Geometry 6: Polygons & Quadrilaterals",
    image: "../../images/geometry6.jpg",
    why: "Polygons and quadrilaterals appear everywhere in design, architecture, and nature. Understanding their properties is essential for geometry, art, construction, and computer graphics.",
    explanation:
      "Geometry 6 expands beyond triangles to multi-sided figures. You'll learn about polygons (closed figures with straight sides) and calculate their interior angles using (n-2)×180° and exterior angles (always sum to 360°). You'll study quadrilaterals in depth: squares (all sides equal, all angles 90°), rectangles (opposite sides equal, all angles 90°), parallelograms (opposite sides parallel and equal), trapezoids (one pair of parallel sides), rhombuses (all sides equal), and kites (two pairs of adjacent equal sides). You'll calculate perimeters and areas for each shape.",
    quizGenerator: generateGeometry6Questions,
    videos: [
      {
        title: "📺 Polygons and Interior Angles",
        url: "https://www.youtube.com/watch?v=9_Y8P3oHwL0",
      },
      {
        title: "📺 Quadrilaterals Overview",
        url: "https://www.youtube.com/watch?v=ogcH3eM5beM",
      },
      {
        title: "📺 Properties of Parallelograms",
        url: "https://www.youtube.com/watch?v=ogcH3eM5beM",
      },
    ],
  },
  geometry7: {
    title: "Geometry 7: Circles & Circle Theorems",
    image: "../../images/geometry7.png",
    why: "Circles are fundamental shapes in nature, technology, and design - from wheels to planets to gears. Understanding circles is essential for engineering, physics, and advanced mathematics.",
    explanation:
      "Geometry 7 focuses on circles and their properties. You'll learn circle components: center, radius (distance from center to edge), diameter (twice the radius), chord (line segment connecting two points on circle), arc (part of the circumference), and sector (pie slice). You'll master circle formulas: circumference (2πr or πd) and area (πr²). You'll explore circle theorems: inscribed angles, central angles, angles formed by chords, secants, and tangents. These concepts are crucial for trigonometry and calculus.",
    quizGenerator: generateGeometry7Questions,
    videos: [
      {
        title: "📺 Circle Basics",
        url: "https://www.youtube.com/watch?v=Fzaof9cX-PM",
      },
      {
        title: "📺 Circle Circumference and Area",
        url: "https://www.youtube.com/watch?v=O-cawByg2aA",
      },
      {
        title: "📺 Circle Theorems",
        url: "https://www.youtube.com/watch?v=O-cawByg2aA",
      },
    ],
  },
  geometry8: {
    title: "Geometry 8: 3D Geometry, Coordinate Geometry & Proofs",
    image: "../../images/geometry8.png",
    why: "3D geometry helps you understand the physical world around you. Coordinate geometry bridges algebra and geometry, essential for computer graphics, physics, and calculus. Proofs develop critical thinking and logical reasoning.",
    explanation:
      "Geometry 8 covers three advanced topics. First, 3D geometry: learn about cubes, rectangular prisms, cylinders, cones, spheres, and pyramids. Calculate volume and surface area for each. Second, coordinate geometry: work with the coordinate plane, plot points (x, y), use the distance formula √[(x₂-x₁)² + (y₂-y₁)²], midpoint formula ((x₁+x₂)/2, (y₁+y₂)/2), and slope (rise/run). Study transformations: translations (sliding), rotations (turning), reflections (flipping), and dilations (resizing). Third, geometric proofs: learn to use definitions, postulates (statements accepted as true), and theorems (proven statements) to prove geometric relationships using two-column proofs, paragraph proofs, and flowchart proofs.",
    quizGenerator: generateGeometry8Questions,
    videos: [
      {
        title: "📺 3D Shapes and Volume",
        url: "https://www.youtube.com/watch?v=wWL03U_BgvU",
      },
      {
        title: "📺 Coordinate Geometry",
        url: "https://www.youtube.com/watch?v=wWL03U_BgvU",
      },
      {
        title: "📺 Introduction to Geometric Proofs",
        url: "https://www.youtube.com/watch?v=779-nVrrDiQ",
      },
    ],
  },
};
