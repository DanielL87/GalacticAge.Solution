import {GalacticAge} from './../src/galacticage.js';

describe ('GalacticAge', function() {

    it('should return user age for mercury', function() {
        let newDate =  new GalacticAge(1987, 9, 02);
        expect(glacticage.mercuryage(newDate)).toEqual(129);
    })

    it('should return user age for venus', function() {
        let newDate =  new GalacticAge(1987, 9, 02);
        expect(glacticage.venusage(newDate)).toEqual(50);
    })
    
    it('should return user age for mars', function() {
        let newDate =  new GalacticAge(1987, 9, 02);
        expect(glacticage.venusage(newDate)).toEqual(16);
    })

    it('should return user age for jupiter', function() {
        let newDate =  new GalacticAge(1987, 9, 02);
        expect(glacticage.venusage(newDate)).toEqual(3);
    })

    it('should return user lifeexpectancy for mercury', function() {
        let newDate =  new GalacticAge(1987, 9, 02);
        expect(glacticage.mercurylifeexpectancy(newDate)).toEqual(192);
    })

    it('should return user lifeexpectancy for venus', function() {
        let newDate =  new GalacticAge(1987, 9, 02);
        expect(glacticage.venuslifeexpectancy(newDate)).toEqual(74);
    })

    it('should return user lifeexpectancy for mars', function() {
        let newDate =  new GalacticAge(1987, 9, 02);
        expect(glacticage.marslifeexpectancy(newDate)).toEqual(25);
    })

    it('should return user lifeexpectancy for jupiter', function() {
        let newDate =  new GalacticAge(1987, 9, 02);
        expect(glacticage.jupiterlifeexpectancy(newDate)).toEqual(4);
    })
})
