const reviews = [
    {
        profilPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaQ8sfC7CsgwRVKbbmTL2Y8khnTMfZjdTh58ptu_CYg&s",
        userName: "litierature",
        time: "6 month ago",
        stars: 2.0, 
        comment: "I took it, but I don't like this type of book, so I didn't like it"
    },
    {
        profilPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I9n-5Tee_nak_h6q6F5fZlJ88aA5wUA2xls24y7nYw&s",
        userName: "imagina55",
        time: "5 month ago",
        stars: 5.0, 
        comment: "I loved it as if it was taking me to another world"
    },
    {
        profilPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKnvH8JXqLwmk4JBp3JzXWEFJh1mMjsJY0ScZmpZLM9KxpReCy-ql_wmjosl4SnXKJJY&usqp=CAU",
        userName: "booklover",
        time: "3 months ago",
        stars: 2.5, 
        comment: "I'm not sure exactly when it happened, but it seems I'm no longer absolutely cool in my daughter's eyes. I could understand if her particular issues with me were current fashion or the things to do while hanging out with friends, but books? BOOKS?!? Oh, the pain!"
    },
    {
        profilPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0xtBjCF3Kawhaa2uriGTfKCaHq-VIm9-hvVVqeQupq3jt0hpUY5cAmRemkcLnjHQ6ic&usqp=CAU",
        userName: "bibliophile",
        time: " 8 months ago",
        stars: 3.0, 
        comment: "it's OK"
    },
    {
        profilPic: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiD7L3vDtM-4AJULJ65T3UhfeVK0LspJ8qygTMuLpN2gfiksHuKCB1RijIJDQ7CXKKBXyWg3RHebR0fjlx-Gld0D3rT0jQSwuN-0BU2z5NExVA00aAofOkEDb68TDuOgNdHTX2Zjrvx7L5gwmZSkRoO66HkRVdVPTrY7iDZJ95EDSF1bq6LOBeoTG6nfLsT/w640-h640-rw/خلفيات-بروفايل-فيس-بوك%20(38).jpg",
        userName: "aidreader",
        time: " 2 year ago",
        stars: 5.0, 
        comment: "I remember it was great and I will read it again"
    },
    {
        profilPic: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirUyEekIhSnW1oIgOkgHwIWRBjM7FedtFU3dlQ8OTFaIhnIHMKwEkPS1-AO50_X2i5fLmJYGpA7Ybt7J_ogv_vvuqYQo33fCcsjIZpDZi8jZg9gEfZfynK1crJt1dX8ICqOc15szNCTQgIE8mw7YyIkknlBHu_FuvFda-px205ONJKkHxWrMw4AVNlug/s704/صور-بروفايل-كيوت.jpg",
        userName: "fictionfan1",
        time: "4 years ago",
        stars: 2.5, 
        comment: "I think I read it but I didn't like it very much"
    },
    {
        profilPic: "https://play-lh.googleusercontent.com/Z-EY7hlu8MrH7-2RhZ0zeKeCldQJ_XzAhI21llK40aVx-k9qB3MCuEK6Jh9nr8yTOis=w240-h480-rw",
        userName: "storyteller",
        time: "4 years ago",
        stars: 2.5, 
        comment: "I didn't expect it to be this good"
    },
    {
        profilPic: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXO8BCqxMuQGuxFPe21WDNWACGNq0IPE3gPAt7rn874cJc4y-NyHsP3JFFQEn0hzqb0L3PxmoxtYDobaADIwKdc3YxnNg5DRR5dRi9R7obuZr9c4NVGPuw_EVWM52vZiAy-mbTD1_f2e3H1RZq50jfXSUb4aaTQP4WmF_JiAzkwRQKSNfa7engO6KydqM/s1280/profile%2010.jpg",
        userName: "soundtick",
        time: " 5 years ago",
        stars: 1.0, 
        comment: "I didn't like it"
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
