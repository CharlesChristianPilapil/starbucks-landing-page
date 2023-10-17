const accordion = document.querySelectorAll('.accordion');
const panel = document.querySelectorAll('.panel');
const arrow = document.querySelectorAll('.spin');

const hamburger = document.querySelector('.hamburger');
const navToggle = document.querySelector('.navtoggle');
const navlist = document.querySelector('.navlist');



const toggle = () => {

    if(navToggle.classList.contains('toggle')) {
        openToggle();
    }

    else {
        closeToggle();
    }
};

const openToggle = () => {
    document.getElementById('burger').style.display = 'none';
    document.getElementById('close').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
        // document.querySelector('.overlay').style.display = 'block';

}

const closeToggle = () => {
    document.getElementById('close').style.display = 'none';
    document.getElementById('burger').style.display = 'block';
    document.querySelector('body').style.overflow = '';
    // document.querySelector('.overlay').style.display = 'none'

    setTimeout(() => {
        navToggle.classList.remove('block')
    }, 400);
}

hamburger.addEventListener('click', () => {

    navToggle.classList.add('block');

    setTimeout(() => {
        navToggle.classList.toggle('toggle');
        toggle();
    }, 0);
});

document.onclick = (e) => {

    if (e.target === navToggle && e.target !== hamburger) {
        if (navToggle.classList.contains('toggle') && navToggle.classList.contains('block')) {

            navToggle.classList.toggle('toggle')
            closeToggle();
        }
    }


    // if(e.target !== navToggle && e.target !== hamburger) {
    //     // if(!navToggle.classList.contains('toggle')) {
    //     //     // navToggle.classList.remove('block');
    //     //     console.log(`check`);
    //     // }
    // }

    // else {
    //     navToggle.classList.toggle('toggle')
    //     closeToggle();
    // }


}




// console.log(accordion);


// for (let i = 0; i < accordion.length; i++) {
//     accordion[i].onclick = () => {
//         panel[i].classList.toggle('show');
//         arrow[i].classList.toggle('active');
//     }
// }


accordion.forEach((value, index) => {
    value.addEventListener('click', () => {

        // // only one open accordion
        // if (panel[index].classList.contains('show')) {
        //     panel[index].classList.remove('show');
        //     arrow[index].classList.remove('active');
        // }

        // else {
        //     panel.forEach((tab, i) => {
        //         tab.classList.remove('show');
        //         arrow[i].classList.remove('active');
        //     });

        //     panel[index].classList.toggle('show');
        //     arrow[index].classList.toggle('active');
        // }

        panel[index].classList.toggle('show');
        arrow[index].classList.toggle('active');
        
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animation')
        }

        else {
            entry.target.classList.remove('animation')
        }
    })
});

const lazyLoad = document.querySelectorAll('.lazyLoad');
lazyLoad.forEach((el) => {
    observer.observe(el);
});

const leftToRight = document.querySelectorAll('.leftToRight');
leftToRight.forEach((el) => {
    console.log(`check`);
    observer.observe(el);
});

const rToLeft = document.querySelectorAll('.rToLeft');
rToLeft.forEach((el) => {
    observer.observe(el);
});