//  https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot

//  imports
require('dotenv').config();
console.log(process.env);

//  Hello World msg
console.log("beep beep");

//  Variable definitions
const Discord = require('discord.js');
const client = new Discord.Client();

const botToken = process.env.DISCORD_BOT_TOKEN;
const channelID = process.env.DISCORD_CHANNEL_ID;

const replies = [
    '♆ So be it.',
    '♆ It shall be done.',
    '♆ Of course.',
    '♆ Affirmative.',
    '♆ Confirmed.'
]





//  login as bot based on given Token
client.login(botToken);

//  on listens to events , in this case, "ready", so as to display a msg if needed
client.on('ready', readyDiscord);

function readyDiscord(){
    //  bot OK
    console.log('<3 its online');
}


//  activates whenever a msg is sent in the server which the bot is added to
client.on('message', gotMessage);

function gotMessage(msg){
    //  displays the meta-data of the msg
    console.log(msg.content);
    if (msg.channel.id == channelID && msg.content === 'play'){
        const index = Math.floor(Math.random()*replies.length);
        msg.channel.send(replies[index]);
    }
}