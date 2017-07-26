module.exports = function giveup (task, opts, pass, fail) {
  task = task || function noop (cb) { cb() }
  pass = pass || function noop () {}
  fail = fail || function noop () {}
  if (opts && typeof opts.timeout === 'number') {
    setTimeout(function () {
      pass = function noop () {}
      fail()
    }, opts.timeout)
  }

  task(function cb () {
    fail = function noop () {}
    pass.apply(null, arguments)
  })
}
