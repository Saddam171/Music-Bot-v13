module.exports.run = async (client) => {
 
  client.poru.init(client)
  console.log(`[API] ${client.user.username} está pronto com ${client.guilds.cache.size} server`);
 
    setInterval(() => {
      const statuses = [
        `/help`, `prefix: !`, `Bot Desenvolvido pelo RZ`
      ];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, { type: "LISTENING" });
    }, 60000);

}