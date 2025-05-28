const reviews=[
    {
        profilPic: "images/profil pic/goku.jpeg",
        userName: "Mr.Cinco5",
        time: "23 days ago",
        stars: 1.0, 
        comment:"This one got very messy with its story. I was easily confused and almost bored at the mass amount of dialogue and seemingly random stuff going on. This was disappointing as the first volume was pretty good and told its story well. I do like the way the volume ended, but honestly it was not well done."
    },
    {
        profilPic: "images/profil pic/Mark.jpg",
        userName: "MarKhan",
        time: "4 months ago",
        stars: 4.5, 
        comment:"Incredible. Absolutely incredible. This is the type of Transformers story fans have needed. If this was made to an animated series, Transformers would be as alive today as it was in the 80’s. "
    },
    {
        profilPic: "images/profil pic/puppy.jpg",
        userName: "Lillyyy234",
        time: "8 months ago",
        stars: 4.0, 
        comment:"The series displays a fine balance between comedy and horror, featuring eccentric characters and witty banter."

    },
    {

        profilPic: "images/profil pic/pool.jpg",
        userName: "Layn2005",
        time: "1 year ago",
        stars: 3.0, 
        comment:"Art is good, I can barely follow the story at the best of times. There's like 300 characters."
    },
    {
        profilPic: "images/profil pic/ahmed.jpeg",
        userName: "Abdo5432",
        time: "2 years ago",
        stars: 3.5, 
        comment:"I do have to admit that at times I struggled a little bit keeping up with which character was which."
    },

    {
        profilPic: "images/profil pic/what.png",
        userName: "The4Wall",
        time: " 3 years ago",
        stars: 4.0, 
        comment:"Still pretty confused as to what's going on here."
    },




    {
        profilPic: "images/profil pic/hacker.jpeg",
        userName: "Hector_in",
        time: " 5 years ago",
        stars: 2.5, 
        comment:"The story isn't that good"
    },
    {
        profilPic: "images/profil pic/among-us.png",
        userName: "Cars.Cars",
        time: " 5 years ago",
        stars: 5.0, 
        comment:"Awsome...... I love cars"
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
