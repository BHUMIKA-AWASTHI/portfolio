const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

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
      alert("Message sent successfully!");
      form.reset();
    } else {
      const error = await response.json();
      console.log(error);
      alert(error.error || "Something went wrong.");
    }
  } catch (err) {
    console.error(err);
    alert("Network error.");
  }
});
