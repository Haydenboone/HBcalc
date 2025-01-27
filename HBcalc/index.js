function indexViewModel() {
    var self = this;
    self.in1 = ko.observable(0);
    self.in2 = ko.observable(0);
    self.result = ko.observable();

    self.the1 = function () {
        var self = this;
        self.result(+self.in1() * (+self.in2()));
    }







}
ko.applyBindings(new indexViewModel(), document.querySelector("#main"));















