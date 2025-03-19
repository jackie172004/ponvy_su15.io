function showalert(){
    const empname = document.getElementById ('name').value.trim();
    const email = document.getElementById ('email').value.trim();
    const salary = parseFloat (document.getElementById('salary').value);
    const hiredate = document.getElementById('hiredate').value.trim();

    var USDollar = new Intl.NumberFormat("de-DE",{
        style: "currency", 
        currency: "USD"
    });

    var formattedSalary = USDollar.format(salary);

    if (empname && email && salary && hiredate!=null){
        alert(
            "1. EmpName: " + empname +"\n" +
            "2. Address: " + email +"\n" +
            "3. The Salary: " + formattedSalary +"\n"+
            "4. The Hiredate: " + hiredate
        );

    }else{
        alert ("please Fill in all fields");
    }   
}