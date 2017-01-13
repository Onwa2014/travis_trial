var assert = require('assert');
var greet = require('../index')

    describe('greet function', function() {
        it('should greet ', function () {
            var result = greet('Amila');
            assert.equal(result, 'Hello Amila!');
        });
    });
