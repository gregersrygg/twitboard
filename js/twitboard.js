jQuery(document).ready(function($) {
    
    $("header form").submit(function(e) {
        e.preventDefault();
        
        var serachQuery = $("input[name=search-term]").val();
        $("#stream").empty().tweet({
            count: 10, /* number for search results */
            refresh_interval: 30, /* update every 30 seconds */
            template: "{avatar}{time}<span class='tweet_screen_name'>{screen_name}</span>{text}",
            
            query: serachQuery,
            avatar_size: 64,
            loading_text: "loading tweets..."
        });
    }).trigger("submit");
    
    setInterval(function() {
        $("time.tweet_time.seconds").trigger("updatetime");
    }, 1000);
});