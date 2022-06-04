import React from 'react';
import NextLink from 'next/link';

const Content = () => {
  return (
    <section className="text-[#c3c5cc] body-font bg-[#1a2451]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-white text-yellow-500 flex-shrink-0">
            <img src="/icons/cezahukuku.png" alt="" />
          </div>
          <div className="container flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-lg title-font font-medium mb-2 text-yellow-500">
              Şirketler ve Ticaret Hukuku
            </h2>
            <p className="leading-relaxed text-base">
              Yerli ve yabancı şirketlere, yatırımcılara ve kişilere şirket
              kuruluşu, birleşme ve devralma dahil Ticaret ve Şirketler Hukuku
              kapsamına giren tüm konularda rehberlik ediyoruz.
              <br />
              <br />
              <span className="text-white font-semibold">
                {' '}
                Kösesoy Hukuk ve Danışmanlık
              </span>{' '}
              olarak;{' '}
              <span className="readMoreText">
                {' '}
                şirket ve şube kuruluş işlemlerinin takibi, genel kurulların
                düzenlenmesi, şirket esas ve ortaklar arası şirket idare
                sözleşmelerinin hazırlanması, şirket birleştirme ve pay
                devirleri, genel kurul işlemleri, sermaye artırımı ve sermaye
                azaltılması işlemleri, karşılaşılan ticari uyuşmazlıkların
                çözümü, çek, senet, poliçe gibi kambiyo senetlerinden doğan
                alacak ve iptal davaları ile takiplerinin yürütülmesi ile
                ayrılma ve nevi değişiklikleri konularında hizmet veriyoruz.
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-[#Ffbd4a] text-lg title-font font-medium mb-2">
              Miras Hukuku
            </h2>
            <p className="leading-relaxed text-base">
              Müvekkillerimizin miras hukuku alanına giren haklarının korunması
              için özen ve titizlikle danışmanlık ve dava hizmetleri
              vermekteyiz.
              <br />
              <br />
              <span className="text-white font-semibold">
                {' '}
                Kösesoy Hukuk ve Danışmanlık
              </span>{' '}
              olarak;{' '}
              <span className="readMoreText">
                kişinin ölümü ya da gaipliğine karar verilmesi halinde malların
                nasıl paylaşılacağı, ölüme bağlı tasarrufların düzenlenmesi,
                mirasın geçişi ve geçiş şekli, saklı paya ilişkin haklar
                konusunda danışmanlık yaparken vasiyetname hazırlanması, veraset
                ilamı alınması, vasiyetnamenin iptali, tenkis davası açılması,
                mirastan feragat sözleşmesi hazırlanması, mirasın reddi davası
                açılması, muris muvazaası davaları açılması, saklı pay ihlali
                nedeni ile açılacak davalar, terekenin tespiti davaları hakkında
                miras hukuku avukatı desteği sunuyoruz.
              </span>
            </p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-white text-yellow-500 flex-shrink-0">
            <img src="/icons/familylaw.png" alt="" />
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-white text-yellow-500 flex-shrink-0">
            <img src="/icons/businesslaw.png" alt="" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-[#Ffbd4a] text-lg title-font font-medium mb-2">
              Aile Hukuku
            </h2>
            <p className="leading-relaxed text-base">
              Aile ve Boşanma Hukuku alanında eşler arası uyuşmazlık
              durumlarında ve dava süreçlerinde etkin ve hızlı çözüm
              sunmaktayız.
              <br />
              <br />
              <span className="text-white font-semibold">
                {' '}
                Kösesoy Hukuk ve Danışmanlık
              </span>{' '}
              olarak; nişanlanma, nişanın bozulması, evlenme, anlaşmalı ve
              çekişmeli boşanma, nafaka yükümlülükleri, velayet, eşler
              arasındaki mal rejimleri, hısımlık, soy bağı, evlat edinme, çocuk
              malları, aile malları ile vesayet gibi konularda aile hukukundan
              doğan uyuşmazlıkların mahkemede çözülmesinde danışmanlık ve dava
              takibi hizmeti sunuyoruz.
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-[#Ffbd4a] text-lg title-font font-medium mb-2">
              Sağlık Hukuku
            </h2>
            <p className="leading-relaxed text-base">
              Sağlık Hukuku alanında, deneyimlerimiz ve alanında uzman
              avukatlarımız ile tedavi ve estetik amaçlı yapılan sağlık
              uygulamalarında oluşan hak kayıplarınızın talep edilmesinde
              danışmanlık hizmeti sunmaktayız. <br />
              <br />
              <span className="text-white font-semibold">
                {' '}
                Kösesoy Hukuk ve Danışmanlık
              </span>{' '}
              olarak; sağlık hukuku alanında sağlık personelinin tıbbi
              hatalarından doğacak sorumluluk, hasta ve hekim hakları, özel
              sağlık kuruluşları yönetimi ile sağlık kuruluşları ve
              çalışanlarına yönelik kurumsal ve mesleki sorumluluk sigortaları,
              klinik araştırma sözleşmeleri, tıbbi cihaz sözleşmeleri, bilişim
              sözleşmeleri, Özel Hastaneler Yönetmeliği kapsamında ruhsat devir
              sözleşmelerinin hazırlanması ve müzakeresinin yanı sıra Sosyal
              Güvenlik Kurumu ile olan ihtilaflara ilişkin danışmanlık ve dava
              takibi süreçlerinde aktif olarak yer almaktadır.
            </p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-white text-yellow-500 flex-shrink-0">
            <img src="/icons/gayrimenkul.png" alt="" />
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-white text-yellow-500 flex-shrink-0">
            <img src="/icons/familylaw.png" alt="" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-[#Ffbd4a] text-lg title-font font-medium mb-2">
              İcra Hukuku
            </h2>
            <p className="leading-relaxed text-base">
              İcra ve İflas Hukuku alanında uzman avukatlarımızla ticari
              işlemlerden doğan borç ve alacakların tahsili ile icra ve iflas
              süreçlerinin yürütülmesinde, icra mahkemeleri ve genel
              mahkemelerde deneyimli avukatlarımız ile danışmanlık yapıyoruz.{' '}
              <br />
              <br />
              <span className="text-white font-semibold">
                {' '}
                Kösesoy Hukuk ve Danışmanlık
              </span>{' '}
              olarak; icra ve iflas takibinin başlatılması, takip neticesinde
              tahsilatın yapılması için işlemlerin gerçekleştirilmesi, itirazın
              iptali davaları, menfi tespit davalarının takibi, iflas verilmesi,
              iflas erteleme ve yeniden yapılandırma işlemleri, konkordato
              ilanı, borçtan kurtulma ve ödenen paranın geri alınması davaları,
              iflas etmiş ya da etmek üzere olan şirketlere dair birleşme ve
              satın alma konularında müvekkillerimize icra iflas avukatı desteği
              sunuyoruz.
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-[#Ffbd4a] text-lg title-font font-medium mb-2">
              Sigorta Hukuku
            </h2>
            <p className="leading-relaxed text-base">
              Sigorta sözleşmeleri dahilinde meydana gelen itilaflar için
              alanında uzman sigorta hukuku avukatı kadromuzla maddi ve manevi
              zararların tazmini ile danışmanlık hizmetleri veriyoruz.
              <br />
              <br />
              <span className="text-white font-semibold">
                {' '}
                Kösesoy Hukuk ve Danışmanlık
              </span>{' '}
              olarak; sigorta sözleşmelerinin hazırlanması, feshi, kısmi fesih
              veya cayma işlemleri, kara, hava ve deniz yük ve kargo
              taşımacılığında oluşan kazalardan doğan tazminat davalarının
              takibi, sağlık, emeklilik, hayat sigortası sözleşmelerinden
              kaynaklanan uyuşmazlıkların çözümü, sigorta ettirenlerin sigorta
              şirketlerinden alacaklarının takibi ve tahsili işlemlerini,
              Sigorta Tahkim Komisyonu&apos;na yapılacak olan başvuru
              işlemlerini gerçekleştirmekteyiz.
            </p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-white text-yellow-500 flex-shrink-0">
            <img src="/icons/sigortahukuku.png" alt="" />
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-white text-yellow-500 flex-shrink-0">
            <img src="/icons/gayrimenkul.png" alt="" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-[#Ffbd4a] text-lg title-font font-medium mb-2">
              Gayrimenkul Hukuku
            </h2>
            <p className="leading-relaxed text-base">
              Uzman avukatlarımızla beraber arsa, inşaat, bina, apartman gibi
              taşınmazlar hakkındaki uyuşmazlıklarınızda danışmanlık hizmeti
              vermekteyiz.
              <br />
              <br />
              <span className="text-white font-semibold">
                {' '}
                Kösesoy Hukuk ve Danışmanlık
              </span>{' '}
              olarak; emlak alım satımı ile kiralama, her türlü kira
              sözleşmelerinin hazırlanması, imar ve inşaat projelerinin mevzuata
              uygunluğunun denetimi, gerekli izin ve ruhsatların alınması, tapu
              ve imar davalarının yürütülmesi, yabancıların mülk edinmesi, ayni
              hak tesisi işlemleri konularında müvekkillerimize danışmanlık,
              gayrimenkul hukuku avukatı ve gayrimenkul davaları takibi desteği
              sunuyoruz.
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-[#Ffbd4a] text-lg title-font font-medium mb-2">
              Ceza Hukuku
            </h2>
            <p className="leading-relaxed text-base">
              Ceza Hukuku alanında uzman avukatlarımızla beraber ceza
              kanunlarınca doğmuş olan ihtilaf çözümleri sürecinde danışmanlık
              hizmeti vermekteyiz. <br />
              <br />
              <span className="text-white font-semibold">
                {' '}
                Kösesoy Hukuk ve Danışmanlık
              </span>
              ; başta Ağır Ceza Mahkemeleri olmak üzere, Sulh Ceza Hakimlikleri
              ve Asliye Ceza Mahkemeleri’nde görülmekte olan ceza davalarına ve
              savcılık soruşturmalarına ilişkin olarak, Türk Ceza Kanunu ile
              diğer özel kanunlar kapsamında yer alan tüm suçlar açısından
              mağdur avukatlığı veya şüpheli ve sanıklara müdafilik hizmeti
              vermektedir. Bu çerçevede soruşturma ve kovuşturma aşamalarında
              adil yargılanma hakkı ışığı altında en etkili ve başarılı neticeyi
              almak amacıyla müvekkillerimize hukuki destek sağlanmaktadır.
            </p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-white text-yellow-500 flex-shrink-0">
            <img src="/icons/cezahukuku.png" alt="" />
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col ">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-white text-yellow-500 flex-shrink-0">
            <img src="/icons/sigortahukuku.png" alt="" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-[#Ffbd4a] text-lg title-font font-medium mb-2">
              İş ve Sigorta Hukuku
            </h2>
            <p className="leading-relaxed text-base">
              İş ve Sosyal Güvenlik Hukuku alanında uzman avukatlarımızla
              beraber iş hukuku ihtilaf çözümleri sürecinde danışmanlık hizmeti
              vermekteyiz.
              <br />
              <br />
              <span className="text-white font-semibold">
                {' '}
                Kösesoy Hukuk ve Danışmanlık
              </span>{' '}
              olarak; uyulması gereken işe alım ve işten çıkarma prosedürleri,
              iş sözleşmelerinin ve iş yeri yönetmeliğinin hazırlanması ile
              fesih yönetimi konusunda uyuşmazlık öncesi danışmanlık hizmeti
              veriyor; davaya dönüşen hallerde ise işten çıkarma ve işe iade,
              kıdem ve ihbar tazminatı, haklı fesih, iş kazaları, iş yeri devri,
              işveren değişikliği, organizasyon değişiklikleri gibi iş hukuku ve
              sosyal güvenlik hukuku konularında müvekkillerimize danışmanlık ve
              dava takibi desteği sunuyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
