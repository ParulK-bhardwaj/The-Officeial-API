require('dotenv').config()
const app = require('../server.js')
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert

const Character = require('../models/character.js')
const Quote = require('../models/quote.js')

chai.config.includeStack = true

const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)

/**
 * root level hooks
 */
after((done) => {
    // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
    mongoose.models = {}
    mongoose.modelSchemas = {}
    mongoose.connection.close()
    done()
})

const SAMPLE_OBJECT_ID = 'aaaaaaaaaaaa' // 12 byte string
const ObjectID = mongoose.Types.ObjectId;

const SAMPLE_QUOTE_ID = new ObjectID(); // Generate a new ObjectID

describe('Quote API endpoints', () => {
    beforeEach((done) => {
        const character = new Character({
            charactername: 'charactername',
            
            _id: SAMPLE_OBJECT_ID
        });

        character.save((err, savedCharacter) => {
            if (err) {
                return done(err);
            }
            this.characterId = savedCharacter._id;

            const quote = new Quote({
                _id: SAMPLE_QUOTE_ID,
                content: 'Test quote',
                saidwho: character
            });

            quote.save((err, savedQuote) => {
                if (err) {
                    return done(err);
                }
                this.quoteId = savedQuote._id;
                done();
            });
        });
    });


    afterEach((done) => {
        Quote.deleteOne({ _id: this.quoteId }, (err) => {
            if (err) {
                return done(err);
            }
            // Remove the test Character document
            Character.deleteOne({ _id: this.characterId }, (err) => {
                if (err) {
                    return done(err);
                }
                done();
            });
        });
    });

    it('should load all quotes', (done) => {
        chai.request(app)
            .get('/quotes')
            .end((err, res) => {
                if (err) { done(err) }
                expect(res).to.have.status(200)
                expect(res.body.quotes).to.be.an("array")
                done()
            })
    })

    it('should get one specific quote', (done) => {
        chai.request(app)
            .get(`/quotes/${this.quoteId}`)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.should.be.json;
                res.body.should.have.property('content')
                res.body.should.have.property('saidwho')
                done();
            });
    });

    it('should post a new quote', (done) => {
        const newQuote = {
            content: 'This is a new quote',
            saidwho: this.characterId
        };

        chai.request(app)
            .post('/quotes')
            .send(newQuote)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.should.be.json;
                res.body.should.have.property('content').equal(newQuote.content)
                res.body.should.have.property('saidwho').equal(String(this.characterId))
                done();
            });
    });

    it('should update a quote', (done) => {
        const updatedQuote = {
            content: 'This is an updated quote'
        };

        chai.request(app)
            .put(`/quotes/${this.quoteId}`)
            .send(updatedQuote)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.should.be.json;

                Quote.findById(this.quoteId, (err, quote) => {
                    expect(quote).to.not.be.null
                    expect(quote.content).to.equal(updatedQuote.content)
                    expect(quote.saidwho.toString()).to.equal(this.characterId.toString())
                
                done();
                })
            });
    });

    it('should delete a quote', (done) => {
        chai.request(app)
            .delete(`/quotes/${this.quoteId}`)
            .end((err, res) => {
                res.should.have.status(200)
                Quote.findById(this.quoteId, (err, quote) => {
                    expect(quote).to.equal(null)
                    done()
                });
            });
    });

});