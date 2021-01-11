const accordion = document.querySelector(".accordion");
accordion.addEventListener("click", handleChange);
function handleChange({ target }) {
  const accordionContent = target.parentNode.querySelector(
    ".accordion__content"
  );
  accordionContent.classList.toggle("closed");
}
