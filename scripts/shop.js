let bookHtml = '';

books.forEach((book, index) => {
    
    const buttonId = `btn_${index}`;
    const modalId = `myModal_${index}`;

    
    const buttonHtml = `
        <button type="button" class="btn btn-info btn-lg add-to-cart-button" id="${buttonId}" data-toggle="modal" data-target="#${modalId}">Buy Now</button>
    `;


    const modalHtml = `
        <div class="modal fade" id="${modalId}" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Where to buy</h4>
                    </div>
                    <div class="modal-body">
                        <a href="${book.src1}"  target="_blank"><img class="stores" src="${book.ava1}" alt=""></a> 
                        <a href="${book.src2}"  target="_blank"><img class="stores" src="${book.ava2}" alt=""></a> 
                        <a href="${book.src3}"  target="_blank"><img class="stores" src="${book.ava3}"></a>                  
                    </div>
         
                </div>
            </div>
        </div>
    `;

 
    bookHtml += `
        <div class="book-container">
            <div class="book-image-container">
                <img class="book-image" src="${book.image}" alt="${book.name}">
            </div>
            <div class="book-name">${book.name}</div>
            ${buttonHtml}
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
});


document.querySelector('.js-books-grid').innerHTML = bookHtml;

document.addEventListener('DOMContentLoaded', function () {

    var buttons = document.querySelectorAll('.add-to-cart-button');


    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
 
            var modalId = button.dataset.target;
            var modal = document.querySelector(modalId);


            modal.style.display = 'block';

            var closeButton = modal.querySelector('.close');

        
            closeButton.addEventListener('click', function () {
              
                modal.style.display = 'none';
            });

     
            window.addEventListener('click', function (event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    });
});

