export class GalacticeAge {
    constructor(year, month, date){
     this.dob = new Date(year,month,date);  
     this.currentyear = new Date();
     this.age = (currentyear - dob) / 31540000000;
     this.lifeexpectancy = 77;
    }

    mercuryage(){
    return Math.round(this.age / .24);    
    }

    venusage(){
    return Math.round(this.age / .62);    
    }

    marsage(){
    return Math.round(this.age / 1.88);    
    }

    jupiterage(){
    return Math.round(this.age / 11.86);    
    }

    mercurylifeexpectancy(){
    return Math.round((this.lifeexpectancy / .24) - (this.age / .24))     
    }

    venuslifeexpectancy(){
    return Math.round((this.lifeexpectancy / .62) - (this.age / .62))     
    }

    marslifeexpectancy(){
    return Math.round((this.lifeexpectancy / 1.88) - (this.age / 1.88))     
    }

    jupiterlifeexpectancy(){
    return Math.round((this.lifeexpectancy / 11.86) - (this.age / 11.86))     
    }
}


