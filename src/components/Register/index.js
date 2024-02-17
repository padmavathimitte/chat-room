import {React} from "react";

class Register extends Component {

    const handleSubmit = event => {
        event.preventDefault();
        alert("form");
    }

    render() {
        return(
            <div className="form-container">
                <form onSubmit={(event)=>handleSubmit(event)}>
                    <div className="brand">
                        <img src="" alt="" />
                        <h1>snappy</h1>
                    </div>
                    <input type="text" />

                </form>
            </div>
        )
      
    }
}

export default Register