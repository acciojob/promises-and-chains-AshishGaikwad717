//your JS code here. If required.
let age=document.getElemetById('age');
let name=document.getElementById('name');
let promise=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		if(age>18){
			resolve(`welcome ${name}. You can vote.`);
		}
		else{
			reject(`Oh sorry ${name}. You aren't old enough.`);
		}
	},4000);
});
promise.then((res)=>window.alert(res)).catch((rej)=>window.alert(rej));