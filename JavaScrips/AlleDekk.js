document.querySelector(".sort-btn").addEventListener("click", function (e) {
  e.stopPropagation();

  const sortBy = document.querySelector(".sort-options .sort-option.active");
  if (sortBy) {
    sortBy.classList.remove("active");
  }

  const selectedOption = e.target.closest(".sort-option");
  if (selectedOption) {
    selectedOption.classList.add("active");
    const sortType = selectedOption.dataset.sort;
    sortProducts(sortType);
  }

  const sortOptions = document.querySelector(".sort-options");
  if (sortOptions.style.display === "block") {
    sortOptions.style.display = "none";
  } else {
    sortOptions.style.display = "block";
  }

  const icon = document.querySelector(".sort-btn .sort-icon");
  if (sortOptions.style.display === "block") {
    icon.classList.remove("fa-caret-down");
    icon.classList.add("fa-caret-up");
  } else {
    icon.classList.remove("fa-caret-up");
    icon.classList.add("fa-caret-down");
  }
});

document.addEventListener("click", function (e) {
  if (e.target.tagName !== "BUTTON" || !e.target.closest(".sort-by")) {
    const sortOptions = document.querySelector(".sort-options");
    if (sortOptions.style.display === "block") {
      sortOptions.style.display = "none";
    }
  }
});
