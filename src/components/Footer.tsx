
export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center"
          >
            <img src="/logo.svg" alt="Froener e Bulhões Advocacia" className="h-8 w-8 mr-2" />
            Froener e Bulhões
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Escritório especializado em Direito Trabalhista e Cível, 
            oferecendo soluções jurídicas personalizadas com excelência.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Serviços</h3>
          <div>
            <a
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              Direito Trabalhista
            </a>
          </div>

          <div>
            <a
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              Direito Civil
            </a>
          </div>

          <div>
            <a
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              Contratos
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contato</h3>
          <div>
            <a
              href="https://wa.me/+5567991147535"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              WhatsApp
            </a>
          </div>

          <div>
            <a
              href="mailto:adonis@froeneradvocacia.com"
              className="opacity-60 hover:opacity-100"
            >
              adonis@froeneradvocacia.com
            </a>
          </div>

          <div>
            <p className="opacity-60 text-sm">
              (67) 99114-7535
            </p>
          </div>

          <div>
            <p className="opacity-60 text-sm">
              Campo Grande, MS
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Localização</h3>
          <div className="opacity-60 text-sm mb-4">
            <p>The Place, Sala 1703</p>
            <p>Av. Afonso Pena 4785</p>
            <p>Torre II</p>
            <p>Campo Grande - MS</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Navegação</h3>
          <div>
            <a
              href="#about"
              className="opacity-60 hover:opacity-100"
            >
              Sobre
            </a>
          </div>

          <div>
            <a
              href="#team"
              className="opacity-60 hover:opacity-100"
            >
              Equipe
            </a>
          </div>

          <div>
            <a
              href="#testimonials"
              className="opacity-60 hover:opacity-100"
            >
              Depoimentos
            </a>
          </div>
        </div>
      </section>

      {/* Mapa em largura total */}
      <section className="w-full mb-8">
        <div className="container mb-4">
          <h3 className="text-xl font-bold text-center">Nossa Localização</h3>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.1485066228643!2d-54.59377018842083!3d-20.459092780972323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e9ec0d5adb9f%3A0x32823f9c6948bfa!2sThe%20Place%20Corporate!5e0!3m2!1spt-BR!2sbr!4v1754088466618!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="400" 
          style={{border: 0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Froener e Bulhões Advocacia. Todos os direitos reservados.
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          OAB/MS - Ordem dos Advogados do Brasil - Seccional Mato Grosso do Sul
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          CNPJ: 12.345.678/0001-90
        </p>
      </section>
    </footer>
  );
};
