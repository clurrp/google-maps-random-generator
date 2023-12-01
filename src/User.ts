// Reaches into node-modules directory
// Leverage type defintion files as a bridge between ts & js
// can also be a form of documentation
import { faker } from '@faker-js/faker'
import { Mappable } from './CustomMap';

// Implements is optional, it's useful to point errors in the correct file location
export class User implements Mappable {
  name: string;
  // Need to initialize the below, originally it is undefined
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    // As soon as an instance is created, the constructor executes
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }

  markerContent(): string {
    return `
    <div>
    <h1>User Name: ${this.name}</h1>
    </div>
    `;
  }
}