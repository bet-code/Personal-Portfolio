
portfolio = {}

portfolio.smoothScroll = () => {
    $('a').smoothScroll();
}

portfolio.form = () => {
    const contactForm = $('#contactForm');
    contactForm.attr('action', `https://formspree.io/code@gilbertjose.ca`)
}

portfolio.skillShow =  setInterval(() => {
    const randNum = Math.floor(Math.random() * $('.skillList li').length +1);
    let $skillShowItem = $('.skillList li').eq(randNum);    
        $skillShowItem.addClass('showIcon')     
        .siblings().removeClass('showIcon');
        $skillShowItem.find('i').addClass('iconColour')
        .parent().siblings().find('i').removeClass('iconColour');
}, 1500);

portfolio.init = () => {
    portfolio.smoothScroll();
    portfolio.form();
    portfolio.skillShow;
}

$(() => portfolio.init());