/**
 * fx-database.js
 * ZOOM G5n – Banco de Efeitos Completo
 * Baseado no manual oficial Effect Types and Parameters (2015 ZOOM CORPORATION)
 */

const FX_DB = {

  DYNAMICS: [
    {
      name: 'Comp',
      desc: 'Compressor estilo MXR Dyna Comp',
      params: [
        { n: 'Sense', v: 5,  max: 10  },
        { n: 'ATTCK', v: 50, max: 100 },
        { n: 'Tone',  v: 5,  max: 10  },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'RackComp',
      desc: 'Compressor com controle detalhado',
      params: [
        { n: 'THRSH', v: 25, max: 50  },
        { n: 'Ratio', v: 5,  max: 10  },
        { n: 'ATTCK', v: 5,  max: 10  },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'SlowATTCK',
      desc: 'Ataque lento – som de violino',
      params: [
        { n: 'Time',  v: 25, max: 50  },
        { n: 'Curve', v: 5,  max: 10  },
        { n: 'Tone',  v: 60, max: 100 },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'ZNR',
      desc: 'Noise Reduction exclusivo ZOOM',
      params: [
        { n: 'Depth', v: 60, max: 100 },
        { n: 'THRSH', v: 40, max: 100 },
        { n: 'Decay', v: 50, max: 100 },
      ]
    },
    {
      name: 'MuteSW',
      desc: 'Mute controlado por footswitch',
      params: [
        { n: 'Edge',  v: 50, max: 100 },
        { n: 'Speed', v: 50, max: 100 },
      ]
    },
  ],

  FILTER: [
    {
      name: 'AutoWah',
      desc: 'Wah automático por dinâmica de ataque',
      params: [
        { n: 'Sense', v: 5,  max: 10  },
        { n: 'RESO',  v: 5,  max: 10  },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'Resonance',
      desc: 'Filtro de ressonância por dinâmica',
      params: [
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
        { n: 'BAL',   v: 50, max: 100 },
      ]
    },
    {
      name: 'SeqFLTR',
      desc: 'Filtro sequencial – Z.Vex Seek-Wah',
      params: [
        { n: 'Step',  v: 4,  max: 8   },
        { n: 'Speed', v: 25, max: 50  },
        { n: 'RESO',  v: 5,  max: 10  },
      ]
    },
    {
      name: 'Gt GEQ',
      desc: 'Equalizador gráfico mono 6 bandas',
      params: [
        { n: '160Hz',  v: 0, max: 24, offset: -12 },
        { n: '400Hz',  v: 0, max: 24, offset: -12 },
        { n: '800Hz',  v: 0, max: 24, offset: -12 },
        { n: '3.2kHz', v: 0, max: 24, offset: -12 },
        { n: 'VOL',    v: 80, max: 100 },
      ]
    },
    {
      name: 'Gt GEQ7',
      desc: 'Equalizador gráfico mono 7 bandas',
      params: [
        { n: '100Hz',  v: 0, max: 24, offset: -12 },
        { n: '200Hz',  v: 0, max: 24, offset: -12 },
        { n: '400Hz',  v: 0, max: 24, offset: -12 },
        { n: '800Hz',  v: 0, max: 24, offset: -12 },
        { n: 'VOL',    v: 80, max: 100 },
      ]
    },
    {
      name: 'St Gt GEQ',
      desc: 'Equalizador gráfico estéreo 6 bandas',
      params: [
        { n: '160Hz',  v: 0, max: 24, offset: -12 },
        { n: '400Hz',  v: 0, max: 24, offset: -12 },
        { n: '3.2kHz', v: 0, max: 24, offset: -12 },
        { n: 'VOL',    v: 80, max: 100 },
      ]
    },
    {
      name: 'ParaEQ',
      desc: 'Equalizador paramétrico 1 banda',
      params: [
        { n: 'FREQ', v: 50, max: 100 },
        { n: 'Q',    v: 50, max: 100 },
        { n: 'Gain', v: 0,  max: 24, offset: -12 },
        { n: 'VOL',  v: 80, max: 100 },
      ]
    },
    {
      name: 'EG FLTR',
      desc: 'Filtro controlado por footswitch',
      params: [
        { n: 'FREQ1', v: 30, max: 100 },
        { n: 'FREQ2', v: 70, max: 100 },
        { n: 'RESO',  v: 50, max: 100 },
        { n: 'Speed', v: 50, max: 100 },
      ]
    },
  ],

  DRIVE: [
    {
      name: 'TS Drive',
      desc: 'Simulação Ibanez TS808',
      params: [
        { n: 'Gain', v: 50, max: 100 },
        { n: 'Tone', v: 50, max: 100 },
        { n: 'VOL',  v: 70, max: 100 },
      ]
    },
    {
      name: 'EP Stomp',
      desc: 'Pré-amp Maestro Echoplex',
      params: [
        { n: 'Gain',   v: 40, max: 100 },
        { n: 'Bass',   v: 50, max: 100 },
        { n: 'Treble', v: 50, max: 100 },
        { n: 'VOL',    v: 70, max: 100 },
      ]
    },
    {
      name: 'RC Boost',
      desc: 'Booster de clean a drive suave',
      params: [
        { n: 'Gain',   v: 40, max: 100 },
        { n: 'Bass',   v: 50, max: 100 },
        { n: 'Treble', v: 50, max: 100 },
        { n: 'VOL',    v: 70, max: 100 },
      ]
    },
    {
      name: 'GoldDrive',
      desc: 'Overdrive boutique dourado famoso',
      params: [
        { n: 'Gain',   v: 50, max: 100 },
        { n: 'Bass',   v: 50, max: 100 },
        { n: 'Treble', v: 50, max: 100 },
        { n: 'VOL',    v: 70, max: 100 },
      ]
    },
    {
      name: 'SweetDrv',
      desc: 'Overdrive de som suave',
      params: [
        { n: 'Gain',  v: 50, max: 100 },
        { n: 'Tone',  v: 50, max: 100 },
        { n: 'Focus', v: 50, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
      ]
    },
    {
      name: 'DYN Drive',
      desc: 'Drive cálido estilo tube amp',
      params: [
        { n: 'Gain', v: 50, max: 100 },
        { n: 'Tone', v: 50, max: 100 },
        { n: 'VOL',  v: 70, max: 100 },
      ]
    },
    {
      name: 'RedCrunch',
      desc: '"Brown sound" – Van Halen',
      params: [
        { n: 'Gain',  v: 60, max: 100 },
        { n: 'Tone',  v: 50, max: 100 },
        { n: 'PRSNC', v: 50, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
      ]
    },
    {
      name: 'MetalWRLD',
      desc: 'Simulação BOSS Metal Zone',
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
        { n: 'VOL',   v: 70, max: 100 },
      ]
    },
    {
      name: 'OctFuzz',
      desc: 'Fuzz com oitava acima',
      params: [
        { n: 'Boost', v: 50, max: 100 },
        { n: 'Tone',  v: 50, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
      ]
    },
    {
      name: 'SpotBoost',
      desc: 'Booster flexível',
      params: [
        { n: 'Boost',  v: 50, max: 100 },
        { n: 'Bass',   v: 50, max: 100 },
        { n: 'Treble', v: 50, max: 100 },
      ]
    },
    {
      name: 'Aco.Sim',
      desc: 'Simulação de violão acústico',
      params: [
        { n: 'Top',  v: 60, max: 100 },
        { n: 'Body', v: 60, max: 100 },
        { n: 'Tone', v: 50, max: 100 },
        { n: 'VOL',  v: 70, max: 100 },
      ]
    },
  ],

  AMP: [
    {
      name: 'MS 800',
      desc: 'Marshall JCM800 2203',
      params: [
        { n: 'Bass',   v: 50, max: 100 },
        { n: 'MID',    v: 50, max: 100 },
        { n: 'Treble', v: 50, max: 100 },
        { n: 'PRSNC',  v: 50, max: 100 },
        { n: 'Gain',   v: 60, max: 100 },
        { n: 'VOL',    v: 70, max: 100 },
      ]
    },
    {
      name: 'FD TWNR',
      desc: "Fender '65 Twin Reverb",
      params: [
        { n: 'Bass',   v: 50, max: 100 },
        { n: 'MID',    v: 50, max: 100 },
        { n: 'Treble', v: 50, max: 100 },
        { n: 'Gain',   v: 40, max: 100 },
        { n: 'VOL',    v: 70, max: 100 },
      ]
    },
    {
      name: 'UK 30A',
      desc: 'Combo britânico classe A',
      params: [
        { n: 'Bass',   v: 50, max: 100 },
        { n: 'Treble', v: 50, max: 100 },
        { n: 'Cut',    v: 50, max: 100 },
        { n: 'Gain',   v: 50, max: 100 },
        { n: 'VOL',    v: 70, max: 100 },
      ]
    },
    {
      name: 'BG MK3',
      desc: 'Mesa Boogie Mark III combo',
      params: [
        { n: 'Bass',   v: 50, max: 100 },
        { n: 'MID',    v: 50, max: 100 },
        { n: 'Treble', v: 50, max: 100 },
        { n: 'Gain1',  v: 55, max: 100 },
        { n: 'Gain2',  v: 60, max: 100 },
        { n: 'VOL',    v: 70, max: 100 },
      ]
    },
    {
      name: 'XtasyBlue',
      desc: 'Bogner Ecstasy canal azul',
      params: [
        { n: 'Bass',   v: 50, max: 100 },
        { n: 'MID',    v: 50, max: 100 },
        { n: 'Treble', v: 50, max: 100 },
        { n: 'PRSNC',  v: 50, max: 100 },
        { n: 'Gain',   v: 60, max: 100 },
        { n: 'VOL',    v: 70, max: 100 },
      ]
    },
  ],

  CABINET: [
    {
      name: 'MS4x12',
      desc: 'Marshall 1960 A – 4×12" Celestion',
      params: [
        { n: 'D57:D421', v: 50, max: 100 },
        { n: 'Hi',       v: 50, max: 100 },
        { n: 'Lo',       v: 50, max: 100 },
      ]
    },
    {
      name: 'FD2x12',
      desc: "Fender Twin Reverb – 2×12\" Jensen",
      params: [
        { n: 'D57:D421', v: 50, max: 100 },
        { n: 'Hi',       v: 50, max: 100 },
        { n: 'Lo',       v: 50, max: 100 },
      ]
    },
    {
      name: 'UK2x12',
      desc: 'Combo britânico – 2×12" Celestion Alnico',
      params: [
        { n: 'D57:D421', v: 50, max: 100 },
        { n: 'Hi',       v: 50, max: 100 },
        { n: 'Lo',       v: 50, max: 100 },
      ]
    },
    {
      name: 'MK3 1x12',
      desc: 'Mesa Boogie Mark III – 1×12" Black Shadow',
      params: [
        { n: 'D57:D421', v: 50, max: 100 },
        { n: 'Hi',       v: 50, max: 100 },
        { n: 'Lo',       v: 50, max: 100 },
      ]
    },
    {
      name: 'BGN4x12',
      desc: 'Bogner Ecstasy – 4×12" Celestion',
      params: [
        { n: 'D57:D421', v: 50, max: 100 },
        { n: 'Hi',       v: 50, max: 100 },
        { n: 'Lo',       v: 50, max: 100 },
      ]
    },
  ],

  MODULATION: [
    {
      name: 'Tremolo',
      desc: 'Variação de volume periódica',
      params: [
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Rate',  v: 30, max: 100 },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'Chorus',
      desc: 'Chorus – movimento e espessura',
      params: [
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Rate',  v: 25, max: 50  },
        { n: 'Tone',  v: 5,  max: 10  },
        { n: 'Mix',   v: 50, max: 100 },
      ]
    },
    {
      name: 'StereoCho',
      desc: 'Chorus estéreo com tom limpo',
      params: [
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Rate',  v: 25, max: 50  },
        { n: 'Mix',   v: 50, max: 100 },
      ]
    },
    {
      name: 'Phaser',
      desc: 'Variação de fase no som',
      params: [
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Rate',  v: 25, max: 50  },
        { n: 'RESO',  v: 40, max: 100 },
      ]
    },
    {
      name: 'VinFLNGR',
      desc: 'Flanger analógico – MXR M-117R',
      params: [
        { n: 'PreD',  v: 25, max: 50  },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Rate',  v: 25, max: 50  },
        { n: 'RESO',  v: 0,  max: 20, offset: -10 },
      ]
    },
    {
      name: 'TheVibe',
      desc: 'Vibe com ondulações únicas',
      params: [
        { n: 'Speed', v: 25, max: 50  },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'Vibrato',
      desc: 'Vibrato automático',
      params: [
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Rate',  v: 25, max: 50  },
        { n: 'BAL',   v: 50, max: 100 },
      ]
    },
    {
      name: 'Octave',
      desc: 'Adiciona oitavas abaixo do som original',
      params: [
        { n: 'OCT1', v: 60, max: 100 },
        { n: 'OCT2', v: 0,  max: 100 },
        { n: 'Dry',  v: 80, max: 100 },
      ]
    },
    {
      name: 'Detune',
      desc: 'Chorus sem sensação de modulação',
      params: [
        { n: 'Cent', v: 50, max: 100 },
        { n: 'Mix',  v: 50, max: 100 },
      ]
    },
    {
      name: 'PitchSHFT',
      desc: 'Deslocamento de pitch para cima ou baixo',
      params: [
        { n: 'Shift', v: 50, max: 100 },
        { n: 'Fine',  v: 50, max: 100 },
        { n: 'BAL',   v: 50, max: 100 },
      ]
    },
    {
      name: 'MonoPitch',
      desc: 'Pitch shifter para notas únicas (monofônico)',
      params: [
        { n: 'Shift', v: 50, max: 100 },
        { n: 'Fine',  v: 50, max: 100 },
        { n: 'BAL',   v: 50, max: 100 },
      ]
    },
    {
      name: 'HPS',
      desc: 'Pitch shifter inteligente por escala e tom',
      params: [
        { n: 'Tone', v: 5,  max: 10  },
        { n: 'Mix',  v: 50, max: 100 },
      ]
    },
    {
      name: 'RingMod',
      desc: 'Modulação em anel – som metálico',
      params: [
        { n: 'FREQ', v: 25, max: 50  },
        { n: 'BAL',  v: 50, max: 100 },
        { n: 'VOL',  v: 80, max: 100 },
      ]
    },
    {
      name: 'Kick FLNG',
      desc: 'Flanger controlado por footswitch',
      params: [
        { n: 'PreD',  v: 50, max: 100 },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'Rate',  v: 50, max: 100 },
        { n: 'RESO',  v: 50, max: 100 },
      ]
    },
  ],

  SFX: [
    {
      name: 'Bomber',
      desc: 'Gera sons explosivos',
      params: [
        { n: 'Decay', v: 50, max: 100 },
        { n: 'Tone',  v: 5,  max: 10  },
        { n: 'Mix',   v: 50, max: 100 },
      ]
    },
  ],

  DELAY: [
    {
      name: 'Delay',
      desc: 'Delay longo – máx. 4000ms',
      params: [
        { n: 'Time', v: 400, max: 4000 },
        { n: 'F.B',  v: 30,  max: 100  },
        { n: 'Mix',  v: 40,  max: 100  },
      ]
    },
    {
      name: 'AnalogDly',
      desc: 'Simulação de delay analógico – máx. 4000ms',
      params: [
        { n: 'Time', v: 400, max: 4000 },
        { n: 'F.B',  v: 30,  max: 100  },
        { n: 'Mix',  v: 40,  max: 100  },
      ]
    },
    {
      name: 'TapeEcho',
      desc: 'Simulação de tape echo – máx. 2000ms',
      params: [
        { n: 'Time', v: 300, max: 2000 },
        { n: 'F.B',  v: 30,  max: 100  },
        { n: 'Mix',  v: 40,  max: 100  },
      ]
    },
    {
      name: 'ReverseDL',
      desc: 'Delay reverso – máx. 2000ms',
      params: [
        { n: 'Time', v: 500, max: 2000 },
        { n: 'F.B',  v: 20,  max: 100  },
        { n: 'BAL',  v: 40,  max: 100  },
      ]
    },
    {
      name: 'ModDelay',
      desc: 'Delay com modulação – máx. 2000ms',
      params: [
        { n: 'Time', v: 400, max: 2000 },
        { n: 'F.B',  v: 30,  max: 100  },
        { n: 'Mix',  v: 40,  max: 100  },
      ]
    },
    {
      name: 'Hold DLY',
      desc: 'Hold delay controlado por footswitch',
      params: [
        { n: 'Time',  v: 400, max: 4000 },
        { n: 'F.B',   v: 30,  max: 100  },
        { n: 'HiDMP', v: 5,   max: 10   },
        { n: 'Mix',   v: 40,  max: 100  },
      ]
    },
    {
      name: 'PDL Delay',
      desc: 'Delay com input controlado pelo pedal',
      params: [
        { n: 'InLvl', v: 50, max: 100  },
        { n: 'Time',  v: 400, max: 4000 },
        { n: 'F.B',   v: 30,  max: 100  },
        { n: 'Mix',   v: 40,  max: 100  },
      ]
    },
  ],

  REVERB: [
    {
      name: 'Air',
      desc: 'Ambiente de sala – profundidade espacial',
      params: [
        { n: 'Size', v: 50, max: 100 },
        { n: 'REF',  v: 5,  max: 10  },
        { n: 'Mix',  v: 35, max: 100 },
      ]
    },
    {
      name: 'Room',
      desc: 'Reverb de sala',
      params: [
        { n: 'PreD',  v: 10, max: 100 },
        { n: 'Decay', v: 15, max: 30  },
        { n: 'Mix',   v: 35, max: 100 },
      ]
    },
    {
      name: 'Hall',
      desc: 'Reverb de salão de concerto',
      params: [
        { n: 'PreD',  v: 20, max: 100 },
        { n: 'Decay', v: 20, max: 30  },
        { n: 'Mix',   v: 35, max: 100 },
      ]
    },
    {
      name: 'HD Hall',
      desc: 'Hall reverb denso',
      params: [
        { n: 'PreD',  v: 20, max: 200 },
        { n: 'Decay', v: 50, max: 100 },
        { n: 'Mix',   v: 35, max: 100 },
      ]
    },
    {
      name: 'Spring',
      desc: 'Simulação de reverb spring',
      params: [
        { n: 'PreD',  v: 10, max: 100 },
        { n: 'Decay', v: 15, max: 30  },
        { n: 'Mix',   v: 35, max: 100 },
      ]
    },
    {
      name: 'FD Spring',
      desc: "Spring reverb Fender '65 Twin Reverb",
      params: [
        { n: 'Lo',  v: 50, max: 100 },
        { n: 'Hi',  v: 50, max: 100 },
        { n: 'Mix', v: 35, max: 100 },
      ]
    },
    {
      name: 'Plate',
      desc: 'Simulação de plate reverb',
      params: [
        { n: 'PreD',  v: 10, max: 200 },
        { n: 'Decay', v: 50, max: 100 },
        { n: 'Mix',   v: 35, max: 100 },
      ]
    },
  ],

  PEDAL: [
    {
      name: 'PDL Vol',
      desc: 'Volume pedal com curva ajustável',
      params: [
        { n: 'VOL', v: 100, max: 100 },
        { n: 'Min', v: 0,   max: 100 },
        { n: 'Max', v: 100, max: 100 },
      ]
    },
    {
      name: 'BlackWah',
      desc: 'Wah pedal – Cry Baby',
      params: [
        { n: 'FREQ',  v: 50, max: 100 },
        { n: 'Range', v: 50, max: 100 },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'ChromeWah',
      desc: 'Wah britânico cromado',
      params: [
        { n: 'FREQ',  v: 50, max: 100 },
        { n: 'Range', v: 50, max: 100 },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'WAH100',
      desc: 'Simulação Ibanez wah',
      params: [
        { n: 'FREQ',  v: 25, max: 50  },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'PDL Pitch',
      desc: 'Pitch em tempo real via pedal',
      params: [
        { n: 'Bend', v: 50, max: 100 },
        { n: 'Tone', v: 5,  max: 10  },
      ]
    },
    {
      name: 'PDL MnPit',
      desc: 'Pitch shifter monofônico via pedal',
      params: [
        { n: 'Bend', v: 50, max: 100 },
        { n: 'Tone', v: 5,  max: 10  },
      ]
    },
    {
      name: 'PDL Vibe',
      desc: 'Vibe controlado pelo pedal',
      params: [
        { n: 'Speed', v: 25, max: 50  },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'VOL',   v: 80, max: 100 },
      ]
    },
    {
      name: 'PDL Drive',
      desc: 'Controle de gain via pedal expressão',
      params: [
        { n: 'Gain',  v: 50, max: 100 },
        { n: 'Tone',  v: 50, max: 100 },
        { n: 'PRSNC', v: 50, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
      ]
    },
    {
      name: 'PDL PHSR',
      desc: 'Phaser controlado pelo pedal expressão',
      params: [
        { n: 'Rate',  v: 25, max: 50  },
        { n: 'Depth', v: 60, max: 100 },
        { n: 'RESO',  v: 40, max: 100 },
      ]
    },
    {
      name: 'PDL Rev',
      desc: 'Reverb controlado pelo pedal',
      params: [
        { n: 'InLvl', v: 50, max: 100 },
        { n: 'Decay', v: 15, max: 30  },
        { n: 'Mix',   v: 35, max: 100 },
      ]
    },
    {
      name: 'OSC Echo',
      desc: 'Delay com oscilação via pedal',
      params: [
        { n: 'OSC',   v: 50, max: 100 },
        { n: 'T-Min', v: 19, max: 500 },
        { n: 'T-Max', v: 500, max: 500 },
        { n: 'Mix',   v: 40, max: 100 },
      ]
    },
    {
      name: 'VoiceWah',
      desc: 'Guitarra soa como voz humana',
      params: [
        { n: 'Vowel', v: 50, max: 100 },
        { n: 'Voice', v: 50, max: 100 },
      ]
    },
    {
      name: 'PDL Roto',
      desc: 'Simulação de rotary speaker',
      params: [
        { n: 'Drive', v: 40, max: 100 },
        { n: 'BAL',   v: 50, max: 100 },
        { n: 'VOL',   v: 70, max: 100 },
      ]
    },
  ],

  RHYTHM: [
    {
      name: 'Rhythm',
      desc: 'Gerador de ritmo – 68 padrões disponíveis',
      params: [
        { n: 'BPM', v: 120, max: 250 },
        { n: 'VOL', v: 60,  max: 100 },
      ]
    },
  ],

  LOOPER: [
    {
      name: 'LP-MONO',
      desc: 'Looper mono',
      params: [
        { n: 'VOL', v: 80, max: 100 },
      ]
    },
    {
      name: 'LP-STEREO',
      desc: 'Looper estéreo',
      params: [
        { n: 'VOL', v: 80, max: 100 },
      ]
    },
  ],

};

// Mapeamento de categoria → classe CSS de cor
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
