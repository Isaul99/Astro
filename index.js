//////////Codigos de Inicio del Bot//////////
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

function presence(){
    client.user.setPresence({
        status:"online",
        activity: {
            name:"=Help para ayuda",
            type:"PLAYING"
        }
    })
}

/////////Mensaje de Arrqnue del Bot///////
client.on('ready', () => {
     console.log('Bot Arranco correctamente!');
     presence();
});

    //////Llamado del Prefix///////
    var prefix = config.prefix;

 //////////Linea de arranque de comandos/////////
 client.on('message', message => {
	console.log(message.content);

 
    /////////////Mensaje de arranque/////////////////
    if (!message.content.startsWith(config.prefix)) return;
    if (message.author.bot) return;

    //Mensaje con mencion
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    ///////////////Mensaje EMBED de Ayuda//////////////////
    if (message.content.startsWith(prefix + "Help")){
        const embed = new Discord.MessageEmbed()
        .setTitle("Mi lista de Comandos")
        .setDescription("Hola :wave: Mi Nombre es Astro y soy el Bot Principal de este servidor. Soy creación del Owner de la Network, Aqui tienes una lista de mis comandos y todas mis increibles funciones ;3")
        .setColor("RANDOM")
        .setAuthor(message.member.displayName, message.author.displayAvatarURL())
        .setThumbnail("https://media.giphy.com/media/U7bo3ZBR8lcKSmGdlT/giphy.gif")
        .addField("=Help", "Este es mi comando principal y con el veras todos mis comandos increibles :D :interrobang:", true)
        .addField("=IP", "Si necesitas saber la IP para conectarte a la Network, con este comando puedo darte una manito :men_wrestling:", true)
        .addField("=Redes", "Desconoces nuestras Redes Sociales? Tranquilo, solo escribe ese comando y te ayudare inmediatamente con ello :heart:")
        .setFooter("Pedido por: " + message.member.displayName, message.author.displayAvatarURL())
        .setTimestamp();
    message.channel.send(embed)
    }


    ///////////////////comando de IP/////////////////////////
    if (message.content.startsWith(prefix + "IP")){
        const embed = new Discord.MessageEmbed()
        .setTitle("Sobre Nuestra IP")
        .setDescription("Recuerda que Puedes acceder a PachyNetwork desde **1.8.8** hasta **1.16.2**")
        .setAuthor(message.member.displayName, message.author.displayAvatarURL())
        .setColor("RANDOM")
        .setThumbnail("https://pbs.twimg.com/profile_images/1289429233291399168/qHVv75B__400x400.jpg")
        .addField("Nuestra IP", "*play.pachyserver.es*", true)
        .setFooter("Pedido por: " + message.member.displayName, message.author.displayAvatarURL())
        .setTimestamp();
    message.channel.send(embed)

    }

    ////////////////Comando de Redes///////////////////////
    if (message.content.startsWith(prefix + "Redes")){
        const embed = new Discord.MessageEmbed()
            .setTitle("Nuestras Redes Sociales")
            .setColor("RANDOM")
            .setDescription("Recuerda seguirnos en todas nuestra Redes Sociales y Compartir nuestras Publicaciones. Nos Encantara saber que eres parte de todas nuestras Redes :heart:")
            .setAuthor(message.member.displayName, message.author.displayAvatarURL())
            .setThumbnail('https://pbs.twimg.com/media/Eeyo_P0XkAAMZWB?format=png&name=small')
            .addField("Facebook:", "[PachyServer](https://www.facebook.com/groups/3743167509041345)", true)
            .addField("Twitter:", "[@Pachy_Server_Of](https://twitter.com/Pachy_Server_Of)", true)
            .addField("Discord:", "[PachyNetwork](https://discord.com/invite/w4YBtFT)", true)
            .addField("Tienda:", "[Tienda Oficial](https://pachyserver.tebex.io/)", true)
            .setFooter("Consultador por: " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp();
            
        message.channel.send(embed)

    }

 });
  client.login(config.token);