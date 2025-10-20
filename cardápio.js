document.getElementById('payment').addEventListener('change', function () {
    const trocoGroup = document.getElementById('troco-group');
    if (this.value === 'Dinheiro') {
        trocoGroup.style.display = 'block';
        document.getElementById('troco').setAttribute('required', 'required');
    } else {
        trocoGroup.style.display = 'none';
        document.getElementById('troco').removeAttribute('required');
        document.getElementById('troco').value = '';
    }
});

document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const items = [
        { checkboxName: 'Pizza', quantityName: 'quantityPizza' },
        { checkboxName: 'Hambúrguer', quantityName: 'quantityHamburguer' },
        { checkboxName: 'Refrigerante', quantityName: 'quantityRefri' },
    ];

    const selectedItems = [];
    let totalPrice = 0;
    const deliveryFee = 10; // taxa de entrega fixa

    items.forEach(item => {
        const checkbox = document.querySelector(`input[name="item"][value="${item.checkboxName}"]`);
        const quantityInput = document.querySelector(`input[name="${item.quantityName}"]`);

        if (checkbox.checked && quantityInput.value > 0) {
            const quantity = parseInt(quantityInput.value);
            const price = parseFloat(checkbox.dataset.price);
            selectedItems.push({
                name: item.checkboxName,
                quantity,
                price,
                subtotal: price * quantity,
            });
            totalPrice += price * quantity;
        }
    });

    if (selectedItems.length === 0) {
        alert('Por favor, selecione pelo menos um item e quantidade.');
        return;
    }

    const bairro = document.getElementById('bairro').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const complemento = document.getElementById('complemento').value.trim();

    if (!bairro || !numero || !complemento) {
        alert('Por favor, preencha bairro, número e complemento.');
        return;
    }

    const payment = document.getElementById('payment').value;
    if (!payment) {
        alert('Por favor, selecione a forma de pagamento.');
        return;
    }

    const troco = document.getElementById('troco').value.trim();
    if (payment === 'Dinheiro' && !troco) {
        alert('Por favor, informe para quanto deseja troco.');
        return;
    }

    const totalWithDelivery = totalPrice + deliveryFee;

    let message = `Pedido feito pelo cliente:
`;
    selectedItems.forEach(item => {
        message += `${item.quantity}x ${item.name} - R$${item.subtotal.toFixed(2)}
`;
    });
    message += `Taxa de entrega: R$${deliveryFee.toFixed(2)}
`;
    message += `Total: R$${totalWithDelivery.toFixed(2)}
`;
    message += `Endereço: Bairro ${bairro}, Número ${numero}, Complemento ${complemento}
`;
    message += `Forma de pagamento: ${payment}
`;
    if (payment === 'Dinheiro') {
        message += `Troco para: ${troco}
`;
    }

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5511934946547'; // substitua pelo número real
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
});