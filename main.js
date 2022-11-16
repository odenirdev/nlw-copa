const gameDays = [
  {
    day: "Segunda",
    date: "21/11",
    games: [
      {
        player1: "brazil",
        hour: "08:00",
        player2: "cameroon",
      },
      {
        player1: "armenia",
        hour: "13:00",
        player2: "argentina",
      },
      {
        player1: "colombia",
        hour: "20:00",
        player2: "japan",
      },
    ],
  },
  {
    day: "Quarta",
    date: "24/11",
    games: [
      {
        player1: "british columbia",
        hour: "08:00",
        player2: "cameroon",
      },
      {
        player1: "comoros",
        hour: "13:00",
        player2: "india",
      },
      {
        player1: "armenia",
        hour: "20:00",
        player2: "hungary",
      },
    ],
  },
  {
    day: "Segunda",
    date: "21/11",
    games: [
      {
        player1: "brazil",
        hour: "08:00",
        player2: "cameroon",
      },
      {
        player1: "armenia",
        hour: "13:00",
        player2: "argentina",
      },
      {
        player1: "colombia",
        hour: "20:00",
        player2: "japan",
      },
    ],
  },
  {
    day: "Quarta",
    date: "24/11",
    games: [
      {
        player1: "british columbia",
        hour: "08:00",
        player2: "cameroon",
      },
      {
        player1: "comoros",
        hour: "13:00",
        player2: "india",
      },
      {
        player1: "armenia",
        hour: "20:00",
        player2: "hungary",
      },
    ],
  },
  {
    day: "Segunda",
    date: "21/11",
    games: [
      {
        player1: "brazil",
        hour: "08:00",
        player2: "cameroon",
      },
      {
        player1: "armenia",
        hour: "13:00",
        player2: "argentina",
      },
      {
        player1: "colombia",
        hour: "20:00",
        player2: "japan",
      },
    ],
  },
  {
    day: "Quarta",
    date: "24/11",
    games: [
      {
        player1: "british columbia",
        hour: "08:00",
        player2: "cameroon",
      },
      {
        player1: "comoros",
        hour: "13:00",
        player2: "india",
      },
      {
        player1: "armenia",
        hour: "20:00",
        player2: "hungary",
      },
    ],
  },
]

function createGame(game) {
  return `
    <li>
      <img src="./assets/flags/${game.player1}.svg" alt="" />
      <strong>${game.hour}</strong>
      <img src="./assets/flags/${game.player2}.svg" alt="" />
    </li>
  `
}

let delay = 0
function createCard(gameDay) {
  delay += 0.2
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${gameDay.date} <span>${gameDay.day}</span></h2>
      <ul>
        ${gameDay.games.map((game) => {
          return createGame(game)
        })}
      </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="" />
  </header>
  <main id="cards">
    ${gameDays.map((gameDay) => createCard(gameDay))}
  </main>
`
