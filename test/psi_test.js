module('PubSub');

test('Should be defined', function(){
    ok(Ψ, 'Ψ is defined');
});

test('Ψ behaviour', function() {
    expect(13);
    var arg = {}, makeHandler = function(idx) {
        return function(data) {
            console.log(idx, data);
            ok(true, idx + ' called');
            equal(data, arg, 'got argument');
        };
    },
        h1 = makeHandler(1),
        h2 = makeHandler(2),
        h3 = makeHandler(3),
        event = "event";
    
    var unsub1 = Ψ(event, h1);
    
    equal(typeof unsub1, 'function', 'got unsub function back');
    
    var unsub2 = Ψ(event, h2);
    var unsub3 = Ψ(event, h3);
    
    Ψ(event, arg);
    
    unsub1();
    Ψ(event, arg);
    unsub2();
    Ψ(event, arg);
    unsub3();
    Ψ(event, arg);
});

test('Empty event', function(){
    Ψ('Nothing in there');
    ok(true, 'no exception thrown');
});

test('No data', function() {
    Ψ('some event', function(data){
        ok(true, 'called');
        ok(!data, 'got no data');
    });

    Ψ('some event');    
});

test('Data with call', function(){
    var data = {
        call: 1
    };
    Ψ('eventWithCall', function(arg) {
        equal(arg, data, 'got data');
    });

    Ψ('eventWithCall', data);
});

test('event data types', function(){
    var types = [undefined, null, 0, 1, "", "string", {}, [], [1], {a: 1, b:2}, true, false], i;
    
    expect(types.length);
    
    Ψ('differentDataTypes', function(data){
        equal(data, types[i], 'got correct data for:' + types[i]);
    });
    
    types.forEach(function(item, idx){
        i = idx;
        Ψ('differentDataTypes', item);
    });
});
