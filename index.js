class Accordion {
  constructor() {
    this.$accordion = document.querySelector('[data-accordion="accordion"]')
    this.$selects = document.querySelectorAll('[data-accordion="select"]')
    this.currentElement = null
    this.setup()
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this)
    this.generateId(this.$selects)
    if (this.$accordion)
      this.$accordion.addEventListener('click', this.clickHandler)
  }

  clickHandler(event) {
    //console.log('event.target', event.target)
    const {accordion} = event.target.dataset
    if (
        accordion === 'header' ||
        accordion === 'title' ||
        accordion === 'arrow'
    ) {
      const select = this.findParentBySelector(
          event.target,
          '[data-accordion="select"]'
      )
      const id = select.dataset.id
      this.select(id)
      if (this.currentElement) this.toggle(this.currentElement)
    }
    // console.log('accordion', accordion)
  }

  isOpen(el) {
    return el.classList.contains('open')
  }


  toggle(el) {
    this.isOpen(el) ? this.close(el) : this.open(el)
  }

  open(el) {
    el.classList.add('open')
    console.log('this.currentElement', this.currentElement)
    //this.$content.style.maxHeight = this.$content.scrollHeight + "px" // работает хорошо
    this.currentElement.querySelector(
        '[data-accordion="content"]'
    ).style.maxHeight =
        this.currentElement.querySelector('[data-accordion="content"]')
            .scrollHeight + 'px'
  }

  close(el) {
    el.classList.remove('open')
    // if (this.$content.style.maxHeight) this.$content.style.maxHeight = null
    if (
        this.currentElement.querySelector('[data-accordion="content"]').style
            .maxHeight
    )
      this.currentElement.querySelector(
          '[data-accordion="content"]'
      ).style.maxHeight = null
  }


  select(id) {
    const currentElement = this.$accordion.querySelector(`[data-id="${id}"]`)
    // console.log('currentElement', currentElement)
    this.currentElement = currentElement
  }

  currentAnchor(anchor) {
    if (this.$accordion) {
      const currentElement = this.$accordion.querySelector(
          `[data-anchor="${anchor}"]`
      )
      // console.log('currentElement', currentElement)
      this.currentElement = currentElement
    }
  }

  generateId(elements) {
    elements.forEach((el) => {
      let id = Math.random().toString(36).substring(7) // generate uniq id for questions
      el.dataset.id = id
    })
  }

  collectionHas(a, b) {
    //helper function (see below)
    for (let i = 0, len = a.length; i < len; i++) {
      if (a[i] == b) return true
    }
    return false
  }

  findParentBySelector(elm, selector) {
    const all = document.querySelectorAll(selector)
    let cur = elm
    while (cur && !this.collectionHas(all, cur)) {
      //keep going up until you find a match
      cur = cur.parentNode //go up
    }
    return cur //will return null if not found
  }
}

new Accordion()
