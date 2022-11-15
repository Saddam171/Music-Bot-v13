const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "clear",
  description: "limpa a fila!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
 
    const memberChannel = interaction.member.voice.channel.id

    const player = client.poru.players.get(interaction.guild.id)

    if(!player.queue.length){
      interaction.reply({ embeds: [{
      color: 'WHITE',
      description: `A fila está vazia!`
    }]})
    }
    
    let queueLength = player.queue.length

    player.queue.clear();

    interaction.reply({ embeds: [{
      color: 'WHITE',
      description: `Limpou \`${queueLength}\` da fila`
    }]})
  }
} // try it 