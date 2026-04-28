function showTab(tabId, btn){

    let tabs = document.querySelectorAll(".tab-content");
    let buttons = document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => tab.classList.remove("active"));
    buttons.forEach(button => button.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    btn.classList.add("active");
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("regForm").addEventListener("submit", function(e){
    e.preventDefault();

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
        
            document.getElementById("popup").style.display = "flex";
        
    })
    .catch(err => {
        alert("Error in registration");
    });
});
app.post("/register", (req, res) => {
   res.json({ message: "Registered successfully" });
});
function showPopup(){
    document.getElementById("popup").style.display = "flex";
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}
