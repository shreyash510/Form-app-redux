import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addUser} from '../Redux/slice/userSlice'

const Form = () => {

    const dispatch = useDispatch();
    const [data, setData] = useState({});
 
    const inputEvent=(e)=>{
        const name= e.target.name;
        const value= e.target.value;

        setData((preV)=>{
            return {
                ...preV,
                [name] : value
            }
        })
    }

    const btnClick=(e)=>{
        e.preventDefault();
        dispatch(addUser(data))
        alert("Data Added Successfully")

        setData({
            name: '',
            mobile: ''
        })

    }
    return (
        <>
            <div className="container w-50 my-4 border p-5 rounded">
                <form className="row g-3">
                    <h1 className='text-center text-large'>User Information</h1>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Name</label>
                        <input type="email" value={data.name} className="form-control" onChange={inputEvent} name='name' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Mobile</label>
                        <input type="text" value={data.mobile} className="form-control" onChange={inputEvent} name='mobile' />
                    </div>

                    <div className="col-12 text-center" >
                        <button type="submit" onClick={btnClick} className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form