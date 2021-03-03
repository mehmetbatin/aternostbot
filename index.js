const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'minelingonetwork.aternos.me',
  port: 26302,
  username: 'Minelingo_Bot',
  version: false,
})

bot.on('chat', function (username, message) {
  if (username === bot.username) return
  bot.chat(message)
})


bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
bot.on('error', err => console.log(err))
