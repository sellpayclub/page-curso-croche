import { Check, Star, Shield, Award, Users, Clock, DollarSign } from "lucide-react";
import { VideoCarousel } from "../components/VideoCarousel";
import { motion } from "motion/react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800">
      {/* 1. Topo e Urgência */}
      <div className="bg-rose-600 text-white text-center py-2 px-4 text-sm md:text-base font-medium uppercase tracking-wide">
        OFERTA VÁLIDA ATÉ HOJE AS 23hr59
      </div>

      {/* Hero Section */}
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1615457938971-b9206b39f26c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 to-stone-900/95" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-rose-400 font-serif italic text-xl md:text-2xl mb-4"
          >
            Transforme Linhas em Arte
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight font-sans tracking-tight"
          >
            Descubra Como Fazer Peças de Crochê e Criar uma Renda Extra de Até R$5.000 por Mês Sem Sair de Casa
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto"
          >
            Você vai aprender a Fazer, Precificar, Divulgar para atrair clientes e Vender — mesmo começando do zero.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#oferta"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-rose-600/30 transition-all uppercase tracking-wider"
          >
            Eu Quero Garantir Minha Vaga!
          </motion.a>
        </div>
      </header>

      {/* Video Carousel Section */}
      <VideoCarousel />

      {/* Problem / Solution Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif text-stone-900">
              Quantas vezes você já desistiu de um vestido por não saber como continuar?
            </h2>
            <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
              Aqui no <span className="font-bold text-rose-600">Curso Belle Crochê</span>, você tem acesso a aulas completas de vestidos de crochê, 100% passo a passo. Se você já sabe crochê e quer aprender novos modelos com explicação clara, detalhada e sem enrolação, aqui você encontra exatamente isso. As aulas mostram cada etapa da construção do vestido, do início ao acabamento, para você acompanhar com segurança e precisão. É conteúdo direto ao ponto, focado em ensinar modelos de vestidos de forma prática e organizada.
            </p>
          </div>

          <div className="mb-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 font-serif text-stone-900">
              Veja o que dizem sobre nosso curso no Instagram e Facebook
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-200">
              <img 
                src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/depoimentos%20todos.png" 
                alt="Depoimentos de alunas"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center">
            <a
              href="#oferta"
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-rose-600/30 transition-all uppercase tracking-wider"
            >
              Eu Quero Garantir Minha Vaga!
            </a>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif">Pra quem é esse curso?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-rose-500">
              <h3 className="text-xl font-bold mb-4 font-serif">Iniciantes</h3>
              <p className="text-stone-600">Nunca fez crochê ou ainda se sente insegura? As aulas são passo a passo, simples e fáceis de seguir.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-rose-500">
              <h3 className="text-xl font-bold mb-4 font-serif">Quem já faz crochê</h3>
              <p className="text-stone-600">Aprenda a finalizar vestidos, acertar medidas e alcançar um acabamento bonito e profissional.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-rose-500">
              <h3 className="text-xl font-bold mb-4 font-serif">Quem quer vender</h3>
              <p className="text-stone-600">Modelos prontos, bem estruturados e com ótimo valor de venda para gerar renda com encomendas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-stone-200 relative">
               {/* Placeholder for Instructor Image - using a generic craft/person image since none provided */}
               <img 
                 src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/professora%20croche.png" 
                 alt="Iara Ferreira"
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                 <p className="text-white font-serif text-2xl font-bold">Iara Ferreira</p>
                 <p className="text-rose-200 text-sm uppercase tracking-wider">Professora</p>
               </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Sua Professora</h2>
            <div className="prose prose-lg text-stone-600">
              <p className="mb-4">
                Oi, eu sou a criadora do Curso Belle Crochê. O crochê faz parte da minha vida há mais de 30 anos e foi na prática, entre erros e acertos, que aprendi a criar peças bonitas, bem feitas e com acabamento caprichado.
              </p>
              <p className="mb-4">
                Criei o Belle Crochê para ensinar de forma simples e clara, com aulas passo a passo que realmente funcionam, tanto para quem está começando quanto para quem já faz crochê.
              </p>
              <p>
                Aqui, meu objetivo é ajudar você a transformar linhas em peças cheias de carinho, orgulho e significado e dependendo de você até ganhar um bom dinheiro vendendo as peças que criar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Simulation */}
      <section className="py-16 md:py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-serif text-rose-400">
            Como você pode ganhar R$ 3.000 a R$ 5.000 por mês
          </h2>
          <p className="text-stone-400 mb-12 text-sm">
            Aviso: Esses valores não são promessas. São exemplos do que alunas conseguem vendendo vestidos sob encomenda.
          </p>

          <div className="bg-stone-800 p-6 rounded-xl inline-block mb-12 border border-stone-700">
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="px-4 py-2 bg-stone-900 rounded-lg">Preço de venda: <span className="text-green-400 font-bold">R$ 120</span></div>
              <div className="px-4 py-2 bg-stone-900 rounded-lg">Custo: <span className="text-red-400 font-bold">R$ 35</span></div>
              <div className="px-4 py-2 bg-stone-900 rounded-lg border border-green-500/30">Lucro por peça: <span className="text-green-400 font-bold">R$ 85</span></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-stone-800 p-6 rounded-xl border border-stone-700">
              <p className="text-stone-400 text-sm mb-2">10 peças/mês</p>
              <p className="text-2xl font-bold text-white">R$ 850</p>
            </div>
            <div className="bg-stone-800 p-6 rounded-xl border border-stone-700">
              <p className="text-stone-400 text-sm mb-2">20 peças/mês</p>
              <p className="text-2xl font-bold text-white">R$ 1.700</p>
            </div>
            <div className="bg-rose-900/40 p-6 rounded-xl border-2 border-rose-500 transform md:-translate-y-4 shadow-xl shadow-rose-900/20">
              <p className="text-rose-200 text-sm mb-2 font-bold">35 peças/mês</p>
              <p className="text-3xl font-bold text-white">R$ 2.975</p>
            </div>
            <div className="bg-stone-800 p-6 rounded-xl border border-stone-700">
              <p className="text-stone-400 text-sm mb-2">60 peças/mês</p>
              <p className="text-2xl font-bold text-white">R$ 5.100</p>
            </div>
          </div>
          
          <p className="mt-12 text-xl font-serif italic">"Você decide quanto quer produzir e quanto quer ganhar."</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="oferta" className="py-16 md:py-24 bg-stone-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Escolha o Melhor Plano Para Você</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Aqui no Belle Crochê, após o pagamento você receberá o acesso do curso no seu Email e também no seu WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 order-2 md:order-1">
              <div className="mb-6">
                <span className="bg-stone-200 text-stone-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Básico</span>
                <h3 className="text-2xl font-bold mt-4 font-serif">Plano Básico</h3>
                <p className="text-red-500 text-sm font-bold mt-2 flex items-center gap-1">
                  <Clock size={14} /> RESTAM APENAS 10 VAGAS
                </p>
              </div>
              
              <div className="mb-8">
                <p className="text-4xl font-bold text-stone-900">R$ 10,00</p>
                <p className="text-stone-500 text-sm mt-1">Pagamento único</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0" size={20} />
                  <span className="font-bold text-stone-800">Acesso por 1 ano</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0" size={20} />
                  <span>Video Aulas práticas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0" size={20} />
                  <span>580+ Modelos de Receitas</span>
                </li>
              </ul>

              <a 
                href="https://seguro.vitago-suplements.shop/r/LZQ4OTRG70"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-4 px-6 rounded-xl transition-colors text-center"
              >
                COMPRAR AGORA
              </a>
              <p className="text-xs text-center text-stone-500 mt-3">
                Acesso enviado via WhatsApp após confirmação
              </p>
            </div>

            {/* Premium Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-rose-500 relative order-1 md:order-2 transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-md">
                Mais Vendido
              </div>
              
              <div className="mb-6">
                <span className="bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Premium</span>
                <h3 className="text-2xl font-bold mt-4 font-serif">Plano Premium</h3>
                <p className="text-red-500 text-sm font-bold mt-2 flex items-center gap-1">
                  <Clock size={14} /> RESTAM APENAS 10 VAGAS
                </p>
              </div>
              
              <div className="mb-2">
                <p className="text-stone-400 text-sm line-through">De R$ 147,00</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-5xl font-bold text-rose-600">R$ 29,90</p>
                  <span className="text-stone-500 text-sm">à vista</span>
                </div>
                <p className="text-stone-600 font-medium mt-1">ou 12x de R$ 2,99</p>
              </div>

              <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl mb-6">
                <p className="text-rose-800 font-bold text-sm flex items-center gap-2">
                  <Star size={16} className="fill-rose-600 text-rose-600" />
                  ACESSO VITALÍCIO
                </p>
                <p className="text-rose-700 text-xs mt-1">Pague uma única vez e tenha acesso para sempre</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0" size={20} />
                  <span className="font-bold">Curso completo com 10 módulos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0" size={20} />
                  <span>Video Aulas práticas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0" size={20} />
                  <span>580+ Receitas/gráficos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0" size={20} />
                  <span>Suporte e Comunidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="text-rose-500 shrink-0" size={20} />
                  <span className="font-bold text-rose-700">Certificado de Conclusão</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="text-rose-500 shrink-0" size={20} />
                  <span className="font-bold text-rose-700">Grupo VIP no WhatsApp</span>
                </li>
              </ul>

              <div className="flex items-center gap-2 mb-6 justify-center text-sm text-stone-500">
                <Shield size={16} className="text-green-500" />
                <span>Garantia de 30 dias</span>
              </div>

              <a 
                href="https://seguro.vitago-suplements.shop/r/76TAH9SRQB"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg shadow-rose-600/20 text-lg uppercase tracking-wide animate-pulse text-center"
              >
                COMPRAR AGORA
              </a>
              <p className="text-xs text-center text-stone-500 mt-3">
                <span className="font-bold text-rose-600">IMPORTANTE:</span> Seu login e senha de acesso serão enviados no seu WhatsApp assim que a compra for confirmada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <Shield size={80} className="text-green-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif text-stone-900">
            Garantia Total de 90 Dias
          </h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Você tem 90 dias para assistir as aulas e testar o método. Se por qualquer motivo você não gostar ou achar que não é para você, basta enviar um e-mail e devolvemos 100% do seu dinheiro. Sem letras miúdas. Risco zero para você.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif text-stone-900">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-sans font-bold text-xl mb-3 text-stone-900">1. Eu nunca fiz crochê. Vou conseguir aprender mesmo começando do zero?</h3>
              <p className="text-stone-600 leading-relaxed text-lg">Sim. O curso começa do básico e ensina cada etapa de forma detalhada. Mesmo quem nunca segurou uma agulha consegue acompanhar. As aulas mostram ponto por ponto, sem pular etapas.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-sans font-bold text-xl mb-3 text-stone-900">2. Eu já sei crochê. Não vai ser conteúdo muito básico?</h3>
              <p className="text-stone-600 leading-relaxed text-lg">Não. Além da base, você aprende construção de vestidos, ajuste de medidas, acabamento profissional e organização de receita. É exatamente o que falta para quem já faz crochê, mas ainda não consegue entregar peças com padrão de venda.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-sans font-bold text-xl mb-3 text-stone-900">3. Quanto tempo leva para fazer um vestido?</h3>
              <p className="text-stone-600 leading-relaxed text-lg">Depende do modelo e da sua prática. Iniciantes podem levar alguns dias no primeiro vestido. Com prática, é possível produzir de 2 a 4 peças por semana. Se você não tem tempo nem para produzir algumas horas por semana, então renda extra com crochê não é para você.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-sans font-bold text-xl mb-3 text-stone-900">4. É realmente possível ganhar de R$ 3.000 a R$ 5.000 por mês?</h3>
              <p className="text-stone-600 leading-relaxed text-lg">É possível, mas não automático. Os cálculos da página mostram uma conta simples: Se você lucra em média R$ 85 por peça, precisa produzir e vender cerca de 35 a 60 vestidos no mês. Isso exige produção, divulgação e consistência. Não é promessa de dinheiro fácil.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-sans font-bold text-xl mb-3 text-stone-900">5. Eu preciso aparecer na internet para vender?</h3>
              <p className="text-stone-600 leading-relaxed text-lg">Não necessariamente. Você pode vender para amigas e conhecidas, em grupos locais, pelo WhatsApp ou para clientes sob encomenda. Mas se você não divulgar para ninguém, não vai vender. Crochê não se vende sozinho.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-sans font-bold text-xl mb-3 text-stone-900">6. Preciso de máquina de costura?</h3>
              <p className="text-stone-600 leading-relaxed text-lg">Não. Os vestidos são feitos totalmente em crochê. Você precisa apenas de: Agulha, Linha, Tesoura e Fita métrica.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-sans font-bold text-xl mb-3 text-stone-900">7. Vou ter suporte se tiver dúvidas?</h3>
              <p className="text-stone-600 leading-relaxed text-lg">Sim. No plano Premium você tem acesso ao grupo VIP e suporte para tirar dúvidas. Você não fica sozinha tentando entender o conteúdo.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-sans font-bold text-xl mb-3 text-stone-900">8. Como recebo o acesso?</h3>
              <p className="text-stone-600 leading-relaxed text-lg">Após a confirmação do pagamento, você recebe login e senha diretamente no seu WhatsApp e também no e-mail cadastrado.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-sans font-bold text-xl mb-3 text-stone-900">9. O curso é físico ou online?</h3>
              <p className="text-stone-600 leading-relaxed text-lg">É 100% online. Você pode assistir pelo celular, tablet ou computador.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-sans font-bold text-xl mb-3 text-stone-900">10. Por quanto tempo tenho acesso?</h3>
              <p className="text-stone-600 leading-relaxed text-lg">Plano Básico: 1 ano. Plano Premium: acesso vitalício.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-sans font-bold text-xl mb-3 text-stone-900">11. E se eu comprar e não gostar?</h3>
              <p className="text-stone-600 leading-relaxed text-lg">Você tem 30 dias de garantia no Plano Premium. Se não se adaptar, pode pedir reembolso dentro do prazo. Risco zero para testar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-2 rounded-full">
              <Shield size={20} />
              PAGAMENTO 100% SEGURO
            </div>
          </div>
          
          <p className="text-stone-500 text-sm max-w-2xl mx-auto">
            O PIX será identificado no nome de <strong className="text-stone-800">TALITA REGINA GOMES DE PAULA</strong>, responsável financeiro do Belle Crochê.
          </p>
          
          <div className="mt-8 pt-8 border-t border-stone-100 text-stone-400 text-xs">
            &copy; {new Date().getFullYear()} Belle Crochê. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
