const reviews = [
    {
        profilPic: "images/profil pic/pool.jpg",
        userName: "Layn2005",
        time: "1 day ago",
        stars: 5.0, 
        comment: "BookWorm is absolutely amazing! I gotta say that it's my favorite 💖"
    },
    {
        profilPic: "images/profil pic/cry.jpeg",
        userName: ".Kim.Lee.",
        time: "2 days ago",
        stars: 5.0, 
        comment: "I loved BookWorm. It made me think a lot about the magic of words and the joy of reading. I loved every aspect of BookWorm! Love love love!🩵💚💙💜"
    },

    {
        profilPic: "images/profil pic/pumkin.jpeg",
        userName: "Lana.Jobs",
        time: "2 days ago",
        stars: 5.0, 
        comment: "Who else became a bookworm 🙋‍♀️🪱🩷"
    },
    {
        profilPic: "images/profil pic/kitty.jpeg",
        userName: "IIXGreen",
        time: "3 days ago",
        stars: 5.0, 
        comment: "We explored BookWorm at our book club, and I can’t recommend it enough!! Each member was touched, and frankly shocked by the amazing content on BookWorm. Our group of readers unanimously agrees that BookWorm is a gem!💎"
    },
    {
        profilPic: "images/profil pic/Screenshot 2024-04-12 022114.png",
        userName: "Stitch0.00",
        time: "3 days ago",
        stars: 5.0, 
        comment: "Thank you whoever made this wonderful website 💕💕💕"
    },
    {
        profilPic: "images/profil pic/abdo.jpeg",
        userName: "AboHussn",
        time: "4 days ago",
        stars: 5.0, 
        comment: "Wallah this website is an absolute W ."
    },

    {
        profilPic: "images/profil pic/birdy.jpeg",
        userName: "LeahToml",
        time: "4 days ago",
        stars: 5.0, 
        comment: "Follow the journey of BookWorm, a website that introduces you to the wonders of literature. With its powerful message about the joy of reading and exploring various genres, it's a must-visit for all book lovers.💝"
    },
    {
        profilPic: "images/profil pic/glasses-dude.jpeg",
        userName: "Sammy:D",
        time: "4 days ago",
        stars: 5.0, 
        comment: "NGL THIS WEBSITE IS THE BEST🩶🩶"
    },
    {
        profilPic: "images/profil pic/johnny-deep.jpeg",
        userName: "JohnyFan",
        time: "6 days ago",
        stars: 5.0, 
        comment: "I feel like a book lover for giving BookWorm five stars. BookWorm is definitely an uplifting website worth visiting and exploring. BookWorm triggered the emotional reaction I expected and more!❤️‍🔥"
    },
    {
        profilPic: "images/profil pic/candance.jpeg",
        userName: "Candance",
        time: "7 days ago",
        stars: 5.0, 
        comment: "Wow! I am so glad that I finally got around to exploring BookWorm. BookWorm had been sitting on my bookmarks for a really long time, but I had been waiting for the perfect moment to explore it. That moment finally arrived last weekend, when I had a full day to indulge in the joy of reading on BookWorm."
    },
    {
        profilPic: "images/profil pic/planet.jpeg",
        userName: ".Boldwin8",
        time: "7 days ago",
        stars: 5.0, 
        comment: "I hate reviewing websites that I'm crazy about. I never can get across how wonderful they are. BookWorm is one of those websites."
    },
    {
        profilPic: "images/profil pic/uwu.jpeg",
        userName: "ThatGirl..",
        time: "8 days ago",
        stars: 5.0, 
        comment: "BookWorm is simply amazing🤫🧏‍♂️"
    },
    {
        profilPic: "images/profil pic/Brian.webp",
        userName: "Brain.9x0",
        time: "9 days ago",
        stars: 5.0, 
        comment: "BookWorm is fantastic!😆😆😆😆"
    },
    {
        profilPic: "images/profil pic/Flash.avif",
        userName: "YessTurki",
        time: "9 days ago",
        stars: 5.0, 
        comment: "BookWorm is my favorite site! The recommendations are spot on and the community is great."
    },
    {
        profilPic: "images/profil pic/thanos.webp",
        userName: "Rana2001",
        time: "9 days ago",
        stars: 5.0, 
        comment: "My first time using BookWorm and I love it. It feels like stepping into a whole new world of books💕💞💓!"
    },
    {
        profilPic: "images/profil pic/tom-nook.jpeg",
        userName: "Tom.Nook",
        time: "10 days ago",
        stars: 5.0, 
        comment: "BookWorm is awesome. The recommendations are good, and the design is sleek and modern🤝."
    },
    {
        profilPic: "images/profil pic/Screenshot 2024-04-12 023032.png",
        userName: "William.A",
        time: "9 days ago",
        stars: 5.0, 
        comment: "Haven't explored all of BookWorm yet, but so far it's definitely FIVE STARS! I love the variety of books available🤩😎😆."
    },
    {
        profilPic: "images/profil pic/david.jpeg",
        userName: "12david34",
        time: "10 days ago",
        stars: 5.0, 
        comment: "BookWorm is pretty amazing. The interface is user-friendly, and the book selection is great. I had a fun time discovering new reads.🥰🥰🥰"
    },
    {
        profilPic: "images/profil pic/super-man.jpg",
        userName: "zac..smith",
        time: "11 days ago",
        stars: 5.0, 
        comment: "BookWorm is iconic. It's widely considered the best site for book recommendations, and for good reason. I found some of my favorite books here."
    },
    {
        profilPic: "images/profil pic/f.jpg",
        userName: "JaSON124",
        time: "12 days ago",
        stars: 5.0, 
        comment: "Everyone says BookWorm is the best place to find great books, and they're right. This site is fantastic. The design is great, and the book recommendations are top-notch.😍😍"
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