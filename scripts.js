 function adicionarCarrinho(produto) {
            alert("🛒 " + produto + " foi adicionado ao carrinho!");
        }
        
let carrinho = [];
let total = 0;

function adicionarCarrinho(produto) {
  let preco = 0;

  // Definir preço de cada produto
  if (produto === "Ração Premium") preco = 79.9;
  else if (produto === "Brinquedo de Borracha") preco = 25;
  else if (produto === "Shampoo Suave") preco = 39.9;

  carrinho.push({ nome: produto, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("itensCarrinho");
  const totalEl = document.getElementById("totalCarrinho");

  lista.innerHTML = "";
  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  alert("✅ Compra finalizada com sucesso! Obrigado por comprar conosco!");
  carrinho = [];
  total = 0;
  atualizarCarrinho();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const botaoTema = document.getElementById("temaBtn");
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  botaoTema.textContent =
    document.body.classList.contains("dark") ? "☀️ Modo Claro" : "🌙 Modo Escuro";
});

window.onload = () => {
  alert("🐾 Bem-vindo ao PetShop do Freire!");
};

// Função para validar e finalizar o pagamento
function finalizarPagamento() {
  const nome = document.querySelector('input[name="nome_cartao"]').value.trim();
  const numero = document.querySelector('input[name="validade"]').value.trim();
  const cvv = document.querySelector('input[name="cvv"]').value.trim();
  const metodo = document.querySelector('select[name="metodo"]').value;

  if (nome === "" || numero === "" || cvv === "") {
    alert("⚠️ Preencha todos os campos antes de finalizar o pagamento!");
    return;
  }

  // Simular verificação do cartão
  if (cvv.length !== 3 || isNaN(cvv)) {
    alert("❌ CVV inválido. Digite 3 números.");
    return;
  }

  // Simulação de processamento de pagamento
  alert("💳 Processando pagamento...");
  
  setTimeout(() => {
    // Simulação de sucesso no pagamento
    alert(`✅ Pagamento realizado com sucesso via ${metodo}! Obrigado por comprar conosco 🐶`);
    
    // Limpar formulário e carrinho
    document.querySelector('.pagamento form').reset();
    document.getElementById("itensCarrinho").innerHTML = "";
    document.getElementById("totalCarrinho").textContent = "Total: R$ 0,00";
    carrinho = [];
    total = 0;
  }, 2000);
}
