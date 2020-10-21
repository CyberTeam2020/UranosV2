 const utils = require('../global/utils');
const config = require('../settings/config.json');

module.exports.run = async (bot, message, args) => {
 if(!message.member.hasPermission('CONNECT')) return message.reply('Bu komutu kullanabilmek için "Üyeleri Sustur" yetkisine sahip olman gerek!')
    let queue = bot.queue.get(message.guild.id);
    if (!message.member.voiceChannel) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, Şarkı Dinlemek İçin Herhangi Bir Ses Kanalına Girin!`), 5000)];
    if (!queue) return [message.delete(), utils.timed_msg('Uranos Of Kanaldan Ayrıldı !', 5000)];

    queue.musics = [];
    queue.connection.dispatcher.end();

};

module.exports.help = {
    name: 'ayrıl',
    aliases: ['disconnect','ayrıl']
};