import { FourSquare } from "react-loading-indicators";
function LoadingComponent() {
    return(
        <div style={{height:"75vh",width:"fit-content",justifyContent:"center",alignContent:"center"}} className="mx-auto"><FourSquare color="#3bc5f3" size="large"  /></div>
    )
}
export default LoadingComponent