import React from 'react'

function Input ({ type = 'text', onChange, value, optionValue, ...props }) {
  let attrs
  if (type === 'checkbox') {
    attrs = { checked: value, onChange: e => onChange(e.target.checked) }
  } else {
    attrs = { value, onChange: e => onChange(e.target.value) }
  }

  return (
    <input type={type} {...props} {...attrs} />
  )
}

export default Input
