let details = [
	{
		name : "Messi",
		age : 33,
		country : "Spain",
		hobbies : ["Dancing","Painting"],
	},
	{
		name : "Ronaldo",
		age : 35,
		country : "Italy",
		hobbies : ["Acting","Swimming"],
	},
	{
		name : "Neymar",
		age : 29,
		country : "Brazil",
		hobbies : ["Photography", "Gaming"],
	},
	{
		name : "Chethri",
		age : 28,
		country : "India",
		hobbies : ["Cooking", "Singing"],
	}
];

console.log("Details of object having Age less than 30");
function displayAge(){
    for(let i=0;i<details.length;i++){
        if(details[i].age<30){
            console.log(details[i]);
        }
    }
}

displayAge();

console.log("Details of objects where country is India");
function displayCountry(){
    for(let i=0;i<details.length;i++){
        if(details[i].country == "India"){
            console.log(details[i]);
        }
    }
}

displayCountry();