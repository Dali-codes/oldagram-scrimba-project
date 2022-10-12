const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4285
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main-el")
const likeIcon = document.getElementsByClassName("like-icon")
const likesCount = document.getElementsByClassName("likes-count")

// function to render posts 

function renderPostSections() { 
    let sections = ""
    for (let i = 0; i < posts.length; i++) {    
        sections += `
            <section class="post-sections">
                <div class="container">  
                    <div class="user-info">
                        <img class="user-avatar" src="${posts[i].avatar}" alt="User avatar">
                        <div>
                            <h2 class="user-full-name bold-text">${posts[i].name}</h2>
                            <p class="location-text">${posts[i].location}</p>
                        </div>    
                    </div>    
                    <div>
                        <img class="post-img" src="${posts[i].post}" alt="Painted portrait of the user">
                    </div>
                    <div class="post-content">
                        <div class="icons">
                            <button class="btn"><img class="icon-img like-icon" src="images/icon-heart.png" alt="heart"></button>
                            <button class="btn"><img class="icon-img" src="images/icon-comment.png" alt="comment on post"></button> 
                            <button class="btn"><img class="icon-img" src="images/icon-dm.png" alt="dm the user"></button>      
                        </div>
                        <p class="bold-text likes-el"><span class="likes-count">${posts[i].likes.toLocaleString("en-US")}</span> likes</p>
                        <p class="comments-el"><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
                    </div>
                </div>
            </section>   
        `
    }
    mainEl.innerHTML = sections
}

renderPostSections()

// eventListeners to add likes

likeIcon[0].addEventListener("click", function() {
    let addLike1 = posts[0].likes +=1
    likesCount[0].textContent = addLike1.toLocaleString("en-US")
})

likeIcon[1].addEventListener("click", function() {
    let addLike2 = posts[1].likes +=1
    likesCount[1].textContent = addLike2.toLocaleString("en-US")
})

likeIcon[2].addEventListener("click", function() {
    let addLike3 = posts[2].likes +=1
    likesCount[2].textContent = addLike3.toLocaleString("en-US")
})