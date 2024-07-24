import Image from "next/image"

export default function About() {
    return (
        <main className="flex flex-col-reverse md:flex-row justify-center items-center md:h-[873px] overflow-hidden">
            <div data-aos="fade-right" className="h-1/2 md:h-full relative md:left-[-450px] md:mt-[285px] hidden md:block">
                <Image src='/teste1.png' width={735} height={100}/>   
            </div>
            <div data-aos="fade-right" className="w-full md:w-1/2 flex justify-center text-justify items-center flex-col relative md:left-[-350px] px-4 text-[20px] md:text-[35px] gap-y-10 pt-[150px] md:pt-0">
                <h1 className="text-shadow">Sou a Byanka Dias, <span className="text-[#7042ccff] text-shadow">especializada em modelagens personalizadas para Impressão 3D</span>. Busco constantemente inovação e tendências para garantir projetos únicos aos meus clientes.</h1>
                <h2 className="text-justify text-shadow">Com atenção aos detalhes, transformo ideias em realidade.</h2>
                <div className="flex gap-x-4 flex-wrap justify-center gap-y-2">
                    <div className="border-r-2 md:border-r-4 px-2 text-start">
                        <span className="text-[#7042ccff] md:text-[36px] text-shadow">1+</span>
                        <p className="text-[10px] md:text-[12px] text-shadow">ANO DE EXPERIÊNCIA</p>
                    </div>
                    <div className="border-r-2 md:border-r-4 pr-2 text-start">
                        <span className="text-[#7042ccff] md:text-[36px] text-shadow">500+</span>
                        <p className="text-[10px] md:text-[12px] text-shadow">CLIENTES SATISFEITOS</p>
                    </div>
                    <div className="border-r-2 md:border-r-4 pr-2 text-start">
                        <span className="text-[#7042ccff] md:text-[36px] text-shadow">500+</span>
                        <p className="text-[10px] md:text-[12px] text-shadow">PROJETOS FINALIZADOS</p>
                    </div>
                    <div>
                        <span className="text-[#7042ccff] md:text-[36px] text-shadow">300+</span>
                        <p className="text-[10px] md:text-[12px] text-start text-shadow">PESSOAS DENTRO DA COMUNIDADE NO WHATSAPP</p>
                    </div>
                </div>
            </div>    
        </main>
    )
}
