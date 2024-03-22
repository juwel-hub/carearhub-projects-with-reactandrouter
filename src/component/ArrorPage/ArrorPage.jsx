import { Link } from "react-router-dom";

const ArrorPage = () => {
  return (
    <div>
      <h1>oops!</h1>
      <h1>the page is not found</h1>
      <button className="border">
        <Link to="/"> go back to home</Link>
      </button>
    </div>
  );
};

export default ArrorPage;
