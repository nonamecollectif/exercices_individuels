
//for (let pas = 0; pas < 5; pas++) 
let cardType = ['♠︎', '♣︎', '♡', '♢'];
var cardValue = []
for (let card = 1; card <= 10 ; card++) {
  cardValue.push(card+"")
                 
} 
cardValue = cardValue.concat (['J', 'Q', 'K']) 
console.log (cardValue)
for (const type of cardType) {
  for (const value of cardValue) {
    console.log(type+value)
  }
  
} 