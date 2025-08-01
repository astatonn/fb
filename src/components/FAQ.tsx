import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Quanto tempo leva para resolver um processo trabalhista?",
    answer: "O tempo varia conforme a complexidade do caso. Processos mais simples podem ser resolvidos em 6 a 12 meses, enquanto casos complexos podem levar de 2 a 3 anos. Sempre buscamos a resolução mais rápida possível através de acordos quando vantajosos para o cliente.",
    value: "item-1",
  },
  {
    question: "Posso entrar com ação trabalhista mesmo depois de assinar a rescisão?",
    answer: "Sim, o trabalhador tem até 2 anos após o fim do contrato para ingressar com ação trabalhista, mesmo tendo assinado os documentos de rescisão. A assinatura não impede a cobrança de direitos não pagos ou pagos incorretamente.",
    value: "item-2",
  },
  {
    question: "Quando tenho direito a indenização por danos morais?",
    answer: "Você tem direito quando sofrer constrangimento, humilhação ou violação da dignidade. Exemplos incluem: assédio moral, discriminação, exposição vexatória, condições degradantes de trabalho, ou lesão à honra e imagem. Cada caso é analisado individualmente.",
    value: "item-3",
  },
  {
    question: "Como funciona a cobrança de honorários advocatícios?",
    answer: "Trabalhamos com diferentes modalidades: honorários contratuais (percentual sobre o resultado), honorários por hora, ou valor fixo conforme o caso. Em ações trabalhistas, geralmente trabalhamos com percentual sobre êxito, sem custos iniciais para o cliente.",
    value: "item-4",
  },
  {
    question: "O que devo fazer se sofrer um acidente de trabalho?",
    answer: "Procure atendimento médico imediatamente, comunique o acidente ao empregador por escrito, emita a CAT (Comunicação de Acidente de Trabalho), guarde todos os documentos médicos e procure orientação jurídica para garantir seus direitos previdenciários e indenizatórios.",
    value: "item-5",
  },
  {
    question: "Posso ser demitido durante o período de estabilidade?",
    answer: "Durante períodos de estabilidade (gravidez, acidente de trabalho, eleição CIPA, etc.), a demissão só é possível por justa causa devidamente comprovada ou acordo entre as partes. Demissão sem justa causa neste período gera direito a indenização e reintegração.",
    value: "item-6",
  },
  {
    question: "Como calcular as horas extras devidas?",
    answer: "Horas extras são calculadas com acréscimo mínimo de 50% sobre a hora normal (100% em domingos e feriados). É preciso somar: valor da hora extra, reflexos no DSR, 13º salário, férias e FGTS. Recomendamos análise detalhada do caso para cálculo preciso.",
    value: "item-7",
  },
  {
    question: "Qual a diferença entre demissão sem justa causa e rescisão indireta?",
    answer: "Na demissão sem justa causa, o empregador dispensa o funcionário. Na rescisão indireta, o empregado 'demite' o empregador por descumprimento grave das obrigações contratuais (não pagamento, assédio, etc.), tendo direito às mesmas verbas da demissão sem justa causa.",
    value: "item-8",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Perguntas{" "}
          <span className="bg-gradient-to-b from-amber-700 to-amber-900 text-transparent bg-clip-text">
            Frequentes
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Esclarecemos as principais dúvidas sobre direitos trabalhistas e processos jurídicos.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center mt-8">
        <h3 className="font-medium mb-4">
          Ainda tem dúvidas?{" "}
        </h3>
        <a
          href="https://wa.me/+5567991147535"
          target="_blank"
          className="inline-flex items-center px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
        >
          Fale Conosco no WhatsApp
        </a>
      </div>
    </section>
  );
};
