function User({name,email,image}){

    return(
     <div className="border p-4 rounded-2xl shadow-xl shadow-gray-700">
      <img src={image} alt={name} className="w-20 h-20 rounded-full mx-auto" />
      <h3 className="text-center mt-2">{name}</h3>
      <h4 className="text-center mt-2">{email}</h4>
      <button className="mt-2 px-4 py-1 bg-gray-500 text-white rounded mx-auto block">
        Profile
      </button>
      </div>
    )
}

export default User;