(function () {
  //Target the user input
  const form = document.querySelector("#message-form");
  //target the user input from form
  const messgContent = document.querySelector(".message-content");
  const message = document.querySelector("#message");
  const feedback = document.querySelector(".feedback");
  form.addEventListener("submit", (e) => {
    //prevent the form default submition
    e.preventDefault();
    //get the form value
    const addMessg = form.message.value.trim();
    //input the user message to the ui
    const html = ` <h4 class="message-content text-uppercase">${addMessg}</h4>`;
    localStorage.setItem(addMessg, addMessg);
    if (message.value === "") {
      feedback.classList.add("show");
      setTimeout(() => feedback.classList.remove("show"), 2000);
    } else {
      messgContent.innerHTML = message.value;
      messgContent.innerHTML = html;
      form.reset();
      message.value = "";
    }
  });
})();
