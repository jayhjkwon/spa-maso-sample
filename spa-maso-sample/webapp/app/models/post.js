define(['knockout', 'knockout.mapping'],
    function (ko, mapping) {
        var Post = function (data) {

            var self = this;

            mapping.fromJS(data, {}, self);

            self.shortTitle = ko.computed(function () {
                if (self.title) {
                    if (self.title().length > 60)
                        return self.title().substring(0, 60);
                    else
                        return self.title();
                } else {
                    return '';
                }
            });
            
            self.url = ko.computed(function () {
                if (self.id)
                    return "#/post/detail/" + self.id();
                else
                    return '';
            });
        };

        return Post;
    });