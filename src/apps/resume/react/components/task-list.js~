MyComponents.Task = React.createClass({
  render: function() {
           var name = this.props.task.value.name;
           var tasksdeadline = this.props.task.value.deadline;
	   var priority = this.props.task.value.priority;  
	   var types = this.props.task.value.type;  
    return (
      <div className="card ">
        <div className="card-content">
      <ul>
	Task Name: {name}
      </ul>
      <ul>
	Deadline: {tasksdeadline}
      </ul>
      <ul>
	Priority: {priority}
      </ul>
      <ul>
	Type: {types}
      </ul>

        </div>
      </div>
    );
  }
});

MyComponents.TaskList = React.createClass({
  render: function() {

      var tasks = this.props.Task.map(function(r,i){
      return <MyComponents.Task task={r} key={i}/>
    })

    return (
      <div className="card ">
        <div className="card-content">
          {tasks}
        </div>
      </div>
    );
  }
});


