const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = []

}

Park.prototype.add = function(dinosaur){
    this.dinosaurs.push(dinosaur)
}

Park.prototype.remove = function(dinosaur){
    let full_dinosaurs = []
    for(let animal of this.dinosaurs){
        if(animal !== dinosaur){
            full_dinosaurs.push(animal)
        }
    }
    this.dinosaurs = full_dinosaurs;
}

Park.prototype.findMostAttractiveDinosaur = function(){
    let maximum = 0;
    let highest_dinasaour;
    for (let currentDinosaur of this.dinosaurs){
        if (currentDinosaur.guestsAttractedPerDay > maximum){
            maximum = currentDinosaur.guestsAttractedPerDay
            highest_dinasaour = currentDinosaur;
            
        }
    }
    
    return highest_dinasaour;
}

Park.prototype.findBySpecies = function(specie){
    let dinosaurFound = [];
    for(let dinosaur of this.dinosaurs){
        if(dinosaur.species === specie){
            dinosaurFound.push(dinosaur)
        }
    }
    return dinosaurFound
}

Park.prototype.calculateAverageVisitorsPerDay = function(){
    let numberOfVisitors = 0;
    for(let dinosaur of this.dinosaurs){
        numberOfVisitors += dinosaur.guestsAttractedPerDay
    }
    return numberOfVisitors
}

Park.prototype.calculateAverageVisitorsPerYear = function(){
    let numberOfVisitors = this.calculateAverageVisitorsPerDay();
    let visitorsInaYear = 0;
    visitorsInaYear = numberOfVisitors * 365;
    return visitorsInaYear;
}

Park.prototype.calculateAverageYearlyRevenue = function(){
    let visitorsInaYear = this.calculateAverageVisitorsPerYear();
    let revenue = 0;
    revenue = this.ticketPrice * visitorsInaYear;
    return revenue;
}

Park.prototype.removeBySpecies = function(specie){
    let full_dinosaurs = [];
    for(let dinosaur of this.dinosaurs){
        if(dinosaur.species !== specie){
            full_dinosaurs.push(dinosaur)
        }
    }
    this.dinosaurs = full_dinosaurs;
}

Park.prototype.numberOfDinosaursByDiet = function(){
    let dietList = {carnivore: 0, herbivore:0, omnivore:0 };
    for(let dinosaur of this.dinosaurs){
        if(dinosaur.diet === 'carnivore'){
            dietList.carnivore += 1;
        }
        else if (dinosaur.diet === 'herbivore'){
            dietList.herbivore += 1;
        }
        else if (dinosaur.diet === 'omnivore'){
            dietList.omnivore += 1;
        }
    }
    return dietList;
}

module.exports = Park;