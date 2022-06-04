import React from 'react';
import NextLink from 'next/link';

const Contact = () => {
  return (
    <div id="contact" className="my-5 p-4">
      <div>
        <h1 className="text-4xl font-[martel] my-14 font-bold text-white text-center ">
          İletişim
        </h1>
      </div>

      <div className="block lg:flex">
        <div className="flex justify-center items-center m-4  min-w-[300px] max-w-[500px] mx-auto">
          <div className="text-white">
            <h1 className=" justify-start font-bold text-3xl my-2">
              ANTALYA OFİSİ
            </h1>
            <br />
            <div>
              <h2 className="font-bold text-[#ffbd4a] text-lg">
                Bize Danışmak için:
              </h2>
            </div>
            <div className="my-5">
              <h3 className="font-bold text-[#ffbd4a] text-lg">
                Telefon:
                <br />
              </h3>
              <NextLink href="tel:+90 542 337 65 51">
                <a>0 542 337 65 51</a>
              </NextLink>
            </div>
            <div className="my-5">
              <h3 className="font-bold text-[#ffbd4a] text-lg">Adres:</h3>
              <address>
                Deniz Mah. Konyaaltı Cad. Karabarut Apt, D:No:15/4, 07050
                Muratpaşa/Antalya
              </address>
            </div>
            <div className="my-5">
              <h3 className="font-bold text-[#ffbd4a] text-lg">E-posta</h3>
              <NextLink href="mailto:bunyaminkosesoy@gmail.com">
                <a>bunyaminkosesoy@gmail.com</a>
              </NextLink>
            </div>
            <h3 className="font-bold text-[#ffbd4a] text-lg">
              Çalışma Saatleri
            </h3>
            <p>
              Pazartesi-Cuma: 08:30 - 18:00 <br />
              Cumartesi: 10:00 - 14:00
            </p>
          </div>
        </div>

        <div className="m-5 my-8 flex  lg:max-h-[400px] lg:max-w-[500px] mx-auto justify-center items-center justify-items-center">
          <iframe
            className="m-2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.2102669110945!2d30.695136899999994!3d36.885317799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x98bd231fa2e32bd8!2zS8O2c2Vzb3kgSHVrdWsgdmUgRGFuxLHFn21hbmzEsWsgQsO8cm9zdQ!5e0!3m2!1str!2str!4v1653433565599!5m2!1str!2str"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
