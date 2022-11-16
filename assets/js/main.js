function scrollHeader(){
    const header = document.querySelector('.navbar')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-navbar'); else header.classList.remove('scroll-navbar')
}
window.addEventListener('scroll', scrollHeader)
//fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
	dragToClose: false,
  
	Toolbar: false,
	closeButton: "top",
  
	Image: {
	  zoom: false,
	},
  
	on: {
	  initCarousel: (fancybox) => {
		const slide = fancybox.Carousel.slides[fancybox.Carousel.page];
  
		fancybox.$container.style.setProperty(
		  "--bg-image",
		  `url("${slide.$thumb.src}")`
		);
	  },
	  "Carousel.change": (fancybox, carousel, to, from) => {
		const slide = carousel.slides[to];
  
		fancybox.$container.style.setProperty(
		  "--bg-image",
		  `url("${slide.$thumb.src}")`
		);
	  },
	},
  });
