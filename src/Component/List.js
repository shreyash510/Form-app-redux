import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { delUser } from '../Redux/slice/userSlice';

const List = () => {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.Users);
    console.log(userData.data)
    // const [del, setDel] = useState([])

    // // useEffect(() => {
        
    // // }, [userData])

    const delUserDetails = (id) => {
        console.log(id)
        dispatch(delUser(id))
    }

    return (
        <>
            <div className="container text-center my-5">
                <table className='w-75'>
                    <tbody>
                        <tr>
                            <th>Sr. No</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Action</th>
                        </tr>
                        {
                            userData.data.map((v, i) => {
                                return <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{v.name}</td>
                                    <td>{v.mobile}</td>
                                    <td>
                                        <button onClick={() => delUserDetails(i)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default List