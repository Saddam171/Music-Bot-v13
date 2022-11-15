const { readdirSync } = require("fs");
const ascii = require("ascii-table");

//THIS ONE FROM V12

// Create a new Ascii table
let table = new ascii("Poru Events");
table.setHeading("Events", "Load status");

module.exports = (client) => {

  const commands = readdirSync(__dirname.replace("\handlers", "\poruEvents")).filter(file => file.endsWith(".js"));

  for (let file of commands) {

    try {
    let pull = require(`${__dirname.replace("\handlers", "\poruEvents")}/${file}`);

    if (pull.event && typeof pull.event !== "string") {
      table.addRow(file, `❌ -> O evento de propriedade deve ser uma string.`);
      continue;
    }

    pull.event = pull.event || file.replace(".js", "")

    client.poru.on(pull.event, pull.run.bind(null, client))

    table.addRow(file, '✅');

    } catch(err) {

  console.log("Error While loading")
  console.log(err)
  table.addRow(file, `❌ -> Erro ao carregar evento`);
    }
  }

   console.log(table.toString());
}