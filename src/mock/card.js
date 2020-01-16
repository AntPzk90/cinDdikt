const FilmsTitle = [
  `Coming To America `,
  `Dead Poets Society`,
  `The Shawshank Redemption`,
  `Good Will Hunting`,
  `Knockin' On Heaven's Door`,
  `What Dreams May Come`,
  `The Legend of Bagger Vance`,
  `Snatch`,
  `Big Fish`,
  `Peaceful warrior`,
  `The Ultimate Gift`,
  `Freedom Writers`,
  `Bridge to Terabithia`,
  `Giuseppe Moscati: L'amore che guarisce`,
  `Seven Pounds`,
];

const FilmsPosters = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
];

const FilmsDescription = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
];

const generateRandomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const generateFilmsCard = (index) => {
  return {
    "id": (index + 1).toString(),
    "comments": [
      "Good film",
      "Bad Film",
      "So-so film",
    ],

    "filmInfo": {
      "title": FilmsTitle[index],
      "alternativeTitle": "Laziness Who Sold Themselves",
      "totalRating": generateRandomInteger(2,8),
      "poster": "./images/posters/" + FilmsPosters[generateRandomInteger(0,FilmsPosters.length - 1)],
      "ageRating": 0,
      "director": "Tom Ford",
      "writers": [
        "Takeshi Kitano"
      ],
      "actors": [
        "Morgan Freeman"
      ],
      "release": {
        "date": 1475924187819,
        "releaseCountry": "Finland"
      },
      "runtime": generateRandomInteger(70, 90),
      "genre": [
        "Comedy",
        "Detective"
      ],
      "description": FilmsDescription.sort().slice(generateRandomInteger(0, 3), generateRandomInteger(3,7)).join(''),
    },

    "user_details": {
      "personal_rating": generateRandomInteger(4,9),
      "watchlist": false,
      "already_watched": true,
      "watching_date": "2019-05-11T16:12:32.554Z",
      "favorite": false
    }
  }
};

const generateFilmCards = (count) => {
  return new Array(count)
    .fill(``)
    .map((el,i) => generateFilmsCard(i));
};
export const FilmsCardsMok  = () => {
  return generateFilmCards(15)
}
