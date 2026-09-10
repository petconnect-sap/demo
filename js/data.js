/* =======================================================================
   DADOS + ESTADO
   Tudo que é "conteúdo" do protótipo mora aqui: estado da sessão,
   credenciais de demonstração, lista fictícia de animais e constantes
   visuais. Ao portar para outra linguagem, este é o arquivo que vira
   banco de dados / camada de modelo.
   Ver README.md › Modelo de dados do animal.
   ======================================================================= */

/* ---------- Estado global da sessão ---------- */
let state = {
    screen: "dashboard",
    usuario: "Patinhas Felizes",
    periodo: "Trimestral",
};

/* ---------- Credenciais da conta de demonstração ---------- */
const DEMO_USER = "patinhasfelizes";
const DEMO_PASS = "123456";

/* ---------- Lista fictícia de animais ----------
   Os 7 primeiros reproduzem os nomes/idades/status exatos da imagem de
   dashboard enviada. Os demais dão volume/variedade para os filtros. */
let ANIMALS = [
    {
        id: 1,
        nome: "Alfredo",
        tipo: "Gato",
        sexo: "Macho",
        raca: "Rajado",
        idadeMeses: 5,
        idadeLabel: "5 meses",
        status: "Disponível",
        cadastro: "2026-08-10",
        vacinas: "V4, Antirrábica",
        medicamentos: "",
        descricao: "Muito brincalhão, se dá bem com outros gatos.",
    },
    {
        id: 2,
        nome: "Timóteo",
        tipo: "Cachorro",
        sexo: "Macho",
        raca: "SRD",
        idadeMeses: 12,
        idadeLabel: "1 ano",
        status: "Em breve",
        cadastro: "2026-08-14",
        vacinas: "V8, Antirrábica",
        medicamentos: "Vermífugo (em curso)",
        descricao: "Ainda em observação veterinária antes da adoção.",
    },
    {
        id: 3,
        nome: "Pipoca",
        tipo: "Gato",
        sexo: "Fêmea",
        raca: "SRD",
        idadeMeses: 8,
        idadeLabel: "8 meses",
        status: "Em breve",
        cadastro: "2026-08-16",
        vacinas: "V3",
        medicamentos: "",
        descricao: "Aguardando castração antes de ficar disponível.",
    },
    {
        id: 4,
        nome: "Melissa",
        tipo: "Gato",
        sexo: "Fêmea",
        raca: "Siamês",
        idadeMeses: 15,
        idadeLabel: "1 ano e 3 meses",
        status: "Em processo",
        cadastro: "2026-08-19",
        vacinas: "V4, Antirrábica",
        medicamentos: "",
        descricao: "Processo de adoção em andamento com a família Souza.",
    },
    {
        id: 5,
        nome: "Tofu",
        tipo: "Gato",
        sexo: "Macho",
        raca: "SRD",
        idadeMeses: 36,
        idadeLabel: "3 anos",
        status: "Disponível",
        cadastro: "2026-08-21",
        vacinas: "V4, Antirrábica",
        medicamentos: "",
        descricao: "Gosta de colo, ótimo para apartamento.",
    },
    {
        id: 6,
        nome: "Annakin",
        tipo: "Cachorro",
        sexo: "Macho",
        raca: "Vira-lata caramelo",
        idadeMeses: 9,
        idadeLabel: "9 meses",
        status: "Disponível",
        cadastro: "2026-08-23",
        vacinas: "V8",
        medicamentos: "",
        descricao: "Muito energético, precisa de espaço para brincar.",
    },
    {
        id: 7,
        nome: "Elis Regina",
        tipo: "Cachorro",
        sexo: "Fêmea",
        raca: "SRD",
        idadeMeses: 25,
        idadeLabel: "2 anos e 1 mês",
        status: "Disponível",
        cadastro: "2026-08-24",
        vacinas: "V10, Antirrábica",
        medicamentos: "",
        descricao: "Calma, já andou na coleira algumas vezes.",
    },
    {
        id: 8,
        nome: "Luna",
        tipo: "Gato",
        sexo: "Fêmea",
        raca: "SRD",
        idadeMeses: 18,
        idadeLabel: "1 ano e 6 meses",
        status: "Disponível",
        cadastro: "2026-08-08",
        vacinas: "V4, Antirrábica",
        medicamentos: "",
        descricao: "Um pouco arisca no início, mas afetuosa depois.",
    },
    {
        id: 9,
        nome: "Nina",
        tipo: "Gato",
        sexo: "Fêmea",
        raca: "Tricolor",
        idadeMeses: 2,
        idadeLabel: "2 meses",
        status: "Em processo",
        cadastro: "2026-08-05",
        vacinas: "V3 (1ª dose)",
        medicamentos: "",
        descricao: "Filhote, ainda em fase de vacinação.",
    },
    {
        id: 10,
        nome: "Rex",
        tipo: "Cachorro",
        sexo: "Macho",
        raca: "Rottweiler",
        idadeMeses: 36,
        idadeLabel: "3 anos",
        status: "Adotado",
        cadastro: "2026-07-30",
        vacinas: "V10, Antirrábica",
        medicamentos: "",
        descricao: "Adotado pela família Lima em julho.",
    },
    {
        id: 11,
        nome: "Bidu",
        tipo: "Outro",
        sexo: "Macho",
        raca: "Hamster sírio",
        idadeMeses: 5,
        idadeLabel: "5 meses",
        status: "Em breve",
        cadastro: "2026-07-25",
        vacinas: "Não aplicável",
        medicamentos: "",
        descricao: "Resgatado, aguardando avaliação veterinária.",
    },
    {
        id: 12,
        nome: "Mimosa",
        tipo: "Outro",
        sexo: "Fêmea",
        raca: "Coelho anão",
        idadeMeses: 7,
        idadeLabel: "7 meses",
        status: "Disponível",
        cadastro: "2026-07-20",
        vacinas: "Não aplicável",
        medicamentos: "",
        descricao: "Dócil, já se alimenta bem sozinha.",
    },
    {
        id: 13,
        nome: "Thor",
        tipo: "Cachorro",
        sexo: "Macho",
        raca: "Pastor alemão",
        idadeMeses: 48,
        idadeLabel: "4 anos",
        status: "Disponível",
        cadastro: "2026-07-12",
        vacinas: "V10, Antirrábica",
        medicamentos: "",
        descricao: "Muito dócil, bom com crianças.",
    },
    {
        id: 14,
        nome: "Pandora",
        tipo: "Gato",
        sexo: "Fêmea",
        raca: "Cinza e branca",
        idadeMeses: 120,
        idadeLabel: "10 anos",
        status: "Em processo",
        cadastro: "2026-07-05",
        vacinas: "V4, Antirrábica",
        medicamentos: "Suplemento renal",
        descricao: "Gata idosa, precisa de lar tranquilo.",
    },
    {
        id: 15,
        nome: "Amora",
        tipo: "Cachorro",
        sexo: "Fêmea",
        raca: "Vira-lata caramelo",
        idadeMeses: 60,
        idadeLabel: "5 anos",
        status: "Adotado",
        cadastro: "2026-06-28",
        vacinas: "V10, Antirrábica",
        medicamentos: "",
        descricao: "Adotada pela família Ferreira em junho.",
    },
    {
        id: 16,
        nome: "Bento",
        tipo: "Cachorro",
        sexo: "Macho",
        raca: "SRD",
        idadeMeses: 96,
        idadeLabel: "8 anos",
        status: "Disponível",
        cadastro: "2026-06-15",
        vacinas: "V10, Antirrábica",
        medicamentos: "Anti-inflamatório (artrose)",
        descricao: "Sênior tranquilo, ideal para tutores mais caseiros.",
    },
];

/* ---------- Constantes visuais ---------- */
const STATUS_COLOR = {
    "Disponível": "var(--green)",
    "Em processo": "var(--blue)",
    "Adotado": "var(--pink)",
    "Em breve": "var(--orange)",
};
const TIPO_EMOJI = { "Gato": "🐱", "Cachorro": "🐶", "Outro": "🐰" };

/* ---------- Dados fictícios por período (usados só no dashboard) ----------
   "Trimestral" NÃO está aqui: reflete o estado real de ANIMALS.
   Os outros 3 períodos usam números e recortes fictícios diferentes,
   só para demonstrar a troca visual dos cards e da tabela. */
const PERIOD_DATA = {
    Mensal: {
        stats: {
            "Disponível": 3,
            "Em processo": 1,
            "Em breve": 2,
            "Adotado": 1,
        },
        recentesIds: [7, 6, 5, 4, 3],
    },
    Semestral: {
        stats: {
            "Disponível": 14,
            "Em processo": 6,
            "Em breve": 5,
            "Adotado": 5,
        },
        recentesIds: [7, 6, 5, 13, 14, 15, 16],
    },
    Anual: {
        stats: {
            "Disponível": 22,
            "Em processo": 9,
            "Em breve": 7,
            "Adotado": 8,
        },
        recentesIds: [7, 10, 15, 13, 14, 16, 9],
    },
};

function faixaEtaria(meses) {
    if (meses < 12) return "Filhote";
    if (meses < 36) return "Jovem";
    if (meses < 84) return "Adulto";
    return "Sênior";
}
