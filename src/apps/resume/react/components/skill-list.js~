MyComponents.Skill = React.createClass({
  render: function() {
           var skills = this.props.skill.value
	   var skillList = this.props.skill.key;  
    return (

      <ul>
	{skills}
      </ul>

    );
  }
});

MyComponents.SkillList = React.createClass({
  render: function() {

      var skills = this.props.Skill.map(function(r,i){
      return <MyComponents.Skill skill={r} key={i}/>
    })

    return (
      <div className="card ">
        <div className="card-content">
          {skills}
        </div>
      </div>
    );
  }
});



