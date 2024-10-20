import { useNavigate } from "react-router-dom";

function SignUpSuccess() {
    const navigate= useNavigate()
  return (
    
    <>
      <div className="flex overflow-hidden flex-col  bg-white">
      

        <main className="flex flex-col items-center w-full text-black max-md:max-w-full">
        <h2 className="text-2xl font-bold pt-10">
        Uncover Deals, Unleash Excitement:{' '}
        <span className="text-blue-700">Dive into Our Auctions Today!</span>
      </h2>

          <div className="relative -top-20 flex flex-col self-center py-0.5 mt-5 max-w-full text-base font-semibold text-center text-white w-[1000px] scale-75">
           <img src="./src/assets/signupsuccess.png" alt="sign up success message"/>
           
          </div>
          <button className="relative -top-32 py-2 px-10 text-white rounded-sm" style={{background: "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)"}} onClick={()=> navigate("/login")}> Login Now </button>
        </main>
      </div>
    </>
  );
}
export default SignUpSuccess;
