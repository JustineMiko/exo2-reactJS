class App extends React.Component {
    state = {
        userName: "",
        userComment: "",
        submitMessage: []
    }

    givenName = (event) => {
        console.log(event.target.value);

        this.setState({
        userName: event.target.value
        })
    }

    givenComment = (event) => {
        console.log(event.target.value);

        this.setState({
        userComment: event.target.value
        })
    }

    sumitionMessage = (event) => {
            event.preventDefault();
            const tmp = this.state.submitMessage.concat(this.state.userName);

            this.setState({
            submitMessage: tmp
            })
            
    }

    render() {
        return(
            <div className="form" onSubmit={this.submitionMessage}>
                <h1>Say something</h1>
                <form>
                    <input type="text" value={this.state.userName} placeholder="Your name" onChange={this.givenName} />
                    <textarea value={this.state.userComment} placeholder="Your comment" onChange={this.givenComment}></textarea>
                    <input className="button" type="submit" value={this.state.submitMessage} />
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));