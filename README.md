
### Desenvolvido por: 
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/marcos-maverick-091321101/">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHGgHQzwANMqw/profile-displayphoto-shrink_800_800/0/1596469756072?e=1638403200&v=beta&t=GWjdapw-tKaS8NAoFR2ok4gfW4ewhmct16n7Ms8-Ua8" width="100px;" alt="Foto do Iuri Silva no GitHub"/><br>
        <sub>
          <b>Marcos Maverick</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


---

## Tecnologias usadas
[ReactJS](https://pt-br.reactjs.org/) / 
[NextJS](https://nextjs.org/)<br>
[Typescript](https://www.typescriptlang.org/)<br>
[Next Router](https://nextjs.org/docs/api-reference/next/router#userouter)<br>
[Next Auth](https://next-auth.js.org/)<br>
[SASS](https://sass-lang.com/)

---

## 📁 Estrutura das páginas de Componentes

 Header : Esse componente fica responsável pelas funcionaliades do Header que contem o botão de Logout. <br><br>
SignInModal: Esse Componente fica responsável pela tela inicial, dentro dele existe toda a lógica para fazer Login <br><br>
 DragonsModal: Aqui fica o modal quando acessado os detalhes de cada dragão<br><br>
 Buttons: Alguns botões principais estão nesse componente<br><br>
 DeniedAccess: Componente que checa de usuario ta logado ou não, podendo liberar a lista de dragões<br><br>
ErrorModal: Visual do Modal para tratativa caso ocorra algum erro de requisição da API.<br>
 Form  Esse componente fica responsável pela validação do formulário de edição dos dragões.<br>

 DragonTable Aqui fica toda estrutura da lista de dragões da HOME quando está em modo tabela.<br>

 DragonCards Aqui fica toda estrutura da lista de dragões da HOME quando está em modo CARD.<br>

---
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

Abra [http://localhost:3000](http://localhost:3000) no seu navegador após iniciar o projeto.

---
## Bibliotecas

- [React-icon](https://react-icons.github.io/react-icons/) 
- [React-hook-form](https://react-hook-form.com/)
- [moment](https://momentjs.com/)
- [Axios](https://www.npmjs.com/package/axios)

---

### Typescript
- Com objetivo de tipar nossos objetos para que torne a manutenção mais simples no futuro.
### Next Router
 - Como nossa aplicação tem muitas funcionalidade de navegação, decidir usar o next/router por conta de sua flexbilidade e usabilidade simples.
### NextAuth
- Para uma funcionalidade prática de autenticação, o NextAuth nos fornece uma documentação bem estruturada.
### ChrakraUI
- Com propósito de facilitar criação de Divs, e organizar o CSS de maneira mais simples.
### momentJS
- Para tratar nosso CreatedAt e formatar de maneira simples
### Axios
- Para consumir API foi escolhido o axios por puro costume com a ferramenta. Porém, poderia consumir sem problemas usando apenas JS.

### React-hook-form
- Por se tratar de uma biblioteca robusta e com nivel de praticidade elevada, ela nos deixa preocupar somente com o form deixando toda parte de validação e estrutura toda pronta. Além de ser uma ótima alida por conta dos Hooks.

---

## Test Check
 ## Página de login
 [ ✅ ] - Única página disponível se não estiver logado <br>
 [ ✅ ] - Criar um usuário básico para acesso<br>
 - [ ⚠️ ] OBS: (Caso não consigar autenticar pelo Login/senha poderá logar com Github ou Google)<br>

---

 ## Uma página de lista de dragões:
 [ ✅ ] - Os nomes devem estar em ordem alfabética; <br>
 [ ✅ ] - A partir da lista, deverá ser possível remover e alterar as informações dos dragões. <br>
  ### Bônus
  [ ✅ ] - Botão para trocar a visualizaçaõ de Lista para Cards

 ---

 ## Uma página com os detalhes de um dragão específico:
 [ ✅ ]  - Os seguintes dados devem ser apresentados na página: - Data de criação; - Nome; - Tipo; <br>

---

 ## Uma página para cadastro de dragões 
 [ ✅ ] - Página de cadastro de dragões

 
---

 ## API


 http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon

Lista de dragões: GET .../api/v1/dragon <br>
Detalhes de dragões: GET .../api/v1/dragon/:id<br>
Criação de um dragão: POST .../api/v1/dragon<br>
Edição de um dragão: PUT .../api/v1/dragon/:id<br>
Deleção de um dragão: DELETE .../api/v1/dragon/:id<br>



 



