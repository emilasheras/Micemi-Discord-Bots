//  https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot

//  imports
require('dotenv').config();
//console.log(process.env);

//  Hello World msg
console.log("Beep Beep");

//  Variable definitions
const Discord = require('discord.js');
const client = new Discord.Client();

//  taken from environment variables of the system
const botToken = process.env.DISCORD_BOT_TOKEN;
const channelID = process.env.DISCORD_CHANNEL_ID;

//  msg responses
const replies = [
    '♆ So be it.',
    '♆ It shall be done.',
    '♆ Of course.',
    '♆ Affirmative.',
    '♆ Confirmed.'
];
//  bot possible prefix string
const prefixes = [
    '!',
    '-',
    'm!'
];
//  keyword used for playing music by any bot
const playIndicators = [
    'p',
    'play',
    'pt'
];

const botColorTheme = '#364DC0';
//  embedded msg example
const botInfo = new Discord.MessageEmbed()
	.setColor(botColorTheme)
	.setTitle('NepTune Info')
	.setURL('https://github.com/emilasheras/Micemi-Discord-Bots')
//	.setAuthor('NEP', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('NepTune is a bot for passive playlist making in the added server.')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

//  login as bot based on given Token
client.login(botToken);





//  events & functions

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
    console.log("msg content: "+msg.content);
    
    //  Check if textchannel is correct
    if(msg.channel.id == channelID){
        //  loops for every defined bot prefix and play "word"
        for(x=0;x<prefixes.length;x++){
            for (y=0;y<playIndicators.length;y++){
                //  combines every posible word used for playing music
                var playWord=(prefixes[x]+playIndicators[y]);

                //  compares each word posible with the contents of the msg
                if(msg.content==playWord){
                    //  logs
                    returnMsg = "message said: "+msg.content+" and matched with: "+playWord;
                    console.log(returnMsg);
                    //  sends random response msg + the return log of which is found matched
                    const index = Math.floor(Math.random()*replies.length);
                    msg.channel.send(replies[index]+"\n"+returnMsg);
                }
            }
        }
    }
}

//  send embedded info about the bot
client.on('message', sendEmbed);
function sendEmbed(msg){
    if(msg.content == 'nep#info'){
        msg.channel.send(botInfo);
    }
}
