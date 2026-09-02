// Prebake script
//
// This is code that is loaded before your pattern is run.
// You can use it to define custom functions to use in any pattern.
// 
// This is an initial example script. You can edit it to add 
// your own funtions.
//
// To use a script shared by some other user you can use
// the import-button or paste the script in this editor.

const ratchet = register('ratchet', (pat) => pat.sometimes(ply(2)))

samples({
  kick: ['kick1.wav', 'kick2.wav', 'kick3.wav'],
  snare: ['snare1.wav', 'snare2.wav', 'snare3.wav'],
  hh: ['hh1.wav', 'hh2.wav', 'hh3.wav'],
  oh: ['oh1.wav', 'oh2.wav', 'oh3.wav'],
  perc: ['perc1.wav', 'perc2.wav', 'perc3.wav'],
  atm: ['atm.wav'],
  sample:['sample1.wav', 'sample2.wav', 'sample3.wav', 'sample4.wav','sample5.wav'],
}, 'https://raw.githubusercontent.com/ribeiroLevi/codigosEbatidas/main/');
// **************** NÃO ALTERAR ***************** //

//Define o BPM (Batidas/Minuto/Intervalo)
setCps (100/60/4)


//Bumbo (Disponíveis: kick:0, kick:1, kick:2)
$: s("kick:1").beat("0,1,3,3.5,4.5,7",8)._scope()//Caixa (Disponíveis: snare:0, snare:1, snare:2)
$: s("snare:2").beat("2,6",8)._punchcard()
//Prato (Disponíveis: hh:0, hh:1, hh:2)
$: s("hh:2!8").gain(0.4)

//Prato Aberto (Disponíveis: oh:0, oh:1, oh:2)
$: s("oh:3").beat("5,8",8)._punchcard()
//Percusão (Disponíveis: perc:0, perc:1, perc:2)
$: s("perc:2").beat("2",8)._punchcard()
//Sample (Disponíveis: sample:0, sample:1, sample:2 (Difícil), sample:3 (Difícil), sample:4)
$: s("sample:1").slice(8, "0 1 2 3 4 5 6 7").loopAt(8).legato(1)._scope()
//Atmosfera (Disponíveis: atm:0)
$: s("atm:0").loopAt(8).gain(0.5)._scope()
