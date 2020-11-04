class Accordion {
    constructor() {
        this.$accordion = document.querySelector('[data-accordion=""]')
        this.$select = document.querySelectorAll('[data-accordionSelect=""]')
        this.$items = document.querySelectorAll('[data-accordionItem=""]')

        this.setup()
    }

    setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.generateId(this.$items)
        this.$accordion.addEventListener('click', this.clickHandler)
    }

    clickHandler(event) {
        const el = event.target.closest("li")
        if (this.$accordion) this.toggle(el)
    }

    isOpen(el) {
        return el.classList.contains('open')
    }

    toggle(el) {
        this.isOpen(el) ? this.close(el) : this.open(el)
    }

    open(el) {
        el.classList.add('open')
    }

    close(el) {
        el.classList.remove('open')
    }

    generateId(elements) {
        elements.forEach(el => {
            let id = Math.random().toString(36).substring(7) // generate uniq id for questions
            el.setAttribute('id', id)
        });
    }

}

new Accordion()
