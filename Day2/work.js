//JSON to obj

const jsonString = '{"name": "Sabin", "age" : 17, "address" : "ktm"}';

const jsonObj = JSON.parse(jsonString);
console.log(typeof jsonObj);


//Obj to JSON

const jsonObj2 = {
    name : "sabin", age: 25
}

const jsonString2 = JSON.stringify(jsonObj2)
console.log(typeof jsonString2)
