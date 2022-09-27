export interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate?: any;
    strTags?: any;
    strVideo?: any;
    strCategory?: string;
    strIBA?: any;
    strAlcoholic?: string;
    strGlass?: string;
    strInstructions: string;
    strInstructionsES?: any;
    strInstructionsDE?: string;
    strInstructionsFR?: any;
    strInstructionsIT?: string;
    "strInstructionsZH-HANS"?: any;
    "strInstructionsZH-HANT"?: any;
    strDrinkThumb?: string;
    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strIngredient5?: string;
    strIngredient6?: any;
    strIngredient7?: any;
    strIngredient8?: any;
    strIngredient9?: any;
    strIngredient10?: any;
    strIngredient11?: any;
    strIngredient12?: any;
    strIngredient13?: any;
    strIngredient14?: any;
    strIngredient15?: any;
    strMeasure1?: string;
    strMeasure2?: string;
    strMeasure3?: string;
    strMeasure4?: string;
    strMeasure5?: string;
    strMeasure6?: any;
    strMeasure7?: any;
    strMeasure8?: any;
    strMeasure9?: any;
    strMeasure10?: any;
    strMeasure11?: any;
    strMeasure12?: any;
    strMeasure13?: any;
    strMeasure14?: any;
    strMeasure15?: any;
    strImageSource?: any;
    strImageAttribution?: any;
    strCreativeCommonsConfirmed?: string;
    dateModified?: string;
}


async function getDrink() {

    let response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    let data: Drink = await (await response.json())["drinks"][0]
    return data
}

function parseItems(itemStr: string, drink: Drink)
{
    let items: string[] = []
    for (let i = 1; i <= 15;i+=1)
    {
        items[i] = drink[`${itemStr}${i}` as keyof Drink]
    }

    items = items.filter((value) => value !== null)
    return items
}

async function getRandomDrink(): Promise<void> {
    let drink = await getDrink()

    let name = drink.strDrink
    let glass = drink.strGlass
    let instruction = drink.strInstructions
    let ingredients = parseItems('strIngredient', drink)
    let measurements = parseItems('strMeasure', drink)

    let ingredientsList = ""
    for (let i = 0; i < measurements.length;i+=1)
    {
        if (ingredients[i] == null || measurements[i] == null)
            continue
        ingredientsList += `${ingredients[i]} - ${measurements[i]} <br>`
    }

    document.getElementById("random-recipe").innerHTML =
        `
                Here's a drink for you! <br>
                Name: ${name} <br>
                Glass to use: ${glass} <br>
                Instruction: ${instruction} <br>
                Ingredients: <br>
                ${ingredientsList}
                `


}

window.onload = () => getRandomDrink()