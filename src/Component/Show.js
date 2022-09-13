import React from 'react'

const Show = () => {
  return (
    <>
        <div className="container">
            <table className=' w-75 text-center rounded my-3'>
                <tbody>
                    <tr className='p-3'>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>

                    <tr className='p-3'>
                        <td>Shreyash</td>
                        <td>102893410823</td>
                        <td>
                            <button className='rounded'>Delete </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Show