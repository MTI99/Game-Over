export class Ui { 
    constructor() {}

    displayGames(data){
        let gamesBox = ``;

        for (let i = 0; i < data.length; i++) {
            gamesBox += `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card h-100" data-id="${data[i].id}">
                    <img src="${data[i].thumbnail}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title text-white">${data[i].title}</h5>
                        <p class="card-text">${data[i].short_description}</p>
                    </div>
                    <div class="card-footer">
                        <span class="badge badge-primary">${data[i].genre}</span>
                        <span class="badge badge-secondary">${data[i].platform}</span>
                    </div>
                </div>
            </div>`;
        }
        document.getElementById("gamesData").innerHTML = gamesBox;
    }

    displayDetails(displayData){
        const detailsCartona = `
        <div class="col-md-4">  
            <button class="btn-close btn-close-white close position-absolute end-0" id="close"></button>
            <div class="game-details">
                <div class="w-100">
                    <img src="${displayData.thumbnail}" class="w-100" alt="...">
                    <div class="align-self-start">
                        <p class="fs-2 text-center bg-light text-black">${displayData.title}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-8">
            <div class="details">
                <h1 class="fw-bold">${displayData.title}</h1>
                <ul class="list-unstyled fs-4 fw-bold">
                    <li>Category: <span class="badge badge-pill badge-light py-2">${displayData.genre}</span></li>
                    <li>Platform: <span class="badge badge-pill badge-light py-2">${displayData.platform}</span></li>
                    <li>Status: <span class="badge badge-pill badge-light py-2">${displayData.status}</span></li>
                </ul>
                <p class="fs-4">${displayData.description}</p>
                <button class="btn btn-danger py-2 px-4">
                    <a href="${displayData.game_url}" class="text-decoration-none text-white" target="blank">Show Game</a>
                </button>
            </div>
        </div>`;

        document.querySelector(".gameDetails").innerHTML = detailsCartona;
        document.getElementById("close").addEventListener("click", () => {
            document.querySelector(".gameDetails").classList.add("d-none");
            document.querySelector(".main").classList.remove("d-none");
        });
    }
    
}

import { Home } from "./home.js";

const display = new Home();