export class GalacticeAge {
    constructor(year, month, date){
     this.dob = new Date(year,month,date);  
     this.age = Math.Round((new Date() - this.dob) / 31540000000);
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
    return Math.round((77 / .24) - (this.age / .24))     
    }

    venuslifeexpectancy(){
    return Math.round((77 / .62) - (this.age / .62))     
    }

    marslifeexpectancy(){
    return Math.round((77 / 1.88) - (this.age / 1.88))     
    }

    jupiterlifeexpectancy(){
    return Math.round((77 / 11.86) - (this.age / 11.86))     
    }
}



