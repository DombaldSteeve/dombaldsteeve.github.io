/*

/**
 * calcul la position de l'élément par rapport au haut de la page
 * @param {HTMLElement} element 
 * @return {number}
 

function offsetTop(element, acc = 0) {
    if (element.offsetParent) {
        return offsetTop(element.offsetParent, acc + element.offsetTop)
    }
    return acc + element.offsetTop;
}



class parallax {

    /**
     * 
     * @param {HTMLelement} element 
     

    constructor(element) {
        this.element = element;
        this.ratio = parseFloat(element.dataset.parallax);
        this.onScroll = this.onScroll.bind(this);
        this.onIntersection = this.onIntersection.bind(this);
        const observer= new IntersectionObserver(this.onIntersection);
        observer.observe(element)
        this.onScroll();
    }

    /**
     * 
     * @param {IntersectionObserverEntry[]} entries 
     
    onIntersection(entries) {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                document.addEventListener('scroll', this.onScroll);
            } else {
                document.removeEventListener('scroll', this.onScroll);
            }
        }
    }

    onScroll () {
        console.log(this.element.getAttribute('class'));
        const screenY = window.scrollY + window.innerHeight / 2;
        const elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
        const diffY = elementY - screenY;
        this.element.style.setProperty('transform', `translateY(${diffY * -1 * this.ratio}px)`);
    }

    /**
     * 
     * @returns {parallax[]}
     

    static bind() {
        return Array.from(document.querySelectorAll('[data-parallax]')).map((element) => {
            return new parallax(element)
        })
    }
}

parallax.bind();

fin de data parallax 

*/


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
let timer = setInterval(onTick, 50);

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

