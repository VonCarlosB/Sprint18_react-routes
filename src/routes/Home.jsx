import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <h2>Developer description</h2>
            <p>Hi, my name is Carlos. I am passionate about web developing, front and backend. I specialize in React and I'm eager to learn more every day.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ipsum, fermentum a leo non, mattis auctor nunc. Integer id sem a ex laoreet mollis eget ac ante. Praesent quam eros, egestas vel lacus nec, pellentesque porta libero. Nam dolor felis, porttitor a fringilla a, lobortis sit amet est. Duis erat nulla, tristique ut sagittis nec, porttitor non felis. Sed a turpis ultrices, posuere nibh id, tincidunt nisl. Praesent tempus lectus lacus, quis convallis diam sagittis eget. Integer sed mauris sed mauris condimentum tristique.</p>
            <p>I said I was passionate about web developing, not description making.</p>
            <Link to={"/projects"}>Projects</Link>
            <br/>
            <br/>
            <Link to={"/resume"}>Resume</Link>
        </>
    )
}