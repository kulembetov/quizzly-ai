const { Telegraf } = require('telegraf');

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const bot = new Telegraf(TOKEN);

const webAppUrl = 'https://quizzly-ai.netlify.app';

bot.start((ctx) => {
  ctx.reply('Welcome to Quizzly AI!', {
    reply_markup: {
      keyboard: [
        [{ text: 'Open Quizzly AI', web_app: { url: webAppUrl } }],
      ],
      resize_keyboard: true,
    },
  });
});

exports.handler = async (event) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Bad Request: No body provided' }),
      };
    }

    const update = JSON.parse(event.body);

    await bot.handleUpdate(update);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Update processed successfully' }),
    };
  } catch (error) {
    console.error('Error processing update:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
