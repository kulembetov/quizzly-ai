const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  await bot.handleUpdate(body);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Message processed' }),
  };
};
