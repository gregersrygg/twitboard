jQuery(document).ready(function($) {
    
    $("header form").submit(function(e) {
        e.preventDefault();
        
        var serachQuery = $("#search-term").text();
        $("#stream").tweet({
            query: serachQuery,
            avatar_size: 64,
            count: 10,
            loading_text: "loading tweets..."
        });

        setInterval(function() {
            $("time.tweet_time.seconds").trigger("updatetime");
        }, 1000);
    });
});