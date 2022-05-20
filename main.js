function myview() {
    this.username = ko.observable("fabio");
    this.count = ko.observable(0);
    this.decrease = function() {
        let tempCount = this.count();
        this.count(tempCount - 1);
    };
    this.increase = function() {
        let tempCount = this.count();
        this.count(tempCount + 1);
    };
};

ko.applyBindings(new myview());