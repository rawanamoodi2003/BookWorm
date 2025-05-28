


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

