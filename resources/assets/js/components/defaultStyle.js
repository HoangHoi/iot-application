export default ({
    control: {
        backgroundColor: '#fff',
        fontSize: 14,
        fontWeight: 'normal',
    },

    input: {
        margin: 0,
    },

    '&singleLine': {
        control: {
            display: 'inline-block',
            width: 130,
        },

        highlighter: {
            padding: 1,
            border: '2px inset transparent',
        },

        input: {
            padding: 1,
            border: '2px inset',
        },
    },

    '&multiLine': {
        control: {
            fontFamily: 'monospace',
            border: '1px solid silver',
        },

        highlighter: {
            padding: 9,
        },

        input: {
            padding: 9,
            minHeight: 63,
            outline: 0,
            border: 0,
        },
    },

    suggestions: {
        list: {
            backgroundColor: 'white',
            border: '1px solid rgba(0,0,0,0.15)',
            padding: '5px 0px',
            fontSize: 14,
        },

        item: {
            padding: '5px 15px',
            '&focused': {
                backgroundColor: '#cee4e5',
            },
        },
    },
});
