const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "pause",
  description: "pausar o jogador",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
    const player = client.poru.players.get(interaction.guild.id);
    if(player.isPaused) {
      return interaction.reply({ embeds: [{
        color: "WHITE",
        title: 'O player já está pausado!'
      }]
         })
    }
      player.pause(true);
    return interaction.reply({ embeds: [{
        color: "WHITE",
        title: 'O jogador está pausado agora!'
      }] 
     })

  }} // try it 