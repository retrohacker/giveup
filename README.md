giveup
======

Try a thing for a certain amount of time and then give up

## Usage

```
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
```

> NOTE: The task _will run to completion_ and will not timeout until it yields the event loop. This library is best for giving up on asynchronous work after a certain amount of time to return a timeout. It is best to reduce task into a _single_ infinitesimal asynchronous task.
