Ψ
===

Twitter sized PubSub library in javascript.

```javascript
!function(c,i){Ψ=function(a,b,j){a=c[a]=c[a]||{};if('f'==(typeof b)[0])return a[j=i++]=b,function(){delete a[j]};for(j in a)a[j](b)}}({},0)
```

Defines global variable Ψ (psi) which acts as a "hybrid" event:

* Subscribe - if the second argument is a function.
* Publish otherwise

Basic usage is as simple as possible.

```javascript

var unsub = Ψ('eventName', handler); //subscribe

Ψ('eventName', data); //publish event

unsub(); //unsubscribe
```