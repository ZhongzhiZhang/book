MyComponents.GarageSpaces = React.createClass({
  render: function() {
    return (
      <div className="card blue darken-4">
        <div className="card-content white-text">
        <li>Open Spaces: {this.props.open}</li>
        <li>Total Spaces: {this.props.total}</li>
        </div>
      </div>
    );
  }
});
