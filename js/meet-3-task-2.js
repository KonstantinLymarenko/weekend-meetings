// Генератор доменів gmail.com ukr.net

function urlGeneration(domen) {
  return function (url) {
    return `https://${url}.${domen}`;
  };
}

const netUrl = urlGeneration("net");
console.log(netUrl("ukr"));

const uaUrl = urlGeneration("ua");
console.log(uaUrl("goit"));

const comUrl = urlGeneration("com");
console.log(comUrl("google"));
console.log(comUrl("apple"));

const orgUrl = urlGeneration("org");
console.log(orgUrl("mozilla"));
