module.exports.run = async (client, interaction) => {


    if (interaction.isCommand()) {
  
        const command = client.slash.get(interaction.commandName);
        if (!command) return interaction.reply({ content: 'an Erorr' });
if (!command) return

  const player = client.poru.players.get(interaction.guild.id);
  const memberChannel = interaction.member.voice.channelId;
  const botChannel = interaction.guild.me.voice.channelId;


    //Voice Only
    if (command.inVc && !memberChannel) {
      return interaction.reply('Você deve estar em um Canal de Voz para usar este Comando!')
    }
  //same vc
  if (command.sameVc && player && botChannel !== memberChannel) {

    return interaction.reply('Você deve estar no mesmo canal de voz que eu!')


  }
  //player
  if (command.player && !player) {
    return  interaction.followUp(`Nenhum jogador existe para esta Guilda!`)
  }
    if (command.current && !player.currentTrack){
interaction.followUp("Não há nada jogando agora!")
    }



//error aayga sayad



      
       
        try {

            command.run(client, interaction)

        } catch (e) {

            interaction.reply({ content: e.message });


        }

    }


}