let data=[];
async function getQuote()
{
    const apiURL="https://zenquotes.io/api/quotes";
    const proxyURL = 'https://api.allorigins.win/raw?url=';
    try{
        const response=await fetch(proxyURL+apiURL);
        data=await response.json();
        displayRandomQuote();
    }
    catch(error){
        console.log(error);
    }
}

function displayRandomQuote()
{
    if (data.length == 0) return;      //prevents error if data is not loaded
    const quoteauthor=data[Math.floor(Math.random()*data.length)];
    document.getElementById("quote-text").textContent='"'+quoteauthor.q+'"';
    document.getElementById("quote-author").textContent='-'+quoteauthor.a;
}

function postToLinkedIn() {
    const quote = quoteText.innerHTML;
    const author = authorText.innerHTML;

    // Construct the LinkedIn share URL with pre-filled text
    const text = quote + " - " + author;
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
}
getQuote();
document.getElementById("new-quote").addEventListener("click",displayRandomQuote);
