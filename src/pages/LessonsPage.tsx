import { Play, Calendar, User } from "lucide-react";

const modules = [
  {
    title: "Módulo 1: Curso de Bolsas de Crochê",
    description: "Aprenda a criar bolsas incríveis, desde modelos fáceis até peças de luxo.",
    lessons: [
      { title: "Bolsa Fácil e Econômica em Fio de Malha", url: "https://www.youtube.com/watch?v=EpvPNn-hWjc" },
      { title: "Bolsa de Crochê Charlotte (Barbante)", url: "https://www.youtube.com/watch?v=wpe0kPe0m80" },
      { title: "Bolsa de Crochê Fácil para Iniciantes", url: "https://www.youtube.com/watch?v=T-Q95YA4Vsk" },
      { title: "Bolsa Vitória (Tamanho Grande)", url: "https://www.youtube.com/watch?v=46VaROuf9qo" },
      { title: "Bolsa de Crochê Luxo (Fio Náutico)", url: "https://www.youtube.com/watch?v=a_4nTKtNq3o" },
      { title: "Bolsa Belíssima em Fio de Malha", url: "https://www.youtube.com/watch?v=ciyWtzHIUQ4" },
      { title: "Vídeo Completo - Semana do Crochê", url: "https://www.youtube.com/watch?v=UF75l7ozHKE" },
      { title: "Montagem de Bolsa Triângulo Origami", url: "https://www.youtube.com/watch?v=mfB_NEHVI2A" },
      { title: "Bolsa de Crochê Tiracolo Moderna", url: "https://www.youtube.com/watch?v=gE2fjxCOXZk" },
      { title: "Acabamentos Profissionais para Bolsas", url: "https://www.youtube.com/watch?v=a_4nTKtNq3o" },
    ]
  },
  {
    title: "Módulo 2: Crochê Utilitário e Decorativo (Casa)",
    description: "Peças lindas para decorar a casa e vender muito.",
    lessons: [
      { title: "Jogo de Cozinha Passadeira Ametista", url: "https://www.youtube.com/watch?v=8JCPVWFHv2M" },
      { title: "Tapete Redondo em Crochê Passo a Passo", url: "https://www.youtube.com/watch?v=891-lwVHP0o" },
      { title: "Sousplat Encanto (Mesa Posta)", url: "https://www.youtube.com/watch?v=i6I8GM0KIqM" },
      { title: "Tapetão Espiral para Sala", url: "https://www.youtube.com/watch?v=CAyPkVj_-Yo" },
      { title: "Jogo de Cozinha Completo em Barbante", url: "https://www.youtube.com/watch?v=MiYQrd_kSYk" },
      { title: "Tapete Rústico Econômico", url: "https://www.youtube.com/watch?v=uNlI5InN54Y" },
      { title: "Tapete Simples e Rápido para Iniciantes", url: "https://www.youtube.com/watch?v=LcXvGeFMjCc" },
      { title: "Tutorial Quadrado de Crochê (Base)", url: "https://www.youtube.com/watch?v=1UTyh6hEWJM" },
      { title: "Artesanato na Talagarça com Barbante", url: "https://www.youtube.com/watch?v=ztXcXFu1r_4" },
      { title: "Capa para Almofada e Puffs", url: "https://www.youtube.com/watch?v=uNlI5InN54Y" },
    ]
  },
  {
    title: "Módulo 3: Vestidos de Natal e Ano Novo",
    description: "Modelos exclusivos para as festas de fim de ano.",
    lessons: [
      { title: "Vestido Allana (Especial Réveillon)", url: "https://www.youtube.com/watch?v=Qkm0HVb9O_s" },
      { title: "Vestido de Crochê Festa 2025/2026", url: "https://www.youtube.com/watch?v=l1t2tFpXUus" },
      { title: "Vestido de Crochê com Paetê (Réveillon)", url: "https://www.youtube.com/watch?v=DPiMxZziUoc" },
      { title: "Vestido Márcia Tendência Verão", url: "https://www.youtube.com/watch?v=zQVpLaMwQnY" },
      { title: "Vestidinho de Ano Novo Elaine Cristina", url: "https://www.youtube.com/watch?v=CtK2NIiHpiE" },
      { title: "Vestido Fácil e Versátil Verão", url: "https://www.youtube.com/watch?v=aNYZyJjdm10" },
      { title: "Criação e Confecção de Vestido de Luxo", url: "https://www.youtube.com/watch?v=rV_WA1TpVoc" },
      { title: "Vestido de Crochê Longo para Festas", url: "https://www.youtube.com/watch?v=l1t2tFpXUus" },
      { title: "Vestido Branco com Pontos Calados", url: "https://www.youtube.com/watch?v=aNYZyJjdm10" },
      { title: "Vestido Curto com Brilho para Natal", url: "https://www.youtube.com/watch?v=DPiMxZziUoc" },
    ]
  },
  {
    title: "Módulo 4: Vestidos Modernos e Tendências (2026)",
    description: "Foco em peças de alto valor percebido e modelos atuais.",
    lessons: [
      { title: "VESTIDO DE CROCHÊ perfeito no corpo (FÁCIL)", url: "https://www.youtube.com/watch?v=1ET5icmHSks" },
      { title: "VESTIDO DE CROCHÊ FESTA 2025 (Aracelly Costa)", url: "https://www.youtube.com/watch?v=l1t2tFpXUus" },
      { title: "Passo a passo vestido de crochê Márcia", url: "https://www.youtube.com/watch?v=zQVpLaMwQnY" },
      { title: "Vestido de crochê muito fácil para o verão 2026", url: "https://www.youtube.com/watch?v=aNYZyJjdm10" },
      { title: "Tutorial completo: vestido de crochê com paetês", url: "https://www.youtube.com/watch?v=81yOWx9Qb3Y" },
      { title: "Vestido de crochê com paetê (Aula Rápida)", url: "https://www.youtube.com/watch?v=DPiMxZziUoc" },
      { title: "Passo a passo vestido de crochê Sandrinha", url: "https://www.youtube.com/watch?v=EZQNcRwYwnk" },
      { title: "Vestido de Crochê Maravilhoso Verão 2025 (Parte 2)", url: "https://www.youtube.com/watch?v=qMUKs2d8eA8" },
      { title: "Vestido de Crochê Duda (Parte 2)", url: "https://www.youtube.com/watch?v=GwVtJqEMXmo" },
      { title: "Easy to make crochet dress for summer 2025", url: "https://www.youtube.com/watch?v=eV6HmFmjOy4" },
    ]
  },
  {
    title: "Módulo 5: Estilos Praia e Verão",
    description: "Peças rápidas de produzir e com alta demanda sazonal.",
    lessons: [
      { title: "Vestido de Praia em crochê Passo a passo completo", url: "https://www.youtube.com/watch?v=JY_GXfvxUhM" },
      { title: "Vestido de crochê Mel Maia/Saída de praia (Parte 1)", url: "https://www.youtube.com/watch?v=sGsa_lqrdy4" },
      { title: "SAÍDA DE PRAIA EVA - VESTIDO CROCHÊ FÁCIL", url: "https://www.youtube.com/watch?v=-EasVJzRqkk" },
      { title: "VESTIDO NEON CROCHÊ FÁCIL", url: "https://www.youtube.com/watch?v=P39qmpnKTFY" },
      { title: "VESTIDO SOL - PAP CROCHET Tutorial", url: "https://www.youtube.com/watch?v=FNcbCnpp7_0" },
    ]
  },
  {
    title: "Módulo 6: Clássicos e Versáteis",
    description: "Modelos estruturados para diferentes ocasiões.",
    lessons: [
      { title: "Vestido Tubinho em Crochê (Passo a Passo)", url: "https://www.youtube.com/watch?v=E2UY3DRMy9A" },
      { title: "Vestido de Crochê Elegance", url: "https://www.youtube.com/watch?v=KPlat0-m7wk" },
      { title: "Vestido de Crochê PASSO A PASSO (Anne Galante)", url: "https://www.youtube.com/watch?v=-jXgCbHy6Uw" },
      { title: "VESTIDO VITÓRIA CROCHÊ - Tutorial Completo", url: "https://www.youtube.com/watch?v=Br7ytQ-AcWc" },
      { title: "vestido de crochê Saint Tropez (Parte 1)", url: "https://www.youtube.com/watch?v=s0iOtxvMg4Q" },
      { title: "Como fazer vestido de crochê para o réveillon", url: "https://www.youtube.com/watch?v=mY40VVmow_I" },
      { title: "Lesson 1 - Easy and Fast Crochet Dress (Débora Vilarins)", url: "https://www.youtube.com/watch?v=mniJmXt9p78" },
      { title: "Louise Crochet Dress - Lesson 01", url: "https://www.youtube.com/watch?v=FIpsOhnNdM4" },
      { title: "FUN DRESS MADE WITH STRING (Passo a Passo)", url: "https://www.youtube.com/watch?v=kxnG0AXmyqE" },
    ]
  },
  {
    title: "Módulo 7: Infantil e Técnicas Adicionais",
    description: "Diversificação de público e métodos simplificados.",
    lessons: [
      { title: "VESTIDO INFANTIL DE CROCHÊ MUITO RÁPIDO", url: "https://www.youtube.com/watch?v=N_jQNWk-cVc" },
      { title: "Complete Crochet Dress Step by Step (Modelo Econômico)", url: "https://www.youtube.com/watch?v=zJknH9E_fnw" },
      { title: "Complete Crochet Dress Step by Step (Com Sobras de Linha)", url: "https://www.youtube.com/watch?v=bqANSOMo5lY" },
      { title: "Complete Crochet Dress Step by Step (Estilo Tubinho)", url: "https://www.youtube.com/watch?v=gmWdUbL4c1Q" },
      { title: "How to crochet a Dress (Beginner Friendly)", url: "https://www.youtube.com/watch?v=nDSWAl5jNbA" },
      { title: "FULL LENGTH VIDEO: stylish crochet dress from start to finish", url: "https://www.youtube.com/watch?v=ghC1hqo0gEs" },
    ]
  },
  {
    title: "Módulo Bônus: Negócio e Vendas de Crochê",
    description: "Estratégias para transformar a técnica em lucro.",
    lessons: [
      { title: "Como VENDER CROCHÊ mais rápido (5 DICAS)", url: "https://www.youtube.com/watch?v=-_UKGIHjwqE" },
      { title: "Sucesso vendendo crochê pela internet", url: "https://www.youtube.com/watch?v=hjbVbcanbPQ" },
      { title: "5 DICAS PARA VENDER MUITO CROCHÊ", url: "https://www.youtube.com/watch?v=TnH2t2TjwhA" },
      { title: "Como Vender Artesanato na Shopee", url: "https://www.youtube.com/watch?v=3531smnJX1k" },
      { title: "Dicas para Vender Pronta Entrega", url: "https://www.youtube.com/watch?v=0kOOnoswYNs" },
    ]
  }
];

// Helper to extract video ID
const getYoutubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <header className="bg-stone-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold font-serif mb-2">Área de Membros - Belle Crochê</h1>
          <p className="text-stone-400">Bem-vinda ao seu portal de aprendizado.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-xl">
            <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full">
                    <User className="text-rose-600" size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-rose-800 text-lg mb-1">Múltiplos Professores Especialistas</h3>
                    <p className="text-rose-700">
                        Nosso curso conta com a didática de diversos professores renomados para garantir que você aprenda diferentes técnicas e estilos.
                    </p>
                </div>
            </div>
            <div className="flex items-start gap-4 mt-6">
                <div className="bg-rose-100 p-3 rounded-full">
                    <Calendar className="text-rose-600" size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-rose-800 text-lg mb-1">Novas Aulas Toda Semana</h3>
                    <p className="text-rose-700">
                        Estamos sempre atualizando o conteúdo! Fique de olho para não perder as novidades que adicionamos semanalmente.
                    </p>
                </div>
            </div>
        </div>

        <div className="space-y-12">
          {modules.map((module, index) => (
            <section key={index} className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
              <div className="bg-stone-100 p-6 border-b border-stone-200">
                <h2 className="text-2xl font-bold font-serif text-stone-900">{module.title}</h2>
                <p className="text-stone-600 mt-2">{module.description}</p>
              </div>
              <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {module.lessons.map((lesson, lessonIndex) => {
                  const videoId = getYoutubeId(lesson.url);
                  return (
                    <div key={lessonIndex} className="group">
                      <div className="aspect-video bg-stone-900 rounded-xl overflow-hidden mb-3 relative shadow-md group-hover:shadow-xl transition-all">
                        {videoId ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={lesson.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white">
                            Video indisponível
                          </div>
                        )}
                      </div>
                      <h3 className="font-bold text-stone-800 leading-tight group-hover:text-rose-600 transition-colors">
                        {lesson.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-xs text-stone-500">
                        <Play size={14} />
                        <span>Aula Prática</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>
      
      <footer className="bg-stone-900 text-stone-400 py-8 mt-12 text-center text-sm">
        &copy; {new Date().getFullYear()} Belle Crochê. Área exclusiva para membros.
      </footer>
    </div>
  );
}
