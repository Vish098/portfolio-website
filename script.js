let totalHours = 0;

function addTask() {
    let subject = document.getElementById("subject").value;
    let hours = Number(document.getElementById("hours").value);

    if (subject === "" || hours <= 0) {
        alert("Enter valid data");
        return;
    }

    let li = document.createElement("li");
    li.innerText = subject + " - " + hours + " hrs";

    document.getElementById("list").appendChild(li);

    totalHours += hours;

    document.getElementById("total").innerText =
        "Total Study Hours: " + totalHours;

    document.getElementById("subject").value = "";
    document.getElementById("hours").value = "";
}

function clearAll() {
    document.getElementById("list").innerHTML = "";
    totalHours = 0;
    document.getElementById("total").innerText = "";
}
