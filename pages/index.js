const Home = () => (
  <div className="">
    <section className="h-screen">
      <title>JARDINS</title>
      <link rel="icon" href="/favicon.ico" />
      <img
        src="/inovador.svg"
        className="fixed w-screen absolute bg-cover"
      />
      <div className="absolute flex flex-row justify-between w-full">
        <div className="w-40">
          <img src="/logo.svg" />
        </div>
        <div className="pt-5 pr-5">
          <ul className="right-0 flex flex-row text-xl text-center text-white w-full space-x-3 text-center place-items-center">
            <li href="#" className="bg-green-900 rounded-full p-5">
              <a className="">INÍCIO</a>
            </li>
            <li href="#" className="bg-green-900 rounded-full p-5">
              <a className="">ESTRUTURA</a>
            </li>
            <li href="#" className="bg-green-900 rounded-full p-5">
              <a className="">LOCALIZAÇÃO</a>
            </li>
            <li href="#" className="bg-green-900 rounded-full p-5">
              <a className="">CONTATOS</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute text-5xl leading-loose tracking-widest text-white pt-72 left-8">
        <h1>INOVADOR,</h1>
        <h1>SURPRENDENTE</h1>
        <h1>E TECNOLÓGICO</h1>
      </div>
      <div className="absolute bottom-0 place-items-center">
        <div className="flex flex-row leading-loose tracking-widest text-white
        bg-green-900 divide-x divide-gray divide-opacity-25 rounded-xl space-x-5 text-base text-center">
          <p className="">SEDE EMPRESARIAL</p>
          <p className="">ALTA RENTABILIDADEL</p>
          <p className="">VALORIZAÇÃO IMOBILIÁRIA</p>
          <p className="">CONTRATOS ESTICADOS</p>
        </div>
      </div>
    </section>

    <section className="absolute flex flex-row w-full h-screen px-10 h-screen bg-gradient-to-r from-gray-100 to-gray-200 items-center">
      <div className="px-10">
        <img src="/circulo.svg" className="" />
      </div>
      <div className="">
        <h2 className="text-5xl leading-relaxed tracking-widest text-justify text-black">
          UM NOVO PADRÃO DE ATENDIMENTO MÉDICO
        </h2>
        <p className="text-2xl text-justify break-words mt-14">
          O Jardins Medical traz um novo conceito de excelência, com espaços
          amplos de atendimento, localização privilegiada E arquitetura
          inovadora, Contará com profissionais que são referência em suas áreas.
          todo projeto busca o melhor resultado para o paciente, e também para o
          profissional de saúde. Estarão disponíveis para venda salas para uso
          exclusivo da área de saúde.
        </p>
      </div>
    </section>
  </div>
);

export default Home;
