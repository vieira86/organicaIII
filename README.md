# Química Orgânica II — Plataforma de Apoio ao Estudante

Site estático de apoio à disciplina de Química Orgânica II do curso de Licenciatura em Química do
IFRO, Campus Ji-Paraná. Traz flashcards, quizzes, vídeo-aulas curadas do YouTube e atividades
práticas de elucidação estrutural.

Não há build, framework ou dependências — é HTML, CSS e JavaScript puro, pronto para publicar no
GitHub Pages.

## Estrutura de arquivos

```
site/
├── index.html          → Página inicial
├── flashcards.html      → Flashcards por tópico
├── quizzes.html         → Quizzes por tópico
├── videos.html          → Vídeo-aulas do YouTube
├── praticas.html        → Exercícios resolvidos de elucidação estrutural
├── autor.html           → Página do autor
└── assets/
    ├── css/style.css
    ├── js/
    │   ├── topics-data.js      → Metadados dos 8 tópicos da ementa
    │   ├── flashcards-data.js  → Banco de flashcards
    │   ├── quizzes-data.js     → Banco de questões
    │   ├── videos-data.js      → Vídeos do YouTube por tópico
    │   ├── app.js               → Navegação e utilitários
    │   ├── flashcards.js
    │   ├── quizzes.js
    │   └── videos.js
    └── img/rafael.jpg
```

## 1. Publicar no GitHub Pages

1. Crie um repositório novo no GitHub.
2. Envie todo o conteúdo desta pasta (`site/`) para a raiz do repositório.
3. No repositório, vá em **Settings → Pages**.
4. Em "Build and deployment", selecione **Deploy from a branch**, branch `main`, pasta `/ (root)`.
5. Salve. Em alguns minutos o site estará em `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.

## 2. Editar ou expandir o conteúdo

Todo o conteúdo pedagógico vive em três arquivos de dados, sem necessidade de mexer no HTML:

- **Flashcards** → `assets/js/flashcards-data.js`. Cada tópico é uma lista de objetos `{ q, a }`.
- **Quizzes** → `assets/js/quizzes-data.js`. Cada questão é `{ q, options: [4 alternativas], correct: índice, explain }`.
- **Vídeos** → `assets/js/videos-data.js`. Cada vídeo é `{ id (ID do YouTube), title, channel, desc }`.

Para adicionar um novo tópico à ementa, inclua-o em `assets/js/topics-data.js` e depois adicione as
chaves correspondentes nos três arquivos de dados acima.

## 3. Trocar a foto do autor

Substitua o arquivo `assets/img/rafael.jpg` por uma nova imagem com o mesmo nome, ou atualize o
caminho em `autor.html` (atributo `src` da tag `<img class="author-photo">`).

## 4. Rodar localmente antes de publicar

Como não há build, basta servir a pasta com qualquer servidor estático, por exemplo:

```bash
cd site
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador. (Abrir os arquivos `.html` diretamente com
duplo clique também funciona.)
