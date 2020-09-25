const Discord = require('discord.js');
const bot = new Discord.Client({ disableEveryone: true });

bot.on('ready', () => {
	console.log(`${bot.user.username} is now ready!`);
});

bot.login('HAHA_NO_TOKEN_4_U');

bot.on('message', (message) => {
	if (String(message.content.toLowerCase()) == '!ping') {
		// eslint-disable-next-line no-undef
		message.channel.send('Pong.');
	}
});