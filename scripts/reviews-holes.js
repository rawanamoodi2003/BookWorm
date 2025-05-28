const reviews=[
    {
        profilPic: "images/profil pic/tete.jpeg",
        userName: "*tasneem*",
        time: "1 month ago",
        stars: 5.0, 
        comment:"Holes is one of my favorite books of all time. The whole thing is just so clever. The writing style is simple, but not boring. Every character is amazingly developed and believable. I like how the story of the present and the story of the past connect to each other perfectly in the end."
    },
    {
        profilPic: "images/profil pic/shakr.jpg",
        userName: "shakr.aziz",
        time: "1 month ago",
        stars: 1.0, 
        comment:"LET ME START OFF BY SAYING THAT I ABSOLUTELY HATED EVERY PAGE OF THIS BOOK THAT I READ."

    },
    {
        profilPic: "images/profil pic/lenda.jpeg",
        userName: "....Liona:/",
        time: "5 months ago",
        stars: 2.5, 
        comment:"I'm not sure exactly when it happened, but it seems I'm no longer absolutely cool in my daughter's eyes. I could understand if her particular issues with me were current fashion or the things to do while hanging out with friends, but books? BOOKS?!? Oh, the pain!"
    },
    {
        profilPic: "images/profil pic/Steve.jpeg",
        userName: "SteveHere",
        time: " 7 months ago",
        stars: 3.0, 
        comment:"This was heading for the full five stars right up until the ending"
    },
    {

        profilPic: "images/profil pic/bob.jpeg",
        userName: "jahcob209",
        time: " 1 year ago",
        stars: 4.0, 
        comment:"If you're looking for something that's wacky-crazy and has a cleverly twisted plot, this one's for you. Who thought reading about digging holes in the scorching heat could be so entertaining"
    },

    {
        profilPic: "images/profil pic/dark.webp",
        userName: "12Juann3",
        time: "3 years ago",
        stars: 1.0, 
        comment:" I just don’t understand the hype surrounding this book."
    },
  

    {

        profilPic: "images/profil pic/pool.jpg",
        userName: "Layn2005",
        time: "7 years ago",
        stars: 4.5, 
        comment:"I didn't expect it to be this good"
    },
    {
        profilPic: "images/profil pic/froggy.jpeg",
        userName: "FrogGirl2",
        time: " 7 years ago",
        stars: 1.5, 
        comment:"1.5"
    },



];

let reviewsHtml = '';


reviewsHtml += `
<div class="swiper">
  <div class="swiper-wrapper">
`;

reviews.forEach((review) => {

    reviewsHtml += `
    <div class="swiper-slide">
        <div class="reviews">
            <img class="profil" src="${review.profilPic}" alt="">
            <h6 class="username">${review.userName}</h6>
            <p class="time">${review.time}</p>
            <img class="r-stars" src="images/rating/rating-${review.stars * 10}.png" alt="">
            <p class="comment">${review.comment}</p>
        </div>
    </div>
    `;
});


reviewsHtml += `
  </div>
<div class="slide-num">
  <div class="swiper-pagination"></div>
</div>

</div>
`;


document.getElementById('reviews-container').innerHTML = reviewsHtml;
