jQuery(document).ready(function($) {
    var refreshTimeInSec = 30;
    var maxResults = 10;
    var refreshTimer;
    
    if(location.hash) {
      $("input[name=search-term]").val(location.hash.replace(/^#/, ""));
    }
    
    $("header form").submit(function(e) {
        e.preventDefault();
        clearTimeout(refreshTimer);
        
        var serachQuery = $("input[name=search-term]").val();
        $("#stream").empty().tweet({
            count: maxResults,
            template: "{avatar}{time}<span class='tweet_screen_name'>{screen_name}</span>{text}",
            query: serachQuery,
            avatar_size: 64,
            loading_text: "loading tweets..."
        });
        
        refreshTimer = setTimeout(function() {
          $("header form").trigger("submit");
        }, refreshTimeInSec * 1000);
        
    }).trigger("submit");
    
    setInterval(function() {
        $("time.tweet_time.seconds").trigger("updatetime");
    }, 1000);
});