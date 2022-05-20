function myview() {
    this.username = ko.observable("bla");
    this.count = ko.observable(0);
    this.decrease = function() {
        let tempCount = this.count();
        this.count(tempCount - 1);
    };
    this.increase = function() {
        let tempCount = this.count();
        this.count(tempCount + 1);
    };

    this.inventory = ko.observableArray([
        {name: "Jonny", age: 23},
        {name: "Jack", age: 26}
    ]);
};

ko.applyBindings(new myview());