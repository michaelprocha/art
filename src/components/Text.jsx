import {createElement} from 'react'

function Text({as, className, rest, children}) {

  return createElement(as, {className: className, ...rest}, children)
}

export default Text