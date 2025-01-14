const blogPosts = [
    {
        title: "Overcoming Self-Doubt",
        description: "Learn how to overcome self-doubt and take control of your emotions",
        category: "Lifestyle",
        image:"image1.jpg",
        link: "https://www.theminimalists.com/doubt/",
    },    
    {
        title: "Latest Advancements in AI",
        description: "Explore the cutting-edge developments in artificial intelligence",
        category: "Technology",
        image:"image2.jpg",
        link: "https://indatalabs.com/blog/ai-latest-developments",
    },
    {
        title: "Turning Passion into Business",
        description: "Transform your passion into a thriving business.",
        category: "Business",
        image:"image3.jpg",
        link: "https://www.iwillteachyoutoberich.com/passion-into-business/",
    },
    {
        title: "List of Best Street Foods",
        description: "Explore the most delicious street foods from around the globe",
        category: "Food",
        image:"image4.jpg",
        link: "https://en.wikipedia.org/wiki/List_of_street_foods",  
    },
    {
        title: "Best places in Andhra Pradesh to Visit in Winter",
        description: "Here are some of the top places and some tourist spots you must think about visiting to make your winter holiday in Andhra unique.",
        category: "Travel",
        image:"image5.jpg",
        link: "https://talesofbackpacker.com/best-places-to-visit-in-andhra-pradesh-during-winter/",  
    },
    {
        title: "My All Time Favourite Place is Tirumala",
        description: "Tirumala is the place where lord venkateswara swami is present and He is called as KALIYUGA GOD.",
        category: "Travel",
        image:"image6.jpg",
        link: "https://en.wikipedia.org/wiki/Tirumala",  
    }

];

    const postsContainer = document.getElementById("posts-container");
    const searchInput = document.getElementById("searchInput");
    const categoryLinks = document.querySelectorAll(".category-link");


    function renderPosts(posts) {
        postsContainer.innerHTML = "";
        posts.forEach(post => {
            const postBox = document.createElement("div");
            postBox.classList.add("box");
            postBox.innerHTML = `
                <img src="${post.image}" alt="${post.title}" style="width:100%; height:auto; border-radius:5px;"> 
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <p><strong>Category:</strong> ${post.category}</p>
                <a href="${post.link}" class="btn">Read More</a>
            `;
            postsContainer.appendChild(postBox);
        });
    }

    
    categoryLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); 
            const category = link.getAttribute("data-category");
            const filteredPosts = blogPosts.filter(post => post.category === category);
            renderPosts(filteredPosts);
            document.getElementById("myposts").scrollIntoView({ behavior: "smooth" });
        });
    });


    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filteredPosts = blogPosts.filter(
            post => post.title.toLowerCase().includes(query) || 
                    post.description.toLowerCase().includes(query) ||
                    post.category.toLowerCase().includes(query)
        );
        renderPosts(filteredPosts);
    });


    renderPosts(blogPosts);