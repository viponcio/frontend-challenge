

# Introdução

<img src="https://hypetech.games/assets/images/branding/dark.png" alt="Hypetech" width="350"/>

Seja bem-vindo ao Desafio Prático de Frontend Hypetech.

A minha versão da implementação foi produzir o dark mode do Moto Grau.

#Motivação

Visto que o jogo é utilizado em outras plataformas de site de apostas, é necessário implementar a versão light e dark do jogo. Isso deixa o usuário livre para apostar conforme a sua necessidade.

A partir da ideia de desenvolver o tema dark e light, utilizei Daisy UI para me ajudar na tarefa pois vi que o sistema já tinha essa dependência.

Com o dark mode já funcionando eu fui melhorar a experiência do usuário em partes das quais a usabilidade tinha sido comprometida. As principais mudanças foram no chat, navbar, badges, como jogar, rodapé quando clica no modal de provably fair.  

## Sobre o Motograu

Com uma temática divertida e voltada ao público brasileiro, o **Motograu** é um jogo de categoria Crash, onde objetivo do jogador é **apostar no Motoqueiro e retirar sua aposta antes que o Cachorro Caramelo o derrube**.

Caso a aposta seja encerrada pelo jogador antes do Motoqueiro ser derrubado, o valor apostado é pago multiplicado pelo multiplicador do momento do cashout.

As rodadas são automáticas e os resultados são transmitidos ao vivo aos jogadores, fornecendo a todos os jogadores as mesmas probabilidades imparciais ao mesmo tempo, 24 horas por dia, 7 dias por semana.

![UI MotoGrau](https://i.ibb.co/42BnW3g/MotoGrau.png)

## Stacks
- React
- TailwindCss
- DaisyUi
- Websocket

# Instruções técnicas

Este projeto contém a aplicação das interfaces do jogo **Motograu**:

### 1. Clone o repositório:
```bash
git clone https://github.com/hypetechgames/frontend-challenge
```

### 2. Instale as dependências e inicie o projeto

Acesse a pasta do projeto:
```bash
cd frontend-challenge
```

Instale as dependências do projeto:
```bash
yarn install
```

Inicie o projeto:
```bash
yarn dev
```

### 3. Obtendo um token de acesso ao jogo

Para acessar o jogo é necessário obter um token de acesso que cria uma sessão demonstrativa funcional para desenvolvimento.

Para obtê-lo:

**1 - Acesse a API de Demonstração:** 
 https://hypetech-demo-api-service-developer.up.railway.app/docs/

**2 - Obtenha um link de demonstração:**	

	{ "gameUrl": "https://hypetech-games-ui-developer.up.railway.app/44cdf4cec80508c531f71a1929d591c8" }

**3 - Extraia o token obtido:**
~~https://hypetech-games-ui-developer.up.railway.app/~~**44cdf4cec80508c531f71a1929d591c8**


Exemplo: https://i.ibb.co/fp07Mxs/Screen-Recording-2024-01-08-at-17-59-36.gif


 ```json
"game": "motograu",
"lang": "pt",
"currency": "BRL"
```

**4 - Acesse o jogo:**
Uma vez obtido o token, utilize-o no seu ambiente de desenvolvimento:

**Exemplo - URL do seu ambiente:** http://localhost:8000/
**Exemplo - URL do jogo no seu ambiente:** http://localhost:8000/2b29acad3f7a1e6b0995155668719e66

Caso encontre dificuldade em obter o token seguindo processo acima, você poderá utilizar os tokens públicos abaixo *(ciente que outros desenvolvedores podem estar utilizando a mesma sessão ao mesmo tempo)*:

**Motograu:** 44cdf4cec80508c531f71a1929d591c8

