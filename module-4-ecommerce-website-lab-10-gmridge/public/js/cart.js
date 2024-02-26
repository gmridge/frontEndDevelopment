// JS used to set up the Cart

class Cart {
    constructor() {
        this.apiUrl = 'https://fakestoreapi.com/';
    }

    getCart(userID) {
        var apiUrl = this.apiUrl;
        $.ajax({
            type:"GET",
            url: apiUrl + "carts/user/" + userID,
            success: function(data) {
                $(data).each(function(index, cart) {
                    var carts = [];
                    var count = 0;
                    count += cart.products.length;
                    $(cart.products).each(function(index, products){
                        var singleProduct = {};
                        $.ajax({
                            type: "GET",
                            url: apiUrl + "products/" + products.productId,
                            success: function(product) {
                                singleProduct['productId'] = product.id;
                                singleProduct['productURL'] = "/product.html?productid=" + product.id;
                                singleProduct['title'] = product.title;
                                singleProduct['price'] = product.price;
                                singleProduct['image'] = product.image;
                                singleProduct["qty"] = products.quantity;
                                carts.push(singleProduct);
                                localStorage.setItem("cart", JSON.stringify(carts));
                            },
                        });
                    });
                });

            },
        });
    }

    //display products in Cart
    getCartDisplay(products){
        var totalPrice = 0;
        var count = 0;
        $(products).each(function(index, product) {
            count += product.qty;
            var price = product.qty * product.price;
            totalPrice += price;
            $(".cartDisplay tbody").prepend(
                '<tr><td><h6>' + 
                product.qty +
                '</h6></td><td><a href="' +
                product.productURL +
                '"><img src="' + 
                product.image +
                '" class="img-thumbnail" style="max-width:50px;"></a></td><td><h6>' + 
                product.title +
                '</h6><small> $' + product.price +
                '</small></td><td class="text-end"><span class="text-body-secondary">$' 
                + price.toFixed(2) +
                '</span></td></a>'
            )
        });
        $(".price").html(totalPrice);
        localStorage.setItem("cartCount", count);
        $("span.cartCount.badge").html(count);
    }
}
