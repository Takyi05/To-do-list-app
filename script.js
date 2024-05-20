/*let toDo=[]

function show_input(){
	let displayInput=document.getElementById("display-input")
	let template=toDo.map(toDo=>`<li>${`<input type="checkbox" id="check_box">`+ toDo}</li>`).join('\n')
	displayInput.innerHTML=template

}

function add_To(){
	let inputEl=document.getElementById("input-el")
	if (inputEl.value==""){
		alert("Please enter Task!")
	} else{
	toDo.push(inputEl.value);
	inputEl.value=''
	show_input()}
}

function remove_Task(index) {
	toDo.splice(index, 1);
		show_input();
}

let checkBox=document.querySelector("#check_box")
checkBox.addEventListener('change',function remove_Task(index){
	if (this.checked){
		toDo.splice(index, 1);
		show_input();
	}
})*/

let toDo = [];

window.onload = function() {
	const storedToDo = localStorage.getItem('toDoList');
	if (storedToDo) {
		toDo = JSON.parse(storedToDo);
	}
	show_input();
};

function show_input() {
	let displayInput = document.getElementById("display-input");
	let template = toDo.map((task, index) => `
		<li id="my_list">
			<label><input type="checkbox" onchange="change_Color(this)">
			${task}</label>
			<button class="removeBtn" onclick="remove_Task(${index})"> Remove</button>
		</li>
	`).join('\n');
	displayInput.innerHTML = template;
}

function add_To() {
	let inputEl = document.getElementById("input-el");
	if (inputEl.value === "") {
		alert("Please enter Task!");
	} else {
		toDo.push(inputEl.value);
		inputEl.value = '';
		updateLocalStorage()
		show_input();
	}
}

function remove_Task(index) {
	toDo.splice(index, 1);
	updateLocalStorage()
	show_input();
}

function change_Color(checkbox){
		let label=checkbox.parentElement
		label.style.color=checkbox.checked?"green":""
}

function updateLocalStorage() {
	localStorage.setItem('toDoList', JSON.stringify(toDo));
}

