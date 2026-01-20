import {createElement} from 'react'

function Text({as, className, children}) {

  return createElement(as, {className: className}, children)
}

export default Text