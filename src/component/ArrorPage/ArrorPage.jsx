import { Link } from "react-router-dom";

const ArrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-7xl mb-5">oops!</h1>
      <h1 className="text-5xl">the page is not found</h1>
      <button className="border mt-5 px-5 py-3 rounded-lg">
        <Link to="/"> go back to home</Link>
      </button>
    </div>
  );
};

export default ArrorPage;
