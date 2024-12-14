import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="flex flex-col h-[100svh] justify-between relative overflow-hidden">
      <Header />
      <Body />
      <Footer/>
    </div>
  );
};

export default Home;
