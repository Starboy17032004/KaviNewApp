// /* =========================================
//    JOURNEYS — FILTER
// ========================================= */
// const filterButtons =
//     document.querySelectorAll(".filter-btn");
// const packages =
//     document.querySelectorAll(".package-card");
// filterButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         filterButtons.forEach(btn => {
//             btn.classList.remove("active");
//         });
//         button.classList.add("active");
//         const filter =
//             button.dataset.filter;
//         packages.forEach(card => {
//             const category =
//                 card.dataset.category;
//             if (
//                 filter === "all" ||
//                 category === filter
//             ) {
//                 card.style.display = "flex";
//             } else {
//                 card.style.display = "none";
//             }
//         });
//     });
// });
// /* =========================================
//    JOURNEY DATA
// ========================================= */
// const journeyData = {
//     spiti: {
//         title: "Spiti Silence",
//         description:
//             "Mountains, quiet villages and ancient monasteries across the remote Spiti Valley.",
//         duration:
//             "5 DAYS · 4 NIGHTS",
//         price:
//             "₹24,999"
//     },
//     ladakh: {
//         title: "Ladakh Untamed",
//         description:
//             "High passes, timeless monasteries and landscapes that stretch beyond the horizon.",
//         duration:
//             "7 DAYS · 6 NIGHTS",
//         price:
//             "₹34,999"
//     },
//     sikkim: {
//         title: "Sikkim in Mist",
//         description:
//             "Forests, monasteries and peaceful mountain landscapes in Eastern Himalayas.",
//         duration:
//             "4 DAYS · 3 NIGHTS",
//         price:
//             "₹19,999"
//     }
// };
// /* =========================================
//    MODAL
// ========================================= */
// const modal =
//     document.getElementById("journeyModal");
// const modalClose =
//     document.getElementById("modalClose");
// const modalTitle =
//     document.getElementById("modalTitle");
// const modalDescription =
//     document.getElementById("modalDescription");
// const modalDuration =
//     document.getElementById("modalDuration");
// const modalPrice =
//     document.getElementById("modalPrice");
// const detailButtons =
//     document.querySelectorAll(".details-btn");
// detailButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         const packageName =
//             button.dataset.package;
//         const data =
//             journeyData[packageName];
//         modalTitle.textContent =
//             data.title;
//         modalDescription.textContent =
//             data.description
//         modalDuration.textContent =
//             data.duration;
//         modalPrice.textContent =
//             data.price;
//         modal.classList.add("active");
//     });
// });
// /* CLOSE */
// modalClose.addEventListener("click", () => {
//     modal.classList.remove("active");
// });
// /* CLICK OUTSIDE */
// modal.addEventListener("click", event => {
//     if (event.target === modal) {
//         modal.classList.remove("active");
//     }
// });
// /* ESC KEY */
// document.addEventListener("keydown", event => {
//     if (event.key === "Escape") {
//         modal.classList.remove("active");
//     }
// });
// /* BOOK */
// document
//     .getElementById("bookBtn")
//     .addEventListener("click", () => {
//         alert(
//             "Booking system will be connected here."
//         );
//     });     
//     /* =========================================
//    CULTURE — FASHION FILTER
// ========================================= */
// const fashionButtons =
//     document.querySelectorAll(".fashion-btn");
// const fashionCards =
//     document.querySelectorAll(".fashion-card");
// fashionButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         /* Remove active state */
//         fashionButtons.forEach(btn => {
//             btn.classList.remove("active");
//         });
//         button.classList.add("active");
//         /* Get selected category */
//         const category =
//             button.dataset.category;
//         /* Filter products */
//         fashionCards.forEach(card => {
//             const cardCategory =
//                 card.dataset.category;
//             if (
//                 category === "all" ||
//                 category === cardCategory
//             ) {
//                 card.style.display = "block";
//             } else {
//                 card.style.display = "none";
//             }
//         });
//     });
// });
// /* =========================================
//    CART
// ========================================= */
// let cartCount = 0;
// const cartDisplay =
//     document.getElementById("cartCount");
// const addButtons =
//     document.querySelectorAll(".add-cart");
// addButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         cartCount++;
//         cartDisplay.textContent =
//             cartCount;
//         const originalText =
//             button.textContent;
//         button.textContent =
//             "Added ✓";
//         button.style.opacity =
//             "0.6";
//         setTimeout(() => {
//             button.textContent =
//                 originalText;
//             button.style.opacity =
//                 "1";
//         }, 1500);
//     });
// });