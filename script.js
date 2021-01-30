const confirmBtn = document.getElementById("confirm-btn");
confirmBtn.addEventListener('click',function(){
    const bookingArea = document.getElementById('booking-area');
    bookingArea.style.display = "none";
    const confirmationArea = document.getElementById("confirmation");
    confirmationArea.style.display = "block";
})
