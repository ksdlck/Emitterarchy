Emitterarchy
============

SYNOPSIS
--------

Hierarchical events, based on EventEmitter2's namespacing functionality.
You can emit any event you want, but if an event is not known by the emitter it will be considered a top level event.

    em = new Emitterarchy
    em.define \end # this doesn't do anything, but it might make your code clearer
    em.define \success \end
    em.define \error \end
    em.define \transient \error
    em.define \fatal \error
    em.define \timeout \transient

    em.on \error !(ev) ->
      console.log "error: #ev"

    em.emit \timeout "timeout while contacting the moon"

    em.on \hmmm ! ->
      console.log "hmmmmmmmmmmmmmmmmm"

    em.emit \hmmm

WARNING
-------

Only `.on` and `.emit` have been wrapped, and I haven't checked to see whether EventEmitter2 uses these internally for `.onMany` etc.

LICENSE
-------

Copyright (c) 2012 Karel Sedláček <k@ksdlck.com> (http://ksdlck.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
