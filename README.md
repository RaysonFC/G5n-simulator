# 🎸 ZOOM G5n · Patch Lab

Simulador visual de patches para a pedaleira **ZOOM G5n**, com interface inspirada no hardware real.

Desenvolvido para a guitarra **Strato Seven SGT-207 NT**  
(Basswood body · Maple neck · 3 Single-coils passivos · 6 cordas · Ponte tremolo).

---

## 📁 Arquivos

```
g5n-patch-lab/
├── index.html       → Estrutura HTML
├── styles.css       → Estilos (tema dark + layout hardware)
├── fx-database.js   → Banco de efeitos da G5n
├── patches.js       → Patches otimizados para Strat single-coil
├── app.js           → Lógica principal
└── README.md        → Este arquivo
```

---

## 🚀 Como usar

Abra o **`index.html`** em qualquer navegador moderno.  
Não precisa de servidor nem instalação.

Os patches são salvos automaticamente no **localStorage** do navegador.

---

## 🎛️ Interface estilo G5n

- **Overview Display** — visão da cadeia completa (clique para focar um efeito)
- **4 Unit Displays** — parâmetros dos efeitos (como na pedaleira real)
- **Footswitches FS1–FS4** — ligar/desligar efeitos da página atual
- **Pedal de expressão** — visual (indicador de params com flag P)
- Navegação ◀ ▶ quando houver mais de 4 efeitos

### Outras funções
- Até **9 efeitos** por patch (limite G5n V2.0)
- **Busca** de efeitos por nome/descrição
- Filtro por categoria
- Drag horizontal nos parâmetros numéricos
- Clique para ciclar parâmetros de seleção

---

## 🎸 Patches para SGT-207 NT

| # | Nome | Estilo |
|---|------|--------|
| 001 | CLEAN STRAT | Clean clássico Strat + chorus + room |
| 002 | BLUES TX | Blues texano / SRV (TS + Twin + Tape Echo) |
| 003 | BRIT CRUNCH | Crunch britânico (UK 30A) |
| 004 | LEAD BGN | Lead moderno Bogner |
| 005 | FUNK WAH | Funk com wah + phaser |
| 006 | THE EDGE | Delay ritmico estilo U2 |
| 007 | ACOUSTIC | Simulação de violão |
| 008 | GILMOUR | Pink Floyd (phaser + delay longo) |
| 009 | HARD ROCK | Rock clássico (MS 800) |
| 010 | SMOOTH JZ | Jazz suave |
| 011 | STRINGS | Pad atmosférico (Slow Attack) |
| 012 | LOOPER JAM | Ritmo + looper para prática |

---

## 🔌 Layout físico sugerido

```
GUITAR → WAH/VOLUME → OVERDRIVE → ZOOM G5n → AMP
```

- Pedais de drive externos (TS, boost) funcionam bem **antes** da G5n
- Delay/Reverb pesados ficam melhores **dentro** da G5n (após o amp model)
- Single-coils: use Comp ou ZNR no início da cadeia para controlar ruído

---

## 💡 Dicas SGT-207 NT

- Amps que combinam bem com single-coil: **FD TWNR**, **UK 30A**, **MS 800** (canal LO)
- BRGHT = ON no Twin ajuda a recuperar o “sparkle” Strat
- Gain baixo + boost de TS antes do amp = dinamismo clássico Strat

---

## 📖 Referência

Baseado no manual oficial ZOOM G5n Effect Types and Parameters.

> Nomes de fabricantes e produtos são marcas registradas e usados apenas para descrever características sonoras.
