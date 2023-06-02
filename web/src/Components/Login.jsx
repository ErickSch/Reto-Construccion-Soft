import {useState} from "react";
export default function Login({onLogIn}) {
    const [login, setLogin] = useState({username:"", password:""})
    const [validUser, setValidUser] = useState(true);
    async function handleLogIn(evt) {
        evt.preventDefault();
        const usuarioValido =  /^(?:[^\s@]+@ternium\.mx|[^@\s]+)$/;
        if (!usuarioValido.test(login.username)) {
            setValidUser(false);
            return;
        } else {
            setValidUser(true);
        }
        const url = "http://localhost:5006";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        });
        const data = await response.json();
        // const response_data = response.json();
        if (data.login === false) {
            console.log("credenciales invalidos")
        } else if (data.login === true) {
            onLogIn();
        }

    }
    function handleChange(evt) {
        setLogin(currData => {
            currData[evt.target.name] = evt.target.value;
            return {...currData}
        })
    }
    return (
        <div className="backgroundLogin">
            <div className="login">
                <form action="">
                    <h1>Login</h1>
                    <label htmlFor="username">Username:</label>
                    {!validUser && <p style={{color:"red"}}>Poner un usuario valido</p>}
                    <input type="text" id="username" name="username" value={login.username} onChange={handleChange} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={login.password} onChange={handleChange}/>
                    <button onClick={handleLogIn}>LogIn</button>
                </form>
                
                
            </div>
        </div>
    )
}