export default function find00OldPerson(collection) {
  return collection.find(person => person.age <= 20 && person.age > 10).name;
}
