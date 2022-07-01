import logo from "./logo.svg";
import "./App.css";
import AnimatedText from "react-animated-text-content";

function App() {
	return (
		<div className="App">
			<section className="landinginfo">
				<AnimatedText
					duration={0.8}
					type="words"
					animationType="throw"
					tag="p"
					className="title"
				>
					Hi
				</AnimatedText>
				<div style={{ display: "flex" }}>
					<AnimatedText
						duration={0.8}
						type="words"
						animationType="throw"
						tag="p"
						className="title"
					>
						I'm
					</AnimatedText>
					<AnimatedText
						duration={0.8}
						type="words"
						animationType="throw"
						tag="p"
						className="titlej"
					>
						{" " + "J"}
					</AnimatedText>
					<AnimatedText
						duration={0.8}
						type="words"
						animationType="throw"
						tag="p"
						className="title"
					>
						eremy
					</AnimatedText>
				</div>

				{/* <AnimatedText
					type="words"
					animationType="throw"
					tag="p"
					className="title"
				>
					I'm Jeremy
				</AnimatedText> */}

				<AnimatedText
					type="words"
					animationType="float"
					tag="p"
					className="title"
				>
					web developer
				</AnimatedText>
				<AnimatedText
					type="chars"
					animationType="diagonal"
					tag="p"
					className="subtitle"
					duration={1.9}
				>
					{"FullStack" + " " + "/" + " Flutter" + " " + "Developer"}
				</AnimatedText>
				{/* <p className="title">Hi,</p>
				<p className="title">I'm Jeremy</p>
				<p className="title">web developer</p>
				<p className="subtitle">FullStack Developer / Flutter Developer</p> */}
				<button class="button-85" style={{ marginTop: "30px" }}>
					Contact Me
					<span class="dot" />
				</button>
			</section>
			<section className="background">
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>

				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
			</section>
		</div>
	);
}

export default App;
