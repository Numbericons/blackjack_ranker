function scoreHand(cards) {
  let score = 0;
  let aces = 0;
  cards.forEach(card => {
    if (card === "A") {
      aces += 1;
    } else {
      score += parseInt(card, 10);
    }
  })
  return score;
}

scoreHand(["2", "3"]);