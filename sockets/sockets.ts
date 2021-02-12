import { Socket } from 'socket.io';
import socketIO from 'socket.io';

export const desconectar = ( cliente: Socket ) => {

    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

}

// Escuchar mensajes
export const mensaje = ( cliente: Socket, io: socketIO.Server ) => {

    cliente.on('mensaje', (  payload: { de: string, cuerpo: string }  ) => { // payload = tipo en tiempo de ejecucion se puede hacer una interface

        console.log('Mensaje recibido', payload );

        io.emit('mensaje-nuevo', payload );

    });

    cliente.on('enviando', () => {
        console.log('Aqui estoy recibiendo algo');
        io.emit('actualizar');
    })

}
