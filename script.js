function showTab(tabId, btn){

    let tabs = document.querySelectorAll(".tab-content");
    let buttons = document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => tab.classList.remove("active"));
    buttons.forEach(button => button.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    btn.classList.add("active");
}
document.getElementById("regForm").addEventListener("submit", function(e){
    e.preventDefault(); // form reload stop

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        city: document.getElementById("city").value
    };

    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
        alert(response.message);
    })
    .catch(err => {
        alert("Error in registration");
    });
});
