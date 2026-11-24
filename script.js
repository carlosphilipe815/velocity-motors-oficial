/* =====================================================
   VELOCITY MOTORS
   JAVASCRIPT COMPLETO
   Performance Redefined
===================================================== */

function iniciarVelocityMotors() {

    /* ==============================================
       1. DADOS DOS VEÍCULOS
    ============================================== */

    const carros = [

        {
            nome: "Chevrolet Camaro Exorcist",
            motor: "Motor V8 Supercharged",
            potencia: "Potência: 1.000 cv",
            aceleracao: "0–100 km/h: 2,3 s",
            velocidade: "Velocidade Máxima: 350 km/h",
            preco: "R$ 3.490.000"
        },

        {
            nome: "Mercedes-AMG GT R",
            motor: "Motor V8 Biturbo",
            potencia: "Potência: 585 cv",
            aceleracao: "0–100 km/h: 3,6 s",
            velocidade: "Velocidade Máxima: 318 km/h",
            preco: "R$ 2.490.000"
        },

        {
            nome: "Audi R8 V10 Performance",
            motor: "Motor V10 Aspirado",
            potencia: "Potência: 620 cv",
            aceleracao: "0–100 km/h: 3,1 s",
            velocidade: "Velocidade Máxima: 331 km/h",
            preco: "R$ 1.690.000"
        },

        {
            nome: "Porsche 911 Turbo S",
            motor: "Motor Boxer 6 Cilindros Biturbo",
            potencia: "Potência: 650 cv",
            aceleracao: "0–100 km/h: 2,7 s",
            velocidade: "Velocidade Máxima: 330 km/h",
            preco: "R$ 2.490.000"
        },

        {
            nome: "Lamborghini Huracán EVO",
            motor: "Motor V10 Aspirado",
            potencia: "Potência: 640 cv",
            aceleracao: "0–100 km/h: 2,9 s",
            velocidade: "Velocidade Máxima: 325 km/h",
            preco: "R$ 3.490.000"
        },

        {
            nome: "Ferrari F8 Tributo",
            motor: "Motor V8 Biturbo",
            potencia: "Potência: 720 cv",
            aceleracao: "0–100 km/h: 2,9 s",
            velocidade: "Velocidade Máxima: 340 km/h",
            preco: "R$ 4.290.000"
        }

    ];


    /* ==============================================
       2. ELEMENTOS DO HTML
    ============================================== */

    const menuToggle = document.getElementById("menuToggle");

    const navLinks = document.getElementById("navLinks");

    const header = document.querySelector("header");

    const buscarCarro = document.getElementById("buscarCarro");

    const limparBusca = document.getElementById("limparBusca");

    const resultadoBusca = document.getElementById("resultadoBusca");

    const cardsContainer = document.querySelector(".cards");

    const galleryModal = document.getElementById("galleryModal");

    const galleryClose = document.getElementById("galleryClose");

    const galleryCloseBottom = document.getElementById("galleryCloseBottom");

    const galleryPrev = document.getElementById("galleryPrev");

    const galleryNext = document.getElementById("galleryNext");

    const galleryImage = document.getElementById("galleryImage");

    const nomeCarro = document.getElementById("nomeCarro");

    const motorCarro = document.getElementById("motorCarro");

    const potenciaCarro = document.getElementById("potenciaCarro");

    const aceleracaoCarro = document.getElementById("aceleracaoCarro");

    const velocidadeCarro = document.getElementById("velocidadeCarro");

    const precoCarro = document.getElementById("precoCarro");

    const comprarCarro = document.getElementById("comprarCarro");

    const contadorImagem = document.getElementById("contadorImagem");

    const galleryImageArea = document.getElementById("galleryImageArea");

    const contatoForm = document.getElementById("contatoForm");


    /* ==============================================
       3. MENU MOBILE
    ============================================== */

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            const menuAberto = navLinks.classList.toggle("active");

            menuToggle.classList.toggle("active", menuAberto);

            menuToggle.setAttribute(
                "aria-expanded",
                menuAberto
            );

        });


        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        document.addEventListener("click", function (event) {

            const clicouFora =

                !navLinks.contains(event.target) &&

                !menuToggle.contains(event.target);

            if (clicouFora) {

                navLinks.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* ==============================================
       4. NAVBAR AO ROLAR A PÁGINA
    ============================================== */

    function atualizarNavbar() {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", atualizarNavbar);

    atualizarNavbar();


    /* ==============================================
       5. PESQUISA DE VEÍCULOS
    ============================================== */

    const cards = document.querySelectorAll("#estoque .card");


    function pesquisarVeiculos() {

        if (!buscarCarro) return;

        const termo = buscarCarro.value

            .toLowerCase()

            .trim();

        let encontrados = 0;


        cards.forEach(card => {

            const texto = card.innerText

                .toLowerCase();

            const encontrou = texto.includes(termo);


            if (encontrou) {

                card.style.display = "";

                encontrados++;

            } else {

                card.style.display = "none";

            }

        });


        if (resultadoBusca) {

            if (termo === "") {

                resultadoBusca.textContent =
                    "Exibindo todos os veículos.";

            } else if (encontrados === 0) {

                resultadoBusca.textContent =
                    "Nenhum veículo encontrado para sua pesquisa.";

            } else {

                resultadoBusca.textContent =

                    encontrados === 1

                        ? "1 veículo encontrado."

                        : `${encontrados} veículos encontrados.`;

            }

        }


        if (limparBusca) {

            limparBusca.style.display = termo !== ""

                ? "block"

                : "none";

        }

    }


    if (buscarCarro) {

        buscarCarro.addEventListener(
            "input",
            pesquisarVeiculos
        );

    }


    /* ==============================================
       6. LIMPAR PESQUISA
    ============================================== */

    if (limparBusca) {

        limparBusca.addEventListener("click", function () {

            if (buscarCarro) {

                buscarCarro.value = "";

                pesquisarVeiculos();

                buscarCarro.focus();

            }

        });

    }


    /* ==============================================
       7. ANIMAÇÕES AO ROLAR
    ============================================== */

    const elementosAnimados = document.querySelectorAll(

        ".card, .titulo, .empresa-container, " +

        ".contato-grid, .contato-form, .info-card"

    );


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(

            function (entradas, observador) {

                entradas.forEach(entrada => {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add("visible");

                        observador.unobserve(entrada.target);

                    }

                });

            },

            {
                threshold: 0.10
            }

        );


        elementosAnimados.forEach(elemento => {

            observer.observe(elemento);

        });

    } else {

        elementosAnimados.forEach(elemento => {

            elemento.classList.add("visible");

        });

    }


    /* ==============================================
       8. GALERIA
    ============================================== */

    let carroAtual = 0;

    let imagemAtual = 0;

    let imagensAtuais = [];

    let zoomAtivo = false;


    /* ==============================================
       9. PEGAR IMAGENS DO CARD
    ============================================== */

    function pegarImagens(indice) {

        const card = cards[indice];

        if (!card) return [];

        const imagens = [];

        card.querySelectorAll("img").forEach(img => {

            if (img.src) {

                imagens.push(img.src);

            }

        });

        return imagens;

    }


    /* ==============================================
       10. ATUALIZAR GALERIA
    ============================================== */

    function atualizarGaleria() {

        if (!galleryImage) return;

        if (imagensAtuais.length === 0) {

            galleryImage.src = "";

            galleryImage.alt = "Imagem indisponível";

            if (contadorImagem) {

                contadorImagem.textContent =
                    "Imagem indisponível";

            }

            return;

        }


        galleryImage.src = imagensAtuais[imagemAtual];

        galleryImage.alt = carros[carroAtual].nome;


        if (contadorImagem) {

            contadorImagem.textContent =

                `${imagemAtual + 1} / ${imagensAtuais.length}`;

        }


        if (galleryPrev) {

            galleryPrev.style.display =

                imagensAtuais.length > 1

                    ? ""

                    : "none";

        }


        if (galleryNext) {

            galleryNext.style.display =

                imagensAtuais.length > 1

                    ? ""

                    : "none";

        }


        galleryImage.classList.remove("zoom");

        zoomAtivo = false;

    }


    /* ==============================================
       11. ABRIR GALERIA
    ============================================== */

    function abrirGaleria(indice) {

        if (!galleryModal) return;

        if (!carros[indice]) return;


        carroAtual = indice;

        imagemAtual = 0;

        imagensAtuais = pegarImagens(indice);


        const carro = carros[indice];


        /* NOME */

        if (nomeCarro) {

            nomeCarro.textContent = carro.nome;

        }


        /* MOTOR */

        if (motorCarro) {

            motorCarro.textContent = carro.motor;

        }


        /* POTÊNCIA */

        if (potenciaCarro) {

            potenciaCarro.textContent = carro.potencia;

        }


        /* ACELERAÇÃO */

        if (aceleracaoCarro) {

            aceleracaoCarro.textContent = carro.aceleracao;

        }


        /* VELOCIDADE */

        if (velocidadeCarro) {

            velocidadeCarro.textContent = carro.velocidade;

        }


        /* PREÇO */

        if (precoCarro) {

            precoCarro.textContent = carro.preco;

        }


        /* WHATSAPP */

        if (comprarCarro) {

            const mensagem = encodeURIComponent(

                `Olá! Tenho interesse no ${carro.nome}. ` +

                `Gostaria de receber mais informações.`

            );


            comprarCarro.href =

                `https://wa.me/5527998636436?text=${mensagem}`;

        }


        /* ABRIR MODAL */

        galleryModal.classList.add("active");

        galleryModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";


        atualizarGaleria();

    }


    /* ==============================================
       12. FECHAR GALERIA
    ============================================== */

    function fecharGaleria() {

        if (!galleryModal) return;

        galleryModal.classList.remove("active");

        galleryModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

        zoomAtivo = false;

        if (galleryImage) {

            galleryImage.classList.remove("zoom");

        }

    }


    if (galleryClose) {

        galleryClose.addEventListener(
            "click",
            fecharGaleria
        );

    }


    if (galleryCloseBottom) {

        galleryCloseBottom.addEventListener(
            "click",
            fecharGaleria
        );

    }


    /* ==============================================
       13. PRÓXIMA IMAGEM
    ============================================== */

    function proximaImagem() {

        if (imagensAtuais.length <= 1) return;

        imagemAtual++;

        if (imagemAtual >= imagensAtuais.length) {

            imagemAtual = 0;

        }

        atualizarGaleria();

    }


    /* ==============================================
       14. IMAGEM ANTERIOR
    ============================================== */

    function imagemAnterior() {

        if (imagensAtuais.length <= 1) return;

        imagemAtual--;

        if (imagemAtual < 0) {

            imagemAtual = imagensAtuais.length - 1;

        }

        atualizarGaleria();

    }


    if (galleryNext) {

        galleryNext.addEventListener(
            "click",
            proximaImagem
        );

    }


    if (galleryPrev) {

        galleryPrev.addEventListener(
            "click",
            imagemAnterior
        );

    }


    /* ==============================================
       15. ABRIR PELOS BOTÕES DOS CARDS
    ============================================== */

    document.querySelectorAll(".visualizar-carro").forEach(botao => {

        botao.addEventListener("click", function (event) {

            event.preventDefault();

            const indice = parseInt(

                this.dataset.carro,

                10

            );


            abrirGaleria(indice);

        });

    });


    /* ==============================================
       16. FECHAR CLICANDO FORA
    ============================================== */

    if (galleryModal) {

        galleryModal.addEventListener("click", function (event) {

            if (event.target === galleryModal) {

                fecharGaleria();

            }

        });

    }


    /* ==============================================
       17. ZOOM
    ============================================== */

    if (galleryImage) {

        galleryImage.addEventListener("click", function () {

            zoomAtivo = !zoomAtivo;

            galleryImage.classList.toggle(
                "zoom",
                zoomAtivo
            );

        });

    }


    /* ==============================================
       18. TECLADO
    ============================================== */

    document.addEventListener("keydown", function (event) {

        if (!galleryModal) return;

        if (!galleryModal.classList.contains("active")) {

            return;

        }


        if (event.key === "Escape") {

            fecharGaleria();

        }


        if (event.key === "ArrowRight") {

            proximaImagem();

        }


        if (event.key === "ArrowLeft") {

            imagemAnterior();

        }

    });


    /* ==============================================
       19. FORMULÁRIO DE CONTATO
    ============================================== */

    if (contatoForm) {

        contatoForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const nome = document.getElementById("nome")?.value.trim();

            const email = document.getElementById("email")?.value.trim();

            const telefone = document.getElementById("telefone")?.value.trim();

            const mensagem = document.getElementById("mensagem")?.value.trim();


            if (!nome || !email || !telefone || !mensagem) {

                alert("Preencha todos os campos antes de enviar.");

                return;

            }


            const texto =

                `Olá! Meu nome é ${nome}.\n\n` +

                `E-mail: ${email}\n` +

                `Telefone: ${telefone}\n\n` +

                `Mensagem:\n${mensagem}`;


            const numero = "5527998636436";


            const url =

                `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;


            window.open(url, "_blank");

        });

    }


    /* ==============================================
       20. LINKS WHATSAPP
    ============================================== */

    document.querySelectorAll(".whatsapp").forEach(link => {

        link.addEventListener("click", function () {

            // O HTML já possui o link correto.

        });

    });


    /* ==============================================
       21. BOTÃO VOLTAR AO TOPO
    ============================================== */

    let botaoTopo = document.getElementById("topo");


    if (!botaoTopo) {

        botaoTopo = document.createElement("button");

        botaoTopo.id = "topo";

        botaoTopo.innerHTML = "↑";

        botaoTopo.setAttribute(
            "aria-label",
            "Voltar ao topo"
        );

        document.body.appendChild(botaoTopo);

    }


    botaoTopo.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    /* ==============================================
       22. EXIBIR BOTÃO TOPO
    ============================================== */

    function atualizarBotaoTopo() {

        if (!botaoTopo) return;

        if (window.scrollY > 400) {

            botaoTopo.classList.add("mostrar");

        } else {

            botaoTopo.classList.remove("mostrar");

        }

    }

    window.addEventListener(
        "scroll",
        atualizarBotaoTopo
    );


    /* ==============================================
       23. ANO AUTOMÁTICO
    ============================================== */

    const anoAtual = new Date().getFullYear();

    const copyright = document.querySelector(".copy");

    if (copyright) {

        copyright.innerHTML =

            `© ${anoAtual} VELOCITY MOTORS — Todos os direitos reservados.`;

    }


    /* ==============================================
       24. IMAGENS
    ============================================== */

    document.querySelectorAll("img").forEach(imagem => {

        imagem.addEventListener("error", function () {

            this.style.opacity = "0";

        });

    });


    /* ==============================================
       25. SISTEMA INICIADO
    ============================================== */

    console.log(
        "VELOCITY MOTORS: Sistema iniciado com sucesso!"
    );

}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        iniciarVelocityMotors
    );

} else {

    iniciarVelocityMotors();

}