const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTc2NzU5ODU0OTMwNzM1MTE2.GeS2ph.f3tAFLfZUdUzpO3q-Ar1ZFXvZxlHgiG7S109v0"

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
    if (message.content == "I love bread"){
        message.reply("You have aids")
    }
})

client.login(process.env.TOKEN)