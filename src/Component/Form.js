import React from 'react'

const Form = () => {
    return (
        <>
            <div className="row g-3 w-75 border p-2 my-3">
                <h3 className='text-center '>Persons Details</h3>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Person name" aria-label="First name" />
                </div>
                <div className="col">
                    <input type="Number" className="form-control" placeholder="Mobile" aria-label="Last name" />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </div>

        </>
    )
}

export default Form