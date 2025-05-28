const reviews=[
    {
        profilPic: "images/profil pic/Brian.webp",
        userName: "Brain.9x0",
        time: "3 days ago",
        stars: 5.0, 
        comment:"Fantastic read. I have read a fair few reviews stating it wasn't great as it was 'old', do not believe them. It was amazing. Admittedly, it is dated as it was written in 1991, but it holds up and is a fantastic comic."
    },
    {
        profilPic: "images/profil pic/Flash.avif",
        userName: "YessTurki",
        time: "7 days ago",
        stars: 5.0, 
        comment:"Thanos is my favorite villan >:)"

    },

    {
        profilPic: "images/profil pic/thanos.webp",
        userName: "Rana2001",
        time: "19 days ago",
        stars: 4.5, 
        comment:"My first graphic novel. Foraying into a new world."
    },
    {
        profilPic: "images/profil pic/tom-nook.jpeg",
        userName: "Tom.Nook",
        time: " 2 months ago",
        stars: 3.5, 
        comment:"3,5. The story was good, but I was'nt a big fan of the art in this book."
    },
    {

        profilPic: "images/profil pic/pool.jpg",
        userName: "Layn2005",
        time: "5 months ago",
        stars: 5.0, 
        comment:"Didn't finish it yet... but so far FIVE STARS"
    },
    {
        profilPic: "images/profil pic/david.jpeg",
        userName: "12david34",
        time: "6 months ago",
        stars: 3.5, 
        comment:"This is a pretty good comic. Sure the artwork might be a little dated but other than that there aren't many problems in this comic. The action was fun as heck, and the writing was great."
    },

    {
        profilPic: "images/profil pic/super-man.jpg",
        userName: "zac..smith",
        time: "1 year ago",
        stars: 4.5, 
        comment:"I mean cmon, the most iconic and widely considered the greatest event in Marvel Comics. For good reason. Thanos became the icon he is today in this book"
    },
    {
        profilPic: "images/profil pic/f.jpg",
        userName: "JaSON124",
        time: " 2 years ago",
        stars: 4.0, 
        comment:"Everyone says this is as classic as it gets when it comes to great Marvel Comic Books. This one is really fantastic. The art was great. All the superhero’s were great. Thanos’ motive was somewhat lame (movies did it better). Overall awesome."
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