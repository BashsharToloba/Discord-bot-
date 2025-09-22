

// "StAuth10222: I Bashshar Toloba, 000892187 certify that this material is my original work. 
// No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."


const { Client, GatewayIntentBits } = require("discord.js");
const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args));

// ---- CONFIG ----
const DISCORD_TOKEN = ""; 
const YELP_API_KEY = "I30LHczQtcn4DRlFAEyeKt-BP_R1HtnFn9vkC8Vg2R_w6_3hLx4Zkv4CKcBSPBVdK5ZrX1HCq_lOZ5G5XfaD_RhkkfJpaxNCTec2Bf4tSm6-bM2LbHVCc5JCGRfQaHYx"; 
const BASE_URL = "https://api.yelp.com/v3";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  const args = message.content.trim().split(" ");
  const command = args.shift()?.toLowerCase();

  try {

    // 1. !stadium <location> (1 argument)
    if (command === "!stadium") {
    if (args.length < 1) return message.reply(" Usage: `!stadium <location>`");

    const location = args.join(" ");
    const res = await fetch(
        `${BASE_URL}/businesses/search?term=stadium&location=${encodeURIComponent(location)}&sort_by=rating`,
        { headers: { Authorization: `Bearer ${YELP_API_KEY}` } }
    );
    const data = await res.json();

    if (!data.businesses?.length)
        return message.reply(` No stadiums found in ${location}.`);

    const top3 = data.businesses
        .slice(0, 3)
        .map(
        (b, i) =>
            `${i + 1}. **${b.name}** ⭐${b.rating} (${b.review_count} reviews)`
        )
        .join("\n");

    return message.reply(`🏟️ Top stadiums in **${location}**:\n${top3}`);
    }



    // 2. !gym <location> (1 argument)
    if (command === "!gym") {
      if (args.length < 1) return message.reply(" Usage: `!gym <location>`");
      const location = args.join(" ");
      const res = await fetch(`${BASE_URL}/businesses/search?term=gym&location=${encodeURIComponent(location)}&sort_by=rating`, {
        headers: { Authorization: `Bearer ${YELP_API_KEY}` },
      });
      const data = await res.json();
      if (!data.businesses?.length) return message.reply(` No gyms found in ${location}.`);
      const top3 = data.businesses.slice(0,3).map((b,i)=>`${i+1}. **${b.name}** ⭐${b.rating} (${b.review_count} reviews)`).join("\n");
      return message.reply(` Top gyms in **${location}**:\n${top3}`);
    }

    // 3. !trainer <specialty> <location> (2 arguments)
    if (command === "!trainer") {
      if (args.length < 2) return message.reply(" Usage: `!trainer <specialty> <location>`");
      const specialty = args[0];
      const location = args.slice(1).join(" ");
      const res = await fetch(`${BASE_URL}/businesses/search?term=${encodeURIComponent(specialty + " trainer")}&location=${encodeURIComponent(location)}&sort_by=rating`, {
        headers: { Authorization: `Bearer ${YELP_API_KEY}` },
      });
      const data = await res.json();
      if (!data.businesses?.length) return message.reply(` No ${specialty} trainers found in ${location}.`);
      const top3 = data.businesses.slice(0,3).map((b,i)=>`${i+1}. **${b.name}** ⭐${b.rating}, 📍 ${b.location.city}`).join("\n");
      return message.reply(` Top ${specialty} trainers in **${location}**:\n${top3}`);
    }

    // 4. !league <sport> <location> (2 arguments)
    if (command === "!league") {
      if (args.length < 2) return message.reply(" Usage: `!league <sport> <location>`");
      const sport = args[0];
      const location = args.slice(1).join(" ");
      const res = await fetch(`${BASE_URL}/businesses/search?term=${encodeURIComponent(sport + " league")}&location=${encodeURIComponent(location)}&sort_by=rating`, {
        headers: { Authorization: `Bearer ${YELP_API_KEY}` },
      });
      const data = await res.json();
      if (!data.businesses?.length) return message.reply(` No ${sport} leagues found in ${location}.`);
      const top3 = data.businesses.slice(0,3).map((b,i)=>`${i+1}. **${b.name}** ⭐${b.rating}, 📍 ${b.location.city}`).join("\n");
      return message.reply(` Top ${sport} leagues in **${location}**:\n${top3}`);
    }

    // 5. !sportsbar <sport> <location> (2 arguments)
    if (command === "!sportsbar") {
      if (args.length < 2) return message.reply(" Usage: `!sportsbar <sport> <location>`");
      const sport = args[0];
      const location = args.slice(1).join(" ");
      const res = await fetch(`${BASE_URL}/businesses/search?term=${encodeURIComponent(sport + " sports bar")}&location=${encodeURIComponent(location)}&sort_by=rating`, {
        headers: { Authorization: `Bearer ${YELP_API_KEY}` },
      });
      const data = await res.json();
      if (!data.businesses?.length) return message.reply(` No ${sport} sports bars found in ${location}.`);
      const top3 = data.businesses.slice(0,3).map((b,i)=>`${i+1}. **${b.name}** ⭐${b.rating}, 📍 ${b.location.city}`).join("\n");
      return message.reply(` Top ${sport} sports bars in **${location}**:\n${top3}`);
    }

  } catch(err){
    console.error(err);
    message.reply(" Error fetching Yelp data.");
  }
});

client.login(DISCORD_TOKEN);
