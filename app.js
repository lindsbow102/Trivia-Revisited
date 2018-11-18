// CLICK EVENTS FOR START AND DONE BUTTONS
$("#start").on("click", e => {
  game.start();
});

$(document).on("click", "#done", e => {
  game.done();
});

// VARIABLES
const questions = [
  {
    question: "The Grand Canyon is how long (in miles)?",
    choices: ["227", "150", "90", "400"],
    correctAnswer: "227"
  },
  {
    question: "Arizona is roughly the size of what country?",
    choices: ["Spain", "Haiti", "Italy", "South Korea"],
    correctAnswer: "Italy"
  },
  {
    question: "What is the official state flower of Arizona?",
    choices: [
      "The Saguaro Cactus Blossom",
      "The Desert Marigold",
      "Jumping Cholla",
      "Yellow Paloverde"
    ],
    correctAnswer: "The Saguaro Cactus Blossom"
  },
  {
    question: "As a percentage, how much does the sun shine in Arizona?",
    choices: ["75%", "95%", "100%", "85%"],
    correctAnswer: "85%"
  },
  {
    question: "Which famous structure has been reconstructed in Lake Havasu?",
    choices: ["Eiffel Tower", "London Bridge", "Burj Khalifa", "Gateway Arch"],
    correctAnswer: "London Bridge"
  },
  {
    question: "By law, how old must one be to purchase spray paint in Tempe?",
    choices: ["16 years old", "18 years old", "21 years old", "12 years old"],
    correctAnswer: "18 years old"
  },
  {
    question: "What is the official state tree of Arizona?",
    choices: ["Desert Ironwood", "Mesquite", "Palo Verde", "Parkinsonia"],
    correctAnswer: "Palo Verde"
  },
  {
    question: "Arizona leads the nation in the production of which mineral?",
    choices: ["Manganese", "Gold", "Chromite", "Copper"],
    correctAnswer: "Copper"
  },
  {
    question: "What is the official gemstone of Arizona?",
    choices: ["Turquoise", "Topaz", "Emerald", "Lapis Lazuli"],
    correctAnswer: "Turquoise"
  },
  {
    question: "What are the official state colors of Arizona?",
    choices: ["Blue & Gold", "Red & Yellow", "Blue & White", "Black & Purple"],
    correctAnswer: "Blue & Gold"
  }
];

let timer;
let game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function() {
    game.counter--;

    $("#counter").html(game.counter);

    if (game.counter <= 0) {
      console.log("Game done!");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#inner-container").prepend(
      `<h2>Time remaining: <span id='counter'>120</span> Seconds</h2>`
    );
    // remove start button
    $("#start").remove();

    // Loop through questions array and display its data on the screen
    for (var i = 0; i < questions.length; i++) {
        $("#inner-container").append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].choices.length; j++) {
          $("#inner-container").append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].choices[j] + "''>" + questions[i].choices[j]);
        }
      }
    $("#inner-container").append("<br><button id='done'>DONE</button>");
  },
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        console.log($(this).val());
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        console.log($(this).val());
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        console.log($(this).val());
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        console.log($(this).val());
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        console.log($(this).val());
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        console.log($(this).val());
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        console.log($(this).val());
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        console.log($(this).val());
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() === questions[8].correctAnswer) {
        console.log($(this).val());
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() === questions[9].correctAnswer) {
        console.log($(this).val());
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#inner-container h2").remove();
    $("#inner-container").addClass("center");
    $("#inner-container").html("<h2>All Done!</h2>");
    $("#inner-container").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $("#inner-container").append(
      "<h3>Incorrect Answers: " + this.incorrect + "</h3>"
    );
    $("#inner-container").append(
      "<h3>Unanswered questions: " +
        (questions.length - (this.incorrect + this.correct)) +
        "</h3>"
    );
  }
};
