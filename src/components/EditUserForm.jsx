import React from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id
        props.updateUser(
            props.currentUser.id, 
            data
        )
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Edit user</h2>
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

            <button>Edit user</button>
        </form>
    )
}

export default EditUserForm