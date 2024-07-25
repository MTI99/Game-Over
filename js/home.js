import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Home {
    constructor() {
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                document.querySelector(".nav .active").classList.remove("active");
                link.classList.add("active");
                const cat = link.getAttribute("data-category");
                this.getGames(cat);
            });
        });

        this.display = new Ui();
        this.loader = document.querySelector("#loadingScreen");
        this.detailsElement = document.querySelector(".gameDetails"); 
        this.mainGames = document.querySelector(".main");
        this.getGames("mmorpg");
    }

    async getGames(cat) {
        this.loader.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '99fa6fe985msh5344a7679c7fa34p1a62d2jsn11ce728d1085',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
        const finalRes = await res.json();
        this.display.displayGames(finalRes);
        this.loader.classList.add("d-none");
        
        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("click", () => {
                this.detailsElement.classList.remove("d-none");
                this.mainGames.classList.add("d-none");
                let gameId = card.dataset.id;
                this.display.displayDetails(gameId);
                new Details(gameId);
            });
        });
    }
}


// document.getElementById("close").addEventListener("click",()=> { 
//     this.details.classList.add("d-none")
//     this.mainGames.classList.remove("d-none")
//     console.log("hello");
// })