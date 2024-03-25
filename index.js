// // Task - 1
// class Employee {
//     constructor(ad, yas, vezife, maas) {

//         this.ad = ad;

//         this.yas = yas;

//         this.vezife = vezife;

//         this.maas = maas;
//     }

//     promote(yeniVezife, yeniMaas) {

//         this.vezife = yeniVezife;

//         console.log(`Vezife ${this.vezife} oldu`)

//         this.maas = yeniMaas;

//         console.log(`Maas ${this.maas} oldu `)

//     }

//     birthday() {

//         this.yas++;

//     }


//     displayInfo() {

//         console.log(`Ad: ${this.ad}, Yaş: ${this.yas}, Vəzifə: ${this.vezife}, Maaş: ${this.maas}`);

//     }
// }

// let employee1 = new Employee("Fariz", 30, "Muhasib", 800);

// employee1.displayInfo();


// employee1.promote("Bas-Muhasib",1000);

// employee1.birthday();

// employee1.displayInfo();


// // Task - 2

// let arr = []

// const ikicieded = () => {

//     arr.sort((a, b) => a - b);

//     console.log(arr[1]);

// }

// arr.push(5, 8, 4 , 1, 9, 3);

// ikicieded()



// Task -3 


// let arr = [];

// const yuksekxal = () => {

//     arr.sort((a, b) => b.xal - a.xal);

//     return arr[0];

// };

// arr.push(
//     { ad: "Aysel", xal: 85 },
//     { ad: "Tural", xal: 92 },
//     { ad: "Nigar", xal: 78 },
//     { ad: "Vusal", xal: 96 }
// );

// console.log(yuksekxal());



// Task - 4


// let ededler = [];

// function boyukeded(eded) {

//     let enboyukeded = Math.max(...eded);

//     let say = eded.filter(item => item === enboyukeded).length;

//     return say;

// }

// ededler.push(8, 6, 8, 4, 5, 7, 3, 8, 5, 5)

// console.log(boyukeded(ededler));













//Task - 5                     


// !!!Bu tapsırığa baxmaq üçün css və html faylındaki commentləri sil!!! 




// const form = document.getElementById('formId');

// const taskContainer = document.getElementById('taskContainer');

// const filter_button = document.getElementById('button2');

// let tasks = [];


// form.addEventListener('submit', (e) => {

//     e.preventDefault();

//     const data = new FormData(e.target);

//     const formValues = {};

//     for (let [key, value] of data.entries()) {

//         formValues[key] = value;

//     }

//     formValues.id = Math.trunc(Math.random() * 1000);

//     formValues.isComplete = false;

//     tasks.push(formValues);

//     listTasks();
// });


// function listTasks() {

//     taskContainer.innerHTML = '';

//     tasks.forEach((task) => {

//         const allElement = document.createElement('div');

//         const AlltaskElement = document.createElement('div');

//         const deleteButton = document.createElement('button');

//         const checkboxdiv = document.createElement('div');

//         const checkboxdiv2 = document.createElement('label');

//         const checkbox = document.createElement('input');

//         const checkboxspan = document.createElement('span')

//         checkboxdiv.classList.add('checkbox-wrapper-64')

//         checkboxdiv2.classList.add('switch')
        
//         checkboxspan.classList.add('slider')

//         checkbox.type = 'checkbox';

//         checkbox.checked = task.isComplete;

//         if (task.isComplete) {

//             AlltaskElement.style.backgroundImage = "radial-gradient(circle at 21% 44%, rgba(23, 23, 23,0.05) 0%, rgba(23, 23, 23,0.05) 50%,rgba(109, 109, 109,0.05) 50%, rgba(109, 109, 109,0.05) 100%),radial-gradient(circle at 21% 96%, rgba(92, 92, 92,0.05) 0%, rgba(92, 92, 92,0.05) 50%,rgba(199, 199, 199,0.05) 50%, rgba(199, 199, 199,0.05) 100%),radial-gradient(circle at 25% 37%, rgba(230, 230, 230,0.05) 0%, rgba(230, 230, 230,0.05) 50%,rgba(25, 25, 25,0.05) 50%, rgba(25, 25, 25,0.05) 100%),linear-gradient(90deg, rgb(156, 48, 160),rgb(75, 105, 255))";

//         }

//         deleteButton.classList.add('deleteButton');

//         const text = document.createElement('p');

//         const taskElement = document.createElement('div');

//         const text1 = document.createElement('p');

//         const taskElement1 = document.createElement('div');

//         text.textContent = 'Task Name:';

//         taskElement.textContent = task.taskName;

//         text1.textContent = 'Description:';

//         taskElement1.textContent = task.taskDescription;

//         AlltaskElement.appendChild(text);

//         AlltaskElement.appendChild(taskElement);

//         AlltaskElement.appendChild(text1);

//         AlltaskElement.appendChild(taskElement1);

//         AlltaskElement.appendChild(deleteButton);

//         checkboxdiv.appendChild(checkboxdiv2)

//         checkboxdiv2.appendChild(checkbox);
        
//         checkboxdiv2.appendChild(checkboxspan)

//         allElement.appendChild(checkboxdiv);


//         allElement.appendChild(AlltaskElement);

//         taskContainer.appendChild(allElement);

//         deleteButton.addEventListener('click', () => {

//             removeFunc(task.id);

//         });

//         checkbox.addEventListener('change', () => {

//             completeTask(task.id);

//             if (task.isComplete) {

//                 AlltaskElement.style.backgroundImage = "radial-gradient(circle at 21% 44%, rgba(23, 23, 23,0.05) 0%, rgba(23, 23, 23,0.05) 50%,rgba(109, 109, 109,0.05) 50%, rgba(109, 109, 109,0.05) 100%),radial-gradient(circle at 21% 96%, rgba(92, 92, 92,0.05) 0%, rgba(92, 92, 92,0.05) 50%,rgba(199, 199, 199,0.05) 50%, rgba(199, 199, 199,0.05) 100%),radial-gradient(circle at 25% 37%, rgba(230, 230, 230,0.05) 0%, rgba(230, 230, 230,0.05) 50%,rgba(25, 25, 25,0.05) 50%, rgba(25, 25, 25,0.05) 100%),linear-gradient(90deg, rgb(156, 48, 160),rgb(75, 105, 255))";

//             }

//             else {
//                 AlltaskElement.style.backgroundImage = "radial-gradient(circle at 79% 30%, rgba(230, 230, 230, 0.04) 0%, rgba(230, 230, 230, 0.04) 50%, rgba(12, 12, 12, 0.04) 50%, rgba(12, 12, 12, 0.04) 100%), radial-gradient(circle at 53% 89%, rgba(210, 210, 210, 0.04) 0%, rgba(210, 210, 210, 0.04) 50%, rgba(24, 24, 24, 0.04) 50%, rgba(24, 24, 24, 0.04) 100%), radial-gradient(circle at 92% 89%, rgba(17, 17, 17, 0.04) 0%, rgba(17, 17, 17, 0.04) 50%, rgba(205, 205, 205, 0.04) 50%, rgba(205, 205, 205, 0.04) 100%), radial-gradient(circle at 21% 13%, rgba(124, 124, 124, 0.04) 0%, rgba(124, 124, 124, 0.04) 50%, rgba(243, 243, 243, 0.04) 50%, rgba(243, 243, 243, 0.04) 100%), radial-gradient(circle at 77% 0%, rgba(16, 16, 16, 0.04) 0%, rgba(16, 16, 16, 0.04) 50%, rgba(130, 130, 130, 0.04) 50%, rgba(130, 130, 130, 0.04) 100%), linear-gradient(90deg, rgb(247, 101, 31), rgb(249, 105, 208))"
//             }


//         });

//         deleteButton.innerText = 'Delete';

//         taskContainer.style.display = 'grid';

//         taskContainer.style.justifyContent = 'center';

//         AlltaskElement.style.border = '10px solid black';

//         AlltaskElement.style.paddingBottom = '1rem';

//         AlltaskElement.style.marginBottom = '1rem';

//         AlltaskElement.style.marginTop = '1rem';

//         taskElement.style.paddingTop = '1rem';

//         taskElement.style.paddingBottom = '1rem';

//         taskElement1.style.paddingTop = '1rem';

//         taskElement1.style.paddingBottom = '1rem';

//         AlltaskElement.style.paddingTop = '2rem';

//         AlltaskElement.style.paddingBottom = '2rem';

//         AlltaskElement.style.paddingRight = '2rem';

//         AlltaskElement.style.paddingLeft = '2rem';

//         AlltaskElement.style.width = '400px';

//         text.style.color = "rgb(204, 255, 255)"

//         text1.style.color = "rgb(204, 255, 255)"

//         text1.style.fontSize = "1.5rem"

//         text.style.fontSize = "1.5rem"

//         taskElement.style.fontSize = "1.5rem"

//         taskElement1.style.fontSize = "1.5rem"

//         taskElement.style.color = "white"

//         taskElement1.style.color = "white"
//     });
// }


// const removeFunc = (id) => {

//     tasks = tasks.filter(task => task.id !== id);

//     listTasks();

// };

// const completeTask = (id) => {

//     const selectedTaskIndex = tasks.findIndex(task => task.id === id);

//     if (selectedTaskIndex !== -1) {

//         tasks[selectedTaskIndex].isComplete = !tasks[selectedTaskIndex].isComplete;

//     }
// };

// document.getElementById('button1').addEventListener('click', function () {

//     if (document.getElementById('items_container').style.display == 'none') {

//         document.getElementById('items_container').style.display = 'block';

//     }

//     else {

//         document.getElementById('items_container').style.display = 'block';

//     }
// })


// const filterTask = () => {

//     tasks.sort((a, b) => a.isComplete - b.isComplete);

//     listTasks();
// };

// filter_button.addEventListener('click', () => {
//     filterTask()
// });

