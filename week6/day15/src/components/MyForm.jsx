import {useForm} from 'react-hook-form'
import {useState} from 'react'

function MyForm(){
    const {
        register, //to register form fields
        handleSubmit, //to handle submissions
        formState:{errors}, //to handle validations
    }=useForm()

    const [users,setUsers] = useState([])

    //form submit function
    const onFormSubmit = (obj)=>{
        console.log(obj);
        setUsers([...users,obj])
    }

    return(
        <div>
        <div className='bg-amber-500'>
       <h1 className='text-center text-3xl'>create user form</h1>
       <form className='max-w-md mx-auto mt-10'
        onSubmit={handleSubmit(onFormSubmit)}>

       {/* firstname */}
       <div className='mb-3'>
       <label htmlFor="firstname">firstname</label>
       <input type="text" {...register("firstname",
       {required:"firstname required"}
       )} id="firstname" 
       className="border w-full p-3"/>
       {/* firstname requird error*/}
        {errors.firstname && 
        <p className='text-red-600'>{errors.firstname.message}</p>}
       </div>

       {/* email */}
       <div className='mb-3'>
       <label htmlFor="email">email</label>
       <input type="email" {...register("email",
       { required:"email required"}
       )} id="email" 
       className="border w-full p-3"/>
        {errors.email && 
        <p className='text-red-600'>{errors.email.message}</p>}
       </div>

       {/*dob*/}
       <div className='mb-3'>
       <label htmlFor="DoB">DoB</label>
       <input type="date" {...register("DoB",
       { required:"DoB required"}
       )} id="DoB" 
       className="border w-full p-3"/>
        {errors.DoB && 
        <p className='text-red-600'>{errors.DoB.message}</p>}
       </div>

       {/*Submit button*/}
       <button type="submit" className='block mx-auto bg-pink-300'>Submit</button>
       </form>
        </div>
              

    <div className="bg-red-400 flex justify-center items-start min-h-screen">
      <table className="table-auto border border-collapse mt-10">
      <thead>
      <tr>
        <th className="border px-2 py-1 text-center">firstname</th>
        <th className="border px-2 py-1 text-center">email</th>
        <th className="border px-2 py-1 text-center">dob</th>
      </tr>
      </thead>
      <tbody>
      {users.map((user, index) => (
        <tr key={index}>
          <td className="border px-2 py-1">{user.firstname}</td>
          <td className="border px-2 py-1">{user.email}</td>
          <td className="border px-2 py-1">{user.DoB}</td>
        </tr>
      ))}
      </tbody>
     </table>
    </div>
 </div>
    )
}

export default MyForm     