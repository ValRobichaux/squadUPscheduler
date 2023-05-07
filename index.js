require('dotenv/config')
const { Client, GatewayIntentBits } = require('discord.js');



const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('ready',() => {
    console.log('Scheduler is running')
})
client.on('messageCreate',message => {
    if (message.content === 'ping') {
        message.reply('pong')
    }
})
client.login(process.env.DISCORD_TOKEN)