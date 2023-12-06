Funcionalidade: Importação
    Como um usuário do sistema Portal Web
    (Usuário) quer realizar a Importação de Metas no módulo de Metas e Comissionamento
    Para que ele cadastre a Meta para o funcionários da Empresa no período escolhido

Cenário: Importar Meta com períodos corretos
    Dado que (Usuário) possui uma conta no sistema
    E ele faz login e entra na página inicial do Portal Web
    E ele acessa o Módulo "Outras Opções", em seguida "Metas e Comissionamento" no menu lateral
    E ele clica no botão "Importar Metas"
    E ele clica no 2º botão "Aqui" 
    Quando ele importa o arquivo com a extensão .xslx conforme o padrão, mostrado na modal de "Importar Metas"
    Então deve ser carregado o arquivo no sistema, e retornar a mensagem em uma modal "Importação de Metas realizada com sucesso!".

Cenário: Importar Meta com erros de preenchimento
    Dado que (Usuário) possui uma conta no sistema
    E ele faz login e entra na página inicial do Portal Web
    E ele acessa o Módulo "Outras Opções", em seguida "Metas e Comissionamento" no menu lateral
    E ele clica no botão "Importar Metas"
    E ele clica no 2º botão "Aqui" 
    Quando ele importa o arquivo com a extensão .xslx fora do padrão mostrado 
    na modal de "Importar Metas", ou com algum erro de digitação, ex.: letra no lugar de número

    Então deve ser carregado o arquivo no sistema, e retornar a mensagem 
    em uma modal "Existem erros de preenchimento na planilha. Resolva os erros listados e tente novamente!".