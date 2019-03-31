export async function justFetch(city, dispatch){
	const result = await fetch(`http://localhost:1337/weather?city=${city}`);
	console.log(await result.json());
	// this.props.addToState({temperature:result})

}	
