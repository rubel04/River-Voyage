import Adventures from "./Adventures";
import Hero from "./Hero";
import News from "./News";
import Review from "./Review";

function Home() {
  return (
    <>
      <Hero></Hero>
      <section>
        <Adventures></Adventures>
      </section>
      <section className="w-10/12 mx-auto">
        <News></News>
      </section>
      <section>
        <Review></Review>
      </section>
    </>
  );
}

export default Home;
