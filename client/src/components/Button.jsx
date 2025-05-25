export const Button = ({ text, func, className }) => {
  return (
    <button onClick={func} className={className}>
      {text}
    </button>
  )
}
