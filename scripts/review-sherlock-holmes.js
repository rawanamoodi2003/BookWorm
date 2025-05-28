const reviews=[
    {

        profilPic: "images/profil pic/bob.jpeg",
        userName: "shadw.fox",
        time: "5 day ago",
        stars: 5.0, 
        comment:"Sherlock Holmes is an iconic character, and this volume does justice to Sir Arthur Conan Doyle's genius. The stories are gripping, the mysteries are cleverly crafted, and Holmes's deductive reasoning never fails to impress." },
    

    {
        profilPic: "images/profil pic/profile-5.avif",
        userName: "MysticSun",
        time: "8 days ago",
        stars: 1.0, 
        comment:"it's borning ngl"},
    {
        profilPic: "images/profil pic/profile-10.jpg",
        userName: "SilverSky",
        time: "2 months ago",
        stars: 3.5, 
        comment:"As a lifelong fan of detective fiction, I can confidently say that Sherlock Holmes remains the gold standard. This collection is a must-have for anyone who appreciates the art of a well-crafted mystery."},

    {
        profilPic: "images/profil pic/kitty.jpeg",
        userName: "EmberFla",
        time: "9 months ago",
        stars: 5.0, 
        comment:"Reading these stories feels like solving puzzles alongside Holmes himself. The attention to detail, the sharp wit, and the sheer brilliance of Conan Doyle's writing make this volume a true literary gem."},
    {
        profilPic: "images/profil pic/Tiffany.jpeg",
        userName: "Theatre02",
        time: "1 year ago",
        stars: 4.0, 
        comment:"I've lost count of how many times I've read these stories, and yet, with each re-read, I discover new layers of complexity and intrigue. Sherlock Holmes truly is timeless, and this collection is a testament to his enduring legacy."

    },
    {
        profilPic: "images/profil pic/profile-6.jpg",
        userName: "..Celestial..",
        time: "1 year ago",
        stars: 1.0, 
        comment:"I hate the fact that sherlock always wins in the end" },
    {
        profilPic: "images/profil pic/birdy.jpeg",
        userName: "FrostByte",
        time: " 3 years ago",
        stars: 4.0, 
        comment:"Sherlock Holmes is more than just a fictional character; he's a cultural icon. This volume brings together the essence of what makes Holmes so captivating – his keen intellect, unwavering logic, and relentless pursuit of truth."},

       {
        profilPic: "images/profil pic/profile-1.jpeg",
        userName: "Enthusiast",
        time: "4 years ago",
        stars: 4.0, 
        comment:"Sherlock Holmes: The Complete Novels and Stories Volume I is a literary masterpiece that showcases the brilliance of Sir Arthur Conan Doyle. Whether you're a seasoned Sherlockian or new to the world of Holmes, this collection is sure to leave you spellbound."},
   
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