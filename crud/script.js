var i = 0;
// let email=document.getElementById("email");
let button = document.querySelector("#btn");
button.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (!name == "" && !email == "") {
    if (name.length >= 5) {
        
      let element = document.querySelector("tbody");
      let tr = document.createElement("tr");
      tr.innerHTML = `
    <td class="id-title">${i + 1}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>
    <div class="edit">
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
    </div>
    </td>
    `;
      let name1 = document.getElementById("name");
      name1.value = "";
      let email1 = document.getElementById("email");
      email1.value = "";
      element.appendChild(tr);
      i++;
      // remove element
      tr.querySelector(".delete-btn").addEventListener("click", (e) => {
        const removeelem = e.target.parentElement.parentElement.parentElement;
        removeelem.remove();
        i--;
      });

      // edit element
      tr.querySelector(".edit-btn").addEventListener("click", (e) => {
        const data = e.target.parentElement.parentElement.parentElement;
        const news = data.querySelectorAll("td");
        const nameexpo = news[1].innerText;
        const emailexpo = news[2].innerText;

        editdata(nameexpo, emailexpo, data);
      });
    }
  }
});

function editdata(name, email, data) {
  let editname = document.querySelector("#new-name");
  editname.value = name;
  let editemail = document.querySelector("#new-email");
  editemail.value = email;
  const news = data.querySelectorAll("td");
  const nameexpo = news[1];
  const emailexpo = news[2];

  const updatebutton = document.querySelector(".btn-1");

  // Remove any existing event listener before adding a new one
  updatebutton.replaceWith(updatebutton.cloneNode(true));

  const newupdatebutton = document.querySelector(".btn-1");
  newupdatebutton.addEventListener("click", () => {
    nameexpo.innerText = editname.value;
    emailexpo.innerText = editemail.value;
    data;
  });
}

const cancelbtn = document.querySelector(".btn-2");
cancelbtn.addEventListener("click", () => {
  let editname = document.querySelector("#new-name");
  editname.value = "";
  let editemail = document.querySelector("#new-email");
  editemail.value = "";
});
