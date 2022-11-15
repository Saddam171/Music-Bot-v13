module.exports = {
  name: "shuffle",
  args: false,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {
 
    let player = client.poru.players.get(message.guild.id)
    
    if(!player.currentTrack.isSeekable){
  message.reply("A trilha não é pesquisável")
}
player.queue.shuffle()
 
    return message.reply('fila embaralhada')
  }
}