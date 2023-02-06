import {forwardRef} from "react";

export const Input = forwardRef(({ type, name, placeholder, classes = "", onChange }, ref) => {
  const classList = `p-3 shadow-sm ${classes}`;

  return (
    <input ref={ref} type={type} name={name} placeholder={placeholder} className={classList} onChange={onChange}/>
  )
})