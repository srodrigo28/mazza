'use client'

export default function Home() {
  return (
    <div className="flex gap-5 justify-center w-screen mx-auto h-screen max-w-[1366px]">
      <div className="h-28 bg-slate-900 flex justify-between fixed top-0 z-10">
        <img src="images/Logo.png" alt="" data-aos="fade-left" />
        <ul data-aos="fade-down" className="md:flex hidden mt-5 ml-10 gap-5 items-center justify-center text-white text-2xl">
          <li className="nav-item">Camisetas</li>
          <li className="nav-item">Calças</li>
          <li className="nav-item">Bermudas</li>
          <li className="nav-item">Calçados</li>
          <li className="nav-item">Acessórios</li>
        </ul>
        {/** WHATS OK TELEFONE */}
        <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!"
          target="_blank">
          <button data-aos="fade-right" className="">
            <img src="zap.png" alt="" className="animate-pulse w-44" />
          </button>
        </a>

      </div>
      <div className="overflow-y-auto w-screen flex flex-wrap justify-center gap-5 lg:mt-32 mt-28" data-aos="fade-right">
        <img src="./modelos/mazza-1.jpg" alt="" className="item-book" data-aos="fade-up" />
        <img src="./modelos/mazza-2.jpg" alt="" className="item-book" data-aos="fade-up"/>
        <img src="./modelos/mazza-3.jpg" alt="" className="item-book" data-aos="fade-up"/>
        <img src="./modelos/mazza-4.jpg" alt="" className="item-book" data-aos="fade-up"/>
        <img src="./modelos/mazza-5.jpg" alt="" className="item-book" data-aos="fade-up"/>
        <img src="./modelos/mazza-6.jpg" alt="" className="item-book" data-aos="fade-up"/>

        <img src="./modelos/mazza (7).jpg" alt="" className="item-book" data-aos="fade-down"/>
        <img src="./modelos/mazza (8).jpg" alt="" className="item-book" data-aos="fade-down"/>
        <img src="./modelos/mazza (9).jpg" alt="" className="item-book" data-aos="fade-down"/>
        <img src="./modelos/mazza (10).jpg" alt="" className="item-book" data-aos="fade-down"/>
        <img src="./modelos/mazza (11).jpg" alt="" className="item-book" data-aos="fade-down"/>
        <img src="./modelos/mazza (12).jpg" alt="" className="item-book" data-aos="fade-down"/>

        <img src="./modelos/mazza (13).jpg" alt="" className="item-book" data-aos="fade-up"/>
        <img src="./modelos/mazza (14).jpg" alt="" className="item-book" data-aos="fade-up"/>
        <img src="./modelos/mazza (15).jpg" alt="" className="item-book" data-aos="fade-up"/>
        <img src="./modelos/mazza (16).jpg" alt="" className="item-book" data-aos="fade-up"/>
        <img src="./modelos/mazza (17).jpg" alt="" className="item-book" data-aos="fade-up"/>
        <img src="./modelos/mazza (18).jpg" alt="" className="item-book" data-aos="fade-up"/>

        <img src="./modelos/mazza (19).jpg" alt="" className="item-book" data-aos="fade-down"/>
        <img src="./modelos/mazza (20).jpg" alt="" className="item-book" data-aos="fade-down"/>
        <img src="./modelos/mazza (21).jpg" alt="" className="item-book" data-aos="fade-down"/>
        <img src="./modelos/mazza (22).jpg" alt="" className="item-book" data-aos="fade-down"/>
        <img src="./modelos/mazza (23).jpg" alt="" className="item-book" data-aos="fade-down"/>
        <img src="./modelos/mazza (24).jpg" alt="" className="item-book" data-aos="fade-down"/>

        <img src="./modelos/mazza (25).jpg" alt="" className="item-book" />
        <img src="./modelos/mazza (26).jpg" alt="" className="item-book" />
        <img src="./modelos/mazza (27).jpg" alt="" className="item-book" />
        <img src="./modelos/mazza (28).jpg" alt="" className="item-book" />
        <img src="./modelos/mazza (29).jpg" alt="" className="item-book" />
        <img src="./modelos/mazza (30).jpg" alt="" className="item-book" />
        <img src="./modelos/mazza (31).jpg" alt="" className="item-book" />
        <img src="./modelos/mazza (32).jpg" alt="" className="item-book" />
        <img src="./modelos/mazza (33).jpg" alt="" className="item-book" />
        <img src="./modelos/mazza (34).jpg" alt="" className="item-book" />
        <img src="./modelos/mazza (35).jpg" alt="" className="item-book" />
        <img src="./modelos/mazza (36).jpg" alt="" className="item-book" />
        <img src="./modelos/mazza (37).jpg" alt="" className="item-book" />
        <img src="./modelos/mazza (38).jpg" alt="" className="item-book" />
        <img src="./modelos/mazza (39).jpg" alt="" className="item-book" />
      </div>
    </div>
  );
}
