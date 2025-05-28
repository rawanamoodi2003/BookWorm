const reviews=[
    {

        profilPic: "images/profil pic/pool.jpg",
        userName: "Layn2005",
        time: "1 day ago",
        stars: 5.0, 
        comment:"This book made me laugh, cry, and feel a lot of emotions. I can proudly say that this is the BEST book I have ever read"
    },
    

    {
        profilPic: "images/profil pic/abdo.jpeg",
        userName: "AboHussn",
        time: "3 days ago",
        stars: 4.5, 
        comment:"This fiction novel is told from the perspective of a ten-year-old boy named August, Auggie, who was born with a facial deformity. He bravely faces the challenges of fitting in at a new school and tries to convince his new classmates that he is just like them despite his appearance."
    },

    {
        profilPic: "images/profil pic/candance.jpeg",
        userName: "Candance",
        time: "1 month ago",
        stars: 5.0, 
        comment:"Wow! I am so glad that I finally got around to listening to this story. 'Wonder' had been sitting on my TBR list for a really long time, but I had been waiting for a time to listen to it with my daughters. That time finally arrived last weekend, when we had to spend a full day in the car on a trip."
    },
    {
        profilPic: "images/profil pic/pumkin.jpeg",
        userName: "Lana.Jobs",
        time: "2 months ago",
        stars: 4.5, 
        comment:"Incredibly wholesome. A book that makes you cry but is also uplifting throughout. Should be a compulsory text for school kids.”"

    },

    {
        profilPic: "images/profil pic/kitty.jpeg",
        userName: "IIXGreen",
        time: "9 months ago",
        stars: 5.0, 
        comment:"We read this at our school book club and I can’t recommend it enough!! Each kiddo was touched, and frankly shocked by the treatment of Auggie. Our group of kids are in or around his age, so I think it put a lot into perspective!"
    },
    {
        profilPic: "images/profil pic/Screenshot 2024-04-12 022114.png",
        userName: "Stitch0.00",
        time: "1 year ago",
        stars: 4.0, 
        comment:"Leave it to me to cry over a book written for middle schoolers.”"
    },
    {
        profilPic: "images/profil pic/cry.jpeg",
        userName: ".Kim.Lee.",
        time: "1 year ago",
        stars: 5.0, 
        comment:"I loved this book. It made me think a lot about kindness and perspective. I loved the shifting perspectives. Love love love!"
    },
    {
        profilPic: "images/profil pic/birdy.jpeg",
        userName: "LeahToml",
        time: " 3 years ago",
        stars: 5.0, 
        comment:"Follow the journey of Auggie Pullman, a young boy with facial differences, as he navigates the challenges of starting middle school. With its powerful message about kindness and acceptance, it's a must-read for all ages."
    },
    {
        profilPic: "images/profil pic/glasses-dude.jpeg",
        userName: "Sammy:D",
        time: " 4 years ago",
        stars: 4.5, 
        comment:"I read this when i was a teen and i loved it"
    },
       {
        profilPic: "images/profil pic/johnny-deep.jpeg",
        userName: "JohnyFan",
        time: "4 years ago",
        stars: 2.0, 
        comment:"I feel a bit like a cold-hearted snob for giving this book two stars. I am not saying that it isn't an uplifting story definitely worth being told (and read), but I can't deny that there were a few aspects I had problems with and that the story didn't trigger the emotional reaction I expected it to..”"
    },
 
    {
        profilPic: "images/profil pic/planet.jpeg",
        userName: ".Boldwin8",
        time: " 7 years ago",
        stars: 5.0, 
        comment:"I hate reviewing books that I'm crazy about. I never can get across how wonderful they are. This is one of those books."
    },
    {
        profilPic: "images/profil pic/uwu.jpeg",
        userName: "ThatGirl..",
        time: " 7 years ago",
        stars: 1.0, 
        comment:"meh"
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