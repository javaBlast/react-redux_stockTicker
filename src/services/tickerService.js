import io from 'socket.io-client';

let socket = null;

export const connect = (stockSymbol, dispatchAction) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            console.log(data);
            if (dispatchAction) {
                const preparedData = JSON.parse(data);
                dispatchAction(preparedData);
            }
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
