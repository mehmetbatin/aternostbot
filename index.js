const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'minelingonetwork.aternos.me', // optional
  port: 26302,       // optional
  username: 'Minelingo_Bot', // email and password are required only for
  version: false,                 // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
})

bot.on('chat', function (username, message) {
  if (username === bot.username) return
  bot.chat(message)
})

// Log errors and kick reasons:
bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
bot.on('error', err => console.log(err))