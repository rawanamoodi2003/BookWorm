const reviews = [
    {
        profilPic: "https://img.freepik.com/free-photo/vertical-shot-attractive-african-american-man-posing-smiling_181624-15027.jpg",
        userName: "booklov99",
        time: "9 month ago",
        stars: 2.0, 
        comment:"Although it wasn't my usual genre, I found some aspects intriguing."
    },
    {
        profilPic: "https://media.istockphoto.com/id/1224956842/photo/portarit-of-a-handsome-older-man-drinking-coffee.jpg?s=612x612&w=0&k=20&c=k5zK_TZwGBfXXfnx6oFT4vgG45dxAqRln6hAy4IyxAw=",
        userName: "dyson5950",
        time: "5 month ago",
        stars: 5.0, 
        comment:"This book transported me to another world, I absolutely loved it!"
    },
    {
        profilPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPy9ncMTuaPmZfD7fJMUUuZMz5WmvLYhx__Iz1zaE7A&s",
        userName: "fantasyfai",
        time: "5 month ago",
        stars: 5.0, 
        comment:"Magical and enchanting, I couldn't put it down!"
    },
    {
        profilPic: "https://media.gettyimages.com/id/1310533180/photo/cheerful-fashionable-adult-man-in-city-setting.jpg?s=612x612&w=gi&k=20&c=SzE73sN3H-OH_98JqRsjnPWwpT2Qx1kLat47sqqzVGA=",
        userName: "book-lore",
        time: "4 months ago",
        stars: 1.0, 
        comment:"Unfortunately, I didn't connect with the characters or the storyline."
    },
    {
        profilPic: "https://www.shutterstock.com/image-photo/studio-portrait-happy-successful-confident-600nw-2123908883.jpg",
        userName: ".avidread.",
        time: " 8 months ago",
        stars: 3.0, 
        comment:"An okay read, but it didn't leave a lasting impression on me."
    },
    {
        profilPic: "https://img.freepik.com/free-photo/stylish-african-american-woman-smiling_23-2148770405.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715472000&semt=ais_user",
        userName: "memoryla",
        time: " 2 year ago",
        stars: 4.0, 
        comment:"Memorable and delightful, I plan to revisit this book again!"
    },
    {
        profilPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFoJTM3AxrVrAUtQluk9DUY3bOxkjiHpCIUAnN98IJhg&s",
        userName: "storybooo",
        time: "4 years ago",
        stars: 2.0, 
        comment:"Had some good moments, but overall, it fell short of my expectations."
    },
    {
        profilPic: "https://media.vanityfair.com/photos/5b199978ef9c7776eebc6616/master/pass/Alicia-Silverstone-Julie-Interview.jpg",
        userName: "storybook",
        time: "4 years ago",
        stars: 3.0, 
        comment:"Enjoyable read, but it didn't fully captivate me."
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
