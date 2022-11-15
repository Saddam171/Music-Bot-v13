const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "skip",
  description: "pula o jogador!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);
    player.stop()
    interaction.reply( { color: 'WHITE', description: 'Pulou a música atual!'});
  }
} // try it 