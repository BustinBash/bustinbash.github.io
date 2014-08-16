$(document).ready(function(){

  // Database
  var dbc = new Database.Controller
  var database = new Database.Model
  database.fetch(dbc)

  // Master
  var mc = new Master.Controller
  mc.init();
  // mc.bindEvents()
  // Instruction
  var im = new Instruction.Model
  var iv = new Instruction.View
  var ic = new Instruction.Controller(iv, im)
  ic.init()

  // Question
  var qm = new Question.Model
  var qv = new Question.View
  var qc = new Question.Controller(qv, qm)
  qc.init()

  // Terminal
  var tm = new Terminal.Model
  var tv = new Terminal.View
  var tc = new Terminal.Controller(tv, tm)
  tc.init()

  // Hints
  var hm = new Hints.Model
  var hv = new Hints.View
  var hc = new Hints.Controller(hv, hm)
  hc.init()


  // Directory
  var dm = new Directory.Model
  var dv = new Directory.View
  var dc = new Directory.Controller(dv, dm)
  dc.init()


})
