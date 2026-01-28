// Topic Data Configuration

const topicData = {
algebra1: {
  title: "Algebra 1",
  image: "./images/algebraOne1.jpg",
  why: "Algebra 1 is the foundation of all higher mathematics. It introduces you to variables, equations, and functions that are essential for problem-solving in everyday life and advanced studies.",
  explanation: `
Algebra 1 introduces you to equations and variables. A variable is the value we are solving for, and it can be any number that makes both sides of an equation equal.

For example, in the expression 3x + 4 = 28, the term 3x means 3 × x, not 3 + x. To solve an equation, we find the value of x that makes both sides equal.

If we test x = 8:
3(8) + 4 = 28  
24 + 4 = 28  
28 = 28  

This shows that x = 8 is the correct solution.

When solving equations like 3x = 9, we divide both sides by 3 because 3x means x added three times. Dividing 9 into three equal parts gives:
9 ÷ 3 = 3

So, x = 3.
`,
  quizGenerator: generateAlgebra1Questions,
  videos: [
    {
      title: "📺 Introduction to Algebra 1",
      url: "https://www.youtube.com",
    },
    {
      title: "📺 Solving Linear Equations",
      url: "https://www.youtube.com",
    },
    {
      title: "📺 Graphing Functions",
      url: "https://www.youtube.com",
    },
  ],
},

  algebra2: {
  title: "Algebra 2",
  image: "./images/algebraTwo1.jpg",
  why: "Algebra 2 expands on the concepts learned in Algebra 1 and introduces more advanced ideas such as quadratic equations, polynomials, and exponential functions. These skills are essential for higher-level math, science, and real-world problem solving.",
  explanation: `
In Algebra 2, you build on your understanding of variables and equations by working with more complex expressions and functions.

You will learn how to solve quadratic equations, factor polynomials, and work with exponents and radicals. Algebra 2 also introduces new types of functions such as exponential and rational functions.

A major focus is understanding how equations behave when graphed. By analyzing graphs, you can see how changing values affects the shape and position of a function.

These skills help you model real-life situations such as population growth, physics problems, and financial calculations.
`,
  quizGenerator: generateAlgebra2Questions,
  videos: [
    {
      title: "📺 Introduction to Algebra 2",
      url: "https://www.youtube.com/watch?v=0EnklHkVKXI",
    },
    {
      title: "📺 Quadratic Equations Explained",
      url: "https://www.youtube.com/watch?v=Z9mZ9Kz6kL0",
    },
    {
      title: "📺 Exponents and Radicals",
      url: "https://www.youtube.com/watch?v=7vGvR7ZCwqk",
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
