const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "volume",
  description: "defina o volume!",
  inVc: true,
  sameVc: true,

  run: async (client, interaction, args) => {
    const player = client.poru.players.get(interaction.guild.id);

    if (isNaN(args[0])) return interaction.reply({
      embeds: [{
        color: 'WHITE',
        description: `Por favor, forneça-me um volume inferior a 100` // done here
      }]
    })
    player.setVolume(args[0]);

    interaction.reply({
      embeds: [{
        color: 'WHITE',
        description: `O volume está definido para: ${args0}`
      }]
    })
  }
} 
