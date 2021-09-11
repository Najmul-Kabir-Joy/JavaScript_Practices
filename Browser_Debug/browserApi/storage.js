//we get the value in json object
const inJson = window.localStorage.getItem(item_name);
//to set we need to pass the item name and value. its like key and value system
window.localStorage.setItem(item_name, value);
//need to parse json obj in js obj so that we can customize it 
const inObj = JSON.parse(window.localStorage.getItem(item_name));
//adding new data in the object
inObj.user = 'Najmul';
// to set the value of we again need to transfer it to json format
const inJsonObj = JSON.stringify(inObj);
//after that we can set the value 
localStorage.setItem(item_name, inJsonObj);