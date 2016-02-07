MyComponents.Rate = React.createClass({
  render: function() {
    if (this.props.rate.RATE==undefined) {var rate = ' '}
      else {var rate = 'Rate: $' + this.props.rate.RATE}
    if (this.props.rate.BEG==undefined) {var beg = ' '}
      else {var beg = this.props.rate.BEG}
    if (this.props.rate.END==undefined) {var end = ' '}
      else {var end = this.props.rate.END}
    if (this.props.rate.DESC==undefined) {var desc = ' '}
      else {var desc = this.props.rate.DESC}
    if (this.props.rate.RQ==undefined) {var rq = ' '}
      else {var rq = this.props.rate.RQ}
    if (this.props.rate.RR==undefined) {var rr = ' '}
      else {var rr = this.props.rate.RR}

    return (
      <div className="card blue darken-3">
      <div className="card-content white-text">
      <ul>
        <li>{beg}-{end}{desc} </li>
        <li>{rate} {rq} </li>
        <li>{rr}</li>
      </ul>
      </div>
      </div>
    );
  }
});

MyComponents.GarageRates = React.createClass({
  render: function() {

      var rates = this.props.rates.map(function(r,i){
      return <MyComponents.Rate rate={r} key={i}/>
    })

    return (
      <div className="card blue darken-4">
        <div className="card-content white-text">
        <h5>Rates</h5>
          {rates}
        </div>
      </div>
    );
  }
});
