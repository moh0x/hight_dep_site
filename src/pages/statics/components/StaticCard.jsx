import Counter from "./Counter"

function StaticCard(props) {
    return(
        <div className="box">
          {props.icon}
          <span className="number" data-goal="150"><Counter targetNumber={props.counter}/></span>
          <span className="text">{props.title}</span>
        </div>
    )
}
export default StaticCard