import BlobComponent from "./BlobComponent";
import HomeBanner from "./HomeBanner";
import HomeButtons from "./HomeButtons";

const Home = () => {
  return (
    <>
      <div className="lg:grid gap-2 lg:items-center lg:place-items-center min-h-[85vh]  lg:grid-cols-2 lg:text-left text-center flex flex-row justify-center items-center">
        <div className="">
          <HomeBanner />

          <HomeButtons />
        </div>

        <BlobComponent />
      </div>
    </>
  );
};
export default Home;
