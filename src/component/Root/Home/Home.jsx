import Banner from "../../Banner/Banner";
import CategoryList from "../../CategotyList/CategoryList";
import FeaturesJobs from "../../AppliedJobs/FeaturesJobs/FeaturesJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeaturesJobs>0</FeaturesJobs>
      <h1>home</h1>
    </div>
  );
};

export default Home;
