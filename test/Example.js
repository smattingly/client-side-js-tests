"use strict";

/* global Example */

describe('Example', function() {
    let example = new Example();
    it("this test passes", function() {
        example.should.have.property('sample', 1);
    });

    it("this test is pending");

    it("this test fails", function() {
        (true).should.equal(false);
    });
});
