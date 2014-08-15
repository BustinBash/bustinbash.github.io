$(document).ready(function(){

  // Instruction
  var im = new Instruction.Model
  var iv = new Instruction.View
  var ic = new Instruction.Controller(iv, im)

  // Question
  var qm = new Question.Model
  var qv = new Question.View
  var qc = new Question.Controller(qv, qm)

  // Terminal
  var tm = new Terminal.Model
  var tv = new Terminal.View
  var tc = new Terminal.Controller(tv, tm)

  // Hints
  var hm = new Hints.Model
  var hv = new Hints.View
  var hc = new Hints.Controller(hv, hm)


  // Directory
  var dm = new Directory.Model
  var dv = new Directory.View
  var dc = new Directory.Controller(dv, dm)

})