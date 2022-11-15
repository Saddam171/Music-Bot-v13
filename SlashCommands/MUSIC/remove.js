const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "remove",
  description: "remova o jogador!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);

    if (args[0] == 0) return interaction.reply( { color: 'WHITE', description: 'can\'t remova a música que já está tocando'});
    if (args[0] > player.queue.length) return interaction.reply( { color: 'WHITE', description: 'Música não encontrada!'});

    player.queue.remove(args[0] - 1)
    return interaction.reply( { color: 'WHITE', description: 'Remover faixa da fila'});
  }
} // try it 