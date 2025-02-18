import { HashMap } from '@services/data-structures';

const hashMapOne = new HashMap();
hashMapOne.put('Alice');
hashMapOne.put('Bob');
hashMapOne.put('Charlie');
const hashMapTwo = new HashMap();
hashMapTwo.put('one');
hashMapTwo.put('two');
hashMapTwo.put('three');

const hashMaps: HashMap[] = [hashMapOne, hashMapTwo];

export default hashMaps;
