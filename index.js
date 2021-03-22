const {
    Client,
    Attachement
} = require('discord.js');

const bot = new Client();
const token = '';
const PREFIX = '+';
var version = '1.0.1';

bot.on('ready', () => {
    console.log('Le bot est en ligne !');
    bot.user.setActivity('servir un café à Park-Tae-Soo !', {
        /*type: 'WATCHING'*/
    }).catch(console.error);

});



bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel.name === "welcome");
    if(!channel) return; 

    channel.send(`Bienvenue dans le serveur, ${member}, respecte le Tyran !`)
});





bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case 'kick':

        const user = message.mentions.users.first(); 

  

        if (user){
            const member = message.guild.member(user);

            if(member){
                member.kick('Tu as été kick !').then(() => {
                    message.reply(`Il/Elle/Autre (NonBinaire aussi !) a été kicker ! ${user.tag}`);

                }).catch(err => {
                    message.reply('je ne peux pas kick le membre !');
                    console.log(err);
                });
            }else{
                message.reply("L'utilisateur n'est pas dans le serveur !")
            }            
        }else{
            message.reply('Tu dois spécifier une personne !')
        }


        break;

    }
});


/*
bot.on('msg', msg => {

if (msg.content.startsWith("$kick ")) {
    if (msg.member.hasPermission("KICK_MEMBERS")) {
        if (msg.members.mentions.first()) {
            try {
                msg.members.mentions.first().kick();
            } catch {
                msg.reply("Tu as la permission " + msg.members.mentions.first());
            }
        } else {
            msg.reply("Tu n'as pas la permission " + msg.members.mentions.first());
        }
    }
}
});
*/


bot.login(token);