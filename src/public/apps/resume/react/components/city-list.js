MyComponents.City = React.createClass({

  render: function() {
           var cityname = this.props.city.key;
	   var temp = this.props.city.value.currently.apparentTemperature
	   var humid = this.props.city.value.currently.humidity
           var windBearing = this.props.city.value.currently.windBearing
           var windSpeed = this.props.city.value.currently.windSpeed
           var summary =  this.props.city.value.currently.summary

    return (
      <div className="card">
        <div className="card-content">
        <ul>
	<h5>{cityname}</h5>
	<li>Temputure: {temp}</li>
	<li>Humidity: {humid}</li>
	<li>Wind Bearing: {windBearing}</li>
	<li>Wind Speed: {windSpeed}</li>
	<li>Summary: {summary}</li>
      </ul>
        </div>
      </div>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.City.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        
        {cityElements}

        </div>
      </div>
    );
  }
});
