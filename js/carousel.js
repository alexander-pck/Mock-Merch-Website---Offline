// const container = document.querySelector('.container');


//set starting position
var init_el = container.querySelector('.init');
const item_progresses = document.querySelectorAll(".item_progress")
const init = init_el == null ? items[0] : init_el
// container.scroll({left:getstartscroll(init)-container.clientWidth/2, block: 'center'})
setTimeout(() => {
container.scroll({left:getstartscroll(init)-container.clientWidth/2,behavior:"auto", block: 'center'})

},93)

init.classList.add("middle")


const arrowright = document.querySelector('.arrowright');
const arrowleft = document.querySelector('.arrowleft');

let datum_arrow;


function addmiddle(item) {
    arrowright.classList.remove('arrow_invis');
    arrowleft.classList.remove('arrow_invis');

    let itemidx = Array.from(items).indexOf(item);

    if (itemidx == 0) {arrowright.classList.add('arrow_invis');}
    if (itemidx == Array.from(items).length-1) {arrowleft.classList.add('arrow_invis');}

    item.classList.add('middle');
}

function progressevents(item) {
    let itemidx = Array.from(items).indexOf(item);
    item_progresses[itemidx].addEventListener("click",() => {container.scroll({left:getstartscroll(item)-container.clientWidth/2,behavior:"auto", block: 'center'})})
}


items.forEach(item => {
    progressevents(item)

    item.addEventListener('click', () => {
        container.scroll({left:getstartscroll(item)-container.clientWidth/2,behavior:"smooth", block: 'center'})
        addmiddle(item);
    });
    const imagediv1 = item.querySelector('.product');
    imagediv1.addEventListener("click",() => {

        if(item.classList.contains("middle")) {
            item.querySelector('.lookfurther').click();
        }
    })
});
function getstartscroll(item) {
    return item.offsetLeft + item.clientWidth / 2;
}

function handleScroll() {
    const containerCenterScroll = container.scrollLeft + container.clientWidth / 2;
    items.forEach(item => {
    const itemCenter = item.offsetLeft + item.clientWidth / 2;
    const distanceFromCenter = Math.abs(containerCenterScroll - itemCenter);

    if (distanceFromCenter <  item.clientWidth /2) {addmiddle(item);set_item_progress(item);
    } else {item.classList.remove('middle');}
    });

}
function set_item_progress(middle_item) {
    item_progresses.forEach(item => {item.classList.remove("selected_item_progress")})
    const idx_middleitem = Array.from(items).indexOf(middle_item);
    item_progresses[idx_middleitem].classList.add("selected_item_progress")
}


container.addEventListener('scroll',  handleScroll, false);

//

arrowright.addEventListener("click",() => {
    clearTimeout(datum_arrow);

    var middle = container.querySelector('.middle');
    let itemidx = Array.from(items).indexOf(middle);
    const toitem = items[itemidx-1]

    container.scroll({left:getstartscroll(toitem)-container.clientWidth/2,behavior:"smooth", block: 'center'})
    addmiddle(toitem) //redundant

})
arrowleft.addEventListener("click",() => {
    clearTimeout(datum_arrow);

    var middle = container.querySelector('.middle');
    let itemidx = Array.from(items).indexOf(middle);

    const toitem = items[itemidx+1]
    container.scroll({left:getstartscroll(toitem)-container.clientWidth/2,behavior:"smooth", block: 'center'})
    addmiddle(toitem) //redundant
    
})


function nextclick(leftorright) {
    datum_arrow = setTimeout(() => {

    leftorright ? arrowleft.click() : arrowright.click();
        nextclick(leftorright);
    }, 2000);
}

arrowleft.addEventListener("mouseover", () => {
    nextclick(true);
});

arrowleft.addEventListener("mouseout", () => {
    clearTimeout(datum_arrow);
});

arrowright.addEventListener("mouseover", () => {
    nextclick(false);
});

arrowright.addEventListener("mouseout", () => {
    clearTimeout(datum_arrow);
});
