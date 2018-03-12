const { LineBot } = require('bottender');
const { createServer } = require('bottender/express');

const config = require('./bottender.config.js').line;
const handler = require('./handler');

const bot = new LineBot({
  accessToken: config.accessToken,
  channelSecret: config.channelSecret,
});


bot.onEvent(handler);

const server = createServer(bot);

server.listen(5000, () => {
  console.log('server is running on 5000 port...');
});