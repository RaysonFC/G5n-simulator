/**
 * patches.js
 * ZOOM G5n Patch Lab – Patches para Strato Seven SGT-207 NT
 *
 * Guitarra: Basswood · Maple · 3 single-coils passivos · 6 cordas · tremolo
 *
 * Foco: Louvor, Corinhos, Bases e Solos (soft + pesado)
 * Single-coil: Comp/ZNR no início, Twin Reverb, spring/plate, drive controlado.
 */

const DEFAULT_PATCHES = [

  /* ── 001 ── BASE CLN – Clean sólido para base / verso ──────── */
  {
    id: 1, name: 'BASE CLN',
    cats: ['DYNAMICS', 'FILTER', 'AMP', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:7,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:6,max:10},{n:'VOL',v:82,max:100}] },
      { name:'Gt GEQ', params:[{n:'160Hz',v:2,min:-12,max:12},{n:'400Hz',v:1,min:-12,max:12},{n:'800Hz',v:0,min:-12,max:12},{n:'3.2kHz',v:2,min:-12,max:12},{n:'6.4kHz',v:1,min:-12,max:12},{n:'12kHz',v:0,min:-12,max:12},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:54,min:10,max:100},{n:'MID',v:52,min:10,max:100},{n:'Treble',v:50,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:28,min:10,max:100},{n:'VOL',v:72,min:10,max:100},{n:'DEPTH',v:30,min:10,max:100},{n:'SPEED',v:38,min:10,max:100}] },
      { name:'Room', params:[{n:'PreD',v:8,min:1,max:100},{n:'Decay',v:12,min:1,max:30},{n:'Mix',v:20,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 002 ── CORINHO – Corinho de fogo / ritmo presente ─────── */
  {
    id: 2, name: 'CORINHO',
    cats: ['DYNAMICS', 'FILTER', 'AMP', 'DELAY', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:8,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:6,max:10},{n:'VOL',v:85,max:100}] },
      { name:'Gt GEQ7', params:[{n:'100Hz',v:3,min:-12,max:12},{n:'200Hz',v:2,min:-12,max:12},{n:'400Hz',v:1,min:-12,max:12},{n:'800Hz',v:0,min:-12,max:12},{n:'1.6kHz',v:2,min:-12,max:12},{n:'3.2kHz',v:3,min:-12,max:12},{n:'6.4kHz',v:1,min:-12,max:12},{n:'VOL',v:82,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:58,min:10,max:100},{n:'MID',v:55,min:10,max:100},{n:'Treble',v:52,min:10,max:100},{n:'BRGHT',v:1,max:1,options:['OFF','ON']},{n:'Gain',v:32,min:10,max:100},{n:'VOL',v:74,min:10,max:100},{n:'DEPTH',v:28,min:10,max:100},{n:'SPEED',v:40,min:10,max:100}] },
      { name:'Delay', params:[{n:'Time',v:280,min:1,max:4000,tempo:true},{n:'F.B',v:12,max:100},{n:'Mix',v:14,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Plate', params:[{n:'PreD',v:10,min:1,max:200},{n:'Decay',v:32,max:100},{n:'Mix',v:18,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 003 ── BASE CRNCH – Crunch leve para base energética ──── */
  {
    id: 3, name: 'BASE CRNCH',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:6,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:5,max:10},{n:'VOL',v:80,max:100}] },
      { name:'TS Drive', params:[{n:'Gain',v:38,max:100},{n:'Boost',v:0,max:1,options:['OFF','ON']},{n:'Tone',v:52,max:100},{n:'VOL',v:74,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:52,min:10,max:100},{n:'MID',v:50,min:10,max:100},{n:'Treble',v:52,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:36,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:35,min:10,max:100},{n:'SPEED',v:42,min:10,max:100}] },
      { name:'Room', params:[{n:'PreD',v:10,min:1,max:100},{n:'Decay',v:14,min:1,max:30},{n:'Mix',v:22,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 004 ── SOLO LOUVOR – Solo clássico de louvor ──────────── */
  {
    id: 4, name: 'SOLO LOUV',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'DELAY', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:6,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:5,max:10},{n:'VOL',v:80,max:100}] },
      { name:'TS Drive', params:[{n:'Gain',v:44,max:100},{n:'Boost',v:0,max:1,options:['OFF','ON']},{n:'Tone',v:55,max:100},{n:'VOL',v:74,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:50,min:10,max:100},{n:'MID',v:52,min:10,max:100},{n:'Treble',v:55,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:42,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:40,min:10,max:100},{n:'SPEED',v:45,min:10,max:100}] },
      { name:'Delay', params:[{n:'Time',v:420,min:1,max:4000,tempo:true},{n:'F.B',v:28,max:100},{n:'Mix',v:30,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Hall', params:[{n:'PreD',v:18,min:1,max:100},{n:'Decay',v:22,min:1,max:30},{n:'Mix',v:28,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 005 ── SOLO PESADO – Solo mais pesado / moderno ───────── */
  {
    id: 5, name: 'SOLO PES',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'DELAY', 'REVERB'],
    chain: [
      { name:'ZNR', params:[{n:'DETCT',v:0,max:1,options:['GTRIN','EFXIN']},{n:'Depth',v:55,max:100},{n:'THRSH',v:38,max:100},{n:'Decay',v:42,max:100}] },
      { name:'TS Drive', params:[{n:'Gain',v:55,max:100},{n:'Boost',v:1,max:1,options:['OFF','ON']},{n:'Tone',v:52,max:100},{n:'VOL',v:76,max:100}] },
      { name:'XtasyBlue', params:[{n:'Bass',v:50,max:100},{n:'MID',v:52,max:100},{n:'Treble',v:50,max:100},{n:'PRSNC',v:54,max:100},{n:'STRCT',v:0,max:1,options:['LO','HI']},{n:'Gain',v:62,max:100},{n:'VOL',v:68,max:100},{n:'SOLO',v:6,min:1,max:9}] },
      { name:'Delay', params:[{n:'Time',v:480,min:1,max:4000,tempo:true},{n:'F.B',v:32,max:100},{n:'Mix',v:32,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'HD Hall', params:[{n:'PreD',v:20,min:1,max:200},{n:'Decay',v:48,max:100},{n:'Mix',v:26,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 006 ── ADORAÇÃO – Ballad / momento de adoração ────────── */
  {
    id: 6, name: 'ADORACAO',
    cats: ['DYNAMICS', 'AMP', 'MODULATION', 'DELAY', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:6,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:5,max:10},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:52,min:10,max:100},{n:'MID',v:50,min:10,max:100},{n:'Treble',v:50,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:28,min:10,max:100},{n:'VOL',v:68,min:10,max:100},{n:'DEPTH',v:40,min:10,max:100},{n:'SPEED',v:42,min:10,max:100}] },
      { name:'Chorus', params:[{n:'Depth',v:40,max:100},{n:'Rate',v:12,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:30,max:100}] },
      { name:'Delay', params:[{n:'Time',v:550,min:1,max:4000,tempo:true},{n:'F.B',v:30,max:100},{n:'Mix',v:28,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'HD Hall', params:[{n:'PreD',v:25,min:1,max:200},{n:'Decay',v:55,max:100},{n:'Mix',v:35,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 007 ── SOLO SWELL – Solo com volume swell / ambiente ──── */
  {
    id: 7, name: 'SOLO SWEL',
    cats: ['DYNAMICS', 'AMP', 'MODULATION', 'DELAY', 'REVERB'],
    chain: [
      { name:'SlowATTCK', params:[{n:'Time',v:28,max:50},{n:'Curve',v:6,max:10},{n:'Tone',v:55,max:100},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:50,min:10,max:100},{n:'MID',v:50,min:10,max:100},{n:'Treble',v:52,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:30,min:10,max:100},{n:'VOL',v:68,min:10,max:100},{n:'DEPTH',v:40,min:10,max:100},{n:'SPEED',v:45,min:10,max:100}] },
      { name:'Chorus', params:[{n:'Depth',v:45,max:100},{n:'Rate',v:14,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:35,max:100}] },
      { name:'Delay', params:[{n:'Time',v:580,min:1,max:4000,tempo:true},{n:'F.B',v:35,max:100},{n:'Mix',v:32,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'HD Hall', params:[{n:'PreD',v:22,min:1,max:200},{n:'Decay',v:58,max:100},{n:'Mix',v:38,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 008 ── CLEAN BRT – Clean brilhante Strat ──────────────── */
  {
    id: 8, name: 'CLEAN BRT',
    cats: ['DYNAMICS', 'AMP', 'MODULATION', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:5,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:7,max:10},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:45,min:10,max:100},{n:'MID',v:48,min:10,max:100},{n:'Treble',v:60,min:10,max:100},{n:'BRGHT',v:1,max:1,options:['OFF','ON']},{n:'Gain',v:30,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:35,min:10,max:100},{n:'SPEED',v:42,min:10,max:100}] },
      { name:'StereoCho', params:[{n:'Depth',v:30,max:100},{n:'Rate',v:16,max:50},{n:'Tone',v:6,max:10},{n:'Mix',v:25,max:100}] },
      { name:'Spring', params:[{n:'PreD',v:10,min:1,max:100},{n:'Decay',v:14,min:1,max:30},{n:'Mix',v:28,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 009 ── CRUNCH GP – Crunch gospel / rock gospel ────────── */
  {
    id: 9, name: 'CRUNCH GP',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'DELAY', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:5,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:5,max:10},{n:'VOL',v:80,max:100}] },
      { name:'TS Drive', params:[{n:'Gain',v:45,max:100},{n:'Boost',v:0,max:1,options:['OFF','ON']},{n:'Tone',v:52,max:100},{n:'VOL',v:74,max:100}] },
      { name:'MS 800', params:[{n:'Input',v:0,max:1,options:['LO','HI']},{n:'Bass',v:52,max:100},{n:'MID',v:50,max:100},{n:'Treble',v:52,max:100},{n:'PRSNC',v:50,max:100},{n:'Gain',v:48,max:100},{n:'VOL',v:70,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'Delay', params:[{n:'Time',v:360,min:1,max:4000,tempo:true},{n:'F.B',v:20,max:100},{n:'Mix',v:22,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Room', params:[{n:'PreD',v:12,min:1,max:100},{n:'Decay',v:15,min:1,max:30},{n:'Mix',v:24,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 010 ── PERC CLN – Clean percussivo (mutes, palm) ──────── */
  {
    id: 10, name: 'PERC CLN',
    cats: ['DYNAMICS', 'FILTER', 'AMP', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:8,max:10},{n:'ATTCK',v:1,max:1,options:['SLOW','FAST']},{n:'Tone',v:6,max:10},{n:'VOL',v:84,max:100}] },
      { name:'ParaEQ', params:[{n:'FREQ',v:55,max:100},{n:'Q',v:40,max:100},{n:'Gain',v:3,min:-12,max:12},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:50,min:10,max:100},{n:'MID',v:55,min:10,max:100},{n:'Treble',v:55,min:10,max:100},{n:'BRGHT',v:1,max:1,options:['OFF','ON']},{n:'Gain',v:28,min:10,max:100},{n:'VOL',v:72,min:10,max:100},{n:'DEPTH',v:25,min:10,max:100},{n:'SPEED',v:35,min:10,max:100}] },
      { name:'Air', params:[{n:'Size',v:35,min:1,max:100},{n:'REF',v:3,max:10},{n:'Mix',v:15,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 011 ── CLEAN ARPG – Arpejos limpos ────────────────────── */
  {
    id: 11, name: 'CLEAN ARPG',
    cats: ['DYNAMICS', 'AMP', 'MODULATION', 'DELAY', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:6,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:6,max:10},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:48,min:10,max:100},{n:'MID',v:50,min:10,max:100},{n:'Treble',v:55,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:32,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:40,min:10,max:100},{n:'SPEED',v:45,min:10,max:100}] },
      { name:'StereoCho', params:[{n:'Depth',v:45,max:100},{n:'Rate',v:18,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:38,max:100}] },
      { name:'Delay', params:[{n:'Time',v:520,min:1,max:4000,tempo:true},{n:'F.B',v:18,max:100},{n:'Mix',v:22,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Room', params:[{n:'PreD',v:8,min:1,max:100},{n:'Decay',v:13,min:1,max:30},{n:'Mix',v:28,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 012 ── STRINGS – Pad / cordas ─────────────────────────── */
  {
    id: 12, name: 'STRINGS',
    cats: ['DYNAMICS', 'AMP', 'MODULATION', 'REVERB'],
    chain: [
      { name:'SlowATTCK', params:[{n:'Time',v:32,max:50},{n:'Curve',v:6,max:10},{n:'Tone',v:55,max:100},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:48,min:10,max:100},{n:'MID',v:50,min:10,max:100},{n:'Treble',v:50,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:30,min:10,max:100},{n:'VOL',v:68,min:10,max:100},{n:'DEPTH',v:40,min:10,max:100},{n:'SPEED',v:45,min:10,max:100}] },
      { name:'Chorus', params:[{n:'Depth',v:60,max:100},{n:'Rate',v:14,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:50,max:100}] },
      { name:'HD Hall', params:[{n:'PreD',v:22,min:1,max:200},{n:'Decay',v:60,max:100},{n:'Mix',v:42,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 013 ── LEAD BGN – Lead Bogner ─────────────────────────── */
  {
    id: 13, name: 'LEAD BGN',
    cats: ['DRIVE', 'AMP', 'MODULATION', 'DELAY', 'REVERB'],
    chain: [
      { name:'TS Drive', params:[{n:'Gain',v:50,max:100},{n:'Boost',v:0,max:1,options:['OFF','ON']},{n:'Tone',v:52,max:100},{n:'VOL',v:75,max:100}] },
      { name:'XtasyBlue', params:[{n:'Bass',v:50,max:100},{n:'MID',v:52,max:100},{n:'Treble',v:50,max:100},{n:'PRSNC',v:52,max:100},{n:'STRCT',v:0,max:1,options:['LO','HI']},{n:'Gain',v:62,max:100},{n:'VOL',v:68,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'Chorus', params:[{n:'Depth',v:28,max:100},{n:'Rate',v:14,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:18,max:100}] },
      { name:'ModDelay', params:[{n:'Time',v:380,min:1,max:2000,tempo:true},{n:'F.B',v:26,max:100},{n:'Mix',v:28,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Hall', params:[{n:'PreD',v:18,min:1,max:100},{n:'Decay',v:20,min:1,max:30},{n:'Mix',v:25,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 014 ── GILMOUR – Estilo David Gilmour ─────────────────── */
  {
    id: 14, name: 'GILMOUR',
    cats: ['DRIVE', 'AMP', 'MODULATION', 'DELAY', 'REVERB'],
    chain: [
      { name:'SweetDrv', params:[{n:'Gain',v:42,max:100},{n:'Tone',v:55,max:100},{n:'Focus',v:50,max:100},{n:'VOL',v:72,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:50,min:10,max:100},{n:'MID',v:48,min:10,max:100},{n:'Treble',v:55,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:36,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:45,min:10,max:100},{n:'SPEED',v:48,min:10,max:100}] },
      { name:'Phaser', params:[{n:'Color',v:0,max:3,options:['4STG','8STG','INV4','INV8']},{n:'Depth',v:65,max:100},{n:'Rate',v:16,max:50,tempo:true},{n:'RESO',v:40,max:100}] },
      { name:'Delay', params:[{n:'Time',v:480,min:1,max:4000,tempo:true},{n:'F.B',v:32,max:100},{n:'Mix',v:35,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'HD Hall', params:[{n:'PreD',v:20,min:1,max:200},{n:'Decay',v:52,max:100},{n:'Mix',v:28,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 015 ── THE EDGE – Delay rítmico ───────────────────────── */
  {
    id: 15, name: 'THE EDGE',
    cats: ['DRIVE', 'AMP', 'MODULATION', 'DELAY'],
    chain: [
      { name:'RC Boost', params:[{n:'Gain',v:32,max:100},{n:'Bass',v:48,max:100},{n:'Treble',v:55,max:100},{n:'VOL',v:75,max:100}] },
      { name:'UK 30A', params:[{n:'Bass',v:48,max:100},{n:'Treble',v:55,max:100},{n:'Cut',v:45,max:100},{n:'Gain',v:42,max:100},{n:'VOL',v:70,max:100},{n:'Depth',v:45,max:100},{n:'Speed',v:48,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'Chorus', params:[{n:'Depth',v:28,max:100},{n:'Rate',v:14,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:20,max:100}] },
      { name:'AnalogDly', params:[{n:'Time',v:440,min:1,max:4000,tempo:true},{n:'F.B',v:38,max:100},{n:'Mix',v:40,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 016 ── BLUES TX – Blues texano ────────────────────────── */
  {
    id: 16, name: 'BLUES TX',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'DELAY', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:6,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:5,max:10},{n:'VOL',v:80,max:100}] },
      { name:'TS Drive', params:[{n:'Gain',v:38,max:100},{n:'Boost',v:0,max:1,options:['OFF','ON']},{n:'Tone',v:58,max:100},{n:'VOL',v:72,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:52,min:10,max:100},{n:'MID',v:48,min:10,max:100},{n:'Treble',v:55,min:10,max:100},{n:'BRGHT',v:1,max:1,options:['OFF','ON']},{n:'Gain',v:42,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:45,min:10,max:100},{n:'SPEED',v:48,min:10,max:100}] },
      { name:'TapeEcho', params:[{n:'Time',v:320,min:1,max:2000,tempo:true},{n:'F.B',v:22,max:100},{n:'Mix',v:30,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Spring', params:[{n:'PreD',v:12,min:1,max:100},{n:'Decay',v:16,min:1,max:30},{n:'Mix',v:35,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 017 ── ACOUSTIC – Simulação de violão ─────────────────── */
  {
    id: 17, name: 'ACOUSTIC',
    cats: ['DYNAMICS', 'DRIVE', 'MODULATION', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:6,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:5,max:10},{n:'VOL',v:80,max:100}] },
      { name:'Aco.Sim', params:[{n:'Top',v:65,max:100},{n:'Body',v:70,max:100},{n:'Tone',v:55,max:100},{n:'VOL',v:74,max:100}] },
      { name:'Chorus', params:[{n:'Depth',v:30,max:100},{n:'Rate',v:15,max:50},{n:'Tone',v:5,max:10},{n:'Mix',v:26,max:100}] },
      { name:'Plate', params:[{n:'PreD',v:14,min:1,max:200},{n:'Decay',v:42,max:100},{n:'Mix',v:36,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 018 ── HARD ROCK ──────────────────────────────────────── */
  {
    id: 18, name: 'HARD ROCK',
    cats: ['DYNAMICS', 'DRIVE', 'AMP', 'DELAY', 'REVERB'],
    chain: [
      { name:'ZNR', params:[{n:'DETCT',v:0,max:1,options:['GTRIN','EFXIN']},{n:'Depth',v:55,max:100},{n:'THRSH',v:40,max:100},{n:'Decay',v:40,max:100}] },
      { name:'GoldDrive', params:[{n:'Gain',v:52,max:100},{n:'Bass',v:50,max:100},{n:'Treble',v:52,max:100},{n:'VOL',v:72,max:100}] },
      { name:'MS 800', params:[{n:'Input',v:0,max:1,options:['LO','HI']},{n:'Bass',v:52,max:100},{n:'MID',v:48,max:100},{n:'Treble',v:52,max:100},{n:'PRSNC',v:52,max:100},{n:'Gain',v:60,max:100},{n:'VOL',v:68,max:100},{n:'SOLO',v:5,min:1,max:9}] },
      { name:'AnalogDly', params:[{n:'Time',v:340,min:1,max:4000,tempo:true},{n:'F.B',v:20,max:100},{n:'Mix',v:25,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Hall', params:[{n:'PreD',v:16,min:1,max:100},{n:'Decay',v:18,min:1,max:30},{n:'Mix',v:22,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 019 ── COUNTRY – Country / chicken pickin' ────────────── */
  {
    id: 19, name: 'COUNTRY',
    cats: ['DYNAMICS', 'AMP', 'DELAY', 'REVERB'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:8,max:10},{n:'ATTCK',v:1,max:1,options:['SLOW','FAST']},{n:'Tone',v:6,max:10},{n:'VOL',v:82,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:48,min:10,max:100},{n:'MID',v:50,min:10,max:100},{n:'Treble',v:58,min:10,max:100},{n:'BRGHT',v:1,max:1,options:['OFF','ON']},{n:'Gain',v:34,min:10,max:100},{n:'VOL',v:72,min:10,max:100},{n:'DEPTH',v:30,min:10,max:100},{n:'SPEED',v:40,min:10,max:100}] },
      { name:'Delay', params:[{n:'Time',v:180,min:1,max:4000,tempo:true},{n:'F.B',v:8,max:100},{n:'Mix',v:18,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
      { name:'Spring', params:[{n:'PreD',v:8,min:1,max:100},{n:'Decay',v:12,min:1,max:30},{n:'Mix',v:25,max:100},{n:'Tail',v:1,max:1,options:['OFF','ON']}] },
    ]
  },

  /* ── 020 ── LOOPER JAM ─────────────────────────────────────── */
  {
    id: 20, name: 'LOOPER JAM',
    cats: ['DYNAMICS', 'AMP', 'RHYTHM', 'LOOPER'],
    chain: [
      { name:'Comp', params:[{n:'Sense',v:6,max:10},{n:'ATTCK',v:0,max:1,options:['SLOW','FAST']},{n:'Tone',v:5,max:10},{n:'VOL',v:80,max:100}] },
      { name:'FD TWNR', params:[{n:'Bass',v:50,min:10,max:100},{n:'MID',v:50,min:10,max:100},{n:'Treble',v:52,min:10,max:100},{n:'BRGHT',v:0,max:1,options:['OFF','ON']},{n:'Gain',v:36,min:10,max:100},{n:'VOL',v:70,min:10,max:100},{n:'DEPTH',v:40,min:10,max:100},{n:'SPEED',v:45,min:10,max:100}] },
      { name:'Rhythm', params:[{n:'PATTERN',v:8,min:1,max:68},{n:'BPM',v:110,min:40,max:250},{n:'VOL',v:55,max:100}] },
      { name:'LP-STEREO', params:[{n:'Undo',v:1,max:1,options:['OFF','ON']},{n:'Stop',v:0,max:2,options:['STOP','FINISH','FADEOUT']},{n:'VOL',v:80,max:100}] },
    ]
  },

];
