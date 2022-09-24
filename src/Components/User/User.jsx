import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userAdded, userRemove, userUpdated } from '../../redux/user/actions';

const User = () => {

    // dispatch
    const dispatch = useDispatch();

    // use selector
    const { user } = useSelector(state => state.user);

//     const randomId = () => {
//         let count = '';
//         if(localStorage.getItem('users')){
//             count = JSON.parse(localStorage.getItem('users')).length;
//             const users = JSON.parse(localStorage.getItem('users'));
//             let index = users[count - 1].id;
//             return index + 1;
//             // console.log(count);
//             // return count ++;
//         }else{
//             return count = 1;
//         }
//     }
//   console.log(randomId());

    // form value maintain state
    
    const [input, setInput] = useState({
        name : '',
        email : '',
        photo : ''
    });
    // console.log(input);

    // form data handle
    const handlerFormValue = (e) => {

        setInput((prev) => ({
            ...prev,
            id : 1,
            [e.target.name] : e.target.value
        }));

    }

    // form submit to local storage
    const handleFormSubmit = (e) => {
        e.preventDefault();

       dispatch(userAdded(input));

       setInput({
        name : '', 
        email  : '',
        photo : ''
       });
    }


    /**
     *  handle view uesr 
     *  view states
     *  Modal show
     *  Modal hide
     */
    const [modalShow, setModalShow] = useState(false);
    const [viewUser, setViewUser] = useState({
        name : '',
        email : ""
    });

    const handleViewUser = (id) => {
        setModalShow(true);
        let users = JSON.parse(localStorage.getItem('users'))[id];
        setViewUser({
            name : users.name,
            email : users.email
        });
        // console.log(users[id]);
    }

    // modal hide
    const handleModalHide = () => {
        setModalShow(false);
        setModalEdit(false);
    }


    /**
     *  handle delete uesr 
     */
     const handleDeleteUser = (id) => {

        let users = JSON.parse(localStorage.getItem('users'));
        users.splice(id, 1);
        dispatch(userRemove(users));

     }

     

    /**
     *  user edit 
     */
     const [modalEdit, setModalEdit] = useState(false);
     const [editUser, setEditUser] = useState({
         name : '',
         email : "",
         photo : '',
         udpate_id : '' 
     });

    const handleEditUser = (id) => {
        // e.preventDefault();
        setModalEdit(true)

        let users = JSON.parse(localStorage.getItem('users'))[id];


        setEditUser((prev) => ({
            ...prev,
            name : users.name,
            email : users.email,
            photo : users.photo,
            update_id : id
        }));



    }

    /**
     *  user update
     */
    const handlerEditForm = (e) => {
        setEditUser((prev) => ({
            ...prev, 
            [e.target.name] : e.target.value
        }));
    }
    const handleFormUpdate = (e) => {
        e.preventDefault();

        let users = JSON.parse(localStorage.getItem('users'));
        users.splice(editUser.update_id, 1);
        users.push(editUser);

        setModalEdit(false)
        dispatch(userUpdated(users));
        
    }
         

     


  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-8 mt-5">
                <div className="table-responsive p-3 shadow">
                    <h3>Users List</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                user.map((value, key) => 
                                
                                    <tr>
                                        <td>{key + 1}</td>

                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>
                                            <img src={value.photo} alt="" width="60"/>
                                        </td>
                                        <td>
                                            <button onClick={ (e) => handleViewUser(key) } className='btn btn-info btn-sm'>View</button>

                                            <button onClick={ (e) => handleEditUser(key) }  className='btn btn-warning btn-sm'>Edit</button>

                                            <button onClick={ (e) => handleDeleteUser(key) }  className='btn btn-danger btn-sm'>Delete</button>
                                        </td>
                                    </tr>
                                
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-md-4 mt-5">
                <form className='shadow p-3' onSubmit={ handleFormSubmit }>
                    <h3> Add New User</h3>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" placeholder="Name" value={ input.name } name='name' onChange={ handlerFormValue } />
                        
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" placeholder="Enter email" value={ input.email } name='email' onChange={handlerFormValue  }/>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Photo</label>
                        <input type="text" className="form-control" placeholder="Photo Path" value={ input.photo } name='photo' onChange={ handlerFormValue }/>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>

        {/* User View Modal */}
        <Modal show={modalShow} onHide={handleModalHide}>
            <Modal.Header>
                <h3>User View</h3>
            </Modal.Header>
            <Modal.Body>
                <div className="card">
                    <div className="card-body">
                        <p>Name : <strong>{ viewUser.name }</strong> </p>
                        <p>Email : <strong>{ viewUser.email }</strong> </p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>


         {/* User edit Modal */}
         <Modal show={modalEdit} onHide={handleModalHide}>
            <Modal.Header>
                <h3>User Update</h3>
            </Modal.Header>
            <Modal.Body>
                <div className="card">
                    <div className="card-body">
                       <form className='shadow p-3' onSubmit={ handleFormUpdate }>
                    <h3> Add New User</h3>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" placeholder="Name" value={ editUser.name} name='name' onChange={ handlerEditForm } />
                        <input type="hidden" className="form-control" placeholder="Name" value={ editUser.update_id} name='update_id' />
                        
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" placeholder="Enter email" value={ editUser.email } name='email' onChange={ handlerEditForm  }/>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Photo</label>
                        <input type="text" className="form-control" placeholder="Photo Path" value={ editUser.photo } name='photo' onChange={ handlerEditForm }/>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>


    </div>
  )
}

export default User;