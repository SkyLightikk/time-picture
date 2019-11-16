const router = app => {
    app.get('/', (request, response) => {
        console.log(`URL: ${request.url}`);
        response.send('Hello, Server!');
    });

    app.get('/random-number', (request, response) => {
        // что-то обрабатываем 1 секунду
        setTimeout(send, 1000);
        function send() {
            response.send("42");
        }
    });

};

module.exports = router;