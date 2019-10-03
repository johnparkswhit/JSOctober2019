//An object is a data type that consists of key-value pairs.

/*

let name = {
    1.      2.

    key :   value,
    3   4   5
}

1. Name of the object
2. curly braces contain the data of the object
3. Key is the name of the specific data inside the object
4. The data name and value are separated by a colon
5. Value of the data. Each key-value pair ends with a comma

*/

let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place", 
    seasonInfo: {
      season1: {
        numberOfEpisodes: 5,
        episodeInfo : [
          { episode: 1, episodeName: "Pilot"},
          { episode: 2, episodeName: "Flying"},
          { episode: 3, episodeName: "Tahani Al-Jamil"},
          { episode: 4, episodeName: "Jason Mendoza"},
          { episode: 5, episodeName: "Category 55 Emergency Doomsday Crisis"}
        ]
      },
      season2: {
        numberOfEpisodes: 6,
        episodeInfo : [
          { episode: 1, episodeName: "Everything is Great!"},
          { episode: 2, episodeName: "Dance Dance Resolution"},
          { episode: 3, episodeName: "Team Cockroach"},
          { episode: 4, episodeName: "Existential Crisis"},
          { episode: 5, episodeName: "The Trolley Problem"},
          { episode: 6, episodeName: "Janet and Michael"}
        ]
      },
      season3: {
        numberOfEpisodes: 5,
        episodeInfo : [
          { episode: 1, episodeName: "Everything Is Bonzer!"},
          { episode: 2, episodeName: "The Brainy Bunch"},
          { episode: 3, episodeName: "The Snowplow"},
          { episode: 4, episodeName: "Jeremy Bearimy"},
          { episode: 5, episodeName: "The Ballad of Donkey Doug"}
        ]
      }
    },
    description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
  };

//   console.log(netflix);
//   console.log(netflix.name)
// console.log(netflix.seasonInfo.season3.episodeInfo[4])

  netflix.seasonInfo.totalSeasons = 3;
  console.log(netflix.seasonInfo);
  
  let newEpisode = netflix.seasonInfo.season2.episodeInfo.push({episode: 7, episodeName: "derek"});
  console.log(netflix.seasonInfo.season2);
  