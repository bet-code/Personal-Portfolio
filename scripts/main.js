
portfolio = {}

portfolio.form = () => {
    const contactForm = $('#contactForm');
    contactForm.attr('action', `https://formspree.io/code@gilbertjose.ca`)
}

portfolio.init = () => {
    portfolio.form();
}

$(() => portfolio.init());