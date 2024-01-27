import PropTypes from 'prop-types';

// basic proptypes

Clock.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  isOn: PropTypes.bool,
  onDisplay: PropTypes.func,
  symbol: PropTypes.symbol,
  user: PropTypes.object,

  name: PropTypes.node //anything
};


//collection proptypes
Clock.propTypes = {
    counts: PropTypes.array,
    users: PropTypes.arrayOf(PropTypes.object),
    alarmColor: PropTypes.oneOf(['red', 'blue']),
    description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Title)
    ]),
   }



//Object proptypes
Clock.propTypes = {
    basicObject: PropTypes.object,
    numbers: PropTypes
    .objectOf(PropTypes.numbers),
    messages: PropTypes
    .instanceOf(Message),
    contactList: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    })
}

//react elements proptypes
Clock.propTypes = {
    displayEle: PropTypes.element
}
//custom proptypes
UserLink.propTypes = {
    userWithName: (props, propName, componentName) => {
        if (!props[propName] || !props[propName].name) {
        return new Error(
        "Invalid " + propName + ": No name property defined for component " + componentName
        )
        }
    }
   }
   
//requiring proptypes
Clock.propTypes = {
    title: PropTypes.name.isRequired,
   }

// default proptypes
Header.defaultProps = {
    title: 'Github activity'
}
