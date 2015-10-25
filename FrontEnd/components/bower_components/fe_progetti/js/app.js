window.alert("app");
var app = (function ($) {
    var config = $('#config'),
    app = JSON.parse(config.text()); 
    window.alert(JSON.parse(config.text()));  
    $(document).ready(function () {
       var router = new app.router();
       alert( router.routes[Backbone.history.getFragment()] );
       $("#test-jq").html("d3js -> ok");
    });
    return app;
   
})(jQuery);
