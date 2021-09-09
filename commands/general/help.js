const fs = require("fs");
const Discord = require("discord.js");
const { MessageButton, MessageActionRow } = require("discord-buttons");
const { Color, Image, Footer, Author } = require("../../config.js");
module.exports = {
  name: "help",
  aliases: ["commands"],
  description: "To show you all command of the bot",
  usage: ["s!help","s!help <command>"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 1000,
  run: async (bot, message, args, dev, data) => {
   
    if (!args[1]) {
  let helpEmbed = new Discord.MessageEmbed()
     helpEmbed.setColor(Color)
     helpEmbed.setAuthor(Author)
     helpEmbed.setImage(Image)
     helpEmbed.setTitle(bot.reva.get(data.lang, "general","help_embed"))
     helpEmbed.addField("General Section", "`invite`, `support`, `stats`, `serverinfo`, `ping`, `userinfo`, `bots`, `vote`, `premium`")
     helpEmbed.addField("Moderation Section", "`kick`, `ban`, `purge`, `unbanall`, `mute`, `lock`, `unlock`, `lockall`, `unlockall`")
     helpEmbed.addField("Config Section", "`setprefix`, `setlang`")
     helpEmbed.addField("Security Section", "`settings`, `punishment`, `whitelist`, `anti`, `logs`")
     helpEmbed.setFooter(Footer)

      let button1 = new MessageButton()
       .setStyle('url')
       .setURL('https://discord.com/api/oauth2/authorize?client_id=711328570374619207&permissions=8&scope=bot') 
       .setLabel('Invite Link')

      let button2 = new MessageButton()
       .setStyle('url')
       .setURL('https://discord.gg/xZ3Sssr8qN') 
       .setLabel('Server Support')

      let button3 = new MessageButton()
       .setStyle('url')
       .setURL('https://top.gg/bot/711328570374619207') 
       .setLabel('Top.gg')

      let button4 = new MessageButton()
       .setStyle('url')
       .setURL('https://www.antivandalism.ga/') 
       .setLabel('Website')

      let row1 = new MessageActionRow()
      .addComponents(button1, button2, button3, button4)

   return message.channel.send({ embeds: [helpEmbed] ,row: [row1] });
       } else {
      let  command = args[1]
      if (bot.commands.has(command) || 
      bot.aliases.has(command)) {  
      
      command = bot.commands.get(command) || bot.aliases.get(command);
        let ccmd = "<:disable:840230135046471711> Disabled"
        if ( command.enabled ) {
        ccmd = "<:enable:840230134899671060> Enabled"
        }
      let help1 = new Discord.MessageEmbed()
      help1.setColor(Color) 
      help1.setThumbnail(message.author.avatarURL())
      help1.setTitle("**Help**")
      help1.setDescription(command.description || command.name + " this command don't have a description")
      help1.addField("**Usage**", "" + command.usage.join(", ") + "" )
      help1.addField("**Category**", "" + command.category.join(", ") + "" )
      help1.addField("**Command is**", ccmd);
      message.channel.send({ embeds: [help1] })
        }
    }
  }};
