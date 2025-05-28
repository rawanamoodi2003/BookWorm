const reviews=[
    {

        profilPic: "images/profil pic/a.jpg",
        userName: "Nermin33",
        time: "8 year ago",
        stars: 5.0, 
        comment:"It is a novel that you will read with all your senses... and you will not leave it after entering it You may find yourself in it.. It will put you in a sea of questions Some of them you will find their answers between the lines, and some of them you will never be able to find their answers as long as you live..The most beautiful novel I have read."
    },
{
        profilPic: "images/profil pic/b.jpg",
        userName: "AMEERA",
        time: "3 days ago",
        stars: 4.5, 
        comment:"The first reason I read this novel is because it is in great demand among Arab readers, and he is also a famous writer, and his novels have a high price and are available in all bookstores. The most important question is, is this novel worth the hype? The answer is, it is not worth a single riyal. I tried and forced myself to read it."
    },
    { 
        profilPic: "images/profil pic/c.jpg",
        userName: "haton8901",
        time: "2 months ago",
        stars: 4.0, 
        comment:"I read Khawf, and I must say that it is really, really and completely wonderful. I have always been attracted to the worlds of the jinn, and to be honest with you, I am not good with Arabic novels for several reasons, so the release of Khawf changed many things and went outside our box of expectations."

    },

    {
        profilPic: "images/profil pic/d.jpg",
        userName: "MroujXX",
        time: "9 months ago",
        stars: 2.0, 
        comment:"Shedding light on the power of women, whether they are human or devilish... mercy or torment. His depiction of the relationship between the pound and the human being... seemed to me to be true and not exaggerated or imaginary, unlike other novels of this kind. The strength of a friendship relationship ."
    },
    {
        profilPic: "images/profil pic/e.jpg",
        userName: "Amahiaoi",
        time: "1 year ago",
        stars: 4.0, 
        comment:"I rate the book with four stars. The book attracts attention and excites you to learn about a world that you do not know. The world of the jinn is unknown to me. I enjoyed the book, whether it was a true story by the writer or a novel. You may feel afraid while reading it, but when you finish it”"
    },
    {
        profilPic: "images/profil pic/f.jpg",
        userName: "Alanouud",
        time: "1 year ago",
        stars: 5.0, 
        comment:"The hunger for reading exploded in me and I began searching for things similar to fear!! I read many, but (fear) is an indescribable feeling. Could it be the feeling of first love? I don't know, but this book changed part of my life Writer's style? amazing ! Interesting ! Indescribable creativity! Thank you, Osama Al-Muslim, for Fear."
    },
    {
        profilPic: "images/profil pic/j.jpg",
        userName: "Raghda88",
        time: " 3 years ago",
        stars: 5.0, 
        comment:"One of the rare books that I finished in two days Worth reading because it is for everyone Everyone who receives this huge momentum of imaginative events and storms will enjoy and live it to the fullest"
    },
    {
        profilPic: "images/profil pic/h.jpg",
        userName: "Meme826",
        time: " 4 years ago",
        stars: 4.5, 
        comment:"I like your narration of the novel, the strange interweaving of stories. God willing, I congratulate you on your interesting style."
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