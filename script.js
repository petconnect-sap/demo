/* =======================================================================
   ÍCONES — SVG inline (estilo stroke, sem dependência externa)
   ======================================================================= */
const ICONS = {
    dashboard:
        '<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    eyeOff: '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>',
    camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    arrowLeft:
        '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
};

function svgIcon(name, size, strokeColor) {
    return (
        '<svg width="' +
        size +
        '" height="' +
        size +
        '" viewBox="0 0 24 24" fill="none" stroke="' +
        (strokeColor || "currentColor") +
        '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        ICONS[name] +
        "</svg>"
    );
}

// Ícone da pata (marca / logo) — versão preenchida
function pawSvg(size, opacity) {
    const src =
        opacity === 1 ? "./assets/pata_purp.svg" : "./assets/pata_white.svg";

    return (
        '<img src="' +
        src +
        '" width="' +
        size +
        '" height="' +
        size +
        '" alt="Ícone de pata" style="opacity: ' +
        (opacity ?? 1) +
        ';" />'
    );
}

/* =======================================================================
   DADOS FICTÍCIOS
   Os 7 primeiros reproduzem os nomes/idades/status exatos da imagem de
   dashboard enviada. Os demais dão volume/variedade para os filtros.
   ======================================================================= */
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

const STATUS_COLOR = {
    "Disponível": "var(--green)",
    "Em processo": "var(--blue)",
    "Adotado": "var(--pink)",
    "Em breve": "var(--orange)",
};
const TIPO_EMOJI = { "Gato": "🐱", "Cachorro": "🐶", "Outro": "🐰" };

function faixaEtaria(meses) {
    if (meses < 12) return "Filhote";
    if (meses < 36) return "Jovem";
    if (meses < 84) return "Adulto";
    return "Sênior";
}

let state = {
    screen: "dashboard",
    usuario: "Patinhas Felizes",
    periodo: "Trimestral",
};
const DEMO_USER = "patinhasfelizes";
const DEMO_PASS = "123456";

/* =======================================================================
   INICIALIZAÇÃO DE ÍCONES ESTÁTICOS
   ======================================================================= */
document
    .getElementById("user-icon-wrap")
    .insertAdjacentHTML("afterbegin", svgIcon("user", 18));
document
    .getElementById("pass-icon-wrap")
    .insertAdjacentHTML("afterbegin", svgIcon("lock", 18));
document.getElementById("toggle-pass").innerHTML = svgIcon("eye", 17);
document.getElementById("mail-icon-1").innerHTML = svgIcon("mail", 16);
document.getElementById("mail-icon-2").innerHTML = svgIcon("mail", 16);
document
    .querySelector('[data-screen="dashboard"]')
    .insertAdjacentHTML("afterbegin", svgIcon("dashboard", 18));
document
    .querySelector('[data-screen="animais"]')
    .insertAdjacentHTML("afterbegin", pawSvg(18, 1));
document
    .querySelector('[data-screen="novo"]')
    .insertAdjacentHTML("afterbegin", svgIcon("plus", 18));
document.getElementById("logout-icon").innerHTML = svgIcon("logout", 16);
document.getElementById("plus-icon-1").innerHTML = svgIcon("plus", 18);
document.getElementById("plus-icon-2").innerHTML = svgIcon("plus", 18);
document.getElementById("plus-icon-3").innerHTML = svgIcon("plus", 18);
document.getElementById("arrow-back-icon").innerHTML = svgIcon("arrowLeft", 16);
document.getElementById("camera-icon").innerHTML = svgIcon("camera", 22);
document.getElementById("empty-icon").innerHTML = svgIcon("mail", 0); // placeholder, replaced below
document.getElementById("empty-icon").innerHTML = pawSvg(32, 0.15);

// Campo de patinhas decorativas no painel do login
(function renderPawField() {
    const field = document.getElementById("paw-field");
    let html = "";
    for (let i = 0; i < 22; i++) {
        const top = (i * 37) % 100;
        const left = (i * 53) % 100;
        const size = 18 + ((i * 13) % 26);
        const rot = (i * 47) % 360;
        html +=
            '<div style="position:absolute; top:' +
            top +
            "%; left:" +
            left +
            "%; transform:rotate(" +
            rot +
            'deg);">' +
            pawSvg(size, 0.15) +
            "</div>";
    }
    field.innerHTML = html;
})();

/* =======================================================================
   LOGIN
   ======================================================================= */
let showPass = false;
document.getElementById("toggle-pass").addEventListener("click", function () {
    showPass = !showPass;
    document.getElementById("login-pass").type = showPass ? "text" : "password";
    this.innerHTML = svgIcon(showPass ? "eyeOff" : "eye", 17);
});

document.getElementById("forgot-toggle").addEventListener("click", function () {
    document.getElementById("forgot-box").classList.toggle("visible");
});

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("login-user").value.trim();
    const pass = document.getElementById("login-pass").value.trim();
    const errorEl = document.getElementById("login-error");

    if (user !== DEMO_USER || pass !== DEMO_PASS) {
        errorEl.textContent =
            "Usuário ou senha incorretos. Use a conta de demonstração: patinhasfelizes / 123456.";
        errorEl.classList.add("visible");
        return;
    }
    errorEl.classList.remove("visible");
    state.usuario = "Patinhas Felizes";
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("app-shell").classList.add("visible");
    document.getElementById("sidebar-username").textContent = state.usuario;
    document.getElementById("dashboard-greeting").textContent =
        "Olá, " + state.usuario + "!";
    setScreen("dashboard");
});

document.getElementById("logout-btn").addEventListener("click", function () {
    document.getElementById("app-shell").classList.remove("visible");
    document.getElementById("login-screen").style.display = "flex";
    document.getElementById("login-user").value = "";
    document.getElementById("login-pass").value = "";
});

/* =======================================================================
   NAVEGAÇÃO ENTRE TELAS
   ======================================================================= */
function setScreen(name) {
    state.screen = name;
    document.querySelectorAll(".screen").forEach(function (s) {
        s.classList.remove("active");
    });
    document.getElementById("screen-" + name).classList.add("active");
    document.querySelectorAll(".nav-item").forEach(function (b) {
        b.classList.toggle("active", b.dataset.screen === name);
    });
    if (name === "dashboard") renderDashboard();
    if (name === "animais") renderAnimaisGrid();
}

document.querySelectorAll(".nav-item").forEach(function (btn) {
    btn.addEventListener("click", function () {
        setScreen(btn.dataset.screen);
    });
});
document.querySelectorAll("[data-goto]").forEach(function (btn) {
    btn.addEventListener("click", function () {
        setScreen(btn.dataset.goto);
    });
});

/* =======================================================================
   DASHBOARD
   ======================================================================= */
document.querySelectorAll(".period-pill").forEach(function (btn) {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".period-pill").forEach(function (b) {
            b.classList.remove("active");
        });
        btn.classList.add("active");
        state.periodo = btn.dataset.period;
        renderDashboard();
    });
});

// Dados fictícios por período. "Trimestral" reflete o estado real do
// sistema (ANIMALS), então acompanha novos cadastros feitos no mockup.
// Os outros 3 períodos usam números e recortes fictícios diferentes,
// só para demonstrar a troca visual dos cards e da tabela.
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

function renderDashboard() {
    let contagem, recentes;

    if (state.periodo === "Trimestral") {
        contagem = {
            "Disponível": 0,
            "Em processo": 0,
            "Adotado": 0,
            "Em breve": 0,
        };
        ANIMALS.forEach(function (a) {
            contagem[a.status] = (contagem[a.status] || 0) + 1;
        });
        recentes = ANIMALS.slice(0, 7);
    } else {
        const dados = PERIOD_DATA[state.periodo];
        contagem = dados.stats;
        recentes = dados.recentesIds
            .map(function (id) {
                return ANIMALS.find(function (a) {
                    return a.id === id;
                });
            })
            .filter(Boolean);
    }

    const total =
        Object.values(contagem).reduce(function (sum, v) {
            return sum + v;
        }, 0) || 1;

    const stats = [
        {
            label: "DISPONÍVEL",
            value: contagem["Disponível"],
            color: "var(--green)",
        },
        {
            label: "EM PROCESSO",
            value: contagem["Em processo"],
            color: "var(--blue)",
        },
        { label: "ADOTADOS", value: contagem["Adotado"], color: "var(--pink)" },
        {
            label: "EM BREVE",
            value: contagem["Em breve"],
            color: "var(--orange)",
        },
    ];
    document.getElementById("stats-grid").innerHTML = stats
        .map(function (s) {
            const pct = Math.round((s.value / total) * 100);
            return (
                '<div class="stat-card">' +
                '<span class="stat-badge" style="background:' +
                s.color +
                '">' +
                s.label +
                "</span>" +
                '<div class="stat-number">' +
                s.value +
                "</div>" +
                '<div class="stat-sub">' +
                pct +
                "% do período</div></div>"
            );
        })
        .join("");

    document.getElementById("recentes-tbody").innerHTML = recentes.length
        ? recentes
              .map(function (a) {
                  return (
                      "<tr><td>" +
                      a.nome +
                      "</td><td>" +
                      a.tipo +
                      "</td><td>" +
                      a.idadeLabel +
                      "</td>" +
                      '<td><span class="status-pill" style="background:' +
                      STATUS_COLOR[a.status] +
                      '">' +
                      a.status +
                      "</span></td></tr>"
                  );
              })
              .join("")
        : '<tr><td colspan="4" style="color:var(--text-muted); text-align:center; padding:24px;">Nenhum cadastro neste período.</td></tr>';
}

/* =======================================================================
   ANIMAIS (LISTAGEM + FILTROS)
   ======================================================================= */
["filter-tipo", "filter-sexo", "filter-faixa", "filter-ordenar"].forEach(
    function (id) {
        document
            .getElementById(id)
            .addEventListener("change", renderAnimaisGrid);
    },
);

function renderAnimaisGrid() {
    const tipo = document.getElementById("filter-tipo").value;
    const sexo = document.getElementById("filter-sexo").value;
    const faixa = document.getElementById("filter-faixa").value;
    const ordenar = document.getElementById("filter-ordenar").value;

    let lista = ANIMALS.filter(function (a) {
        if (tipo !== "Todos" && a.tipo !== tipo) return false;
        if (sexo !== "Todos" && a.sexo !== sexo) return false;
        if (faixa !== "Todas" && faixaEtaria(a.idadeMeses) !== faixa)
            return false;
        return true;
    });

    if (ordenar === "recentes")
        lista = lista.slice().sort(function (a, b) {
            return a.cadastro < b.cadastro ? 1 : -1;
        });
    else if (ordenar === "antigos")
        lista = lista.slice().sort(function (a, b) {
            return a.cadastro > b.cadastro ? 1 : -1;
        });
    else if (ordenar === "nome")
        lista = lista.slice().sort(function (a, b) {
            return a.nome.localeCompare(b.nome, "pt-BR");
        });

    document.getElementById("animais-subtitle").textContent =
        lista.length + " de " + ANIMALS.length + " animais";

    const grid = document.getElementById("animals-grid");
    const empty = document.getElementById("empty-state");

    if (lista.length === 0) {
        grid.style.display = "none";
        empty.style.display = "flex";
        return;
    }
    grid.style.display = "grid";
    empty.style.display = "none";

    grid.innerHTML = lista
        .map(function (a) {
            return (
                '<div class="animal-card">' +
                '<div class="animal-card-top">' +
                '<span class="animal-avatar">' +
                TIPO_EMOJI[a.tipo] +
                "</span>" +
                '<span class="status-pill" style="background:' +
                STATUS_COLOR[a.status] +
                '; font-size:0.72rem;">' +
                a.status +
                "</span>" +
                "</div>" +
                "<h3>" +
                a.nome +
                "</h3>" +
                '<p class="animal-meta">' +
                a.tipo +
                " · " +
                a.sexo +
                " · " +
                a.idadeLabel +
                "</p>" +
                '<p class="animal-porte">Raça: ' +
                a.raca +
                "</p>" +
                "</div>"
            );
        })
        .join("");
}

/* =======================================================================
   NOVO ANIMAL (CADASTRO)
   ======================================================================= */
document
    .getElementById("novo-animal-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        const nome = document.getElementById("f-nome").value.trim();
        const raca = document.getElementById("f-raca").value.trim();
        const idadeLabel = document.getElementById("f-idade").value.trim();
        const vacinas = document.getElementById("f-vacinas").value.trim();
        if (!nome || !raca || !idadeLabel || !vacinas) return;

        const novo = {
            id: 1000 + ANIMALS.length,
            nome: nome,
            tipo: document.getElementById("f-tipo").value,
            sexo: document.getElementById("f-sexo").value,
            raca: raca,
            idadeMeses: 0,
            idadeLabel: idadeLabel,
            status: document.getElementById("f-status").value,
            cadastro: new Date().toISOString().slice(0, 10),
            vacinas: vacinas,
            medicamentos: document
                .getElementById("f-medicamentos")
                .value.trim(),
            descricao: document.getElementById("f-descricao").value.trim(),
        };
        ANIMALS.unshift(novo);

        const submitBtn = document.getElementById("submit-animal-btn");
        document.getElementById("plus-icon-3").innerHTML = svgIcon("check", 18);
        document.getElementById("submit-label").textContent =
            "Animal cadastrado!";

        setTimeout(function () {
            document.getElementById("plus-icon-3").innerHTML = svgIcon(
                "plus",
                18,
            );
            document.getElementById("submit-label").textContent =
                "Cadastrar animal";
            document.getElementById("novo-animal-form").reset();
            setScreen("animais");
        }, 1200);
    });

/* =======================================================================
   RENDER INICIAL
   ======================================================================= */
renderDashboard();
renderAnimaisGrid();
