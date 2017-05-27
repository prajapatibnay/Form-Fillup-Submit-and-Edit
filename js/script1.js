let table           = document.querySelector("#mytable");
var btnAdd          = document.querySelector("#btnAdd");
let btnSave         = document.querySelector("#btnSave");
let removeAllButton = document.querySelector("#btnRemoveAll");

let form            = document.myForm;

var serialNumber    = 1;

// hide save button
btnSave.style.display = 'none';

function Employee()
{
    this.id = null;
    this.fname = null;
    this.lname = null;
    this.uname = null;
    this.eaddress = null;
    this.password = null;
    this.age = null;

    this.addNew = function()
    {
        let tr = document.createElement("TR");
        let th = document.createElement("TH");
        th.innerText = serialNumber;

        let tdFname = document.createElement("TD");
        tdFname.innerText = this.fname;
        tdFname.id = 'fname' + serialNumber;

        let tdLname = document.createElement("TD");
        tdLname.innerText = this.lname;
        tdLname.id = 'lname' + serialNumber;

        let tdUname = document.createElement("TD");
        tdUname.innerText = this.uname;
        tdUname.id = 'uname' + serialNumber;

        let tdEaddress = document.createElement("TD");
        tdEaddress.innerText = this.eaddress;
        tdEaddress.id = 'eaddress' + serialNumber;

        let tdPassword = document.createElement("TD");
        tdPassword.innerText = this.password;
        tdPassword.id = 'password' + serialNumber;

        let tdAge = document.createElement("TD");
        tdAge.innerText = this.age;
        tdAge.id = 'age' + serialNumber;

        let tdAction = document.createElement("TD");
        tdAction.innerHTML = '<a href="javascript:;" class="edit" id="edit-' + serialNumber + '">Edit</a> | <a href="javascript:;" class="delete" id="delete-' + serialNumber + '">Delete</a>';

        tr.appendChild(th);
        tr.appendChild(tdFname);
        tr.appendChild(tdLname);
        tr.appendChild(tdUname);
        tr.appendChild(tdEaddress);
        tr.appendChild(tdPassword);
        tr.appendChild(tdAge);
        tr.appendChild(tdAction);
        table.appendChild(tr);

        serialNumber++;
        this.clearForm();
    }

    this.clearForm = function()
    {
        form.reset();
    }

    this.deleteRow = function(element)
       {
        if(confirm("Are you sure to delete ?\nPress OK to confirm, or Cancel."))
        {
            var tr = element.parentElement.parentElement;
            tr.remove();

            // tr.parentElement.removeChild(tr);
            
            // tr.outerHTML = "";
            // delete tr;
        }

        return false;
    }

    this.editRow = function(element)
    {
        var id = element.id.substring(5);
        form.editID.value = id;

        var fname = document.querySelector("#fname" + id).textContent;
        var lname = document.querySelector("#lname" + id).textContent;
        var uname = document.querySelector("#uname" + id).textContent;
        var eaddress = document.querySelector("#eaddress" + id).textContent;
        var password = document.querySelector("#password" + id).textContent;
        var age = document.querySelector("#age" + id).textContent;

        form.fname.value = fname;
        form.lname.value = lname;
        form.uname.value = uname;
        form.eaddress.value = eaddress;
        form.password.value = password;
        form.age.value = age;

        btnSave.style.display = '';
        btnAdd.style.display = 'none';
    }

    this.editSave = function()
    {// save data to the table

        let id = form.editID.value;
        
        document.querySelector("#fname" + id).textContent = form.fname.value;
        document.querySelector("#lname" + id).textContent = form.lname.value;
        document.querySelector("#uname" + id).textContent = form.uname.value;
        document.querySelector("#eaddress" + id).textContent = form.eaddress.value;
        document.querySelector("#password" + id).textContent = form.password.value;
        document.querySelector("#age" + id).textContent = form.age.value;

        btnSave.style.display ='none';
        btnAdd.style.display ='';

        this.clearForm();
    }

    this.removeAll = function()
    {
        table.innerHTML = "";
    }
}

var employee = new Employee();

// add event listener for edit and delete
document.addEventListener('click', function(event)
{
    if(!event.target) return;

    var element = event.target;

    if(element.className == 'edit')
    {
        employee.editRow(element);
    }

    if(element.className == "delete")
    {
        employee.deleteRow(element);
    }
});

// Remove All
removeAllButton.onclick = function()
{
    employee.removeAll();
}

btnSave.onclick = function()
{
    employee.editSave();
}

// Add new employee
btnAdd.onclick = function()
{ // anonymous function

    if(form.fname.value == "")
    {
        form.fname.style.border = '1px solid red';
        let FnameError = document.querySelector('#fname-error');
        fnameError.style.color = 'red';
        fnameError.innerText = "Please enter your First-Name";
        return false;
    }

    employee.fname = form.fname.value;
    employee.lname = form.lname.value;
    employee.uname = form.uname.value;
    employee.eaddress = form.eaddress.value;
    employee.password = form.password.value;
    employee.age = form.age.value;

    employee.addNew();
}

function MyClass()
{
    this.fname = "Swastik College";

    this.getName = function()
    {
        return this.fname;
    }
}

form.fname.onkeyup = function()
{
    console.log(this.value);
}

var obj = new MyClass();

MyClass.prototype.eaddress = "ram@gmail.com";
MyClass.prototype.getEmail = function()
{
    return this.eaddress;
}
