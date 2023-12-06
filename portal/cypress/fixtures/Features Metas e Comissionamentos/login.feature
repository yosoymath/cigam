Funcionalidade: Login
    Como um usuário do sistema Portal Web
    (Usuário) quer completar o Login
    Para que ele tenha acesso às funcionalidades de usuário logado

Cenário: Login Válido
    Dado que (Usuário) possui uma conta no sistema
    E ele acessa a página de Login
    E ele preenche suas credenciais válidas
    Quando ele aciona a opção "Entrar" para fazer Login
    Então ele deve ser redirecionado para a página inicial do Portal Web de usuário logado
