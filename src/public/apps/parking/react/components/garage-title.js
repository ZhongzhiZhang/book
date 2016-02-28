
MyComponents.GarageTitle = React.createClass({
  render: function() {
    return (
      <div className="card blue darken-4">
        <div className = "card-content white-text">
          <h1 >{this.props.title}</h1>
        </div>
      </div>
    );
  }
});
