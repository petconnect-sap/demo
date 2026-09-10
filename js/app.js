/* =======================================================================
   PET CONNECT — SCRIPT ÚNICO DA APLICAÇÃO
   Protótipo (será reescrito em outra linguagem), por isso tudo num arquivo.
   Depende de js/data.js (carregado antes). Sem módulos ES: escopo global
   compartilhado, para abrir o index.html com duplo clique / file://.

   Índice — busque pelo marcador "== BLOCO:"
     == BLOCO: ÍCONES ......... SVGs inline + injeção nos placeholders
     == BLOCO: AUTH ........... login / logout
     == BLOCO: NAVEGAÇÃO ...... troca de telas
     == BLOCO: DASHBOARD ...... cards de status + tabela de recentes
     == BLOCO: ANIMAIS ........ listagem + filtros + botão editar
     == BLOCO: NOVO ANIMAL .... formulário de cadastro
     == BLOCO: EDITAR ANIMAL .. formulário de edição
     == BLOCO: BOOTSTRAP ...... liga os handlers e faz o render inicial
   ======================================================================= */


/* == BLOCO: ÍCONES =====================================================
   SVG inline (estilo stroke, sem dependência externa) e a injeção dos
   ícones estáticos nos placeholders do index.html.
   ===================================================================== */
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
    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
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

function initStaticIcons() {
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
    document.getElementById("arrow-back-icon").innerHTML = svgIcon(
        "arrowLeft",
        16,
    );
    document.getElementById("edit-back-icon").innerHTML = svgIcon(
        "arrowLeft",
        16,
    );
    document.getElementById("edit-check-icon").innerHTML = svgIcon("edit", 18);
    document.getElementById("camera-icon").innerHTML = svgIcon("camera", 22);
    document.getElementById("empty-icon").innerHTML = pawSvg(32, 0.15);

    renderPawField();
}

// Campo de patinhas decorativas no painel do login
function renderPawField() {
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
}


/* == BLOCO: AUTH =======================================================
   Login / logout
   ===================================================================== */
function initAuth() {
    let showPass = false;

    document
        .getElementById("toggle-pass")
        .addEventListener("click", function () {
            showPass = !showPass;
            document.getElementById("login-pass").type = showPass
                ? "text"
                : "password";
            this.innerHTML = svgIcon(showPass ? "eyeOff" : "eye", 17);
        });

    document
        .getElementById("forgot-toggle")
        .addEventListener("click", function () {
            document.getElementById("forgot-box").classList.toggle("visible");
        });

    document
        .getElementById("login-form")
        .addEventListener("submit", function (e) {
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
            document.getElementById("sidebar-username").textContent =
                state.usuario;
            document.getElementById("dashboard-greeting").textContent =
                "Olá, " + state.usuario + "!";
            setScreen("dashboard");
        });

    document
        .getElementById("logout-btn")
        .addEventListener("click", function () {
            document.getElementById("app-shell").classList.remove("visible");
            document.getElementById("login-screen").style.display = "flex";
            document.getElementById("login-user").value = "";
            document.getElementById("login-pass").value = "";
        });
}


/* == BLOCO: NAVEGAÇÃO ==================================================
   setScreen() é global (usado por auth e pelos botões data-goto).
   ===================================================================== */
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

function initNavigation() {
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
}


/* == BLOCO: DASHBOARD ==================================================
   Cards de status + tabela de cadastros recentes
   ===================================================================== */
function initDashboard() {
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
}

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


/* == BLOCO: ANIMAIS ====================================================
   Listagem + filtros + botão "Editar" em cada card
   ===================================================================== */
function initAnimais() {
    ["filter-tipo", "filter-sexo", "filter-faixa", "filter-ordenar"].forEach(
        function (id) {
            document
                .getElementById(id)
                .addEventListener("change", renderAnimaisGrid);
        },
    );

    // Delegação: botão "Editar" de cada card abre a tela de edição.
    document
        .getElementById("animals-grid")
        .addEventListener("click", function (e) {
            const btn = e.target.closest("[data-edit-id]");
            if (!btn) return;
            openEditarAnimal(Number(btn.dataset.editId));
        });
}

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
                '<div class="animal-card-actions">' +
                '<button type="button" class="btn-edit" data-edit-id="' +
                a.id +
                '">' +
                svgIcon("edit", 15) +
                "Editar</button>" +
                "</div>" +
                "</div>"
            );
        })
        .join("");
}


/* == BLOCO: NOVO ANIMAL ================================================
   Cadastro. Adiciona à lista em memória — sem persistência (ver README.md).
   ===================================================================== */
function initNovoAnimal() {
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

            document.getElementById("plus-icon-3").innerHTML = svgIcon(
                "check",
                18,
            );
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
}


/* == BLOCO: EDITAR ANIMAL =============================================
   Atualiza o item na lista em memória — sem persistência (ver README.md).
   openEditarAnimal() é global: chamado pelo botão "Editar" de cada card.
   ===================================================================== */
let animalEmEdicao = null;

function openEditarAnimal(id) {
    const a = ANIMALS.find(function (x) {
        return x.id === id;
    });
    if (!a) return;
    animalEmEdicao = id;

    document.getElementById("e-nome").value = a.nome;
    document.getElementById("e-raca").value = a.raca;
    document.getElementById("e-tipo").value = a.tipo;
    document.getElementById("e-sexo").value = a.sexo;
    document.getElementById("e-idade").value = a.idadeLabel;
    document.getElementById("e-status").value = a.status;
    document.getElementById("e-vacinas").value = a.vacinas;
    document.getElementById("e-medicamentos").value = a.medicamentos;
    document.getElementById("e-descricao").value = a.descricao;

    document.getElementById("editar-subtitle").textContent =
        "Editando " + a.nome;

    setScreen("editar");
}

function initEditarAnimal() {
    document
        .getElementById("editar-animal-form")
        .addEventListener("submit", function (e) {
            e.preventDefault();

            const a = ANIMALS.find(function (x) {
                return x.id === animalEmEdicao;
            });
            if (!a) return;

            const nome = document.getElementById("e-nome").value.trim();
            const raca = document.getElementById("e-raca").value.trim();
            const idadeLabel = document.getElementById("e-idade").value.trim();
            const vacinas = document.getElementById("e-vacinas").value.trim();
            if (!nome || !raca || !idadeLabel || !vacinas) return;

            a.nome = nome;
            a.raca = raca;
            a.tipo = document.getElementById("e-tipo").value;
            a.sexo = document.getElementById("e-sexo").value;
            a.idadeLabel = idadeLabel;
            a.status = document.getElementById("e-status").value;
            a.vacinas = vacinas;
            a.medicamentos = document
                .getElementById("e-medicamentos")
                .value.trim();
            a.descricao = document.getElementById("e-descricao").value.trim();

            document.getElementById("edit-check-icon").innerHTML = svgIcon(
                "check",
                18,
            );
            document.getElementById("edit-submit-label").textContent =
                "Alterações salvas!";

            setTimeout(function () {
                document.getElementById("edit-check-icon").innerHTML = svgIcon(
                    "edit",
                    18,
                );
                document.getElementById("edit-submit-label").textContent =
                    "Salvar alterações";
                animalEmEdicao = null;
                setScreen("animais");
            }, 1200);
        });
}


/* == BLOCO: BOOTSTRAP =================================================
   Roda por último: injeta os ícones, liga os handlers de cada tela e
   faz o render inicial.
   ===================================================================== */
document.addEventListener("DOMContentLoaded", function () {
    initStaticIcons();
    initAuth();
    initNavigation();
    initDashboard();
    initAnimais();
    initNovoAnimal();
    initEditarAnimal();

    renderDashboard();
    renderAnimaisGrid();
});
