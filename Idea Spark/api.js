var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer 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"
);
myHeaders.append("Content-Type", "application/json");
console.log("running");

const company_names = [
  "Acumen",
  "Affirma",
  "Answerport",
  "Archimedes (greek mathemitician)",
  "Navigate",
  "Pivotal Resources",
  "Advisian",
  "Alliance Solutions Group",
  "Allied Consultants",
  "Anchor Advisors",
  "Catalyst Consulting",
  "Cognizant",
  "Collabera",
  "Data Driven Decisioning",
  "Delegata",
  "Diligent Innovations",
  "Edge Strategies",
  "Eight Revolution",
  "Endeavor Partners",
  "Experience Impact",
  "Fusion Alliance",
  "Fresh Squeezed Ideas",
  "Genesis Consulting",
  "Ground floor Consulting",
  "Holistic Business Excellence",
  "Ilumina Solutions",
  "Incrementa (un)Consulting",
];

function displayModal(json_data) {
  document.getElementById("modal_output").innerHTML = `   <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      

      <div class="wrapper">
        <div class="left">
          <img src="https://100k-faces.glitch.me/random-image" alt="user" width="100">
          <h4 id="res_clientName">CEO @<span id="res_clientName"></span></h4>
        </div>
        <div class="right">
          <div class="info">
            <div class="info_data">
              <div class="data">
                <h4>Project Name</h4>
                <p id="res_projName"></p>
              </div>
              <div class="data">
                <h4>Deadline</h4>
                <p id="res_deadline"></p>
              </div>
            </div>
          </div>

          <div class="projects">
            <h3>Skills</h3>
            <div class="projects_data">
              <div class="data">
                <p id="res_skills">
                 
                </p>
              </div>
            </div>
          </div>

          <div class="projects">
            <h3>Description</h3>
            <div class="projects_data">
              <ul id="res_description">
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- <p><button>Start</button></p> -->
      <!-- <p><button class="a_button"><a href="https://codesandbox.io/" target="_blank">Start</a></button></p> -->
    </div>
  </div>`;
  console.log(json_data);
  let res_skills = document.getElementById("res_skills");
  let res_description = document.getElementById("res_description");
  let res_deadline = document.getElementById("res_deadline");
  let res_projName = document.getElementById("res_projName");
  let res_clientName = document.getElementById("res_clientName");

  json_data.skills.map((v) => {
    const li = document.createElement("p");
    const span = document.createElement("span");
    li.classList.add("p_skills");
    if (v.toLowerCase() === "html") {
      const i = document.createElement("i");
      i.classList.add("fab");
      i.classList.add("fa-html5");
      i.style.fontSize = "25px";
      li.appendChild(i);
      span.innerText = v;
      li.appendChild(span);
    } else if (v.toLowerCase() === "javascript") {
      const i = document.createElement("i");
      i.classList.add("fab");
      i.classList.add("fa-js");
      i.style.fontSize = "25px";
      li.appendChild(i);
      span.innerText = v;
      li.appendChild(span);
    } else if (v.toLowerCase() === "css") {
      const i = document.createElement("i");
      i.classList.add("fab");
      i.classList.add("fa-css3");
      i.style.fontSize = "25px";
      li.appendChild(i);
      span.innerText = v;
      li.appendChild(span);
    } else if (v.toLowerCase() === "python") {
      const i = document.createElement("i");
      i.classList.add("fab");
      i.classList.add("fa-python");
      i.style.fontSize = "25px";
      li.appendChild(i);
      span.innerText = v;
      li.appendChild(span);
    } else if (v.toLowerCase() === "java") {
      const i = document.createElement("i");
      i.classList.add("fab");
      i.classList.add("fa-java");
      i.style.fontSize = "25px";
      li.appendChild(i);
      span.innerText = v;
      li.appendChild(span);
    } else if (v.toLowerCase() === "react") {
      const i = document.createElement("i");
      i.classList.add("fab");
      i.classList.add("fa-react");
      i.style.fontSize = "25px";
      li.appendChild(i);
      span.innerText = v;
      li.appendChild(span);
    } else if (v.toLowerCase() === "angular") {
      const i = document.createElement("i");
      i.classList.add("fab");
      i.classList.add("fa-angular");
      i.style.fontSize = "25px";
      li.appendChild(i);
      span.innerText = v;
      li.appendChild(span);
    } else if (v.toLowerCase() === "linux") {
      const i = document.createElement("i");
      i.classList.add("fab");
      i.classList.add("fa-linux");
      i.style.fontSize = "25px";
      li.appendChild(i);
      span.innerText = v;
      li.appendChild(span);
    } else if (v.toLowerCase() === "nodejs") {
      const i = document.createElement("i");
      i.classList.add("fab");
      i.classList.add("fa-node-js");
      i.style.fontSize = "25px";
      li.appendChild(i);
      span.innerText = v;
      li.appendChild(span);
    } else {
      const i = document.createElement("i");
      i.classList.add("fa");
      i.classList.add("fa-code");
      i.style.fontSize = "25px";
      li.appendChild(i);
      span.innerText = v;
      li.appendChild(span);
    }

    res_skills.appendChild(li);
  });

  res_projName.innerText = json_data.projectName;
  res_deadline.innerText = json_data.deadline + " days";
  res_clientName.innerText = json_data.clientName;
  res_description.innerText = json_data.description;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("submit").value = "Loading...."
  let client_name = company_names[Math.floor(Math.random() * 27)];
  let skills = document.getElementById("skills").value;
  let projectDuration = document.getElementById("projectDuration").value;
  let experience = document.getElementById("experience").value;
  let subCategory = document.getElementById("subCategory").value;
  let cont = `As a client, I need a ${subCategory} project completed within ${projectDuration} days. The project should utilize skills in ${skills} with experience of ${experience}. Please provide a project name, deadline, and description, client name in JSON format as described below {
      "projectName": " Website Design",
      "deadline": "14",
      "description": "",
      "skills": ["HTML", "CSS", "JavaScript"],
"clientName":"${client_name}"
    }`;

  var raw = JSON.stringify({
    model: "gpt-3.5-turbo-0301",
    messages: [
      {
        role: "user",
        content: cont,
      },
    ],
  });
  console.log(raw);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://api.openai.com/v1/chat/completions", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      displayModal(JSON.parse(JSON.parse(result).choices[0].message.content))
    })
    .catch((error) => console.log("error", error));
});
