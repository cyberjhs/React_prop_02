import Container from "./Container";
function App() {
  const movie = [
    {
      poster_name:"    Bright               ⭐⭐⭐", 
      poster_img:"https://wallpapercave.com/wp/wp2354003.jpg",
      year:"2017",
      Director:"David Ayer",
      duration:"117 min",
      genre:"Action,Crime,Fantasy",
      description:"In an LA rife with interspecies tensions, a human cop and his orc partner stumble on a powerful object and become embroiled in a prophesied turf war",
    },
    {
      poster_name:"Tomb Raider ⭐⭐⭐",
      poster_img:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/38/1505763709-tomb-raider.jpg",
      year:"2018",
      Director:"Roar Uthaung",
      duration:"128 min",
      genre:"Action,Fantasy",
      description:"Lara Croft, a courageous and independent young woman, sets out on a dangerous journey to unravel the truth behind her adventurer father's mysterious disappearance.",
    },
    {
      poster_name:"The Mummy   ⭐⭐⭐",
      poster_img:"https://www.themoviedb.org/t/p/original/zxkY8byBnCsXodEYpK8tmwEGXBI.jpg",
      year:"2017",
      Director:"Alex Kurtzman",
      duration:"110 min",
      genre:"Action/Horror",
      description:"An ancient Egyptian princess is awakened from her crypt beneath the desert, bringing with her malevolence grown over millennia, and terrors that defy human comprehension.",
    },
    
  ]
  return (
    <div className="mainContainer">&nbsp;
      {
        movie.map((e,idx) => {
          return(
            <Container key={idx} poster_name={e.poster_name} poster_img={e.poster_img} year={e.year} Director={e.Director} duration={e.duration}
             genre={e.genre} description={e.description}/>
          )
        })
      }
      &nbsp;
    </div>
  );
}

export default App;