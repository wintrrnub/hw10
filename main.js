const root = ReactDOM.createRoot(document.querySelector('#root'));

const CounterComponent = () => {
    return (
        <div className="counter">
            <button class="btn-inc">+</button>
            <h2>{0}</h2>
            <button class="btn-dec">-</button>
            <button class="btn-clr">C</button>
            <button class="btn-rem">X</button>
        </div>
    );
}

function App() {
    return (
        <div className="head-counter">
            <h1 className="Sum">sum = 0</h1>
            <button class="btn-add"> Add Counter</button>
            <CounterComponent />
        </div>
    );
}

root.render(<App />);