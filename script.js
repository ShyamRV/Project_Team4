document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;

    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill out the required fields.");
      return;
    }

    alert(`Thanks, ${name}! Your message has been received.`);
    form.reset();
  });
});
