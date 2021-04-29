import React from 'react'
import { useForm } from 'react-hook-form'

const UserAddForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        props.addUser(data);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <h2>Add user</h2>
            <label>Name</label>
            <input type="text" name="name" {...register('name', { required: true })} />
            <div>
                {errors.name && (
                    <span>
                        This field is required
                    </span>
                )}
            </div>
            <label>Username</label>
            <input type="text" name="username" {...register('username', { required: true })} />
            <div>
                {errors.username && (
                    <span>
                        This field is required
                    </span>
                )}
            </div>

            <button>Add new user</button>
        </form>
    )
}

export default UserAddForm