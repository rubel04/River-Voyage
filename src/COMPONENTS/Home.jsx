import Adventures from "./Adventures";
import Hero from "./Hero";
import News from "./News";

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
    </>
  );
}

export default Home;
