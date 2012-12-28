define(['./validate.post',
        './resizeLeftMain',
        './typeahead',
        './setActive'
    ],
    function (validatePost, resizeLeftMain, typeahead, setActive) {
        return {
            validatePost: validatePost,
            resizeLeftMain: resizeLeftMain,
            typeahead: typeahead,
            setActive: setActive
        };
    }
);