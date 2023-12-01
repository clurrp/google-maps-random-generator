import { User } from './User';
import { Company } from './Company'

// initialize our project
// import all classes into this file
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);