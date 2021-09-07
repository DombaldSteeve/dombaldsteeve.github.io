
$(document).ready(function() {

    $(".navbar").hide();

    $(function () {
        $(window).scroll(function () {

            if ($(this).scrollTop() > 140){
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
});


const ratio = .6
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}
  
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
    observer.observe(r)
})




const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = ("");

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>"+ splitText[i] + "</span>";
}


let char = 0; 
let timer = setInterval(onTick, 90);

            function  onTick(){
            const span = text.querySelectorAll('span') [char];
            
            if (char === splitText.length){
                clearInterval(timer)
            }else{
                char++
                span.classList.add('fade');
            }
        }

function complete() {
    clearInterval(timer);
    timer = null;
}

