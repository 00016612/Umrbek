import {read, write} from "../utils/index.js"

export default {
    get: (_, res) => {
        const allFood = read('food.json')
        res.render('food.ejs', { allFood })
    },
    post: (req, res) => {
        const { food_name, price } = req.body

        if (!food_name && !price) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const allFood = read('food.json')

        if (allFood.find(food => food.food_name == food_name)) {
            return res.status(400).json({
                message: "This food already exists"
            })
        } else {
            allFood.push({
                id: allFood.at(-1)?.id + 1 || 1,
                food_name,
                price
            })

            write('food.json', allFood)

            res.redirect('/west/food')
        }
    },
    update: (req, res) => {
        const { id } = req.params
        const {  food_name, price  } = req.body

        console.log(id, food_name, price);

        const allfoods = read('food.json')

        const foodIndex = allfoods.findIndex(food => food.id == +id)

        if (foodIndex == -1) {
            return res.status(404).json({
                message: "food not found"
            })
        } else {
            allfoods[foodIndex] = {
                id: +id,
                food_name: food_name || allfoods[foodIndex].food_name,
                price: price || allfoods[foodIndex].price
            }

            write('food.json', allfoods)

            res.redirect('/west/food');
        }
    },
    delete: (req, res) => {
        const { id } = req.params

        const allfoods = read('food.json')

        const foodIndex = allfoods.findIndex(food => food.id == id)

        if (foodIndex == -1) {
            return res.status(404).json({
                message: "food not found"
            })
        } else {
            allfoods.splice(foodIndex, 1)

            write('food.json', allfoods)

            res.redirect('/west/food')
        }
    }
}