var ViewModel = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Micio');
    this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
    this.imgAttribution = ko.observable('');

    this.incrementCounter = function(){
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());