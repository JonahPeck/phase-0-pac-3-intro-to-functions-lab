function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(`${string.toUpperCase()}`);
  }
  function logWhisper(string) {
    console.log(`${string.toLowerCase()}`);
  }

  const string = "string";
  let response;

  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) [
        response = "I can\'t hear you!"

    ]
    else if (string === string.toUpperCase()) {
        response = "YES INDEED!"
    }
    else {
        response = "I would love to!"
    }
    return (`${response}`);
  }
sayHiToHeadphonedRoommate(string);
