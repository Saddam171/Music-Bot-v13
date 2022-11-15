const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "resume",
  description: "Resume o jogador!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);

    if (!player.isPaused) {
      player.pause(false)
      interaction.reply({ embeds: [{
        color: 'WHITE',
        title: `O jogador foi retomado`
      }]})
    }
    else {
      if (player.isPaused) {
      player.pause(false)
      return interaction.reply({ embeds: [{
        color: 'WHITE',
        title: `Reiniciado`
      }]})
    }
    }
    
  }
} // try it 

  