//your JS code here. If required.
const age=document.getElemetById('age').value.trim();
const name=document.getElementById('name').value.trim();
	if (name === "" || age === "") {
        alert("Both fields are required.");
        return;
      }
const ageNumber = Number(age);
new Promise((resolve,reject)=>{
	setTimeout(()=>{
		if(ageNumber>18){
			resolve(`welcome ${name}. You can vote.`);
		}
		else{
			reject(`Oh sorry ${name}. You aren't old enough.`);
		}
	},4000);
})
	.then((message) => alert(message))
    .catch((error) => alert(error));
});
