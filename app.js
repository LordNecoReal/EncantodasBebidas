const bebidas = [
    {
        nome: 'Benção do Corvo Dourado',
        descricao: 'Bebida cremosa e doce com banana e leite condensado.',
        imagem: 'https://png.pngtree.com/png-vector/20241002/ourmid/pngtree-golden-raven-with-wings-png-image_13995833.png',
        categoria: ['doce', 'cremosa'],
        ingredientes: [
            '1 banana madura',
            '100 ml de leite integral',
            '2 colheres de sopa de leite condensado',
            '1 pitada de canela em pó',
            'Gelo a gosto'
        ],
        preparo: 'Em um liquidificador, adicione 1 banana madura picada, 100 ml de leite integral e 2 colheres de sopa de leite condensado. Bata bem até obter uma mistura homogênea e cremosa. Sirva em um copo e adicione uma pitada de canela em pó por cima. Acrescente gelo a gosto.'
    },
    {
        nome: 'Explosão Cítrica',
        descricao: 'Refrescante mistura de limão, laranja e hortelã.',
        imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
        categoria: ['citrica', 'refrescante'],
        ingredientes: [
            '50 ml de suco de limão fresco',
            '50 ml de suco de laranja natural',
            '5-7 folhas de hortelã fresca',
            '150 ml de água com gás',
            'Gelo a gosto'
        ],
        preparo: 'Em um copo, coloque 5-7 folhas de hortelã e amasse levemente para liberar o aroma. Adicione 50 ml de suco de limão fresco e 50 ml de suco de laranja natural. Acrescente gelo a gosto e complete com 150 ml de água com gás. Mexa delicadamente e sirva imediatamente.'
    },
    {
        nome: 'Doce Paixão',
        descricao: 'Suco de morango com toque de mel e leite condensado.',
        imagem: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
        categoria: ['doce', 'cremosa'],
        ingredientes: [
            '150 g de morangos frescos',
            '100 ml de leite integral',
            '2 colheres de sopa de leite condensado',
            '1 colher de chá de mel',
            'Gelo a gosto'
        ],
        preparo: 'Lave e pique 150 g de morangos frescos. Em um liquidificador, adicione os morangos, 100 ml de leite integral, 2 colheres de sopa de leite condensado e 1 colher de chá de mel. Bata tudo até ficar homogêneo. Sirva gelado com gelo a gosto.'
    },
    {
        nome: 'Verão Tropical',
        descricao: 'Combinação refrescante de abacaxi e hortelã.',
        imagem: 'https://cdn-icons-png.flaticon.com/512/415/415733.png',
        categoria: ['refrescante', 'citrica'],
        ingredientes: [
            '100 g de abacaxi picado',
            '8-10 folhas de hortelã fresca',
            '200 ml de água de coco',
            'Gelo a gosto'
        ],
        preparo: 'Em um liquidificador, coloque 100 g de abacaxi picado e 8-10 folhas de hortelã fresca. Adicione gelo a gosto e 200 ml de água de coco. Bata bem até obter uma mistura homogênea. Sirva imediatamente em um copo alto.'
    },
    {
        nome: 'Doce Encanto',
        descricao: 'Milkshake de baunilha com calda de caramelo.',
        imagem: 'https://cdn-icons-png.flaticon.com/512/191/191662.png',
        categoria: ['doce', 'cremosa'],
        ingredientes: [
            '200 ml de leite integral gelado',
            '2 bolas grandes de sorvete de baunilha',
            '2 colheres de sopa de calda de caramelo',
            'Gelo a gosto (opcional)'
        ],
        preparo: 'Em um liquidificador, adicione 200 ml de leite integral gelado, 2 bolas grandes de sorvete de baunilha e 2 colheres de sopa de calda de caramelo. Bata até a mistura ficar cremosa e homogênea. Se desejar uma consistência mais grossa, adicione mais sorvete; para mais líquida, mais leite. Sirva em um copo e decore com mais calda de caramelo por cima, se preferir. Gelo é opcional, pois o sorvete já resfria a bebida.'
    },
    {
        nome: 'Limonada Menta Fresh',
        descricao: 'Limonada refrescante com hortelã e toque cítrico.',
        imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046786.png',
        categoria: ['citrica', 'refrescante'],
        ingredientes: [
            'Suco de 3 limões grandes',
            '10-12 folhas de hortelã fresca',
            '500 ml de água gelada',
            'Açúcar a gosto (ou 2-3 colheres de sopa)',
            'Gelo a gosto'
        ],
        preparo: 'Esprema o suco de 3 limões grandes. Em uma jarra, adicione o suco de limão, 10-12 folhas de hortelã amassadas levemente e o açúcar (ou 2-3 colheres de sopa, ajustando a gosto). Despeje 500 ml de água gelada e mexa bem até o açúcar dissolver. Adicione bastante gelo e sirva.'
    },
    {
        nome: 'Frutas do Bosque',
        descricao: 'Suco doce de frutas vermelhas com toque refrescante.',
        imagem: 'https://cdn-icons-png.flaticon.com/512/415/415759.png',
        categoria: ['doce', 'refrescante'],
        ingredientes: [
            '100 g de frutas vermelhas congeladas (morango, amora, framboesa)',
            '100 ml de suco de maçã integral',
            '150 ml de água com gás',
            'Gelo a gosto'
        ],
        preparo: 'Bata as frutas com suco de maçã, sirva com gelo e complete com água com gás.'
    },
    {
        nome: 'Paraíso Azul',
        descricao: 'Bebida exótica e refrescante com notas de coco e abacaxi.',
        imagem: 'https://cdn-icons-png.flaticon.com/512/2883/2883833.png',
        categoria: ['doce', 'refrescante'],
        ingredientes: [
            '50 ml de xarope de curaçao blue (não alcoólico)',
            '100 ml de suco de abacaxi gelado',
            '50 ml de leite de coco',
            'Gelo a gosto',
            'Fatia de abacaxi ou cereja para decorar'
        ],
        preparo: 'Em uma coqueteleira, adicione o xarope de curaçao blue, o suco de abacaxi gelado, o leite de coco e bastante gelo. Bata vigorosamente por cerca de 15 segundos. Coe a bebida para um copo alto e decore com uma fatia de abacaxi na borda ou uma cereja. Sirva imediatamente.'
    },
    {
        nome: 'Néctar Revigorante',
        descricao: 'Sabor agridoce de maracujá com um toque especial de gengibre.',
        imagem: 'https://cdn-icons-png.flaticon.com/512/415/415744.png',
        categoria: ['citrica', 'refrescante'],
        ingredientes: [
            'Polpa de 1 maracujá grande (com sementes)',
            '20 ml de xarope de gengibre (ou 1 rodela fina de gengibre picada com 1 colher de sopa de açúcar)',
            '150 ml de água com gás bem gelada',
            'Gelo a gosto',
            'Folhas de hortelã fresca para decorar'
        ],
        preparo: 'Se usar gengibre fresco, amasse a rodela picada com o açúcar no fundo do copo. Em um liquidificador, bata a polpa do maracujá (com as sementes, se preferir) com o xarope de gengibre (ou a mistura amassada). Coe para um copo com gelo, descartando as sementes se não gostar. Complete com água com gás bem gelada. Misture suavemente e decore com folhas de hortelã. Sirva imediatamente.'
    },
    {
        nome: 'Sonho de Morango e Chocolate',
        descricao: 'Combinação clássica e irresistível de morango e chocolate, perfeita para os amantes de doces.',
        imagem: 'https://cdn-icons-png.flaticon.com/512/415/415748.png',
        categoria: ['doce', 'cremosa'],
        ingredientes: [
            '100 g de morangos frescos ou congelados',
            '50 ml de calda de chocolate (para o milkshake e decoração)',
            '150 ml de leite integral gelado',
            '2 bolas grandes de sorvete de chocolate',
            'Gelo a gosto (opcional, se usar morangos frescos)'
        ],
        preparo: 'Em um liquidificador, adicione 100 g de morangos (frescos ou congelados), 30 ml da calda de chocolate, 150 ml de leite integral gelado e 2 bolas grandes de sorvete de chocolate. Se usar morangos frescos, adicione gelo a gosto. Bata até obter uma mistura cremosa e homogênea. Despeje em um copo grande e decore com o restante da calda de chocolate por cima. Sirva imediatamente.'
    },
    // Bebidas Salgadas e Cítricas
    {
        nome: 'Bloody Mary Clássico',
        descricao: 'Cocktail salgado e picante com vodka e suco de tomate.',
        imagem: 'https://cdn-icons-png.flaticon.com/512/415/415750.png',
        categoria: ['salgada', 'citrica'],
        ingredientes: [
            '50 ml de vodka',
            '100 ml de suco de tomate gelado',
            '15 ml de suco de limão fresco',
            '3-4 gotas de molho inglês (Worcestershire)',
            '2-3 gotas de molho de pimenta (Tabasco)',
            '1 pitada de sal de aipo (ou sal comum)',
            '1 pitada de pimenta do reino moída na hora',
            'Gelo a gosto',
            'Talo de aipo e fatia de limão para decorar'
        ],
        preparo: 'Em um copo alto, adicione gelo. Despeje 50 ml de vodka, 100 ml de suco de tomate gelado e 15 ml de suco de limão fresco. Adicione 3-4 gotas de molho inglês, 2-3 gotas de molho de pimenta, 1 pitada de sal de aipo (ou sal comum) e 1 pitada de pimenta do reino. Mexa bem com uma colher longa. Decore com um talo de aipo e uma fatia de limão. Sirva imediatamente.'
    },
    {
        nome: 'Margarita Verde',
        descricao: 'Margarita cítrica e salgada com um toque de pepino.',
        imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046777.png',
        categoria: ['salgada', 'citrica', 'refrescante'],
        ingredientes: [
            '60 ml de tequila prata',
            '30 ml de suco de limão fresco',
            '20 ml de licor de laranja (Cointreau ou Triple Sec)',
            '3-4 rodelas finas de pepino',
            'Sal para a borda do copo',
            'Gelo a gosto',
            'Fatia de limão ou pepino para decorar'
        ],
        preparo: 'Passe uma fatia de limão na borda de um copo de margarita ou copo baixo e mergulhe em sal para criar uma borda salgada. Em uma coqueteleira, amasse suavemente 3-4 rodelas finas de pepino. Adicione 60 ml de tequila prata, 30 ml de suco de limão fresco e 20 ml de licor de laranja. Encha a coqueteleira com gelo e bata vigorosamente por cerca de 15 segundos. Coe para o copo preparado com gelo novo. Decore com uma fatia de limão ou pepino. Sirva imediatamente.'
    },
    {
        nome: 'Michelada Picante',
        descricao: 'Cerveja temperada com suco de limão, molhos e pimenta.',
        imagem: 'https://cdn-icons-png.flaticon.com/512/415/415764.png',
        categoria: ['salgada', 'citrica', 'refrescante'],
        ingredientes: [
            '350 ml de cerveja clara gelada',
            '30 ml de suco de limão fresco',
            '15 ml de molho inglês (Worcestershire)',
            '10 ml de molho de pimenta (Tabasco ou similar)',
            '1 pitada de sal',
            '1 pitada de pimenta do reino moída',
            'Molho de pimenta líquido para a borda (opcional)',
            'Sal grosso ou temperado para a borda (opcional)',
            'Gelo a gosto'
        ],
        preparo: 'Se desejar, umedeça a borda de um copo grande (tipo caneca ou pint) com molho de pimenta líquido e passe no sal grosso ou temperado. Em seguida, adicione gelo ao copo. Despeje 30 ml de suco de limão fresco, 15 ml de molho inglês, 10 ml de molho de pimenta, 1 pitada de sal e 1 pitada de pimenta do reino. Misture bem os temperos no fundo do copo. Por último, complete cuidadosamente com 350 ml de cerveja clara gelada. Mexa suavemente para incorporar e sirva imediatamente.'
    }
];

const container = document.getElementById('drinkContainer');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const searchInput = document.getElementById('searchInput');

function mostrarBebidas(lista) {
    container.innerHTML = '';
    if(lista.length === 0){
        container.innerHTML = '<p>Nenhuma bebida encontrada.</p>';
        return;
    }
    lista.forEach(drink => {
        const div = document.createElement('div');
        div.className = 'drink';
        div.tabIndex = 0;
        div.innerHTML = `
            <img src="${drink.imagem}" alt="${drink.nome}" />
            <div class="drink-info">
                <h3>${drink.nome}</h3>
                <p>${drink.descricao}</p>
            </div>
        `;
        div.onclick = () => abrirModal(drink);
        div.onkeypress = (e) => { if(e.key==='Enter') abrirModal(drink); };
        container.appendChild(div);
    });
}

function filtrarBebidas(categoria) {
    if(categoria === 'todas'){
        mostrarBebidas(bebidas);
    } else {
        const filtradas = bebidas.filter(d => d.categoria.includes(categoria));
        mostrarBebidas(filtradas);
    }
}

function pesquisarBebidas() {
    const termoPesquisa = searchInput.value.toLowerCase();
    const bebidasFiltradas = bebidas.filter(drink =>
        drink.nome.toLowerCase().includes(termoPesquisa) ||
        drink.descricao.toLowerCase().includes(termoPesquisa) ||
        drink.categoria.some(cat => cat.toLowerCase().includes(termoPesquisa)) ||
        drink.ingredientes.some(ing => ing.toLowerCase().includes(termoPesquisa))
    );
    mostrarBebidas(bebidasFiltradas);
}

function abrirModal(drink) {
    modalContent.innerHTML = `
        <button id="modalCloseBtn" onclick="fecharModal()">Fechar</button>
        <img src="${drink.imagem}" alt="${drink.nome}" />
        <h2>${drink.nome}</h2>
        <p>${drink.descricao}</p>
        <h3>Ingredientes:</h3>
        <ul>${drink.ingredientes.map(i => `<li>${i}</li>`).join('')}</ul>
        <h3>Modo de preparo:</h3>
        <p>${drink.preparo}</p>
    `;
    modal.classList.add('show');
}

function fecharModal() {
    modal.classList.remove('show');
}

// Adiciona a funcionalidade de pesquisa ao apertar "Enter"
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        pesquisarBebidas();
    }
});

// --- Controle de música ---

const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggleButton = document.getElementById('musicToggleButton');
// O estado da música será diretamente backgroundMusic.muted e !backgroundMusic.paused

function toggleMusic() {
    // Se a música está mutada OU pausada, tentar tocar e desmutar
    if (backgroundMusic.muted || backgroundMusic.paused) {
        backgroundMusic.muted = false; // Tentar desmutar
        const playPromise = backgroundMusic.play(); // Tentar tocar

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Sucesso: música tocando e desmutada
                musicToggleButton.textContent = 'Pausar Música'; // Ou "Música: On"
                musicToggleButton.classList.add('playing');
            })
            .catch(error => {
                // Falha: Autoplay bloqueado pelo navegador
                console.log("Autoplay de áudio bloqueado pelo navegador (com som):", error);
                // Se não conseguir tocar com som, manter mutado e não alterar o texto do botão
                backgroundMusic.muted = true; // Garante que continua mutado se o play com som falhou
                musicToggleButton.textContent = 'Tocar Música'; // Ou "Música: Off"
                musicToggleButton.classList.remove('playing');
                // Opcional: tentar tocar mutado se o play com som falhou (para garantir que esteja pelo menos em loop)
                // backgroundMusic.play().catch(e => console.log("Não foi possível tocar mutado após bloqueio:", e));
            });
        }
    } else {
        // Se a música está tocando e desmutada, então mutar/pausar
        backgroundMusic.muted = true; // Muta a música
        // backgroundMusic.pause(); // Opcional: pausar totalmente se preferir parar de consumir recurso
        musicToggleButton.textContent = 'Tocar Música'; // Ou "Música: Off"
        musicToggleButton.classList.remove('playing');
    }
}

// Tenta reproduzir a música mutada no carregamento, para que ela esteja em loop em silêncio
// O usuário pode então desmutar/ativar via botão.
document.addEventListener('DOMContentLoaded', () => {
    mostrarBebidas(bebidas); // Garante que as bebidas são mostradas ao carregar
    
    // Tenta tocar a música mutada. Isso tem uma chance muito alta de funcionar.
    backgroundMusic.muted = true;
    backgroundMusic.play().then(() => {
        console.log("Autoplay silencioso (mutado) iniciado com sucesso. Música em loop em segundo plano.");
        // Não altera o texto do botão, pois ela está mutada.
        // O botão ainda deve ser clicado para desmutar.
    }).catch(error => {
        console.log("Autoplay silencioso (mutado) bloqueado na inicialização:", error);
        // Se nem o autoplay mutado funcionar, a música só tocará via clique do usuário.
    });
});