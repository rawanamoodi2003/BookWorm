const reviews=[
     {
        "profilPic": "images/profil pic/profile-1.jpeg",
        "userName": "Wonder42",
        "time": "2 days ago",
        "stars": 5.0,
        "comment": "This book is an absolute delight! Lewis Carroll's imagination knows no bounds, and it's evident in every page of this whimsical adventure. A must-read for anyone who loves a good story."
      },
      {
        "profilPic": "images/profil pic/profile-2.jpeg",
        "userName": "Lover1.23",
        "time": "1 week ago",
        "stars": 4.5,
        "comment": "Alice's Adventures in Wonderland is a literary masterpiece that continues to enchant readers with its clever wordplay and surreal charm. While it may seem nonsensical at first glance, there's a deeper layer of meaning beneath the surface that makes it truly unforgettable."
      },
      {
        "profilPic": "images/profil pic/profile-3.jpeg",
        "userName": "Whimsical",
        "time": "3 weeks ago",
        "stars": 4.0,
        "comment": "I thoroughly enjoyed diving into the whimsical world of Wonderland! Lewis Carroll's creativity knows no bounds, and his ability to craft such an imaginative tale is truly remarkable. While the story may be chaotic at times, that's all part of its charm."
      },
      {
        "profilPic": "images/profil pic/profile-4.jpeg",
        "userName": "Fanatic~~",
        "time": "4 weeks ago",
        "stars": 5.0,
        "comment": "Alice's Adventures in Wonderland is a timeless classic that transports readers to a world of magic and wonder. The characters are unforgettable, the imagery is vivid, and the story is filled with endless possibilities. It's a book that I'll treasure forever."
      },
      {
        "profilPic": "images/profil pic/profile-5.avif",
        "userName": "Wormy22",
        "time": "10 month ago",
        "stars": 4.5,
        "comment": "Reading Alice's Adventures in Wonderland was like stepping into a dream. Lewis Carroll's whimsical tale is full of surprises and delights, and I found myself completely immersed in Alice's journey from beginning to end."
      },
      {
        "profilPic": "images/profil pic/profile-6.jpg",
        "userName": ".Fiction.W",
        "time": "2 months ago",
        "stars": 5.0,
        "comment": "I fell down the rabbit hole and into the fantastical world of Wonderland, and I never wanted to leave! Lewis Carroll's imagination is boundless, and his storytelling is pure magic. This book is a true gem of literature."
      },
      {
        "profilPic": "images/profil pic/profile-7.jpg",
        "userName": "Storyteller",
        "time": "3 months ago",
        "stars": 4.0,
        "comment": "Alice's Adventures in Wonderland is a whimsical journey through a topsy-turvy world where anything is possible. While the story may seem nonsensical at times, it's precisely that unpredictability that makes it so much fun to read."
      },
      {
        "profilPic": "images/profil pic/profile-8.jpeg",
        "userName": "BookLover",
        "time": "4 months ago",
        "stars": 4.5,
        "comment": "I've read Alice's Adventures in Wonderland multiple times, and each time, I discover something new to love about it. Lewis Carroll's imagination is truly remarkable, and his ability to create such a vivid and immersive world is unmatched."
      },
      {
        "profilPic": "images/profil pic/profile-9.jpg",
        "userName": "Imaginare",
        "time": "5 months ago",
        "stars": 5.0,
        "comment": "Alice's Adventures in Wonderland is a whimsical journey that sparks the imagination and fills the heart with joy. Lewis Carroll's storytelling is enchanting, and his characters are as memorable as they are endearing. A must-read for anyone who loves a good fantasy tale."
      },
      {
        "profilPic": "images/profil pic/bob.jpeg",
        "userName": "~Dreamer",
        "time": "6 months ago",
        "stars": 4.0,
        "comment": "Reading Alice's Adventures in Wonderland felt like entering a dream world where anything is possible. Lewis Carroll's imagination knows no bounds, and his ability to create such a whimsical and enchanting tale is truly extraordinary."
      },
      {
        "profilPic": "images/profil pic/profile-11.jpg",
        "userName": "Whimsy12",
        "time": "7 months ago",
        "stars": 4.5,
        "comment": "Alice's Adventures in Wonderland is a delightful romp through a world of whimsy and wonder. Lewis Carroll's imaginative storytelling and colorful characters make this book a joy to read from start to finish."
      },
      {
        "profilPic": "images/profil pic/profile-12.jpg",
        "userName": "Enthusiast",
        "time": "8 months ago",
        "stars": 5.0,
        "comment": "Alice's Adventures in Wonderland is an absolute classic that has stood the test of time. Lewis Carroll's imaginative tale is filled with charm, wit, and endless surprises. It's a book that I'll treasure for years to come."
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