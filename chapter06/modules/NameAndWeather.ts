export class Name {
    //first: string;
    //second: string;

    constructor(private first: string, private second: string) {
        this.first = first;
        this.second = second;
    }

    get nameMessage() : string {
        return `Hello ${this.first} ${this.second}`;
    }
}

export class WeatherLocation {
    //weather: string;
    //city: string;

    constructor(private weather: string, private city: string) {
        this.weather = weather;
        this.city = city;
    }

    get weatherMessage() : string {
        return `Hello ${this.weather} ${this.city}`;
    }
}