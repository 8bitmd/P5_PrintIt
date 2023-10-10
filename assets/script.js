(() => {

	const SLIDES = [
		{
			"image": "slide1.jpg",
			"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image": "slide2.jpg",
			"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image": "slide3.jpg",
			"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image": "slide4.png",
			"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
		}
	]

	addEventListener("DOMContentLoaded", () => {
		const previousSlideTrigger = document.querySelector(".arrow_left")
		const nextSlideTrigger = document.querySelector(".arrow_right")

		let slideNumber = 0

		function updateSlide(slideNumber) {
			document.querySelectorAll(".dots > .dot")
				.forEach(element => {
					element.classList.remove("dot_selected")
				})

			document.querySelector(".dot" + slideNumber).classList.add("dot_selected")

			let currentSlideImg = SLIDES[slideNumber].image
			let currentSlideTagLine = SLIDES[slideNumber].tagLine

			document.querySelector(".banner-img").src = "./assets/images/slideshow/" + currentSlideImg
			document.querySelector("#banner p").innerHTML = currentSlideTagLine
		}

		/**
		 * @param next true if we clicked on the “next” arrow, false else
		 */
		function slideHandler(next) {
			if (next) {
				slideNumber = (slideNumber + 1) % SLIDES.length
			} else {
				slideNumber = (slideNumber - 1) % SLIDES.length
			}

			if (slideNumber < 0) slideNumber += SLIDES.length

			updateSlide(slideNumber)
		}

		previousSlideTrigger.addEventListener("click", () => slideHandler(false))
		nextSlideTrigger.addEventListener("click", () => slideHandler(true))

		let dotContainer = document.querySelector(".dots")

		for (let i = 0; i < SLIDES.length; i++) {
			let dot = document.createElement("button")
			dot.classList.add("dot", "dot" + i)
			dot.addEventListener("click", () => {
				slideNumber = i
				updateSlide(slideNumber)
			})
			dotContainer.appendChild(dot)
		}

		document.querySelector(".dot" + slideNumber).classList.add("dot_selected")
	})

})()
