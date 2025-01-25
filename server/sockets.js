module.exports = (io) => {
   io.on('connection', (socket) => {
      console.log('Connection');

      socket.on('disconnect', () => {
         console.log('Disconetion');
      });
   });
};