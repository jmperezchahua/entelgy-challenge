export const buttonEvents = (data) => {
  [...data].forEach((ele) => {
    const btn = document.getElementById(`btn-${ele.ccn3}`);
    const modal = document.getElementById(`modal-${ele.ccn3}`);
    const closemodal = document.getElementById(`close-modal-${ele.ccn3}`);

    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    closemodal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) modal.style.display = "none";
    });
  });
};
