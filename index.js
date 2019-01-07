function close1() {
    self.window.close();
}
function myClear(form) {
    form.reset();
    document.getElementById('out').value = 'Your Password Appear Here'
}
function myFunction(form) {
    let dob = form.dob.value.replace('/', '').replace('/', '');
    let name = form.name.value;
    let name2 = form.name2.value;
    /*let validate=/^[ _@./#&+-]*$/;*/
    if (dob !== "" && name !== "" && name2 !== "") {
        let all = dob.concat(name).concat(name2);
        let x = all.split('').sort(function () {
            return 0.5 - Math.random()
        }).join('');
        writeOut(x);
    }
    else{
        document.getElementById('out').value = "Your Password Appear Here";
    }
}
function writeOut(x) {
    document.getElementById('out').value = x;
}