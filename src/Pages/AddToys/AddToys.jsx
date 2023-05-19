import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import './AddToys.css'
import { AuthContext } from "../../Provider/AuthProvider";
const AddToys = () => {
    const {user}=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) =>{
   fetch('http://localhost:5000/addtoy',{
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data)
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data)

})
    
  }
   

  return (
    <div>
      
      <h2 className="text-center text-3xl my-6 font-bold text-yellow-950">Add a game</h2>
      <div className="bg-img py-12 my-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.exampleRequired && <span>This field is required</span>}

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            className="input-color p-4 rounded-md"
            {...register("photo")}
            placeholder="photoURL"
            type="url"
            
          />

          <input
            className="input-color p-4 rounded-md"
            {...register("name")}
            placeholder="name"
            type="text"
          />
          <input
            className="input-color p-4 rounded-md"
            {...register("description")}
            placeholder="description"
            type="text"
            
          />
          <input
            className="input-color p-4 rounded-md"
            {...register("price", { required: true })}
            placeholder="price"
            type="number"
          />
          <input
            className="input-color p-4 rounded-md"
            {...register("rating", { required: true })}
            placeholder="rating(1-5)"
            type="number"
          />
          <input
            className="input-color p-4 rounded-md"
            {...register("quantity", { required: true })}
            placeholder="quantity"
            type="number"
          />
          <input
            className="input-color p-4 rounded-md"
            {...register("sellerName")}
            placeholder="seller name"
            value={user?.displayName}
          />
          <input
            className="input-color p-4 rounded-md"
              value={user?.email}
            {...register("sellersMail")}
            placeholder="email"
            type="email"
          />
          <select className="input-color p-4 rounded-md" {...register("subCategory")}>
            <option value="scrabble">Scrabble</option>
            <option value="puzzles">Puzzles</option>
            <option value="carcassonne">Carcassonne</option>
          </select>
        </div>
        <div>
        <input className="container mx-auto grid grid-cols-1 my-5 bg-yellow-900 btn btn-block text-amber-50 p-4 rounded-md" type="submit" />
        </div>
        
      </form>
    </div>
    </div>
  );
};

export default AddToys;
