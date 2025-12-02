// --- SEUS DADOS AQUI ---
// Você pode editar os nomes e categorias diretamente abaixo
const data = {
    "Convites e Comunicação": [
      { item: "Convite para Impressão", tipo: "Digital/Impresso", custo: 0, venda: 0 },
      { item: "Convite Digital", tipo: "Digital", custo: 0, venda: 0 },
      { item: "Convite Animado", tipo: "Digital", custo: 0, venda: 0 },
      { item: "Save the Date Digital", tipo: "Digital", custo: 0, venda: 0 },
      { item: "Card de Agradecimento", tipo: "Digital", custo: 0, venda: 0 },
      { item: "Tags de Agradecimento", tipo: "Impresso", custo: 0, venda: 0 },
    ],
    "Decoração": [
      { item: "Displays de Mesa", tipo: "Impresso", custo: 0, venda: 0 },
      { item: "Pôsteres Decorativos", tipo: "Impresso", custo: 0, venda: 0 },
      { item: "Totens (Pequenos)", tipo: "Impresso", custo: 0, venda: 0 },
      { item: "Painéis A4/A3", tipo: "Impresso", custo: 0, venda: 0 },
      { item: "Painel Grande (Arte)", tipo: "Arte Digital", custo: 0, venda: 0 },
      { item: "Bandeirolas", tipo: "Impresso", custo: 0, venda: 0 },
      { item: "Faixa de Parabéns", tipo: "Impresso", custo: 0, venda: 0 },
      { item: "Guirlanda com Nome", tipo: "Impresso", custo: 0, venda: 0 },
      { item: "Moldura Polaroid", tipo: "Impresso", custo: 0, venda: 0 },
    ],
    "Mesa e Doces": [
      { item: "Topo de Bolo", tipo: "Impresso", custo: 0, venda: 0 },
      { item: "Números 3D (Molde)", tipo: "Molde", custo: 0, venda: 0 },
      { item: "Tags para Docinhos", tipo: "Impresso", custo: 0, venda: 0 },
      { item: "Wrappers de Cupcake", tipo: "Impresso", custo: 0, venda: 0 },
      { item: "Rótulos para Doces", tipo: "Adesivo", custo: 0, venda: 0 },
      { item: "Toppers Diversos", tipo: "Impresso", custo: 0, venda: 0 },
      { item: "Toppers 3 Camadas", tipo: "Papelaria", custo: 0, venda: 0 },
      { item: "Menu da Festa", tipo: "Impresso", custo: 0, venda: 0 },
    ],
    "Caixas e Lembranças": [
      { item: "Cachepot", tipo: "Caixa", custo: 0, venda: 0 },
      { item: "Sacolinha Surpresa", tipo: "Caixa", custo: 0, venda: 0 },
      { item: "Caixa Cubo", tipo: "Caixa", custo: 0, venda: 0 },
      { item: "Caixa Milk", tipo: "Caixa", custo: 0, venda: 0 },
      { item: "Caixa Pirâmide", tipo: "Caixa", custo: 0, venda: 0 },
      { item: "Caixa Sushi", tipo: "Caixa", custo: 0, venda: 0 },
      { item: "Caixa Bala", tipo: "Caixa", custo: 0, venda: 0 },
      { item: "Caixa Coração", tipo: "Caixa", custo: 0, venda: 0 },
      { item: "Caixa Pipoca", tipo: "Caixa", custo: 0, venda: 0 },
      { item: "Caixa Explosão Mini", tipo: "Caixa", custo: 0, venda: 0 },
    ],
    "Rótulos e Adesivos": [
      { item: "Tubete Personalizado", tipo: "Adesivo", custo: 0, venda: 0 },
      { item: "Caixinha Acrílica", tipo: "Adesivo", custo: 0, venda: 0 },
      { item: "Rótulos Chocolates", tipo: "Adesivo", custo: 0, venda: 0 },
      { item: "Garrafinhas", tipo: "Adesivo", custo: 0, venda: 0 },
      { item: "Potinhos", tipo: "Adesivo", custo: 0, venda: 0 },
      { item: "Etiquetas Diversas", tipo: "Adesivo", custo: 0, venda: 0 },
    ],
    "Kits Festa": [
      { item: "Kit Festa Básico", tipo: "Combo", custo: 0, venda: 0 },
      { item: "Kit Festa Médio", tipo: "Combo", custo: 0, venda: 0 },
      { item: "Kit Festa Premium", tipo: "Combo", custo: 0, venda: 0 },
      { item: "Mega Pacote Completo", tipo: "Combo", custo: 0, venda: 0 },
    ],
    "Papelaria e Educacional": [
      { item: "Capa de Planner", tipo: "Papelaria", custo: 0, venda: 0 },
      { item: "Miolo de Caderno", tipo: "Papelaria", custo: 0, venda: 0 },
      { item: "Capa de Caderno", tipo: "Papelaria", custo: 0, venda: 0 },
      { item: "Marcadores de Página", tipo: "Papelaria", custo: 0, venda: 0 },
      { item: "Adesivos (Stickers)", tipo: "Digital", custo: 0, venda: 0 },
      { item: "Cartazes Educativos", tipo: "Educacional", custo: 0, venda: 0 },
    ],
    "Sublimação": [
      { item: "Arte para Camiseta", tipo: "Arte Digital", custo: 0, venda: 0 },
      { item: "Arte para Caneca", tipo: "Arte Digital", custo: 0, venda: 0 },
      { item: "Arte para Almofada", tipo: "Arte Digital", custo: 0, venda: 0 },
    ]
};

let currentCategory = Object.keys(data)[0];

// Função para iniciar a aplicação
function init() {
    renderSidebar();
    renderTable(currentCategory);
}

// Renderiza o menu lateral
function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = ''; // Limpa

    Object.keys(data).forEach(category => {
        const btn = document.createElement('button');
        btn.innerText = category;
        if (category === currentCategory) btn.classList.add('active');
        
        btn.onclick = () => {
            currentCategory = category;
            renderSidebar(); // Atualiza a classe ativa
            renderTable(category);
        };
        sidebar.appendChild(btn);
    });
}

// Renderiza a tabela principal
function renderTable(category) {
    const title = document.getElementById('category-title');
    const count = document.getElementById('item-count');
    const tbody = document.getElementById('table-body');
    const items = data[category];

    title.innerText = category;
    count.innerText = `${items.length} itens`;
    tbody.innerHTML = '';

    items.forEach((row, index) => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td><strong>${row.item}</strong></td>
            <td><span class="tag-tipo">${row.tipo}</span></td>
            <td>
                <input type="number" step="0.10" value="${row.custo}" 
                 onchange="updateValue('${category}', ${index}, 'custo', this.value)">
            </td>
            <td>
                <input type="number" step="0.10" value="${row.venda}" 
                 onchange="updateValue('${category}', ${index}, 'venda', this.value)">
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    // Atualiza ícones do Lucide
    lucide.createIcons();
}

// Atualiza os valores na memória quando você digita
function updateValue(category, index, field, value) {
    data[category][index][field] = value;
}

// Função para Baixar CSV
function downloadCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Categoria,Item,Tipo,Preço Custo,Preço Venda\n";

    Object.keys(data).forEach(category => {
        data[category].forEach(row => {
            csvContent += `${category},"${row.item}","${row.tipo}",${row.custo},${row.venda}\n`;
        });
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "tabela_produtos_festa.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Inicia tudo
init();