const utils = require('../global/utils');
const config = require('../settings/config.json');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    let votes = bot.votes.get(message.guild.id);
    if (!message.member.voiceChannel) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Komutu Kullanmak için Ses Kanalına Girin!!`), 5000)];
    if (!queue) return [message.delete(), utils.timed_msg('⚠ No Music Plays!.', 5000)];

    if (!message.member.hasPermission('CONNECT')) {
        if (votes.voters.includes(message.author.id)) return [message.delete(), utils.timed_msg(utils.cmd_fail(`⚠ ${message.author},Oylama hakkını verdin! ${votes.votes}/3 Vote`), 5000)];

        votes.votes++
        votes.voters.push(message.author.id);
        message.channel.send(`\<:youtube_data:765995450754793582> ${message.author}, Geçiş İçin Oy Verdiniz! ${votes.votes}/3 Vote`);

        if (votes.votes > 3) return queue.connection.dispatcher.end();
    } else return queue.connection.dispatcher.end();
    
};

module.exports.help = {
    name: 'geç',
    aliases: ['geç','skip',]
};