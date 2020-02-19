const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'Njc5MTQwNzgxODY4NDQ5ODE0.Xk2yOA.7S7R7pfHRB_zV38a9Rt1889ARn0';
const Pre = '$';

bot.on('ready', () => {
    console.log('Im online, sir. do you copy, sir.');
})

bot.on('message', msg =>{
    if(msg.content.substring(0,Pre.length) == Pre){
        let args = msg.content.substring(Pre.length).split(" ");
        switch(args[0]){
            case 'help':
                help = new Discord.RichEmbed()
                .setColor(0xff0000)
                .addField('I dont do anything yet but...', `I will be a game where you will have to build an army and conquer the world for your empire`)
                msg.channel.send(help)
            break;
        }
    }
})


bot.login(token);