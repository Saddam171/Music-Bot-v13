const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "loop",
  description: "definir a música atual para o modo de loop!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);
  
    if (player.loop === 0) {
      player.TrackRepeat();
      interaction.reply( { embeds: [{
        color: 'WHITE',
        description: `Música em loop ativada`
      }]})
    } else if (player.loop === 1) {
      player.QueueRepeat();
      interaction.reply( { embeds: [{
        color: 'WHITE',
        description: `Fila de loop ativada`
      }]})
    } else if (player.loop === 2) {
      player.DisableRepeat();
      interaction.reply( { embeds: [{
        color: 'WHITE',
        description: `Loop desativado`
      }]})
    }
  }
} 
