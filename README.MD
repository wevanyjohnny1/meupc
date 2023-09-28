# APP

MeuPC

# Contexto

Você está trabalhando em um projeto para uma loja de customização de computadores
online. A ideia é permitir que os clientes personalizem o seu próprio computador, escolhendo
entre diversas opções de hardware. Cada componente do computador terá regras
específicas de compatibilidade com outros componentes.

# Desafio

Desenvolva uma aplicação React com TypeScript que permita ao usuário customizar seu
computador seguindo as regras mencionadas acima. A aplicação deve exibir as opções
disponíveis para cada componente e aplicar as regras de compatibilidade dinamicamente.

## Requisitos

Utilize a Context API para gerenciar o estado global da aplicação.
Adicione uma barra de progresso que indica o progresso na customização do computador.
Forneça feedback visual sobre a compatibilidade das escolhas do usuário.

## Componentes disponíveis

### Placa Mãe

Placa Razor, Placa AMD e Placa Intel

### Memória

8GB, 16GB e 32GB

### Processador

i3, i5, i7 e i9

### HD/SSD

256GB SSD, 1TB HDD e 512GB SSD

### Placa de Vídeo

NVIDIA GTX 1660, AMD Radeon RX 580 e NVIDIA RTX 3070

# RFs (Requisitos funcionais)

- [ ] Deve ser possível acessar o app;
- [ ] As regras deverão ser consumidas de um arquivo JSON para que possam ser alteradas
      dinamicamente

## RNs (Regras de negócio)

- [ ] Se a placa mãe for Razor, os processadores disponíveis são i3 e i5
- [ ] Se a placa mãe for AMD os processadores disponíveis são i7 e i9
- [ ] Se a placa de vídeo for NVIDIA GTX 1660, a placa mãe deve ser do tipo Razor
- [ ] Se a placa mãe for intel, a memória deve ser no mínimo 16GB.
- [ ] Se o processador for i9, o HD/SSD deve ser no mínimo 512GB.

### RNFs (Requisitos não-funcionais)

# Entrega

Crie um repositório no GitHub e compartilhe o link para avaliação. Inclua instruções claras
sobre como configurar e executar o projeto.

## Avaliação

Serão avaliados a estrutura do código, a qualidade da implementação, a clareza dos
componentes, o uso adequado do TypeScript, a atenção aos detalhes de design, a lógica de
aplicação das regras e a capacidade de lidar com desafios complexos.

## Dica

Considere utilizar bibliotecas como styled-components para estilização e react-router-dom
para navegação entre as etapas da customização.
