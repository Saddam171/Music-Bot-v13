const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "join",
  description:"Entrar no canal",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {

    const player = await client.poru.createConnection({
      guild: message.guild.id,
      voiceChannel: interaction.member.voice.channel.id,
      textChannel: interaction.channel,
      selfDeaf: true,
      selfMute: false,
    })

    interaction.reply({ embeds: [{
      color: 'WHITE',
      description: `Ingressou ${interaction.user.voice?.channel}`
    }]})
  }
} // try it 