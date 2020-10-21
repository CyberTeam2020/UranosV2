const discord = require('discord.js');
const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    if (!queue) return [message.delete(), utils.timed_msg('**\<:youtube_data:765995450754793582> Şuanda Herhangi ŞArkı Oynatılmıyor!**', 5000)];

    let embed = new discord.RichEmbed()
        .setColor('BLACK')
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Müzik Çalma Listesi\n${queue.musics.map(music => 
            `**-** ${music.title}`).join('\n')}\n\n\<:youtube_data:765995450754793582> \`Şuanda Oynatılıyor:\` __${queue.musics[0].title}__`);

    message.channel.send(embed);

};

module.exports.help = {
    name: 'çalmalistesi',
    aliases: ['list', 'q', 'queue','müziklistesi']
}