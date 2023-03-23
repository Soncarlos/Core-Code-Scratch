let a = {
    num:[2, 5, 7, 3 ,4,],
    first: function(){return (this.num[0]);},
    last: function(){return (this.num[this.num.length-1]);}
};

console.log(a.first());
console.log(a.last());
