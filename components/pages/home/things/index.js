import React from 'react';

const Things = () => {
  return (
    <div className="bg-[#1a2451] flex flex-col">
      <div className="mt-24">
        <h1 className="text-4xl font-[martel] font-bold text-white text-center ">
          Müvekkillerimizin Düşünceleri
        </h1>

        <div className="mx-4">
          <p className="flex justify-around text-base text-white text-center mt-12 font-[montserrat] font-light max-w-[600px] mx-auto">
            Müvekkillerimiz için gerçek değeri yaratmak, geliştirmek ve korumak
            için neyin gerekli olduğunu biliyoruz.
          </p>
        </div>
      </div>

      <div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-2 pb-2 m-10 space-y-3 lg:space-y-0 max-w-[800px] mx-auto ">
          <div className="p-4 text-gray-800 shadow-md bg-white border-solid border-2 border-[#Ffbd4a] rounded-md  mx-4 lg:mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
            <div className="mb-4 ">
              <p className="mb-2 text-center text-[#1a2451] ">
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique sapiente iusto esse.Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Similique sapiente iusto esse. "
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg"
                    alt="img"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 className="font-bold text-[#FFB742]">John Doe</h5>
                <p className="text-sm text-[#1a2451]">CEO / Founder</p>
              </div>
            </div>
          </div>

          <div className="p-4 text-gray-800 bg-[#1a2451] border-solid border-2 border-[#Ffbd4a] rounded-md shadow-md mx-4 lg:mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
            <div className="mb-4">
              <p className="mb-2 text-center text-[#ffffff] ">
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique sapiente iusto esse.Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Similique sapiente iusto esse. "
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                    alt="img"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 className="font-bold text-[#Ffbd4a]">michael james</h5>
                <p className="text-sm text-[#ffffff]">web developer</p>
              </div>
            </div>
          </div>

          <div className="p-4 text-gray-800 border-solid border-2 border-[#Ffbd4a] rounded-md shadow-md bg-white mx-4 lg:mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
            <div className="mb-4">
              <p className="mb-2 text-center text-[#1a2451] ">
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique sapiente iusto esse.Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Similique sapiente iusto esse. "
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                    alt="img"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 className="font-bold text-[#Ffbd4a]">Camilla Mendes</h5>
                <p className="text-sm text-[#1a2451]">Web Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Things;
