let array = [ -1, 5, "cat", false, 10.2, true, "dog","woof",true];

function arrayToObject(array){
    let arrayToObject = {};
    let string = [];
    let number = [];
    let boolean = [];
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] == "string"){
            string.push(array[i]);
            arrayToObject.strings = string;
        }
        else if(typeof array[i] == "number"){
            number.push(array[i]);
            arrayToObject.numbers = number;
        }
        else{
            boolean.push(array[i]);
            arrayToObject.booleans = boolean;
        }
    }

    return arrayToObject;
}

function addElement(type,text,id){
    let newEl = document.createElement(type);
    let newElText = document.createTextNode(text);
    newEl.append(newElText);

    if(typeof id == "string"){
        let where = document.getElementById(id);
        document.body.insertBefore(newEl,where);
    }
    else{
        document.body.append(newEl);
    }
}

for(let i = 0; i < array.length; i++){
    addElement("p",array[i],"normal");
}

let arrayObject = arrayToObject(array);

for (let [key, value] of Object.entries(arrayObject)){

    addElement("h3",key);
    addElement("p",value);
    console.log( key+": "+value);
}


