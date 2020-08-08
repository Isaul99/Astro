const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot Arranco correctamente!');
    client.user.setStatus('dnd')

    console.log(client.user.presence.status);

});

client.on('message', (message) => {

    console.log(message.content);
    if (message.content === 'Naen'){
        message.reply('Ese men es un Dios')
    }

    if (message.content.includes ('=help')){

        message.channel.send('**Aqui Tienes una Lista de comandos de Ayuda**')
        message.channel.send('**=Redes:** Te mostrara nuestras redes Sociales')
        message.channel.send('**=IP:** Enviara la IP del Servidor')
    }

    if (message.content === '=redes'){

        message.channel.send ('Twitter: https://twitter.com/Pachy_Server_Of')
        message.channel.send ('Facebook: https://www.facebook.com/groups/3743167509041345')
        message.channel.send ('Tienda :D: https://pachyserver.tebex.io/')
    }
});

client.login('NzQwNjkxNDgyMzY0ODcwNzQ3.Xysssg.QqyONk6_zZm6K8bmZeS0Taor4wk');