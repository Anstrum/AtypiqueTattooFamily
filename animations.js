const descriptionContainer1 = document.querySelector("#description-container1")
const descriptionContainer2 = document.querySelector("#description-container2")
const descriptionContainer3 = document.querySelector("#description-container3")


descriptionContainer1.addEventListener("click", () => manageExtend(descriptionContainer1))
descriptionContainer2.addEventListener("click", () => manageExtend(descriptionContainer2))
descriptionContainer3.addEventListener("click", () => manageExtend(descriptionContainer3))


function manageExtend(target)
{
    if(target !== descriptionContainer1)
    {
        descriptionContainer1.style.height = "35px"
        descriptionContainer1.style.transition = "all 0.3s"
    }
    if(target !== descriptionContainer2)
    {
        descriptionContainer2.style.height = "35px"
        descriptionContainer2.style.transition = "all 0.3s"
    }
    if(target !== descriptionContainer3)
    {
        descriptionContainer3.style.height = "35px"
        descriptionContainer3.style.transition = "all 0.3s"
    }

    if(target.offsetHeight != 35)
    {
        target.style.height = "35px"
        target.style.transition = "all 0.3s"
    }
    else
    {
        target.style.height = "auto"
        target.style.transition = "all 0.3s"
    }
}