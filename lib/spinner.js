var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"",
"B",
"BO",
"BOT",
"BOT B",
"BOT BY",
"BOT BY ",
"BOT BY B",
"BOT BY B1",
"BOT BY B16",
"BOT BY B16_O",
"BOT BY B16_OF",
"BOT BY B16_OFC",
"BOT BY B16_OFC",
"BOT BY B16_OFC",
"BOT BY B16_OFC",
"BOT BY B16_OFC",
"BOT BY B16_OFC",
"BOT BY B16_OF",
"BOT BY B16_O",
"BOT BY B16",
"BOT BY B1",
"BOT BY B",
"BOT BY ",
"BOT BY",
"BOT B",
"BOT ",
"BOT",
"BO",
"B",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}