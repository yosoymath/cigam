Funcionalidade: Pesquisa
    Como um usuário do sistema Portal Web
    (Usuário) quer realizar a pesquisa de Metas e Comissões
    Para que ele tenha acesso às funcionalidades e Informações do Módulo

Cenário: Pesquisa Válida com parâmetros: Empresa e Período
    Dado que (Usuário) possui uma conta no sistema
    E ele faz login e entra na página inicial do Portal Web
    E ele acessa o Módulo "Outras Opções", em seguida "Metas e Comissionamento" no menu lateral
    Quando ele preenche as opções necessárias para realizar a pesquisa (Empresa e Período)
    E clica no botão "Pesquisar"
    Então deve ser carregado todas as informações atreladas aos funcionários da Empresa, no período selecionado.