//loads other script files (links them)
$(function () {
    if(localStorage.getItem("user") == null && $(".auth").length) {
      window.location.href="/login.html";
    }
    loadScript('js/categories.js', categoriesSetup);
    loadScript('js/products.js', productsSetup);
    loadScript('js/user.js', userInfo);
    loadScript('js/cart.js', cartInfo);
  });
  
  //Set up Nav html page with JS
  $.get('/templates/navigation.html', function (data) {
    if($('.logout').length) {
      localStorage.clear();
    }
    $("#nav-placeholder").replaceWith(data);
    if(localStorage.getItem('user') === null) {
      $('.accountNav').html(
        '<li class="nav-item"><a class="nav-link text-white" href="/login.html">Log In</a></li>'
        );
    } else{
      $('.accountNav').html(
        '<li class="nav-item"><a class="nav-link text-white" href="/logout.html">Log Out</a></li><li class="nav-item"><a class="nav-link text-white" href="/account.html">Account</a></li>'
        );
    }
  });
  
  //Set up footer html page with JS
  $.get('/templates/footer.html', function (data) {
    $("#footer-placeholder").replaceWith(data);
  })
  
  
  //function to set up categories
  var categoriesSetup = function() {
    let categories = new Categories();
    categories.getAllCategories();
    if(urlParam("category")) {
      categories.getSingleCategory(decodeURIComponent(urlParam("category")));
    }
  };
  
  //function to set up products
  var productsSetup = function() {
    let products = new Products();
    if($('.products.new').length) {
      products.getNewProducts(8);
    }
    if((urlParam("productid"))) {
    products.getSingleProduct((urlParam("productid")));
    } 
    }
  
  //login function
  var userInfo = function() {
    let user = new User();
    $('form.login').submit(function(e) {
      e.preventDefault();
      var username = $('#username').val();
      var password = $('#password').val();
      user.doLogin(username, password)
    });
  
    if($(".userAccount").length) {
      var userAccount = JSON.parse(localStorage.user);
      user.getAccountInfo(userAccount);
    }
  }
  
  //Set up the functions for the Cart/ Checkout page.
  var cartInfo = function ()
   {
    let cart = new Cart();
    if(localStorage.getItem("user") != null) {
      var user = JSON.parse(localStorage.user);
      cart.getCart(user.id);  
      setTimeout(() => {
        var cartItems = JSON.parse(localStorage.getItem("cart"));
        cart.getCartDisplay(cartItems);
      }, 1000);
    }      
  };
  
  //Loadscript setup
  function loadScript(url, callback) {
    var head = document.head
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onReadyStateChange = callback;
    script.onload = callback;
    head.appendChild(script);
  }
  
  //fetch the API
  fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => {
  })
  
  // function to title case.
  function toTitleCase(str) {
      return str.replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase()
      })
  }
  
  // grab something off of a url via JS shortcut
  function urlParam(name) {
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.href);
    if(results ==null) {
      return null;
    } else {
      return results[1] || 0;
    }
  }