import Adventures from "./Adventures";
import Footer from "./Footer";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <Hero></Hero>
      <section>
        <Adventures></Adventures>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default Home;
