import Layout from "../components/Layout";
import Image from "next/image";

export default function about() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Layout>
      <div className="myabout">
        <div className="aboutborder"></div>
        <h1 className="aboutheader">About This Project</h1>
        <p>
          We are here to give you the best picture of all time @
          <span>{year}</span>
        </p>
        <p>Version 1.0.0</p>
        <div className="text-center justify-center mx-auto">
          <h2 className="-mb-2  text-2xl font-bold mt-12">Maker</h2>
          <div className=" lg:inline-flex lg:w-3/6 mx-auto space-x-6 m-10">
            <Image
              src="/images/paulImage.jpg"
              className="sm:flex"
              width={200}
              height={400}
              alt="about-page"
            />

            <p className="text-center lg:w-4/5 sm-full">
              My name is <strong>Paul Ojo</strong>, the maker of Best-Pics
              web-app, am a to-be Senior Software-Engineer <br /> who believes
              so much in hardwork, discipline, pain, endurance and lot more.
              I've made this app to showcase my work and I hope you will love
              the whole amazing interface? <br /> Thanks for checking on my web
              app ❤❤❤
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
