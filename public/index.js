var students = [
    {
        lname: "Jaramillo",
        name: "Javier",
        age: 23,
        birthday: {
            year: 1998,
            month: "August",
            day: 25
        },
        Career: "IDYGS"
    },
    {
        lname: "Potrillo",
        name: "Francisco",
        age: 25,
        birthday: {
            year: 1995,
            month: "January",
            day: 22
        },
        Career: "IDYGS"
    },
    {
        lname: "Muñiz",
        name: "Gisela",
        age: 21,
        birthday: {
            year: 2000,
            month: "December",
            day: 25
        },
        Career: "IDYGS"
    }
]

var table = document.getElementsByTagName("table")[0];
for(var i = 0; i < students.length; i++)
{
    var templ = document.getElementById("tbodytempl").content.cloneNode(true);
    var tdnumber = templ.querySelector("span[name='tbodynumber']");
    var tdname = templ.querySelector("span[name='tbodyname']");
    var tdage = templ.querySelector("span[name='tbodyage']");
    var tdcareer = templ.querySelector("span[name='tbodycareer']");

    tdnumber.innerText = i + 1;
    tdname.innerText = students[i].lname + " " + students[i].name;
    tdage.innerText = students[i].age;
    tdcareer.innerText = students[i].Career;

    table.append(templ);
}