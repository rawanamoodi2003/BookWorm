const reviews = [
    {
        profilPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0F_E8oH0byB2enO3mUi69t1PNTRdg4Qe4Fps3xVyGQ&s",
        userName: "booklover",
        time: "7 days ago",
        stars: 1.0, 
        comment: "I took it, but I don't like this type of book, so I didn't like it"
    },
    {
        profilPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuwiF5jgoQAKOaabsXSKwOQq9ti-fMoFo_bEDAARM3Pg&s",
        userName: "fantasyfan",
        time: "5 month ago",
        stars: 5.0, 
        comment: "I loved it as if it was taking me to another world"
    },
    {
        profilPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqNv7dR8R9VXSaq2Y2cSkfFKFuoM_DKWbokt1l-48vLmqX3B_yQzYqq4LG6dspnSqOQI&usqp=CAU",
        userName: "storybuff_",
        time: "10 months ago",
        stars: 1.5, 
        comment: "I'm not sure exactly when it happened, but it seems I'm no longer absolutely cool in my daughter's eyes. I could understand if her particular issues with me were current fashion or the things to do while hanging out with friends, but books? BOOKS?!? Oh, the pain!"
    },
    {
        profilPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xXCqtuutwyw9KHfQWFpJ3hvCOGYgSsE7CPenMq3xeQ&s",
        userName: "avdreader",
        time: " 11 months ago",
        stars: 3.0, 
        comment: "it's OK"
    },
    {
        profilPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDn5OTgLhjeIyKWwhxcQQaVW8fo3WjrpT-A8lPQnEwg&s",
        userName: "bookLlore",
        time: " 2 year ago",
        stars: 4.5, 
        comment: "I remember it was great and I will read it again"
    },
    {
        profilPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyvrCmzks-7Hoxc02O8_iwGVjt_bvcyGVftLJwQWlaadml8pbffThpQ6kQG_vSXIk-TeY&usqp=CAU",
        userName: "fictionfan",
        time: "4 years ago",
        stars: 1.5, 
        comment: "I think I read it but I didn't like it very much"
    },
    {
        profilPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPB3jKYt-2UqUBSYyy3L_xzQ0Z2_MPjj9eEfJXZncalw&s",
        userName: "novelnut_",
        time: "4 years ago",
        stars: 2.5, 
        comment: "I didn't expect it to be this good"
    },
    {
        profilPic: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitgBRdiyBXYQospzG69bJ3m1SBjcVX6fHTjoELO1KuyQTS1mqBUCDx6ZQt8dbomsO_BTEfyZRKtOTk2_BOA_1OgqXMYskxulVb9AuDgdLfo1DjI8py4RRBsZhgBuTswKEWBgd5N5KLIlXOdgut-rqJj8-LHxbrDmkXVv1Egc-niY_KDsnQrZl7zALcLf45/s846/صور-بروفايل-كيوت-cute-4.jpg",
        userName: "_bookishy",
        time: " 5 years ago",
        stars: 1.0, 
        comment: "no comment"
    }
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
