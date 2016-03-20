var ForumQuestion = React.createClass({
    displayName: "ForumQuestion",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "What is Reat and Flus?"
            ),
            React.createElement(
                "p",
                null,
                "I don't understand React or Flux. Can someont help me?"
            )
        );
    }
});