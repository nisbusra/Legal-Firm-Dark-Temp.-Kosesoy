import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-[#1a2451] flex flex-col lg:space-y-3">
      <div className="mt-20 mb-5">
        <h1 className="text-4xl font-[martel] font-bold text-[#fff] text-center mx-4">
          Hakkımızda
        </h1>

        <div className="mx-10">
          <p className="flex justify-around text-base text-[#fff] text-center my-8 font-[montserrat] font-light">
            Profesyonel çözümler için yanınızdayız.
          </p>
        </div>
        <div className=" container space-y-5 lg:space-y-0 block lg:flex lg:space-x-5 px-8 pb-14 max-w-[1100px] mx-auto">
          <div className="flex justify-center items-center">
            <span>
              <img
                className="lg:max-w-[500px] border-solid border-2 border-[#Ffbd4a] rounded-md shadow-md "
                src="/images/Kosesoyamblem.png"
                alt="Avukat"
              />
            </span>
          </div>

          <div className="text-[#fff] lg:mx-4 font-[martel] font-extralight text-sm lg:max-w-[500px] border-solid border-2 border-[#Ffbd4a] rounded-md shadow-md p-5 leading-10">
            <h2 className="text-justify">
              Antalya’da faaliyet gösteren Kösesoy Hukuk ve Danışmanlık Bürosu,
              Bünyamin Kösesoy tarafından kurulmuş olup yurtiçi-yurtdışında
              birçok kurum ve kişiye hukuki konularda danışmanlık ve avukatlık
              hizmeti vermektedir. Kişisel hizmet ve ekip çalışması felsefesi,
              müvekkillerimizin hukuki meselelerinin etkin bir şekilde çözümünü
              sağlar.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
