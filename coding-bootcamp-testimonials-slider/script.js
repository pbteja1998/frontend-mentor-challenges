function toggleTestimonial() {
    const testimonialOne = document.getElementById('testimonial-1')
    const testimonialTwo = document.getElementById('testimonial-2')
    const testimonialOnePicture = document.getElementById('testimonial-1-picture')
    const testimonialTwoPicture = document.getElementById('testimonial-2-picture')
    if (testimonialOne.classList.contains('hidden')) {
        testimonialOne.classList.remove('hidden')
        testimonialOnePicture.classList.remove('hidden')
        testimonialTwo.classList.add('hidden')
        testimonialTwoPicture.classList.add('hidden')
    } else {
        testimonialOne.classList.add('hidden')
        testimonialOnePicture.classList.add('hidden')
        testimonialTwo.classList.remove('hidden')
        testimonialTwoPicture.classList.remove('hidden')
    }
}
