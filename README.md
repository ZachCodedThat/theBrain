# The Vending Machine Brain!

This was a really excellent thought experiment to drive home TDD and how it helps us with what we build.

### The Break Down

- I wanted to provide a link to my [personal notion Doc](https://www.notion.so/Vending-Machine-Brain-31145718861f4baca7d205377a5dc549) I used to sketch out this project. This is where I talk about what future ideas could be brought to the project and how we can get **automation** involved to handle things like scale and inv management. In the spirit of the assignment I kept my working time on this repo to the 4 hour mark collectively and tried to give a scaffolding that describes the flow.

- I tend towards a component *...Legos* way of thinking about structuring a project and like the patterns it provides.

- I used Typescript for the upfront awesomeness of type safety and auto complete but where this pick pays off is down the line when this needs to scale into a production product. By adding things like TRPC + Zod to the mix we can ensure that even our API calls are as type safe as what we are passing around locally. This was an excellent chance to work with TS in ways that differ from my day to day.
    - React was an easy reach for getting the repo up and running and giving me a workflow I am used to. The "logic" surrounding the functions could be finessed into whatever FE visualizer we could want.

- I did not want to reach for [Zod](https://zod.dev/?id=shape) on this because it is literal magic and feels like cheating. I wanted to have to think through how the data was going to flow and how to get at it instead of just `z.shape.prop` my way to the promise land. In a real world scenario Zod is an excellent tool I will use for the rest of time.

- There is a tiny Ui built but it was something thrown together to debug inputs quicker than swapping around hard coded test variables.

### My Takeaways

- From the jump I thought the inventory side of the problem would be where the most wiring ends up but that was quickly replaced with **Coin Input Validation** which took up a lions share of my bandwidth partly due to the complexity of the validation but more so the potential for improvements / optimizations that can be gained.

- Manually building validation schema and maintaining type safety across components, state, etc... is an art that confirms to me that things like Zod are actual dark magic 

- It was actually nice to be constrained to a time limit it forced me to write pseudo code which helps me think through and travel down as many possible paths to quickly narrow them down to ones actually worth exploring. 

## Thank you!

- For the chance to do this! I would love any feedback you could give
