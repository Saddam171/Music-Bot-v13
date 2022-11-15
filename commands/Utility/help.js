const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
module.exports = {
  name: "help",
  run: async (client, message, args) => {
    let prefix = client.prefix


    if (!args[0]) {
   
// copyright 2022 @diwasatreya
      
      const embed = new MessageEmbed()
        .setTitle("**Painel de Ajuda | Resilient rutzen** <a:ung_:832722242679996446>")
        .setDescription(`
       Aqui estão os comandos disponíveis para este bot
        \`cqueue\`  : limpa a fila
        \`join\`    : junte-se a VC
        \`jump\`    : pule a fila
        \`loop\`    : repita a música
        \`pause\`   : pausa a música
        \`play\`    : tocar a música
        \`queue\`   : mostrar músicas da fila
        \`radio\`   : tocar estação de rádio
        \`remove\`  : remover música da fila
        \`repeat\`  : loop a música
        \`seek\`    : pular algum clipe
        \`shuffle\` : embaralhar a fila
        \`skip\`    : pule a música inteira
        \`spotify\` : tocar música spotify
        \`stop\`    : pare a música
        \`volume\`  : alterar o volume
        \`help\`    : aparecer está mensagem
        \`ping\`    : mostrar ping do bot
      `)

        .setFooter(
          `Requerido por ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        ).setFooter(`Digite .help <nome do comando> para obter detalhes sobre um comando!`)
        .setTimestamp()
        .setColor("WHITE");
      return message.reply({ embeds: [embed] });
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Comando inválido! Use \`${prefix}help\` para todos os meus comandos!`)

          .setColor("FF0000");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Help Command: " + args[0])
        .addField("PREFIX:", `\`!\``)
        .addField(
          "COMMAND:",
          command.name ? `\`${command.name}\`` : "Nenhum nome para este comando."
        )
        .addField(
          "ALIASES:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "Sem aliases para este comando."
        )
        .addField(
          "USAGE:",
          command.usage
            ? `\`?${command.name} ${command.usage}\``
            : `\`?${command.name}\``
        )
        .addField(
          "DESCRIPTION:",
          command.description
            ? command.description
            : "Nenhuma descrição para este comando."
        )
        .setFooter(
          `Requerido por ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor("WHITE");
      return message.reply({embeds:[embed]});
    }

  }
}
