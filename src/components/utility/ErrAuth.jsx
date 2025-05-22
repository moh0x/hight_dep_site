  function ErrAuth(props) {
    return(<>{props.clicked=== true && props.err ==true ? props.type =="login" ? <small className='alert alert-danger text-danger fw-bold mt-3'>user not exists</small>: <small className='alert alert-danger text-danger fw-bold mt-3'>some thing error</small>:<></>} </>)
}
export default ErrAuth