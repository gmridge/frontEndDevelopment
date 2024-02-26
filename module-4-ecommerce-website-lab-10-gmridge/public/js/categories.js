// Category Class Constructor using fakestore API
class Categories {
    constructor() {
        this.apiUrl = 'https://fakestoreapi.com/'
    }
// sets up all categories from Bootstrap on a page
    getAllCategories() {
        $.ajax({
            type: "GET",
            url: this.apiUrl + "products/categories",
            success: function (data) {
                $(data).each (function (index, category){
                    $(".categories").append(
                        '<a class="dropdown-item" href="/category.html?category=' +
                         encodeURIComponent(category) + 
                         '">'+ 
                         toTitleCase(category) + 
                         "</a>"
                    );
                })
            },
        });
    }

    //sets up all items in a single category on a page
    getSingleCategory(slug){
        $.ajax({
            type: "GET",
            url: this.apiUrl + "products/category/" + slug,
            success: function (data) {
                console.log(data)
                $(data).each (function (index, product){
                    $('.products').append(
                        '<div class="col-md-3"><div class="product"> <a href="/product.html?productid=' +
                         product.id + 
                         '"><div class="image"><img src="' +
                          product.image +
                          '"class="img-fluid"></div><div class="info"><div class="title">'+ 
                          product.title + '<br>$' + product.price +
                          "</div></div></a></div></div>"
                    )
                });
            },
        });
    }
}