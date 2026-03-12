let vendas = []

const DESCONTO = 0.1

const form = document.getElementById("formVenda")
const corpoTabela = document.getElementById("corpoTabela")
const nome = document.getElementById("nomeVendedor")
const valor = document.getElementById("valorVenda")

function cadastrar() {

    if (!nome.value || !valor.value) {
        alert("Insira todos os campos")
        return
    }

    vendas.push({
        id: vendas.length + 1,
        data: new Date().toLocaleDateString("pt-BR"),
        nomeVendedor: nome.value,
        valorVenda: parseFloat(valor.value),
        desconto: DESCONTO,
        valorComDesconto: (valor.value * (1 - DESCONTO)).toFixed(2)
    })

    form.reset()
    renderizar()
}

function renderizar() {

    corpoTabela.innerHTML = vendas.map((v, i) => `
        <tr>
            <td>${v.id}</td>
            <td>${v.data}</td>
            <td>${v.nomeVendedor}</td>
            <td>${v.valorVenda.toFixed(2)}</td>
            <td>${(v.desconto*100).toFixed(0)}%</td>
            <td>${v.valorComDesconto}</td>
            <td><button onclick="remover(${i})">Remover</button></td>
        </tr>
    `).join("")
}

const remover = i => {
    vendas.splice(i,1)
    renderizar()
}

function limparCampos() {

    if (!vendas.length) {
        alert("Não existe venda para limpar!")
        return
    }

    vendas = []
    renderizar()
}