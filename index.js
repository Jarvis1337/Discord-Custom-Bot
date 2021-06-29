const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('© 2021 — Made by 𝘐𝘤𝘰𝘯𝘪𝘤 𝘧𝘧 乛 ᴿᴸᴰ ⛊_ꜱᴰ 🚬 #0001 with ♥'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost/${port}`)
);

/////////////////////////////////////////////////////////////////////////////////

const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')

/////////////////////////////////////////////////////////////////////////////////



client.on("ready", () => {
  client.user.setStatus("dnd")
  function randomStatus() {
    let status = ["Itz-Iconic-ff-31 Github Repositories"]
    let rstatus = Math.floor(Math.random() * status.length);



    client.user.setActivity(status[rstatus], { type: "WATCHING" });
  }; setInterval(randomStatus, 3000)

  console.log('Bot is Ready to Online')
})

/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////

client.on('ready', () => {
  console.log('The client is ready!')
})

client.login(config.token)

/***
 © 2021 — Made by 𝘐𝘤𝘰𝘯𝘪𝘤 𝘧𝘧 乛 ᴿᴸᴰ ⛊_ꜱᴰ 🚬 #0001 with ♥ 
***/