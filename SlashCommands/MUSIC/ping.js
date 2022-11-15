module.exports = {

name : "ping",
description : "Ping do bot",
run : async (client,interaction,args) => {





interaction.followUp({content : client.ws.ping + "ms"})
}



}