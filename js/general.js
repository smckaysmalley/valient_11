var string = "";
$(document).keydown(function (keystroke) {
    if (keystroke.which == '48') {
        string = "";
    } 
    else {
        string += keystroke.which;
        console.log(string);
    }

    if (string == '668478')
    {
        startFlip($('.btn'));
        string = "";
    }
    
    else if (string == '657676')
    {
        startFlip($('.btn'));
        startFlip($('iframe'));
        startFlip($('img'));
        startFlip($('.panel'));
        startFlip($('body'));
        startFlip($('p'));
        string = "";
    }
    else if (string == '807367')
    {
        startFlip($('iframe'));
        startFlip($('img'));
        string = "";
    }
    else if (string == '70767380') {
        startFlip($('body'));
        string = "";
    }
    else if (string == '8065786976')
    {
        startFlip($('.panel'));
        string = "";
    }
    else if (string == '82698669828369')
    {
        startReverse($('body'));
        string = "";
    }
});

function startFlip(element)
{
    console.log("flipping...");
    $(element).addClass("flipper");
    setTimeout(function() {stopFlip(element)}, 2000);
}

function stopFlip(element)
{
    $(element).removeClass("flipper");
    console.log("done flipping...");
}

var revToken = 1;
function startReverse(element)
{
    console.log("reversing...");
    if (revToken == 1)
        $(element).addClass("reverse");
    else if (revToken == -1)
        $(element).addClass("reverse-back");
          
    setTimeout(function() {permenentReverse(element)}, 900);
}

function permenentReverse(element)
{
    revToken *= -1;
    $(element).removeClass("reverse").removeClass("reverse-back");
    $(element).css("transform", "scaleX("+revToken+")");
    console.log("done reverse...");
}