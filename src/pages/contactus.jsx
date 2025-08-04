import { useEffect } from "react";
import ContactUs_form from "../components/contactUs_form";

import AOS from "aos";
import "aos/dist/aos.css";

function contactus() {

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  return (
    <>
      <div className="absolute h-full w-full bg-#fff">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="my-48">
        {/* Contact Form */}
        <section className="my-10 px-10 max-w-7xl mx-auto" data-aos="fade-up">
          <ContactUs_form/>
        </section>
        {/* Map Section */}
        <section className="my-10 px-6 mt-20">
          {/* <h2 className="text-2xl font-semibold text-center mb-6">Ubicación</h2> */}
          <div className="w-full h-64 max-w-4xl mx-auto justify-center flex flex-col gap-5">
            <iframe
              className="w-full h-full rounded shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1514.7461686550155!2d-97.53372289190573!3d25.861935792701182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866f939c341b717b%3A0x6938c700ff653bef!2sFraccionamiento%20Hacienda%20Quinta%20real!5e0!3m2!1ses-419!2smx!4v1749599637687!5m2!1ses-419!2smx"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-same-origin allow-scripts allow-popups"
            ></iframe>
            <div className="flex align-middle justify-center ">
              <p>
                <strong>Dirección:</strong> Hacienda Quinta Real, H. Matamoros,
                Tam. MX. CP 87345
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default contactus;
