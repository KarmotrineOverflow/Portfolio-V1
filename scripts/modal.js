window.addEventListener("load", function() {

    var projectTiles = document.getElementsByClassName("project-grid-tile");
    var modal = document.getElementsByClassName("modal")[0];    
    var modalCloseBtn = document.getElementById("close-modal");

    modalCloseBtn.addEventListener("click", function() {

        modal.close();
        modal.getElementsByClassName("project-technologies-list")[0].innerHTML = "";
        console.log("Button clicked");
    })

    for (var i = 0; i < projectTiles.length; i++) {   
                
        currentProjectTile = projectTiles[i];        

        projectTiles[i].addEventListener("click", function() {

            var projectName = this.getElementsByTagName("h3")[0].innerText;
            var projectDetails = this.getElementsByClassName("project-details")[0].innerText;
            var projectTechnologies = this.getElementsByClassName("project-technologies");

            for (var tech = 0; tech < projectTechnologies.length; tech++) {

                var technologyName = projectTechnologies[tech].innerText;

                modal.getElementsByClassName("project-technologies-list")[0].innerHTML += `<li class="technology-list-item">
                                                                                                <img id="technology-icon" src="./assets/images/linkedin.png">
                                                                                                <p id="technology-name">${technologyName}</p>
                                                                                            </li>`;

                console.log(modal.getElementsByClassName("project-technologies-list")[0]);
            }
                                
            modal.getElementsByClassName("project-name")[0].innerHTML = projectName;
            modal.getElementsByClassName("project-description")[0].innerHTML = projectDetails;
            modal.showModal();
        })
    }
});