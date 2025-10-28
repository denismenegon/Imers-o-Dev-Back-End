Este projeto é o backend de uma API RESTful para um sistema de rede social simples, focado em gerenciamento de posts com imagens. Ele utiliza o Express para roteamento, MongoDB como banco de dados, e o Google Gemini API para gerar automaticamente o alt-text das imagens (descrição da imagem para acessibilidade).

✨ Funcionalidades Principais
API RESTful: Rotas para listar, criar e atualizar posts.

Upload de Imagens: Utilização do multer para upload de imagens para um diretório local (uploads/).

MongoDB: Persistência de dados utilizando o MongoDB Atlas (ou local) através do mongodb driver.

Geração de Alt-Text com IA: Integração com a API Gemini para gerar descrições em português (alt-text) para as imagens carregadas.

CORS Configurado: Permite requisições de um frontend específico (http://localhost:8000).

🛠️ Tecnologias Utilizadas
Node.js (Ambiente de Execução)

Express (Framework Web)

MongoDB (Banco de Dados NoSQL)

@google/generative-ai (Para Geração de Descrição de Imagem)

Multer (Middleware para upload de arquivos)

dotenv (Para Gerenciamento de Variáveis de Ambiente)

cors (Para Controle de Acesso)

⚙️ Configuração e Instalação
Pré-requisitos
Node.js (versão 14 ou superior)

Conta no MongoDB Atlas e String de Conexão.

Chave de API do Google Gemini.
