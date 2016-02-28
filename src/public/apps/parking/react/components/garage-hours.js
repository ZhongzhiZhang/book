
MyComponents.Hour = React.createClass({
  render: function() {

    if (this.props.hour.BEG==undefined) {var beg = ' '}
      else {var beg = this.props.hour.BEG}
    if (this.props.hour.END==undefined) {var end =' '}
      else {var end = this.props.hour.END}
    if (this.props.hour.FROM==undefined) {var from =' '}
      else {var fromTime =this.props.hour.FROM}
    if (this.props.hour.TO==undefined) {var to =' '}
      else {var to =this.props.hour.TO}

      return (
        <div className="card blue darken-3">
        <div className="card-content white-text">
          <ul>
            <li>{fromTime}-{to} </li>
            <li>{beg}-{end}</li>
          </ul>
        </div>
        </div>
      );
  }
});

MyComponents.GarageHours = React.createClass({
  render: function() {

    var hours = this.props.hours.map(function(h,i){
      return <MyComponents.Hour hour={h} key={i}/>
    })

    return (
      <div className="card blue darken-4">
        <div className="card-content white-text">
        <h5>Hours</h5>
          {hours}
        </div>
      </div>
    );
  }
});
