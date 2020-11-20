//  Example
// string Input = "<h1>dasds{3123}sssdf,value:awesomevalue]f//wessa
// const Result = ScapeBitString(Input, "value:", "]f/", 40);
// Result = awesomevalue

module.exports = ScrapeBitString;
function ScrapeBitString(SourceText, ToFindText, ReadUntilString, CharsLimitFromFindText) {

    const FindText = ToFindText; // To Find Text
    const dIndex = SourceText.indexOf(FindText); // Get Index in string of the find Text.

    if (dIndex === -1) return null // If Find Text is not found return.

    if (dIndex + CharsLimitFromFindText < SourceText.Length)
        SourceText = SourceText.substring(dIndex + ToFindText.length, dIndex + ToFindText.length + CharsLimitFromFindText);
    else
        SourceText = SourceText.substring(dIndex + ToFindText.length);

    let FoundTerminators = 0; // ? 0 index based
    let ReadTextChars = []; //Where to store the good chars.

    SourceText = [...SourceText]; // To Char Array
    const TerminatorChars = [...ReadUntilString]; //To Char Array

    for (let i = 0; i < SourceText.length; i++) {

        if (FoundTerminators === TerminatorChars.length) break;

        if (SourceText[i] === TerminatorChars[FoundTerminators]) {
            FoundTerminators++;
            continue;
        }

        FoundTerminators = 0;
        ReadTextChars.push(SourceText[i]); // Add the good char
    }

    if (ReadTextChars.length <= 0) return null;
    else return ReadTextChars.join("");
}