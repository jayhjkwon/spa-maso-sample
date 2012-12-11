define(['./referral', './document', './post', './comment'],
    function (Referral, Document, Post, Comment) {

        return {
            Referral:Referral,
            Document: Document,
            Post: Post,
            Comment: Comment
        };
    }
);