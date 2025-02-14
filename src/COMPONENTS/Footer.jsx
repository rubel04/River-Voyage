import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal p-10 mt-10 animate__animated animate__fadeInUp">
        <aside>
          <a className="text-2xl cursor-pointer font-bold text-purple-500 italic">
            <img className="w-30" src={logo} alt="logo" />
          </a>
        </aside>
        <nav>
          <h6 className="text-2xl text-white font-medium">Contact Us</h6>
          <a className="link link-hover text-gray-400">
            9300 SE 82nd Ave Orego, Happy <br /> Valley, United States
          </a>
          <a className="link link-hover text-gray-400">+88440-550-8763</a>
        </nav>
        <nav>
          <h6 className="text-2xl text-white font-medium">Quick Link</h6>
          <a className="link link-hover text-gray-400">Home</a>
          <a className="link link-hover text-gray-400">Adventures</a>
          <a className="link link-hover text-gray-400">Blogs</a>
        </nav>
        <nav>
          <h6 className="text-2xl text-white font-medium">Social Link</h6>
          <div className="flex gap-3 text-2xl">
            <a
              href="https://www.facebook.com/rubelislam04"
              className="text-purple-500 cursor-pointer"
            >
              <CiFacebook />
            </a>
            <a
              href="https://www.instagram.com/rubelislam04?igsh=NWE4cGpxdjc5NTVp"
              className="text-purple-500 cursor-pointer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/LearnerRubel?t=Z-_BSMIRJ-1s_oy5Gf7Fpw&s=09"
              className="text-purple-500 cursor-pointer"
            >
              <CiTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/rubel-islam-bbb2a5317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-purple-500 cursor-pointer"
            >
              <CiLinkedin />
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 text-gray-300">
        <aside>
          <p>
            © Copyright {new Date().getFullYear()} - All right reserved by
            RiverVoyage
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
