const reviews=[
    {
        profilPic: "images/profil pic/Tiffany.jpeg",
        userName: "Tiffanny~",
        time: "5 days ago",
        stars: 5.0, 
        comment:"I wish I could read this whole series for the first time again 😭."
    },
    {
        profilPic: "images/profil pic/omar.jpeg",
        userName: "Omar-talal",
        time: "9 days ago",
        stars: 1.0, 
        comment:"I have never been more furious at a book. My hands are shaking in anger right now as I am writing this."

    },

    {
        profilPic: "images/profil pic/colors.webp",
        userName: "Lukeeeeee",
        time: "1 month ago",
        stars: 5.0, 
        comment:"Y'all, I got no words to describe how brilliant this book was. Everything about it was perfect and it's truly a masterpiece. I thought I loved the last one.. Nah THIS is the best one in the series, it was sick, twisted, horrifying, intense and so worth reading"
    },
    {
        profilPic: "images/profil pic/birdy.jpeg",
        userName: "LeahToml",
        time: " 2 months ago",
        stars: 5.0, 
        comment:"this book was absolutely brilliant and perfect and made me cry and i have absolutely no words."
    },
    {
        profilPic: "images/profil pic/yasmeen.jpeg",
        userName: "yasmeen:)",
        time: "4 months ago",
        stars: 1.5, 
        comment:"Unpopular Opinion probably, but I HATED it 😭😭"
    },
    {

        profilPic: "images/profil pic/pool.jpg",
        userName: "Layn2005",
        time: "5 months ago",
        stars: 2.0, 
        comment:"Ain't the best but ain't the worst"
    },
    {
        profilPic: "images/profil pic/candance.jpeg",
        userName: "Candance",
        time: "2 years ago",
        stars: 4.5, 
        comment:"4.5 stars!!! Wow this book is wild and dark. It took a turn in the middle that I never expected. I love how the author explored the effects that everything Pip has gone through has on her."
    },
    {
        profilPic: "images/profil pic/planet.jpeg",
        userName: "in-florida",
        time: " 2 years ago",
        stars: 4.0, 
        comment:"this was one of those books that gave me anxiety throughout the entire thing.. but damn it was worth it."
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