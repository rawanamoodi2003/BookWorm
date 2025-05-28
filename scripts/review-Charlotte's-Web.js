const reviews=[
    {
       "profilPic": "images/profil pic/profile-1.jpeg",
       "userName": "Wonder42",
       "time": "2 days ago",
       "stars": 5.0,
       "comment": "Charlotte's Web is a timeless classic that beautifully captures the innocence of childhood and the importance of friendship. It's a book that I will always hold close to my heart"
     },
     {
       "profilPic": "images/profil pic/profile-2.jpeg",
       "userName": "Lover1.23",
       "time": "1 week ago",
       "stars": 4.5,
       "comment": "I read Charlotte's Web as a child, and even now as an adult, I find myself returning to its pages for its gentle wisdom and poignant storytelling."},
     {
       "profilPic": "images/profil pic/profile-3.jpeg",
       "userName": "Whimsical",
       "time": "3 weeks ago",
       "stars": 4.0,
       "comment": "I appreciate the messages of empathy and kindness woven throughout Charlotte's Web. It's a gentle reminder of the goodness in the world, even in the face of hardship."

    },
     {
       "profilPic": "images/profil pic/profile-4.jpeg",
       "userName": "Fanatic~~",
       "time": "4 weeks ago",
       "stars": 5.0,
       "comment": "As much as I appreciate the themes of friendship and loyalty, I couldn't help but feel a bit melancholic reading about the cycle of life and death in Charlotte's Web. It's a bittersweet tale."},
     {
       "profilPic": "images/profil pic/profile-5.avif",
       "userName": "Wormy22",
       "time": "10 month ago",
       "stars": 4.5,
       "comment": "Charlotte's Web is a masterpiece of children's literature. Its simplicity belies its depth, making it a book that resonates with readers of all ages."},
     {
       "profilPic": "images/profil pic/profile-6.jpg",
       "userName": ".Fiction.W",
       "time": "2 months ago",
       "stars": 5.0,
       "comment": "I found the character of Charlotte to be incredibly inspiring. Her selflessness and determination are qualities that I strive to embody in my own life."},
     {
       "profilPic": "images/profil pic/profile-7.jpg",
       "userName": "Storyteller",
       "time": "3 months ago",
       "stars": 3.0,
       "comment": "While I understand its status as a classic, I personally didn't connect with Charlotte's Web as much as I expected. It's a sweet story, but it didn't leave a lasting impression on me."},
     {
       "profilPic": "images/profil pic/profile-8.jpeg",
       "userName": "BookLover",
       "time": "4 months ago",
       "stars": 4.5,
       "comment": "Charlotte's Web is a beautiful exploration of the bond between humans and animals. It taught me to appreciate the interconnectedness of all living beings."},
     {
       "profilPic": "images/profil pic/profile-9.jpg",
       "userName": "Imaginare",
       "time": "5 months ago",
       "stars": 5.0,
       "comment": "Reading Charlotte's Web to my children is always a heartwarming experience. It's a story that sparks meaningful conversations about life, death, and the beauty of friendship."},
     {
       "profilPic": "images/profil pic/bob.jpeg",
       "userName": "~Dreamer",
       "time": "6 months ago",
       "stars": 4.0,
       "comment": "I admire how Charlotte's Web tackles complex themes like mortality and sacrifice in a way that's accessible to young readers. It's a testament to E.B. White's skill as a storyteller."},
     {
       "profilPic": "images/profil pic/profile-11.jpg",
       "userName": "Whimsy12",
       "time": "7 months ago",
       "stars": 4.5,
       "comment": "The character of Wilbur the pig stole my heart from the very first page. His journey from a vulnerable piglet to a confident and beloved friend is both heartwarming and inspiring."},
     {
       "profilPic": "images/profil pic/profile-12.jpg",
       "userName": "Enthusiast",
       "time": "8 months ago",
       "stars": 5.0,
       "comment":"Charlotte's Web is a book that stays with you long after you've turned the final page. Its gentle prose and memorable characters make it a true classic of children's literature."}     
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