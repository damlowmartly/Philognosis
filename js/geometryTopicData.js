// Geometry Topic Data Configuration

const geometryTopicData = {
    geometry1: {
        title: "Geometry 1",
        image: "https://via.placeholder.com/600x400?text=Geometry+1+Demo",
        why: "Geometry 1 introduces you to the basics of shapes, angles, and lines. These foundational concepts are essential for understanding the world around us, from architecture to art.",
        explanation: "In Geometry 1, you'll learn about points, lines, angles, and basic shapes like rectangles and triangles. You'll discover how to calculate perimeters, areas, and work with complementary and supplementary angles.",
        quizGenerator: generateGeometry1Questions,
        videos: [
            { title: "📺 Introduction to Angles", url: "https://www.youtube.com" },
            { title: "📺 Basic Shapes and Perimeter", url: "https://www.youtube.com" },
            { title: "📺 Area of Rectangles", url: "https://www.youtube.com" }
        ]
    },
    geometry2: {
        title: "Geometry 2",
        image: "https://via.placeholder.com/600x400?text=Geometry+2+Demo",
        why: "Geometry 2 dives deep into triangles and the Pythagorean theorem, one of the most important theorems in mathematics. Understanding triangles is crucial for construction, navigation, and problem-solving.",
        explanation: "In Geometry 2, you'll explore different types of triangles, learn the Pythagorean theorem, calculate areas and perimeters, and understand the properties of isosceles and right triangles.",
        quizGenerator: generateGeometry2Questions,
        videos: [
            { title: "📺 Pythagorean Theorem", url: "https://www.youtube.com" },
            { title: "📺 Types of Triangles", url: "https://www.youtube.com" },
            { title: "📺 Triangle Area and Perimeter", url: "https://www.youtube.com" }
        ]
    },
    geometry3: {
        title: "Geometry 3",
        image: "https://via.placeholder.com/600x400?text=Geometry+3+Demo",
        why: "Geometry 3 explores circles and polygons, shapes that appear everywhere in nature and design. From wheels to honeycombs, these shapes are fundamental to engineering and art.",
        explanation: "In Geometry 3, you'll study circles (circumference and area), polygons (interior angles and diagonals), and understand the properties of regular polygons. You'll learn formulas that apply to any multi-sided shape.",
        quizGenerator: generateGeometry3Questions,
        videos: [
            { title: "📺 Circle Properties", url: "https://www.youtube.com" },
            { title: "📺 Polygons and Angles", url: "https://www.youtube.com" },
            { title: "📺 Regular Polygons", url: "https://www.youtube.com" }
        ]
    },
    geometry4: {
        title: "Geometry 4",
        image: "https://via.placeholder.com/600x400?text=Geometry+4+Demo",
        why: "Geometry 4 moves into three-dimensional space, teaching you about solid shapes. Understanding 3D geometry is essential for architecture, manufacturing, and understanding the physical world.",
        explanation: "In Geometry 4, you'll learn about 3D shapes including cubes, rectangular prisms, and cylinders. You'll calculate volumes and surface areas, skills critical for real-world applications.",
        quizGenerator: generateGeometry4Questions,
        videos: [
            { title: "📺 3D Shapes Introduction", url: "https://www.youtube.com" },
            { title: "📺 Volume Calculations", url: "https://www.youtube.com" },
            { title: "📺 Surface Area", url: "https://www.youtube.com" }
        ]
    },
    geometry5: {
        title: "Geometry 5",
        image: "https://via.placeholder.com/600x400?text=Geometry+5+Demo",
        why: "Geometry 5 introduces coordinate geometry and transformations, bridging algebra and geometry. This is fundamental for computer graphics, physics, and advanced mathematics.",
        explanation: "In Geometry 5, you'll work with the coordinate plane, calculate distances and midpoints, and learn about transformations like translations and reflections. These concepts are essential for higher mathematics.",
        quizGenerator: generateGeometry5Questions,
        videos: [
            { title: "📺 Coordinate Plane", url: "https://www.youtube.com" },
            { title: "📺 Distance and Midpoint", url: "https://www.youtube.com" },
            { title: "📺 Transformations", url: "https://www.youtube.com" }
        ]
    }
};
