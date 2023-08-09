import logo from './logo.svg';
import './App.css';

const Hello = (props) => {

    const { name, year } = props
    function cal_year(year) {

        let d1 = new Date()
        let current_year = d1.getFullYear()

        return (
            current_year - year
        )
    }
    return (
        <div>
            <p>
                Hello {name} your age is {cal_year(year)}
            </p>
        </div>
    )

}
function App() {

    let name = "sagar"
    let year = "2003"
    return (
        <div>
            <Hello name={name} year={year}></Hello>
        </div>
    );
}

export default App;
