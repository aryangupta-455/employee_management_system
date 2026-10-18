import './Login.css'


export default function Login() {

  const handleLogin = () => {

  } 
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card shadow-sm border-dark mt-5" id= "login_card">
              <div className="m-5">
                <h4 className="text-center">Log In</h4>
                <form action="" onSubmit={() => handleLogin()}>
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" value={username} placeholder="username"/>

                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" value={password} placeholder="username"/>

                  <button className="btn btn-primary m-0 mt-3" type="submit">Log In</button>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
