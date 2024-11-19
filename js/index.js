var title = document.getElementById("title");
title.innerHTML = "Quote of the Day";

var praOne = document.getElementById("praOne");
praOne.innerHTML ="Press the button below to recieve a random quote!";

var btn =document.getElementById("btn");
btn.innerHTML = "New Quotes"


var quotesList = [
    {
        puplisher :"--Oscar Wilde" ,
        artical : "“Be yourself; everyone else is already taken.”"
    },
    {
        puplisher :"--Frank Zappa" ,
        artical : "“So many books, so little time.”"
    },
    {
        puplisher :"--Albert Einstein" ,
        artical : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    },
    {
        puplisher :"-- Marcus Tullius Cicero" ,
        artical : "“A room without books is like a body without a soul.”"
    },
    {
        puplisher :"--Mae West" ,
        artical : "“You only live once, but if you do it right, once is enough.”"
    },
    {
        puplisher :"--Mahatma Gandhi" ,
        artical : "“Be the change that you wish to see in the world.”"
    },
    {
        puplisher :"--Robert Frost" ,
        artical : "“In three words I can sum up everything I've learned about life: it goes on.”"
    },
]


function getNewQuote(){

    var num = Math.floor(  Math.random()*quotesList.length  )
    
    document.getElementById("artical").innerHTML=quotesList[num].artical  
    document.getElementById("puplisher").innerHTML=quotesList[num].puplisher
    

}


btn.onclick = getNewQuote 