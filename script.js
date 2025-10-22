document.addEventListener('DOMContentLoaded', () => {
  const taxaEntrega = 5.0;
  const whatsappNumero = '5511934946547'; // Substitua pelo seu número real

  const produtos = {
    pratos: [
      {nome: "Arroz com Feijão", descricao: "Arroz branco, feijão carioca e temperos.", preco: 15, img: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/080352c4-02c6-47b6-a224-8bc7d36cceb0.png"},
      {nome: "Frango Grelhado", descricao: "Peito de frango grelhado com ervas.", preco: 22, img: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/080352c4-02c6-47b6-a224-8bc7d36cceb0.png"},
      {nome: "Bife Acebolado", descricao: "Bife com cebola refogada.", preco: 25, img: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/080352c4-02c6-47b6-a224-8bc7d36cceb0.png"},
      {nome: "Lasanha à Bolonhesa", descricao: "Lasanha tradicional com molho bolonhesa.", preco: 30, img: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/080352c4-02c6-47b6-a224-8bc7d36cceb0.png"},
      {nome: "Estrogonofe de Carne", descricao: "Carne ao molho cremoso com champignon.", preco: 28, img: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/080352c4-02c6-47b6-a224-8bc7d36cceb0.png"},
      {nome: "Moqueca de Peixe", descricao: "Peixe ao molho de dendê e leite de coco.", preco: 35, img: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/080352c4-02c6-47b6-a224-8bc7d36cceb0.png"},
      {nome: "Escondidinho de Carne", descricao: "Purê de mandioca com carne seca.", preco: 27, img: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/080352c4-02c6-47b6-a224-8bc7d36cceb0.png"},
      {nome: "Feijoada Completa", descricao: "Feijoada tradicional com acompanhamentos.", preco: 33, img: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/080352c4-02c6-47b6-a224-8bc7d36cceb0.png"},
      {nome: "Picadinho", descricao: "Carne picada com ovos e batata.", preco: 23, img: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/080352c4-02c6-47b6-a224-8bc7d36cceb0.png"},
      {nome: "Cuscuz Paulista", descricao: "Farinha de milho com legumes e sardinha.", preco: 18, img: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/080352c4-02c6-47b6-a224-8bc7d36cceb0.png"}
    ],
    lanches: [
      {nome: "X-Burguer", descricao: "Hambúrguer com queijo, alface e tomate.", preco: 18, img: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/080352c4-02c6-47b6-a224-8bc7d36cceb0.png"},
      {nome: "Cachorro Quente", descricao: "Salsicha com molho especial no pão.", preco: 15, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Sanduíche Natural", descricao: "Pão integral com frango e salada.", preco: 20, img: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/080352c4-02c6-47b6-a224-8bc7d36cceb0.png"},
      {nome: "Misto Quente", descricao: "Presunto e queijo no pão tostado.", preco: 12, img: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/080352c4-02c6-47b6-a224-8bc7d36cceb0.png"},
      {nome: "Beirute", descricao: "Pão sírio com carne, queijo e salada.", preco: 22, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Salada no Pão", descricao: "Salada fresca no pão francês.", preco: 14, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Hambúrguer Vegano", descricao: "Hambúrguer à base de grão-de-bico.", preco: 25, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "X-Egg", descricao: "Hambúrguer com ovo frito e queijo.", preco: 20, img: ""},
      {nome: "Cheeseburguer", descricao: "Hambúrguer simples com queijo.", preco: 17, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Sanduíche de Atum", descricao: "Pão com atum e maionese.", preco: 19, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"}
    ],
    pizzas: [
      {nome: "Margherita", descricao: "Molho de tomate, mussarela, manjericão.", preco: 35, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Calabresa", descricao: "Molho de tomate, calabresa, cebola.", preco: 40, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Frango com Catupiry", descricao: "Frango desfiado com catupiry.", preco: 45, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Portuguesa", descricao: "Presunto, ovo, cebola e azeitonas.", preco: 42, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Quatro Queijos", descricao: "Mussarela, provolone, gorgonzola e parmesão.", preco: 50, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Marguerita Especial", descricao: "Margherita com tomate seco.", preco: 48, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Napolitana", descricao: "Tomate, manjericão, alho e rúcula.", preco: 44, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Vegetariana", descricao: "Legumes variados e queijo.", preco: 38, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Bacon", descricao: "Molho de tomate, queijo e bacon.", preco: 46, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Chocolate", descricao: "Pizza doce com chocolate derretido.", preco: 40, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"}
    ],
    pasteis: [
      {nome: "Pastel de Queijo", descricao: "Massa crocante com queijo derretido.", preco: 10, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Pastel de Carne", descricao: "Carne moída temperada.", preco: 12, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Pastel de Pizza", descricao: "Presunto, queijo e tomate.", preco: 14, img: ""},
      {nome: "Pastel de Frango", descricao: "Frango desfiado com requeijão.", preco: 13, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Pastel de Palmito", descricao: "Palmito com temperos.", preco: 15, img: ""},
      {nome: "Pastel de Camarão", descricao: "Camarão temperado.", preco: 18, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Pastel de Chocolate", descricao: "Chocolate ao leite.", preco: 12, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Pastel de Banana", descricao: "Banana com canela.", preco: 11, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"},
      {nome: "Pastel de Calabresa", descricao: "Calabresa picante.", preco: 15, img: ""},
      {nome: "Pastel de Queijo com Orégano", descricao: "Queijo polvilhado com orégano.", preco: 10, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"}
    ]
  };

  function criaProdutoCard(produto, categoria) {
    const article = document.createElement('article');
    article.className = 'produto';

    const img = document.createElement('img');
    img.src = produto.img || '';
    img.alt = produto.nome;
    article.appendChild(img);

    const titulo = document.createElement('h3');
    titulo.textContent = produto.nome;
    article.appendChild(titulo);

    const descricao = document.createElement('p');
    descricao.className = 'descricao';
    descricao.textContent = produto.descricao;
    article.appendChild(descricao);

    // Campo observações
    const obsLabel = document.createElement('label');
    obsLabel.textContent = 'Observações:';
    article.appendChild(obsLabel);

    const textareaObs = document.createElement('textarea');
    textareaObs.className = 'observacao';
    textareaObs.placeholder = 'Ex: sem cebola, bem passado...';
    article.appendChild(textareaObs);

    // Container quantidade com botoes + e -
    const qtdeContainer = document.createElement('div');
    qtdeContainer.className = 'quantidade-container';

    const btnMenos = document.createElement('button');
    btnMenos.type = 'button';
    btnMenos.textContent = '-';
    qtdeContainer.appendChild(btnMenos);

    const inputQtde = document.createElement('input');
    inputQtde.type = 'number';
    inputQtde.className = 'quantidade';
    inputQtde.min = '1';
    inputQtde.value = '1';
    qtdeContainer.appendChild(inputQtde);

    const btnMais = document.createElement('button');
    btnMais.type = 'button';
    btnMais.textContent = '+';
    qtdeContainer.appendChild(btnMais);

    article.appendChild(qtdeContainer);

    const btnAdd = document.createElement('button');
    btnAdd.className = 'adicionar';
    btnAdd.textContent = 'Adicionar';
    btnAdd.dataset.nome = produto.nome;
    btnAdd.dataset.preco = produto.preco;
    btnAdd.dataset.categoria = categoria;
    article.appendChild(btnAdd);

    btnMenos.addEventListener('click', () => {
      let val = parseInt(inputQtde.value);
      if (val > 1) inputQtde.value = val - 1;
    });

    btnMais.addEventListener('click', () => {
      let val = parseInt(inputQtde.value);
      inputQtde.value = val + 1;
    });

    return article;
  }

  Object.keys(produtos).forEach(categoria => {
    const container = document.querySelector(`#${categoria} .produtos`);
    produtos[categoria].forEach(produto => {
      container.appendChild(criaProdutoCard(produto, categoria));
    });
  });

  function atualizarContadorCarrinho() {
    const contador = document.getElementById('icone-contador');
    const carrinhoLocal = JSON.parse(localStorage.getItem('carrinho')) || [];
    let totalQtd = 0;
    carrinhoLocal.forEach(item => totalQtd += item.quantidade);
    contador.textContent = totalQtd;
  }

  function atualizarCarrinho() {
    const itensDiv = document.getElementById('itens-carrinho');
    const totalP = document.getElementById('total');
    const carrinhoLocal = JSON.parse(localStorage.getItem('carrinho')) || [];

    itensDiv.innerHTML = '';

    if (carrinhoLocal.length === 0) {
      itensDiv.textContent = 'Carrinho vazio!';
      totalP.textContent = '';
      return;
    }

    let soma = 0;
    carrinhoLocal.forEach((item, i) => {
      const div = document.createElement('div');
      div.textContent =
        `${item.quantidade}x ${item.nome} (Obs: ${item.observacao || 'Nenhuma'}) - R$ ${(item.preco * item.quantidade).toFixed(2)}`;
      itensDiv.appendChild(div);
      soma += item.preco * item.quantidade;
    });

    const total = soma + taxaEntrega;
    totalP.textContent = `Total (incluindo taxa R$ ${taxaEntrega.toFixed(2)}): R$ ${total.toFixed(2)}`;
  }

  function adicionarAoCarrinho(item) {
    if (item.quantidade < 1) {
      alert('Quantidade deve ser pelo menos 1');
      return;
    }
    let carrinhoLocal = JSON.parse(localStorage.getItem('carrinho')) || [];
    const index = carrinhoLocal.findIndex(i => i.nome === item.nome && i.observacao === item.observacao);
    if (index >= 0) {
      carrinhoLocal[index].quantidade += item.quantidade;
    } else {
      carrinhoLocal.push(item);
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinhoLocal));
    atualizarContadorCarrinho();
  }

  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('adicionar')) {
      const artigo = e.target.closest('.produto');
      const nome = e.target.dataset.nome;
      const preco = parseFloat(e.target.dataset.preco);
      const categoria = e.target.dataset.categoria;
      const textareaObs = artigo.querySelector('textarea.observacao');
      const observacao = textareaObs ? textareaObs.value.trim() : '';
      const quantidade = parseInt(artigo.querySelector('input.quantidade').value);

      adicionarAoCarrinho({nome, preco, observacao, quantidade, categoria});
      alert(`${quantidade}x ${nome} adicionado ao carrinho.`);
    }
  });

  const btnCarrinho = document.getElementById('btn-carrinho');
  const modalCarrinho = document.getElementById('modal-carrinho');
  const btnFecharCarrinho = document.getElementById('btn-fechar-carrinho');
  const btnFinalizar = document.getElementById('btn-finalizar');
  const modalPedido = document.getElementById('modal-pedido');

  btnCarrinho.addEventListener('click', () => {
    atualizarCarrinho();
    modalCarrinho.style.display = 'block';
  });

  btnFecharCarrinho.addEventListener('click', () => {
    modalCarrinho.style.display = 'none';
  });

  const pagamentoSelect = document.getElementById('pagamento');
  const trocoLabel = document.getElementById('troco-label');
  pagamentoSelect.addEventListener('change', () => {
    if (pagamentoSelect.value === 'dinheiro') {
      trocoLabel.style.display = 'block';
      trocoLabel.querySelector('input').required = true;
    } else {
      trocoLabel.style.display = 'none';
      trocoLabel.querySelector('input').required = false;
      trocoLabel.querySelector('input').value = '';
    }
  });

  document.getElementById('btn-cancelar-pedido').addEventListener('click', () => {
    modalPedido.style.display = 'none';
  });

  btnFinalizar.addEventListener('click', () => {
    modalCarrinho.style.display = 'none';

    const carrinhoLocal = JSON.parse(localStorage.getItem('carrinho')) || [];
    if (carrinhoLocal.length === 0) {
      alert('Carrinho está vazio!');
      return;
    }

    modalPedido.style.display = 'block';
  });

  const btnEnviarWhats = document.getElementById('btn-enviar-whatsapp');
  const formPedido = document.getElementById('form-pedido');

  function montarMensagemPedido() {
    const carrinhoLocal = JSON.parse(localStorage.getItem('carrinho'));
    if (!carrinhoLocal || carrinhoLocal.length === 0) {
      alert('Carrinho está vazio!');
      modalPedido.style.display = 'none';
      return null;
    }

    const nome = formPedido.nome.value.trim();
    const rua = formPedido.rua.value.trim();
    const numero = formPedido.numero.value.trim();
    const bairro = formPedido.bairro.value.trim();
    const complemento = formPedido.complemento.value.trim() || '-';
    const pagamento = formPedido.pagamento.value;
    const troco = formPedido.troco.value;

    let message = `Pedido feito via Cardápio Online

Cliente: ${nome}
Endereço: ${rua}, Nº ${numero}
Bairro: ${bairro}
Complemento: ${complemento}

Itens:
`;

    let soma = 0;
    carrinhoLocal.forEach(item => {
      const valorItem = item.preco * item.quantidade;
      soma += valorItem;
      message += `- ${item.quantidade} x ${item.nome} (Obs: ${item.observacao || '-'}) = R$ ${valorItem.toFixed(2)}
`;
    });
    message += `
Taxa de entrega: R$ ${taxaEntrega.toFixed(2)}
`;
    const total = soma + taxaEntrega;
    message += `Total: R$ ${total.toFixed(2)}

Forma de pagamento: ${pagamento.toUpperCase()}
`;
    if (pagamento === 'dinheiro') {
      if (troco) message += `Troco para: R$ ${parseFloat(troco).toFixed(2)}
`;
      else message += 'Sem troco';
    }

    return encodeURIComponent(message);
  }

  function verificarValidadeForm() {
    btnEnviarWhats.disabled = !formPedido.checkValidity();
  }

  formPedido.addEventListener('input', verificarValidadeForm);

  btnEnviarWhats.addEventListener('click', () => {
    const mensagem = montarMensagemPedido();
    if (mensagem) {
      const url = `https://wa.me/${whatsappNumero}?text=${mensagem}`;
      window.open(url, '_blank');
      localStorage.removeItem('carrinho');
      atualizarContadorCarrinho();
      modalPedido.style.display = 'none';
      formPedido.reset();
      btnEnviarWhats.disabled = true;
    }
  });

  atualizarContadorCarrinho();
});