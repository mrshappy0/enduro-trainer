const searchParams = new URLSearchParams(window.location.search);
const query_id = searchParams.get("id");
const trailInfoList = document.querySelector(".trail-info-list");

fetch(`http://localhost:3000/trails/${query_id}`)
  .then(response => response.json())
  .then(trail => {
    // console.log(trail);
    let h2 = document.createElement("h2");
    let li0 = document.createElement("li");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    h2.innerText = `Trail Name: ${trail.name}`;
    h2.classList.add("add-bold")
    li0.innerText = `Summary: ${trail.summary}`;
    li1.innerText = `Location: ${trail.location}`;
    li2.innerText = `Rowdiness level: ${trail.difficulty}`;
    li3.innerText = `Rating: ${trail.stars} stars`;
    li4.innerText = `Distance: ${trail.distance} miles`;

    trailInfoList.appendChild(h2);
    trailInfoList.appendChild(li0);
    trailInfoList.appendChild(li1);
    trailInfoList.appendChild(li2);
    trailInfoList.appendChild(li3);
    trailInfoList.appendChild(li4);
  });
