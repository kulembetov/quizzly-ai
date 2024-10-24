require('dotenv').config();
const { Telegraf } = require('telegraf');

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const bot = new Telegraf(TOKEN);

const webAppUrl = "https://quizzly-ai.netlify.app";

bot.start((ctx) =>
	ctx.reply('Welcome to Quiz Bot!', {
		reply_markup: {
			keyboard: [
				[
					{ text: 'Open Quiz Web App', web_app: { url: webAppUrl } }
				]
			],
			resize_keyboard: true,
		},
	})
);

bot.launch();
