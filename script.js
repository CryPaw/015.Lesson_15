Array.prototype.removeElement = function(value) {
    this.splice(this.indexOf(value), 1);
}

const array = [1, 2, 3, 4, 5, 6, 7];
var item = 5;

array.removeElement(item);

console.log(array);