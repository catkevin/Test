import React from 'react';
import WithExample from '../providers/WithExample';
import {Text, Button} from 'react-native';

class Example extends React.Component {
   render(){
      console.log(this.props);
      return(
         <>
            <Button title='Redux' onPress={() => this.props.setName('Kevin')}/>
            <Text>{this.props.nombre}</Text>
         </>
         
      )
   }
}

export default WithExample(Example);