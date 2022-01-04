const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTI3MzQ1OTE2MDk5MzIxOTE2.YdI4Lw.0bnunWH2rIvan5KqfKwB4o4VyeY"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "nya") {
        message.reply("nya!")
    }
})

client.login(process.env.TOKEN)