export const Button = ({ text, func, className, children, disabled }) => {
  return (
    <button onClick={func} className={className} disabled={disabled}>
      {text}
      {children}
    </button>
  )
}
