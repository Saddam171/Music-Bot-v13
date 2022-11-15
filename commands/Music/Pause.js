module.exports = {
  name: "pause",
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {
    
    let player = client.poru.players.get(message.guild.id)

    if(player.isPaused){
message.reply("O jogador já está pausado")
    }
    
    if (!player.isPaused){
      
      player.pause(true)

    return message.reply('Pausado')
    }
  }
}