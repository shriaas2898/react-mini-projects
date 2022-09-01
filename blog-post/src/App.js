import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  let posts = [
    {id: 1, title: "Hello world", content: "Welcome to learning react!", username: "Ankit"},
    {id: 2, title: "Install", content: "Welcome to learning react!", username: "Rahul"},
    {id: 3, title: "Variables", content: "Welcome to learning react!", username: "Rahul"},
    {id: 4, title: "State and props", content: "Welcome to learning react!", username: "Ankit"},
    {id: 5, title: "Lifecycle", content: "Welcome to learning react!", username: "Shyam"},
    {id: 6, title: "Forms", content: "Welcome to learning react!", username: "Ankit"},
    ];
  let user_posts = {};
    posts.forEach(function(element){
      let key = element.username.toString();
      if(!user_posts[key]){
        user_posts[key] = [];
      }
      user_posts[key].push(element);
    });
  return (
    <div className="App">
          
          { 
            Object.entries(user_posts).map((user_post) =>        
            <User items={user_post[1]} name={user_post[0]}/>)
        }
    </div>
  );
}

export default App;
