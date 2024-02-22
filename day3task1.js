let obj1 = { name: "sanjay", age: 4};
let obj2 = { age: 4, name: "sanjay"};

if(Object.keys(obj1).length === Object.keys(obj2).length){
    console.log("length is same")

    for (let key in obj1) {
        if (obj1[key] === obj2[key]){
            console.log(key + " has same value");
        }
        else{
            console.log(key + " dosent have same value");
        }
    }
}
else{
    console.log("object are different");
}