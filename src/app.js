window.setupCongratulations = () => {
  const div = document.querySelector("#message");
  const button = document.querySelector("#button");
  if (button)
    button.addEventListener("click", () => {
      div.innerHTML = "<h1>Congratulations Uche on the New Job !!</h1>";
    });
};

window.addEventListener("DOMContentLoaded", window.setupCongratulations);
