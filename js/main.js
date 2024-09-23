// pop up display cookie
document.addEventListener("DOMContentLoaded", function () {
    const popupWindow = document.getElementById("popupWindow");
    const closeButton = document.querySelector(".close");
    const userForm = document.getElementById("userForm");
    const okButton = document.getElementById("okButton");

    // Flag to track if the form has been submitted
    let formSubmitted = false;

    function showPopup() {
        popupWindow.style.display = 'block';
    }

    // Show the popup every 5 seconds
    const intervalId = setInterval(() => {
        if (!formSubmitted) { // Only show if the form hasn't been submitted
            showPopup();
        }
    }, 5000);

    closeButton.addEventListener('click', function () {
        popupWindow.style.display = 'none';
    });

    userForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        // Simulate sending data to the server
        fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, mobile })
        })
        .then(response => {
            if (response.ok) {
                formSubmitted = true; // Update the flag
                displayThankYouMessage();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    });

    function displayThankYouMessage() {
        popupWindow.querySelector('.popup-content').innerHTML = `
            <h2>Thank You!</h2>
            <p>Your details have been submitted.</p>
            <button id="okButton" class="btn-wrappers">OK</button>
        `;
        // Attach event listener for the new OK button
        document.getElementById("okButton").addEventListener('click', function () {
            popupWindow.style.display = 'none';
        });
        popupWindow.style.display = 'block'; // Show the updated popup
    }
});




(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        nav: false,
        dots: true,
        dotsData: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

const menu = document.querySelector(".menu");
 const menuMain = menu.querySelector(".menu-main");
 const goBack = menu.querySelector(".go-back");
 const menuTrigger = document.querySelector(".mobile-menu-trigger");
 const closeMenu = menu.querySelector(".mobile-menu-close");
 let subMenu;
 menuMain.addEventListener("click", (e) =>{
 	if(!menu.classList.contains("active")){
 		return;
 	}
   if(e.target.closest(".menu-item-has-children")){
   	 const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
   }
 });
 goBack.addEventListener("click",() =>{
 	 hideSubMenu();
 })
 menuTrigger.addEventListener("click",() =>{
 	 toggleMenu();
 })
 closeMenu.addEventListener("click",() =>{
 	 toggleMenu();
 })
 document.querySelector(".menu-overlay").addEventListener("click",() =>{
 	toggleMenu();
 })
 function toggleMenu(){
 	menu.classList.toggle("active");
 	document.querySelector(".menu-overlay").classList.toggle("active");
 }
 function showSubMenu(hasChildren){
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML=menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
 }

 function  hideSubMenu(){  
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() =>{
       subMenu.classList.remove("active");	
    },300); 
    menu.querySelector(".current-menu-title").innerHTML="";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
 }
 
 window.onresize = function(){
 	if(this.innerWidth >991){
 		if(menu.classList.contains("active")){
 			toggleMenu();
 		}

 	}
 }

// graphic counter
let projectCount = 0;
let customerCount = 0;
const projectTarget = 120;
const customerTarget = 72;

let projectInterval;
let customerInterval;

// Function to update both counters and stop if targets are reached
function updateCounters() {
    let bothCompleted = true; // Assume both are completed

    if (projectCount < projectTarget) {
        projectCount++;
        document.getElementById("projectCount").textContent = projectCount;
        bothCompleted = false; // If project counter hasn't reached target, both are not completed
    }

    if (customerCount < customerTarget) {
        customerCount++;
        document.getElementById("customerCount").textContent = customerCount;
        bothCompleted = false; // If customer counter hasn't reached target, both are not completed
    }

    if (bothCompleted) {
        clearInterval(projectInterval); // Stop the project counter
        clearInterval(customerInterval); // Stop the customer counter
    }
}

// Set intervals to update the counters
projectInterval = setInterval(updateCounters, 100); // Update both counters every 100 milliseconds
customerInterval = setInterval(updateCounters, 100); // Update both counters every 100 milliseconds



