export const Button = ({ text, func, className, children }) => {
  return (
    <button onClick={func} className={className}>
      {text}
      {children}
    </button>
  )
}
