$(document).ready(function() {
    var altura = $('.menu').offset().top;
    /* alert(altura); */

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('.menu').addClass('menu-fixed');
        } else {
            $('.menu').removeClass('menu-fixed');
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const productos = document.querySelectorAll('.product');

    productos.forEach(producto => {
        producto.addEventListener('click', () => {
            const id = producto.getAttribute('data-id');
            window.location.href = `/producto.html?id=${id}`;
        });
    });
});

/* const productsData = {
    "products": [
        {
            "id": 1,
            "name": "Contorno de Ojos Regenerador",
            "price": "700.00",
            "description": "Contorno de Ojos Regenerador",
            "image": "public/crema-1.jpg"
        },
        {
            "id": 2,
            "name": "Protector Solar",
            "price2": "900.00",
            "price": "800.00",
            "description": "Protector Solar",
            "image": "public/crema-2.jpg"
        },
        {
            "id": 3,
            "name": "Crema Hidratante Nutritiva de Día",
            "price": "650.00",
            "description": "Crema Hidratante Nutritiva de Día",
            "image": "public/crema-2.jpg"
        },
        {
            "id": 4,
            "name": "Sérum Equilibrante",
            "price": "1500.00",
            "description": "Sérum Equilibrante",
            "image": "public/serum.jpg"
        }
    ]
};

export default productsData; */