//oleg pls
//JSON variable
let peoples = [
    {
        name: "Jane Doe",
        sex: "f",
        born: "1879",
        died: "1952",
        father: "Peter the Great",
        mother: "Jill the Great"
    },
    {
        name: "Jane Ramirez",
        sex: "f",
        born: "1820",
        died: "1900",
        father: "Bob the Great",
        mother: "Filly the Great"
    },
    {
        name: "Josh Doe",
        sex: "m",
        born: "1900",
        died: "1923",
        father: "Unknown",
        mother: "Chasity of Rhodes"
    },
    {
        name: "Josh Kravchuk",
        sex: "m",
        born: "1879",
        died: "2012",
        father: "Yoda",
        mother: "Unknown"
    },
    {
        name: "Hillary Clinton",
        sex: "f",
        born: "1879",
        died: "not yet",
        father: "Trump",
        mother: "Geico Lizard"
    }
];

//Gets the button when is clicked
let search = document.getElementById("search").onclick = showResult;

//function for searching. Searches by string inputed
//exmp  j would pull up each name that starts with j
//exmp empty would pull up every name
peoples.getSearch = function (test, input){
    let passed = [];
    for(let name of peoples){
        let holder = test(name).substr(0,input.length).toLowerCase();
        if(holder === input){
            passed.push(name);
        }
    }
    if(passed.length === 0){
        passed = "No Person Found"
    }
    return passed;
};

//this function shows the results from the search function
//each time that it runs removes the previous search
function showResult(){
    let inputName = $("#name").val().toLowerCase();
    let search = peoples.getSearch(name => name.name, inputName);

    //this removes all the old search results to make room for the new search
    //results
    let getRid = document.getElementsByTagName("p");
    let getBR = document.getElementsByTagName("br");
    let size = getRid.length;
    for(let i = 0; i < size; i++){
        getRid[0].remove();
        if(getBR.length !== 0){
            getBR[0].remove();
        }
    }

    //this checks if the search managed to find any data
    //if no then will print no result.
    if(Array.isArray(search)){
        for(let key of search){
            for (let [key2, value] of Object.entries(key)){
                let fistLetter = key2.substr(0,1).toUpperCase();
                let finalWord = fistLetter+key2.substr(1);
                addElement("p",finalWord+": "+value,"add");
            }
            addElement("br","");
        }
    }
    else{
       addElement("p",search);
    }
}

//helper function for showResult. appends the tags to the Dom
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

//test output
//console.log(peoples.getSearch(name => name.name, "josh"));