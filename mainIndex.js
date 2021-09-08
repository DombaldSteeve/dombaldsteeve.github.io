
$(document).ready(function() {

    $(".navbar").hide();

    $(function () {
        $(window).scroll(function () {

            if ($(this).scrollTop() > 10){
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
});

/********************************************* */
const ratio = .7
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            entry.target.classList.add('block-visible')
            entry.target.classList.add('img-visible')
            observer.unobserve(entry.target)
        }
    })
}
  
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
    observer.observe(r)
})
document.querySelectorAll('[class*="block"]').forEach(function (b) {
    observer.observe(b)
})
document.querySelectorAll('img').forEach(function (i) {
    observer.observe(i)
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


/*
let observer = new IntersectionObserver(function (observables)  {
    observables.forEach(function (observable) {
        if (observable.intersectionRatio > 0.5) {
            observable.target.classList.remove('not-visible')
            console.log('Item visible')
        }
    })
}, {
    threshold: [0.5]
})

let items = document.querySelectorAll('.block', img)
items.forEach(function (item) {
    item.classList.add('not-visible')
    observer.observe(item)
})
*/