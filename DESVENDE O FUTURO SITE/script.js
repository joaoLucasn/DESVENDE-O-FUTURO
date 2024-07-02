const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPerguntas = document.querySelector(".caixa-perguntas");

const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre um canal misterioso no YouTube que parece interagir de maneira única com seus espectadores, contando histórias malucas sobre viagens no tempo. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Fico super curioso e continuo assistindo para ver onde isso vai dar!",
                afirmacao: "Ficou totalmente intrigado com as histórias malucas do canal misterioso."
            },
            {
                texto: "Fico meio assustado e penso se devo continuar assistindo isso...",
                afirmacao: "Teve um leve medo do que poderia vir dessas histórias."
            }
        ]
    },
    {
        enunciado: "No próximo vídeo, o narrador fala sobre um cara que descobre uma máquina do tempo. Como você acha que ele reage?",
        alternativas: [
            {
                texto: "Ele pirou com a ideia de viajar pro passado e pro futuro. Queria aprender tudo sobre a máquina!",
                afirmacao: "Imaginou que o cara ficou animado com as viagens temporais."
            },
            {
                texto: "Ele ficou meio cabreiro, pensando nos problemas éticos e paradoxos malucos das viagens no tempo.",
                afirmacao: "Achou que o cara tava meio na defensiva, pensando nas tretas que isso podia causar."
            }
        ]
    },
    {
        enunciado: "O canal continua explorando várias paradas sobre viagens no tempo, tipo se dá pra mudar o passado e tal. O narrador pergunta qual é a sua opinião. E aí, o que você diz?",
        alternativas: [
            {
                texto: "Acho que mudar o passado é perigoso pra caramba, pode dar ruim demais!",
                afirmacao: "Expressou a preocupação com os riscos de mexer com o passado."
            },
            {
                texto: "Mano, se dá pra melhorar o futuro voltando atrás, por que não, né?",
                afirmacao: "Defendeu a ideia de que mudar o passado podia abrir umas portas legais pro futuro."
            }
        ]
    },
    {
        enunciado: "Chegou a vez de criar uma imagem que representa sua visão sobre viagens no tempo. Qual é a sua vibe pra montar essa imagem?",
        alternativas: [
            {
                texto: "Vou usar um app de edição massa pra criar um cenário de viagem no tempo!",
                afirmacao: "Optou por usar ferramentas digitais de ponta pra fazer uma imagem surreal de viagem no tempo."
            },
            {
                texto: "Vou criar um vídeo com uns efeitos de viagem no tempo!",
                afirmacao: "Decidiu fazer um vídeo com efeitos visuais que mostram o que seria uma viagem no tempo."
            }
        ]
    },
    {
        enunciado: "No último vídeo, o narrador joga uma bomba: um cara usa a máquina do tempo pra mudar um evento histórico chave. E agora, como você reage?",
        alternativas: [
            {
                texto: "Acho que é loucura mudar a história assim, pode criar uma treta que ninguém tá pronto pra lidar...",
                afirmacao: "Reconheceu a importância de pensar bem antes de mexer nos eventos históricos."
            },
            {
                texto: "Se isso pode melhorar o futuro, quem sabe, né? Às vezes é bom arriscar!",
                afirmacao: "Acreditou que mudar certos eventos históricos podia trazer coisas boas pro futuro."
            }
        ]
    }
];






let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Após assistir o video...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
