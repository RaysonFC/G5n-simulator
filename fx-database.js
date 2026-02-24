/**
 * fx-database.js
 * ZOOM G5n – Banco COMPLETO de Efeitos
 * Baseado no manual oficial: "Effect Types and Parameters" (2015 ZOOM CORPORATION)
 * Todos os efeitos e todos os parâmetros foram conferidos página a página.
 *
 * Estrutura de cada efeito:
 * {
 *   name:    string  – nome exibido na pedaleira
 *   desc:    string  – descrição / referência do equipamento original
 *   params:  Array   – lista de parâmetros
 *     { n, v, max, min?, options?, pedal?, tempo? }
 *       n       : nome do parâmetro (abreviado, como na pedaleira)
 *       v       : valor padrão
 *       max     : valor máximo
 *       min     : valor mínimo (default = 0)
 *       options : array de strings para parâmetros de seleção (enum)
 *       pedal   : true se controlável pelo pedal de expressão
 *       tempo   : true se sincronizável com o BPM
 * }
 */

const FX_DB = {

  /* ══════════════════════════════════════════════════════════
     DYNAMICS
     ══════════════════════════════════════════════════════════ */
  DYNAMICS: [
    {
      name: 'Comp',
      desc: 'Compressor estilo MXR Dyna Comp',
      params: [
        { n: 'Sense', v: 5,  max: 10  },
        { n: 'ATTCK', v: 0,  max: 1,   options: ['SLOW','FAST'] },
        { n: 'Tone',  v: 5,  max: 10  },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'RackComp',
      desc: 'Compressor com ajuste mais detalhado que o Comp',
      params: [
        { n: 'THRSH', v: 25, max: 50  },
        { n: 'Ratio', v: 5,  max: 10  },
        { n: 'ATTCK', v: 5,  max: 10  },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'SlowATTCK',
      desc: 'Ataque lento em cada nota – som estilo violino',
      params: [
        { n: 'Time',  v: 25, max: 50  },
        { n: 'Curve', v: 5,  max: 10  },
        { n: 'Tone',  v: 60, max: 100 },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'ZNR',
      desc: 'Noise Reduction exclusivo ZOOM – corta ruído sem afetar o tom',
      params: [
        { n: 'DETCT', v: 0,  max: 1,   options: ['GTRIN','EFXIN'] },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'THRSH', v: 40, max: 100 },
        { n: 'Decay', v: 50, max: 100 },
      ]
    },
    {
      name: 'MuteSW',
      desc: 'Mute do volume controlado por footswitch',
      params: [
        { n: 'Edge',  v: 50, max: 100 },
        { n: 'Speed', v: 50, max: 100 },
        { n: 'INVRT', v: 0,  max: 1,   options: ['NORMAL','INVERT'] },
        { n: 'ON/OFF',v: 0,  max: 2,   options: ['LATCH','UnLATCH','TRGGR'] },
      ]
    },
  ],

  /* ══════════════════════════════════════════════════════════
     FILTER
     ══════════════════════════════════════════════════════════ */
  FILTER: [
    {
      name: 'AutoWah',
      desc: 'Wah automático que varia conforme a intensidade do ataque',
      params: [
        { n: 'Mode',  v: 0,  max: 1,   options: ['DOWN','UP'] },
        { n: 'Sense', v: 5,  max: 10  },
        { n: 'RESO',  v: 5,  max: 10  },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'Resonance',
      desc: 'Filtro ressonante que varia conforme a intensidade do ataque',
      params: [
        { n: 'Mode',  v: 0,  max: 1,   options: ['DOWN','UP'] },
        { n: 'Sense', v: 5,  max: 10  },
        { n: 'RESO',  v: 5,  max: 10  },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'Cry',
      desc: 'Modulador de voz (talking modulator)',
      params: [
        { n: 'Range', v: 5,  max: 10  },
        { n: 'RESO',  v: 5,  max: 10  },
        { n: 'Sense', v: 5,  min: -10, max: 10 },
        { n: 'BAL',   v: 50, max: 100 },
      ]
    },
    {
      name: 'SeqFLTR',
      desc: 'Filtro sequencial – Z.Vex Seek-Wah',
      params: [
        { n: 'Step',  v: 4,  min: 2,  max: 8  },
        { n: 'PTTRN', v: 1,  min: 1,  max: 8  },
        { n: 'Speed', v: 25, max: 50, tempo: true },
        { n: 'RESO',  v: 5,  max: 10 },
      ]
    },
    {
      name: 'Gt GEQ',
      desc: 'EQ gráfico mono 6 bandas para guitarra',
      params: [
        { n: '160Hz',  v: 0, min: -12, max: 12 },
        { n: '400Hz',  v: 0, min: -12, max: 12 },
        { n: '800Hz',  v: 0, min: -12, max: 12 },
        { n: '3.2kHz', v: 0, min: -12, max: 12 },
        { n: '6.4kHz', v: 0, min: -12, max: 12 },
        { n: '12kHz',  v: 0, min: -12, max: 12 },
        { n: 'VOL',    v: 80, max: 100 },
      ]
    },
    {
      name: 'Gt GEQ7',
      desc: 'EQ gráfico mono 7 bandas para guitarra',
      params: [
        { n: '100Hz',  v: 0, min: -12, max: 12 },
        { n: '200Hz',  v: 0, min: -12, max: 12 },
        { n: '400Hz',  v: 0, min: -12, max: 12 },
        { n: '800Hz',  v: 0, min: -12, max: 12 },
        { n: '1.6kHz', v: 0, min: -12, max: 12 },
        { n: '3.2kHz', v: 0, min: -12, max: 12 },
        { n: '6.4kHz', v: 0, min: -12, max: 12 },
        { n: 'VOL',    v: 80, max: 100 },
      ]
    },
    {
      name: 'St Gt GEQ',
      desc: 'EQ gráfico estéreo 6 bandas para guitarra',
      params: [
        { n: '160Hz',  v: 0, min: -12, max: 12 },
        { n: '400Hz',  v: 0, min: -12, max: 12 },
        { n: '800Hz',  v: 0, min: -12, max: 12 },
        { n: '3.2kHz', v: 0, min: -12, max: 12 },
        { n: '6.4kHz', v: 0, min: -12, max: 12 },
        { n: '12kHz',  v: 0, min: -12, max: 12 },
        { n: 'VOL',    v: 80, max: 100 },
      ]
    },
    {
      name: 'ParaEQ',
      desc: 'Equalizador paramétrico de 1 banda',
      params: [
        { n: 'FREQ', v: 50, max: 100 },
        { n: 'Q',    v: 50, max: 100 },
        { n: 'Gain', v: 0,  min: -12, max: 12 },
        { n: 'VOL',  v: 80, max: 100 },
      ]
    },
    {
      name: 'EG FLTR',
      desc: 'Filtro controlado pelo footswitch (ON/OFF)',
      params: [
        { n: 'FREQ1', v: 30, max: 100 },
        { n: 'FREQ2', v: 70, max: 100 },
        { n: 'RESO',  v: 50, max: 100 },
        { n: 'Type',  v: 0,  max: 1,  options: ['HPF2','LPF4'] },
        { n: 'Speed', v: 50, max: 100 },
        { n: 'BAL',   v: 50, max: 100 },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
  ],

  /* ══════════════════════════════════════════════════════════
     DRIVE
     ══════════════════════════════════════════════════════════ */
  DRIVE: [
    {
      name: 'TS Drive',
      desc: 'Simulação Ibanez TS808 Tube Screamer',
      params: [
        { n: 'Gain',  v: 50, max: 100 },
        { n: 'Boost', v: 0,  max: 1,  options: ['OFF','ON'] },
        { n: 'Tone',  v: 50, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
      ]
    },
    {
      name: 'EP Stomp',
      desc: 'Pré-amp Maestro Echoplex',
      params: [
        { n: 'Gain',   v: 40, max: 100 },
        { n: 'Bass',   v: 0,  min: -10, max: 10 },
        { n: 'Treble', v: 0,  min: -10, max: 10 },
        { n: 'VOL',    v: 70, max: 100 },
      ]
    },
    {
      name: 'RC Boost',
      desc: 'Booster – do clean boost ao drive suave',
      params: [
        { n: 'Gain',   v: 40, max: 100 },
        { n: 'Bass',   v: 50, max: 100 },
        { n: 'Treble', v: 50, max: 100 },
        { n: 'VOL',    v: 70, max: 100 },
      ]
    },
    {
      name: 'GoldDrive',
      desc: 'Simulação de overdrive boutique dourado famoso',
      params: [
        { n: 'Gain',   v: 50, max: 100 },
        { n: 'Bass',   v: 50, max: 100 },
        { n: 'Treble', v: 50, max: 100 },
        { n: 'VOL',    v: 70, max: 100 },
      ]
    },
    {
      name: 'SweetDrv',
      desc: 'Overdrive de som suave e musical',
      params: [
        { n: 'Gain',  v: 50, max: 100 },
        { n: 'Tone',  v: 50, max: 100 },
        { n: 'Focus', v: 50, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
      ]
    },
    {
      name: 'DYN Drive',
      desc: 'Drive cálido com tom de amplificador valvulado',
      params: [
        { n: 'Gain', v: 50, max: 100 },
        { n: 'Tone', v: 50, max: 100 },
        { n: 'Mode', v: 0,  max: 1,  options: ['COMBO','STACK'] },
        { n: 'VOL',  v: 70, max: 100 },
      ]
    },
    {
      name: 'RedCrunch',
      desc: '"Brown sound" – referência ao Van Halen',
      params: [
        { n: 'Gain',  v: 60, max: 100 },
        { n: 'Tone',  v: 50, max: 100 },
        { n: 'PRSNC', v: 50, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
      ]
    },
    {
      name: 'MetalWRLD',
      desc: 'Simulação BOSS Metal Zone – sustain longo e midrange poderoso',
      params: [
        { n: 'Gain',   v: 70, max: 100 },
        { n: 'Bass',   v: 50, max: 100 },
        { n: 'Treble', v: 50, max: 100 },
        { n: 'VOL',    v: 70, max: 100 },
      ]
    },
    {
      name: 'TB MK1.5',
      desc: 'Fuzz clássico',
      params: [
        { n: 'ATTCK', v: 50, max: 100 },
        { n: 'Tone',  v: 50, max: 100 },
        { n: 'Color', v: 0,  max: 1,  options: ['1','2'] },
        { n: 'VOL',   v: 70, max: 100 },
      ]
    },
    {
      name: 'OctFuzz',
      desc: 'Fuzz com oitava acima adicionada',
      params: [
        { n: 'Boost', v: 50, max: 100 },
        { n: 'Color', v: 0,  max: 1,  options: ['1','2'] },
        { n: 'Tone',  v: 50, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
      ]
    },
    {
      name: 'SpotBoost',
      desc: 'Booster com controle flexível de frequências',
      params: [
        { n: 'Boost',  v: 50, max: 100 },
        { n: 'Bass',   v: 0,  min: -10, max: 10 },
        { n: 'Treble', v: 0,  min: -10, max: 10 },
        { n: 'ON/OFF', v: 0,  max: 1,  options: ['LATCH','UnLATCH'] },
      ]
    },
    {
      name: 'Aco.Sim',
      desc: 'Simulação de violão acústico a partir da guitarra elétrica',
      params: [
        { n: 'Top',  v: 60, max: 100 },
        { n: 'Body', v: 60, max: 100 },
        { n: 'Tone', v: 50, max: 100 },
        { n: 'VOL',  v: 70, max: 100 },
      ]
    },
  ],

  /* ══════════════════════════════════════════════════════════
     AMP
     ══════════════════════════════════════════════════════════ */
  AMP: [
    {
      name: 'MS 800',
      desc: 'Modelagem Marshall JCM800 2203',
      params: [
        { n: 'Input', v: 0,  max: 1,  options: ['LO','HI'] },
        { n: 'Bass',  v: 50, max: 100 },
        { n: 'MID',   v: 50, max: 100 },
        { n: 'Treble',v: 50, max: 100 },
        { n: 'PRSNC', v: 50, max: 100 },
        { n: 'Gain',  v: 60, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
        { n: 'SOLO',  v: 5,  min: 1, max: 9 },
      ]
    },
    {
      name: 'FD TWNR',
      desc: "Modelagem Fender '65 Twin Reverb",
      params: [
        { n: 'Bass',  v: 50, min: 10, max: 100 },
        { n: 'MID',   v: 50, min: 10, max: 100 },
        { n: 'Treble',v: 50, min: 10, max: 100 },
        { n: 'BRGHT', v: 0,  max: 1,  options: ['OFF','ON'] },
        { n: 'Gain',  v: 40, min: 10, max: 100 },
        { n: 'VOL',   v: 70, min: 10, max: 100 },
        { n: 'DEPTH', v: 50, min: 10, max: 100 },
        { n: 'SPEED', v: 50, min: 10, max: 100, tempo: true },
      ]
    },
    {
      name: 'UK 30A',
      desc: 'Modelagem combo britânico classe A inicial',
      params: [
        { n: 'Bass',  v: 50, max: 100 },
        { n: 'Treble',v: 50, max: 100 },
        { n: 'Cut',   v: 50, max: 100 },
        { n: 'Gain',  v: 50, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
        { n: 'Depth', v: 50, max: 100 },
        { n: 'Speed', v: 50, max: 100, tempo: true },
        { n: 'SOLO',  v: 5,  min: 1, max: 9 },
      ]
    },
    {
      name: 'BG MK3',
      desc: 'Modelagem Mesa Boogie Mark III combo',
      params: [
        { n: 'Bass',  v: 50, max: 100 },
        { n: 'MID',   v: 50, max: 100 },
        { n: 'Treble',v: 50, max: 100 },
        { n: 'PRSNC', v: 50, max: 100 },
        { n: 'Gain1', v: 55, max: 100 },
        { n: 'Gain2', v: 60, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
        { n: 'SOLO',  v: 5,  min: 1, max: 9 },
      ]
    },
    {
      name: 'XtasyBlue',
      desc: 'Modelagem Bogner Ecstasy canal azul',
      params: [
        { n: 'Bass',  v: 50, max: 100 },
        { n: 'MID',   v: 50, max: 100 },
        { n: 'Treble',v: 50, max: 100 },
        { n: 'PRSNC', v: 50, max: 100 },
        { n: 'STRCT', v: 0,  max: 1,  options: ['LO','HI'] },
        { n: 'Gain',  v: 60, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
        { n: 'SOLO',  v: 5,  min: 1, max: 9 },
      ]
    },
  ],

  /* ══════════════════════════════════════════════════════════
     CABINET
     ══════════════════════════════════════════════════════════ */
  CABINET: [
    {
      name: 'MS4x12',
      desc: 'Marshall 1960 A – 4×12" Celestion',
      params: [
        { n: 'MIC',      v: 1,  max: 1,  options: ['OFF','ON'] },
        { n: 'D57:D421', v: 50, max: 100 },
        { n: 'Hi',       v: 50, max: 100 },
        { n: 'Lo',       v: 50, max: 100 },
      ]
    },
    {
      name: 'FD2x12',
      desc: "Fender '65 Twin Reverb – 2×12\" Jensen",
      params: [
        { n: 'MIC',      v: 1,  max: 1,  options: ['OFF','ON'] },
        { n: 'D57:D421', v: 50, max: 100 },
        { n: 'Hi',       v: 50, max: 100 },
        { n: 'Lo',       v: 50, max: 100 },
      ]
    },
    {
      name: 'UK2x12',
      desc: 'Combo britânico inicial – 2×12" Celestion Alnico',
      params: [
        { n: 'MIC',      v: 1,  max: 1,  options: ['OFF','ON'] },
        { n: 'D57:D421', v: 50, max: 100 },
        { n: 'Hi',       v: 50, max: 100 },
        { n: 'Lo',       v: 50, max: 100 },
      ]
    },
    {
      name: 'MK3 1x12',
      desc: 'Mesa Boogie Mark III – 1×12" Celestion Black Shadow',
      params: [
        { n: 'MIC',      v: 1,  max: 1,  options: ['OFF','ON'] },
        { n: 'D57:D421', v: 50, max: 100 },
        { n: 'Hi',       v: 50, max: 100 },
        { n: 'Lo',       v: 50, max: 100 },
      ]
    },
    {
      name: 'BGN4x12',
      desc: 'Bogner Ecstasy – 4×12" Celestion',
      params: [
        { n: 'MIC',      v: 1,  max: 1,  options: ['OFF','ON'] },
        { n: 'D57:D421', v: 50, max: 100 },
        { n: 'Hi',       v: 50, max: 100 },
        { n: 'Lo',       v: 50, max: 100 },
      ]
    },
  ],

  /* ══════════════════════════════════════════════════════════
     MODULATION
     ══════════════════════════════════════════════════════════ */
  MODULATION: [
    {
      name: 'Tremolo',
      desc: 'Variação periódica de volume',
      params: [
        { n: 'Wave',  v: 0,  max: 2,  options: ['TRI','TUBE','SQR'] },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Rate',  v: 30, max: 100, tempo: true },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'Chorus',
      desc: 'Mistura pitch deslocado com original – movimento e espessura',
      params: [
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Rate',  v: 25, max: 50  },
        { n: 'Tone',  v: 5,  max: 10  },
        { n: 'Mix',   v: 50, max: 100 },
      ]
    },
    {
      name: 'StereoCho',
      desc: 'Chorus estéreo com tom limpo e transparente',
      params: [
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Rate',  v: 25, max: 50  },
        { n: 'Tone',  v: 5,  max: 10  },
        { n: 'Mix',   v: 50, max: 100 },
      ]
    },
    {
      name: 'Phaser',
      desc: 'Adiciona variação de fase ao som',
      params: [
        { n: 'Color', v: 0,  max: 3,  options: ['4STG','8STG','INV4','INV8'] },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Rate',  v: 25, max: 50, tempo: true },
        { n: 'RESO',  v: 40, max: 100 },
      ]
    },
    {
      name: 'VinFLNGR',
      desc: 'Flanger analógico – MXR M-117R',
      params: [
        { n: 'PreD',  v: 25, max: 50  },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Rate',  v: 25, max: 50, tempo: true },
        { n: 'RESO',  v: 0,  min: -10, max: 10 },
      ]
    },
    {
      name: 'TheVibe',
      desc: 'Vibe com ondulações únicas e características',
      params: [
        { n: 'Speed', v: 25, max: 50  },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Mode',  v: 0,  max: 1,  options: ['VIBRT','CHORS'] },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'Vibrato',
      desc: 'Vibrato automático',
      params: [
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Rate',  v: 25, max: 50, tempo: true },
        { n: 'Tone',  v: 5,  max: 10  },
        { n: 'BAL',   v: 50, max: 100 },
      ]
    },
    {
      name: 'Octave',
      desc: 'Adiciona 1ª e 2ª oitava abaixo do som original',
      params: [
        { n: 'OCT1', v: 60, max: 100 },
        { n: 'OCT2', v: 0,  max: 100 },
        { n: 'Tone', v: 5,  max: 10  },
        { n: 'Dry',  v: 80, max: 100 },
      ]
    },
    {
      name: 'RingMod',
      desc: 'Modulação em anel – som metálico com ring',
      params: [
        { n: 'FREQ', v: 25, max: 50  },
        { n: 'Tone', v: 5,  max: 10  },
        { n: 'BAL',  v: 50, max: 100 },
        { n: 'VOL',  v: 80, max: 100 },
      ]
    },
    {
      name: 'Detune',
      desc: 'Chorus sem sensação de modulação – pitch levemente deslocado',
      params: [
        { n: 'Cent', v: 0,  min: -25, max: 25 },
        { n: 'PreD', v: 25, max: 50  },
        { n: 'Tone', v: 5,  max: 10  },
        { n: 'Mix',  v: 50, max: 100 },
      ]
    },
    {
      name: 'PitchSHFT',
      desc: 'Deslocamento de pitch para cima ou baixo',
      params: [
        { n: 'Shift', v: 0,  min: -12, max: 24 },
        { n: 'Fine',  v: 0,  min: -25, max: 25 },
        { n: 'Tone',  v: 5,  max: 10  },
        { n: 'BAL',   v: 50, max: 100 },
      ]
    },
    {
      name: 'MonoPitch',
      desc: 'Pitch shifter monofônico (notas únicas) com pouca variação',
      params: [
        { n: 'Shift', v: 0,  min: -12, max: 24 },
        { n: 'Fine',  v: 0,  min: -25, max: 25 },
        { n: 'Tone',  v: 5,  max: 10  },
        { n: 'BAL',   v: 50, max: 100 },
      ]
    },
    {
      name: 'HPS',
      desc: 'Pitch shifter inteligente – segue escala e tonalidade',
      params: [
        { n: 'Scale', v: 3,  min: -6, max: 6 },
        { n: 'Key',   v: 0,  max: 11, options: ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'] },
        { n: 'Tone',  v: 5,  max: 10 },
        { n: 'Mix',   v: 50, max: 100 },
      ]
    },
    {
      name: 'Kick FLNG',
      desc: 'Flanger controlado pelo footswitch com reset de LFO',
      params: [
        { n: 'PreD',  v: 50, max: 100 },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Rate',  v: 50, max: 100 },
        { n: 'ON/OFF',v: 0,  max: 1,  options: ['LATCH','UnLATCH'] },
        { n: 'RESO',  v: 50, max: 100 },
        { n: 'Mix',   v: 50, max: 100 },
        { n: 'RST-F', v: 50, max: 100 },
        { n: 'LFO',   v: 0,  max: 1,  options: ['RESET','STOP'] },
      ]
    },
  ],

  /* ══════════════════════════════════════════════════════════
     SFX
     ══════════════════════════════════════════════════════════ */
  SFX: [
    {
      name: 'Bomber',
      desc: 'Gera sons explosivos em resposta ao input',
      params: [
        { n: 'Decay', v: 50, max: 100 },
        { n: 'Tone',  v: 5,  max: 10  },
        { n: 'Mix',   v: 50, max: 100 },
        { n: 'ON/OFF',v: 0,  max: 1,  options: ['LATCH','TRGGR'] },
      ]
    },
  ],

  /* ══════════════════════════════════════════════════════════
     DELAY
     ══════════════════════════════════════════════════════════ */
  DELAY: [
    {
      name: 'Delay',
      desc: 'Delay digital longo – máx. 4000ms',
      params: [
        { n: 'Time', v: 400, min: 1,  max: 4000, tempo: true },
        { n: 'F.B',  v: 30,  max: 100 },
        { n: 'Mix',  v: 40,  max: 100 },
        { n: 'Tail', v: 1,   max: 1,  options: ['OFF','ON'] },
      ]
    },
    {
      name: 'AnalogDly',
      desc: 'Simulação de delay analógico – máx. 4000ms',
      params: [
        { n: 'Time', v: 400, min: 1,  max: 4000, tempo: true },
        { n: 'F.B',  v: 30,  max: 100 },
        { n: 'Mix',  v: 40,  max: 100 },
        { n: 'Tail', v: 1,   max: 1,  options: ['OFF','ON'] },
      ]
    },
    {
      name: 'TapeEcho',
      desc: 'Simulação de tape echo – mudar Time altera o pitch das repetições',
      params: [
        { n: 'Time', v: 300, min: 1,  max: 2000, tempo: true },
        { n: 'F.B',  v: 30,  max: 100 },
        { n: 'Mix',  v: 40,  max: 100 },
        { n: 'Tail', v: 1,   max: 1,  options: ['OFF','ON'] },
      ]
    },
    {
      name: 'ReverseDL',
      desc: 'Delay com reprodução reversa – máx. 2000ms',
      params: [
        { n: 'Time', v: 500, min: 10, max: 2000, tempo: true },
        { n: 'F.B',  v: 20,  max: 100 },
        { n: 'BAL',  v: 40,  max: 100 },
        { n: 'Tail', v: 1,   max: 1,  options: ['OFF','ON'] },
      ]
    },
    {
      name: 'ModDelay',
      desc: 'Delay com modulação – máx. 2000ms',
      params: [
        { n: 'Time', v: 400, min: 1,  max: 2000, tempo: true },
        { n: 'F.B',  v: 30,  max: 100 },
        { n: 'Mix',  v: 40,  max: 100 },
        { n: 'Tail', v: 1,   max: 1,  options: ['OFF','ON'] },
      ]
    },
    {
      name: 'Hold DLY',
      desc: 'Hold delay controlado pelo footswitch – máx. 4000ms',
      params: [
        { n: 'Time',  v: 400, min: 1,  max: 4000, tempo: true },
        { n: 'F.B',   v: 30,  max: 100 },
        { n: 'HiDMP', v: 5,   max: 10  },
        { n: 'Tone',  v: 50,  max: 100 },
        { n: 'Mix',   v: 40,  max: 100 },
        { n: 'P-P',   v: 0,   max: 1,  options: ['MONO','P-P'] },
        { n: 'Tail',  v: 1,   max: 1,  options: ['OFF','ON'] },
        { n: 'Hold',  v: 0,   max: 1,  options: ['LATCH','UnLATCH'] },
      ]
    },
  ],

  /* ══════════════════════════════════════════════════════════
     REVERB
     ══════════════════════════════════════════════════════════ */
  REVERB: [
    {
      name: 'Air',
      desc: 'Reproduz a ambiência de um espaço – profundidade espacial',
      params: [
        { n: 'Size', v: 50, min: 1, max: 100 },
        { n: 'REF',  v: 5,  max: 10  },
        { n: 'Mix',  v: 35, max: 100 },
        { n: 'Tail', v: 1,  max: 1,  options: ['OFF','ON'] },
      ]
    },
    {
      name: 'Room',
      desc: 'Reverb que simula a acústica de uma sala',
      params: [
        { n: 'PreD',  v: 10, min: 1, max: 100 },
        { n: 'Decay', v: 15, min: 1, max: 30  },
        { n: 'Mix',   v: 35, max: 100 },
        { n: 'Tail',  v: 1,  max: 1, options: ['OFF','ON'] },
      ]
    },
    {
      name: 'Hall',
      desc: 'Reverb que simula a acústica de um salão de concertos',
      params: [
        { n: 'PreD',  v: 20, min: 1, max: 100 },
        { n: 'Decay', v: 20, min: 1, max: 30  },
        { n: 'Mix',   v: 35, max: 100 },
        { n: 'Tail',  v: 1,  max: 1, options: ['OFF','ON'] },
      ]
    },
    {
      name: 'HD Hall',
      desc: 'Hall reverb denso e rico em harmônicos',
      params: [
        { n: 'PreD',  v: 20, min: 1, max: 200 },
        { n: 'Decay', v: 50, max: 100 },
        { n: 'Mix',   v: 35, max: 100 },
        { n: 'Tail',  v: 1,  max: 1, options: ['OFF','ON'] },
      ]
    },
    {
      name: 'Spring',
      desc: 'Simula um reverb de mola (spring reverb)',
      params: [
        { n: 'PreD',  v: 10, min: 1, max: 100 },
        { n: 'Decay', v: 15, min: 1, max: 30  },
        { n: 'Mix',   v: 35, max: 100 },
        { n: 'Tail',  v: 1,  max: 1, options: ['OFF','ON'] },
      ]
    },
    {
      name: 'FD Spring',
      desc: "Spring reverb do Fender '65 Twin Reverb",
      params: [
        { n: 'Color', v: 0,  max: 1,  options: ['0','1'] },
        { n: 'Lo',    v: 50, max: 100 },
        { n: 'Hi',    v: 50, max: 100 },
        { n: 'Mix',   v: 35, max: 100 },
      ]
    },
    {
      name: 'Plate',
      desc: 'Simula um reverb de placa (plate reverb)',
      params: [
        { n: 'PreD',  v: 10, min: 1, max: 200 },
        { n: 'Decay', v: 50, max: 100 },
        { n: 'Mix',   v: 35, max: 100 },
        { n: 'Tail',  v: 1,  max: 1, options: ['OFF','ON'] },
      ]
    },
  ],

  /* ══════════════════════════════════════════════════════════
     PEDAL
     ══════════════════════════════════════════════════════════ */
  PEDAL: [
    {
      name: 'PDL Vol',
      desc: 'Volume pedal com curva ajustável',
      params: [
        { n: 'VOL',   v: 100, max: 100, pedal: true },
        { n: 'Min',   v: 0,   max: 100 },
        { n: 'Max',   v: 100, max: 100 },
        { n: 'Curve', v: 0,   max: 1,  options: ['A','B'] },
      ]
    },
    {
      name: 'BlackWah',
      desc: 'Wah pedal – Cry Baby',
      params: [
        { n: 'FREQ',  v: 50, max: 100, pedal: true },
        { n: 'Range', v: 50, max: 100 },
        { n: 'Dry',   v: 0,  max: 100 },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'ChromeWah',
      desc: 'Wah pedal britânico cromado',
      params: [
        { n: 'FREQ',  v: 50, max: 100, pedal: true },
        { n: 'Range', v: 50, max: 100 },
        { n: 'Dry',   v: 0,  max: 100 },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'WAH100',
      desc: 'Simulação Ibanez wah',
      params: [
        { n: 'FREQ',  v: 25, max: 50,  pedal: true },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Dry',   v: 0,  max: 100 },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'PDL Pitch',
      desc: 'Pitch em tempo real controlado pelo pedal de expressão',
      params: [
        { n: 'Bend',  v: 50, max: 100, pedal: true },
        { n: 'Color', v: 1,  min: 1,  max: 9 },
        { n: 'Tone',  v: 5,  max: 10  },
        { n: 'Mode',  v: 0,  max: 1,  options: ['UP','DOWN'] },
      ]
    },
    {
      name: 'PDL MnPit',
      desc: 'Pitch shifter monofônico controlado pelo pedal',
      params: [
        { n: 'Bend',  v: 50, max: 100, pedal: true },
        { n: 'Color', v: 1,  min: 1,  max: 9 },
        { n: 'Tone',  v: 5,  max: 10  },
        { n: 'Mode',  v: 0,  max: 1,  options: ['UP','DOWN'] },
      ]
    },
    {
      name: 'PDL Vibe',
      desc: 'Vibe com ondulações únicas controlado pelo pedal',
      params: [
        { n: 'Speed', v: 25, max: 50,  pedal: true },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Mode',  v: 0,  max: 1,  options: ['VIBRAT','CHORS'] },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'PDL Drive',
      desc: 'Gain do drive controlado pelo pedal de expressão',
      params: [
        { n: 'Gain',  v: 50, max: 100, pedal: true },
        { n: 'Tone',  v: 50, max: 100 },
        { n: 'PRSNC', v: 50, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
      ]
    },
    {
      name: 'PDL PHSR',
      desc: 'Frequência do phaser controlada pelo pedal de expressão',
      params: [
        { n: 'Rate',  v: 25, max: 50,  pedal: true },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'RESO',  v: 40, max: 100 },
        { n: 'Color', v: 0,  max: 3,  options: ['4STG','8STG','INV4','INV8'] },
      ]
    },
    {
      name: 'PDL Delay',
      desc: 'Input level do delay controlado pelo pedal',
      params: [
        { n: 'InLvl', v: 50,  max: 100,  pedal: true },
        { n: 'Time',  v: 400, min: 1, max: 4000, tempo: true },
        { n: 'F.B',   v: 30,  max: 100 },
        { n: 'Mix',   v: 40,  max: 100 },
      ]
    },
    {
      name: 'PDL Rev',
      desc: 'Input level do reverb controlado pelo pedal',
      params: [
        { n: 'InLvl', v: 50, max: 100, pedal: true },
        { n: 'PreD',  v: 10, min: 1,  max: 100 },
        { n: 'Decay', v: 15, min: 1,  max: 30  },
        { n: 'Mix',   v: 35, max: 100 },
      ]
    },
    {
      name: 'OSC Echo',
      desc: 'Oscilação do delay controlada pelo pedal de expressão',
      params: [
        { n: 'OSC',   v: 50,  max: 100,  pedal: true },
        { n: 'T-Min', v: 19,  min: 19,  max: 500 },
        { n: 'T-Max', v: 500, min: 19,  max: 500 },
        { n: 'Mix',   v: 40,  max: 100 },
      ]
    },
    {
      name: 'VoiceWah',
      desc: 'Faz a guitarra soar como uma voz humana',
      params: [
        { n: 'Vowel', v: 50, max: 100, pedal: true },
        { n: 'PTTRN', v: 0,  max: 2,  options: ['A','B','C'] },
        { n: 'Voice', v: 50, max: 100 },
        { n: 'Mode',  v: 0,  max: 1,  options: ['STEP','SOFT'] },
      ]
    },
    {
      name: 'PDL Roto',
      desc: 'Simulação de rotary speaker controlado pelo pedal',
      params: [
        { n: 'Mode',  v: 0,  max: 1,  options: ['SLOW','FAST'], pedal: true },
        { n: 'Drive', v: 40, max: 100 },
        { n: 'BAL',   v: 50, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
      ]
    },
  ],

  /* ══════════════════════════════════════════════════════════
     RHYTHM
     ══════════════════════════════════════════════════════════ */
  RHYTHM: [
    {
      name: 'Rhythm',
      desc: 'Gerador de bateria/ritmo – 68 padrões (Tabela 3 do manual)',
      params: [
        { n: 'PATTERN', v: 1,   min: 1,  max: 68 },
        { n: 'BPM',     v: 120, min: 40, max: 250 },
        { n: 'VOL',     v: 60,  max: 100 },
      ]
    },
  ],

  /* ══════════════════════════════════════════════════════════
     LOOPER
     ══════════════════════════════════════════════════════════ */
  LOOPER: [
    {
      name: 'LP-MONO',
      desc: 'Looper mono',
      params: [
        { n: 'Undo', v: 0,  max: 1,  options: ['OFF','ON'] },
        { n: 'Stop', v: 0,  max: 2,  options: ['STOP','FINISH','FADEOUT'] },
        { n: 'VOL',  v: 80, max: 100 },
      ]
    },
    {
      name: 'LP-STEREO',
      desc: 'Looper estéreo',
      params: [
        { n: 'Undo', v: 0,  max: 1,  options: ['OFF','ON'] },
        { n: 'Stop', v: 0,  max: 2,  options: ['STOP','FINISH','FADEOUT'] },
        { n: 'VOL',  v: 80, max: 100 },
      ]
    },
  ],

};

/* ══════════════════════════════════════════════════════════
   Mapeamento categoria → classe CSS de cor
   ══════════════════════════════════════════════════════════ */
const CAT_COLORS = {
  DYNAMICS:   'dynamics',
  FILTER:     'filter',
  DRIVE:      'drive',
  AMP:        'amp',
  CABINET:    'cabinet',
  MODULATION: 'modulation',
  SFX:        'sfx',
  DELAY:      'delay',
  REVERB:     'reverb',
  PEDAL:      'pedal',
  RHYTHM:     'rhythm',
  LOOPER:     'looper',
};

/* Contagem por categoria: DYNAMICS=5, FILTER=9, DRIVE=12, AMP=5, CABINET=5,
   MODULATION=14, SFX=1, DELAY=6, REVERB=7, PEDAL=14, RHYTHM=1, LOOPER=2
   TOTAL = 81 efeitos */
const FX_COUNT = Object.fromEntries(
  Object.entries(FX_DB).map(([cat, arr]) => [cat, arr.length])
);
