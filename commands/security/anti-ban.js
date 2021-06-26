const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "anti",
  aliases: ["anti-ban"],
  description: "Prevent others from mass banning your members",
  usage: ["s!antiban [number/on/off]"],
  category: ["Security"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 3000,
  run: async (bot, message, args) => {
     if (args[1]  === "ban") {
    let guild = await Guild.findOne({ guildID: message.guild.id });
     let num = args[2];
    if (args[2] === "on") {
      guild.ban.onoff = "on";
      guild.ban.user = message.author.id
      guild.save();
      const embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`<a:true:854842599444709386> You have **Enable** antiban`);
      return message.channel.send(embed);
     } else if (args[2] === "off") {
       guild.ban.onoff = "off";
       guild.save();
      const embed1 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`<a:false:854842600351334440> You have **Disable** antiban`);
      return message.channel.send(embed1);
    }
    if (isNaN(num) || parseInt(num) < 1) {
      const embed2 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`error syntax <a:false:854842600351334440>\n ${guild.prefix}antiban [on,off,<number>]`
        );
      return message.channel.send(embed2);
    }
    guild.ban.user = message.author.id
    guild.ban.lmite = num;
    guild.save();
    const embed3 = new Discord.MessageEmbed()
      .setColor(Color)
      .setDescription(`Successfully antiban changed to **${guild.ban.lmite}** <:punish:836022893691011092>`);
    return message.channel.send(embed3);
 } 
}
};
