function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(String){
    console.log(shout("hello"));
}
function logWhisper(string){
    console.log(whisper("hello"));
}
function sayHiToHeadphonedRoommate(string){
    if   (string===whisper(string)){
        return "I can't hear you!";
    }
    else if  (string==="Let's have dinner together!"){
        return "I would love to!";
    }
    else 
        return "YES INDEED!";
}
console.log(sayHiToHeadphonedRoommate("HELLO"));