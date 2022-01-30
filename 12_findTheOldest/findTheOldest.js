const findTheOldest = function(people) {
  const currentYear = new Date().getFullYear();

  const oldestToYoungest = people.sort((previousPerson, currentPerson) => {
    let previousYearsLived, currentYearsLived;
    
    if (!previousPerson.yearOfDeath) {
      previousYearsLived = currentYear - previousPerson.yearOfBirth;
    } else {
      previousYearsLived = previousPerson.yearOfDeath - previousPerson.yearOfBirth;
    }

    if (!currentPerson.yearOfDeath) {
      currentYearsLived = currentYear - currentPerson.yearOfBirth;
    } else {
      currentYearsLived = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    }
    
    return previousYearsLived > currentYearsLived ? -1 : 1;
  });

  return oldestToYoungest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
