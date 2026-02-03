// Topic Data Configuration

const topicData = {
  algebra1: {
    title: "Algebra 1",
    image: "./images/algebra1.jpg",
    why: "Algebra 1 is the foundation of all higher mathematics. It introduces you to variables, equations, and functions that are essential for problem-solving in everyday life and advanced studies.",
    explanation:
      "In Algebra 1, you'll learn to work with linear equations, solve for unknown variables, understand the concept of functions, and graph equations on a coordinate plane. This course builds critical thinking and analytical skills.",
    quizGenerator: generateAlgebra1Questions,
    videos: [
      {
        title: "📺 Introduction to Algebra 1",
        url: "https://www.youtube.com/watch?v=MHeirBPOI6w",
      },
      {
        title: "📺 Solving Linear Equations",
        url: "https://www.youtube.com/watch?v=7DPWeBszNSM",
      },
      {
        title: "📺 Graphing Functions",
        url: "https://www.youtube.com/watch?v=kvU9sOzT2mk",
      },
    ],
  },
  algebra2: {
    title: "Algebra 2",
    image: "./images/algebra2.jpg",
    why: "Algebra 2 builds on Algebra 1 concepts and introduces more complex functions, including quadratic, exponential, and logarithmic functions. It's crucial for STEM fields and standardized tests.",
    explanation:
      "Algebra 2 covers polynomials, rational expressions, complex numbers, and conic sections. You'll develop advanced problem-solving skills and learn to model real-world situations mathematically.",
    quizGenerator: generateAlgebra2Questions,
    videos: [
      {
        title: "📺 Quadratic Functions",
        url: "https://www.youtube.com/watch?v=IWigvJcCAJ0",
      },
      {
        title: "📺 Exponential Growth",
        url: "https://www.youtube.com/watch?v=IWigvJcCAJ0",
      },
      {
        title: "📺 Logarithms Explained",
        url: "https://www.youtube.com/watch?v=kqVpPSzkTYA",
      },
    ],
  },
  algebra3: {
    title: "Algebra 3",
    image: "./images/intermediateAlgebra.png",
    why: "Algebra 3 prepares you for calculus and advanced mathematics. It deepens your understanding of functions and introduces trigonometry and analytical geometry.",
    explanation:
      "In Algebra 3, you'll explore advanced functions, matrices, sequences and series, and probability. This course is essential for students pursuing mathematics, engineering, or science careers.",
    quizGenerator: generateAlgebra3Questions,
    videos: [
      {
        title: "📺 Matrix Operations",
        url: "https://www.youtube.com/watch?v=p48uw2vFWQs",
      },
      {
        title: "📺 Sequences and Series",
        url: "https://www.youtube.com/watch?v=Tj89FA-d0f8",
      },
      {
        title: "📺 Introduction to Trigonometry",
        url: "https://www.youtube.com/watch?v=PUB0TaZ7bhA",
      },
    ],
  },
  algebra4: {
    title: "Algebra 4",
    image: "./images/advancedAlgebra.png",
    why: "Algebra 4 focuses on abstract algebraic structures and prepares students for college-level mathematics. It develops rigorous mathematical thinking and proof-writing skills.",
    explanation:
      "Algebra 4 covers topics like groups, rings, fields, and vector spaces. You'll learn to think abstractly about mathematical structures and develop formal proof techniques.",
    quizGenerator: generateAlgebra4Questions,
    videos: [
      {
        title: "📺 Introduction to Abstract Algebra",
        url: "https://www.youtube.com/watch?v=IP7nW_hKB7I",
      },
      {
        title: "📺 Group Theory Basics",
        url: "https://www.youtube.com/watch?v=KufsL2VgELo",
      },
      {
        title: "📺 Ring Theory",
        url: "https://www.youtube.com/watch?v=5pMM-nsZMsc",
      },
    ],
  },
  algebra5: {
    title: "Algebra 5",
    image: "./images/advancedAlgebra.png",
    why: "Algebra 5 represents advanced algebraic theory and is typically studied at the undergraduate or graduate level. It's essential for pure mathematics research and theoretical physics.",
    explanation:
      "Algebra 5 delves into advanced topics such as Galois theory, algebraic geometry, representation theory, and homological algebra. This course is for students serious about pursuing mathematics as a career.",
    quizGenerator: generateAlgebra5Questions,
    videos: [
      {
        title: "📺 Galois Theory Introduction",
        url: "https://www.youtube.com/watch?v=qpARY6uD2M8",
      },
      {
        title: "📺 Algebraic Geometry Basics",
        url: "https://www.youtube.com/watch?v=MflpyJwhMhQ",
      },
      {
        title: "📺 Representation Theory",
        url: "https://www.youtube.com/watch?v=VYzhA_nj0sU",
      },
    ],
  },
};
