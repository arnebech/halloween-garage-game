import fs from 'fs';

const lines = fs.readFileSync('output-2024.txt', 'utf-8').split('\n').filter(line => line);



// Thu Oct 31 2024 19:42:23 GMT-0700 (Mountain Standard Time) 
// to
// Tue Oct 31 2023 17:24:30, btn press,  0

console.log('Date,count')

const regexp = /(.*) GMT-0700 \(Mountain Standard Time\) btn press (.*)/

lines.forEach(line => {

  const result = line.match(regexp);
  if (!result) {
    console.log(line);
    throw new Error("unexpected format")
  }
  const date = result[1];

  console.log(`${date},${result[2].trim()}`)

});


