export function emitEvent(name, data) {
  dispatchEvent(new CustomEvent(name, {
    detail: data,
  }))
}

export function listenEvent(name, cb) {
  window.addEventListener(name, cb)
}


export function destroyEvent(name, cb) {
  window.removeEventListener(name, cb)
}
