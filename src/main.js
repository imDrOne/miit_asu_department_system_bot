require('dotenv').config()

const { Telegraf } = require('telegraf')
// eslint-disable-next-line no-unused-vars
const Telegram = require('./telegram.js')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', async (ctx) => {
  await ctx.reply(JSON.stringify(ctx.chat, null, '\t'))
  await ctx.reply(JSON.stringify(ctx.update, null, '\t'))
  await ctx.reply(JSON.stringify(ctx.message, null, '\t'))
})
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch()
  .then(value => console.log(bot.context.botInfo))
  .catch(reason => console.log(reason))
