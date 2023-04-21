let fields = [];
let player = "cross";

function fillShape(id) {
  if (!fields[id]) {
    fields[id] = player;

    if (player == "cross") {
      player = "circle";
      document.getElementById("player-1").classList.remove("player-inactive");
      document.getElementById("player-2").classList.add("player-inactive");
    } else {
      player = "cross";
      document.getElementById("player-2").classList.remove("player-inactive");
      document.getElementById("player-1").classList.add("player-inactive");
    }
    draw();
    checkForWin();
  }
}

function draw() {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i] == "circle") {
      document.getElementById("circle-" + i).classList.remove("d-none");
    }

    if (fields[i] == "cross") {
      document.getElementById("cross-" + i).classList.remove("d-none");
    }
  }
}

function checkForWin() {
  let winner;

  if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
    winner = fields[0];
  }

  if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
    winner = fields[3];
  }

  if (fields[7] == fields[8] && fields[8] == fields[9] && fields[7]) {
    winner = fields[7];
  }

  if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
    winner = fields[0];
  }

  if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
    winner = fields[1];
  }

  if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
    winner = fields[2];
  }

  if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
    winner = fields[0];
  }

  if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
    winner = fields[2];
  }

  if (winner) {
    console.log("Gewonnen:", winner);
  }
}
