let btn = document.getElementById("btn");

let students = [];

btn.onclick = function () {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let physics = Number(document.getElementById("physics").value);
    let chemistry = Number(document.getElementById("chemistry").value);
    let maths = Number(document.getElementById("maths").value);

    let average = (physics + chemistry + maths) / 3;

    students.push({
        name: name,
        roll: roll,
        average: average
    });

    let topper = students[0];

    for(let i = 1; i < students.length; i++)
    {
        if(students[i].average > topper.average)
        {
            topper = students[i];
        }
    }

    // Display
    let output = `
        <h2 id="head">Student Info :</h2>

        <h3>Topper : ${topper.name} (${topper.average.toFixed(2)})</h3>
    `;

    for(let i = 0; i < students.length; i++)
    {
        output += `
        <div class="res">
            <div class="output-box">Name : ${students[i].name}</div>
            <div class="output-box">Roll No : ${students[i].roll}</div>
            <div class="output-box">Avg : ${students[i].average.toFixed(2)}</div>
        </div>
        `;
    }

    document.getElementById("result").innerHTML = output;

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("physics").value = "";
    document.getElementById("chemistry").value = "";
    document.getElementById("maths").value = "";
};
