
let count = 0;

console.log(window.innerWidth)
//page-top slider
document.querySelectorAll('.page-top__slide').forEach((e) => {
    count++;
})


if(!document.querySelector('.page-top__slider-count')){
    console.log('')
} else {
    document.querySelector('.page-top__slider-count').textContent = `/${count}`;
}

count = 0;


//categoty
for(itm2 of document.querySelectorAll('.category__item-btn')) {
    // itm2.parentElement.preventDefault();
    itm2.addEventListener('click' ,function(event) {
        if(this.classList.contains('active')){
            this.classList.remove('active')   
            this.parentElement.classList.remove('active');
        } else{
            for(el2 of document.querySelectorAll('.category__item-btn')) {
                el2.classList.remove('active');
                el2.parentElement.classList.remove('active')
            }
            this.parentElement.classList.add('active');
            this.classList.add('active');
        }
        event.stopPropagation();
        console.log(event.target);
        console.log(event.preventDefault())
    }); 
};


//catalog

for(acor of document.querySelectorAll('.catalog__acordion')) {
    acor.addEventListener('click', function() {
        if(this.classList.contains('active')){
            this.classList.remove('active')           
        } else{
            for(acor2 of document.querySelectorAll('.catalog__acordion')) {
                acor2.classList.remove('active');
            }
            this.classList.add('active');
        }
    });
};
document.querySelector('.header__catalog').addEventListener('click', function() {
    document.querySelector('.catalog').classList.toggle('active');
    document.querySelector('.header__catalog').classList.toggle('active')
})

for(itm of document.querySelectorAll('.page-catalog__acordion-one')) {
    itm.addEventListener('click', function() {
        if(this.classList.contains('active')){
            this.classList.remove('active')           
        } else{
            for(el of document.querySelectorAll('.page-catalog__acordion-one')) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    });
}
for(itm of document.querySelectorAll('.page-catalog__acordion-two')) {
    itm.addEventListener('click', function(event) {
        if(this.classList.contains('active')){
            this.classList.remove('active')           
        } else{
            for(el of document.querySelectorAll('.page-catalog__acordion-two')) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
        event.stopPropagation();
    });
}
//modal 

if(document.querySelector('.modal')){
    setTimeout(document.querySelector('.modal').classList.add('active'), 10000);
    document.querySelector('.modal__close').addEventListener('click', function() {
        document.querySelector('.modal').classList.remove('active')
    })
}

if(document.querySelector('.page-catalog__orientation-btn-block')){
    document.querySelector('.page-catalog__orientation-btn-block').addEventListener('click', function() {
        document.querySelector('.page-catalog__list').classList.add('block');
        document.querySelector('.page-catalog__orientation-btn-block').classList.add('active')
        if(document.querySelector('.page-catalog__list').classList.contains('line')){
            document.querySelector('.page-catalog__list').classList.remove('line')
            document.querySelector('.page-catalog__orientation-btn-line').classList.remove('active')
        } 
    })
}
if(document.querySelector('.page-catalog__orientation-btn-line')){
    document.querySelector('.page-catalog__orientation-btn-line').addEventListener('click', function() {
        document.querySelector('.page-catalog__list').classList.add('line');
        document.querySelector('.page-catalog__orientation-btn-line').classList.add('active')
        if(document.querySelector('.page-catalog__list').classList.contains('block')){
            document.querySelector('.page-catalog__list').classList.remove('block');
            document.querySelector('.page-catalog__orientation-btn-block').classList.remove('active');
        } 
    })
}


if(document.querySelector('.page-catalog__category-btn')){
    document.querySelector('.page-catalog__category-btn').addEventListener('click', function() {
        document.querySelector('.page-catalog__category-btn').classList.toggle('active')
        document.querySelector('.page-catalog__acordion-main').classList.toggle('active')
    });
}

if(document.querySelector('.page-catalog__characteristics')) {
    document.querySelector('.page-catalog__characteristics').addEventListener('click', function(){
        document.querySelector('.page-catalog__characteristics').classList.toggle('active');
        document.querySelector('.page-catalog__characteristics-right').classList.toggle('active');
        document.querySelector('.page-catalog__characteristics-body').classList.toggle('active')
    })
}

if(document.querySelector('.page-catalog__characteristics-btn-filter')){
    document.querySelectorAll('.page-catalog__characteristics-btn-filter').forEach((e) => {
        e.addEventListener('click', function() {
            e.classList.toggle('active')
        document.querySelector('.page-catalog__characteristics-amount').classList.remove('dis')

        });
    })
}
if(document.querySelector('.page-catalog__characteristics-acordion')){
    document.querySelectorAll('.page-catalog__characteristics-acordion-top').forEach((e) => {
        e.addEventListener('click', function () {
            e.parentNode.classList.toggle('active')
        })
    })
}

if(document.querySelector('.page-catalog__characteristics-reset')){
    document.querySelector('.page-catalog__characteristics-reset').addEventListener('click', function() {
        document.querySelector('.page-catalog__characteristics-amount').classList.add('dis')
        document.querySelectorAll('.page-catalog__characteristics-btn-filter').forEach((e)=> {
            e.classList.remove('active')
        });
    });
}

if(document.querySelector('.page-card__button-plus')) {
    let count = Number(document.querySelector('.page-card__count').textContent);

    document.querySelector('.page-card__button-plus').addEventListener('click', function(){
            document.querySelector('.page-card__count').textContent = ++count;
        if(count > 1) {
            document.querySelector('.page-card__button-minus').classList.remove('dis');
        }
    });
    document.querySelector('.page-card__button-minus').addEventListener('click', function() {
        if(count > 1){
            document.querySelector('.page-card__count').textContent = --count;
        }
        if(count === 1) {
            document.querySelector('.page-card__button-minus').classList.add('dis')
        }
        
    })
}

if(document.querySelector('.bascket-page__item-del')){
    document.querySelectorAll('.bascket-page__item-del').forEach((e) => {
       e.addEventListener('click', function() {
        e.parentNode.classList.add('dis')
       })
    })
}

if(document.querySelector('.bascket-page__btn')){
    let arrCount = [];
    let arrPlus = [];
    document.querySelectorAll('.page-card__count').forEach((e) => {
       arrCount.push(e);
    })
    document.querySelectorAll('.page-card__button-plus').forEach((a) => {
        arrPlus.push(a);
    })
    
}