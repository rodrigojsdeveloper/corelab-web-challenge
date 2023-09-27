<div align="center">
<h1>Frontend Corelab Challenge</h1>
<p>
CoreNote é um aplicativo da web que possibilita aos usuários a criação e administração de suas próprias listas de tarefas. O aplicativo compreende uma página da web responsiva com funcionalidades avançadas, complementada por uma API robusta para armazenamento e gerenciamento eficaz das listas de tarefas.
</p>
</div>

<br/>

## Tecnologias

Seguintes ferramentas foram usadas neste projeto:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Router DOM](https://reactrouter.com/en/main/)
- [Helmet](https://github.com/nfl/react-helmet/)
- [Yup](https://github.com/jquense/yup/)
- [Vite](https://vitejs.dev/)

<br />

## Instalação do Projeto

Projeto desenvolvido no backend com Node e no frontend com React.

### 1. Instalação das dependencias

Execute a instalação das dependências executando o `yarn` na raiz do projeto.

### 2. Iniciando o Projeto

Na raiz do projeto execute o seguinte comando:

```
yarn dev
```

Em seguida, abra o projeto em seu navegador.

Acesse o projeto em:

#### Link do projeto

```
http://localhost:5173
```

### 3. Iniciando o Projeto no Docker

Na raiz do projeto rode os seguintes comando:

```
# Construa a imagem Docker para a pasta atual e com `dockerized-react`

docker build . -t dockerized-react


# Verifique se a imagem foi criada

docker images | grep dockerized-react


# Execute a imagem no modo desanexado e mapeie a porta 5173 dentro do contêiner com 5173 no host atual

docker run -p 5173:5173 -d dockerized-react
```

A flag -d executa o projeto em segundo plano, liberando o terminal para outros usos.

<br/>
<p align="center">Feito por <a href="https://www.linkedin.com/in/rodrigo-de-jesus-silva/">Rodrigo Silva</a></p>
