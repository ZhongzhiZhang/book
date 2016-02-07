MyComponents.Skill = React.createClass({
  render: function() {
           var skills = this.props.Skill+'</br>'

    return (
      <div className="card">
      <div className="card-content">
      <ul>
        <li>{skills} </li>
	<li></li>
      </ul>
      </div>
      </div>
    );
  }
});

MyComponents.SkillList = React.createClass({
  render: function() {

      var rates = this.props.SkillList.map(function(r,i){
      return <MyComponents.Rate skill={r} key={0}/>
    })

    return (
      <div className="card ">
        <div className="card-content">
          {skill}
        </div>
      </div>
    );
  }
});



