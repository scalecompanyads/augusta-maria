# LP Dra. Augusta Sampaio (Direito de Família)

Visual baseado na LP v2 da JRFB, com a paleta da marca dela: azul do escudo `#1e4799`, marinho `#0f1f45`, prata dos louros e creme.

- `src.html`: fonte da página (edite aqui)
- `build.js`: gera `index.html` (`node build.js`). Nele ficam o link do WhatsApp, as perguntas do FAQ, o número da OAB e a lista de imagens.
- `assets/`: fotos da Augusta e o escudo da logo (versão clara e escura, fundo transparente)

## Briefing aplicado
- Sem GTM e sem botão flutuante, como pedido. Os cliques no WhatsApp já mandam `whatsapp_click` para o `dataLayer`, então se o GTM for instalado depois, a conversão já funciona.
- CTA único: "Falar com a advogada no WhatsApp", com a mensagem pré-preenchida do briefing.
- Não aparece "consulta gratuita" nem "avaliação grátis" (Provimento 205/2021). A página também não promete resultado nem prazo e não usa prova social.

## Estrutura
1. Hero: promessa central + retrato + faixa com os serviços
2. Situações (carrossel, problema): 5 perfis
3. Deixar para depois tem custo: adiar × resolver com orientação (5 itens)
4. Como a Dra. Augusta pode ajudar: os 3 serviços
5. Quem conduz o seu caso: sobre a advogada
6. Como funciona: 6 passos do fluxo pós-conversão
7. Diferenciais
8. 100% online (objeção "não é da minha cidade")
9. FAQ com as 12 objeções do briefing
10. CTA final + rodapé

## Imagens atuais (Unsplash, licença gratuita para uso comercial)
O conector do Magnific não carregou ferramentas no Claude Code, então as fotos atuais são do Unsplash (unsplash.com/photos/ID). Para trocar por uma foto do Magnific, basta substituir o arquivo em `assets/` com o mesmo nome.

| Arquivo | ID no Unsplash |
|---|---|
| sit-divorcio.jpg | NA5bxbiLr7o |
| sit-separados-de-fato.jpg | BuNWp1bL0nc |
| sit-uniao-estavel.jpg | wS40ELZROLE |
| sit-inventario.jpg | 9U8H64Izbrc |
| sit-filhos.jpg | pXte02H-49A |
| custo-de-adiar.jpg | 8BuTwOlhLr0 |
| svc-divorcio.jpg | HJckKnwCXxQ |
| svc-uniao-estavel.jpg | VDwINWBdX0Y |
| svc-inventario.jpg | qYo9shxqA6g |
| online.jpg | H0bmuj6xCN4 |

## Cenas (referência para buscar no Magnific)
Salve em `assets/` com o nome exato e rode `node build.js`. O slot listrado é trocado pela imagem sozinho.
Estilo comum a todas: *fotografia editorial realista, luz natural suave, tons quentes neutros com toques de azul-marinho, pessoas brasileiras de 30 a 60 anos, classe média, sem texto, sem logos, profundidade de campo rasa.*

| Arquivo | Proporção | Prompt |
|---|---|---|
| sit-divorcio.jpg | 5:4 | Casal brasileiro de uns 40 anos sentado em lados opostos de um sofá na sala de casa, em silêncio, olhando para direções diferentes, clima tenso e contido |
| sit-separados-de-fato.jpg | 5:4 | Mulher de uns 45 anos sentada sozinha à mesa da cozinha olhando uma certidão de casamento e papéis antigos, expressão pensativa |
| sit-uniao-estavel.jpg | 5:4 | Caixas de mudança fechadas e um molho de chaves de casa sobre a mesa de um apartamento, um homem de uns 35 anos ao fundo, desfocado |
| sit-inventario.jpg | 5:4 | Filha adulta de uns 40 anos organizando papéis e uma pasta de documentos na casa de um familiar que faleceu, porta-retrato antigo na mesa, clima de saudade |
| sit-filhos.jpg | 5:4 | Criança de uns 8 anos de mãos dadas com o pai na porta de casa, mochila nas costas, foco nas mãos, clima delicado |
| custo-de-adiar.jpg | 16:10 | Homem de uns 50 anos preocupado à mesa da cozinha com contas, boletos e documentos de imóvel espalhados, luz de fim de tarde |
| svc-divorcio.jpg | 16:10 | Close de mãos assinando um documento sobre uma mesa clara, caneta elegante, clima de acordo tranquilo |
| svc-uniao-estavel.jpg | 16:10 | Mulher de uns 35 anos em casa organizando documentos em uma pasta com expressão aliviada, luz natural |
| svc-inventario.jpg | 16:10 | Família brasileira (mãe idosa e dois filhos adultos) conversando com calma em volta da mesa da sala, documentos sobre a mesa |
| online.jpg | 4:4.4 | Mulher de uns 45 anos em casa, sentada no sofá, fazendo uma videochamada no notebook com expressão tranquila e atenta |

## Pendências (validar com cliente/Jeferson)
- **Número e seccional da OAB**: aparece como "OAB/UF nº PENDENTE" no "Sobre" e no rodapé. A publicidade da advocacia precisa identificar a inscrição.
- **Nome no copyright e nome de exibição**: o briefing usa "Augusta Maria" e "Augusta Sampaio", e a logo usa "Dra. Augusta Sampaio". Usei Augusta Sampaio.
- **Bio da advogada**: o briefing não traz formação nem tempo de atuação. A seção usa só o que foi informado. Vale pedir mais dados.
- **Respostas do FAQ**: foram escritas a partir do briefing e precisam da validação da advogada.
- **Domínio de publicação**: trocar `ASSETS` no `build.js` se as imagens forem para outra URL (ex.: uploads do WordPress).
- **Horário comercial**: citado no passo 2, sem horário definido.
- **E-mail, Instagram e endereço**: não informados, então ficaram fora do rodapé.
