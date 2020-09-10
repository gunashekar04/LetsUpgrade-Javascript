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
		name : "Griezman",
		age : 28,
		country : "France",
		hobbies : ["Cooking", "Singing"],
	}
];

console.log("Details of objects");
function printObjects(){
    for(let i=0;i<details.length;i++){
        console.log(details[i]);
    }
}

printObjects();