import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { matchResult } from "./MatchResult";

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let wins = 0;

for(let match of matchReader.matches)
{
    if(match[1] === 'Man United' && match[5] === matchResult.HomeWin)
    {
        wins++;
    }

    else if(match[2] === 'Man United' && match[5] === matchResult.AwayWin)
    {
        wins++;
    }
}

console.log(`ManUnited won ${wins} games.`);