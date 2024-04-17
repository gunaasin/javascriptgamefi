
import { Mainbox } from "./Mainbox"
import { Topnav } from "./Topnav"


export const Maincom = (prop) => {
  return (
    <div className="Main-box">
      <Topnav title={prop.title} url={prop.url} />
      <Mainbox name={prop.name} steps={prop.steps} answer={prop.answer}  codesnip={prop.codesnip} game={prop.game}  />
    </div>
  )
}
