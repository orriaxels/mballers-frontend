export class Player {
    _id:        number;
    pos:        number;
    name:       string;
    wins:       number;
    losses:     number;
    draws:      number;
    attented:   number;
    deleted:    boolean;
    gamesLost:  number;
    gamesWon:   number;
    difference: number;
    lastFive:   string;
    lFive:      boolean[];    
}