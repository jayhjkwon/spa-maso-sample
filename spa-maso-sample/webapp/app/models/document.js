define(['knockout', 'knockout.mapping'],
    function (ko, mapping) {
        var Document = function(data){
            var self = this;

            /*self.title = ko.observable(data.title);
            self.description = ko.observable(data.description);*/

            mapping.fromJS(data, {}, self);

            self.summary = ko.computed(function(){
               return self.title() + ' : ' + self.description();
            });
        };

        return Document;
    });