
# API de Informações de Jogadores de Futebol

Esta é uma API desenvolvida em TypeScript que fornece informações sobre jogadores de futebol. Ela permite realizar consultas para obter dados sobre jogadores, incluindo seus nomes, datas de nascimento e IDs de equipe.

## Endpoints

### Obter todos os jogadores

```http
GET /api/v1/players
```

Retorna uma lista de todos os jogadores de futebol cadastrados.

#### Exemplo de resposta:

```json
[
    {
        "id": "1",
        "name": "Cristiano Ronaldo",
        "dateOfBirth": "1985-02-05",
        "teamId": "juventus"
    },
    {
        "id": "2",
        "name": "Lionel Messi",
        "dateOfBirth": "1987-06-24",
        "teamId": "psg"
    },
    ...
]
```

### Obter informações de um jogador específico

```http
GET /api/v1/players/:id
```

Retorna informações sobre um jogador específico com base no ID fornecido na URL.

#### Exemplo de resposta:

```json
{
    "id": "1",
    "name": "Cristiano Ronaldo",
    "dateOfBirth": "1985-02-05",
    "teamId": "juventus"
}
```

## Tecnologias Utilizadas

- TypeScript
- Node.js
- Express.js
- Zod
- PostgreSQL 
- Docker

## Pré-requisitos

- Node.js e Docker instalados
- PostgreSQL  configurado e em execução

## Como Usar

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/api-jogadores-futebol.git
```

2. Instale as dependências:

```bash
cd api-jogadores-futebol
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias, como a URL do banco de dados.

4. Inicie o servidor:

```bash
npm run dev
```

A API estará disponível em `http://localhost:3001`.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
