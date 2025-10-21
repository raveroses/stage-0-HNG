window.addEventListener("DOMContentLoaded", () => {
  const isEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const inputs = document.querySelectorAll("form div input");
  const textArea = document.querySelector("form div textarea");
  const submissionForm = document.querySelector("form");
  let fullNameError = document.querySelector(".fullNameerrorMessage");
  let emailError = document.querySelector(".emailerrorMessage");
  let messageError = document.querySelector(".messageerrorMessage");
  let subjectError = document.querySelector(".subjecterrorMessage");
  let successMessage = document.querySelector(".successMessage");
  const FormSubmission = (e) => {
    console.log("submit");
    e.preventDefault();

    for (const input of inputs) {
      const inputValue = input.value.trim();

      if (input.name === "fullName" && !inputValue) {
        fullNameError.textContent = "Full name field cannot be empty.";
        console.log("Full name field cannot be empty.");
        return;
      } else if (input.name === "subject" && !inputValue) {
        subjectError.textContent = "Subject field cannot be empty.";
        console.log("submit field cannot be empty.");
        return;
      } else if (input.name === "email" && !isEmail.test(inputValue)) {
        emailError.textContent = "Email field cannot be empty.";
        console.log("email field cannot be empty.");
        return;
      }
    }

    const textValue = textArea.value.trim();
    if (!textValue || textValue.length < 10) {
      messageError.textContent = "Message field cannot be empty.";
      console.log("message field cannot be empty.");
      return;
    }

    fullNameError.textContent = "";
    subjectError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    inputs.forEach((input) => (input.value = ""));
    textArea.value = "";

    const successCreation = document.createElement("div");
    successCreation.className = "success";
    successCreation.textContent = "🎉Form submitted successfully";
    successMessage.appendChild(successCreation);
    setTimeout(() => {
      successCreation.remove();
    }, 3000);
  };

  submissionForm.addEventListener("submit", FormSubmission);
});
