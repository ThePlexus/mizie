const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const config = require("./data/config.json");

client.on("ready", function () {
    console.log("Hello world!");
    console.log("I am " + client.user.tag);
});

client.on("guildMemberAdd", (member) => {
    member.send({
        embed: {
            color: "RANDOM",
            description: `hallo ${member}!, willkommen auf ${member.guild.name}!`,
        },
    });
    const welcome = member.gulid.channels.cache.find(
        (ch) => ch.name === willkommen,
    );

    welcome.send(`ein neuer user ist ge joined ${member}`);
});
client.on("message", function (message) {
    if (message.author.bot) return;
});

client.login(config.token);