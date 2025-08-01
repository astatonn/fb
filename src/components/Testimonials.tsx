import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://via.placeholder.com/50/8B4513/FFFFFF?text=MC",
    name: "Maria Cardoso",
    userName: "Cliente - Causa Trabalhista",
    comment: "Excelente atendimento! Conseguiram resolver minha questão trabalhista de forma rápida e eficiente. Recomendo demais o trabalho da equipe.",
  },
  {
    image: "https://via.placeholder.com/50/8B4513/FFFFFF?text=JS",
    name: "João Silva",
    userName: "Empresário",
    comment: "Profissionais muito competentes. Me auxiliaram em questões contratuais complexas e sempre com muita clareza nas explicações. Atendimento nota 10!",
  },
  {
    image: "https://via.placeholder.com/50/8B4513/FFFFFF?text=AS",
    name: "Ana Santos",
    userName: "Cliente - Responsabilidade Civil",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. O escritório demonstrou grande conhecimento técnico e dedicação ao meu caso. Muito satisfeita com o resultado.",
  },
  {
    image: "https://via.placeholder.com/50/8B4513/FFFFFF?text=PC",
    name: "Pedro Costa",
    userName: "Cliente - Rescisão Trabalhista",
    comment: "Equipe muito profissional e atenciosa. Me orientaram em todos os procedimentos e conseguiram um acordo muito bom para minha rescisão. Indico sem hesitar!",
  },
  {
    image: "https://via.placeholder.com/50/8B4513/FFFFFF?text=LM",
    name: "Luciana Martins",
    userName: "Cliente - Cobrança",
    comment: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore. Escritório sério e competente, conseguiram recuperar valores que eu achava perdidos.",
  },
  {
    image: "https://via.placeholder.com/50/8B4513/FFFFFF?text=RS",
    name: "Roberto Souza",
    userName: "Cliente - Indenização",
    comment: "Atendimento exemplar desde o primeiro contato. Profissionais dedicados que realmente se importam com o cliente. Resultado excepcional no meu processo de indenização.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        O que nossos
        <span className="bg-gradient-to-b from-amber-700 to-amber-900 text-transparent bg-clip-text">
          {" "}
          clientes dizem{" "}
        </span>
        sobre nosso trabalho
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Conheça a experiência de quem já confiou em nossos serviços jurídicos. 
        Cada depoimento reflete nosso compromisso com a excelência e satisfação do cliente.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
