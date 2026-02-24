/**
 * patches.js
 * ZOOM G5n Patch Lab – Patches padrão de exemplo
 * Guitarra: Strato Seven SGT-207
 *
 * Estrutura de um patch:
 * {
 *   id:    número único,
 *   name:  string (máx. 16 chars, uppercase),
 *   chain: [ { ...fx }, ... ]  → cópia profunda dos efeitos
 *   cats:  [ 'CATEGORIA', ... ] → categoria de cada slot
 * }
 */

// Patches padrão – carregados na inicialização
const DEFAULT_PATCHES = [
  {
    id: 1,
    name: 'LEAD BGN',
    cats: ['DRIVE', 'AMP', 'MODULATION', 'REVERB'],
    chain: [
      {
        name: 'TS Drive',
        desc: 'Simulação Ibanez TS808',
        params: [
          { n: 'Gain', v: 55, max: 100 },
          { n: 'Tone', v: 55, max: 100 },
          { n: 'VOL',  v: 75, max: 100 },
        ]
      },
      {
        name: 'XtasyBlue',
        desc: 'Bogner Ecstasy canal azul',
        params: [
          { n: 'Bass',   v: 50, max: 100 },
          { n: 'MID',    v: 55, max: 100 },
          { n: 'Treble', v: 50, max: 100 },
          { n: 'PRSNC',  v: 50, max: 100 },
          { n: 'Gain',   v: 65, max: 100 },
          { n: 'VOL',    v: 70, max: 100 },
        ]
      },
      {
        name: 'ModDelay',
        desc: 'Delay com modulação',
        params: [
          { n: 'Time', v: 380, max: 2000 },
          { n: 'F.B',  v: 28,  max: 100  },
          { n: 'Mix',  v: 35,  max: 100  },
        ]
      },
      {
        name: 'Hall',
        desc: 'Reverb de salão de concerto',
        params: [
          { n: 'PreD',  v: 20, max: 100 },
          { n: 'Decay', v: 20, max: 30  },
          { n: 'Mix',   v: 30, max: 100 },
        ]
      },
    ]
  },
  {
    id: 2,
    name: 'BLUES TX',
    cats: ['DRIVE', 'AMP', 'DELAY', 'REVERB'],
    chain: [
      {
        name: 'TS Drive',
        desc: 'Simulação Ibanez TS808',
        params: [
          { n: 'Gain', v: 40, max: 100 },
          { n: 'Tone', v: 60, max: 100 },
          { n: 'VOL',  v: 72, max: 100 },
        ]
      },
      {
        name: 'FD TWNR',
        desc: "Fender '65 Twin Reverb",
        params: [
          { n: 'Bass',   v: 55, max: 100 },
          { n: 'MID',    v: 45, max: 100 },
          { n: 'Treble', v: 55, max: 100 },
          { n: 'Gain',   v: 45, max: 100 },
          { n: 'VOL',    v: 70, max: 100 },
        ]
      },
      {
        name: 'TapeEcho',
        desc: 'Simulação de tape echo',
        params: [
          { n: 'Time', v: 320, max: 2000 },
          { n: 'F.B',  v: 25,  max: 100  },
          { n: 'Mix',  v: 35,  max: 100  },
        ]
      },
      {
        name: 'Spring',
        desc: 'Simulação de reverb spring',
        params: [
          { n: 'PreD',  v: 12, max: 100 },
          { n: 'Decay', v: 18, max: 30  },
          { n: 'Mix',   v: 38, max: 100 },
        ]
      },
    ]
  },
  {
    id: 3,
    name: 'CLEAN ARPG',
    cats: ['DYNAMICS', 'AMP', 'MODULATION', 'REVERB'],
    chain: [
      {
        name: 'Comp',
        desc: 'Compressor estilo MXR Dyna Comp',
        params: [
          { n: 'Sense', v: 6,  max: 10  },
          { n: 'ATTCK', v: 50, max: 100 },
          { n: 'Tone',  v: 5,  max: 10  },
          { n: 'VOL',   v: 80, max: 100 },
        ]
      },
      {
        name: 'FD TWNR',
        desc: "Fender '65 Twin Reverb",
        params: [
          { n: 'Bass',   v: 50, max: 100 },
          { n: 'MID',    v: 50, max: 100 },
          { n: 'Treble', v: 55, max: 100 },
          { n: 'Gain',   v: 35, max: 100 },
          { n: 'VOL',    v: 70, max: 100 },
        ]
      },
      {
        name: 'Chorus',
        desc: 'Chorus – movimento e espessura',
        params: [
          { n: 'Depth', v: 55, max: 100 },
          { n: 'Rate',  v: 20, max: 50  },
          { n: 'Tone',  v: 5,  max: 10  },
          { n: 'Mix',   v: 45, max: 100 },
        ]
      },
      {
        name: 'Room',
        desc: 'Reverb de sala',
        params: [
          { n: 'PreD',  v: 8,  max: 100 },
          { n: 'Decay', v: 14, max: 30  },
          { n: 'Mix',   v: 32, max: 100 },
        ]
      },
    ]
  },
  {
    id: 4,
    name: 'METAL SGT',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'REVERB'],
    chain: [
      {
        name: 'ZNR',
        desc: 'Noise Reduction exclusivo ZOOM',
        params: [
          { n: 'Depth', v: 75, max: 100 },
          { n: 'THRSH', v: 55, max: 100 },
          { n: 'Decay', v: 40, max: 100 },
        ]
      },
      {
        name: 'MetalWRLD',
        desc: 'Simulação BOSS Metal Zone',
        params: [
          { n: 'Gain',   v: 80, max: 100 },
          { n: 'Bass',   v: 60, max: 100 },
          { n: 'Treble', v: 55, max: 100 },
          { n: 'VOL',    v: 65, max: 100 },
        ]
      },
      {
        name: 'MS 800',
        desc: 'Marshall JCM800 2203',
        params: [
          { n: 'Bass',   v: 55, max: 100 },
          { n: 'MID',    v: 45, max: 100 },
          { n: 'Treble', v: 55, max: 100 },
          { n: 'PRSNC',  v: 60, max: 100 },
          { n: 'Gain',   v: 75, max: 100 },
          { n: 'VOL',    v: 68, max: 100 },
        ]
      },
      {
        name: 'HD Hall',
        desc: 'Hall reverb denso',
        params: [
          { n: 'PreD',  v: 15, max: 200 },
          { n: 'Decay', v: 40, max: 100 },
          { n: 'Mix',   v: 22, max: 100 },
        ]
      },
    ]
  },
  {
    id: 5,
    name: 'FUNK WAH',
    cats: ['PEDAL', 'AMP', 'MODULATION', 'DELAY'],
    chain: [
      {
        name: 'BlackWah',
        desc: 'Wah pedal – Cry Baby',
        params: [
          { n: 'FREQ',  v: 50, max: 100 },
          { n: 'Range', v: 60, max: 100 },
          { n: 'VOL',   v: 80, max: 100 },
        ]
      },
      {
        name: 'FD TWNR',
        desc: "Fender '65 Twin Reverb",
        params: [
          { n: 'Bass',   v: 50, max: 100 },
          { n: 'MID',    v: 55, max: 100 },
          { n: 'Treble', v: 50, max: 100 },
          { n: 'Gain',   v: 40, max: 100 },
          { n: 'VOL',    v: 70, max: 100 },
        ]
      },
      {
        name: 'Phaser',
        desc: 'Variação de fase no som',
        params: [
          { n: 'Depth', v: 55, max: 100 },
          { n: 'Rate',  v: 20, max: 50  },
          { n: 'RESO',  v: 35, max: 100 },
        ]
      },
      {
        name: 'AnalogDly',
        desc: 'Simulação de delay analógico',
        params: [
          { n: 'Time', v: 280, max: 4000 },
          { n: 'F.B',  v: 20,  max: 100  },
          { n: 'Mix',  v: 25,  max: 100  },
        ]
      },
    ]
  },
];
