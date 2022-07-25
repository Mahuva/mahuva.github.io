
const check = function () {

    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    let date = "Sent At : " + hour + ":" + minute + ":" + second + "   " + day + "/" + month + "/" + year;
    let memory = document.querySelector(".memory");
    let user = document.querySelector(".userWords").value.toLowerCase()
    let userVal = data[user] === undefined || null ? null : "you : " + user;
    let answer = data[user] === undefined || null ? null : "Robot : " + data[user]

    let userParagraph = document.createElement("p");
    userParagraph.setAttribute("title", date)
    userParagraph.setAttribute("class", "userp");
    userParagraph.textContent = userVal;
    if (userVal !== null) memory.appendChild(userParagraph)

    let robotParagraph = document.createElement("p");
    robotParagraph.setAttribute("title", date)
    robotParagraph.setAttribute("class", "robotp");
    robotParagraph.textContent = answer;
    if (answer !== null) memory.appendChild(robotParagraph)

    let element = document.querySelector(".memory").children

    if (element.length > 100) {
        console.log("removed")
        let select = document.querySelector(".memory")
        select.removeChild(select.firstchild);
    }

}

