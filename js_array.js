let initialValues = [1,3,4,"text",true,null,undefined,['Alin','Dragos']];


let otherValue = [2,"alttext",true,['Andrei','Maria']];

initialValues.push(...otherValue);

let sum = initialValues[0] + 2;
console.log("Suma primei valori + 2 este:" + sum);

for (let i = 0; i <initialValues.length; i++) {
    initialValues[i] += 2;
}

console.log(initialValues);

let concatenatString="";

for (let i = 0; i< initialValues.length; i++) {
    if (typeof initialValues[i] === "string") {
        concatenatString += initialValues[i] + "happecoding"
    }
}

console.log(concatenatString);

let initialValues2 =[true,false,true,false];

for ( let i = 0; i < initialValues2.length; i++) {
    if (typeof initialValues2[i] === "boolean") {
        initialValues2[i] = !initialValues2[i]
    }
}

console.log(initialValues2);


