function showTab(tabId, btn){

    let tabs = document.querySelectorAll(".tab-content");
    let buttons = document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => tab.classList.remove("active"));
    buttons.forEach(button => button.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    btn.classList.add("active");
}

document.getElementById("regForm").addEventListener("submit", function(e){
    e.preventDefault(); // page reload stop

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        city: document.getElementById("city").value
    };

    alert("Registration Submitted Successfully ✅");

    console.log("Form Data:", data);

    // Fake API simulation (for viva/project)
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
        console.log("API Response:", response);
        alert("Server Response Received 🎉");
    });
});
