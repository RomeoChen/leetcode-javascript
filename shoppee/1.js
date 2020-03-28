const data = {
  company: {
    name: "Shoppee",
    location: {
      country: "China",
      city: "SZ"
    }
  },
  industry: "e-commerce"
}

function getProp(propPath) {
  const keys = propPath.split('.');
  let curr = data;
  for (let key of keys) {
    if (!(key in curr)) {
      return "unknown";
    }
    curr = curr[key];
  }
  return curr;
}

console.log(getProp('company.location.city1'));
