function Login(){
  return(
    <form>
      <div >
        <label>Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit/">Login</button>
    </form>
  )
}

export default Login;