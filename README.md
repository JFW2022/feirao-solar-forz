# Feirão de Energia Solar FORZ

Landing page de alta conversão para o **Feirão de Energia Solar da FORZ** com atendimento focado em **Goiás (GO)** e **Distrito Federal (DF)** (`feirao.forzenergia.com.br`).

## Funcionalidades Implementadas
- **Hero Split com Carrossel Infinito ao Fundo:** Formulário de captação flutuante posicionado sobre trilha contínua de fotos reais de instalações solares.
- **Oferta do Feirão:** Destaque para **15% OFF** exclusivo e financiamento em **até 120x** com parcelas menores que a conta atual.
- **Autoridade Regional (+80 Clientes):** Homologação ágil junto à **Equatorial Energia Goiás** e **Neoenergia Brasília**.
- **Simulador Dinâmico de Economia:** Slider interativo que calcula economia mensal, anual e acumulada em 25 anos e sincroniza diretamente com o formulário.
- **Player de Vídeo Modal Vertical (Padrão Erro-Zero):** Card 3:4 com botão de play que abre modal responsivo fullscreen (`9:16`), com fechamento via `Escape`, clique externo ou botão.
- **Captação Webhook + UTMs:** Envio assíncrono em JSON para `https://webhook.waelo.com.br/webhook/feiraoforz` capturando `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid` e `fbclid`.
- **Fluxo Pós-Conversão & Fuga Zero:**
  - Modal celebrativo pós-envio com botão de destaque **"Entrar no Grupo do Feirão"**.
  - Botão flutuante de WhatsApp (`5562981209985`) ativado **somente após o preenchimento do formulário**.

## Configuração Rápida (`.env`)
```env
VITE_WEBHOOK_URL=https://webhook.waelo.com.br/webhook/feiraoforz
VITE_WHATSAPP_NUMBER=5562981209985
VITE_WHATSAPP_GROUP_URL=https://chat.whatsapp.com/SEU_LINK_DO_GRUPO
VITE_VIDEO_URL=https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=1&rel=0
```

## Deploy na Hostinger ("Implante seu app web em Node.js")
1. No painel da Hostinger (`hpanel.hostinger.com`), acesse **Sites → Implante seu app web em Node.js → Faça upload dos arquivos**.
2. Envie o arquivo `feirao-solar-forz-hostinger-webapp.zip`.
3. A Hostinger detectará automaticamente `Vite`, executará `npm run build` e publicará a pasta `dist`.
4. Conecte o subdomínio `feirao.forzenergia.com.br` nas configurações do app na Hostinger.
