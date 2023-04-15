import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase.config";
import Loading from "../components/Loading";

function LogIn() {
  const navigate = useNavigate();
  /**Form states*/
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const [loading, setLoading] = useState(false);

  /**onChange function*/
  //we use prevStat because we are updating the state through more than one input, so to avoid onChange to override the state with new data whenever the function is called we use prevStat to save and only update the field whose the value changed
  const onChange = (e) => {
    setFormData((prevStat) => ({ ...prevStat, [e.target.id]: e.target.value }));
  };

  /*Sign in*/
  const signIn = async () => {
    //const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        setLoading(false);
        navigate("/admin");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Your Email or Password doesn't match");
    }
  };

  /**OnSubmit*/
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    signIn();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="w-full h-[75vh] mt-10 py-8 px-4">
        <h3 className="text-center mx-auto text-2xl font-semibold text-title-color">
          Sign In
        </h3>
        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-5 items-center max-w-[500px] w-full mx-auto py-5"
        >
          <div className="w-full flex flex-col space-y-2 justify-start">
            <label htmlFor="email">Email</label>
            <input
              className="input-style"
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="epi-gis@onspot.com"
              onChange={onChange}
              required
            />
          </div>
          <div className="w-full flex flex-col space-y-2 justify-start">
            <label htmlFor="password">Password</label>
            <input
              className="input-style"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <button
            className="w-[100px] text-sm border-blue bg-blue uppercase text-white font-medium py-2 px-2 shadow-md rounded-md transition duration-100 ease-in-out hover:bg-blue-500"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}

export default LogIn;
