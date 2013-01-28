define(['knockout', 'knockout.mapping', 'moment'],
    function (ko, mapping, moment) {
        var Comment = function (data) {

            var self = this;

            mapping.fromJS(data, {}, self);

            self.ago = ko.computed(function () {
                return moment(self.commentTime()).startOf('hour').fromNow();
            });
        };

        return Comment;
    });