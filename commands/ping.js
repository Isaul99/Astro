module.exports = {
    name: 'ping',
    description: 'Ping Actual',
    execute(message, arg) {
        message.chanel.send('Pong!')

    },
};