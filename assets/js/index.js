// Disable Drag


// console.log("test");
// function pauseEvent(e) {
//     if (e.stopPropagation) e.stopPropagation();
//     if (e.preventDefault) e.preventDefault();
//     e.cancelBubble = true;
//     e.returnValue = false;
//     return false;
// }

// $('body').scrollspy({ target: '#main-navbar' });


// const currentYear = new Date().getFullYear();
// document.getElementById('current-year').textContent = currentYear;


// window.addEventListener("scroll", setScrollVar)
// window.addEventListener("resize", setScrollVar)

// function setScrollVar() {
//     const htmlElement = document.documentElement
//     const percentOfScreenHeightScrolled =
//         htmlElement.scrollTop / htmlElement.clientHeight
//     // console.log(Math.min(percentOfScreenHeightScrolled * 100))
//     htmlElement.style.setProperty(
//         "--scroll",
//         Math.min(percentOfScreenHeightScrolled * 100)
//     )
// }

// setScrollVar()
// const cards = document.querySelectorAll(".card");
// const valiw = document.querySelector('.valiw');

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//             entry.target.classList.remove("fade");
//         } else {
//             entry.target.classList.remove("show");
//             entry.target.classList.add("fade");
//         }
//     });
// }, {
//     threshold: 1,
//     rootMargin: "-100px"
// });

// cards.forEach(card => {
//     // observer.observe(card);
// });

// observer.observe(valiw);
// Function to handle opening and closing dialogs
// Function to handle opening and closing dialogs
// Function to handle opening and closing dialogs
// function handleDialog(dialogSelector) {
//     const dialog = document.getElementById(dialogSelector);
//     const openButton = document.querySelector(`[data-open-modal="${dialogSelector}"]`);
//     const closeButton = document.querySelector(`[data-close-modal="${dialogSelector}"]`);
    
//     openButton.addEventListener("click", () => {
//         dialog.showModal();
//         console.log('open ' + dialogSelector);
//     });

//     closeButton.addEventListener("click", () => {
//         dialog.close();
//         console.log('close ' + dialogSelector);
//     });

//     dialog.addEventListener("click", (e) => {
//         const dialogDimensions = dialog.getBoundingClientRect();
//         if (
//             e.clientX < dialogDimensions.left ||
//             e.clientX > dialogDimensions.right ||
//             e.clientY < dialogDimensions.top ||
//             e.clientY > dialogDimensions.bottom
//         ) {
//             console.log('dimension ' + dialogSelector);
//             dialog.close();
//         }
//     });
// }

// // Apply the function to the PitikCats dialog
// handleDialog("pitikcats");
// handleDialog("vero");
