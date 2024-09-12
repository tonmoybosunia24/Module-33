// How does internet work, HTTP Vs HTTPs and What is an API



// const user = {id: 1, name: "Gorib Amir", job: "actor"}
// console.log(user)



// Intro to JSON, JSON Structure, parse, stringify



const user = {id: 1, name: "Gorib Amir", job: "actor"}
// Javascript Object Notation(Json)
const stringified =  JSON.stringify(user) /* (stringify) এটা ব্যাবহার করা হয় কোন অবজেক্ট কে জেসন ফাইলে তৈরী করার জন্য।জেসন ফাইল সবসময় স্টিং আকারে থাকবে। */
// console.log(stringified)
const shop = {
       owoner: 'alia',
       address: {
              street: 'kochukhet voot er goli',
              city: 'ranbir',
              country: 'bd',
       },
       products: ['laptop', 'mic', 'monitor', 'keyboard'],
       revenue: 45000,
       isOpen: true,
       isNew: false
}
// console.log(shop)
// const shopJson = JSON.stringify(shop);
// console.log(shopJson)
// const shopObzject = JSON.parse(shopJson) /* (parse) এটা ব্যাবহার করা হয় কোন জেসন ফাইল্ কে অবজেক্ট এ রুপান্ত্রের জন্য। */
// console.log(shopObject)



// JSON placeholder, GET data, display data on UI




// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => console.log(response)) /* Json is not similer but close to Json.Parse */
//       .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// function loadData(){
//        fetch('https://jsonplaceholder.typicode.com/todos/1')
//        .then(response => response.json())
//        .then(json => console.log(json))
// }




// Load more data, more APIs, send data to function




// function loadData2(){
//        fetch('https://jsonplaceholder.typicode.com/todos/1')
//        .then(res => res.json())
//        .then(data => console.log(data));
// }
// function loadUsers(){
//        fetch('https://jsonplaceholder.typicode.com/users')
//        .then(res => res.json())
//        .then(data => displayUsers(data))
// }
// function displayUsers(data){
//        console.log(data)
// }



// Dynamically display loaded data on your website




// function loadUsers2(){
//        fetch('https://jsonplaceholder.typicode.com/users')
//        .then(res => res.json())
//        .then(data => displayUsers2(data))
// }
// function displayUsers2(data){
//        const ul = document.getElementById("Users2-List")
//        for(const user of data){
//               // console.log(user.name)
//               const li = document.createElement("li")
//               li.innerText = user.email;
//               ul.appendChild(li)
//        }
// }




// Load posts and display on the website with CSS




// function loadPost(){
//        fetch('https://jsonplaceholder.typicode.com/posts')
//        .then(res => res.json())
//        .then(data => displayPost(data))
// }
// function displayPost(posts){
//        const postSection = document.getElementById("Post-Section")
//        for(const post of posts){
//               const div = document.createElement("div");
//               div.classList.add("border-2", "mb-5")
//               div.innerHTML = `
//                      <h4>User-${post.userId}</h4>
//                      <h5>Post: Title : ${post.title}</h5>
//                      <p>Post Description : ${post.body}</p>
//               `;
//               postSection.appendChild(div)
//        }
// }
// loadPost();




// GET, POST, PATCH, DELETE, CRUD, GET Vs POST




// Debug API, Network tab,Status code, headers, bad API



// async await and interview questions



// const loadComments = () =>{
//        fetch('https://jsonplaceholder.typicode.com/comments')
//        .then(res => res.json())
//        .then(data => console.log(data))
//        .catch(error => console.error("Error Happend", error)) /* এর‍্যোর টাকে ধরার জন্য। */
// }
// loadComments()
// const loadcomments2 = async() =>{
//        try {
//               const res = await fetch('https://jsonplaceholder.typicode.com/comments')
//               const data = await res.json()
//               console.log(data)
//        }
//        catch(error){
//               console.error("Data Load Error")
//        }
// }
// loadcomments2()