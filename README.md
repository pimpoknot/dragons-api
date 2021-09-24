

## Tecnologias usadas
[ReactJS](https://pt-br.reactjs.org/) / 
[NextJS](https://nextjs.org/)<br>
[Typescript](https://www.typescriptlang.org/) - Com objetivo de tipar nossos objetos para que torne a manutenção mais simples no futuro.<br>
[Next Router](https://nextjs.org/docs/api-reference/next/router#userouter) - Como nossa aplicação tem muitas funcionalidade de navegação, decidir usar o next/router por conta de sua flexbilidade e usabilidade simples. <br>
[Next Auth](https://next-auth.js.org/) - Para uma funcionalidade prática de autenticação, o NextAuth nos fornece uma documentação bem estruturada

## Páginas de Componentes

- Header: esse componente fica responsável pelas funcionaliades do Header que contem o botão de Logout.
- SignInModal: Esse Componente fica responsável pela tela inicial, dentro dele existe toda a lógica para fazer Login
- DragonsModal: Aqui fica o modal quando acessado os detalhes de cada dragão

## Como instalar e rodar o projeto

Para instalar o projeto basta digitar:
```bash
npm install
# ou
yarn
```
Para rodar o projeto basta digitar: 

```bash
npm run dev
# ou
yarn dev
```



Abra [http://localhost:3000](http://localhost:3000) no seu navegador apóis iniciar o projeto.

## Bibliotecas

- [React-icon]()
- [React-hook-form]()
- [moment]()

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
