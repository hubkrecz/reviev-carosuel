const goLeft = document.querySelector('.review-buttons-GoLeft');
const goRight = document.querySelector('.review-buttons-GoRight');
const surpriceMe = document.querySelector('.review-buttons-SurpriceMe');

goLeft.disabled = true;

const review = document.querySelectorAll('.review');

const arrayOfReview = [...review];

const number = () => arrayOfReview.filter((current, index) => index > 0);


(
    () => [...number()].forEach((current) => current.classList.add('review--hidden'))
)();

const reviewSwaper = (index) => {
    arrayOfReview.forEach((current) => current.classList.add('review--hidden'));

    arrayOfReview[index].classList.remove("review--hidden");
}

const indexGiverForRevievSwaper = (index) => {
    if (index === 1) {
        reviewSwaper(indexof(getIfContain(arrayOfReview, "review--hidden"), arrayOfReview) - 1)
    }
    else if (index === 2) {
        reviewSwaper(indexof(getIfContain(arrayOfReview, "review--hidden"), arrayOfReview) + 1)
    }
    if (indexof(getIfContain(arrayOfReview, "review--hidden"), arrayOfReview) == 0) goLeft.disabled = true
    else goLeft.disabled = false;
    if (indexof(getIfContain(arrayOfReview, "review--hidden"), arrayOfReview) == 2) goRight.disabled = true;
    else goRight.disabled = false;

}

const indexof = (element, array) => array.indexOf(element);

const getIfContain = (array, className) => array.find((current) => !current.classList.contains(className));
console.log(getIfContain(arrayOfReview, "review--hidden"));




// console.log(getIfContain(number, "reviev--hidden"))
goLeft.addEventListener("click", () => {
    indexGiverForRevievSwaper(1);
})
goRight.addEventListener("click", () => {
    indexGiverForRevievSwaper(2);
})
surpriceMe.addEventListener("click", () => {
    indexGiverForRevievSwaper(3);
})