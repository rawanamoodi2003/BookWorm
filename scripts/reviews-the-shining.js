const reviews=[
    {
        profilPic: "images/profil pic/Lisa.jpeg",
        userName: "Lisa_john",
        time: "5 months ago",
        stars: 4.5, 
        comment:"This is one of the most atmospheric books I have ever read, with The Overlook Hotel, ultimately becoming a character in its own right?"
    },
    {
        profilPic: "images/profil pic/Screenshot 2024-04-12 023032.png",
        userName: "William.A",
        time: "9 months ago",
        stars: 5.0, 
        comment:"Honestly sooooooo gooooood. It was beautiful and the ending picture was amazing. The idea of influence by other people was prevalent and it was amazing! Hallorants last monologue was beautiful “the world doesn’t love you.”"

    },
    {

        profilPic: "images/profil pic/pool.jpg",
        userName: "Layn2005",
        time: "2 years ago",
        stars: 5.0, 
        comment:"Really one of the best horror books I read. Thank you King for this masterpieace <3 ”"
    },
    {
        profilPic: "images/profil pic/Juan.jpg",
        userName: "SoyJuano",
        time: "2 years ago",
        stars: 4.0, 
        comment:"My first horror novel because I’m too scared to watch actual horror movies. I read this while I was travelling solo and it was still scary to read alone in different hotels (especially because the books based around a haunted hotel) - Stephen Kings writing is super incapsulating and super hard to put down.”"
    },
    {
        profilPic: "images/profil pic/Steve.jpeg",
        userName: "SteveHere",
        time: " 3 years ago",
        stars: 4.0, 
        comment:"I think the book and movie were great definitely a classic"
    },

    {
        profilPic: "images/profil pic/ahmed.jpeg",
        userName: "Abdo5432",
        time: "4 years ago",
        stars: 3.5, 
        comment:"really interesting read, i was definitely captivated but it definitely has some stuff in it that seemed gratuitous to me, like the random racism to Hollerann by a lot of characters and some of the sex aspects with Jack felt a little added in for not much reason. I would probably give it a 3.5 because it was still an enjoyable read"
    },


    {
        profilPic: "images/profil pic/hacker.jpeg",
        userName: "Hector_in",
        time: " 5 years ago",
        stars: 2.5, 
        comment:"It's a good story...but A LOT of details. I wish it was shorter too. Would have saved me tons of time"
    },
    {
        profilPic: "images/profil pic/froggy.jpeg",
        userName: "FrogGirl2",
        time: " 7 years ago",
        stars: 5.0, 
        comment:"This was the first book I read as a teenager that introduced me to the horror genre and cemented it as being one of my go tos. Classically scary, beautifully written, unsettling and suspenseful even after multiple rereads. Love this book!"
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
