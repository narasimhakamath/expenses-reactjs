import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const App = () => {
	const expenses = [
		{id: 1, title: 'Train ticket', amount: 1200, date: new Date(2022, 2, 25)},
		{id: 2, title: 'Dinner', amount: 200, date: new Date(2022, 1, 7)},
		{id: 3, title: 'Smirnoff Green Apple', amount: 960, date: new Date(2022, 11, 15)},
		{id: 4, title: 'Uber ride', amount: 300, date: new Date(2022, 9, 3)}
	];

	return (
		<div>
			<NewExpense />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
