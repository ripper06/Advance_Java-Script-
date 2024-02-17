let obj = {
    toString(){
return "When overridden doesn't return [object Object]";
    }
};

console.log( obj.toString());
//obj.toString type is string 
//[object Object](string) is the default value of toString


let obj1 ={x: 10};
console.log(obj1.valueOf());
//by default valueOf returns the same object
//type of obj.valueOf is an object

let obj2 ={x: 10, valueOf(){return 10;}};
console.log(obj2.valueOf());
//default value can be ignored by overriding it