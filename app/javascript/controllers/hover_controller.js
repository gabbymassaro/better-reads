import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["image"]

  connect() {
    console.log("Hover controller connected")
    console.log("Image target:", this.imageTarget)
  }

  hoverIn() {
    const hoverSrc = this.imageTarget.dataset.hoverHoverValue
    console.log("Hover src:", hoverSrc)
    if (hoverSrc) {
      this.imageTarget.src = hoverSrc
    }
  }

  hoverOut() {
    const defaultSrc = this.imageTarget.dataset.hoverDefaultValue
    console.log("Default src:", defaultSrc)
    if (defaultSrc) {
      this.imageTarget.src = defaultSrc
    }
  }
}
