import { useContext, useState } from "react";
import { authContext } from "../context/AuthContext/AuthContext";

const Login = () => {
  const { loginUserAction, userAuth } = useContext(authContext);
  //form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  //onChnage
  const onChangeInput = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //submit
  const onSubmitHandler = e => {
    e.preventDefault();

    //dispatch action
    loginUserAction(formData);
  };
  console.log(userAuth);
  return (
    <>
      <section className="py-24 md:py-32 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/08/30/07/56/clock-2696234_1280.jpg')", minHeight: "100vh",backgroundSize: "100% 100%" }}>

     
          <div className="max-w-sm mx-auto">
        <div className="container px-4 mx-auto shadow-md">
            <div className="mb-6 text-center ">
              <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                Sign in to your account
              </h3>
              <p>
                {userAuth?.error && (
                  <span className="text-red-500">{userAuth?.error}</span>
                )}
              </p>
            </div>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium text-xl"
                  htmlFor
                >
                  Email
                </label>
                <input
                  onChange={onChangeInput}
                  value={email}
                  name="email"
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lgshadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="email"
                  placeholder="mubashir@gmail.com"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-coolGray-800 font-medium text-xl"
                  htmlFor
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={onChangeInput}
                  name="password"
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lgshadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="password"
                  placeholder="************"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between mb-6">
                <div className="w-full md:w-1/2">
                  <label className="relative inline-flex items-center">
                    <input
                      className="form-checkbox appearance-none"
                      type="checkbox"
                    />
                  </label>
                </div>
              </div>
              <button
                className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                type="submit"
              >
                Sign In
              </button>
              <p className="text-center">
                <span className="text-l font-medium ">
                  Don’t have an account? <a  className="inline-block text-l font-medium text-green-500 hover:text-green-600 hover:underline" href="/register">Sign up</a>
                </span>
              </p>
            </form>
          </div>
          
        </div>
       
      </section>
    </>
  );
};

export default Login;
