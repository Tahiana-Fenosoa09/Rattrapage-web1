import { coursesData, translations } from "./data.js";

const coursesContainer =
    document.getElementById("coursesContainer");

let currentLanguage = "en";

function displayCourses(courses) {
    coursesContainer.innerHTML = "";

    courses.forEach(course => {
        const card = document.createElement("article");

        card.className = "course-card";

        card.dataset.technology = course.technology;
        card.dataset.level = course.level;
        card.dataset.price = course.price;

        card.innerHTML = `
            <div class="course-image"
                 style="background-image: url('${course.image}')">

                <span class="technology-badge">
                    ${course.technology}
                </span>

                <span class="level-badge">
                    ${course.level}
                </span>

            </div>

            <div class="course-content">

                <h2>
                    ${course.title[currentLanguage]}
                </h2>

                <p class="price">
                    MGA ${course.price.toLocaleString("en-US")}
                </p>

                <p class="description">
                    ${course.description[currentLanguage]}
                </p>

                <div class="card-buttons">

                    <button class="learn-button">
                        ${translations[currentLanguage].learnMore}
                    </button>

                    <button class="cart-button">
                        ${translations[currentLanguage].addToCart}
                    </button>

                </div>

            </div>
        `;

        coursesContainer.appendChild(card);
    });
}

displayCourses(coursesData);