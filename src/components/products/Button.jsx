

const Button = ({ text }) => {
  return (
    <button style={{padding:"10px",border:"solid 2px red",fontSize:"30px"}} onClick={() => text("Button Clicked")}>
        Click
    </button>
  )
}
                         
export default Button