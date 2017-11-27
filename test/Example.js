"use strict";

/* global Example */

describe('Example', function() {
    context("when a new object is created", function() {
        let example = new Example();
        it("should have a `sample` property with value 1", function() {
            example.should.have.property('sample', 1);
        });

        it("should have an `other` property with value 2", function() {
            example.should.have.property('other', 2);
        });

        it("should have a `someMethod` method that returns 3", function() {
            example.someMethod().should.equal(3);
        });
    });
});
