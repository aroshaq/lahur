const Discord = require("discord.js");
const { Color } = require("../../config.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "staff",
  aliases: ["serversupport"],
  description: "To show server support",
  usage: ["s!support"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (client, message, args, dev) => {

    
    let modList = [], adminList = [];

    // Get mod list
    if (modRole) modList = message.guild.members.cache.filter(m => {
      if (m.roles.cache.find(r => r === modRole)) return true;
    }).sort((a, b) => (a.joinedAt > b.joinedAt) ? 1 : -1).array();

    if (modList.length > 0) mods = message.client.utils.trimStringFromArray(modList, 1024);
    else mods = 'No mods found.';
    
    // Get admin list
    if (adminRole) adminList = message.guild.members.cache.filter(m => {
      if (m.roles.cache.find(r => r === adminRole)) return true;
    }).sort((a, b) => (a.joinedAt > b.joinedAt) ? 1 : -1).array();

    if (adminList.length > 0) admins = message.client.utils.trimStringFromArray(adminList, 1024);
    else admins = 'No admins found.';
    

    const embed = new MessageEmbed()
      .setTitle(`Server Staff List [${modList.length + adminList.length}]`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addField(`Admins [${adminList.length}]`, admins, true)
      .addField(`Mods [${modList.length}]`, mods, true)
   
      .setColor(Color);
    message.channel.send(embed);
  }
};
