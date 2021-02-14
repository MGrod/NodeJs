const av_salary = 3500;
document.getElementById("getSalary").addEventListener("click", zliczanie);

function zliczanie(e){
    e.preventDefault();
    const salary = document.getElementById("salary").value

    if (salary >= av_salary){
        document.getElementById("result").innerText="Twoja pensja jest wieksza/rowna niz srednia"
    }
    else {
        document.getElementById("result").innerText="Twoja pensja jest nizsza niz srednia"
    }
}