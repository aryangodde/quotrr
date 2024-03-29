$('.dayNight input').change(function() {
    $('body').toggleClass('day', $(this).is(':checked'))
    $('.generate').toggleClass('day');
});

const text=document.getElementById("quote");
const tweetButton=document.getElementById("generate");

const getNewQuote = async () =>
{
    //api for quotes
    var url="https://type.fit/api/quotes";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote=allQuotes[indx].text;

    if (quote.length > 60) {
        getNewQuote();
    }
    else {
    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    }

    
}
getNewQuote();


