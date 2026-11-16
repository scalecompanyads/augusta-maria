// LP · Dra. Augusta Sampaio (Direito de Família)
// Gera index.html a partir de src.html: FAQ, ícones, imagens e configuração.
// Uso: node build.js
const fs = require('fs');
const path = require('path');
const dir = __dirname;

// ---------- Configuração ----------
const CFG = {
  WA_URL: 'https://wa.me/5562981510404?text=Ol%C3%A1%2C%20Dra.%20Augusta!%20Vim%20pelo%20site%20e%20gostaria%20de%20entender%20melhor%20meu%20caso%20de%20Direito%20de%20Fam%C3%ADlia.',
  WA_DISPLAY: '(62) 98151-0404',
  ASSETS: 'assets', // ao subir no WordPress, troque pela URL da pasta de uploads
};

// Imagens do Magnific: salve em assets/ com estes nomes. Enquanto não existirem, a página mostra o slot listrado com o nome do arquivo.
const IMAGES = {
  IMG_SIT_DIVORCIO: 'sit-divorcio.jpg',
  IMG_SIT_SEPARADOS: 'sit-separados-de-fato.jpg',
  IMG_SIT_UNIAO: 'sit-uniao-estavel.jpg',
  IMG_SIT_INVENTARIO: 'sit-inventario.jpg',
  IMG_SIT_FILHOS: 'sit-filhos.jpg',
  IMG_CMP: 'custo-de-adiar.jpg',
  IMG_SVC_DIVORCIO: 'svc-divorcio.jpg',
  IMG_SVC_UNIAO: 'svc-uniao-estavel.jpg',
  IMG_SVC_INVENTARIO: 'svc-inventario.jpg',
  IMG_ONLINE: 'online.jpg',
};

// Respostas às objeções do briefing. Validar com a advogada antes de publicar.
const FAQ = [
  ['Contratar advogado deve ser muito caro. Como funciona?', 'Os valores dependem do serviço e de cada caso. Depois de entender a sua situação, a advogada apresenta a proposta de honorários com os valores e as condições de pagamento, antes de qualquer contratação, para você decidir com clareza.'],
  ['Não sei se o meu caso precisa mesmo de advogado.', 'No divórcio, na dissolução de união estável e no inventário, a participação de advogado é exigida, inclusive quando tudo é feito em cartório. Na primeira conversa pelo WhatsApp, a equipe entende a sua situação e explica qual caminho se aplica.'],
  ['Meu ex não vai aceitar fazer acordo. E agora?', 'Quando não há acordo, o caminho é a via judicial (litigiosa). Sempre que o caso permite, a advogada busca primeiro a negociação com a outra parte. Se não houver consenso, ela conduz o processo na Justiça.'],
  ['Tenho medo de o processo demorar anos.', 'O tempo depende do caminho: acordo ou litígio, cartório ou Justiça. Quando é possível, a prioridade é a via consensual e extrajudicial, que tende a ser mais rápida. Na conversa inicial, você entende como funciona cada etapa do seu caso.'],
  ['Posso confiar em uma advogada que atende só pela internet?', 'Você fala diretamente com a advogada responsável pelo caso, sem intermediários. O contrato e a procuração são assinados digitalmente, e você recebe atualizações pelo WhatsApp em cada etapa até a conclusão.'],
  ['A advogada não é da minha cidade. Ela consegue atuar no meu caso?', 'O atendimento é 100% online para todo o Brasil: conversa pelo WhatsApp, reuniões por videochamada, envio de documentos e assinatura digital. Você não precisa se deslocar.'],
  ['Não tenho todos os documentos. Posso começar mesmo assim?', 'Pode. Não é preciso ter tudo em mãos para dar o primeiro passo. Na primeira conversa, a equipe indica quais documentos separar para o seu caso.'],
  ['Não tenho dinheiro agora para pagar o inventário.', 'As condições de pagamento são apresentadas junto com a proposta de honorários. Vale lembrar que, no inventário, o atraso pode gerar multa sobre o ITCMD, conforme a lei de cada estado. Por isso, entender o seu caso o quanto antes ajuda a evitar despesas maiores.'],
  ['Nunca registramos a união estável. Então não tenho direito a nada?', 'Não necessariamente. A dissolução de união estável também serve para quem nunca registrou a união em cartório, para formalizar o fim da relação e dividir os bens. O que se aplica ao seu caso depende da análise da sua situação.'],
  ['Tenho vergonha de expor minha vida pessoal.', 'O atendimento é acolhedor e reservado, feito diretamente com a advogada pelo WhatsApp e por videochamada, sem precisar ir a um escritório. As informações do seu caso são protegidas pelo sigilo profissional.'],
  ['Prefiro esperar a situação se acalmar para resolver depois.', 'Esperar pode deixar bens travados, aumentar o risco de prejuízo na divisão e, no inventário, gerar multa sobre o ITCMD. Entender o caminho agora não obriga você a decidir agora, mas ajuda a decidir no momento certo.'],
  ['Já conversei com outro advogado e não gostei.', 'Aqui você fala direto com a advogada responsável, recebe explicações em linguagem simples, sem juridiquês, e acompanha o andamento do caso pelo WhatsApp.'],
];

// ---------- Monta a página ----------
let page = fs.readFileSync(path.join(dir, 'src.html'), 'utf8');

page = page.replace('<!--FAQ-->', FAQ.map(([q, a], i) => `        <details class="faq-item rv"${i === 0 ? ' open' : ''}>
          <summary><span>${q}</span><span class="faq-plus"><svg aria-hidden="true"><use href="#ic-plus-bold"/></svg></span></summary>
          <div class="faq-a"><p>${a}</p></div>
        </details>`).join('\n'));

const ld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
page = page.replace('<!--FAQ_LD-->', `    <script type="application/ld+json">${JSON.stringify(ld)}</script>`);

const missing = [];
for (const [k, file] of Object.entries(IMAGES)) {
  const ok = fs.existsSync(path.join(dir, 'assets', file));
  if (!ok) missing.push(file);
  page = page.split(`{{${k}}}`).join(ok ? `style="--img: url('{{ASSETS}}/${file}')"` : '');
}

const used = [...new Set([...page.matchAll(/#ic-([a-z-]+)/g)].map(m => m[1]))];
const symbols = used.map(n => {
  const svg = fs.readFileSync(path.join(dir, 'icons', n + '.svg'), 'utf8');
  const inner = svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
  return `    <symbol id="ic-${n}" viewBox="0 0 256 256"><g fill="currentColor">${inner}</g></symbol>`;
}).join('\n');
page = page.replace('<!--ICONS-->', symbols);

for (const [k, v] of Object.entries(CFG)) page = page.split(`{{${k}}}`).join(v);
if (/\{\{[A-Z_]+\}\}/.test(page)) throw new Error('placeholder sem valor: ' + page.match(/\{\{[A-Z_]+\}\}/)[0]);

fs.writeFileSync(path.join(dir, 'index.html'), page);
console.log(`index.html ${(page.length / 1024).toFixed(1)} KB · ícones: ${used.length}`);
if (missing.length) console.log('Imagens pendentes (Magnific):', missing.join(', '));
