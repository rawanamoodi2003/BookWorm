const reviews=[
    {

        profilPic: "images/profil pic/bob.jpeg",
        userName: " Mystery.7",
        time: "1 day ago",
        stars: 5.0, 
        comment:"A riveting masterpiece! Agatha Christie's 'Black Coffee' kept me on the edge of my seat from start to finish. The intricate plot, combined with clever dialogue and unexpected twists, makes this play a must-see for any mystery lover."
    },
    

    {
        profilPic: "images/profil pic/profile-5.avif",
        userName: "SleuthSvy",
        time: "3 days ago",
        stars: 4.0, 
        comment:"I thoroughly enjoyed 'Black Coffee'! Agatha Christie's signature style shines through in this gripping whodunit. The characters are intriguing, the suspense is palpable, and the resolution is satisfyingly clever. A true delight for fans of classic detective fiction."
    },
    {
        profilPic: "images/profil pic/profile-10.jpg",
        userName: "Buff10101",
        time: "2 months ago",
        stars: 4.5, 
        comment:"An enthralling theatrical experience! 'Black Coffee' is a testament to Agatha Christie's unparalleled talent for crafting compelling mysteries. The plot twists kept me guessing until the very end, and the performances were top-notch. I highly recommend this play to anyone craving an evening of suspense and intrigue."

    },

    {
        profilPic: "images/profil pic/kitty.jpeg",
        userName: "Novice202",
        time: "9 months ago",
        stars: 5.0, 
        comment:"Agatha Christie does it again with 'Black Coffee'! This play is a gripping rollercoaster ride of suspense and deception. The characters are brilliantly written, and the plot is full of surprises. Whether you're a seasoned Christie fan or new to her work, 'Black Coffee' is sure to keep you guessing until the final curtain."
    },
    {
        profilPic: "images/profil pic/Tiffany.jpeg",
        userName: "Theatre02",
        time: "1 year ago",
        stars: 4.0, 
        comment:"A classic Christie masterpiece! 'Black Coffee' delivers all the thrills and intrigue you'd expect from the Queen of Mystery. The clever dialogue, intricate plot twists, and brilliant detective work make this play a standout in the genre. I couldn't tear my eyes away from the stage!"
    },
    {
        profilPic: "images/profil pic/profile-6.jpg",
        userName: "Kim.Tong",
        time: "1 year ago",
        stars: 5.0, 
        comment:"Spectacular! Agatha Christie's 'Black Coffee' is a thrilling theatrical experience that keeps you guessing until the very end. The tension builds steadily throughout, and the resolution is both surprising and satisfying. A must-see for anyone who loves a good mystery!"
    },
    {
        profilPic: "images/profil pic/birdy.jpeg",
        userName: "Afcionado",
        time: " 3 years ago",
        stars: 5.0, 
        comment:"Brilliantly crafted and utterly captivating! 'Black Coffee' is a true testament to Agatha Christie's genius. The plot is intricate, the characters are engaging, and the suspense is palpable. Whether you're a longtime fan of Christie's work or new to her mysteries, this play is guaranteed to keep you entertained from start to finish."
    },

    {
        profilPic: "images/profil pic/Screenshot 2024-04-12 022114.png",
        userName: "Mana2023",
        time: " 4 years ago",
        stars: 4.5, 
        comment:"A thrilling ride from beginning to end! Agatha Christie's 'Black Coffee' is a gripping mystery that had me guessing until the very end. The plot twists are masterfully executed, and the resolution is both surprising and satisfying. I couldn't recommend this play enough!"
    },
       {
        profilPic: "images/profil pic/profile-1.jpeg",
        userName: "Enthusiast",
        time: "4 years ago",
        stars: 4.0, 
        comment:"A true gem of detective theatre! 'Black Coffee' is a captivating whodunit that keeps you on the edge of your seat until the final reveal. Agatha Christie's clever plotting and sharp wit shine through in every scene. Whether you're a fan of classic mysteries or simply love a good thriller, this play is sure to impress."
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