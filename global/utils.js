let disc;
let b;
let conf;
let msg;
let a;
let g;

module.exports = {

    load: (discord, bot, config, message, args, guild) => {
        disc = discord;
        b = bot;
        conf = config;
        msg = message;
        a = args;
        g = guild;
    },

    timed_msg: (string, time) => {
        return msg.channel.send(string).then(msg => msg.delete(time));
    },

    no_perm: (error) => {
        let embed = new disc.RichEmbed()
            .setColor('#d30000')
            .setAuthor('Hata : Yetkim Yok',b.user.DisplayAvatarUrl)
            .setThumbnail(b.user.avatarURL)
            .setDescription(error)
            .setFooter('Lütfen ses kanalına katılın ❌');

        return embed;
    },

    cmd_fail: (error, syntax) => {
        let embed = new disc.RichEmbed()
            .setColor("#8e0000")
            .setAuthor('Hata!', b.user.displayAvatarURL)
            .setThumbnail(b.user.avatarURL)
            .setDescription(error)
            .setFooter('Lütfen ses kanalına katılın ❌');
        return embed;
    }
}