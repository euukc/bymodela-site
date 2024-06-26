import Image from "next/image"

export default function About() {
    return (
        <main className="h-[500px] flex flex-col-reverse md:flex-row justify-center items-center">
            <div data-aos="fade-right" className="h-[50%] md:h-[100%] relative md:left-[-450px] md:mt-[272px] hidden md:block">
                <Image src='/teste1.png' width={735} height={100}/>   
            </div>
            <div data-aos="fade-right" className="w-full md:w-[50%] flex justify-center items-center md:items-center flex-col relative md:left-[-350px] md:p-0 px-4 text-[20px] md:text-[35px]  md:mt-[300px] text-justify gap-y-10 md:pt-0 pt-[150px] mb-[100px] md:mb-0">
                <h1>Sou a Byanka Dias, <span className="text-[#7042ccff]">especializada em modelagens personalizadas para Impressão 3D</span>. Busco constantemente inovação e tendências para garantir projetos únicos aos meus clientes.</h1>
                <h2 className="text-center">Com atenção aos detalhes, transformo ideias em realidade.</h2>
                <div className="flex gap-x-4 flex-wrap justify-center gap-y-2">
                    <div className="border-r-2 md:border-r-4 px-2 text-start">
                        <span className="text-[#7042ccff] md:text-[36px]">1+</span>
                        <p className="text-[10px] md:text-[12px]">ANO DE EXPERIÊNCIA</p>
                    </div>
                    <div className="border-r-2 md:border-r-4 pr-2 text-start">
                        <span className="text-[#7042ccff] md:text-[36px]">1000+</span>
                        <p className="text-[10px] md:text-[12px]">CLIENTES SATISFEITOS</p>
                    </div>
                    <div className="border-r-2 md:border-r-4 pr-2 text-start">
                        <span className="text-[#7042ccff] md:text-[36px]">500+</span>
                        <p className="text-[10px] md:text-[12px]">PROJETOS FINALIZADOS</p>
                    </div>
                    <div>
                        <span className="text-[#7042ccff] md:text-[36px]">300+</span>
                        <p className="text-[10px] md:text-[12px] text-start">PESSOAS DENTRO DA COMUNIDADE NO WHATSAPP</p>
                    </div>
                    
                </div>
            
            </div>    
            
        </main>
    )
}