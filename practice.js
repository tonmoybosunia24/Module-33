// const user = {id: 1, name: "Gorib Khan", job: "actor"}
// console.log(user)
// const stringified = JSON.stringify(user)
// console.log(stringified)
// const shop = {
//        owoner: 'alia',
//        address: {
//               street: 'kochukhet voot er goli',
//               city: 'ranbir',
//               country: 'bd',
//        },
//        products: ['laptop', 'mic', 'monitor', 'keyboard'],
//        revenue: 45000,
//        isOpen: true,
//        isNew: false
// }
// console.log(shop)
// const shopJson = JSON.stringify(shop)
// console.log(shopJson)
// const shopObject = JSON.parse(shopJson)
// console.log(shopObject)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res => res.json())
// .then(data => loadData(data))

// function loadData(){
//        fetch('https://jsonplaceholder.typicode.com/todos/1')
//        .then(res => res.json())
//        .then(data => console.log(data))
// }

// function loadData2(){
//        fetch('https://jsonplaceholder.typicode.com/todos/1')
//        .then(res => res.json())
//        .then(data => console.log(data))
// }
// function loadUsers(){
//        fetch('https://jsonplaceholder.typicode.com/users')
//        .then(res => res.json())
//        .then(data => displayUsers(data))
// }
// function displayUsers(users){
//        console.log(users)
// }
// function loadUsers2(){
//        fetch("https://jsonplaceholder.typicode.com/users")
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

// function loadPost(){
//        fetch('https://jsonplaceholder.typicode.com/posts')
//        .then(res => res.json())
//        .then(data => displayPost(data))
// }
// function displayPost(posts){
//        const postSection = document.getElementById("Post-Section") 
//        for(const post of posts){
//               const div = document.createElement("div")
//               div.classList.add("border-2", "mb-5")
//               div.innerHTML = `
//                      <h4>User-${post.userId}</h4>
//                      <h5>Post: Title : ${post.title}</h5>
//                      <p>Post Description : ${post.body}</p>
//               `;
//               postSection.appendChild(div)
//        }
// }
// loadPost()

// const loadComments = () =>{
//        fetch('https://jsonplaceholder.typicode.com/comments')
//        .then(res => res.jon())
//        .then(data => console.log(data))
//        .catch(error => console.error("error happend", error));
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