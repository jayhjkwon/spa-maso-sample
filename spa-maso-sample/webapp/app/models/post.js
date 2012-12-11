define(['knockout', 'knockout.mapping', 'moment', './comment'],
    function (ko, mapping, moment, Comment) {
        var Post = function (data) {

            var self = this;

            var commentMappingOption = {
                'comments': {
                    create: function (options) {
                        return new Comment(options.data);
                    }
                }
            };

            mapping.fromJS(data, commentMappingOption, self);
            
            self.yyyymmdd = ko.computed(function () {
                return moment(self.timeCreated()).format('YYYY-MM-DD');
            });

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