const d = document

const handler = (entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute('id')
    console.log(entry);
    if (entry.isIntersecting) {
      d.querySelector(`a[data-scroll-spy="${id}"]`).classList.add('is-active')
    } else {
      d.querySelector(`a[data-scroll-spy="${id}"]`).classList.remove(
        'is-active'
      )
    }
  })
}

export const scrollSpy = () => {
  const $sections = d.querySelectorAll('[data-scroll-spy]')
  const observer = new IntersectionObserver(handler, {
    //root
    rootMargin: '-250px',
    // threshold: [0.5, 0.75],
  })

  $sections.forEach((el) => observer.observe(el))
}
