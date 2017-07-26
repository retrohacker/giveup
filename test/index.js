var test = require('tape')
var giveup = require('../index.js')

function createTask (to) {
  return function (cb) {
    setTimeout(cb, to)
  }
}

test('Should call error on timeout', function (t) {
  var opts = {
    timeout: 0
  }

  function fail () {
    t.pass('Should not pass')
    t.end()
  }

  function pass () {
    t.fail('Should not pass')
    t.end()
  }

  giveup(createTask(100), opts, pass, fail)
})

test('Should call cb on success', function (t) {
  var opts = {
    timeout: 300
  }

  function fail () {
    t.fail('Should not fail')
    t.end()
  }

  function pass () {
    t.pass('Should not fail')
    t.end()
  }

  giveup(createTask(100), opts, pass, fail)
})

// Can do nothing pretty quick :-)
test('Task should be optional', function (t) {
  var opts = {
    timeout: 300
  }

  function fail () {
    t.fail('Should not fail')
    t.end()
  }

  function pass () {
    t.pass('Should not fail')
    t.end()
  }

  giveup(null, opts, pass, fail)
})

// Go do a thing and don't care if it finishes, not sure why you are using this
// library but do your thing.
test('Pass should be optional', function (t) {
  var opts = {
    timeout: 300
  }

  function fail () {
    t.fail('Should not fail')
  }

  setTimeout(t.end, opts.timeout + 100)

  giveup(createTask(100), opts, null, fail)
})

// Go do a thing and only care if it succeeds, not sure why you are using this
// library but do your thing
test('Fail should be optional', function (t) {
  var opts = {
    timeout: 300
  }

  function pass () {
    t.pass('Should not fail')
  }

  setTimeout(t.end, opts.timeout + 100)

  giveup(createTask(100), opts, pass, null)
})

test('Opts should be optional', function (t) {
  function fail () {
    t.fail('Should not fail')
    t.end()
  }

  function pass () {
    t.pass('Should not fail')
    t.end()
  }

  giveup(createTask(100), null, pass, fail)
})
