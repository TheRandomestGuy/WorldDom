const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'Njc5MTQwNzgxODY4NDQ5ODE0.XktBdg.hMMb9Vl8NPwtjVDoBjloqE7StxM';
const Pre = '$';

bot.on('ready', () => {
    console.log('Im online, sir. do you copy, sir');
})

bot.on('message', msg =>{
    let args = msg.content.substring(Pre.length).split(" ");
    switch(args[0]){
        case 'help':
            msg.channel.send()
        break;
    }
})


bot.login(token);