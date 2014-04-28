Ψ
===

Twitter sized PubSub library in javascript.

```javascript
!function(c,i){psi=Ψ=function(a,b,j){if(b&&b.call){return(c[a]=c[a]||{})[j=i++]=b,function(){delete c[a][j]}}for(j in a=c[a])a[j](b)}}({},0)
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

For thouse who don't want to enter greek letter `Ψ`, use `psi` instead.