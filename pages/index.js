import Head from 'next/head';


const Header = () => (
  <div className="absolute flex flex-row justify-between py-2 ">
    <img src="/logo.svg" />
    <ul className="flex flex-row p-16 text-xl text-center text-white lg:ml-96">
      <a href="#" className="h-14">
        <li className="py-3 mr-10 text-center bg-green-900 rounded-full w-44 h-14 lg:ml-96">
          INÍCIO
        </li>
      </a>
      <a href="#" className="h-14">
        <li className="py-3 mr-10 bg-green-900 rounded-full w-44 h-14">
          ESTRUTURA
        </li>
      </a>
      <a href="#" className="h-14">
        <li className="py-3 mr-10 bg-green-900 rounded-full w-44 h-14">
          LOCALIZAÇÃO
        </li>
      </a>
      <a href="#" className="h-14">
        <li className="py-3 bg-green-900 rounded-full w-44 h-14">
          CONTATOS
        </li>
      </a>
    </ul>
  </div>
  
)

const Back = () => (
  <div className="flex flex-grow">
    <img src="/inovador.svg" width="1000" className="min-w-full min-h-full"/>
  </div>
)

const H1 = () => (
  <div className="absolute px-48 text-6xl leading-loose tracking-widest text-white py-72">
    <h1>INOVADOR,</h1>
    <h1>SURPRENDENTE</h1>
    <h1>E TECNOLÓGICO</h1>
  </div>
)

const Container = () => (
  <div className="absolute top-0 grid w-5/6 h-32 grid-cols-4 px-5 py-8 -mt-20 leading-loose tracking-widest text-white bg-green-900 divide-x divide-green-500 divide-opacity-50 rounded-3xl left-48 ">
    <p className="px-20 text-2xl font-bold text-center">SEDE EMPRESARIAL</p>
    <p className="px-16 text-2xl font-bold text-center ">ALTA RENTABILIDADEL</p>
    <p className="px-16 text-2xl font-bold text-center">VALORIZAÇÃO IMOBILIÁRIA</p>
    <p className="px-16 text-2xl font-bold text-center">CONTRATOS ESTICADOS</p>
  </div>
)

const Circle = () => (
  <div className="ml-24 -mt-44">
    <img src="/circulo.svg" className=""/>
  </div>
)

const Verde = () => (
  <div className="absolute -top-full">
    <img src="/verde.svg" className=" right-96 mt-80 ml-96"/>
      <h1>Ola</h1>
  </div>
)

const Home = () => (
  <div className="flex flex-grow">
    <Head>
      <title>JARDINS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Back/>
    <Header />
    <H1/>
    <div className="absolute min-w-full mt-56 ">
      <main className="absolute w-full px-10 h-5/6 top-96 mt-96 py-96 bg-gradient-to-r from-gray-100 to-gray-200">
        <h2 className="text-5xl leading-relaxed tracking-widest text-justify text-black -mt-72 px-96 ml-96">UM NOVO PADRÃO DE ATENDIMENTO MÉDICO</h2>
        <p className="absolute float-right text-2xl text-justify break-words px-96 mt-14 ml-96">O Jardins Medical traz um novo conceito de excelência, com espaços amplos de atendimento, 
          localização privilegiada E arquitetura inovadora, 
          Contará com profissionais que são referência em suas áreas.
          todo projeto busca o melhor resultado para o paciente, e também para o profissional de saúde.  
          Estarão disponíveis para venda salas para uso exclusivo da área de saúde.</p>
        <Circle/>
        <Container/>  
      </main>
      <section>
       
      </section>
    </div>
  </div>
)

export default Home
