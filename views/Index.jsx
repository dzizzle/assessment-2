const React = require("react");

const Index = (props) => {
  return (
    <html>
      <head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
       
        <div>
          <h1>To Do</h1>
          
            <ul>
              {props.todos.map((obj, index) => {
                return (
                  <li key={index}>
                    <span>{obj.todo}</span>
                    <form
                      action={`/todos/${index}?_method=delete`}
                      method="POST"
                    >
                      <button>delete</button>
                    </form>
                  </li>
                );
              })}
            </ul>

          <form action="/todos/new" method="post">
            <input type="text" name="todo" />
            <button>Add</button>
          </form>
        </div>
      </head>
    </html>
  );
};

module.exports = Index;