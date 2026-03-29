import {useForm} from 'react-hook-form'

function FormDemo(){
    const {
        register, //to register form feilds
        handleSubmit, //to handle submissions
        formState:{errors}, //to handle validations
    }=useForm()
    
    //form submit function
    const onFormSubmit = (obj)=>{
        console.log(obj);
    }

return(
    <div>
     <h1 className='text-center text-5xl'>Form Demo</h1>
     <form className='max-w-md mx-auto mt-10'
        onSubmit={handleSubmit(onFormSubmit)}>
            {/*username*/}
        <div className="mb-3">
           <label htmlFor="username">Username</label>
           <input type="text" 
           {...register("username",
            {
                required:"username required",
                validate:(v)=>v.trim().length!==0 || "white space not allowed" ,
                minLength:4,
                maxLength:10
            })} 
           id="username" 
           className="border w-full p-3"/>

        {/* username validation error msg*/}
        {errors.username?.type === "required" &&
        <p className='text-red-600'>username required</p>}
        {errors.username?.type === "minLength" &&
        <p className='text-red-600'>min length is 4.</p>}
        {errors.username?.type === "validate" &&
        <p className='text-red-600'>white space not allow</p>}

        </div>
        {/*email*/}
        <div
           className="mb-3">
           <label htmlFor="email">Email</label>
           <input type="email" 
           {...register("email")} 
           id="email" 
           className='border w-full p-3'/>
        </div>
       {/*button*/}
        <button type="submit" className='block mx-auto'>Submit</button>
     </form>
    </div>
)
};

export default FormDemo