//Codigos de Inicio del Bot
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

//Mensaje de Arrqnue del Bot
function presence(){
    client.user.setPresence({
        status: "online",
        game: {
            name: "=help para Ayuda",
            type: "PLAYING"

        }
    });
}

    //Llamado del Prefix
    var prefix = config.prefix;

 //Linea de arranque de comandos
 client.on('message', message => {
    console.log(message.content);
    presence();

 
    //Mensaje de arranque
    if (!message.content.startsWith(config.prefix)) return;
    if (message.author.bot) return;

    //Mensaje con mencion
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    //Mensaje EMBED de Ayuda
    if (message.content.startsWith(prefix + "help")){
        message.channel.send({embed:{
            color: 3447003,
            title: "Comandos de Ayuda",
            url: "https://pbs.twimg.com/profile_images/1289429233291399168/qHVv75B__400x400.jpg",
            autor:{
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "Guia De Ayuda",
            url: "https://www.kindpng.com/picc/m/381-3813540_cliente-apoyo-servicio-ayuda-la-comunicacin-call-center.png",
            description: "**Aqui encontraras una lista de comandos de ayuda de Astro** 😊",

            fields:[{
              
                 name: "**=Help**",
                value: "Este comando desplegara esta lista de ayuda que estas viendo justo ahora"

            },
            
            {
                 name: "**=IP**",
                 value: "Con este comando recibiras la IP de nuestro Servidor"

            },

            {
                name: "**=Redes**",
                value: "Si me llamas con este comando te enviare nuestras redes completas"

            },
            {
                name: "=Kick",
                value: "Dame esta orden para eliminar personitas del Servidor"

            },

        ],

        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL,
            text: "**Astro**"
        }

        }});
    
    };

    //comando de IP
    if (message.content.startsWith(prefix + "IP")){
        message.channel.send({embed:{
            color: 3447003,
            autor:{
                name: client.user.username,
                icon_url: client.user.avatarURL

            },

            title: 'Sobre Nuestra IP',
            description: 'Recuerda que puedes acceder a PachyServer desde 1.8.8 hasta 1.16.1',

            fields: [{
                name: "*Nuestra IP*",
                value: "*play.pachyserver.es*"
            }
        ],
        
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "Astro"
            }

        }});
    }


    //Comando Kick
    if(command === 'kick' ){

        let user = message.mentions.users.first();
        let razon = args.slice(1).join(' ');
        
        if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
        if (!razon) return message.channel.send('Escriba una razón, `=kick @username [razón]`');
        if (!message.guild.member(user).kickable) return message.reply('No puedo patear al usuario mencionado.');
         
        message.guild.member(user).kick(razon);
        message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);
    
    }
    

    //Comando de Redes
    if (message.content.startsWith(prefix + "Redes")){
        message.channel.send({embed: {
            color: 929208,
            author: {
                name: client.user.username,
                iconURL: client.user.avatarURL

            },
            title: "Aqui tienes nuestras Redes",
            description: "Nuestras Redes son Sagradas :3 Amalasssss",

            fields: [{
                name: 'Facebook',
                value: 'https://www.facebook.com/groups/3743167509041345'
            },

            {
                name: 'Twitter',
                value: 'https://twitter.com/Pachy_Server_Of'
            },

            {
                name: 'Discord',
                value: 'https://discord.gg/w4YBtFT'
            },
            
            {
                name: 'Tienda',
                value: 'https://pachyserver.tebex.io/'
            },
        ],

            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "Astro"
            }

        }});



    }

 });
  client.login(config.token);