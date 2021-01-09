const accordion = document.querySelector(".accordion");
accordion.addEventListener("click", handleChange);
function handleChange({ target }) {
  const accordionContent = target.parentNode.querySelector(
    ".accordion__content"
  );
  console.log(window.getComputedStyle(accordionContent).height);
  accordionContent.classList.toggle("closed");
}
