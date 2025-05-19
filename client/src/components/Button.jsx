

export const Button = ({text, func}) => {
  return (
    <button onClick={func}>
      {text}
    </button>
  )
}

