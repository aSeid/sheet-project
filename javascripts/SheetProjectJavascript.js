function getSaveVal(val, lvl) {
if (lvl >= 1 && lvl <= 20) {
if (val == "GOOD") {return Math.floor((2+(lvl*.5)));}
else {return Math.floor(lvl*.3);}
}
else window.alert("Your level is bad and you should feel bad.");   
}

function update(){
var chosenClassAbbrv = document.getElementById("class").value;
var chosenClass = getClassObject(chosenClassAbbrv);

var obj = JSON.parse(chosenClass);

var form = document.getElementById("class");
document.getElementById("demo").innerHTML =
obj.name 
+ "<br>" +
obj.BAB + "<br>" +
getSaveVal(obj.FORT, document.getElementById("level").value);
}

function getClassObject(abbrv){
var ftr = '{"name":"Fighter","BAB":"GOOD","FORT":"GOOD", "REF": "BAD", "WILL": "BAD"}';
var bar = '{"name": "Barbarian", "BAB": "GOOD", "FORT": "GOOD", "REF": "BAD", "WILL":"BAD"}';
var brd = '{"name": "Bard", "BAB" : "BAD", "FORT" : "BAD", "REF": "GOOD", "WILL": "GOOD"}';
var cle = '{"name" : "Cleric", "BAB" : "BAD", "FORT" : "GOOD", "REF": "BAD", "WILL" : "GOOD"}';
var dru = '{"name" : "Druid", "BAB" : "BAD", "FORT" : "GOOD", "REF" : "BAD", "WILL" : "GOOD"}';
var mon = '{"name" : "Monk", "BAB" : "BAD", "FORT" : "GOOD", "REF" : "GOOD", "wILL" : "GOOD"}';
var pal = '{"name" : "Paladin", "BAB" : "GOOD", "FORT" : "GOOD", "REF" : "BAD", "WILL" : "BAD"}';
var ran = '{"name" : "Ranger", "BAB" : "GOOD", "FORT" : "GOOD", "REF" : "GOOD", "WILL" : BAD"}';
var rog = '{"name" : "Rogue", "BAB" : "BAD", "FORT" : "BAD", "REF" : "GOOD", "WILL" : "BAD"}';
var sor = '{"name" : "Sorcerer", "BAB" : "BAD", "FORT" : "BAD", "REF" : "BAD", "WILL" : "GOOD"}';
var wiz = '{"name" : "Wizard", "BAB" : ""BAD", "FORT" : "BAD", "REF" : "BAD", "WILL" : "GOOD"}';

if (abbrv == "ftr") return ftr;
else if (abbrv == "bar") return bar;
else if (abbrv == "brd") return brd;
else if (abbrv == "cle") return cle;
else if (abbrv == "dru") return dru;
else if (abbrv == "mon") return mon;
else if (abbrv == "pal") return pal;
else if (abbrv == "ran") return ran;
else if (abbrv == "rog") return rog;
else if (abbrv == "sor") return sor;
else if (abbrv == "wiz") return wiz;


}
