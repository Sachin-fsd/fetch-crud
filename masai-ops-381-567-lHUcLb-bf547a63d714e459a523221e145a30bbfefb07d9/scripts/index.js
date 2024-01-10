// const url = "http://127.0.0.1:9090/employees";
// let page = 1;

// let mainSection = document.getElementById("main-section");
// let fetchEmployeesButton = document.getElementById("fetch-employees");

// window.addEventListener("load", () => {
//   // getData();

//   // document.getElementById("sort-low-to-high").onclick = () => {
//   //   sortLowToHigh();
//   // };

//   // document.getElementById("sort-high-to-low").onclick = () => {
//   //   sortHighToLow();
//   // };

//   // document.getElementById("greater-than").onclick = () => {
//   //   greaterThan();
//   // };

//   // document.getElementById("less-than").onclick = () => {
//   //   lessThan();
//   // };

//   fetchEmployeesButton.addEventListener("click", function () {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         //mainSection.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`
//         getData();
//       });
//   });
// });

// let getData = async () => {
//   let res = await fetch(url);
//   res = await res.json();
//   console.log("**********", res);
//   renderDom(res);
// };

// let postData = async () => {
//   let name = document.getElementById("name");
//   let password = document.getElementById("password");
//   let batch = document.getElementById("batch");
//   let section = document.getElementById("section");
//   let score = document.getElementById("eval_score");
//   let image = document.getElementById("image");

//   let data = {
//     username: name.value,
//     batch: batch.value,
//     section: section.value,
//     score: score.value,
//     image: image.value,
//   };

//   data = JSON.stringify(data);

//   let res = await fetch(url, {
//     method: "POST",
//     body: data,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   alert(`${name.value}'s account created`);
//   name.value = null;
//   batch.value = null;
//   section.value = null;
//   score.value = null;
//   image.value = null;

//   getData();
// };

// let card = ({ id, name, batch, section, score, image }) => {
//   let div = document.createElement("div");
//   div.setAttribute("class", "student");
//   let img = document.createElement("img");
//   img.src = image;

//   let h3 = document.createElement("h3");
//   h3.innerText = name;

//   let p1 = document.createElement("p");
//   p1.setAttribute("class", "student_score");
//   p1.innerText = score;

//   let p2 = document.createElement("p");
//   p2.innerText = `Batch: ${batch}`;

//   let p3 = document.createElement("p");
//   p3.innerText = section;

//   let button_div = document.createElement("div");

//   let remove_btn = document.createElement("button");
//   remove_btn.setAttribute("class", "remove_student");
//   remove_btn.innerText = "Remove";
//   remove_btn.onclick = () => {
//     removeStudent(id);
//   };

//   let update_btn = document.createElement("button");
//   update_btn.setAttribute("class", "update_score");
//   update_btn.innerText = "Update Score";
//   update_btn.onclick = () => {
//     updateData(id);
//   };

//   button_div.append(remove_btn, update_btn);

//   div.append(img, h3, p1, p2, p3, button_div);

//   return div;
// };

// let renderDom = (data) => {
//   let container = document.getElementById("main-section");
//   container.innerHTML = null;
//   data.forEach((el) => {
//     container.append(card(el));
//   });
// };

// let removeStudent = async (id) => {
//   let res = await fetch(`${url}/${id}`, {
//     method: "DELETE",
//   });
//   getData();
// };

// let updateData = async (id) => {
//   let score = document.getElementById("new_score");
//   score.removeAttribute("disabled");
//   score.onkeypress = () => {
//     updateScore(event, id);
//   };
//   let student = await fetch(`${url}/${id}`);
//   student = await student.json();
//   score.value = student.score;
// };

// let updateScore = async (e, id) => {
//   let new_score = document.getElementById("new_score");
//   let student = await fetch(`${url}/${id}`);
//   student = await student.json();
//   if (e.key === "Enter") {
//     let data = { score: +new_score.value || +student.score };
//     let res = await fetch(`${url}/${id}`, {
//       method: "PATCH",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     new_score.value = null;
//     new_score.setAttribute("disabled", true);
//     getData();
//   }
// };

// let sortLowToHigh = async () => {
//   let res = await fetch(`${url}?_sort=score&_order=asc`);
//   res = await res.json();
//   renderDom(res);
// };

// let sortHighToLow = async () => {
//   let res = await fetch(`${url}?_sort=score&_order=desc`);
//   res = await res.json();
//   renderDom(res);
// };

// let greaterThan = async () => {
//   let res = await fetch(`${url}?score_gt=5`);
//   res = await res.json();
//   renderDom(res);
// };

// let lessThan = async () => {
//   let res = await fetch(`${url}?score_lte=5`);
//   res = await res.json();
//   renderDom(res);
// };

// let register = document.getElementById("register_student");
// register.addEventListener("click", async function () {
//   let username = document.getElementById("username").value;
//   let password = document.getElementById("password").value;
//   let firstname = document.getElementById("firstname").value;
//   let lastname = document.getElementById("lastname").value;
//   let email = document.getElementById("email").value;

//   let data = {
//     username,
//     password,
//     firstname,
//     lastname,
//     email,
//     avatar:
//       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/850.jpg",
//   };

//   data = JSON.stringify(data);

//   let re = await fetch("http://localhost:9090/user/register", {
//     method: "POST",
//     body: data,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   alert("User created successfully");
// });

// let login = document.getElementById("login_student");
// let AuthToken = null;

// login.addEventListener("click", async function () {
//   let login_username = document.getElementById("login-username").value;
//   let login_password = document.getElementById("login-password").value;

//   let log = {
//     username: login_username,
//     password: login_password,
//   };

//   log = JSON.stringify(log);

//   try {
//     let f = await fetch("http://localhost:9090/user/login", {
//       method: "POST",
//       body: log,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     let fetched = await f.json();

//     AuthToken = fetched.accessToken;
//     localStorage.setItem("AuthToken", AuthToken);
//     alert("Successfully logged in");
//   } catch (error) {
//     alert("Id/Password mismatch");
//   }
// });

// let order = document.getElementById("order");
// order.addEventListener("click", async function () {
//   AuthToken = localStorage.getItem("AuthToken") || null;

//   try {
//   let order_fetch = await fetch("http://localhost:9090/orders", {
//     method: "GET",
//     headers: {
//       "Authorization": `Bearer ${AuthToken}`,
//       "Content-Type": "application/json",
//     },
//   });

//   let order_fetched = await order_fetch.json();
//   console.log(order_fetched);
//   document.getElementById("main-section").innerHTML=`
//   <pre>${JSON.stringify(order_fetched, null, 2)}</pre>

//   `
//   } catch (error) {
//     alert("Cant't access without login")
//   }
// });


let register_btn = document.getElementById("register_student");

register_btn.addEventListener("click",async ()=>{
  let username = document.getElementById("username").value;
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let userame_check = /^[A-Za-z._]{2,}$/;
  let firstname_check = /^[A-Za-z]{2,}$/;
  let email_check = /^[a-z0-9]{2,}@[a-z]{2,}.[a-z]{2,}$/
  let password_check = /^[A-Za-z0-9!@#$%^&*_ ]{5,16}$/

  if(!userame_check.test(username)){
    document.getElementById("register_username_span").innerHTML=`
    <p style="color:red">Use only alphabets</p>
    `;
    return
  }
  if(!firstname_check.test(firstname)){
    document.getElementById("register_firstname_span").innerHTML=`
    <p style="color:red">Use only alphabets</p>
    `;
    return
  }
  if(!firstname_check.test(lastname)){
    document.getElementById("register_lastname_span").innerHTML=`
    <p style="color:red">Use only alphabets</p>
    `;
    return
  }
  if(!email_check.test(email)){
    document.getElementById("register_email_span").innerHTML=`
    <p style="color:red">Invalid email</p>
    `;
    return
  }
  if(!password_check.test(password)){
    document.getElementById("register_password_span").innerHTML=`
    <p style="color:red">Invalid password</p>
    `;
    return
  }

  let obj = {
    username,
    firstname,
    lastname,
    email,
    password,
    "avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/850.jpg"
  }
  document.getElementById("register_username_span").innerHTML="";
  document.getElementById("register_firstname_span").innerHTML="";
  document.getElementById("register_lastname_span").innerHTML="";
  document.getElementById("register_email_span").innerHTML="";
  document.getElementById("register_password_span").innerHTML="";

  try {
    let detail_post = await fetch("http://localhost:9090/user/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(obj)
  })

  console.log(detail_post);
  if(detail_post.ok){
    alert("User created successfully!")

  }
  } catch (error) {
    alert("error", error)
  }

  window.location.href="Auth_login.html"
})


// LOGIN FUNCTIONALITY



let login_btn = document.getElementById("login_student");

login_btn.addEventListener("click",async ()=>{
  let username = document.getElementById("login_username").value;
  let password = document.getElementById("login_password").value;

  let obj = {
    username,
    password
  }

  try {
    let detail_login = await fetch("http://localhost:9090/user/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(obj)
  })
  let login_fetched = await detail_login.json()

  sessionStorage.setItem("accessToken",login_fetched.accessToken);

  if(detail_login.ok){
    alert("Login successfull!")

  }
  } catch (error) {
    alert("error", error)
  }

  window.location.href="Auth_todo.html"
})

