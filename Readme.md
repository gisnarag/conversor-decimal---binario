# Conversor Decimal para Binário

---

## 🧠 Sobre o projeto

O projeto foi desenvolvido para converter um número decimal em seu equivalente binário e exibir o resultado ao usuário em uma interface com tema visual mais interativo.

### ⚙️ Como o código funciona

**Entrada**  
O usuário digita um número decimal em um campo de input.

**Processamento**  
Ao pressionar a tecla Enter ou clicar no botão, o valor inserido é capturado e enviado para a lógica de conversão.

**Saída**  
O valor convertido é exibido ao usuário em uma área específica da interface, identificada como "resultado".

### 🚧 Desafios encontrados

Durante o desenvolvimento, alguns desafios importantes foram:

- Associar corretamente o envio do valor do input ao evento de clique do botão  
- Entender como obter o resto da divisão utilizando operadores  
- Aplicar métodos que ainda não haviam sido estudados anteriormente  

Além disso, ocorreram alguns erros durante o processo:

- Dificuldade inicial com a lógica da conversão, resolvida com o uso de teste de mesa  
- Ajustes na lógica condicional para adicionar zeros à esquerda, garantindo a representação em nibble (4 bits) em casos especiais como 0 e 1 
- Construção da estrutura de repetição (loop) até atingir uma condição de parada adequada.

### 🚀 Possíveis melhorias

Algumas melhorias para tornar o código mais robusto, organizado e escalável:

#### 🔧 Separação de responsabilidades

Atualmente, funções como a conversão para binário também fazem atualização direta da interface (DOM).  
Uma abordagem mais organizada seria:

- Uma função apenas para **converter o número**
- Outra apenas para **exibir o resultado na tela**

**Por quê?**  
Isso torna o código mais reutilizável, mais fácil de testar e mais simples de manter.

#### 🧱 Uso de funções puras

A função de conversão poderia ser transformada em uma função pura, ou seja, que:

- Recebe um valor
- Retorna o resultado
- Não altera variáveis externas nem o DOM

**Por quê?**  
Funções puras são mais previsíveis e facilitam a reutilização do código em outros contextos.

#### 🧹 Remoção de variáveis globais desnecessárias

Variáveis como `binary`, `inputValue` e `number` estão declaradas fora das funções e podem causar efeitos colaterais.

Uma melhoria seria declarar essas variáveis dentro do escopo das funções onde são utilizadas.

**Por quê?**  
Reduz bugs, evita conflitos e melhora a legibilidade do código.

#### 🔁 Simplificação da lógica de repetição

A condição do loop:

```js
while (number / 2 !== 0)

pode ser simplificada para:

while (number > 0)

Por quê?
Fica mais claro, mais legível e evita possíveis comportamentos inesperados.

⚠️ Melhoria na validação de entrada

Atualmente, a validação impede caracteres não numéricos, mas pode ser aprimorada para:

Garantir que o valor não esteja vazio

Evitar números negativos

Dar feedback visual ao usuário em vez de usar alert

Por quê?
Melhora a experiência do usuário e torna a aplicação mais robusta.

🧩 Redução de código duplicado

A lógica para montar o resultado (uso de join e atualização do output) aparece em mais de um lugar.

Essa lógica pode ser centralizada em uma única função.

Por quê?
Evita repetição e facilita futuras alterações.

🐾 Melhoria na experiência do usuário

Algumas melhorias visuais e de interação podem ser adicionadas:

Mostrar mensagens de erro na interface em vez de alert

Adicionar animações ou feedback visual ao converter

Destacar o resultado quando ele for exibido

Por quê?
Torna a aplicação mais agradável e interativa para o usuário.

🔢 Expansão de funcionalidades

O projeto pode evoluir para suportar:

Conversão de binário para decimal

Conversão para hexadecimal

Exibição do passo a passo da conversão

Por quê?
Aumenta o valor do projeto e demonstra maior domínio lógico.