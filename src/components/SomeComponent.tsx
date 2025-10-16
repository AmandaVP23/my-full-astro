import { actions } from "astro:actions";
function SomeComponent() {
    const doSomething = async () => {
        const { data, error } = await actions.getGreeting({ name: 'Peter' });

        console.log(data);
    }

    return (
        <div style={{ backgroundColor: '#FF22FF', padding: '20px' }}>
            <h1>Some component</h1>
            <button type="button" onClick={doSomething}>Magic!</button>
        </div>
    );
}

export default SomeComponent;