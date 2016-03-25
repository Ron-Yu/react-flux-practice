var answerData = {
    1: {
        body: 'Isn\'t that anout time travel?',
        correct: false
    },
    2: {
        body: 'React and Flux are a tool and methodologies for building the front end of web applications',
        correct: false
    },
    3: {
        body: 'React is a snonym for "respond"',
        correct: false
    }
};

var ForumStore = new EventEmitter();

ForumStore.emitChange = function () {
    this.emit('change');
};

ForumStore.addChangeListener = function (listener) {
    this.on('change', listener)
}

ForumStore.getAnswer = function () {
    return answerData;
};

ForumStore.addAnswer = function (newAnswer) {
    answerData[Object.keys(answerData).length + 1] = {
        body: newAnswer,
        correct: false
    }
    this.emitChange();
};

ForumStore.markAsCorrect = function (id) {
    for (var key in answerData) {
        if (answerData.hasOwnProperty(key)) {
            answerData[key].correct = false;
        }
    }

    answerData[id].correct = true;
    this.emitChange();

};


ForumDispatcher.register(function(action) {

    switch(action.actionType) {
        case 'FORUM_ANSWER_ADDED': {
            console.log('answer added');
            ForumStore.addAnswer(action.newAnswer);
            break;
        }
        case 'FORUM_ANSWER_MARKED_CORRECT': {
            console.log('answer marked correct');
            ForumStore.markAsCorrect(action.id);
            break;
        }

    }

});