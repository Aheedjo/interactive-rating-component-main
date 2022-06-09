const reviews = document.querySelectorAll(".rating");
const submitBtn = document.querySelector("#submit_btn")
const card = document.querySelector(".main_card_container")
let number;

const thankYouCard = () => {
    if (number === undefined) {
        submitBtn.textContent = "Select a rating!"
        return;
    };
    const thankYouContent = `
        <img src="./images/illustration-thank-you.svg" alt="" id="thank_you_img">
        <span class="rating_tag">You selected ${number} out of 5</span>
        <h1 class="thankyou_title">Thank you!</h1>
        <p class="body_text">
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>
    `
    card.innerHTML = thankYouContent;
    card.classList.add("thank_you_card")
}

// Handle clicking the rating
reviews.forEach(review => {
    review.addEventListener("click", (e) => {
        // remove the class of active from all other ratings
        reviews.forEach(el => el.classList.remove("active"));
        // add the class of to the rating that was clicked
        review.classList.toggle("active");
        // Get the rating number and convert it to an integer

        number = Number.parseInt(review.textContent);
    });
});


submitBtn.addEventListener("click", thankYouCard)

// reviews.forEach(review, () => {})