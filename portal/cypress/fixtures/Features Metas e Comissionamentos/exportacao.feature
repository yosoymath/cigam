Funcionalidade: Exportação
    Como um usuário do sistema Portal Web
    (Usuário) quer realizar a Exportação do Comissionamento no módulo de Metas e Comissionamento
    Para que tenha acesso ao CPF e a Comissão para funcionários da Empresa dentro da Meta.

Cenário: Exportar comissão de vendedores para a Empresa e o Período escolhido
    Dado que (Usuário) possui uma conta no sistema
    E ele faz login e entra na página inicial do Portal Web
    E ele acessa o Módulo "Outras Opções", em seguida "Metas e Comissionamento" no menu lateral
    Quando ele preenche as opções necessárias para realizar a exportação da comissão (Empresa e Período)
    E clica no botão "Exportar Comissionamento"
    Então deve ser feito o download de um arquivo com a extensão .csv com as informações dos vendedores (CPF e Comissão)