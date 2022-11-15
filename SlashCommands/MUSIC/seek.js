const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "seek",
  description: "procure o jogador!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);
  if(!player.currentTrack.isSeekable){
  interaction.reply( { embeds: [{
        color: 'WHITE',
        description: `A trilha não é pesquisável`
      }]})
}
    
player.seekTo(args[0]*1000)
    
    return interaction.reply( { embeds: [{
        color: 'WHITE',
        description: `Procurou \`${args[0]}\``
      }]})
  }
  }
 