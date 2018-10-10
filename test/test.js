const chai = require('chai');

const { expect } = chai;
const grammar = require('..');

const { PartsOfSpeech, Sentence } = grammar;


describe('you have some grammar', () => {
    it('should have a grammar object', () => {
        expect(grammar).to.be.an('object');
    });

    it('should have PartsOfSpeech', () => {
        expect(grammar).to.haveOwnProperty('PartsOfSpeech');
    });

    it('should have an adjective', () => {
        expect(grammar).to.haveOwnProperty('PartsOfSpeech');
        expect(grammar.PartsOfSpeech).to.haveOwnProperty('Adjective');
    });
    it('should have a conjunction', () => {
        expect(grammar).to.haveOwnProperty('PartsOfSpeech');
        expect(grammar.PartsOfSpeech).to.haveOwnProperty('Conjunction');
    });
    it('should have a pronoun', () => {
        expect(grammar).to.haveOwnProperty('PartsOfSpeech');
        expect(grammar.PartsOfSpeech).to.haveOwnProperty('Pronoun');
    });

    it('should have a sentence', () => {
        expect(grammar).to.haveOwnProperty('Sentence');
    });
});

describe('you can create words', () => {
    describe('you can do stuff with adjectives', () => {
        it('should create an adjective', () => {
            const { Adjective } = PartsOfSpeech;
            const adj = new Adjective('tall', 'Descriptive');

            expect(adj).to.haveOwnProperty('word');
        });

        it('should have types and degrees', () => {
            const { Adjective } = PartsOfSpeech;
            const adj = new Adjective('tall', 'Descriptive');

            expect(adj).to.have.property('types');
            expect(adj).to.have.property('degrees');
        });
    });

    describe('you can do stuff with conjunctions', () => {
        it('should create a conjunction', () => {
            const { Conjunction } = PartsOfSpeech;
            const conj = new Conjunction('and');

            expect(conj).to.have.ownProperty('word');
        });

        it('should have types', () => {
            const { Conjunction } = PartsOfSpeech;
            const conj = new Conjunction('and');

            expect(conj).to.have.property('types');
        });
    });
    describe('you can do stuff with pronouns', () => {
        it('should create a pronoun', () => {
            const { Pronoun } = PartsOfSpeech;
            const pronoun = new Pronoun('I');

            expect(pronoun).to.have.ownProperty('word');
        });

        it('should have types, quantities, referents, and genders', () => {
            const { Pronoun } = PartsOfSpeech;
            const conj = new Pronoun('I');

            expect(conj).to.have.property('types');
            expect(conj).to.have.property('quantities');
            expect(conj).to.have.property('referents');
            expect(conj).to.have.property('genders');
        });
    });

    describe('you can do stuff with adverbs', () => {
        it('should create an adverb', () => {
            const { Verb } = PartsOfSpeech;
            const adv = new Verb('happily');

            expect(adv).to.have.ownProperty('word');
        });

        it('should have types', () => {
            const { Verb } = PartsOfSpeech;
            const adv = new Verb('happily');

            expect(adv).to.have.property('types');
        });
    });

    describe('you can do stuff with prepositions', () => {
        it('should create a preposition', () => {
            const { Verb } = PartsOfSpeech;
            const prep = new Verb('to');

            expect(prep).to.have.ownProperty('word');
        });

        it('should have types', () => {
            const { Verb } = PartsOfSpeech;
            const prep = new Verb('to');

            expect(prep).to.have.property('types');
        });
    });

    describe('you can do stuff with verbs', () => {
        it('should create a verb', () => {
            const { Verb } = PartsOfSpeech;
            const verb = new Verb('run');

            expect(verb).to.have.ownProperty('word');
        });

        it('should have types', () => {
            const { Verb } = PartsOfSpeech;
            const verb = new Verb('run');

            expect(verb).to.have.property('types');
        });
    });

    describe('you can do stuff with nouns', () => {
        it('should create a noun', () => {
            const { Noun } = PartsOfSpeech;
            const noun = new Noun('run');

            expect(noun).to.have.ownProperty('word');
        });

        it('should have types', () => {
            const { Noun } = PartsOfSpeech;
            const noun = new Noun('run');

            expect(noun).to.have.property('types');
        });
    });

    describe('you can do stuff with interjections', () => {
        it('should create an interjection', () => {
            const { Interjection } = PartsOfSpeech;
            const interjection = new Interjection('hey');

            expect(interjection).to.have.ownProperty('word');
            expect(interjection).to.have.ownProperty('word');
        });

        it('should have types and categories', () => {
            const { Interjection } = PartsOfSpeech;
            const interjection = new Interjection('hey');

            expect(interjection).to.have.property('types');
            expect(interjection).to.have.property('wordCategories');
        });
    });
});

describe('you can create sentences', () => {
    it('should have text, type, and language', () => {
        const sentence = new Sentence('This is a sentence.');

        expect(sentence).to.haveOwnProperty('type');
        expect(sentence).to.haveOwnProperty('text');
        expect(sentence).to.haveOwnProperty('language');
    });

    it('should have types', () => {
        const sentence = new Sentence('This is a sentence.');

        expect(sentence).to.have.property('types');
    });

    it('should split words into an array', () => {
        const sentence = new Sentence('This is a sentence.');

        expect(sentence).to.have.property('wordList');
        expect(sentence.wordList).to.be.an('array');
    });
});
