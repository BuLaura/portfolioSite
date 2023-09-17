window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let maxScroll = 700;
    document.getElementsByClassName("pageTop")[0].style.opacity = ((maxScroll - scrollY)/maxScroll)/.84;
})