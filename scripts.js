 function adicionarCarrinho(produto) {
            alert("🛒 " + produto + " foi adicionado ao carrinho!");
        }
        
let carrinho = [];

  function adicionarCarrinho(produto, preco) {
    // Adiciona ao array carrinho
    carrinho.push({ nome: produto, preco: preco });
    
    // Atualiza a lista do carrinho na tela
    atualizarCarrinho();
    
    // Alerta de confirmação
    alert("✅ " + produto + " foi adicionado ao carrinho!");
  }

  function atualizarCarrinho() {
    const lista = document.getElementById("itensCarrinho");
    const total = document.getElementById("totalCarrinho");
    
    lista.innerHTML = "";
    let soma = 0;

    carrinho.forEach(item => {
      soma += item.preco;
      lista.innerHTML += `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`;
    });

    total.innerHTML = `<strong>Total:</strong> R$ ${soma.toFixed(2)}`;
  }

  function finalizarCompra() {
    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio 🛒");
      return;
    }
    alert("💳 Redirecionando para o pagamento...");
    // Aqui você pode colocar link para a página de pagamento
    // window.location.href = "pagamento.html";
  }

  function BtnComprar(){
    let comprar = document.getElementById("comprarProduo")
    let total = document.getElementById("totalProduto")
    

  }
        