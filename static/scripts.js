$(function() {
    //GET/READ
    $('#get-button').on('click', function() {
        $.ajax({
            url: '/products',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEL = $('tbody');
                tbodyEL.html('');
                response.products.forEach(function(product){
                    var userInput = $('#user-input').val().toLowerCase();
                    if(product.name.toLowerCase().search(userInput) > -1){    
                        tbodyEL.append('\
                            <tr>\
                                <td class="id">' + product.id + '</td>\
                                <td class="name">' + product.name + '</td>\
                                <td class="price">' + product.price + '</td>\
                        ');
                    }
                });      
            }
        });
    });
});