/**
 * patches.js
 * ZOOM G5n Patch Lab – 20 Patches para Strato Seven SGT-207
 *
 * Cadeia sugerida (ordem padrão):
 *  DYNAMICS → FILTER/PEDAL → DRIVE → AMP → CABINET → MODULATION → DELAY → REVERB
 *
 * Nota: patches com 7 cordas precisam de atenção extra ao ZNR nas cordas graves.
 */

const DEFAULT_PATCHES = [

  /* ── 001 ── Lead moderno – Bogner + ModDelay */
  {
    id: 1, name: 'LEAD BGN',
    cats: ['DRIVE', 'AMP', 'MODULATION', 'DELAY', 'REVERB'],
    chain: [
      { name:'TS Drive', params:[{n:'Gain',v:55,max:100},{n:'Boost',v:0,max:1,options:['OFF','ON']},{n:'Tone',v:55,max:100},{n:'VOL',v:75,max:100}] },
      { name:'XtasyBlue', params:[{n:'Bass',v:50,max:100},{n:'MID',v:55,max:100},{n:'Treble',v:50,max:100},{n:'PRSNC',v:50,max:100},{n:'STRCT',v:0,max:1,options:['LO','HI']},{n:'Gain',v:65,max:100},{n:'VOL',v:70,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'Chorus', params:[{n:'Depth',v:30,max:100},{n:'Rate',v:15,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:20,max:100}] },
      { name:'ModDelay', params:[{n:'Time',v:380,min:1,max:2000,tempo:true},{n:'F.B',v:28,max:100},{n:'Mix',v:30,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Hall', params:[{n:'PreD',v:20,min:1,max:100},{n:'Decay',v:20,min:1,max:30},{n:'Mix',v:28,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 002 ── Blues texano – TS drive + FD TWNR + TapeEcho */
  {
    id: 2, name: 'BLUES TX',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'DELAY', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:6,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:5,max:10},{n:'VOL',v:80,max:100}] },
      { name:'TS Drive', params:[{n:'Gain',v:40,max:100},{n:'Boost',v:0,max:1,options:['OFF','ON']},{n:'Tone',v:60,max:100},{n:'VOL',v:72,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:55,min:10,max:100},{n:'MID',v:45,min:10,max:100},{n:'Treble',v:55,min:10,max:100},{n:'BRGHT',v:1,max:1,options:['OFF','ON']},{n:'Gain',v:45,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:50,min:10,max:100},{n:'SPEED',v:50,min:10,max:100}] },
      { name:'TapeEcho', params:[{n:'Time',v:320,min:1,max:2000,tempo:true},{n:'F.B',v:25,max:100},{n:'Mix',v:35,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Spring', params:[{n:'PreD',v:12,min:1,max:100},{n:'Decay',v:18,min:1,max:30},{n:'Mix',v:38,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 003 ── Clean para arpejos – Comp + Chorus + Room */
  {
    id: 3, name: 'CLEAN ARPG',
    cats: ['DYNAMICS', 'AMP', 'MODULATION', 'DELAY', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:7,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:6,max:10},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:50,min:10,max:100},{n:'MID',v:50,min:10,max:100},{n:'Treble',v:55,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:35,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:50,min:10,max:100},{n:'SPEED',v:50,min:10,max:100}] },
      { name:'StereoCho', params:[{n:'Depth',v:55,max:100},{n:'Rate',v:20,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:45,max:100}] },
      { name:'Delay', params:[{n:'Time',v:600,min:1,max:4000,tempo:true},{n:'F.B',v:20,max:100},{n:'Mix',v:20,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Room', params:[{n:'PreD',v:8,min:1,max:100},{n:'Decay',v:14,min:1,max:30},{n:'Mix',v:32,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 004 ── Metal 7 cordas – ZNR + MetalWRLD + MS800 + MS4x12 */
  {
    id: 4, name: 'METAL SGT',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'CABINET', 'REVERB'],
    chain: [
      { name:'ZNR', params:[{n:'DETCT',v:0,max:1,options:['GTRIN','EFXIN']},{n:'Depth',v:80,max:100},{n:'THRSH',v:60,max:100},{n:'Decay',v:35,max:100}] },
      { name:'MetalWRLD', params:[{n:'Gain',v:82,max:100},{n:'Bass',v:62,max:100},{n:'Treble',v:52,max:100},{n:'VOL',v:65,max:100}] },
      { name:'MS 800', params:[{n:'Input',v:1,max:1,options:['LO','HI']},{n:'Bass',v:58,max:100},{n:'MID',v:42,max:100},{n:'Treble',v:55,max:100},{n:'PRSNC',v:62,max:100},{n:'Gain',v:78,max:100},{n:'VOL',v:68,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'MS4x12', params:[{n:'MIC',v:1,max:1,options:['OFF','ON']},{n:'D57:D421',v:50,max:100},{n:'Hi',v:50,max:100},{n:'Lo',v:55,max:100}] },
      { name:'HD Hall', params:[{n:'PreD',v:15,min:1,max:200},{n:'Decay',v:38,max:100},{n:'Mix',v:20,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 005 ── Funk wah – BlackWah + FD TWNR + Phaser + AnalogDly */
  {
    id: 5, name: 'FUNK WAH',
    cats: ['PEDAL', 'AMP', 'MODULATION', 'DELAY'],
    chain: [
      { name:'BlackWah', params:[{n:'FREQ',v:50,max:100,pedal:true},{n:'Range',v:60,max:100},{n:'Dry',v:0,max:100},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:50,min:10,max:100},{n:'MID',v:55,min:10,max:100},{n:'Treble',v:50,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:40,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:50,min:10,max:100},{n:'SPEED',v:50,min:10,max:100}] },
      { name:'Phaser', params:[{n:'Color',v:0,max:3,options:['4STG','8STG','INV4','INV8']},{n:'Depth',v:55,max:100},{n:'Rate',v:20,max:50,tempo:true},{n:'RESO',v:35,max:100}] },
      { name:'AnalogDly', params:[{n:'Time',v:280,min:1,max:4000,tempo:true},{n:'F.B',v:20,max:100},{n:'Mix',v:25,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 006 ── Hard rock – XtasyBlue + Hall */
  {
    id: 6, name: 'HARD ROCK',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'DELAY', 'REVERB'],
    chain: [
      { name:'ZNR', params:[{n:'DETCT',v:0,max:1,options:['GTRIN','EFXIN']},{n:'Depth',v:65,max:100},{n:'THRSH',v:45,max:100},{n:'Decay',v:40,max:100}] },
      { name:'GoldDrive', params:[{n:'Gain',v:55,max:100},{n:'Bass',v:50,max:100},{n:'Treble',v:55,max:100},{n:'VOL',v:72,max:100}] },
      { name:'XtasyBlue', params:[{n:'Bass',v:52,max:100},{n:'MID',v:50,max:100},{n:'Treble',v:52,max:100},{n:'PRSNC',v:55,max:100},{n:'STRCT',v:0,max:1,options:['LO','HI']},{n:'Gain',v:70,max:100},{n:'VOL',v:68,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'AnalogDly', params:[{n:'Time',v:350,min:1,max:4000,tempo:true},{n:'F.B',v:22,max:100},{n:'Mix',v:28,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Hall', params:[{n:'PreD',v:18,min:1,max:100},{n:'Decay',v:22,min:1,max:30},{n:'Mix',v:25,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 007 ── Acústico – Aco.Sim + Plate */
  {
    id: 7, name: 'ACOUSTIC',
    cats: ['DYNAMICS', 'DRIVE', 'MODULATION', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:6,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:5,max:10},{n:'VOL',v:80,max:100}] },
      { name:'Aco.Sim', params:[{n:'Top',v:65,max:100},{n:'Body',v:70,max:100},{n:'Tone',v:55,max:100},{n:'VOL',v:72,max:100}] },
      { name:'Chorus', params:[{n:'Depth',v:35,max:100},{n:'Rate',v:18,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:30,max:100}] },
      { name:'Plate', params:[{n:'PreD',v:15,min:1,max:200},{n:'Decay',v:45,max:100},{n:'Mix',v:38,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 008 ── Prog metal 7 cordas – ZNR + XtasyBlue + BG MK3 */
  {
    id: 8, name: 'PROG METAL',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'CABINET', 'REVERB'],
    chain: [
      { name:'ZNR', params:[{n:'DETCT',v:0,max:1,options:['GTRIN','EFXIN']},{n:'Depth',v:75,max:100},{n:'THRSH',v:55,max:100},{n:'Decay',v:38,max:100}] },
      { name:'TS Drive', params:[{n:'Gain',v:45,max:100},{n:'Boost',v:1,max:1,options:['OFF','ON']},{n:'Tone',v:52,max:100},{n:'VOL',v:72,max:100}] },
      { name:'BG MK3', params:[{n:'Bass',v:55,max:100},{n:'MID',v:48,max:100},{n:'Treble',v:55,max:100},{n:'PRSNC',v:58,max:100},{n:'Gain1',v:70,max:100},{n:'Gain2',v:75,max:100},{n:'VOL',v:68,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'BGN4x12', params:[{n:'MIC',v:1,max:1,options:['OFF','ON']},{n:'D57:D421',v:55,max:100},{n:'Hi',v:48,max:100},{n:'Lo',v:55,max:100}] },
      { name:'Air', params:[{n:'Size',v:55,min:1,max:100},{n:'REF',v:4,max:10},{n:'Mix',v:18,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 009 ── Solo clássico U2 – UK 30A + AnalogDly longo */
  {
    id: 9, name: 'THE EDGE',
    cats: ['DRIVE', 'AMP', 'MODULATION', 'DELAY'],
    chain: [
      { name:'RC Boost', params:[{n:'Gain',v:35,max:100},{n:'Bass',v:50,max:100},{n:'Treble',v:55,max:100},{n:'VOL',v:75,max:100}] },
      { name:'UK 30A', params:[{n:'Bass',v:50,max:100},{n:'Treble',v:55,max:100},{n:'Cut',v:45,max:100},{n:'Gain',v:45,max:100},{n:'VOL',v:70,max:100},{n:'Depth',v:50,max:100},{n:'Speed',v:50,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'Chorus', params:[{n:'Depth',v:30,max:100},{n:'Rate',v:15,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:22,max:100}] },
      { name:'AnalogDly', params:[{n:'Time',v:440,min:1,max:4000,tempo:true},{n:'F.B',v:40,max:100},{n:'Mix',v:42,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 010 ── Jimmy Page – MS800 + TapeEcho */
  {
    id: 10, name: 'JIMMY P',
    cats: ['DRIVE', 'AMP', 'DELAY', 'REVERB'],
    chain: [
      { name:'SweetDrv', params:[{n:'Gain',v:50,max:100},{n:'Tone',v:55,max:100},{n:'Focus',v:48,max:100},{n:'VOL',v:72,max:100}] },
      { name:'MS 800', params:[{n:'Input',v:0,max:1,options:['LO','HI']},{n:'Bass',v:52,max:100},{n:'MID',v:50,max:100},{n:'Treble',v:52,max:100},{n:'PRSNC',v:52,max:100},{n:'Gain',v:62,max:100},{n:'VOL',v:70,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'TapeEcho', params:[{n:'Time',v:350,min:1,max:2000,tempo:true},{n:'F.B',v:28,max:100},{n:'Mix',v:33,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Room', params:[{n:'PreD',v:12,min:1,max:100},{n:'Decay',v:16,min:1,max:30},{n:'Mix',v:28,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 011 ── Santana – BG MK3 + Hall largo */
  {
    id: 11, name: 'SANTANA',
    cats: ['DYNAMICS', 'AMP', 'MODULATION', 'DELAY', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:7,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:5,max:10},{n:'VOL',v:80,max:100}] },
      { name:'BG MK3', params:[{n:'Bass',v:52,max:100},{n:'MID',v:58,max:100},{n:'Treble',v:52,max:100},{n:'PRSNC',v:55,max:100},{n:'Gain1',v:60,max:100},{n:'Gain2',v:65,max:100},{n:'VOL',v:70,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'Chorus', params:[{n:'Depth',v:50,max:100},{n:'Rate',v:20,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:35,max:100}] },
      { name:'Delay', params:[{n:'Time',v:420,min:1,max:4000,tempo:true},{n:'F.B',v:25,max:100},{n:'Mix',v:28,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Hall', params:[{n:'PreD',v:22,min:1,max:100},{n:'Decay',v:24,min:1,max:30},{n:'Mix',v:32,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 012 ── Crunch britânico – UK 30A + FD Spring */
  {
    id: 12, name: 'BRIT GRIT',
    cats: ['DRIVE', 'AMP', 'CABINET', 'DELAY', 'REVERB'],
    chain: [
      { name:'EP Stomp', params:[{n:'Gain',v:42,max:100},{n:'Bass',v:0,min:-10,max:10},{n:'Treble',v:2,min:-10,max:10},{n:'VOL',v:72,max:100}] },
      { name:'UK 30A', params:[{n:'Bass',v:52,max:100},{n:'Treble',v:55,max:100},{n:'Cut',v:48,max:100},{n:'Gain',v:55,max:100},{n:'VOL',v:70,max:100},{n:'Depth',v:50,max:100},{n:'Speed',v:50,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'UK2x12', params:[{n:'MIC',v:1,max:1,options:['OFF','ON']},{n:'D57:D421',v:52,max:100},{n:'Hi',v:50,max:100},{n:'Lo',v:50,max:100}] },
      { name:'TapeEcho', params:[{n:'Time',v:300,min:1,max:2000,tempo:true},{n:'F.B',v:20,max:100},{n:'Mix',v:25,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'FD Spring', params:[{n:'Color',v:0,max:1,options:['0','1']},{n:'Lo',v:52,max:100},{n:'Hi',v:50,max:100},{n:'Mix',v:32,max:100}] },
    ]
  },

  /* ── 013 ── Grunge fuzz – TB MK1.5 + XtasyBlue + Plate */
  {
    id: 13, name: 'GRUNGE FZ',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'REVERB'],
    chain: [
      { name:'ZNR', params:[{n:'DETCT',v:0,max:1,options:['GTRIN','EFXIN']},{n:'Depth',v:70,max:100},{n:'THRSH',v:50,max:100},{n:'Decay',v:38,max:100}] },
      { name:'TB MK1.5', params:[{n:'ATTCK',v:65,max:100},{n:'Tone',v:48,max:100},{n:'Color',v:0,max:1,options:['1','2']},{n:'VOL',v:65,max:100}] },
      { name:'XtasyBlue', params:[{n:'Bass',v:55,max:100},{n:'MID',v:45,max:100},{n:'Treble',v:50,max:100},{n:'PRSNC',v:52,max:100},{n:'STRCT',v:1,max:1,options:['LO','HI']},{n:'Gain',v:72,max:100},{n:'VOL',v:68,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'Plate', params:[{n:'PreD',v:12,min:1,max:200},{n:'Decay',v:42,max:100},{n:'Mix',v:22,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 014 ── Octave wah (Jimi Hendrix) – BlackWah + Octave + MS800 */
  {
    id: 14, name: 'JIMI OCT',
    cats: ['PEDAL', 'MODULATION', 'AMP', 'REVERB'],
    chain: [
      { name:'BlackWah', params:[{n:'FREQ',v:50,max:100,pedal:true},{n:'Range',v:65,max:100},{n:'Dry',v:0,max:100},{n:'VOL',v:80,max:100}] },
      { name:'OctFuzz', params:[{n:'Boost',v:60,max:100},{n:'Color',v:0,max:1,options:['1','2']},{n:'Tone',v:48,max:100},{n:'VOL',v:68,max:100}] },
      { name:'MS 800', params:[{n:'Input',v:1,max:1,options:['LO','HI']},{n:'Bass',v:50,max:100},{n:'MID',v:52,max:100},{n:'Treble',v:50,max:100},{n:'PRSNC',v:52,max:100},{n:'Gain',v:58,max:100},{n:'VOL',v:70,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'Spring', params:[{n:'PreD',v:10,min:1,max:100},{n:'Decay',v:16,min:1,max:30},{n:'Mix',v:30,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 015 ── Pink Floyd – Phaser + PitchSHFT + Delay longo */
  {
    id: 15, name: 'GILMOUR',
    cats: ['DRIVE', 'AMP', 'MODULATION', 'DELAY', 'REVERB'],
    chain: [
      { name:'SweetDrv', params:[{n:'Gain',v:45,max:100},{n:'Tone',v:58,max:100},{n:'Focus',v:52,max:100},{n:'VOL',v:72,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:52,min:10,max:100},{n:'MID',v:48,min:10,max:100},{n:'Treble',v:55,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:38,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:50,min:10,max:100},{n:'SPEED',v:50,min:10,max:100}] },
      { name:'Phaser', params:[{n:'Color',v:0,max:3,options:['4STG','8STG','INV4','INV8']},{n:'Depth',v:70,max:100},{n:'Rate',v:18,max:50,tempo:true},{n:'RESO',v:45,max:100}] },
      { name:'Delay', params:[{n:'Time',v:500,min:1,max:4000,tempo:true},{n:'F.B',v:35,max:100},{n:'Mix',v:38,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'HD Hall', params:[{n:'PreD',v:20,min:1,max:200},{n:'Decay',v:55,max:100},{n:'Mix',v:30,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 016 ── Metal core 7 cordas – RedCrunch + MS800 + MS4x12 */
  {
    id: 16, name: 'METALCORE',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'CABINET', 'REVERB'],
    chain: [
      { name:'ZNR', params:[{n:'DETCT',v:0,max:1,options:['GTRIN','EFXIN']},{n:'Depth',v:85,max:100},{n:'THRSH',v:65,max:100},{n:'Decay',v:30,max:100}] },
      { name:'RedCrunch', params:[{n:'Gain',v:78,max:100},{n:'Tone',v:48,max:100},{n:'PRSNC',v:60,max:100},{n:'VOL',v:68,max:100}] },
      { name:'MS 800', params:[{n:'Input',v:1,max:1,options:['LO','HI']},{n:'Bass',v:60,max:100},{n:'MID',v:40,max:100},{n:'Treble',v:55,max:100},{n:'PRSNC',v:65,max:100},{n:'Gain',v:80,max:100},{n:'VOL',v:68,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'MS4x12', params:[{n:'MIC',v:1,max:1,options:['OFF','ON']},{n:'D57:D421',v:50,max:100},{n:'Hi',v:48,max:100},{n:'Lo',v:58,max:100}] },
      { name:'Air', params:[{n:'Size',v:40,min:1,max:100},{n:'REF',v:3,max:10},{n:'Mix',v:15,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 017 ── Strings / SlowATTCK atmosférico */
  {
    id: 17, name: 'STRINGS',
    cats: ['DYNAMICS', 'AMP', 'MODULATION', 'REVERB'],
    chain: [
      { name:'SlowATTCK', params:[{n:'Time',v:35,max:50},{n:'Curve',v:6,max:10},{n:'Tone',v:55,max:100},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:48,min:10,max:100},{n:'MID',v:50,min:10,max:100},{n:'Treble',v:52,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:32,min:10,max:100},{n:'VOL',v:68,min:10,max:100},{n:'DEPTH',v:50,min:10,max:100},{n:'SPEED',v:50,min:10,max:100}] },
      { name:'Chorus', params:[{n:'Depth',v:65,max:100},{n:'Rate',v:15,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:55,max:100}] },
      { name:'HD Hall', params:[{n:'PreD',v:25,min:1,max:200},{n:'Decay',v:65,max:100},{n:'Mix',v:45,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 018 ── Smooth jazz – Comp + FD TWNR + ModDelay */
  {
    id: 18, name: 'SMOOTH JZ',
    cats: ['DYNAMICS', 'AMP', 'MODULATION', 'DELAY', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:7,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:6,max:10},{n:'VOL',v:82,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:50,min:10,max:100},{n:'MID',v:52,min:10,max:100},{n:'Treble',v:50,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:32,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:50,min:10,max:100},{n:'SPEED',v:50,min:10,max:100}] },
      { name:'Chorus', params:[{n:'Depth',v:45,max:100},{n:'Rate',v:18,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:35,max:100}] },
      { name:'ModDelay', params:[{n:'Time',v:320,min:1,max:2000,tempo:true},{n:'F.B',v:22,max:100},{n:'Mix',v:28,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Plate', params:[{n:'PreD',v:18,min:1,max:200},{n:'Decay',v:48,max:100},{n:'Mix',v:35,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 019 ── Djent / 7 cordas palm mute – ZNR + XtasyBlue STRCT HI */
  {
    id: 19, name: 'DJENT SGT',
    cats: ['DYNAMICS', 'FILTER', 'DRIVE', 'AMP', 'CABINET'],
    chain: [
      { name:'ZNR', params:[{n:'DETCT',v:0,max:1,options:['GTRIN','EFXIN']},{n:'Depth',v:85,max:100},{n:'THRSH',v:62,max:100},{n:'Decay',v:28,max:100}] },
      { name:'Gt GEQ7', params:[{n:'100Hz',v:-3,min:-12,max:12},{n:'200Hz',v:-2,min:-12,max:12},{n:'400Hz',v:2,min:-12,max:12},{n:'800Hz',v:-1,min:-12,max:12},{n:'1.6kHz',v:3,min:-12,max:12},{n:'3.2kHz',v:2,min:-12,max:12},{n:'6.4kHz',v:1,min:-12,max:12},{n:'VOL',v:80,max:100}] },
      { name:'XtasyBlue', params:[{n:'Bass',v:55,max:100},{n:'MID',v:42,max:100},{n:'Treble',v:55,max:100},{n:'PRSNC',v:60,max:100},{n:'STRCT',v:1,max:1,options:['LO','HI']},{n:'Gain',v:75,max:100},{n:'VOL',v:68,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'BGN4x12', params:[{n:'MIC',v:1,max:1,options:['OFF','ON']},{n:'D57:D421',v:52,max:100},{n:'Hi',v:48,max:100},{n:'Lo',v:58,max:100}] },
      { name:'Air', params:[{n:'Size',v:35,min:1,max:100},{n:'REF',v:2,max:10},{n:'Mix',v:12,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 020 ── Looper + Ritmo – Rhythm + LP-STEREO para jam */
  {
    id: 20, name: 'LOOPER JAM',
    cats: ['DYNAMICS', 'AMP', 'RHYTHM', 'LOOPER'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:6,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:5,max:10},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:50,min:10,max:100},{n:'MID',v:50,min:10,max:100},{n:'Treble',v:52,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:40,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:50,min:10,max:100},{n:'SPEED',v:50,min:10,max:100}] },
      { name:'Rhythm', params:[{n:'PATTERN',v:8,min:1,max:68},{n:'BPM',v:100,min:40,max:250},{n:'VOL',v:55,max:100}] },
      { name:'LP-STEREO', params:[{n:'Undo',v:1,max:1,options:['OFF','ON']},{n:'Stop',v:0,max:2,options:['STOP','FINISH','FADEOUT']},{n:'VOL',v:80,max:100}] },
    ]
  },

];
