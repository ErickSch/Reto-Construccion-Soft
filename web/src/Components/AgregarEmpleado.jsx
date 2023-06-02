import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';


export default function AgregarEmpleado() {
    const url = 'http://localhost:5000/postpeople';


    const [formValue, setformValue] = useState({

        Name:'',
        Age: '',
        City: ''
    })
    const [message, setMessage] = useState();

    const handleInput = (e) => {
        const {name, value} = e.target;
        setformValue({...formValue, [name]:value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const allInputValue = {
            Name:formValue.Name,
            Age: formValue.Age,
            City: formValue.City
        };
        
        let res = await fetch(url, {
            method: "POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(allInputValue)
        });
        let resjson = await res.json();

        if(res.status === 200){
            setMessage(resjson.success);
        }
        // console.log(allInputValue);
        // return <Redirect to='/Administracion'  />;
    }

    return (
        <div style={{marginLeft: '500px'}}>
            
            <div className="container">
                <div className=" col-5 card p-3 my-3">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label"><b>Nombre:</b>
                                <input type="text" name='Name' className="form-control" value={formValue.Name} onChange={handleInput}/>
                            </label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><b>Edad:</b>
                                <input type="number" name='Age' className="form-control" value={formValue.Age} onChange={handleInput}/>
                            </label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><b>Ciudad:</b>
                                <input type="text" name='City' className="form-control" value={formValue.City} onChange={handleInput}/>
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

