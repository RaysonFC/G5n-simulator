/**
 * patches.js
 * ZOOM G5n Patch Lab – Patches otimizados para Strato Seven SGT-207 NT
 *
 * Guitarra: Basswood body · Maple neck · 3 single-coils passivos · 6 cordas · tremolo
 *
 * Ordem sugerida:
 *  DYNAMICS → FILTER/PEDAL → DRIVE → AMP → CABINET → MODULATION → DELAY → REVERB
 */

const DEFAULT_PATCHES = [

  /* ── 001 ── Clean Strat clássico */
  {
    id: 1, name: 'CLEAN STRAT',
    cats: ['DYNAMICS', 'AMP', 'MODULATION', 'DELAY', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:5,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:6,max:10},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:48,min:10,max:100},{n:'MID',v:50,min:10,max:100},{n:'Treble',v:55,min:10,max:100},{n:'BRGHT',v:1,max:1,options:['OFF','ON']},{n:'Gain',v:32,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:40,min:10,max:100},{n:'SPEED',v:45,min:10,max:100}] },
      { name:'Chorus', params:[{n:'Depth',v:35,max:100},{n:'Rate',v:18,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:28,max:100}] },
      { name:'Delay', params:[{n:'Time',v:380,min:1,max:4000,tempo:true},{n:'F.B',v:18,max:100},{n:'Mix',v:22,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Room', params:[{n:'PreD',v:10,min:1,max:100},{n:'Decay',v:14,min:1,max:30},{n:'Mix',v:28,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 002 ── Blues texano / SRV vibe */
  {
    id: 2, name: 'BLUES TX',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'DELAY', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:6,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:5,max:10},{n:'VOL',v:80,max:100}] },
      { name:'TS Drive', params:[{n:'Gain',v:38,max:100},{n:'Boost',v:0,max:1,options:['OFF','ON']},{n:'Tone',v:58,max:100},{n:'VOL',v:72,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:52,min:10,max:100},{n:'MID',v:48,min:10,max:100},{n:'Treble',v:55,min:10,max:100},{n:'BRGHT',v:1,max:1,options:['OFF','ON']},{n:'Gain',v:42,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:45,min:10,max:100},{n:'SPEED',v:48,min:10,max:100}] },
      { name:'TapeEcho', params:[{n:'Time',v:320,min:1,max:2000,tempo:true},{n:'F.B',v:22,max:100},{n:'Mix',v:30,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Spring', params:[{n:'PreD',v:12,min:1,max:100},{n:'Decay',v:16,min:1,max:30},{n:'Mix',v:35,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 003 ── Crunch britânico */
  {
    id: 3, name: 'BRIT CRUNCH',
    cats: ['DRIVE', 'AMP', 'CABINET', 'DELAY', 'REVERB'],
    chain: [
      { name:'EP Stomp', params:[{n:'Gain',v:40,max:100},{n:'Bass',v:0,min:-10,max:10},{n:'Treble',v:2,min:-10,max:10},{n:'VOL',v:72,max:100}] },
      { name:'UK 30A', params:[{n:'Bass',v:50,max:100},{n:'Treble',v:55,max:100},{n:'Cut',v:48,max:100},{n:'Gain',v:52,max:100},{n:'VOL',v:70,max:100},{n:'Depth',v:45,max:100},{n:'Speed',v:48,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'UK2x12', params:[{n:'MIC',v:1,max:1,options:['OFF','ON']},{n:'D57:D421',v:50,max:100},{n:'Hi',v:50,max:100},{n:'Lo',v:50,max:100}] },
      { name:'AnalogDly', params:[{n:'Time',v:300,min:1,max:4000,tempo:true},{n:'F.B',v:20,max:100},{n:'Mix',v:25,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'FD Spring', params:[{n:'Color',v:0,max:1,options:['0','1']},{n:'Lo',v:50,max:100},{n:'Hi',v:50,max:100},{n:'Mix',v:30,max:100}] },
    ]
  },

  /* ── 004 ── Lead moderno (Bogner) */
  {
    id: 4, name: 'LEAD BGN',
    cats: ['DRIVE', 'AMP', 'MODULATION', 'DELAY', 'REVERB'],
    chain: [
      { name:'TS Drive', params:[{n:'Gain',v:50,max:100},{n:'Boost',v:0,max:1,options:['OFF','ON']},{n:'Tone',v:52,max:100},{n:'VOL',v:75,max:100}] },
      { name:'XtasyBlue', params:[{n:'Bass',v:50,max:100},{n:'MID',v:52,max:100},{n:'Treble',v:50,max:100},{n:'PRSNC',v:52,max:100},{n:'STRCT',v:0,max:1,options:['LO','HI']},{n:'Gain',v:62,max:100},{n:'VOL',v:68,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'Chorus', params:[{n:'Depth',v:28,max:100},{n:'Rate',v:14,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:18,max:100}] },
      { name:'ModDelay', params:[{n:'Time',v:380,min:1,max:2000,tempo:true},{n:'F.B',v:26,max:100},{n:'Mix',v:28,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Hall', params:[{n:'PreD',v:18,min:1,max:100},{n:'Decay',v:20,min:1,max:30},{n:'Mix',v:25,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 005 ── Funk Wah */
  {
    id: 5, name: 'FUNK WAH',
    cats: ['PEDAL', 'AMP', 'MODULATION', 'DELAY'],
    chain: [
      { name:'BlackWah', params:[{n:'FREQ',v:50,max:100,pedal:true},{n:'Range',v:60,max:100},{n:'Dry',v:0,max:100},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:48,min:10,max:100},{n:'MID',v:55,min:10,max:100},{n:'Treble',v:52,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:38,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:40,min:10,max:100},{n:'SPEED',v:45,min:10,max:100}] },
      { name:'Phaser', params:[{n:'Color',v:0,max:3,options:['4STG','8STG','INV4','INV8']},{n:'Depth',v:50,max:100},{n:'Rate',v:18,max:50,tempo:true},{n:'RESO',v:32,max:100}] },
      { name:'AnalogDly', params:[{n:'Time',v:260,min:1,max:4000,tempo:true},{n:'F.B',v:18,max:100},{n:'Mix',v:22,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 006 ── Edge / U2 delay */
  {
    id: 6, name: 'THE EDGE',
    cats: ['DRIVE', 'AMP', 'MODULATION', 'DELAY'],
    chain: [
      { name:'RC Boost', params:[{n:'Gain',v:32,max:100},{n:'Bass',v:48,max:100},{n:'Treble',v:55,max:100},{n:'VOL',v:75,max:100}] },
      { name:'UK 30A', params:[{n:'Bass',v:48,max:100},{n:'Treble',v:55,max:100},{n:'Cut',v:45,max:100},{n:'Gain',v:42,max:100},{n:'VOL',v:70,max:100},{n:'Depth',v:45,max:100},{n:'Speed',v:48,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'Chorus', params:[{n:'Depth',v:28,max:100},{n:'Rate',v:14,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:20,max:100}] },
      { name:'AnalogDly', params:[{n:'Time',v:440,min:1,max:4000,tempo:true},{n:'F.B',v:38,max:100},{n:'Mix',v:40,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 007 ── Acústico simulado */
  {
    id: 7, name: 'ACOUSTIC',
    cats: ['DYNAMICS', 'DRIVE', 'MODULATION', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:6,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:5,max:10},{n:'VOL',v:80,max:100}] },
      { name:'Aco.Sim', params:[{n:'Top',v:65,max:100},{n:'Body',v:68,max:100},{n:'Tone',v:55,max:100},{n:'VOL',v:72,max:100}] },
      { name:'Chorus', params:[{n:'Depth',v:32,max:100},{n:'Rate',v:16,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:28,max:100}] },
      { name:'Plate', params:[{n:'PreD',v:15,min:1,max:200},{n:'Decay',v:45,max:100},{n:'Mix',v:36,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 008 ── Gilmour / Pink Floyd */
  {
    id: 8, name: 'GILMOUR',
    cats: ['DRIVE', 'AMP', 'MODULATION', 'DELAY', 'REVERB'],
    chain: [
      { name:'SweetDrv', params:[{n:'Gain',v:42,max:100},{n:'Tone',v:55,max:100},{n:'Focus',v:50,max:100},{n:'VOL',v:72,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:50,min:10,max:100},{n:'MID',v:48,min:10,max:100},{n:'Treble',v:55,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:36,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:45,min:10,max:100},{n:'SPEED',v:48,min:10,max:100}] },
      { name:'Phaser', params:[{n:'Color',v:0,max:3,options:['4STG','8STG','INV4','INV8']},{n:'Depth',v:65,max:100},{n:'Rate',v:16,max:50,tempo:true},{n:'RESO',v:40,max:100}] },
      { name:'Delay', params:[{n:'Time',v:480,min:1,max:4000,tempo:true},{n:'F.B',v:32,max:100},{n:'Mix',v:35,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'HD Hall', params:[{n:'PreD',v:20,min:1,max:200},{n:'Decay',v:52,max:100},{n:'Mix',v:28,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 009 ── Hard rock clássico */
  {
    id: 9, name: 'HARD ROCK',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'DELAY', 'REVERB'],
    chain: [
      { name:'ZNR', params:[{n:'DETCT',v:0,max:1,options:['GTRIN','EFXIN']},{n:'Depth',v:55,max:100},{n:'THRSH',v:40,max:100},{n:'Decay',v:40,max:100}] },
      { name:'GoldDrive', params:[{n:'Gain',v:52,max:100},{n:'Bass',v:50,max:100},{n:'Treble',v:52,max:100},{n:'VOL',v:72,max:100}] },
      { name:'MS 800', params:[{n:'Input',v:0,max:1,options:['LO','HI']},{n:'Bass',v:52,max:100},{n:'MID',v:48,max:100},{n:'Treble',v:52,max:100},{n:'PRSNC',v:52,max:100},{n:'Gain',v:60,max:100},{n:'VOL',v:68,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'AnalogDly', params:[{n:'Time',v:340,min:1,max:4000,tempo:true},{n:'F.B',v:20,max:100},{n:'Mix',v:25,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Hall', params:[{n:'PreD',v:16,min:1,max:100},{n:'Decay',v:18,min:1,max:30},{n:'Mix',v:22,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 010 ── Smooth jazz */
  {
    id: 10, name: 'SMOOTH JZ',
    cats: ['DYNAMICS', 'AMP', 'MODULATION', 'DELAY', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:7,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:6,max:10},{n:'VOL',v:82,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:50,min:10,max:100},{n:'MID',v:52,min:10,max:100},{n:'Treble',v:48,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:30,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:40,min:10,max:100},{n:'SPEED',v:45,min:10,max:100}] },
      { name:'Chorus', params:[{n:'Depth',v:42,max:100},{n:'Rate',v:16,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:32,max:100}] },
      { name:'ModDelay', params:[{n:'Time',v:320,min:1,max:2000,tempo:true},{n:'F.B',v:20,max:100},{n:'Mix',v:26,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Plate', params:[{n:'PreD',v:16,min:1,max:200},{n:'Decay',v:45,max:100},{n:'Mix',v:32,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 011 ── Strings / pad atmosférico */
  {
    id: 11, name: 'STRINGS',
    cats: ['DYNAMICS', 'AMP', 'MODULATION', 'REVERB'],
    chain: [
      { name:'SlowATTCK', params:[{n:'Time',v:32,max:50},{n:'Curve',v:6,max:10},{n:'Tone',v:55,max:100},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:48,min:10,max:100},{n:'MID',v:50,min:10,max:100},{n:'Treble',v:50,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:30,min:10,max:100},{n:'VOL',v:68,min:10,max:100},{n:'DEPTH',v:40,min:10,max:100},{n:'SPEED',v:45,min:10,max:100}] },
      { name:'Chorus', params:[{n:'Depth',v:60,max:100},{n:'Rate',v:14,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:50,max:100}] },
      { name:'HD Hall', params:[{n:'PreD',v:22,min:1,max:200},{n:'Decay',v:60,max:100},{n:'Mix',v:42,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 012 ── Looper jam */
  {
    id: 12, name: 'LOOPER JAM',
    cats: ['DYNAMICS', 'AMP', 'RHYTHM', 'LOOPER'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:5,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:5,max:10},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:50,min:10,max:100},{n:'MID',v:50,min:10,max:100},{n:'Treble',v:52,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:38,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:40,min:10,max:100},{n:'SPEED',v:45,min:10,max:100}] },
      { name:'Rhythm', params:[{n:'PATTERN',v:8,min:1,max:68},{n:'BPM',v:100,min:40,max:250},{n:'VOL',v:55,max:100}] },
      { name:'LP-STEREO', params:[{n:'Undo',v:1,max:1,options:['OFF','ON']},{n:'Stop',v:0,max:2,options:['STOP','FINISH','FADEOUT']},{n:'VOL',v:80,max:100}] },
    ]
  },

];
