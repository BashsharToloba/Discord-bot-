
// "StAuth10222: I Bashshar Toloba, 000892187 certify that this material is my original work. 
// No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."



const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Correct event name: "ready"
client.on("ready", () => {
  console.log(` Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  // Ignore bot messages
  if (message.author.bot) return;

  // Respond to "!ping"
  if (message.content === "!ping") {
    message.reply("pong 🏓");
  }
});


client.login("MTQxODk4MzMwOTQ1ODgwNDgzMQ.GxFIhU.M8tcMEFbXHz2Rbl5V59Cx6i55kUvPEK1AyHHV4");