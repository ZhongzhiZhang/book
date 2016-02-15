// Dependencies:
// - MyComponents.GarageSpaces
// - MyComponents.GarageTitle
// - MyComponents.GarageHours
// - MyComponents.GarageRates

MyComponents.Garage = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          TODO: This is a component to display a Garage data.
          Raw props data is {JSON.stringify(this.props)}
        </div>
      </div>
    );
  }
});



MyComponents.Garages = React.createClass({
  render: function() {

    var rates = this.props.garage.map(function(r,i){
      return <MyComponents.Garage garage={r} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        TODO: This is a component about a garage whose
        raw data is {JSON.stringify(this.props.garage)}
          <MyComponents.GarageTitle
            title={this.props.garage.friendlyName}/>
          <MyComponents.GarageSpaces
            open={this.props.garage.open_spaces}
            total={this.props.garage.total_spaces}/>
          <MyComponents.GarageRates
            rates={this.props.garage.rates}/>
          <MyComponents.GarageHours
            hours={this.props.garage.hours}/>
        </div>
      </div>
    );
  }
});
