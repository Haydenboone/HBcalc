function indexViewModel() {
    var self = this;
    self.in1 = ko.observable(0);
    self.in2 = ko.observable(0);
    self.result = ko.observable();
    self.listoperation = ko.observableArray(["+", "-", "*", "/"]);
    self.selectedoperation = ko.observable();

    self.the1 = function () {
        var self = this;
        if (self.selectedoperation() == '*') {
            self.result((+self.in1()) * (+self.in2()));
        } else if (self.selectedoperation() == '+') {
            self.result((+self.in1()) + (+self.in2()));
        } else {
            self.result(-9999);
        }
    }

}
ko.applyBindings(new indexViewModel(), document.querySelector("#main"));















