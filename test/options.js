describe('options', function () {
    var chai = require('chai');
    var should = chai.should();

    chai.use(require('chai-string'));
    var simpleRandom = require("../index.js");

    it('should have length of 32', function () {
        var random = simpleRandom({length: 32});
        random.should.have.length(32);
    });
    it('should start with _tmp_', function () {
        var random = simpleRandom({prefix: "_tmp_"});
        random.should.startsWith("_tmp");
    });
    it('should end with .docx', function () {
        var random = simpleRandom({suffix: ".docx"});
        random.should.endsWith(".docx");
    });
    it('should contain only "1"', function () {
        var random = simpleRandom({chars: '1'});
        var ones = "1111111111111111";
        random.should.be.equal(ones);
    });
    it('should provide expected outcome with insecure random', function () {
        var options = {chars: "1234567890a", length: 40, secure: false};
        var random = simpleRandom(options);
        random.should.have.lengthOf(options.length);
        var randomArray = random.split("");
        randomArray.forEach(function (char) {
            options.chars.indexOf(char).should.be.above(-1);
        });
    });
});
