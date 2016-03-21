React.render(
    <Forum />,
    document.getElementById('forum')
);

var myemitter = new EventEmitter();

myemitter.on('STARTED_THE_APP', function () {
    console.log('start the app');
});

myemitter.on('STARTED_THE_APP', function () {
    console.log('start the app #2');
});

myemitter.emit('STARTED_THE_APP');
