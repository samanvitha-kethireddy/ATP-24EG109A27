import {
  divider,
  errorClass,
  formCard,
  formGroup,
  formTitle,
  inputClass,
  labelClass,
  pageBackground,
  submitBtn,
  mutedText,
} from "../styles/common";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const onUserRegister = async (userObj) => {
    const formData = new FormData();

    formData.append("role", userObj.role);
    formData.append("firstName", userObj.firstName);
    formData.append("lastName", userObj.lastName);
    formData.append("email", userObj.email);
    formData.append("password", userObj.password);

    if (userObj.profileImageUrl?.[0]) {
      formData.append("profileImageUrl", userObj.profileImageUrl[0]);
    }

    try {
      setLoading(true);

      let res = await axios.post(
        "http://localhost:5000/common-api/users", 
        formData,
        { withCredentials: true }
      );

      if (res.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      console.log("err in registration", err);
      setApiError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${pageBackground} flex items-center justify-center py-16 px-4`}>
      <div className={formCard}>
        <h2 className={formTitle}>Create an Account</h2>

        {apiError && <p className={errorClass}>{apiError}</p>}

        <form onSubmit={handleSubmit(onUserRegister)}>
          <div className="mb-5">
            <p className={labelClass}>Register as</p>

            <div className="flex gap-6 mt-1">
              <label className="flex items-center gap-2">
                <input type="radio" value="USER" {...register("role", { required: true })} />
                User
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" value="AUTHOR" {...register("role", { required: true })} />
                Author
              </label>
            </div>
          </div>

          <div className={divider} />

          <div className="flex gap-4 mb-4">
            <input placeholder="First name" className={inputClass} {...register("firstName", { required: true })} />
            <input placeholder="Last name" className={inputClass} {...register("lastName")} />
          </div>

          <div className={formGroup}>
            <input type="email" placeholder="Email" className={inputClass} {...register("email", { required: true })} />
          </div>

          <div className={formGroup}>
            <input type="password" placeholder="Password" className={inputClass} {...register("password", { required: true })} />
          </div>

          <div className={formGroup}>
            <input
              type="file"
              className={inputClass}
              {...register("profileImageUrl")}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setPreview(URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
            {preview && <img src={preview} className="w-20 h-20 rounded-full mt-2" />}
          </div>

          <button type="submit" className={submitBtn}>
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className={`${mutedText} text-center mt-5`}>
          Already have an account?{" "}
          <NavLink to="/login">Login</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Register;