import { strict } from 'assert';

export class Adresse {
    Straße: string;
    PLZ: number;
    Ort: string;
    lat: number;
    lng: number;

    constructor( Straße: string, PLZ: number, Ort: string, lat: number, lng: number){
        this.Straße = Straße;
        this.PLZ = PLZ;
        this.Ort = Ort;
        this.lat = lat;
        this.lng = lng;
    }
}