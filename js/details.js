import { Ui } from "./ui.js";

export class Details {
    constructor(gameId) {
        this.getDetailes(gameId);
        console.log(gameId);
    }
    
    async getDetailes(gameId) {
        this.loaders = document.querySelector("#loadingScreen");
        this.loaders.classList.remove("d-none");
        
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '99fa6fe985msh5344a7679c7fa34p1a62d2jsn11ce728d1085',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
        const finalRes = await res.json();
        console.log(finalRes);
        this.loaders.classList.add("d-none");
        new Ui().displayDetails(finalRes);
    }
}
