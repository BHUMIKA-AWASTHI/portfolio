const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");
const button = form.querySelector("button");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  button.disabled = true;
  button.textContent = "Sending...";

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();

      button.textContent = "✓ Sent";

      popup.classList.add("show");

      setTimeout(() => {
        popup.classList.remove("show");
      }, 4000);
    } else {
      const error = await response.json();
      console.log(error);
      alert(error.error || "Something went wrong.");

      button.textContent = "Submit";
      button.disabled = false;
    }
  } catch (err) {
    console.error(err);
    alert("Network Error");

    button.textContent = "Submit";
    button.disabled = false;
  }
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");

  button.disabled = false;
  button.textContent = "Submit";
});
