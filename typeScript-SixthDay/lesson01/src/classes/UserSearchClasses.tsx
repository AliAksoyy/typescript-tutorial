import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchPorps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: { name: string; age: number } | undefined;
}

class UserSearchClasses extends Component<UserSearchPorps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick() {
    const foundUser = this.props.users.find((user) => user.name === this.state.name);
      this.setUser({ user: foundUser });
  }

  render() {
    return (
      <div>
        User Search
        <br />
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => setName({ name: e.target.value })}
        />
        <hr />
        <div>
          {this.state.user && this.state.user.name}
          {this.state.user?.age}
        </div>
        <button onClick={this.onClick}>Find User</button>
      </div>
    );
  }
}

export default UserSearchClasses;
