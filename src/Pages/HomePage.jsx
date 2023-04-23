import Navbar from "../Components/Navbar.jsx"
import Footer from "../Components/Footer.jsx"
import Counter from "../Components/Counter.jsx"

export default function HomePage() {
    const name = "John Doe"
    const age = 30
    const address = "123 MAin St"
    console.log(name)
    return(
        <div>
            <Navbar />
            <Counter />
            <h1>My name is {name}</h1>
            <h1>My age is {age}</h1>
            <h1> I live in {address} </h1>


            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, eos ex adipisci earum totam possimus nam aperiam vel, omnis corporis deserunt non, ipsa quidem veritatis suscipit quod tenetur? Labore reprehenderit atque non totam? Minus dicta ipsa quae laudantium expedita ullam quibusdam debitis vero autem natus harum, mollitia aperiam?</p>
            <Footer />
        </div>
    )
}