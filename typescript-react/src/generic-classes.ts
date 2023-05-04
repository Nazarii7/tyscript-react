type TAnimationState = "playing" | "paused";
type THttpState = "request" | "success" | "error";

//implement a like class

class State<S> {
  private state: S;

  constructor(initialState: S) {
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  setState(newState: S) {
    this.state = newState;
  }
}

const animationState = new State<TAnimationState>("playing");
animationState.setState("paused");
//animationState.setState("request"); //error

const httpState = new State<THttpState>("error");
httpState.setState("request");
httpState.setState("success");

//implement a like factory

// const makeState = <S>(initialState: S) => {
//   let state = initialState;

//   const getState = () => {
//     return state;
//   };

//   const setState = (newState: S) => {
//     state = newState;
//   };

//   return {
//     getState,
//     setState,
//   };
// };

//const animationState = makeState<TAnimationState>("playing");
//animationState.setState("paused");
//animationState.setState("request") //error

//const httpState = makeState<THttpState>("success");
//httpState.setState("request");
//httpState.setState("playing"); //error

export {};
