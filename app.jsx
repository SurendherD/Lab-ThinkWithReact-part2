class Reactcontainer extends React.Component{
    render(){
        return (
            <div>
                Hello! Welcome to Kalvium
                <div>This is babel</div>
            </div>
        )
    }
}

const contain = document.getElementById('react-container');
ReactDOM.render(<Reactcontainer/>,contain);