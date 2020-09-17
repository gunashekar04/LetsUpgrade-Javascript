let details = [
	{
		name : "karan",
		age : 25,
		city : "Bihar",
		salary : "25000 rs",
	},
	{
		name : "Ashutosh",
		age : 30,
		city : "Bilaspur",
		salary : "30000 rs",
	},
	{
		name : "Shreyas",
		age : 29,
		city : "Pune",
		salary : "28000 rs",
	},
	{
		name : "Devesh",
		age : 35,
		city : "Lucknow",
		salary : "40000 rs",
    },
    {
		name : "Aryan",
		age : 24,
		city : "Ujjain",
		salary : "35000 rs",
	}
];

function display(arr){
    let total = "";
    arr.forEach(function(detail,index){
        let row = `<tr>
               <td>${index+1}</td>
               <td>${detail.name}</td>
               <td>${detail.age}</td>
               <td>${detail.city}</td>
               <td>${detail.salary}</td>
               <td><button onclick="deleteRow(${index})">delete</button></td>
               </tr>`;
        total += row;
    });
    document.getElementsByClassName("list")[0].innerHTML = total;
}
display(details);


function SearchName() {
    let sname = document.getElementById("Searchname").value;
    let res = details.filter(function(detail){
        return(detail.name.toUpperCase().indexOf(sname.toUpperCase()) != -1);
    });
    display(res);
}

function SearchCity() {
    let scity = document.getElementById("Searchcity").value;
    let res = details.filter(function(detail){
        return(detail.city.toUpperCase().indexOf(scity.toUpperCase()) != -1);
    });
    display(res);
}

function deleteRow(index) {
    details.splice(index,1);
    display(details);
}