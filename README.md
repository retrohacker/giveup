giveup
======

[![Greenkeeper badge](https://badges.greenkeeper.io/retrohacker/giveup.svg)](https://greenkeeper.io/)

Try a thing for a certain amount of time and then give up

## Usage

```
var opts = {
  timeout: 1000
}

function fail () {
  console.log('Timed Out!')
}

function pass () {
  console.log('Finished!')
}

giveup(doAsyncThing(), opts, pass, fail)
```

> NOTE: The task _will run to completion_ and will not timeout until it yields the event loop. This library is best for giving up on asynchronous work after a certain amount of time to return a timeout. It is best to reduce task into a _single_ infinitesimal asynchronous task.
