const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && !queue.playing) {
        queue.playing = true;
        queue.connection.dispatcher.resume();
        return message.channel.send(`\<:youtube_data:765995450754793582> Zaten Herhangi Bir Şarkı Çalıyor!`);
    }

    return [message.delete(), utils.timed_msg('\<:youtube_data:765995450754793582> ŞArkı Devam Ediyor!', 5000)];

};

module.exports.help = {
    name: 'devam',
    aliases: ['devam','resume']
};