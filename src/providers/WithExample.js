import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { openPlace } from '../store/actions';

const mapDispatchToProps = (dispatch) => bindActionCreators({
   openPlace
}, dispatch);

const mapStateToProps = ({places:{open}}) => ({
   open
});


export default WrappedComponent => (
   connect(mapStateToProps, mapDispatchToProps)(class extends React.PureComponent{

      state = {
         nombre : ''
      }

      setName(name){
         this.setState({
            nombre : name
         })
      }

      render(){
         return(
            <WrappedComponent
               {...this.props}
               name = 'Duvan'
               setName = {(name) => this.setName(name)}
               nombre = {this.state.nombre}
            />
         )
      }
   })
)