import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
 const dataUpdate = useLoaderData()
 console.log(dataUpdate)
 const {user}=useContext(AuthContext)
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
  


    const handleUpdate = (data) => {
     
      fetch(`http://localhost:5000/updateToy/${data._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
                Swal.fire("Updated!", "Your post has been Updated.", "success");

  }    
          })
          .catch((error) => {
           console.error('Error:', error);
          });
      };
    return (
        <div>

        <h4>Update Your Post</h4>
        <div className='w-96 my-16 container mx-auto'>
        <form onSubmit={handleSubmit(handleUpdate)}>
        {errors.exampleRequired && <span>This field is required</span>}

         <div className="grid grid-cols-1 gap-6">
             <input
            className="text-input hidden "
            {...register("_id")}
            value={dataUpdate?._id}
          />

          <input
            className="input-color p-4 rounded-md"
            {...register("description")}
            placeholder="description"
            type="text"
            defaultValue={dataUpdate?.description}
          />
          <input
            className="input-color p-4 rounded-md"
            {...register("price", { required: true })}
            placeholder="price"
            type="number"
            defaultValue={dataUpdate?.price}
          />
        
          <input
            className="input-color p-4 rounded-md"
            {...register("quantity", { required: true })}
            placeholder="quantity"
            type="number"
            defaultValue={dataUpdate?.quantity}
          />
    
        </div>
        <div>
        <input className="container mx-auto grid grid-cols-1 my-5 bg-yellow-900 btn btn-block text-amber-50 p-4 rounded-md" type="submit" />
        </div>
        
        <div>
           <Link  className="container mx-auto grid grid-cols-1 my-5 bg-yellow-900 btn btn-block text-amber-50 p-4 rounded-md"  to="/login/mytoys"> <button>Go Back</button></Link>
        </div>
        
      </form>
        </div>
        </div>
    );
};

export default UpdateToy;