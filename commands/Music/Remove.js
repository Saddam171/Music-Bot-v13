module.exports = {
  name: "remove",
  args: true,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {

    let player = client.poru.players.get(message.guild.id)

    if (args[0] == 0) return message.reply(`Não é possível remover uma música que já está tocando.`);
    if (args[0] > player.queue.length) return message.reply('Música não encontrada.');

    player.queue.remove(args[0] - 1)
    return message.reply(`Faixa removida da fila`)
  }

}