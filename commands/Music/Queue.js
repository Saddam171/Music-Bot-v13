const { MessageEmbed } = require('discord.js');
const ms = require("ms");
module.exports = {
  name: "queue",
  inVc: true,
  sameVc: true,
  player: true,
  run: async (client, message, args) => {

    const player = client.poru.players.get(message.guild.id)

     const queue = player.queue.length > 9 ? player.queue.slice(0, 9) : player.queue;
        const embed = new MessageEmbed()
            .setColor("WHITE")
            .setTitle('Em reprodução')
            .setThumbnail(`https://img.youtube.com/vi/${player.currentTrack.identifier}/default.jpg`)
            .setDescription(`[${player.currentTrack.info.title}](${player.currentTrack.uri}) [${ms(player.currentTrack.info.length)}]`)
            .setFooter(`comprimento da fila: ${player.queue.length} `);
        if (queue.length) embed.addField('A seguir', queue.map((track, index) => `**${index + 1}.)** \`${track.info.title}\``).join('\n'));
        message.channel.send({ embeds: [ embed ] });
 }
}