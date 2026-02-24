# 🎸 ZOOM G5n · Patch Lab

Simulador visual de patches para a pedaleira **ZOOM G5n**, baseado no manual oficial de efeitos (*Effect Types and Parameters*, 2015 ZOOM CORPORATION).

Desenvolvido para a guitarra **Strato Seven SGT-207**.

---

## 📁 Estrutura de arquivos

```
g5n-patch-lab/
├── index.html       → Estrutura HTML da aplicação
├── styles.css       → Todos os estilos (tema dark, variáveis CSS)
├── fx-database.js   → Banco completo de efeitos da G5n
├── patches.js       → Patches padrão de exemplo
├── app.js           → Lógica principal (estado, renderização, eventos)
└── README.md        → Este arquivo
```

---

## 🚀 Como usar

Basta abrir o arquivo **`index.html`** em qualquer navegador moderno.  
Não precisa de servidor, instalação ou dependências externas.

```
Abrir com duplo clique → index.html
```

---

## 🎛️ Funcionalidades

### Cadeia de Sinal
- Monte até **5 efeitos em série**, do input da guitarra até o amp/saída
- Visualização em tempo real da cadeia de sinal com conectores animados
- **Ligar/Desligar** cada efeito individualmente (LED verde)
- **Trocar** qualquer efeito no slot sem perder a posição na cadeia
- **Remover** efeitos individualmente com o botão ✕

### Parâmetros
- **Arraste horizontal** nas barras de parâmetro para ajustar valores
- Até **4 parâmetros visíveis** por efeito (os mais importantes)
- Valores atualizados em tempo real durante o arraste

### Banco de Patches
- Salve patches com nome customizado (até 16 caracteres)
- Carregue patches clicando na lista
- Crie patches novos com o botão **"+ NOVO PATCH"**
- Exclua o patch ativo com o botão **EXCLUIR**

---

## 🎚️ Efeitos disponíveis

Todos os efeitos do manual da G5n estão incluídos:

| Categoria   | Efeitos |
|-------------|---------|
| **DYNAMICS**   | Comp, RackComp, SlowATTCK, ZNR, MuteSW |
| **FILTER**     | AutoWah, Resonance, Cry, SeqFLTR, Gt GEQ, Gt GEQ7, St Gt GEQ, ParaEQ, EG FLTR |
| **DRIVE**      | TS Drive, EP Stomp, RC Boost, GoldDrive, SweetDrv, DYN Drive, RedCrunch, MetalWRLD, TB MK1.5, OctFuzz, SpotBoost, Aco.Sim |
| **AMP**        | MS 800 (Marshall JCM800), FD TWNR (Fender Twin), UK 30A, BG MK3 (Mesa Boogie), XtasyBlue (Bogner) |
| **CABINET**    | MS4x12, FD2x12, UK2x12, MK3 1x12, BGN4x12 |
| **MODULATION** | Tremolo, Chorus, StereoCho, Phaser, VinFLNGR, TheVibe, Vibrato, Octave, Detune, PitchSHFT, MonoPitch, HPS, RingMod, Kick FLNG |
| **SFX**        | Bomber |
| **DELAY**      | Delay, AnalogDly, TapeEcho, ReverseDL, ModDelay, Hold DLY, PDL Delay |
| **REVERB**     | Air, Room, Hall, HD Hall, Spring, FD Spring, Plate |
| **PEDAL**      | PDL Vol, BlackWah, ChromeWah, WAH100, PDL Pitch, PDL MnPit, PDL Vibe, PDL Drive, PDL PHSR, PDL Rev, OSC Echo, VoiceWah, PDL Roto |
| **RHYTHM**     | Rhythm (68 padrões) |
| **LOOPER**     | LP-MONO, LP-STEREO |

---

## 🎸 Patches de exemplo

| # | Nome | Cadeia | Inspiração |
|---|------|--------|------------|
| 001 | LEAD BGN | TS Drive → XtasyBlue → ModDelay → Hall | Lead moderno |
| 002 | BLUES TX | TS Drive → FD TWNR → TapeEcho → Spring | Blues texano |
| 003 | CLEAN ARPG | Comp → FD TWNR → Chorus → Room | Clean para arpejos |
| 004 | METAL SGT | ZNR → MetalWRLD → MS 800 → HD Hall | Metal pesado SGT-207 |
| 005 | FUNK WAH | BlackWah → FD TWNR → Phaser → AnalogDly | Funk com wah |

---

## 🛠️ Tecnologias

- **HTML5** semântico
- **CSS3** puro (variáveis CSS, Grid, Flexbox, animações)
- **JavaScript** vanilla (sem frameworks, sem dependências)
- Google Fonts: `Share Tech Mono` + `Barlow Condensed` + `Barlow`

---

## 📖 Referência

Baseado no manual oficial:  
**ZOOM G5n Effect Types and Parameters** — © 2015 ZOOM CORPORATION  
Código do documento: Z2I-2556-02

> Os nomes de fabricantes e produtos mencionados são marcas registradas de seus respectivos proprietários e são usados apenas para descrever características sonoras.

---

## 💡 Dicas de uso

**Para montar um patch do zero:**
1. Clique em **"+ ADD EFEITO"** ou no botão verde na cadeia
2. Filtre por categoria (DRIVE, AMP, REVERB…)
3. Clique no efeito para adicioná-lo à cadeia
4. Repita para os demais efeitos
5. Ajuste os parâmetros arrastando as barras
6. Dê um nome e clique em **"SALVAR PATCH"**

**Ordem recomendada da cadeia (padrão pedaleira):**
```
DYNAMICS → FILTER → DRIVE → AMP → CABINET → MODULATION → DELAY → REVERB
```

**Dica para a SGT-207 (7 cordas):**  
Use o **ZNR** (Noise Reduction) no início da cadeia para cortar o ruído das cordas extras, especialmente com gains altos.
