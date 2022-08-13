let dataBlog = []

function addBlog(event) {

    // method preventDefault()
    event.preventDefault()

    let title = document.getElementById("inputName").value
    let startDate = document.getElementById("inputStart").value
    let endDate = document.getElementById("inputEnd").value
    let description = document.getElementById("deskrip").value
    let node = document.getElementById("inputNode").checked
    let react = document.getElementById("inputReact").checked
    let golang = document.getElementById("inputGo").checked
    let angular = document.getElementById("inputAngular").checked
    let image = document.getElementById("inputImage").files


    if(node){
        node = document.getElementById("inputNode").value
    } else {
        node = ""
    }
    
    if(react){
        react = document.getElementById("inputReact").value
    } else {
        react = ""
    }

    if(golang){
        golang = document.getElementById("inputGo").value
    } else {
        golang = ""
    }

    if(angular){
        angular = document.getElementById("inputAngular").value
    } else {
        angular = ""
    }
   
        console.log(node)


    // method URL.createObjectURL
    image = URL.createObjectURL(image[0])
 

    let blog = {
        title,
        startDate,
        endDate,
        description,
        node,
        react,
        golang,
        angular,
        image
    }

    
    
    dataBlog.push(blog)
    renderBlog()
    // console.log(dataBlog);
}

function renderBlog() {

    // console.log(dataBlog)
    document.getElementById("blog").innerHTML = ""

    for (let index = 0; index < addBlog.length; index++) {
        document.getElementById("blog").innerHTML += `
        <div class="cardProject">
                <img class="imgPost" src="${dataBlog[index].image}" alt="">
                    <a href="">${dataBlog[index].title}</a>
                    <p>Durasi: 3 bulan</p>
                <div>
                    <p>${dataBlog[index].description}</p>
                </div>

            <div>
                <div class="iconProject">
                   <i class="fa-brands  ${dataBlog[index].node}"></i> 
                   <i class="fa-brands  ${dataBlog[index].react}"></i> 
                   <i class="fa-brands  ${dataBlog[index].golang}"></i>
                   <i class="fa-brands  ${dataBlog[index].angular}"></i>
                </div>
            </div>

            <div class="btn-project">
                <button class="btnProject">edit</button>
                <button class="btnProject">delete</button>
            </div>
        </div>`

        console.log(dataBlog[index]);
    }
}