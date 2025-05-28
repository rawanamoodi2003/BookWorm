const reviews=[
    {
        profilPic: "images/profil pic/collen.jpeg",
        userName: "Alejandro",
        time: "12 days ago",
        stars: 5.0, 
        comment:"The best Batman/Joker story ever! It asks the question no one else ever wanted to ask"
    },
    {
        profilPic: "images/profil pic/tala.jpeg",
        userName: "talaAdnan",
        time: "23 days ago",
        stars: 4.0, 
        comment:"Another classic, with this seminal volume set as the perfect synopsis of the yin and yang of the Batman and Joker relationship."

    },
    {

        profilPic: "images/profil pic/america.jpeg",
        userName: "Hunter0.4",
        time: " 1 month ago",
        stars: 5.0, 
        comment:"OMG! THIS BOOK WAS AWESOME! THE STORY LINE! THE GRAPHICS ARE FREAKING AMAZING!"
    },
    {
        profilPic: "images/profil pic/jay.jpeg",
        userName: "BlueJay;)",
        time: " 5 months ago",
        stars: 4.5, 
        comment:"Wow! It's good! I liked this comic. I admit I was afraid because I thought it was published in 1988 and the work of graphics wouldn't be good. But at the same time I wanted to know the origin of Joker. In spite of its release date, the graphics were quite good. I enjoyed reading it. The Joker in this one was portrayed better than that in The Man Who Laughs."
    },
    {

        profilPic: "images/profil pic/pool.jpg",
        userName: "Layn2005",
        time: "1 years ago",
        stars: 4.0, 
        comment:"EPIC"
    },
    {
        profilPic: "images/profil pic/hacker.jpeg",
        userName: "~DinoDan!",
        time: "1 year ago",
        stars: 5.0, 
        comment:"The art alone is 5 stars. Just wow."
    },
  

    {
        profilPic: "images/profil pic/Toddy.jpeg",
        userName: "....Toddy:/",
        time: "2 year ago",
        stars: 4.5, 
        comment:"utterly insane. the joker never ceases to surprise me. just wtf. great story, though. I always enjoy seeing the bad guy's back stories. he's still insane though."
    },



    {
        profilPic: "images/profil pic/cry.jpeg",
        userName: "Nicholas7",
        time: " 2 years ago",
        stars: 5.0,
        comment:"One of the greatest graphic novels I have ever read and really showed me what the medium is capable of."
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
