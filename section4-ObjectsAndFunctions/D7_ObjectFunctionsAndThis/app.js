function a () {
    console.log(this);
    this.newVariable = 'hello';
}

var b = function() {
    console.log(this);
}

a();

console.log(newVariable);

b();

var c = {
    name: "The c object",
    log: function() {
        var self = this;
        this.name = 'Updated c object';
        console.log(self);

        var setName = function(newname) {
            self.name = newname;
        }
        setName('Updated again! The c object');
        console.log(self);
    }
}

c.log();