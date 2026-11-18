const a = 10;
const ShowA = () => <div>{a}</div>;
const MultipleA = () => <div>{a * a}</div>;
const App = props => {
    return (
        <div className="app">
            <ShowA />
            <MultipleA />
        </div>
    );
};



