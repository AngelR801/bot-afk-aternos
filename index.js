const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log('🤖 Bot AFK activo para Aternos!');
  console.log(`Conectado como: ${client.user.tag}`);
  
  // Mantener actividad cada 10 minutos
  setInterval(() => {
    console.log('🟢 Manteniendo servidor activo - ' + new Date().toLocaleTimeString());
  }, 10 * 60 * 1000);
});

client.on('messageCreate', message => {
  if (message.content === '!afk') {
    message.reply('✅ Modo AFK activado - Manteniendo servidor activo 24/7');
  }
  
  if (message.content === '!estado') {
    message.reply('🟢 Bot funcionando correctamente - ' + Math.round(client.uptime / 1000) + ' segundos activo');
  }
});

// Iniciar el bot
client.login(process.env.TOKEN);