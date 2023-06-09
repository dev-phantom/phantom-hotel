import { useRouteError } from "react-router-dom";
import Navbar from "../../common/Navbar";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#222]">
        <Navbar />
      </div>

      <div
        id="error-page"
        className="bg-[#222] flex-col min-h-screen text-white"
      >
        <h1 className="text-center pt-40 capitalize text-3xl md:text-5xl font-bold">
          <span className="text-primary"> Opps! </span> An Error Occured
        </h1>
        <h2 className="text-center pt-4 text-xl capitalize">
          <i>{error.statusText || error.message}</i>
        </h2>
        <div className="flex justify-center items-center mt-3">
          <button
            onClick={() => navigate("/")}
            className="bg-primary w-[12rem] h-[4rem] flex justify-center text-2xl items-center  rounded-[10px]"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
