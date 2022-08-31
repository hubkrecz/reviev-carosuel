const goLeft = document.querySelector('.review-buttons-GoLeft');
const goRight = document.querySelector('.review-buttons-GoRight');
const surpriceMe = document.querySelector('.review-buttons-SurpriceMe');

const review = document.querySelectorAll('.review');

const arrayOfReview = [...review];
console.log(arrayOfReview);

const number = () => arrayOfReview.filter((current, index) => index > 0);


(
    () => [...number()].forEach((current) => current.classList.add('review--hidden'))
)();

const reviewSwaper = (index) => {
    arrayOfReview.forEach((current) => current.classList.add('review--hidden'))

    arrayOfReview[index].classList.remove("review--hidden")
}

// const indexGiverForRevievSwaper(index) => {

// }

const isContain = (array, className) => array.find((current) => current.contain(!className))

console.log(isContain(number, "reviev--hidden"))
goLeft.addEventListener("click", () => {

    indexGiverForRevievSwaper()
})
goRight.addEventListener("click")
surpriceMe.addEventListener("click")
