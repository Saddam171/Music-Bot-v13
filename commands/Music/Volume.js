module.exports = {
  name: "volume",
  args: true,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {

    let player = await client.poru.players.get(message.guild.id)
if(args[0]>100){
  message.reply("Por favor, forneça-me um volume inferior a 100")
}

      player.setVolume(args[0])
message.reply(`Volume definido para ${args[0]}`)
   
    
  }
}
