$(function() {
    
    $("h2")
        .wrapInner("<span></span>")

    $("h2 br")
        .before("<span class='spacer'>&nbsp;</span>")
        .after("<span class='spacer'>&nbsp;</span>");

});