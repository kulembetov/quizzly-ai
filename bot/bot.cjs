require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const axios = require('axios');

const token = process.env.TELEGRAM_BOT_TOKEN;

console.log("Telegram Bot Token: ", token);

const bot = new TelegramBot(token, {
	request: {
		agentOptions: {
			keepAlive: true,
			family: 4
		}
	}
});

bot.onText(/\/start/, (msg) => {
	const chatId = msg.chat.id;
	bot.sendMessage(chatId, 'Welcome to the Quizzly AI Bot! Type /quiz to get started.');
});

bot.onText(/\/quiz/, async (msg) => {
	const chatId = msg.chat.id;

	const question = 'What is the capital of France?';

	bot.sendMessage(chatId, question);
});

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Quiz Bot is running');
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
