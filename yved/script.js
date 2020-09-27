$(document).ready(function(){
    if(window.innerWidth > 1200) {
        var i = 0;

        function yved() {
            i = 1;
            $('.yved:nth-child(' + i + ')').fadeIn(500).delay(7000).fadeOut(500);
        }

        setTimeout(function () {
            setInterval(
                function () {
                    i = i + 1;
                    $('.yved:nth-child(' + i + ')').fadeIn(500).delay(7000).fadeOut(500);
                }, 15000);
            yved();
        }, 20000);
    }
});