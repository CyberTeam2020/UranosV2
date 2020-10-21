const utils = require('../global/utils');
const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    let playing = new Discord.RichEmbed()
    .setDescription('\<:youtube_data:765995450754793582> Şarkı Başarıyla Durduruldu!')
    .setColor('GREEN')
    .setTitle('\<:youtube_data:765995450754793582> Şarkı Duraklatıldı!')
    .setThumbnail('https://media.discordapp.net/attachments/744999490175369376/766389708250939422/ezgif.com-gif-maker_5.gif')
    .setFooter(bot.user.username)
    .setTimestamp();
    let notching = new Discord.RichEmbed()
    .setDescription('\<:youtube_data:765995450754793582> Müzik Oynatma İşlemi Başarıyla Kapatıldı!') 
    .setColor('GREEN')
    .setTitle('\<:youtube_data:765995450754793582> Şarkı Kapalı!')
    .setThumbnail('https://media.discordapp.net/attachments/744999490175369376/766389708250939422/ezgif.com-gif-maker_5.gif')
    .setFooter(bot.user.username)
    .setTimestamp();
    if (queue && queue.playing) {
        queue.playing = false;
        queue.connection.dispatcher.pause();
        return message.channel.send(playing);
    }

    return [message.delete(), utils.timed_msg(notching, 5000)];
    
};

module.exports.help = {
    name: 'durdur',
    aliases: ["durdur","stop"]
};