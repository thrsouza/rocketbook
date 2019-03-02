import React, { Component, Fragment } from "react";
import Header from "./Header";
import Post from "./Post";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Thiago de Souza",
        avatar: "https://avatars2.githubusercontent.com/u/6491925?s=460&v=4",
        time: "há 10 min",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non facilisis arcu. Cras metus nibh, fringilla ut facilisis in, gravida non nisi. Aliquam commodo, tortor vitae venenatis bibendum, sem leo egestas urna, eu tempus elit mi et dolor. Quisque consequat lacinia nunc id eleifend. Duis eget tellus vulputate, blandit enim ac, pulvinar arcu. Aenean in est quam. Etiam nulla nisl, mattis in faucibus in, porttitor vel massa. Duis sagittis felis non bibendum rhoncus. Phasellus urna arcu, auctor eu eros et, pulvinar congue magna. Sed non convallis leo. Cras non massa facilisis, accumsan nisi sit amet, rutrum erat."
      },
      {
        id: 2,
        name: "Lucas Martioli",
        avatar: "https://avatars3.githubusercontent.com/u/8473855?s=460&v=4",
        time: "há 12 min",
        body:
          "Nulla et commodo mauris. Duis elit neque, rhoncus eu dui ut, egestas convallis nisi. Nulla sagittis, ex et condimentum iaculis, dolor massa tempus mi, ut imperdiet urna urna quis ex. Nam aliquam mi vel dui dignissim, ac gravida justo euismod. Quisque euismod sodales lacinia. Donec facilisis faucibus augue, id interdum enim placerat ac. Donec rutrum mauris a sapien tempor imperdiet. Integer hendrerit ex ornare, pulvinar enim id, auctor dui. Cras a odio sit amet lorem dignissim molestie id eget dolor."
      },
      {
        id: 3,
        name: "Rafael Rampineli",
        avatar: "https://avatars0.githubusercontent.com/u/29956005?s=460&v=4",
        time: "há 20 min",
        body:
          "Sed viverra cursus tortor, non molestie ipsum porttitor sed. Pellentesque nec ligula felis. Maecenas a blandit quam, eget semper metus. Maecenas id fringilla lorem. Donec at malesuada libero, at vulputate leo. Curabitur eget luctus leo, non porta lacus. Nunc fermentum iaculis urna, in luctus erat. Pellentesque molestie velit sed massa pretium posuere. Nulla iaculis ex vitae enim consectetur pulvinar. Sed id accumsan nisi. Nulla sed consectetur risus. Ut nec dui felis."
      },
      {
        id: 4,
        name: "Fabio Siqueira",
        avatar: "https://avatars2.githubusercontent.com/u/4811304?s=460&v=4",
        time: "há 22 min",
        body:
          "Suspendisse non pharetra dolor. Etiam convallis cursus est quis gravida. Morbi est purus, congue faucibus consequat eget, mattis sit amet dolor. Integer tempor leo finibus purus commodo eleifend. Sed lectus felis, bibendum ac egestas vel, gravida at ante. In lacinia scelerisque feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat purus consectetur libero elementum, in luctus ex dignissim. In libero risus, venenatis id auctor et, finibus quis urna. Suspendisse ullamcorper id dolor non euismod. Donec massa turpis, ullamcorper vel lorem id, feugiat faucibus quam. Curabitur laoreet hendrerit dictum. Donec euismod efficitur mi, vitae rhoncus lacus rutrum vehicula. Etiam sagittis volutpat dapibus. Nullam blandit enim mi, eget dapibus lectus aliquam sed. Morbi varius laoreet felis eu posuere."
      },
      {
        id: 5,
        name: "Mario Aleo",
        avatar: "https://avatars2.githubusercontent.com/u/11902839?s=460&v=4",
        time: "há 33 min",
        body:
          "ed lacinia, nisi vitae ornare egestas, ligula arcu semper mauris, eget molestie nulla erat et ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ullamcorper massa quis enim ornare interdum. Phasellus mollis libero ut malesuada bibendum. In eleifend turpis sit amet tellus placerat eleifend. Etiam pharetra feugiat faucibus. Pellentesque aliquet luctus odio, in mattis est faucibus vitae. Integer lobortis, sem nec vehicula interdum, magna dui dignissim purus, et pellentesque magna dui a lacus. Aenean ac libero accumsan, tincidunt risus sed, varius libero. Etiam sit amet ipsum sapien. Suspendisse porta faucibus purus, id fringilla lacus tristique quis. Pellentesque non justo vel ante hendrerit rutrum. In pretium a est et ornare. Integer id ornare ante. Quisque id rutrum urna. Integer pretium eget ex et egestas."
      }
    ]
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="post-container">
          {this.state.posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </Fragment>
    );
  }
}
