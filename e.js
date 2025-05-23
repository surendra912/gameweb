const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: 2
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheet", "Cascading Style Sheet", "Computer Style Sheet", "Colorful Style Sheet"],
    answer: 1
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None"],
    answer: 1
  },
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Markup Language", "None"],
    answer: 0
  },
{
question: "What is the square root of 144?",
options: ["11", "12", "13", "14"],
answer: 1
},
{
question: "LCM of 15 and 20 is:",
options: ["60", "45", "30", "15"],
answer: 0
},
{
question: "What is the value of (3² + 4²)?",
options: ["25", "21", "16", "12"],
answer: 0
},
{
question: "Simplify: (2 + 3) × 4",
options: ["20", "14", "16", "18"],
answer: 0
},
{
question: "What is 1/2 of 3/4?",
options: ["3/8", "2/6", "1/4", "3/4"],
answer: 0
},
{
question: "Convert 0.75 into a fraction:",
options: ["3/4", "2/3", "1/2", "4/5"],
answer: 0
},
{
question: "What is the cube of 5?",
options: ["125", "25", "100", "150"],
answer: 0
},
{
question: "Value of 2³ is:",
options: ["6", "8", "4", "10"],
answer: 1
},
{
question: "A triangle has angles 60°, 60°, and:",
options: ["60°", "45°", "30°", "90°"],
answer: 0
},
{
question: "Area of square with side 6cm:",
options: ["36 cm²", "12 cm²", "30 cm²", "24 cm²"],
answer: 0
  },
{
question: "The perimeter of a rectangle with length 10cm and breadth 5cm is:",
options: ["30 cm", "25 cm", "15 cm", "20 cm"],
answer: 0
},
{
question: "Solve: 5² – 3²",
options: ["16", "25", "9", "22"],
answer: 0
},
{
question: "What is 10% of 200?",
options: ["20", "10", "25", "15"],
answer: 0
},
{
question: "Value of 7 + (6 ÷ 3 × 2):",
options: ["11", "13", "9", "10"],
answer: 1
},
{
question: "What is the mean of 5, 10, 15?",
options: ["10", "15", "5", "12"],
answer: 0
},
{
question: "Volume of a cube with side 4 cm:",
options: ["64 cm³", "16 cm³", "48 cm³", "32 cm³"],
answer: 0
},
{
question: "A right angle triangle has one angle:",
options: ["90°", "60°", "45°", "120°"],
answer: 0
},
{
question: "What is 15 ÷ 3 + 2?",
options: ["7", "5", "6", "3"],
answer: 0
},
{
question: "Simplify: 2 × (3 + 4)",
options: ["14", "12", "10", "8"],
answer: 0
},
{
question: "Area of rectangle with l=8cm, b=4cm:",
options: ["32 cm²", "12 cm²", "16 cm²", "24 cm²"],
answer: 0
  },
{
question: "Find the HCF of 18 and 24:",
options: ["6", "12", "3", "9"],
answer: 0
},
{
question: "What is the value of π (approximately)?",
options: ["3.14", "2.71", "1.41", "1.73"],
answer: 0
},
{
question: "How many degrees in a straight angle?",
options: ["180°", "90°", "120°", "360°"],
answer: 0
},
{
question: "What is the value of 5 × 5 - 5?",
options: ["20", "25", "15", "30"],
answer: 0
},
{
question: "What is the square of 9?",
options: ["81", "72", "64", "99"],
answer: 0
},
{
question: "Convert 1.25 to a fraction:",
options: ["5/4", "4/5", "3/2", "6/5"],
answer: 0
},
{
question: "What is the average of 2, 4, 6, 8?",
options: ["5", "6", "7", "4"],
answer: 0
},
{
question: "Which is a prime number?",
options: ["17", "21", "25", "27"],
answer: 0
},
{
question: "Find the value: 6 + 3 × 2",
options: ["12", "15", "18", "9"],
answer: 0
},
{
question: "Which figure has 3 sides?",
options: ["Triangle", "Square", "Rectangle", "Circle"],
answer: 0
  },
{
question: "Which of these is an even number?",
options: ["16", "13", "19", "27"],
answer: 0
},
{
question: "If x = 2, what is the value of x² + 3x?",
options: ["10", "12", "8", "14"],
answer: 1
},
{
question: "Find the missing number: 2, 4, 6, __, 10",
options: ["7", "8", "9", "6"],
answer: 1
},
{
question: "What is the sum of angles in a triangle?",
options: ["180°", "90°", "360°", "270°"],
answer: 0
},
{
question: "What is the square root of 49?",
options: ["6", "8", "7", "9"],
answer: 2
},
{
question: "Rational number among the following is:",
options: ["3/5", "√2", "π", "√5"],
answer: 0
},
{
question: "Which shape has no sides?",
options: ["Circle", "Triangle", "Hexagon", "Square"],
answer: 0
},
{
question: "What is the perimeter of a square with side 5cm?",
options: ["20 cm", "25 cm", "10 cm", "15 cm"],
answer: 0
},
{
question: "Simplify: 3 × 3 + 4 × 2",
options: ["17", "18", "19", "20"],
answer: 0
},
{
question: "Which of these is divisible by 9?",
options: ["81", "72", "99", "All of these"],
answer: 3
  },
{
question: "What is the value of (6 × 6) – (3 × 2)?",
options: ["30", "36", "33", "24"],
answer: 0
},
{
question: "A polygon with 5 sides is called:",
options: ["Pentagon", "Hexagon", "Octagon", "Triangle"],
answer: 0
},
{
question: "Simplify: 4 × (2 + 3)",
options: ["20", "24", "16", "12"],
answer: 0
},
{
question: "Value of 8³ is:",
options: ["512", "64", "256", "216"],
answer: 0
},
{
question: "What is 2/3 of 18?",
options: ["12", "6", "10", "15"],
answer: 0
},
{
question: "Convert 0.2 into percentage:",
options: ["20%", "2%", "200%", "0.2%"],
answer: 0
},
{
question: "What is the product of first 3 prime numbers?",
options: ["30", "15", "13", "21"],
answer: 0
},
{
question: "If x = 4, find the value of x²:",
options: ["16", "8", "12", "14"],
answer: 0
},
{
question: "Solve: 9 – 3 × 2",
options: ["3", "6", "0", "12"],
answer: 0
},
{
question: "How many zeros are there in one lakh?",
options: ["5", "6", "4", "3"],
answer: 1
  },
{
question: "What is the reciprocal of 5/8?",
options: ["8/5", "5/8", "3/5", "1/8"],
answer: 0
},
{
question: "What is the simple interest on ₹1000 at 5% for 2 years?",
options: ["₹100", "₹200", "₹150", "₹250"],
answer: 0
},
{
question: "Which number is a multiple of both 3 and 4?",
options: ["12", "9", "15", "16"],
answer: 0
},
{
question: "A leap year has how many days?",
options: ["366", "364", "365", "360"],
answer: 0
},
{
question: "The product of 0 and any number is:",
options: ["0", "1", "Same number", "Undefined"],
answer: 0
},
{
question: "What is the perimeter of a circle called?",
options: ["Circumference", "Area", "Radius", "Diameter"],
answer: 0
},
{
question: "If 3 pens cost ₹15, what is the cost of 1 pen?",
options: ["₹5", "₹3", "₹15", "₹10"],
answer: 0
},
{
question: "What is 25% of 80?",
options: ["20", "25", "15", "30"],
answer: 0
},
{
question: "If a = 2 and b = 3, then ab = ?",
options: ["6", "5", "3", "1"],
answer: 0
},
{
question: "What is the next prime number after 19?",
options: ["23", "21", "22", "25"],
answer: 0
  },
{
question: "What is the unit of force?",
options: ["Newton", "Joule", "Watt", "Ampere"],
answer: 0
},
{
question: "The SI unit of electric current is:",
options: ["Ampere", "Volt", "Ohm", "Coulomb"],
answer: 0
},
{
question: "Which of these is a vector quantity?",
options: ["Speed", "Distance", "Displacement", "Time"],
answer: 2
},
{
question: "What is the formula for work done?",
options: ["Force × Distance", "Force / Distance", "Force + Distance", "None of these"],
answer: 0
},
{
question: "The speed of light in vacuum is approximately:",
options: ["3 × 10⁸ m/s", "3 × 10³ m/s", "3 × 10¹² m/s", "3 × 10⁴ m/s"],
answer: 0
},
{
question: "Which of the following has the highest energy?",
options: ["Gamma Rays", "Microwaves", "Infrared", "Radio waves"],
answer: 0
},
{
question: "Which gas is most abundant in the Earth's atmosphere?",
options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
answer: 0
},
{
question: "What is the SI unit of temperature?",
options: ["Celsius", "Fahrenheit", "Kelvin", "Joule"],
answer: 2
},
{
question: "In which state of matter do molecules have the least kinetic energy?",
options: ["Solid", "Liquid", "Gas", "Plasma"],
answer: 0
},
{
question: "Who discovered the law of motion?",
options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileo Galilei"],
answer: 1
  },
{
question: "What is the acceleration due to gravity on Earth?",
options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9.5 m/s²"],
answer: 0
},
{
question: "What is the unit of power?",
options: ["Watt", "Joule", "Newton", "Ampere"],
answer: 0
},
{
question: "What type of wave is light?",
options: ["Transverse wave", "Longitudinal wave", "Mechanical wave", "Both transverse and longitudinal"],
answer: 0
},
{
question: "Which of the following is an example of potential energy?",
options: ["A moving car", "A stretched spring", "A flowing river", "A rotating fan"],
answer: 1
},
{
question: "The SI unit of charge is:",
options: ["Ampere", "Volt", "Coulomb", "Ohm"],
answer: 2
},
{
question: "Which of the following is a non-renewable source of energy?",
options: ["Solar energy", "Wind energy", "Coal", "Hydropower"],
answer: 2
},
{
question: "The resistance of a conductor depends on:",
options: ["Length and area", "Temperature", "Material", "All of these"],
answer: 3
},
{
question: "The force of attraction between two objects is proportional to:",
options: ["The square of the distance between them", "The product of their masses", "The cube of the distance between them", "None of these"],
answer: 1
},
{
question: "Which of these is a conductor of electricity?",
options: ["Wood", "Plastic", "Copper", "Rubber"],
answer: 2
},
{
question: "The law of reflection states that the angle of incidence is equal to:",
options: ["Angle of refraction", "Angle of reflection", "Angle of refraction and reflection", "None of these"],
answer: 1
  },
{
question: "What is the formula for Ohm's law?",
options: ["V = IR", "V = I²R", "V = R/I", "V = I + R"],
answer: 0
},
{
question: "What is the main component of a battery?",
options: ["Anode", "Cathode", "Electrolyte", "All of the above"],
answer: 3
},
{
question: "Which of the following is a scalar quantity?",
options: ["Speed", "Velocity", "Displacement", "Force"],
answer: 0
},
{
question: "What is the unit of frequency?",
options: ["Hertz", "Joule", "Newton", "Ampere"],
answer: 0
},
{
question: "Which of these materials is a good insulator?",
options: ["Copper", "Wood", "Steel", "Aluminum"],
answer: 1
},
{
question: "Which phenomenon explains the formation of a rainbow?",
options: ["Reflection", "Refraction", "Diffraction", "Absorption"],
answer: 1
},
{
question: "The device used to measure electric current is called:",
options: ["Voltmeter", "Ammeter", "Thermometer", "Barometer"],
answer: 1
},
{
question: "Which of the following is a source of electromagnetic waves?",
options: ["Sun", "Electric fan", "Solar panel", "None of these"],
answer: 0
},
{
question: "What is the unit of work?",
options: ["Joule", "Newton", "Watt", "Ampere"],
answer: 0
},
{
question: "Which is the most abundant gas in the Earth's atmosphere?",
options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
answer: 1
  },
{
question: "What is the chemical symbol for water?",
options: ["H2O", "O2", "CO2", "H2"],
answer: 0
},
{
question: "Which element is represented by the symbol 'Na'?",
options: ["Nitrogen", "Sodium", "Nickel", "Neon"],
answer: 1
},
{
question: "What is the atomic number of carbon?",
options: ["6", "12", "8", "10"],
answer: 0
},
{
question: "Which of the following is a noble gas?",
options: ["Oxygen", "Neon", "Chlorine", "Hydrogen"],
answer: 1
},
{
question: "What is the chemical formula for methane?",
options: ["CH4", "C2H6", "C3H8", "C4H10"],
answer: 0
},
{
question: "Which of these elements is a halogen?",
options: ["Fluorine", "Oxygen", "Nitrogen", "Sulfur"],
answer: 0
},
{
question: "What is the most abundant gas in Earth's atmosphere?",
options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
answer: 0
},
{
question: "Which of these is an acid?",
options: ["Sodium hydroxide", "Sulfuric acid", "Sodium chloride", "Potassium chloride"],
answer: 1
},
{
question: "Which element is known as the 'king of chemicals'?",
options: ["Sulfur", "Nitrogen", "Phosphorus", "Carbon"],
answer: 1
},
{
question: "What is the molecular weight of water?",
options: ["18 g/mol", "16 g/mol", "20 g/mol", "15 g/mol"],
answer: 0
  },
{
question: "Which of the following is a compound?",
options: ["Oxygen", "Carbon dioxide", "Helium", "Nitrogen"],
answer: 1
},
{
question: "What is the pH value of pure water?",
options: ["7", "14", "0", "5"],
answer: 0
},
{
question: "Which gas is produced when an acid reacts with a metal?",
options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon dioxide"],
answer: 2
},
{
question: "What is the molecular formula for ammonia?",
options: ["NH3", "H2O", "CO2", "O2"],
answer: 0
},
{
question: "Which of these is a base?",
options: ["Sodium hydroxide", "Sulfuric acid", "Hydrochloric acid", "Acetic acid"],
answer: 0
},
{
question: "What is the atomic number of Oxygen?",
options: ["8", "16", "12", "10"],
answer: 0
},
{
question: "What is the name of the process by which a solid turns directly into a gas?",
options: ["Sublimation", "Condensation", "Evaporation", "Melting"],
answer: 0
},
{
question: "Which of the following is a property of metals?",
options: ["Poor conductor of heat", "Brittle", "Malleable", "Transparent"],
answer: 2
},
{
question: "Which of the following is an example of a physical change?",
options: ["Burning paper", "Rusting iron", "Boiling water", "Cooking food"],
answer: 2
},
{
question: "What is the chemical symbol for potassium?",
options: ["K", "P", "Po", "Ka"],
answer: 0
},
{
question: "Which of these is an example of a noble gas?",
options: ["Oxygen", "Neon", "Carbon dioxide", "Hydrogen"],
answer: 1
},
{
question: "What is the atomic number of Sodium?",
options: ["11", "10", "12", "14"],
answer: 0
},
{
question: "Which of these elements is a metal?",
options: ["Iron", "Oxygen", "Helium", "Neon"],
answer: 0
},
{
question: "What is the chemical formula for sulfuric acid?",
options: ["H2SO4", "HCl", "HNO3", "H2CO3"],
answer: 0
},
{
question: "What is the pH of hydrochloric acid?",
options: ["1", "7", "10", "14"],
answer: 0
},
{
question: "Which gas is used in balloons to make them float?",
options: ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
answer: 1
},
{
question: "What is the common name for sodium chloride?",
options: ["Salt", "Sugar", "Baking soda", "Vinegar"],
answer: 0
},
{
question: "Which of these is a property of acids?",
options: ["Sour taste", "Bitter taste", "Slippery feel", "None of these"],
answer: 0
},
{
question: "What is the chemical formula for carbon dioxide?",
options: ["CO2", "CO", "O2", "C2H6"],
answer: 0
  }
];
let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let timer = 60 * 60;
let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    document.getElementById("timer").innerText = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timer--;

    if (timer < 0) {
      clearInterval(timerInterval);
      submitQuiz();
    }
  }, 1000);
}

function loadQuestion() {
  const q = questions[currentQuestion];
  let html = `<h3>Q${currentQuestion + 1}: ${q.question}</h3>`;
  q.options.forEach((opt, i) => {
    const checked = userAnswers[currentQuestion] === i ? 'checked' : '';
    html += `
      <label>
        <input type="radio" name="option" value="${i}" ${checked} />
        ${opt}
      </label><br/>
    `;
  });
  document.getElementById("quiz-box").innerHTML = html;
}

function saveAnswer() {
  const radios = document.getElementsByName("option");
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      userAnswers[currentQuestion] = parseInt(radios[i].value);
      break;
    }
  }
}

function nextQuestion() {
  saveAnswer();
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

function submitQuiz() {
  clearInterval(timerInterval);
  saveAnswer();

  let incorrectAnswers = questions.map((q, i) => {
    if (userAnswers[i] !== q.answer) {
      return {
        question: q.question,
        selected: q.options[userAnswers[i]] || "Not answered",
        correct: q.options[q.answer]
      };
    }
  }).filter(Boolean);

  let resultHTML = `<h2>Incorrect Answers:</h2>`;
  incorrectAnswers.forEach((item, idx) => {
    resultHTML += `
      <p><strong>Q${idx + 1}: ${item.question}</strong><br/>
      Your Answer: ${item.selected}<br/>
      Correct Answer: ${item.correct}</p>
    `;
  });

  if (incorrectAnswers.length === 0) {
    resultHTML = "<h2>🎉 Great job! All answers correct!</h2>";
  }

  document.getElementById("quiz-box").style.display = "none";
  document.querySelector(".navigation").style.display = "none";
  document.getElementById("result").innerHTML = resultHTML;
}

function restartQuiz() {
  currentQuestion = 0;
  userAnswers = new Array(questions.length).fill(null);
  timer = 60 * 60;
  clearInterval(timerInterval);
  document.getElementById("quiz-box").style.display = "block";
  document.querySelector(".navigation").style.display = "block";
  document.getElementById("result").innerHTML = "";
  startTimer();
  loadQuestion();
}

window.onload = () => {
  loadQuestion();
  startTimer();
};