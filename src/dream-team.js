const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) { return false };
  let names = members.filter(member => typeof(member) === "string" &&
                                    isNaN(parseInt(member)));
  names = names.map(item => item.trim().toLowerCase());  
  names.sort();
  let result = [];
  for (let i = 0; i < names.length; i++) {
      result.push((names[i])[0].toUpperCase());
  }
  return result.join('');
};